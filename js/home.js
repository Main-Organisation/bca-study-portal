if (typeof SYLLABUS !== "undefined") {
  registerCatalogSyllabus("SYLLABUS", SYLLABUS);
}

if (typeof SOLUTION_SYLLABUS !== "undefined") {
  registerCatalogSyllabus("SOLUTION_SYLLABUS", SOLUTION_SYLLABUS);
}

if (typeof TIME_SERIES_PRACTICAL_SYLLABUS !== "undefined") {
  registerCatalogSyllabus(
    "TIME_SERIES_PRACTICAL_SYLLABUS",
    TIME_SERIES_PRACTICAL_SYLLABUS
  );
}

function renderHomeSubjectCards() {
  const grid = document.getElementById("homeSubjectGrid");

  if (!grid || typeof SUBJECT_CATALOG === "undefined") {
    return;
  }

  grid.innerHTML = "";

  SUBJECT_CATALOG.forEach(subject => {
    const notesCount = countCatalogTopics(
      getNamedSyllabus(subject.notesSyllabus)
    );
    const practicalCount = countCatalogTopics(
      getNamedSyllabus(subject.practicalSyllabus)
    );
    const accent = subject.accent || "#1f7a63";
    const mark = (subject.title || "?").trim().charAt(0);

    const card = document.createElement("a");
    card.className = "home-subject-card";
    card.href = `index.html?subject=${encodeURIComponent(subject.id)}`;
    card.style.setProperty("--home-accent", accent);
    card.setAttribute(
      "aria-label",
      `Start learning ${subject.title}`
    );

    const accentBar = document.createElement("span");
    accentBar.className = "home-subject-card-accent";
    accentBar.setAttribute("aria-hidden", "true");

    const markEl = document.createElement("span");
    markEl.className = "home-subject-card-mark";
    markEl.setAttribute("aria-hidden", "true");
    markEl.textContent = mark;

    const title = document.createElement("h3");
    title.className = "home-subject-card-title";
    title.textContent = subject.title;

    const category = document.createElement("p");
    category.className = "home-subject-card-category";
    category.textContent = subject.category || "Subject";

    const description = document.createElement("p");
    description.className = "home-subject-card-description";
    description.textContent = subject.description || "";

    const meta = document.createElement("p");
    meta.className = "home-subject-card-meta";
    meta.textContent = `${notesCount} Topics • ${practicalCount} Practicals`;

    const action = document.createElement("span");
    action.className = "home-subject-card-cta";
    action.textContent = "Start Learning →";

    card.append(
      accentBar,
      markEl,
      title,
      category,
      description,
      meta,
      action
    );
    grid.appendChild(card);
  });
}

renderHomeSubjectCards();
