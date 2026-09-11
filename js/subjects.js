// SUBJECT CONFIGURATION
// Catalog metadata lives in subject-catalog.js.
// C Programming keeps using SYLLABUS / NOTES from syllabus.js / notes.js.

const SUBJECTS = [
  {
    ...getCatalogEntry("c-programming"),
    syllabus: SYLLABUS,
    notes: NOTES,
    practicalTitle: "C SOLUTIONS",
    practicalSyllabus: SOLUTION_SYLLABUS,
    practicalSolutions: SOLUTIONS
  },
  {
    ...getCatalogEntry("time-series"),
    welcomeTitle: "Master Time Series Analysis — One Concept at a Time",
    syllabus: TIME_SERIES_SYLLABUS,
    notes: TIME_SERIES_NOTES,
    practicalTitle: "TIME SERIES PRACTICAL",
    practicalSyllabus: TIME_SERIES_PRACTICAL_SYLLABUS,
    practicalSolutions: TIME_SERIES_PRACTICAL_SOLUTIONS,
    notesUnitByModuleId: {
      "ts-module-1": "Unit 1",
      "ts-module-2": "Unit 1",
      "ts-module-3": "Unit 2",
      "ts-module-4": "Unit 3",
      "ts-module-5": "Unit 4",
      "ts-module-6": "Unit 5"
    }
  }
];

let currentSubjectId = "c-programming";
