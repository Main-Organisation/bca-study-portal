// BCA STUDY PORTAL - Navigation

const moduleList = document.getElementById("moduleList");
const notesContainer = document.getElementById("notesContainer");
const topicTitle = document.getElementById("topicTitle");
const breadcrumb = document.getElementById("breadcrumb");
const progressText = document.getElementById("progressText");
const pageIndicator = document.getElementById("pageIndicator");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const collapseAllBtn = document.getElementById("collapseAllBtn");

let currentModuleIndex = -1;
let currentTopicIndex = -1;
let currentPageIndex = 0;

function getTotalTopics() {
  return SYLLABUS.reduce((sum, module) => sum + module.topics.length, 0);
}

function getGlobalTopicNumber(moduleIndex, topicIndex) {
  let number = 0;
  for (let i = 0; i < moduleIndex; i++) number += SYLLABUS[i].topics.length;
  return number + topicIndex + 1;
}

function closeAllModules() {
  document.querySelectorAll(".module-button").forEach(button => {
    button.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll(".topic-list").forEach(list => {
    list.classList.remove("open");
  });
}

function openCurrentModule() {
  if (currentModuleIndex < 0) return;
  const buttons = document.querySelectorAll(".module-button");
  const lists = document.querySelectorAll(".topic-list");
  if (buttons[currentModuleIndex] && lists[currentModuleIndex]) {
    buttons[currentModuleIndex].setAttribute("aria-expanded", "true");
    lists[currentModuleIndex].classList.add("open");
  }
}

function updateActiveTopic() {
  document.querySelectorAll(".topic-button").forEach(button => {
    const active =
      Number(button.dataset.moduleIndex) === currentModuleIndex &&
      Number(button.dataset.topicIndex) === currentTopicIndex;
    button.classList.toggle("active", active);
  });
}

function renderSidebar() {
  moduleList.innerHTML = "";

  SYLLABUS.forEach((module, moduleIndex) => {
    const wrapper = document.createElement("section");
    wrapper.className = "module-item";

    const moduleButton = document.createElement("button");
    moduleButton.type = "button";
    moduleButton.className = "module-button";
    moduleButton.setAttribute("aria-expanded", "false");
    moduleButton.innerHTML = `
      <span class="module-title">${module.number}. ${module.title}</span>
      <span class="module-chevron" aria-hidden="true">▼</span>
    `;

    const topicList = document.createElement("div");
    topicList.className = "topic-list";

    module.topics.forEach((topic, topicIndex) => {
      const topicButton = document.createElement("button");
      topicButton.type = "button";
      topicButton.className = "topic-button";
      topicButton.textContent = topic.title;
      topicButton.dataset.moduleIndex = moduleIndex;
      topicButton.dataset.topicIndex = topicIndex;
      topicList.appendChild(topicButton);
    });

    moduleButton.addEventListener("click", () => {
      const isOpen = moduleButton.getAttribute("aria-expanded") === "true";
      closeAllModules();
      if (!isOpen) {
        moduleButton.setAttribute("aria-expanded", "true");
        topicList.classList.add("open");
      }
    });

    wrapper.append(moduleButton, topicList);
    moduleList.appendChild(wrapper);
  });
}

function updatePageDisplay() {
  const module = SYLLABUS[currentModuleIndex];
  const topic = module.topics[currentTopicIndex];
  const pages = NOTES[topic.id] || [placeholder(topic.title)];

  notesContainer.innerHTML = pages[currentPageIndex];
  topicTitle.textContent = topic.title;
  breadcrumb.textContent = `${module.shortTitle} · C Programming`;
  progressText.textContent =
    `Topic ${getGlobalTopicNumber(currentModuleIndex, currentTopicIndex)} of ${getTotalTopics()}`;
  pageIndicator.textContent =
    `Page ${currentPageIndex + 1} of ${pages.length}`;

  updateNavigationButtons();
}

function updateNavigationButtons() {
  if (currentModuleIndex < 0) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  const module = SYLLABUS[currentModuleIndex];
  const topic = module.topics[currentTopicIndex];
  const pages = NOTES[topic.id] || [""];

  prevBtn.disabled =
    currentModuleIndex === 0 &&
    currentTopicIndex === 0 &&
    currentPageIndex === 0;

  nextBtn.disabled =
    currentModuleIndex === SYLLABUS.length - 1 &&
    currentTopicIndex === module.topics.length - 1 &&
    currentPageIndex === pages.length - 1;
}

function openTopic(moduleIndex, topicIndex) {
  currentModuleIndex = moduleIndex;
  currentTopicIndex = topicIndex;
  currentPageIndex = 0;

  closeAllModules();
  openCurrentModule();
  updateActiveTopic();
  updatePageDisplay();
}

function getNextPosition() {
  const module = SYLLABUS[currentModuleIndex];

  if (currentTopicIndex < module.topics.length - 1) {
    return { moduleIndex: currentModuleIndex, topicIndex: currentTopicIndex + 1 };
  }

  if (currentModuleIndex < SYLLABUS.length - 1) {
    return { moduleIndex: currentModuleIndex + 1, topicIndex: 0 };
  }

  return null;
}

function getPreviousPosition() {
  if (currentTopicIndex > 0) {
    return { moduleIndex: currentModuleIndex, topicIndex: currentTopicIndex - 1 };
  }

  if (currentModuleIndex > 0) {
    const moduleIndex = currentModuleIndex - 1;
    return {
      moduleIndex,
      topicIndex: SYLLABUS[moduleIndex].topics.length - 1
    };
  }

  return null;
}

function goNext() {
  if (currentModuleIndex < 0) {
    openTopic(0, 0);
    return;
  }

  const module = SYLLABUS[currentModuleIndex];
  const topic = module.topics[currentTopicIndex];
  const pages = NOTES[topic.id] || [""];

  if (currentPageIndex < pages.length - 1) {
    currentPageIndex++;
    updatePageDisplay();
    return;
  }

  const next = getNextPosition();
  if (next) openTopic(next.moduleIndex, next.topicIndex);
}

function goPrevious() {
  if (currentModuleIndex < 0) return;

  if (currentPageIndex > 0) {
    currentPageIndex--;
    updatePageDisplay();
    return;
  }

  const previous = getPreviousPosition();
  if (!previous) return;

  openTopic(previous.moduleIndex, previous.topicIndex);

  const previousTopic =
    SYLLABUS[previous.moduleIndex].topics[previous.topicIndex];
  const previousPages = NOTES[previousTopic.id] || [""];
  currentPageIndex = previousPages.length - 1;
  updatePageDisplay();
}

moduleList.addEventListener("click", event => {
  const topicButton = event.target.closest(".topic-button");
  if (!topicButton) return;

  openTopic(
    Number(topicButton.dataset.moduleIndex),
    Number(topicButton.dataset.topicIndex)
  );
});

collapseAllBtn.addEventListener("click", closeAllModules);
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

renderSidebar();
updateNavigationButtons();
