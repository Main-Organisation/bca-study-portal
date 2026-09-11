// Lightweight subject catalog for Home and the study reader.
// Keep TIME_SERIES_SYLLABUS here so Home can count topics without
// loading notes or practical HTML files.

const TIME_SERIES_SYLLABUS = [
  {
    id: "ts-module-1",
    number: 1,
    title: "Introduction to Time Series",
    shortTitle: "Module 1",
    topics: [
      {
        id: "ts-introduction",
        title: "Introduction to Time Series"
      },
      {
        id: "ts-meaning",
        title: "Meaning and Definition of Time Series"
      },
      {
        id: "ts-components",
        title: "Components of Time Series"
      },
      {
        id: "ts-types",
        title: "Types of Time Series"
      }
    ]
  },

  {
    id: "ts-module-2",
    number: 2,
    title: "Time Series Analysis and Components",
    shortTitle: "Module 2",
    topics: [
      {
        id: "ts-trend",
        title: "Trend"
      },
      {
        id: "ts-seasonal",
        title: "Seasonal Variation"
      },
      {
        id: "ts-cyclical",
        title: "Cyclical Variation"
      },
      {
        id: "ts-irregular",
        title: "Irregular Variation"
      }
    ]
  },

  {
    id: "ts-module-3",
    number: 3,
    title: "Statistics Background for Forecasting",
    shortTitle: "Module 3",
    topics: [
      {
        id: "ts-graphical-displays",
        title: "Graphical Displays"
      },
      {
        id: "ts-time-series-plots",
        title: "Time Series Plots"
      },
      {
        id: "ts-smoothed-data",
        title: "Plotting Smoothed Data"
      },
      {
        id: "ts-numerical-description",
        title: "Numerical Description of Time Series Data"
      },
      {
        id: "ts-data-transformations",
        title: "Use of Data Transformations and Adjustments"
      },
      {
        id: "ts-modelling-forecasting",
        title: "General Approach to Time Series Modelling and Forecasting"
      },
      {
        id: "ts-model-performance",
        title: "Evaluating and Monitoring Forecasting Model Performance"
      }
    ]
  },

  {
    id: "ts-module-4",
    number: 4,
    title: "Introduction to Autoregressive Models and Forecasting",
    shortTitle: "Module 4",
    topics: [
      {
        id: "ts-autocorrelation",
        title: "Autocorrelation and Partial Autocorrelation"
      },
      {
        id: "ts-arma-models",
        title: "Autoregressive Moving Average (ARMA) Models"
      },
      {
        id: "ts-arima-models",
        title: "Autoregressive Integrated Moving Average (ARIMA) Models"
      },
      {
        id: "ts-arima-forecasting",
        title: "Forecasting using ARIMA"
      },
      {
        id: "ts-seasonal-data",
        title: "Seasonal Data"
      },
      {
        id: "ts-sarima-models",
        title: "Seasonal ARIMA Models"
      },
      {
        id: "ts-sarima-forecasting",
        title: "Forecasting using Seasonal ARIMA Models"
      }
    ]
  },

  {
    id: "ts-module-5",
    number: 5,
    title: "Time Series Regression Model",
    shortTitle: "Module 5",
    topics: [
      {
        id: "ts-regression-introduction",
        title: "Introduction to Time Series Regression"
      },
      {
        id: "ts-least-squares",
        title: "Least Squares Estimation in Linear Regression Models"
      },
      {
        id: "ts-regression-inference",
        title: "Statistical Inference in Linear Regression"
      },
      {
        id: "ts-prediction",
        title: "Prediction of New Observations"
      },
      {
        id: "ts-model-adequacy",
        title: "Model Adequacy Checking"
      },
      {
        id: "ts-variable-selection",
        title: "Variable Selection Methods in Regression"
      },
      {
        id: "ts-gls",
        title: "Generalized Least Squares"
      },
      {
        id: "ts-wls",
        title: "Weighted Least Squares"
      },
      {
        id: "ts-general-regression",
        title: "Regression Models for General Time Series Data"
      }
    ]
  },

  {
    id: "ts-module-6",
    number: 6,
    title: "Multivariate Time Series Models and Forecasting",
    shortTitle: "Module 6",
    topics: [
      {
        id: "ts-multivariate-models",
        title: "Multivariate Time Series Models and Forecasting"
      },
      {
        id: "ts-multivariate-stationary",
        title: "Multivariate Stationary Process"
      },
      {
        id: "ts-bayesian-forecasting",
        title: "Bayesian Methods in Forecasting"
      }
    ]
  }
];

const SUBJECT_CATALOG = [
  {
    id: "c-programming",
    title: "C Programming",
    category: "Programming",
    accent: "#1f7a63",
    description:
      "Master C fundamentals, control structures, arrays, functions, structures, pointers and file handling.",
    notesSyllabus: "SYLLABUS",
    practicalSyllabus: "SOLUTION_SYLLABUS"
  },
  {
    id: "time-series",
    title: "Time Series",
    category: "Data & Analytics",
    accent: "#2a6f97",
    description:
      "Learn time series analysis, forecasting, ARIMA, regression and practical data analysis.",
    notesSyllabus: "TIME_SERIES_SYLLABUS",
    practicalSyllabus: "TIME_SERIES_PRACTICAL_SYLLABUS"
  }
];

function getCatalogEntry(subjectId) {
  return SUBJECT_CATALOG.find(item => item.id === subjectId) || {};
}

function countCatalogTopics(syllabus) {
  return (syllabus || []).reduce(
    (sum, module) => sum + (module.topics ? module.topics.length : 0),
    0
  );
}

const CATALOG_SYLLABUS_INDEX = {};

function registerCatalogSyllabus(name, syllabus) {
  if (!name) {
    return;
  }

  CATALOG_SYLLABUS_INDEX[name] = syllabus || [];
}

function getNamedSyllabus(name) {
  return CATALOG_SYLLABUS_INDEX[name] || [];
}

registerCatalogSyllabus("TIME_SERIES_SYLLABUS", TIME_SERIES_SYLLABUS);
