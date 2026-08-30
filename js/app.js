// BCA STUDY PORTAL - Navigation
// Supports:
// 1. C Programming Notes
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

const progressText =
  document.getElementById("progressText");

const pageIndicator =
  document.getElementById("pageIndicator");

const prevBtn =
  document.getElementById("prevBtn");

const nextBtn =
  document.getElementById("nextBtn");

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


// ==========================================================
// MAIN NOTES STATE
// ==========================================================

let currentModuleIndex = -1;
let currentTopicIndex = -1;
let currentPageIndex = 0;


// ==========================================================
// SOLUTIONS STATE
// ==========================================================

let solutionMode = false;

let currentSolutionModuleIndex = -1;
let currentSolutionTopicIndex = -1;
let currentSolutionPageIndex = 0;


// ==========================================================
// MAIN NOTES HELPERS
// ==========================================================

function getTotalTopics() {
  return SYLLABUS.reduce(
    (sum, module) => sum + module.topics.length,
    0
  );
}


function getGlobalTopicNumber(moduleIndex, topicIndex) {
  let number = 0;

  for (let i = 0; i < moduleIndex; i++) {
    number += SYLLABUS[i].topics.length;
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
// RENDER C PROGRAMMING SIDEBAR
// ==========================================================

function renderSidebar() {

  moduleList.innerHTML = "";

  SYLLABUS.forEach((module, moduleIndex) => {

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

        closeAllSolutionModules();
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

    moduleList.appendChild(wrapper);
  });
}


// ==========================================================
// RENDER C SOLUTIONS SIDEBAR
// ==========================================================

function renderSolutionSidebar() {

  solutionModuleList.innerHTML = "";

  SOLUTION_SYLLABUS.forEach(
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

          closeAllMainModules();
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
// SEARCH — C PROGRAMMING ONLY
// ==========================================================

function filterTopics() {

  if (!topicSearch) return;

  const searchTerm =
    topicSearch.value
      .trim()
      .toLowerCase();


  moduleList
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
}


// ==========================================================
// DISPLAY C PROGRAMMING NOTE
// ==========================================================

function updatePageDisplay() {

  notesContainer.hidden = false;

  doubtContainer.hidden = true;

  if (doubtMenuBtn) {
  doubtMenuBtn.classList.remove("active");
}


  const module =
    SYLLABUS[currentModuleIndex];

  const topic =
    module.topics[currentTopicIndex];

  const pages =
    NOTES[topic.id] ||
    [placeholder(topic.title)];


  notesContainer.innerHTML =
    pages[currentPageIndex];


  topicTitle.textContent =
    topic.title;


  breadcrumb.textContent =
    `${module.shortTitle} · C Programming`;


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
    SOLUTION_SYLLABUS[
      currentSolutionModuleIndex
    ];

  const topic =
    module.topics[
      currentSolutionTopicIndex
    ];


  const pages =
    SOLUTIONS[topic.id] || [
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


  breadcrumb.textContent =
    `${module.shortTitle} · C Solutions`;


  progressText.textContent =
    `Exercise ${
      currentSolutionPageIndex + 1
    } of ${pages.length}`;


  pageIndicator.textContent =
    `Exercise ${
      currentSolutionPageIndex + 1
    } of ${pages.length}`;


  updateNavigationButtons();
}


// ==========================================================
// NAVIGATION BUTTON STATE
// ==========================================================

function updateNavigationButtons() {

  // --------------------------------------------------------
  // C SOLUTIONS MODE
  // --------------------------------------------------------

  if (solutionMode) {

    if (
      currentSolutionModuleIndex < 0 ||
      currentSolutionTopicIndex < 0
    ) {
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }


    const module =
      SOLUTION_SYLLABUS[
        currentSolutionModuleIndex
      ];

    const topic =
      module.topics[
        currentSolutionTopicIndex
      ];

    const pages =
      SOLUTIONS[topic.id] || [""];


    prevBtn.disabled =
      currentSolutionModuleIndex === 0 &&
      currentSolutionTopicIndex === 0 &&
      currentSolutionPageIndex === 0;


    nextBtn.disabled =
      currentSolutionModuleIndex ===
        SOLUTION_SYLLABUS.length - 1 &&
      currentSolutionTopicIndex ===
        module.topics.length - 1 &&
      currentSolutionPageIndex ===
        pages.length - 1;

    return;
  }


  // --------------------------------------------------------
  // C PROGRAMMING MODE
  // --------------------------------------------------------

  if (
    currentModuleIndex < 0 ||
    currentTopicIndex < 0
  ) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }


  const module =
    SYLLABUS[currentModuleIndex];

  const topic =
    module.topics[currentTopicIndex];

  const pages =
    NOTES[topic.id] || [""];


  prevBtn.disabled =
    currentModuleIndex === 0 &&
    currentTopicIndex === 0 &&
    currentPageIndex === 0;


  nextBtn.disabled =
    currentModuleIndex ===
      SYLLABUS.length - 1 &&
    currentTopicIndex ===
      module.topics.length - 1 &&
    currentPageIndex ===
      pages.length - 1;
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


  breadcrumb.textContent =
    "BCA 1st Year · C Programming";


  progressText.textContent =
    "Ask your question and send it to us.";


  pageIndicator.textContent =
    "Doubt";


  prevBtn.disabled = true;

  nextBtn.disabled = true;


  clearAllActiveTopics();

  closeAllModules();


  if (window.innerWidth <= 768) {

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
// OPEN C PROGRAMMING TOPIC
// ==========================================================

function openTopic(
  moduleIndex,
  topicIndex
) {

  solutionMode = false;


  currentModuleIndex =
    moduleIndex;

  currentTopicIndex =
    topicIndex;

  currentPageIndex = 0;


  closeAllSolutionModules();

  closeAllMainModules();

  openCurrentMainModule();


  updateActiveSolutionTopic();

  updateActiveTopic();


  updatePageDisplay();


  if (window.innerWidth <= 768) {

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

  solutionMode = true;


  currentSolutionModuleIndex =
    moduleIndex;

  currentSolutionTopicIndex =
    topicIndex;

  currentSolutionPageIndex =
    0;


  closeAllMainModules();

  closeAllSolutionModules();

  openCurrentSolutionModule();


  updateActiveTopic();

  updateActiveSolutionTopic();


  updateSolutionPageDisplay();


  if (window.innerWidth <= 768) {

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
    SYLLABUS[currentModuleIndex];


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
    SYLLABUS.length - 1
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
        SYLLABUS[
          moduleIndex
        ].topics.length - 1
    };
  }


  return null;
}


// ==========================================================
// NEXT
// ==========================================================

function goNext() {

  // --------------------------------------------------------
  // C SOLUTIONS
  // --------------------------------------------------------

  if (solutionMode) {

    const module =
      SOLUTION_SYLLABUS[
        currentSolutionModuleIndex
      ];

    const topic =
      module.topics[
        currentSolutionTopicIndex
      ];

    const pages =
      SOLUTIONS[topic.id] || [""];


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
      SOLUTION_SYLLABUS.length - 1
    ) {

      openSolutionTopic(
        currentSolutionModuleIndex + 1,
        0
      );
    }


    return;
  }


  // --------------------------------------------------------
  // C PROGRAMMING
  // --------------------------------------------------------

  if (currentModuleIndex < 0) {

    openTopic(0, 0);

    return;
  }


  const module =
    SYLLABUS[currentModuleIndex];

  const topic =
    module.topics[currentTopicIndex];

  const pages =
    NOTES[topic.id] || [""];


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
}


// ==========================================================
// PREVIOUS
// ==========================================================

function goPrevious() {

  // --------------------------------------------------------
  // C SOLUTIONS
  // --------------------------------------------------------

  if (solutionMode) {

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
        SOLUTION_SYLLABUS[
          currentSolutionModuleIndex
        ];


      const previousTopic =
        previousModule.topics[
          previousTopicIndex
        ];


      const previousPages =
        SOLUTIONS[
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
        SOLUTION_SYLLABUS[
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
        SOLUTIONS[
          previousTopic.id
        ] || [""];


      currentSolutionPageIndex =
        previousPages.length - 1;


      updateSolutionPageDisplay();
    }


    return;
  }


  // --------------------------------------------------------
  // C PROGRAMMING
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
    SYLLABUS[
      previous.moduleIndex
    ].topics[
      previous.topicIndex
    ];


  const previousPages =
    NOTES[
      previousTopic.id
    ] || [""];


  currentPageIndex =
    previousPages.length - 1;


  updatePageDisplay();
}


// ==========================================================
// MAIN SIDEBAR CLICK
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
// COLLAPSE ALL — C PROGRAMMING
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


// ==========================================================
// SEARCH
// ==========================================================

if (topicSearch) {

  topicSearch.addEventListener(
    "input",
    filterTopics
  );
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

renderSidebar();

renderSolutionSidebar();

updateNavigationButtons();