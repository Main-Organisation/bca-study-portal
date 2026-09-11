// BCA STUDY PORTAL - Navigation
// Multi-subject study portal.
// Supports:
// 1. Subject notes (C Programming, Time Series, and later subjects)
// 2. C Solutions / Exercises
// 3. Topic Search
// 4. Previous / Next Navigation
// 5. Mobile Sidebar
// 6. Doubt Section

// ==========================================================
// DOM ELEMENTS
// ==========================================================

const topicSearch = document.getElementById("topicSearch");

const moduleList = document.getElementById("moduleList");
const solutionModuleList =
  document.getElementById("solutionModuleList");

const notesContainer =
  document.getElementById("notesContainer");

const topicTitle =
  document.getElementById("topicTitle");

const breadcrumb =
  document.getElementById("breadcrumb");

const headerSubjectLabel =
  document.getElementById("headerSubjectLabel");

const progressText =
  document.getElementById("progressText");

const pageIndicator =
  document.getElementById("pageIndicator");

const prevBtn =
  document.getElementById("prevBtn");

const nextBtn =
  document.getElementById("nextBtn");

const floatingPager =
  document.getElementById("floatingPager");

const floatPrevBtn =
  document.getElementById("floatPrevBtn");

const floatNextBtn =
  document.getElementById("floatNextBtn");

const collapseAllBtn =
  document.getElementById("collapseAllBtn");

const collapseAllSolutionsBtn =
  document.getElementById("collapseAllSolutionsBtn");

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const sidebar =
  document.querySelector(".sidebar");

const doubtMenuBtn =
  document.getElementById("doubtMenuBtn");

const doubtContainer =
  document.getElementById("doubtContainer");

const subjectNavList =
  document.getElementById("subjectNavList");


// ==========================================================
// MAIN NOTES STATE
// ==========================================================

let currentModuleIndex = -1;
let currentTopicIndex = -1;
let currentPageIndex = 0;

const initialNotesHTML = notesContainer.innerHTML;
const initialTopicTitle = topicTitle.textContent;
const initialProgressText = progressText.textContent;
const initialPageIndicator = pageIndicator.textContent;

let activeSyllabus = SYLLABUS;
let activeNotes = NOTES;
let activePracticalSyllabus = SOLUTION_SYLLABUS;
let activePracticalSolutions = SOLUTIONS;


function getActiveSubject() {
  return SUBJECTS.find(item => item.id === currentSubjectId) || SUBJECTS[0];
}


function getSubjectIdFromQuery() {
  try {
    const requested = new URLSearchParams(window.location.search).get(
      "subject"
    );

    if (!requested) {
      return null;
    }

    const match = SUBJECTS.find(item => item.id === requested);

    return match ? match.id : null;
  } catch (error) {
    return null;
  }
}


function applySubjectFromQuery() {
  const requestedId = getSubjectIdFromQuery();

  if (!requestedId) {
    currentSubjectId = "c-programming";
    applyActiveSubject(getActiveSubject());
    return;
  }

  currentSubjectId = requestedId;
  applyActiveSubject(getActiveSubject());
}


function getAcademicUnitLabel(module) {
  if (!module || !module.id) {
    return "";
  }

  const subject = getActiveSubject();
  const unitMap = subject && subject.notesUnitByModuleId;

  if (!unitMap) {
    return "";
  }

  return unitMap[module.id] || "";
}


function applyActiveSubject(subject) {
  activeSyllabus = subject.syllabus || [];
  activeNotes = subject.notes || {};
  activePracticalSyllabus = subject.practicalSyllabus || [];
  activePracticalSolutions = subject.practicalSolutions || {};
}


function getWelcomeTitle(subject) {
  const active = subject || getActiveSubject();

  if (active && active.welcomeTitle) {
    return active.welcomeTitle;
  }

  const title = (active && active.title) || "BCA Study Portal";

  return `Master ${title} — One Concept at a Time`;
}


function getSubjectBreadcrumb(subject) {
  const active = subject || getActiveSubject();
  const title = (active && active.title) || "BCA Study Portal";

  return `BCA 1st Year · ${title}`;
}


function updateSubjectBreadcrumb(subject) {
  if (!breadcrumb) return;

  breadcrumb.textContent = getSubjectBreadcrumb(subject);
}


function updateHeaderSubjectLabel(subject) {
  if (!headerSubjectLabel) return;

  const active = subject || getActiveSubject();

  headerSubjectLabel.textContent =
    (active && active.title) || "";
}


function updateDocumentTitle(subject) {
  const onHome =
    activeLearningMode === "notes" &&
    currentModuleIndex < 0 &&
    currentSolutionModuleIndex < 0;

  if (onHome) {
    document.title = "BCA Study Portal — Notes & Practicals";
    return;
  }

  const active = subject || getActiveSubject();
  const title = (active && active.title) || "BCA Study Portal";

  document.title = `BCA Study Portal — ${title}`;
}


function updateDoubtCopy(subject) {
  const doubtSubjectCopy =
    document.getElementById("doubtSubjectCopy");

  if (!doubtSubjectCopy) return;

  const active = subject || getActiveSubject();
  const title = (active && active.title) || "this subject";

  doubtSubjectCopy.textContent =
    `Ask your question about ${title}.`;
}


function hasActiveTopics() {
  return activeSyllabus.some(
    module => module.topics && module.topics.length > 0
  );
}


function hasActivePracticalTopics() {
  return activePracticalSyllabus.some(
    module => module.topics && module.topics.length > 0
  );
}


function getFirstSyllabusPosition(syllabus) {
  if (!syllabus) {
    return null;
  }

  for (let moduleIndex = 0; moduleIndex < syllabus.length; moduleIndex++) {
    const module = syllabus[moduleIndex];

    if (module && module.topics && module.topics.length > 0) {
      return {
        moduleIndex,
        topicIndex: 0
      };
    }
  }

  return null;
}


function hasStoredNotesTopic() {
  const module = activeSyllabus[currentModuleIndex];

  return !!(
    module &&
    module.topics &&
    module.topics[currentTopicIndex]
  );
}


function hasStoredPracticalTopic() {
  const module =
    activePracticalSyllabus[currentSolutionModuleIndex];

  return !!(
    module &&
    module.topics &&
    module.topics[currentSolutionTopicIndex]
  );
}


function hideDoubtView() {
  notesContainer.hidden = false;

  if (doubtContainer) {
    doubtContainer.hidden = true;
  }

  if (doubtMenuBtn) {
    doubtMenuBtn.classList.remove("active");
  }
}


// ==========================================================
// SOLUTIONS STATE
// ==========================================================

let solutionMode = false;

let currentSolutionModuleIndex = -1;
let currentSolutionTopicIndex = -1;
let currentSolutionPageIndex = 0;

let activeLearningMode = "notes";


// ==========================================================
// MAIN NOTES HELPERS
// ==========================================================

function countSyllabusTopics(syllabus) {
  return (syllabus || []).reduce(
    (sum, module) => sum + (module.topics ? module.topics.length : 0),
    0
  );
}


function getTotalTopics() {
  return countSyllabusTopics(activeSyllabus);
}


function countAcademicGroups(subject) {
  if (!subject) {
    return 0;
  }

  if (subject.notesUnitByModuleId) {
    return new Set(Object.values(subject.notesUnitByModuleId)).size;
  }

  return (subject.syllabus || []).length;
}


function getSubjectStructureLabel(subject) {
  const groupCount = countAcademicGroups(subject);

  if (subject && subject.notesUnitByModuleId) {
    return `${groupCount} Academic Unit${groupCount === 1 ? "" : "s"}`;
  }

  return `${groupCount} Module${groupCount === 1 ? "" : "s"}`;
}


function getGlobalTopicNumber(moduleIndex, topicIndex) {
  let number = 0;

  for (let i = 0; i < moduleIndex; i++) {
    number += activeSyllabus[i].topics.length;
  }

  return number + topicIndex + 1;
}


// ==========================================================
// SIDEBAR MODULE CONTROL
// ==========================================================

function closeAllMainModules() {
  moduleList
    .querySelectorAll(".module-button")
    .forEach(button => {
      button.setAttribute("aria-expanded", "false");
    });

  moduleList
    .querySelectorAll(".topic-list")
    .forEach(list => {
      list.classList.remove("open");
    });
}


function closeAllSolutionModules() {
  solutionModuleList
    .querySelectorAll(".module-button")
    .forEach(button => {
      button.setAttribute("aria-expanded", "false");
    });

  solutionModuleList
    .querySelectorAll(".topic-list")
    .forEach(list => {
      list.classList.remove("open");
    });
}


function closeAllModules() {
  closeAllMainModules();
  closeAllSolutionModules();
}


function openCurrentMainModule() {
  if (currentModuleIndex < 0) return;

  const buttons =
    moduleList.querySelectorAll(".module-button");

  const lists =
    moduleList.querySelectorAll(".topic-list");

  if (
    buttons[currentModuleIndex] &&
    lists[currentModuleIndex]
  ) {
    buttons[currentModuleIndex]
      .setAttribute("aria-expanded", "true");

    lists[currentModuleIndex]
      .classList.add("open");
  }
}


function openCurrentSolutionModule() {
  if (currentSolutionModuleIndex < 0) return;

  const buttons =
    solutionModuleList.querySelectorAll(".module-button");

  const lists =
    solutionModuleList.querySelectorAll(".topic-list");

  if (
    buttons[currentSolutionModuleIndex] &&
    lists[currentSolutionModuleIndex]
  ) {
    buttons[currentSolutionModuleIndex]
      .setAttribute("aria-expanded", "true");

    lists[currentSolutionModuleIndex]
      .classList.add("open");
  }
}


// ==========================================================
// ACTIVE TOPIC CONTROL
// ==========================================================

function updateActiveTopic() {
  moduleList
    .querySelectorAll(".topic-button")
    .forEach(button => {

      const active =
        Number(button.dataset.moduleIndex) ===
          currentModuleIndex &&
        Number(button.dataset.topicIndex) ===
          currentTopicIndex;

      button.classList.toggle("active", active);
    });
}


function updateActiveSolutionTopic() {
  solutionModuleList
    .querySelectorAll(".topic-button")
    .forEach(button => {

      const active =
        Number(button.dataset.solutionModuleIndex) ===
          currentSolutionModuleIndex &&
        Number(button.dataset.solutionTopicIndex) ===
          currentSolutionTopicIndex;

      button.classList.toggle("active", active);
    });
}


function clearAllActiveTopics() {
  moduleList
    .querySelectorAll(".topic-button")
    .forEach(button => {
      button.classList.remove("active");
    });

  solutionModuleList
    .querySelectorAll(".topic-button")
    .forEach(button => {
      button.classList.remove("active");
    });
}


// ==========================================================
// RENDER NOTES SIDEBAR
// ==========================================================

function renderSidebar() {

  moduleList.innerHTML = "";

  let currentUnitGroup = null;
  let currentUnitLabel = "";

  activeSyllabus.forEach((module, moduleIndex) => {

    const unitLabel = getAcademicUnitLabel(module);
    const parent = moduleList;

    if (unitLabel) {
      if (!currentUnitGroup || currentUnitLabel !== unitLabel) {
        currentUnitGroup = document.createElement("section");
        currentUnitGroup.className = "academic-unit-group";

        const unitHeading = document.createElement("p");
        unitHeading.className = "academic-unit-label";
        unitHeading.textContent = unitLabel;

        currentUnitGroup.appendChild(unitHeading);
        moduleList.appendChild(currentUnitGroup);
        currentUnitLabel = unitLabel;
      }
    } else {
      currentUnitGroup = null;
      currentUnitLabel = "";
    }

    const listParent = currentUnitGroup || parent;

    const wrapper =
      document.createElement("section");

    wrapper.className = "module-item";


    const moduleButton =
      document.createElement("button");

    moduleButton.type = "button";
    moduleButton.className = "module-button";

    moduleButton.setAttribute(
      "aria-expanded",
      "false"
    );

    const visibleTitle = unitLabel
      ? module.title
      : `${module.number}. ${module.title}`;

    moduleButton.innerHTML = `
      <span class="module-title">
        ${visibleTitle}
      </span>

      <span
        class="module-chevron"
        aria-hidden="true"
      >
        ▼
      </span>
    `;


    const topicList =
      document.createElement("div");

    topicList.className = "topic-list";


    module.topics.forEach(
      (topic, topicIndex) => {

        const topicButton =
          document.createElement("button");

        topicButton.type = "button";

        topicButton.className =
          "topic-button";

        topicButton.textContent =
          topic.title;

        topicButton.dataset.moduleIndex =
          moduleIndex;

        topicButton.dataset.topicIndex =
          topicIndex;

        topicList.appendChild(
          topicButton
        );
      }
    );


    moduleButton.addEventListener(
      "click",
      () => {

        const isOpen =
          moduleButton.getAttribute(
            "aria-expanded"
          ) === "true";

        solutionMode = false;

        closeAllMainModules();

        if (!isOpen) {

          moduleButton.setAttribute(
            "aria-expanded",
            "true"
          );

          topicList.classList.add("open");
        }
      }
    );


    wrapper.append(
      moduleButton,
      topicList
    );

    listParent.appendChild(wrapper);
  });
}


// ==========================================================
// RENDER C SOLUTIONS SIDEBAR
// ==========================================================

function renderSolutionSidebar() {

  solutionModuleList.innerHTML = "";

  if (!hasActivePracticalTopics()) {
    const emptyState = document.createElement("p");
    emptyState.className = "practical-empty-state";
    emptyState.textContent =
      "Practical exercises will be added soon.";
    solutionModuleList.appendChild(emptyState);
    return;
  }

  activePracticalSyllabus.forEach(
    (module, moduleIndex) => {

      const wrapper =
        document.createElement("section");

      wrapper.className =
        "module-item";


      const moduleButton =
        document.createElement("button");

      moduleButton.type = "button";

      moduleButton.className =
        "module-button";

      moduleButton.setAttribute(
        "aria-expanded",
        "false"
      );

      moduleButton.innerHTML = `
        <span class="module-title">
          ${module.number}. ${module.title}
        </span>

        <span
          class="module-chevron"
          aria-hidden="true"
        >
          ▼
        </span>
      `;


      const topicList =
        document.createElement("div");

      topicList.className =
        "topic-list";


      module.topics.forEach(
        (topic, topicIndex) => {

          const topicButton =
            document.createElement("button");

          topicButton.type = "button";

          topicButton.className =
            "topic-button";

          topicButton.textContent =
            topic.title;

          topicButton.dataset.solutionModuleIndex =
            moduleIndex;

          topicButton.dataset.solutionTopicIndex =
            topicIndex;

          topicList.appendChild(
            topicButton
          );
        }
      );


      moduleButton.addEventListener(
        "click",
        () => {

          const isOpen =
            moduleButton.getAttribute(
              "aria-expanded"
            ) === "true";

          solutionMode = true;

          closeAllSolutionModules();

          if (!isOpen) {

            moduleButton.setAttribute(
              "aria-expanded",
              "true"
            );

            topicList.classList.add("open");
          }
        }
      );


      wrapper.append(
        moduleButton,
        topicList
      );

      solutionModuleList
        .appendChild(wrapper);
    }
  );
}


// ==========================================================
// LEARNING MODE — NOTES | PRACTICAL
// ==========================================================

function applyLearningModeUI() {
  const isNotes = activeLearningMode === "notes";
  const notesPanel = document.getElementById("notesSidebarPanel");
  const practicalPanel = document.getElementById("practicalSidebarPanel");

  if (notesPanel) {
    notesPanel.hidden = !isNotes;
  }

  if (practicalPanel) {
    practicalPanel.hidden = isNotes;
  }

  document.querySelectorAll(".mode-button").forEach(button => {
    const isActive = button.dataset.mode === activeLearningMode;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  if (topicSearch) {
    if (isNotes) {
      topicSearch.placeholder = "Search notes...";
      topicSearch.setAttribute("aria-label", "Search notes");
    } else {
      topicSearch.placeholder = "Search practicals...";
      topicSearch.setAttribute("aria-label", "Search practicals");
    }
  }
}


function showNotesWelcomeDisplay() {
  solutionMode = false;
  hideDoubtView();

  notesContainer.innerHTML = initialNotesHTML;
  topicTitle.textContent = getWelcomeTitle();
  updateSubjectBreadcrumb();
  progressText.textContent = initialProgressText;
  pageIndicator.textContent = initialPageIndicator;

  updateActiveTopic();
  updateNavigationButtons();
  updateDocumentTitle();
}


function showPracticalIdleDisplay() {
  solutionMode = false;
  hideDoubtView();

  const subject = getActiveSubject();
  const heading =
    (subject && subject.practicalTitle) || "PRACTICAL";

  if (!hasActivePracticalTopics()) {
    notesContainer.innerHTML =
      '<div class="welcome-state"><p>Practical exercises will be added soon.</p></div>';
    progressText.textContent =
      "Practical exercises will be added soon.";
  } else {
    notesContainer.innerHTML =
      '<div class="welcome-state"><p>Choose a practical from the sidebar to begin.</p></div>';
    progressText.textContent = initialProgressText;
  }

  topicTitle.textContent = heading;
  updateSubjectBreadcrumb();
  pageIndicator.textContent = "—";

  updateActiveSolutionTopic();
  updateNavigationButtons();
}


function restoreNotesContent() {
  solutionMode = false;
  hideDoubtView();
  closeAllMainModules();
  openCurrentMainModule();
  updateActiveTopic();
  updatePageDisplay();
}


function restorePracticalContent() {
  solutionMode = true;
  hideDoubtView();
  closeAllSolutionModules();
  openCurrentSolutionModule();
  updateActiveSolutionTopic();
  updateSolutionPageDisplay();
}


function syncContentToLearningMode() {
  if (activeLearningMode === "notes") {
    if (hasStoredNotesTopic()) {
      restoreNotesContent();
    } else {
      showNotesWelcomeDisplay();
    }
    return;
  }

  if (hasStoredPracticalTopic()) {
    restorePracticalContent();
  } else {
    showPracticalIdleDisplay();
  }
}


function setLearningMode(mode) {
  if (mode !== "notes" && mode !== "practical") {
    return;
  }

  activeLearningMode = mode;

  applyLearningModeUI();

  if (topicSearch) {
    topicSearch.value = "";
  }

  resetTopicTreeDisplay(moduleList);
  resetTopicTreeDisplay(solutionModuleList);
  filterTopics();
  syncContentToLearningMode();
}


// ==========================================================
// SEARCH — ACTIVE NOTES SYLLABUS
// ==========================================================

function resetTopicTreeDisplay(listRoot) {
  if (!listRoot) return;

  listRoot.querySelectorAll(".module-item").forEach(moduleItem => {
    moduleItem.style.display = "";

    moduleItem.querySelectorAll(".topic-button").forEach(topicButton => {
      topicButton.style.display = "";
    });
  });

  listRoot.querySelectorAll(".academic-unit-group").forEach(group => {
    group.style.display = "";
  });
}


function filterTopicTree(listRoot, searchTerm) {
  if (!listRoot) return;

  listRoot
    .querySelectorAll(".module-item")
    .forEach(moduleItem => {

      const topics =
        moduleItem.querySelectorAll(
          ".topic-button"
        );

      let moduleHasMatch = false;


      topics.forEach(topicButton => {

        const topicText =
          topicButton.textContent
            .toLowerCase();

        const matches =
          searchTerm === "" ||
          topicText.includes(searchTerm);

        topicButton.style.display =
          matches ? "" : "none";

        if (matches) {
          moduleHasMatch = true;
        }
      });


      moduleItem.style.display =
        moduleHasMatch ? "" : "none";


      const moduleButton =
        moduleItem.querySelector(
          ".module-button"
        );

      const topicList =
        moduleItem.querySelector(
          ".topic-list"
        );


      if (
        searchTerm &&
        moduleHasMatch
      ) {

        moduleButton.setAttribute(
          "aria-expanded",
          "true"
        );

        topicList.classList.add(
          "open"
        );
      }


      if (!searchTerm) {

        moduleButton.setAttribute(
          "aria-expanded",
          "false"
        );

        topicList.classList.remove(
          "open"
        );
      }
    });

  listRoot.querySelectorAll(".academic-unit-group").forEach(group => {
    const hasVisibleModule = [...group.querySelectorAll(".module-item")].some(
      item => item.style.display !== "none"
    );

    group.style.display = hasVisibleModule ? "" : "none";
  });
}


function filterTopics() {

  if (!topicSearch) return;

  const searchTerm =
    topicSearch.value
      .trim()
      .toLowerCase();

  const listRoot =
    activeLearningMode === "practical"
      ? solutionModuleList
      : moduleList;

  filterTopicTree(listRoot, searchTerm);
}


// ==========================================================
// DISPLAY NOTES
// ==========================================================

function updatePageDisplay() {

  notesContainer.hidden = false;

  doubtContainer.hidden = true;

  if (doubtMenuBtn) {
    doubtMenuBtn.classList.remove("active");
  }


  const module =
    activeSyllabus[currentModuleIndex];

  if (!module || !module.topics || !module.topics[currentTopicIndex]) {
    return;
  }

  const topic =
    module.topics[currentTopicIndex];

  const pages =
    activeNotes[topic.id] ||
    [placeholder(topic.title)];


  notesContainer.innerHTML =
    pages[currentPageIndex];


  topicTitle.textContent =
    topic.title;


  updateSubjectBreadcrumb();


  progressText.textContent =
    `Topic ${
      getGlobalTopicNumber(
        currentModuleIndex,
        currentTopicIndex
      )
    } of ${getTotalTopics()}`;


  pageIndicator.textContent =
    `Page ${
      currentPageIndex + 1
    } of ${pages.length}`;


  updateNavigationButtons();
  updateDocumentTitle();
}


// ==========================================================
// DISPLAY C SOLUTION
// ==========================================================

function updateSolutionPageDisplay() {

  notesContainer.hidden = false;

  doubtContainer.hidden = true;

  if (doubtMenuBtn) {
    doubtMenuBtn.classList.remove("active");
  }


  const module =
    activePracticalSyllabus[
      currentSolutionModuleIndex
    ];

  if (!module || !module.topics || !module.topics[currentSolutionTopicIndex]) {
    return;
  }

  const topic =
    module.topics[
      currentSolutionTopicIndex
    ];


  const pages =
    activePracticalSolutions[topic.id] || [
      `
        <h2>${topic.title}</h2>

        <div class="note-callout">
          <p>
            Exercises for this topic
            will be added soon.
          </p>
        </div>
      `
    ];


  notesContainer.innerHTML =
    pages[currentSolutionPageIndex];


  topicTitle.textContent =
    topic.title;


  updateSubjectBreadcrumb();


  progressText.textContent =
    `Exercise ${
      currentSolutionPageIndex + 1
    } of ${pages.length}`;


  pageIndicator.textContent =
    `Exercise ${
      currentSolutionPageIndex + 1
    } of ${pages.length}`;


  updateNavigationButtons();
  updateDocumentTitle();
}

// ==========================================================
// NAVIGATION BUTTON STATE
// ==========================================================

function getSyllabusTopicTitle(syllabus, position) {
  if (!position || !syllabus) {
    return "";
  }

  const module = syllabus[position.moduleIndex];

  if (!module || !module.topics || !module.topics[position.topicIndex]) {
    return "";
  }

  return module.topics[position.topicIndex].title || "";
}


function resetPagerLabels() {
  prevBtn.textContent = "← Previous";
  nextBtn.textContent = "Next →";
  prevBtn.removeAttribute("title");
  nextBtn.removeAttribute("title");
  prevBtn.setAttribute("aria-label", "Previous");
  nextBtn.setAttribute("aria-label", "Next");
}


function setPagerButtonLabel(button, visibleLabel, accessibleName) {
  button.textContent = visibleLabel;
  button.setAttribute("aria-label", accessibleName);

  if (accessibleName && accessibleName !== "Previous" && accessibleName !== "Next") {
    button.title = accessibleName;
  } else {
    button.removeAttribute("title");
  }
}


function updatePagerDestinationLabels() {
  resetPagerLabels();

  if (activeLearningMode === "practical") {
    if (!hasStoredPracticalTopic()) {
      return;
    }

    const solutionModule =
      activePracticalSyllabus[currentSolutionModuleIndex];
    const solutionTopic =
      solutionModule.topics[currentSolutionTopicIndex];
    const solutionPages =
      activePracticalSolutions[solutionTopic.id] || [""];

    if (!prevBtn.disabled && currentSolutionPageIndex === 0) {
      const previousTitle = getSyllabusTopicTitle(
        activePracticalSyllabus,
        getPreviousPracticalPosition()
      );

      if (previousTitle) {
        setPagerButtonLabel(
          prevBtn,
          `← ${previousTitle}`,
          `Previous: ${previousTitle}`
        );
      }
    }

    if (
      !nextBtn.disabled &&
      currentSolutionPageIndex === solutionPages.length - 1
    ) {
      const nextTitle = getSyllabusTopicTitle(
        activePracticalSyllabus,
        getNextPracticalPosition()
      );

      if (nextTitle) {
        setPagerButtonLabel(
          nextBtn,
          `${nextTitle} →`,
          `Next: ${nextTitle}`
        );
      }
    }

    return;
  }

  if (!hasStoredNotesTopic()) {
    return;
  }

  const module = activeSyllabus[currentModuleIndex];
  const topic = module.topics[currentTopicIndex];
  const pages = activeNotes[topic.id] || [""];

  if (!prevBtn.disabled && currentPageIndex === 0) {
    const previousTitle = getSyllabusTopicTitle(
      activeSyllabus,
      getPreviousPosition()
    );

    if (previousTitle) {
      setPagerButtonLabel(
        prevBtn,
        `← ${previousTitle}`,
        `Previous: ${previousTitle}`
      );
    }
  }

  if (!nextBtn.disabled && currentPageIndex === pages.length - 1) {
    const nextTitle = getSyllabusTopicTitle(
      activeSyllabus,
      getNextPosition()
    );

    if (nextTitle) {
      setPagerButtonLabel(
        nextBtn,
        `${nextTitle} →`,
        `Next: ${nextTitle}`
      );
    }
  }
}


function updateNavigationButtons() {

  if (activeLearningMode === "practical") {

    if (!hasStoredPracticalTopic()) {
      prevBtn.disabled = true;
      nextBtn.disabled = !getFirstSyllabusPosition(activePracticalSyllabus);
      updatePagerDestinationLabels();
      syncFloatingPager();
      return;
    }

    const solutionModule =
      activePracticalSyllabus[currentSolutionModuleIndex];

    const solutionTopic =
      solutionModule.topics[currentSolutionTopicIndex];

    const solutionPages =
      activePracticalSolutions[solutionTopic.id] || [""];

    prevBtn.disabled =
      currentSolutionModuleIndex === 0 &&
      currentSolutionTopicIndex === 0 &&
      currentSolutionPageIndex === 0;

    nextBtn.disabled =
      currentSolutionModuleIndex === activePracticalSyllabus.length - 1 &&
      currentSolutionTopicIndex === solutionModule.topics.length - 1 &&
      currentSolutionPageIndex === solutionPages.length - 1;

    updatePagerDestinationLabels();
    syncFloatingPager();
    return;
  }


  if (!hasStoredNotesTopic()) {
    prevBtn.disabled = true;
    nextBtn.disabled = !getFirstSyllabusPosition(activeSyllabus);
    updatePagerDestinationLabels();
    syncFloatingPager();
    return;
  }


  const module = activeSyllabus[currentModuleIndex];
  const topic = module.topics[currentTopicIndex];
  const pages = activeNotes[topic.id] || [""];

  prevBtn.disabled =
    currentModuleIndex === 0 &&
    currentTopicIndex === 0 &&
    currentPageIndex === 0;

  nextBtn.disabled =
    currentModuleIndex === activeSyllabus.length - 1 &&
    currentTopicIndex === module.topics.length - 1 &&
    currentPageIndex === pages.length - 1;

  updatePagerDestinationLabels();
  syncFloatingPager();
}


function getReaderNavSignature() {
  return [
    activeLearningMode,
    currentModuleIndex,
    currentTopicIndex,
    currentPageIndex,
    currentSolutionModuleIndex,
    currentSolutionTopicIndex,
    currentSolutionPageIndex,
    solutionMode
  ].join(":");
}


function prefersReducedMotion() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}


function scrollToReaderTop() {
  const target =
    document.querySelector(".content-topbar") ||
    topicTitle ||
    document.querySelector(".content-area");

  const behavior = prefersReducedMotion() ? "auto" : "smooth";

  if (!target) {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const header = document.querySelector(".site-header");
  const subjectNav = document.querySelector(".subject-nav");
  const offset =
    (header ? header.offsetHeight : 0) +
    (subjectNav ? subjectNav.offsetHeight : 0) +
    8;

  const top = Math.max(
    0,
    target.getBoundingClientRect().top + window.pageYOffset - offset
  );

  window.scrollTo({ top, behavior });
}


function maybeScrollAfterNavigation(beforeSignature) {
  if (getReaderNavSignature() === beforeSignature) {
    return;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(scrollToReaderTop);
  });
}


function syncFloatingPager() {
  if (!floatingPager || !floatPrevBtn || !floatNextBtn) {
    return;
  }

  const doubtOpen = doubtContainer && !doubtContainer.hidden;
  const topicActive =
    activeLearningMode === "practical"
      ? hasStoredPracticalTopic()
      : hasStoredNotesTopic();

  floatingPager.hidden = doubtOpen || !topicActive;

  floatPrevBtn.disabled = prevBtn.disabled;
  floatNextBtn.disabled = nextBtn.disabled;

  const prevLabel = prevBtn.getAttribute("aria-label") || "Previous";
  const nextLabel = nextBtn.getAttribute("aria-label") || "Next";

  floatPrevBtn.setAttribute("aria-label", prevLabel);
  floatNextBtn.setAttribute("aria-label", nextLabel);

  if (prevBtn.title) {
    floatPrevBtn.title = prevBtn.title;
  } else {
    floatPrevBtn.removeAttribute("title");
  }

  if (nextBtn.title) {
    floatNextBtn.title = nextBtn.title;
  } else {
    floatNextBtn.removeAttribute("title");
  }
}


// ==========================================================
// DOUBT SECTION
// ==========================================================

function openDoubt() {

  solutionMode = false;


  notesContainer.hidden = true;

  doubtContainer.hidden = false;


  doubtMenuBtn.classList.add(
    "active"
  );


  topicTitle.textContent =
    "Have Any Doubt?";


  updateSubjectBreadcrumb();
  updateDoubtCopy();


  progressText.textContent =
    "Ask your question and send it to us.";


  pageIndicator.textContent =
    "Doubt";


  prevBtn.disabled = true;

  nextBtn.disabled = true;

  updatePagerDestinationLabels();
  syncFloatingPager();


  clearAllActiveTopics();

  closeAllModules();


  if (window.innerWidth <= 900) {

    sidebar.classList.remove(
      "mobile-open"
    );

    mobileMenuBtn.setAttribute(
      "aria-expanded",
      "false"
    );
  }
}


// ==========================================================
// OPEN NOTES TOPIC
// ==========================================================

function openTopic(
  moduleIndex,
  topicIndex
) {

  const module = activeSyllabus[moduleIndex];

  if (!module || !module.topics || !module.topics[topicIndex]) {
    return;
  }

  solutionMode = false;


  currentModuleIndex =
    moduleIndex;

  currentTopicIndex =
    topicIndex;

  currentPageIndex = 0;


  closeAllMainModules();

  openCurrentMainModule();


  updateActiveSolutionTopic();

  updateActiveTopic();


  updatePageDisplay();


  if (window.innerWidth <= 900) {

    sidebar.classList.remove(
      "mobile-open"
    );

    mobileMenuBtn.setAttribute(
      "aria-expanded",
      "false"
    );
  }
}


// ==========================================================
// OPEN C SOLUTION TOPIC
// ==========================================================

function openSolutionTopic(
  moduleIndex,
  topicIndex
) {

  const module = activePracticalSyllabus[moduleIndex];

  if (!module || !module.topics || !module.topics[topicIndex]) {
    return;
  }

  solutionMode = true;


  currentSolutionModuleIndex =
    moduleIndex;

  currentSolutionTopicIndex =
    topicIndex;

  currentSolutionPageIndex =
    0;


  closeAllSolutionModules();

  openCurrentSolutionModule();


  updateActiveTopic();

  updateActiveSolutionTopic();


  updateSolutionPageDisplay();


  if (window.innerWidth <= 900) {

    sidebar.classList.remove(
      "mobile-open"
    );

    mobileMenuBtn.setAttribute(
      "aria-expanded",
      "false"
    );
  }
}


// ==========================================================
// MAIN NOTES — NEXT POSITION
// ==========================================================

function getNextPosition() {

  const module =
    activeSyllabus[currentModuleIndex];

  if (!module || !module.topics) {
    return null;
  }


  if (
    currentTopicIndex <
    module.topics.length - 1
  ) {

    return {
      moduleIndex:
        currentModuleIndex,

      topicIndex:
        currentTopicIndex + 1
    };
  }


  if (
    currentModuleIndex <
    activeSyllabus.length - 1
  ) {

    return {
      moduleIndex:
        currentModuleIndex + 1,

      topicIndex: 0
    };
  }


  return null;
}


// ==========================================================
// MAIN NOTES — PREVIOUS POSITION
// ==========================================================

function getPreviousPosition() {

  if (currentTopicIndex > 0) {

    return {
      moduleIndex:
        currentModuleIndex,

      topicIndex:
        currentTopicIndex - 1
    };
  }


  if (currentModuleIndex > 0) {

    const moduleIndex =
      currentModuleIndex - 1;


    return {
      moduleIndex,

      topicIndex:
        activeSyllabus[
          moduleIndex
        ].topics.length - 1
    };
  }


  return null;
}


function getNextPracticalPosition() {
  const module =
    activePracticalSyllabus[currentSolutionModuleIndex];

  if (!module || !module.topics) {
    return null;
  }

  if (currentSolutionTopicIndex < module.topics.length - 1) {
    return {
      moduleIndex: currentSolutionModuleIndex,
      topicIndex: currentSolutionTopicIndex + 1
    };
  }

  if (currentSolutionModuleIndex < activePracticalSyllabus.length - 1) {
    return {
      moduleIndex: currentSolutionModuleIndex + 1,
      topicIndex: 0
    };
  }

  return null;
}


function getPreviousPracticalPosition() {
  if (currentSolutionTopicIndex > 0) {
    return {
      moduleIndex: currentSolutionModuleIndex,
      topicIndex: currentSolutionTopicIndex - 1
    };
  }

  if (currentSolutionModuleIndex > 0) {
    const moduleIndex = currentSolutionModuleIndex - 1;

    return {
      moduleIndex,
      topicIndex:
        activePracticalSyllabus[moduleIndex].topics.length - 1
    };
  }

  return null;
}


// ==========================================================
// NEXT
// ==========================================================

function goNext() {
  const before = getReaderNavSignature();

  try {

  if (activeLearningMode === "practical") {

    if (!hasStoredPracticalTopic()) {
      const firstPractical = getFirstSyllabusPosition(activePracticalSyllabus);

      if (firstPractical) {
        openSolutionTopic(
          firstPractical.moduleIndex,
          firstPractical.topicIndex
        );
      }

      return;
    }

    const module =
      activePracticalSyllabus[
        currentSolutionModuleIndex
      ];

    if (!module || !module.topics || !module.topics[currentSolutionTopicIndex]) {
      return;
    }

    const topic =
      module.topics[
        currentSolutionTopicIndex
      ];

    const pages =
      activePracticalSolutions[topic.id] || [""];


    // Next page within current solution
    if (
      currentSolutionPageIndex <
      pages.length - 1
    ) {

      currentSolutionPageIndex++;

      updateSolutionPageDisplay();

      return;
    }


    // Next solution topic
    if (
      currentSolutionTopicIndex <
      module.topics.length - 1
    ) {

      openSolutionTopic(
        currentSolutionModuleIndex,
        currentSolutionTopicIndex + 1
      );

      return;
    }


    // Next solution module
    if (
      currentSolutionModuleIndex <
      activePracticalSyllabus.length - 1
    ) {

      openSolutionTopic(
        currentSolutionModuleIndex + 1,
        0
      );
    }


    return;
  }


  // --------------------------------------------------------
  // NOTES / ACTIVE SUBJECT
  // --------------------------------------------------------

  if (!hasStoredNotesTopic()) {
    const firstTopic = getFirstSyllabusPosition(activeSyllabus);

    if (firstTopic) {
      openTopic(firstTopic.moduleIndex, firstTopic.topicIndex);
    }

    return;
  }


  const module =
    activeSyllabus[currentModuleIndex];

  if (!module || !module.topics || !module.topics[currentTopicIndex]) {
    return;
  }

  const topic =
    module.topics[currentTopicIndex];

  const pages =
    activeNotes[topic.id] || [""];


  // Next page within topic
  if (
    currentPageIndex <
    pages.length - 1
  ) {

    currentPageIndex++;

    updatePageDisplay();

    return;
  }


  // Next topic
  const next =
    getNextPosition();


  if (next) {

    openTopic(
      next.moduleIndex,
      next.topicIndex
    );
  }
  } finally {
    maybeScrollAfterNavigation(before);
  }
}


// ==========================================================
// PREVIOUS
// ==========================================================

function goPrevious() {
  const before = getReaderNavSignature();

  try {

  if (activeLearningMode === "practical") {

    if (!hasStoredPracticalTopic()) {
      return;
    }

    if (
      currentSolutionPageIndex > 0
    ) {

      currentSolutionPageIndex--;

      updateSolutionPageDisplay();

      return;
    }


    // Previous solution topic
    if (
      currentSolutionTopicIndex > 0
    ) {

      const previousTopicIndex =
        currentSolutionTopicIndex - 1;


      openSolutionTopic(
        currentSolutionModuleIndex,
        previousTopicIndex
      );


      const previousModule =
        activePracticalSyllabus[
          currentSolutionModuleIndex
        ];


      const previousTopic =
        previousModule.topics[
          previousTopicIndex
        ];


      const previousPages =
        activePracticalSolutions[
          previousTopic.id
        ] || [""];


      currentSolutionPageIndex =
        previousPages.length - 1;


      updateSolutionPageDisplay();

      return;
    }


    // Previous solution module
    if (
      currentSolutionModuleIndex > 0
    ) {

      const previousModuleIndex =
        currentSolutionModuleIndex - 1;


      const previousModule =
        activePracticalSyllabus[
          previousModuleIndex
        ];


      const previousTopicIndex =
        previousModule.topics.length - 1;


      openSolutionTopic(
        previousModuleIndex,
        previousTopicIndex
      );


      const previousTopic =
        previousModule.topics[
          previousTopicIndex
        ];


      const previousPages =
        activePracticalSolutions[
          previousTopic.id
        ] || [""];


      currentSolutionPageIndex =
        previousPages.length - 1;


      updateSolutionPageDisplay();
    }


    return;
  }


  // --------------------------------------------------------
  // NOTES / ACTIVE SUBJECT
  // --------------------------------------------------------

  if (currentModuleIndex < 0) {
    return;
  }


  // Previous page within topic
  if (currentPageIndex > 0) {

    currentPageIndex--;

    updatePageDisplay();

    return;
  }


  const previous =
    getPreviousPosition();


  if (!previous) {
    return;
  }


  openTopic(
    previous.moduleIndex,
    previous.topicIndex
  );


  const previousTopic =
    activeSyllabus[
      previous.moduleIndex
    ].topics[
      previous.topicIndex
    ];


  const previousPages =
    activeNotes[
      previousTopic.id
    ] || [""];


  currentPageIndex =
    previousPages.length - 1;


  updatePageDisplay();
  } finally {
    maybeScrollAfterNavigation(before);
  }
}


// ==========================================================
// NOTES SIDEBAR CLICK
// ==========================================================

moduleList.addEventListener(
  "click",
  event => {

    const topicButton =
      event.target.closest(
        ".topic-button"
      );


    if (!topicButton) {
      return;
    }


    openTopic(
      Number(
        topicButton.dataset.moduleIndex
      ),

      Number(
        topicButton.dataset.topicIndex
      )
    );
  }
);


// ==========================================================
// SOLUTION SIDEBAR CLICK
// ==========================================================

solutionModuleList.addEventListener(
  "click",
  event => {

    const topicButton =
      event.target.closest(
        ".topic-button"
      );


    if (!topicButton) {
      return;
    }


    openSolutionTopic(
      Number(
        topicButton.dataset.solutionModuleIndex
      ),

      Number(
        topicButton.dataset.solutionTopicIndex
      )
    );
  }
);


// ==========================================================
// COLLAPSE ALL — NOTES SIDEBAR
// ==========================================================

collapseAllBtn.addEventListener(
  "click",
  () => {

    closeAllMainModules();
  }
);


// ==========================================================
// COLLAPSE ALL — C SOLUTIONS
// ==========================================================

collapseAllSolutionsBtn.addEventListener(
  "click",
  () => {

    closeAllSolutionModules();
  }
);


// ==========================================================
// PREVIOUS / NEXT
// ==========================================================

prevBtn.addEventListener(
  "click",
  goPrevious
);

nextBtn.addEventListener(
  "click",
  goNext
);

if (floatPrevBtn) {
  floatPrevBtn.addEventListener("click", goPrevious);
}

if (floatNextBtn) {
  floatNextBtn.addEventListener("click", goNext);
}


// ==========================================================
// SEARCH
// ==========================================================

if (topicSearch) {

  topicSearch.addEventListener(
    "input",
    filterTopics
  );
}


const learningModeToggle =
  document.getElementById("learningModeToggle");

if (learningModeToggle) {
  learningModeToggle.addEventListener("click", event => {
    const modeButton = event.target.closest(".mode-button");

    if (!modeButton) return;

    setLearningMode(modeButton.dataset.mode);
  });
}


// ==========================================================
// SUBJECT NAVIGATION
// ==========================================================

function renderSubjectNav() {
  if (!subjectNavList) return;

  subjectNavList.innerHTML = "";

  SUBJECTS.forEach(subject => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "subject-nav-item";
    button.dataset.subjectId = subject.id;
    button.textContent = subject.title;

    if (subject.id === currentSubjectId) {
      button.classList.add("active");
      button.setAttribute("aria-current", "true");
    }

    subjectNavList.appendChild(button);
  });
}


function renderSubjectCards() {
  const grid = document.getElementById("subjectCardGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  SUBJECTS.forEach(subject => {
    const card = document.createElement("button");
    const isActive = subject.id === currentSubjectId;
    const topicCount = countSyllabusTopics(subject.syllabus);
    const practicalCount = countSyllabusTopics(subject.practicalSyllabus);
    const structureLabel = getSubjectStructureLabel(subject);
    const description =
      subject.description ||
      "Syllabus-aligned notes and practicals.";

    card.type = "button";
    card.className = "subject-card";
    card.dataset.subjectId = subject.id;
    card.setAttribute(
      "aria-label",
      `Start learning ${subject.title}`
    );

    if (isActive) {
      card.classList.add("is-active");
      card.setAttribute("aria-current", "true");
    }

    const title = document.createElement("span");
    title.className = "subject-card-title";
    title.textContent = subject.title;

    const copy = document.createElement("span");
    copy.className = "subject-card-description";
    copy.textContent = description;

    const meta = document.createElement("span");
    meta.className = "subject-card-meta";
    meta.textContent =
      `${structureLabel} · ${topicCount} Topics · ${practicalCount} Practicals`;

    const action = document.createElement("span");
    action.className = "subject-card-action";
    action.textContent = "Start Learning";

    card.append(title, copy, meta, action);
    grid.appendChild(card);
  });
}


function openSubjectFromHome(subjectId) {
  activeLearningMode = "notes";
  setCurrentSubject(subjectId);
  setLearningMode("notes");
}


function showWelcomeState() {
  currentModuleIndex = -1;
  currentTopicIndex = -1;
  currentPageIndex = 0;
  solutionMode = false;
  currentSolutionModuleIndex = -1;
  currentSolutionTopicIndex = -1;
  currentSolutionPageIndex = 0;

  notesContainer.hidden = false;

  if (doubtContainer) {
    doubtContainer.hidden = true;
  }

  if (doubtMenuBtn) {
    doubtMenuBtn.classList.remove("active");
  }

  notesContainer.innerHTML = initialNotesHTML;
  topicTitle.textContent = getWelcomeTitle();
  updateSubjectBreadcrumb();
  progressText.textContent = initialProgressText;
  pageIndicator.textContent = initialPageIndicator;

  clearAllActiveTopics();
  closeAllModules();
  updateDocumentTitle();
}


function setCurrentSubject(subjectId) {
  const subject = SUBJECTS.find(item => item.id === subjectId);

  if (!subject) return;

  const alreadyActive = currentSubjectId === subjectId;

  currentSubjectId = subjectId;

  subjectNavList
    .querySelectorAll(".subject-nav-item")
    .forEach(button => {
      const isActive = button.dataset.subjectId === subjectId;

      button.classList.toggle("active", isActive);

      if (isActive) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });

  if (alreadyActive) return;

  applyActiveSubject(subject);

  updateHeaderSubjectLabel(subject);
  updateDocumentTitle(subject);
  updateDoubtCopy(subject);

  const notesSidebarTitle =
    document.getElementById("notesSidebarTitle");

  if (notesSidebarTitle) {
    notesSidebarTitle.textContent = subject.title.toUpperCase();
  }

  const practicalSidebarTitle =
    document.getElementById("practicalSidebarTitle");

  if (practicalSidebarTitle) {
    practicalSidebarTitle.textContent =
      subject.practicalTitle || "PRACTICAL";
  }

  if (topicSearch) {
    topicSearch.value = "";
  }

  showWelcomeState();
  renderSidebar();
  renderSolutionSidebar();
  setLearningMode(activeLearningMode);
}


if (subjectNavList) {
  subjectNavList.addEventListener("click", event => {
    const subjectButton = event.target.closest(".subject-nav-item");

    if (!subjectButton) return;

    setCurrentSubject(subjectButton.dataset.subjectId);
  });
}


// ==========================================================
// MOBILE MENU
// ==========================================================

mobileMenuBtn.addEventListener(
  "click",
  () => {

    const isOpen =
      sidebar.classList.toggle(
        "mobile-open"
      );


    mobileMenuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
  }
);


// ==========================================================
// DOUBT BUTTON
// ==========================================================

if (doubtMenuBtn) {
  doubtMenuBtn.addEventListener(
    "click",
    openDoubt
  );
}


// ==========================================================
// INITIALIZE
// ==========================================================

applySubjectFromQuery();

renderSubjectNav();

updateHeaderSubjectLabel();
updateDocumentTitle();
updateDoubtCopy();

renderSidebar();

renderSolutionSidebar();

applyLearningModeUI();

updateSubjectBreadcrumb();
topicTitle.textContent = getWelcomeTitle();

updateNavigationButtons();