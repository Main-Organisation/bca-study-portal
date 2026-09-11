// TIME SERIES PRACTICAL — EXERCISE CONTENT
// Educational lab curriculum. Not an official university list.
// Python is shown for students to run outside the portal.

const TIME_SERIES_PRACTICAL_SOLUTIONS = {};

function tsLab(cfg) {
  let html = `\n  <h2>${cfg.title}</h2>\n`;

  function add(heading, body) {
    if (!body) return;
    html += `\n  <h3>${heading}</h3>\n  ${body}\n`;
  }

  add("Problem Statement", cfg.problem);
  add("Learning Outcomes", cfg.outcomes);
  add("Hint", cfg.hint);
  add("Theory", cfg.theory);
  add("Dataset / Data Source", cfg.dataset);

  if (cfg.kaggle) {
    add("Kaggle-style Workflow", cfg.kaggle);
  }

  if (cfg.code) {
    html += `
  <h3>${cfg.codeHeading || "Analysis / Program"}</h3>
  <div class="program-code notranslate" data-language="python">${cfg.code}</div>
`;
  }

  add("Expected Output", cfg.output);
  add("Result / Interpretation", cfg.result);

  if (cfg.note) {
    html += `
  <div class="note-callout">
    <span class="note-callout-title">Note</span>
    <p>${cfg.note}</p>
  </div>
`;
  }

  return [html];
}

function tsList(items) {
  return "<ul>" + items.map(item => `<li>${item}</li>`).join("") + "</ul>";
}

function tsP(text) {
  return `<p>${text}</p>`;
}


// ============================================================
// UNIT 1
// ============================================================

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p1-01"] = tsLab({
  title: "P1.01 Chronological Time Series Data",
  problem: tsP("A shop recorded weekly packet sales for eight weeks. Arrange the values as a time series, keep chronological order, and explain why the order must not be shuffled."),
  outcomes: tsList([
    "Define a time series using a small dataset.",
    "Store observations with a proper time index.",
    "Explain why chronological order is essential."
  ]),
  hint: tsP("Create a date index first, then attach the sales values. Do not sort the values by size."),
  theory: tsP("A time series is a sequence of observations recorded over time. The time order is part of the information. If the order is changed, trend and seasonality can no longer be studied."),
  dataset: tsP("Small teaching dataset: weekly packet sales for eight consecutive weeks starting 6 Jan 2026: 42, 45, 44, 50, 53, 49, 55, 58. This is a constructed classroom series, not a downloaded public file."),
  code: `# Import libraries
import pandas as pd
import matplotlib.pyplot as plt

# Create a chronological weekly index
weeks = pd.date_range("2026-01-06", periods=8, freq="W-MON")
sales = [42, 45, 44, 50, 53, 49, 55, 58]

# Load data into a time series
ts = pd.Series(sales, index=weeks, name="packet_sales")

# Inspect the series
print(ts)
print("Chronological order preserved:", ts.index.is_monotonic_increasing)

# Plot the series in time order
ts.plot(marker="o", title="Weekly packet sales")
plt.xlabel("Week")
plt.ylabel("Packets sold")
plt.tight_layout()
plt.show()`,
  output: tsP("A table of eight dated observations, True for chronological order, and a rising line chart. Exact pixels of the chart depend on your machine; the shape should show a general increase with one small dip in week 6."),
  result: tsP("The series is a valid time series because each value is tied to a week. The later weeks are higher than the first weeks, so a simple upward movement is visible. Shuffling the eight numbers would destroy that movement."),
  note: "Time-series analysis starts by preserving time order. Sorting values from smallest to largest is not time series analysis."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p1-02"] = tsLab({
  title: "P1.02 Classify Types of Data",
  problem: tsP("Given three small tables, classify each as time series, cross-sectional, or panel data, and justify the classification."),
  outcomes: tsList([
    "Distinguish time series, cross-sectional and panel data.",
    "Explain who is observed and when they are observed."
  ]),
  hint: tsP("Ask two questions: How many entities? At how many time points?"),
  theory: tsP("Time series data follows one process over time. Cross-sectional data observes many entities at one time. Panel data observes many entities repeatedly over time."),
  dataset: tsP("Table A: daily temperature of one city for 10 days. Table B: income of 8 households in 2026 only. Table C: annual sales of 4 shops from 2023 to 2025. All three tables are teaching examples."),
  code: `# Classify teaching tables by entity and time
tables = {
    "A": {"entities": 1, "times": 10, "example": "daily temperature of one city"},
    "B": {"entities": 8, "times": 1, "example": "household income in 2026"},
    "C": {"entities": 4, "times": 3, "example": "shop sales over three years"}
}

for name, info in tables.items():
    if info["entities"] == 1 and info["times"] > 1:
        kind = "Time series"
    elif info["entities"] > 1 and info["times"] == 1:
        kind = "Cross-sectional"
    else:
        kind = "Panel"
    print(name, kind, "-", info["example"])`,
  output: tsP("Printed labels: A Time series, B Cross-sectional, C Panel, each with its short example."),
  result: tsP("Only Table A is a single time series. Table B cannot show change over time. Table C can show both shop differences and year-to-year change."),
  note: "Forecasting a single variable over time uses time series data. Comparing many units at one moment uses cross-sectional data."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p1-03"] = tsLab({
  title: "P1.03 Identify Internal Structures",
  problem: tsP("Using a 24-month sales series, identify signs of trend, seasonality, cyclical movement and irregular shocks. Do not fit ARIMA."),
  outcomes: tsList([
    "Name the four classical components.",
    "Point to features in a plot that suggest each component."
  ]),
  hint: tsP("Trend is the long drift. Seasonality repeats at a known interval. Cyclical movement is a slower rise and fall. Irregular points do not repeat."),
  theory: tsP("An observed series can mix trend, seasonal variation, cyclical variation and irregular variation. Unit 1 asks you to recognise these ideas visually, not to estimate them with advanced models."),
  dataset: tsP("Constructed monthly sales for two years: a slow rise, higher values every December, one unusually low month after a simulated disruption. Not a public download."),
  code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Build a teaching series with known features
idx = pd.date_range("2024-01-01", periods=24, freq="MS")
trend = np.linspace(80, 110, 24)
seasonal = [8 if m == 12 else (-4 if m in [6, 7] else 0)
            for m in idx.month]
irregular = np.zeros(24)
irregular[14] = -18  # unusual drop
sales = trend + seasonal + irregular
ts = pd.Series(sales, index=idx, name="sales")

ts.plot(marker="o", title="Monthly sales with mixed components")
plt.axvline(idx[14], linestyle="--")
plt.tight_layout()
plt.show()
print(ts.round(1))`,
  output: tsP("A 24-point line chart: overall climb, December peaks, a marked drop near point 15, and a printed monthly table of constructed values."),
  result: tsP("The climb is trend. December peaks are seasonal. The isolated drop is irregular. Two years is short for a full business cycle, so any slower wave should be discussed cautiously as possible cyclical movement, not proven."),
  note: "Do not call every wiggle seasonal. Seasonality repeats at a known period such as month or quarter."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p1-04"] = tsLab({
  title: "P1.04 Visualize a Basic Time Series",
  problem: tsP("Plot daily average temperature for 14 days and describe the pattern in words."),
  outcomes: tsList([
    "Create a time plot.",
    "Read direction, variability and unusual days from the graph."
  ]),
  hint: tsP("Use a line plot with dates on the x-axis. A bar chart of unsorted values would hide time order."),
  theory: tsP("A time plot is the first diagnostic for a series. It shows whether values rise, fall, stay level, or jump."),
  dataset: tsP("Constructed daily mean temperatures (deg C) for 1–14 April: 28, 29, 30, 31, 30, 29, 27, 28, 30, 32, 33, 31, 30, 29."),
  code: `import pandas as pd
import matplotlib.pyplot as plt

days = pd.date_range("2026-04-01", periods=14, freq="D")
temp = [28, 29, 30, 31, 30, 29, 27, 28, 30, 32, 33, 31, 30, 29]
ts = pd.Series(temp, index=days, name="mean_temp")

ts.plot(marker="o", title="Daily mean temperature")
plt.ylabel("deg C")
plt.tight_layout()
plt.show()`,
  output: tsP("A 14-day line graph with a mid-period dip and a later peak. The vertical scale is temperature in deg C."),
  result: tsP("The series is not a straight line. Students should mention the cooler day near 7 April and the warmer spell around 10–11 April."),
  note: "A time plot is not a model. It is the first look that guides later analysis."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p1-05"] = tsLab({
  title: "P1.05 Nature of a Time Series Dataset",
  problem: tsP("Inspect a monthly electricity-demand-like series: frequency, length, missing values and whether it looks suitable for forecasting."),
  outcomes: tsList([
    "Report frequency and sample length.",
    "Check missing values.",
    "Comment on whether the history is long enough for a simple forecast."
  ]),
  hint: tsP("Print dtype, index frequency, missing count and a short head/tail."),
  theory: tsP("Forecast quality depends on suitable data: relevant variable, regular frequency, adequate length and acceptable quality."),
  dataset: tsP("Constructed 18 monthly demand values with one missing month. Teaching data only."),
  code: `import pandas as pd
import numpy as np

idx = pd.date_range("2024-07-01", periods=18, freq="MS")
demand = [120, 118, 125, 130, 128, 140, 155, 160, 150,
          142, 138, 135, 133, np.nan, 141, 148, 152, 158]
ts = pd.Series(demand, index=idx, name="demand")

print("Length:", len(ts))
print("Inferred frequency:", pd.infer_freq(ts.index))
print("Missing values:", ts.isna().sum())
print(ts.head())
print(ts.tail())`,
  output: tsP("Length 18, monthly frequency, one missing value, and printed first and last observations."),
  result: tsP("The series is monthly and fairly short. One missing month must be handled before forecasting. Eighteen points can support a simple method, but not a heavy seasonal ARIMA study."),
  note: "A forecast is only as useful as the data behind it. Missing values and short history are Unit 1 issues, not later-model issues."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p1-06"] = tsLab({
  title: "P1.06 Uses of Forecasting",
  problem: tsP("Using last year's monthly demand, explain one business decision that a simple next-month forecast could support, and one decision it should not support."),
  outcomes: tsList([
    "Connect a forecast to a practical use.",
    "State that a forecast is an estimate, not a guarantee."
  ]),
  hint: tsP("Inventory and staffing are typical uses. A 12-month investment plan needs more than one naive next-month number."),
  theory: tsP("Forecasting estimates future values from historical information and a method. Uses include business demand, inventory, production, finance, energy and public planning."),
  dataset: tsP("Constructed monthly demand: 12 values from last year. Teaching data."),
  code: `import pandas as pd

idx = pd.date_range("2025-01-01", periods=12, freq="MS")
demand = [90, 92, 95, 94, 100, 108, 115, 112, 105, 98, 96, 101]
ts = pd.Series(demand, index=idx, name="demand")

# Naive next-month idea: last observed value
naive_next = ts.iloc[-1]
print("Last observed month:", ts.index[-1].date())
print("Naive next-month estimate:", naive_next)
print("Recent average (3 months):", round(ts.tail(3).mean(), 1))`,
  output: tsP("Printed last date, naive estimate equal to the last value, and a 3-month average. These are calculated from the listed 12 numbers."),
  result: tsP("The naive estimate can help a shop plan next month's stock. It should not be treated as a certain annual budget. Forecasting supports decisions; it does not replace judgement."),
  note: "A forecast is an estimate, not a guarantee."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p1-07"] = tsLab({
  title: "P1.07 Simple Forecasting Workflow",
  problem: tsP("Carry out the Unit 1 forecasting process on a short monthly series: define the problem, inspect data, choose a simple method, make one-step estimates and state how you would monitor them."),
  outcomes: tsList([
    "Follow a systematic forecasting process.",
    "Use a simple method only (mean or naive), not ARIMA."
  ]),
  hint: tsP("Write the eight process steps, then implement only a naive or trailing-mean forecast."),
  theory: tsP("The process is: define the problem, collect data, prepare data, select a method, build the model, evaluate, generate the forecast, monitor performance."),
  dataset: tsP("Constructed 12 monthly sales values. Teaching data."),
  code: `import pandas as pd
import numpy as np

idx = pd.date_range("2025-01-01", periods=12, freq="MS")
sales = [50, 52, 51, 55, 57, 60, 58, 61, 64, 63, 66, 70]
ts = pd.Series(sales, index=idx, name="sales")

# Simple method: average of last 3 months
forecast = ts.tail(3).mean()
print("Problem: forecast next month sales")
print("Method: trailing 3-month mean")
print("Forecast:", round(forecast, 1))

# Crude in-sample check using last 3 one-step means
errors = []
for i in range(9, 12):
    pred = ts.iloc[i-3:i].mean()
    errors.append(ts.iloc[i] - pred)
print("Last three one-step errors:", [round(e, 1) for e in errors])`,
  output: tsP("A next-month trailing-mean forecast printed from the given values, plus three one-step errors for the last months. Do not treat these as universal constants."),
  result: tsP("The workflow is more important than the method. Students should name the problem, the data, the simple rule, a rough check, and the need to compare later actual sales with the forecast."),
  note: "Unit 1 stops at a simple workflow. ARIMA belongs to Unit 3."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p1-08"] = tsLab({
  title: "P1.08 Prepare Historical Data",
  problem: tsP("A monthly series has a missing value and mixed types. Clean it into a regular datetime-indexed series ready for forecasting."),
  outcomes: tsList([
    "Parse dates.",
    "Set a monthly frequency.",
    "Handle one missing value in a transparent way."
  ]),
  hint: tsP("Convert to datetime, set_index, asfreq('MS'), then interpolate or use a clearly stated fill method."),
  theory: tsP("Preparation includes consistent frequency, numeric type, and a documented missing-value rule. Silent filling without comment is poor practice."),
  dataset: tsP("Teaching CSV-like rows: 2025-01, 20; 2025-02, 22; 2025-03, missing; 2025-04, 25; 2025-05, 24."),
  code: `import pandas as pd

raw = pd.DataFrame({
    "month": ["2025-01", "2025-02", "2025-03", "2025-04", "2025-05"],
    "sales": ["20", "22", None, "25", "24"]
})

raw["month"] = pd.to_datetime(raw["month"])
ts = raw.set_index("month")["sales"].astype(float).asfreq("MS")
print("Before filling:")
print(ts)

# Linear interpolation for a single interior missing month
clean = ts.interpolate(limit_direction="both")
print("After interpolation:")
print(clean)`,
  output: tsP("A five-month series with NaN in March, then a filled March value between February and April."),
  result: tsP("The cleaned series is regular and numeric. Interpolation is acceptable here because only one interior point is missing. Students must record the rule they used."),
  note: "Never start modelling on a series whose missing values have not been inspected."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p1-09"] = tsLab({
  title: "P1.09 Data Sources and Resources",
  problem: tsP("Compare three resource sets for forecasting next-quarter demand in a small shop, and recommend one that is realistic for a student project."),
  outcomes: tsList([
    "List forecasting resources.",
    "Match resources to a small practical problem."
  ]),
  hint: tsP("Resources include historical data, methods, software, computing, domain knowledge and skilled people."),
  theory: tsP("A forecast needs more than a formula. It needs data, a method, tools and people who understand the context."),
  dataset: tsP("No numeric file. Compare: (1) 3 months of notebook totals and a spreadsheet; (2) 5 years of scanned bills with no dates; (3) a claimed 'Kaggle shop dataset' with no verified source."),
  code: `options = [
    {"name": "Notebook + spreadsheet", "data": "3 monthly totals", "usable": True},
    {"name": "Undated scanned bills", "data": "large but no time index", "usable": False},
    {"name": "Unverified download", "data": "unknown origin", "usable": False},
]

for item in options:
    print(item["name"], "|", item["data"], "| usable:", item["usable"])`,
  output: tsP("Three printed options. Only the dated notebook totals are marked usable."),
  result: tsP("For a student lab, a small dated series is better than a large undated pile or an unverifiable file. Domain knowledge of the shop still matters."),
  note: "Do not invent a Kaggle URL. If a public dataset is used later, name it honestly and only when the source is known."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p1-10"] = tsLab({
  title: "P1.10 Mini End-to-End Forecast",
  problem: tsP("From a 24-month constructed sales series, complete a beginner workflow: inspect, clean, plot, split last 3 months as a check, forecast with a trailing mean, and interpret MAE."),
  outcomes: tsList([
    "Run a full simple pipeline.",
    "Hold out recent months for a check.",
    "Report MAE without claiming a sophisticated model."
  ]),
  kaggle: tsList([
    "Problem statement",
    "Dataset description",
    "Import libraries",
    "Load and inspect",
    "Clean",
    "Exploratory plot",
    "Simple model",
    "Evaluate with MAE",
    "Interpret and conclude"
  ]),
  hint: tsP("Do not use ARIMA. A trailing mean is enough for Unit 1."),
  theory: tsP("An end-to-end beginner forecast still follows the process: understand the series, prepare it, choose a simple rule, check it on unused recent data, then interpret."),
  dataset: tsP("Constructed 24 monthly sales figures with a mild rise. Teaching data, not a Kaggle download."),
  code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

idx = pd.date_range("2024-01-01", periods=24, freq="MS")
sales = np.linspace(40, 70, 24) + np.array(
    [0, 1, -1, 2, 0, 3, -2, 1, 0, 2, -1, 4,
     0, 1, -2, 2, 1, 0, 3, -1, 2, 0, 1, 2]
)
ts = pd.Series(sales, index=idx, name="sales")

print("Shape:", ts.shape)
print("Missing:", ts.isna().sum())
print(ts.describe())

train, test = ts.iloc[:-3], ts.iloc[-3:]
preds = pd.Series(train.tail(3).mean(), index=test.index)
mae = (test - preds).abs().mean()

print("Hold-out MAE:", round(mae, 2))
train.plot(label="train")
test.plot(label="test")
preds.plot(label="simple forecast", style="--")
plt.legend()
plt.title("Unit 1 mini forecast")
plt.tight_layout()
plt.show()`,
  output: tsP("Printed shape, missing count, descriptive stats, a hold-out MAE, and a chart of train, test and a flat dashed forecast. MAE depends on this constructed series; do not quote it as a universal result."),
  result: tsP("The pipeline shows inspection, a simple method and honest evaluation on later months. The forecast is crude, which is the educational point: process first, advanced models later."),
  note: "Evaluate a method on data not used to form the forecast whenever possible."
});


// ============================================================
// UNIT 2
// ============================================================

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p2-01"] = tsLab({
  title: "P2.01 Graphical Display of a Series",
  problem: tsP("Produce two graphical displays of the same 16-week demand series: a time plot and a histogram. Explain what each graph is good for."),
  outcomes: tsList([
    "Use a time plot for order and pattern.",
    "Use a histogram for the distribution of values."
  ]),
  hint: tsP("Do not replace the time plot with a histogram. They answer different questions."),
  theory: tsP("Graphical displays include time plots, histograms and scatter plots of lagged values. The time plot keeps chronology; the histogram summarises level and spread."),
  dataset: tsP("Constructed 16 weekly demand values. Teaching data."),
  code: `import pandas as pd
import matplotlib.pyplot as plt

weeks = pd.date_range("2026-01-05", periods=16, freq="W-MON")
demand = [30, 32, 31, 35, 36, 34, 38, 40, 39, 41, 44, 42, 45, 47, 46, 48]
ts = pd.Series(demand, index=weeks)

fig, axes = plt.subplots(1, 2, figsize=(9, 4))
ts.plot(ax=axes[0], marker="o", title="Time plot")
ts.hist(ax=axes[1], bins=6)
axes[1].set_title("Histogram")
plt.tight_layout()
plt.show()`,
  output: tsP("A pair of charts: a rising time plot and a histogram of the 16 values."),
  result: tsP("The time plot shows the upward movement. The histogram shows that later high values pull the distribution to the right. Both views are useful."),
  note: "A histogram ignores time order. Always keep a time plot when the data are a series."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p2-02"] = tsLab({
  title: "P2.02 Time Series Plot with EDA",
  problem: tsP("Perform Kaggle-style inspection of a 36-month constructed passenger-like series, then draw a time plot and comment on trend and seasonality."),
  outcomes: tsList([
    "Inspect shape, dtypes, missing values and summary stats.",
    "Plot the series and describe trend/seasonality in words."
  ]),
  kaggle: tsList([
    "Load and inspect",
    "Check missing values and describe()",
    "Time plot",
    "Optional month-wise box view",
    "Interpretation"
  ]),
  theory: tsP("A time series plot is the standard graph of observations against time. For monthly data, repeating peaks in the same months suggest seasonality."),
  dataset: tsP("Constructed 36 monthly passenger-like counts with trend and a 12-month bump. Teaching series inspired by classic airline-passenger examples, not downloaded from a website."),
  code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

idx = pd.date_range("2023-01-01", periods=36, freq="MS")
trend = np.linspace(100, 160, 36)
season = 12 * np.sin(2 * np.pi * idx.month / 12)
rng = np.random.default_rng(1)
ts = pd.Series(trend + season + rng.normal(0, 2, 36), index=idx, name="passengers")

print(ts.shape, ts.dtype, ts.isna().sum())
print(ts.describe())
ts.plot(title="Monthly passenger-like series")
plt.tight_layout()
plt.show()`,
  output: tsP("Printed shape, dtype, missing count, descriptive statistics and a 36-month line chart with a rise and a repeating wave. Random noise uses a fixed seed so your local run should match this construction, but do not treat printed means as official exam constants."),
  result: tsP("EDA confirms a regular monthly index and no missing values. The plot shows long-term increase plus a seasonal wave. That is enough to justify later seasonal thinking in Unit 3, without fitting SARIMA yet."),
  note: "Plot the data before choosing a model."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p2-03"] = tsLab({
  title: "P2.03 Moving Average Smoothing",
  problem: tsP("Apply a 3-month moving average to a noisy monthly series and explain what smoothing does."),
  outcomes: tsList([
    "Compute a simple moving average.",
    "Explain the purpose and a limitation of smoothing."
  ]),
  hint: tsP("pandas rolling(window=3).mean() is a simple moving average."),
  theory: tsP("Smoothing reduces short-term fluctuation so the underlying movement is easier to see. A moving average replaces each point by the mean of neighbouring points. It can hide sudden genuine shocks."),
  dataset: tsP("Constructed 12 monthly values with noise. Teaching data."),
  code: `import pandas as pd
import matplotlib.pyplot as plt

idx = pd.date_range("2025-01-01", periods=12, freq="MS")
y = pd.Series([10, 13, 11, 16, 15, 20, 18, 22, 21, 25, 24, 28], index=idx)
smooth = y.rolling(window=3, center=True).mean()

y.plot(marker="o", label="original")
smooth.plot(marker="o", label="3-month MA")
plt.legend()
plt.title("Moving average smoothing")
plt.tight_layout()
plt.show()
print(pd.DataFrame({"y": y, "ma3": smooth.round(2)}))`,
  output: tsP("A table of original and smoothed values. End points of a centred MA are missing. The smoothed line is less jagged."),
  result: tsP("The moving average follows the rise but damps month-to-month jumps. Students should notice lost sharpness at turning points."),
  note: "A moving average reduces short-term fluctuations but may hide sudden changes."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p2-04"] = tsLab({
  title: "P2.04 Original vs Smoothed Series",
  problem: tsP("Compare the original series with 3-month and 5-month moving averages and discuss the bias-smoothness trade-off."),
  outcomes: tsList([
    "See that a longer window is smoother.",
    "See that a longer window reacts more slowly."
  ]),
  theory: tsP("A longer moving-average window removes more noise and more signal. There is no universally best window."),
  dataset: tsP("Same teaching series as P2.03, extended by repeating the comparison."),
  code: `import pandas as pd
import matplotlib.pyplot as plt

idx = pd.date_range("2025-01-01", periods=12, freq="MS")
y = pd.Series([10, 13, 11, 16, 15, 20, 18, 22, 21, 25, 24, 28], index=idx)
y.plot(label="original")
y.rolling(3, center=True).mean().plot(label="MA3")
y.rolling(5, center=True).mean().plot(label="MA5")
plt.legend()
plt.tight_layout()
plt.show()`,
  output: tsP("One chart with three lines. MA5 is smoother and lags more than MA3."),
  result: tsP("MA3 keeps more local detail. MA5 is easier to read as a trend but slower to show a genuine jump. Choice depends on the question."),
  note: "Smoothing is a display and exploration tool, not automatically a forecast model."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p2-05"] = tsLab({
  title: "P2.05 Numerical Description",
  problem: tsP("Compute numerical summaries of a quarterly profit series and relate them to the plot."),
  outcomes: tsList([
    "Report mean, median, min, max and standard deviation.",
    "Say what a large standard deviation means for forecasting."
  ]),
  theory: tsP("Numerical description summarises level and spread. For time series, summaries ignore order unless you also compute growth rates or split by season."),
  dataset: tsP("Constructed 8 quarterly profits: 12, 15, 14, 18, 20, 19, 23, 25."),
  code: `import pandas as pd

idx = pd.period_range("2024Q1", periods=8, freq="Q")
profit = pd.Series([12, 15, 14, 18, 20, 19, 23, 25], index=idx, name="profit")
print(profit.describe())
print("Range:", profit.max() - profit.min())`,
  output: tsP("A describe() table for these eight numbers, including mean and std, plus the range 13."),
  result: tsP("The mean sits near the middle of a rising series, so it is a poor description of the latest level. Spread matters because a wider series is harder to forecast tightly."),
  note: "A single mean can mislead when the series has a trend. Always pair numbers with a plot."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p2-06"] = tsLab({
  title: "P2.06 Central Tendency and Dispersion",
  problem: tsP("Compare mean vs median and standard deviation vs IQR on a series that contains one spike."),
  outcomes: tsList([
    "See that the mean is pulled by a spike.",
    "See that the median and IQR are more resistant."
  ]),
  theory: tsP("Mean and standard deviation use all values and are sensitive to outliers. Median and IQR are more robust. Time series often contain irregular shocks."),
  dataset: tsP("Teaching series: 10, 11, 12, 12, 13, 40, 14, 15."),
  code: `import pandas as pd

s = pd.Series([10, 11, 12, 12, 13, 40, 14, 15])
print("Mean:", s.mean(), "Median:", s.median())
print("Std:", round(s.std(), 2), "IQR:", s.quantile(0.75) - s.quantile(0.25))`,
  output: tsP("Mean larger than median; std larger relative to IQR because of the 40 spike."),
  result: tsP("The spike is an irregular observation. Using only the mean would overstate the typical level. Students should inspect the plot before trusting a mean forecast."),
  note: "Irregular shocks inflate the mean and the standard deviation."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p2-07"] = tsLab({
  title: "P2.07 Logarithmic Transformation",
  problem: tsP("A positive series grows with increasing variation. Compare the original plot with a log plot and explain when a log is helpful."),
  outcomes: tsList([
    "Apply a log transform to positive data.",
    "Explain that logs can stabilise relative growth."
  ]),
  hint: tsP("Use np.log on strictly positive values. Do not log zeros or negatives."),
  theory: tsP("Transformations can stabilise variance or make growth more linear. A logarithm turns multiplicative growth into additive growth. It is not always required."),
  dataset: tsP("Constructed positive series: 20, 24, 30, 38, 50, 66, 90, 125."),
  code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

y = pd.Series([20, 24, 30, 38, 50, 66, 90, 125])
fig, axes = plt.subplots(1, 2, figsize=(9, 4))
y.plot(ax=axes[0], marker="o", title="Original")
np.log(y).plot(ax=axes[1], marker="o", title="Log")
plt.tight_layout()
plt.show()`,
  output: tsP("Two plots: original curve steepening upward, log series closer to a straight rise."),
  result: tsP("If variation grows with the level, a log scale can make the pattern easier to model. Forecasts on the log scale must be converted back carefully."),
  note: "Use a log only for positive data, and interpret results on the original scale when the decision uses original units."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p2-08"] = tsLab({
  title: "P2.08 Unusual Observations",
  problem: tsP("Detect an unusual month in a demand series and discuss whether to adjust it before a simple forecast."),
  outcomes: tsList([
    "Flag an observation that breaks the local pattern.",
    "State a transparent adjustment option."
  ]),
  theory: tsP("Unusual observations may be errors or genuine shocks. Adjustment is a judgement: replacing a known strike month by a neighbour can help a short-term forecast, but it must be documented."),
  dataset: tsP("Monthly demand 40, 42, 41, 43, 12, 45, 46. The 12 is a simulated disruption."),
  code: `import pandas as pd

idx = pd.date_range("2025-01-01", periods=7, freq="MS")
y = pd.Series([40, 42, 41, 43, 12, 45, 46], index=idx)
median = y.median()
flag = y[y < median - 10]
print("Flagged:", flag)

adjusted = y.copy()
adjusted.loc[flag.index] = y.drop(flag.index).mean()
print(pd.DataFrame({"original": y, "adjusted": adjusted.round(1)}))`,
  output: tsP("The month with 12 is flagged. The adjusted table replaces it by the mean of the other months."),
  result: tsP("If the 12 was a one-off closure, adjustment may be reasonable for studying the usual level. If it can happen again, the shock is part of the risk and should not be hidden."),
  note: "Never silently delete a shock. Record why an adjustment was made."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p2-09"] = tsLab({
  title: "P2.09 General Forecasting Workflow",
  problem: tsP("Write and implement the general modelling cycle on a short series: display, describe, choose a simple model, check residuals of the naive method, and plan monitoring."),
  outcomes: tsList([
    "Follow display then describe then model.",
    "Inspect naive residuals."
  ]),
  theory: tsP("A general approach is: plot, summarise, transform if needed, choose a model, check residuals, forecast, then monitor against later actuals."),
  dataset: tsP("Constructed 10 monthly observations."),
  code: `import pandas as pd

y = pd.Series([5, 6, 6, 7, 9, 8, 10, 11, 10, 12])
naive = y.shift(1)
resid = y - naive
print(pd.DataFrame({"y": y, "naive": naive, "residual": resid}))
print("Mean residual after first obs:", round(resid.iloc[1:].mean(), 3))`,
  output: tsP("A table of naive one-step residuals. The mean residual is computed from these 10 numbers."),
  result: tsP("If naive residuals still show a pattern, a mean is not enough. That is the Unit 2 message: the workflow includes residual inspection, even for a simple method."),
  note: "A method is not finished until residuals and later actuals have been looked at."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p2-10"] = tsLab({
  title: "P2.10 Evaluate Forecast Performance",
  problem: tsP("Hold out the last 4 months of a 20-month series, produce a trailing-mean forecast, and compute MAE, RMSE and MAPE. Explain each metric."),
  outcomes: tsList([
    "Use a hold-out window.",
    "Compute MAE, RMSE and MAPE and interpret them."
  ]),
  kaggle: tsList([
    "Inspect series",
    "Train/test split in time",
    "Fit a simple method on train only",
    "Forecast the hold-out",
    "Compute error metrics",
    "Plot actual vs predicted"
  ]),
  theory: tsP("MAE is the average absolute error (same units as the data). RMSE penalises large errors more. MAPE is a percentage error and is unstable if actuals are near zero. Metrics should match the decision."),
  dataset: tsP("Constructed 20 monthly values. Teaching data."),
  code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

idx = pd.date_range("2024-01-01", periods=20, freq="MS")
y = pd.Series(np.linspace(30, 50, 20) + np.sin(np.arange(20)), index=idx)
train, test = y.iloc[:-4], y.iloc[-4:]
pred = pd.Series(train.tail(4).mean(), index=test.index)

err = test - pred
mae = err.abs().mean()
rmse = np.sqrt((err ** 2).mean())
mape = (err.abs() / test.abs()).mean() * 100

print("MAE:", round(mae, 3))
print("RMSE:", round(rmse, 3))
print("MAPE %:", round(mape, 2))
test.plot(label="actual")
pred.plot(label="forecast", style="--")
plt.legend()
plt.tight_layout()
plt.show()`,
  output: tsP("Printed MAE, RMSE and MAPE for this constructed hold-out, plus an actual-vs-forecast plot. Do not memorise the printed numbers as official answers."),
  result: tsP("MAE is easiest to explain in original units. RMSE is larger if one month is badly wrong. MAPE is useful here because values are well above zero. All three are computed on months not used to form the trailing mean."),
  note: "Forecast accuracy should be evaluated on data not used for fitting whenever possible."
});


// ============================================================
// UNIT 3
// ============================================================

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p3-01"] = tsLab({
  title: "P3.01 Calculate and Plot ACF",
  problem: tsP("Compute and plot the sample autocorrelation function of a slowly changing series and of a white-noise series."),
  outcomes: tsList([
    "Calculate sample ACF using statsmodels.",
    "Compare a persistent series with noise."
  ]),
  theory: tsP("Autocorrelation measures linear dependence between a series and its lagged values. For white noise, ACF should be near zero after lag 0. For a persistent series, ACF decays slowly."),
  dataset: tsP("Two constructed series of length 80: a random walk-like cumsum of noise, and independent noise. Teaching data."),
  code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.graphics.tsaplots import plot_acf

rng = np.random.default_rng(7)
e = rng.normal(size=80)
rw = pd.Series(np.cumsum(e))
wn = pd.Series(e)

fig, axes = plt.subplots(1, 2, figsize=(9, 4))
plot_acf(rw, ax=axes[0], title="ACF of persistent series")
plot_acf(wn, ax=axes[1], title="ACF of white noise")
plt.tight_layout()
plt.show()`,
  output: tsP("Two ACF bar plots. The persistent series shows many significant early lags; white noise bars stay inside the confidence bands after lag 0."),
  result: tsP("ACF is a dependence diagnostic. It does not by itself name the 'true' model, but it tells you whether independence is plausible."),
  note: "ACF helps identify dependence between current and past observations."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p3-02"] = tsLab({
  title: "P3.02 Interpret the ACF",
  problem: tsP("Given ACF patterns, match them to: white noise, slow decay, and a strong seasonal lag at 12."),
  outcomes: tsList([
    "Interpret slow decay as persistence.",
    "Interpret a spike at lag 12 as possible monthly seasonality."
  ]),
  theory: tsP("Slow ACF decay suggests nonstationarity or strong persistence. A spike at a seasonal lag suggests seasonality. Cutting off after a few lags can suggest a moving-average pattern, but interpretation should be cautious with small samples."),
  dataset: tsP("No external file. Students interpret plots produced in P3.01 and a seasonal constructed series."),
  code: `import numpy as np
import pandas as pd
from statsmodels.tsa.stattools import acf

rng = np.random.default_rng(3)
n = 120
seasonal = pd.Series(np.sin(2 * np.pi * np.arange(n) / 12) + rng.normal(0, 0.2, n))
vals = acf(seasonal, nlags=15, fft=True)
print("ACF lag 1:", round(vals[1], 3))
print("ACF lag 12:", round(vals[12], 3))`,
  output: tsP("Printed ACF at lags 1 and 12 for this constructed seasonal series. Lag 12 should be relatively large compared with nearby non-seasonal lags."),
  result: tsP("If lag 12 stands out, a seasonal term is worth considering later. Do not jump to a full SARIMA from one number."),
  note: "Read ACF together with a time plot, not in isolation."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p3-03"] = tsLab({
  title: "P3.03 Calculate and Plot PACF",
  problem: tsP("Plot the partial autocorrelation function of an AR-like constructed series."),
  outcomes: tsList([
    "Compute PACF.",
    "Contrast PACF with ACF."
  ]),
  theory: tsP("Partial autocorrelation at lag k is the correlation after removing the linear effect of lags 1 to k-1. For a pure AR(p) process, PACF tends to cut off after lag p, while ACF tails off."),
  dataset: tsP("Constructed AR(1)-like series using a recursion. Teaching data."),
  code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.graphics.tsaplots import plot_pacf

rng = np.random.default_rng(5)
e = rng.normal(size=120)
y = np.zeros(120)
for t in range(1, 120):
    y[t] = 0.7 * y[t-1] + e[t]
s = pd.Series(y)

plot_pacf(s, lags=15, method="ywm", title="PACF of AR(1)-like series")
plt.tight_layout()
plt.show()`,
  output: tsP("A PACF plot. Lag 1 should dominate; later lags should be smaller. Finite samples will not be textbook-perfect."),
  result: tsP("A large PACF at lag 1 and small later PACF values is consistent with a simple AR(1) idea. This is educational pattern recognition, not a proof."),
  note: "PACF helps suggest autoregressive order; it does not replace residual checks."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p3-04"] = tsLab({
  title: "P3.04 Interpret the PACF",
  problem: tsP("Explain why ACF of an AR(1) tails off while PACF cuts off, using the series from P3.03."),
  outcomes: tsList([
    "State the tail-off vs cut-off teaching rule.",
    "Use the rule cautiously."
  ]),
  theory: tsP("Teaching rule: AR(p) has ACF tailing off and PACF cutting off after p. MA(q) has ACF cutting off after q and PACF tailing off. Mixed ARMA shows tails in both. Real data are mixed and samples are finite."),
  dataset: tsP("Reuse the AR(1)-like constructed series."),
  code: `import numpy as np
from statsmodels.tsa.stattools import acf, pacf

rng = np.random.default_rng(5)
e = rng.normal(size=120)
y = np.zeros(120)
for t in range(1, 120):
    y[t] = 0.7 * y[t-1] + e[t]
print("ACF 1-5:", np.round(acf(y, nlags=5, fft=True)[1:], 3))
print("PACF 1-5:", np.round(pacf(y, nlags=5), 3)[1:])`,
  output: tsP("Printed ACF values decaying and PACF large mainly at lag 1 for this simulation."),
  result: tsP("The numbers illustrate the teaching rule. Students should still plot data and later check residuals after fitting."),
  note: "Identification rules are guides, not automatic model selectors."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p3-05"] = tsLab({
  title: "P3.05 Fit a Simple AR Model",
  problem: tsP("Fit AR(1) to the constructed persistent series. Explain the coefficient in words."),
  outcomes: tsList([
    "Fit AutoReg or ARIMA with MA terms shut off.",
    "Interpret a coefficient near 0.7 as persistence."
  ]),
  theory: tsP("An AR(1) model says today's value depends on yesterday's value plus noise. The coefficient should be less than 1 in absolute value for a weakly stationary AR(1)."),
  dataset: tsP("Same AR(1)-like construction as P3.03."),
  code: `import numpy as np
import pandas as pd
from statsmodels.tsa.ar_model import AutoReg

rng = np.random.default_rng(5)
e = rng.normal(size=120)
y = np.zeros(120)
for t in range(1, 120):
    y[t] = 0.7 * y[t-1] + e[t]
y = pd.Series(y)

model = AutoReg(y, lags=1, old_names=False).fit()
print(model.summary())`,
  output: tsP("A statsmodels summary with an AR lag-1 coefficient. In this construction it should be around 0.7, but the fitted number will not be exact."),
  result: tsP("A coefficient near 0.7 means a high value tends to be followed by another fairly high value. That is persistence, not a seasonal model."),
  note: "Fit a simple AR only after plots suggest short-lag dependence and the series looks reasonably stable in level."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p3-06"] = tsLab({
  title: "P3.06 Fit a Moving-Average Model",
  problem: tsP("Fit MA(1) to a constructed series where noise is smoothed by a one-lag shock, and explain MA in words."),
  outcomes: tsList([
    "Describe MA(1) as today's value depending on the last shock.",
    "Fit ARIMA(0,0,1)."
  ]),
  theory: tsP("An MA(1) model uses the previous error, not the previous observation. ACF of a true MA(1) cuts off after lag 1."),
  dataset: tsP("Constructed MA(1): y_t = e_t + 0.6 e_{t-1}."),
  code: `import numpy as np
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA

rng = np.random.default_rng(8)
e = rng.normal(size=150)
y = pd.Series(e + 0.6 * np.r_[0, e[:-1]])
fit = ARIMA(y, order=(0, 0, 1)).fit()
print(fit.summary())`,
  output: tsP("An ARIMA(0,0,1) summary. The MA coefficient should be in the neighbourhood of 0.6 for this construction."),
  result: tsP("MA terms capture short-lived shocks. If ACF cuts off quickly, an MA model is a candidate. Always confirm with residuals."),
  note: "MA is about shocks, AR is about past values. They are not the same idea."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p3-07"] = tsLab({
  title: "P3.07 Fit an ARMA Model",
  problem: tsP("Fit ARMA(1,1) to a mixed constructed series and explain why both AR and MA may be needed."),
  outcomes: tsList([
    "State ARMA as AR plus MA on a stationary series.",
    "Avoid over-parameterising a short series."
  ]),
  theory: tsP("ARMA(p,q) combines autoregression and moving average on a stationary series (d = 0). Small p and q are preferred for teaching series."),
  dataset: tsP("Constructed stationary mix of AR and MA shocks. Teaching data."),
  code: `import numpy as np
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA

rng = np.random.default_rng(9)
e = rng.normal(size=160)
y = np.zeros(160)
for t in range(1, 160):
    y[t] = 0.4 * y[t-1] + e[t] + 0.3 * e[t-1]
y = pd.Series(y)
fit = ARIMA(y, order=(1, 0, 1)).fit()
print(fit.summary())
print("AIC:", round(fit.aic, 1))`,
  output: tsP("A model summary and AIC. Coefficients will be near the construction values but not identical."),
  result: tsP("ARMA is for stationary mixed dependence. If the level wanders, differencing (ARIMA) is considered next. AIC is a comparison aid, not a substitute for plots."),
  note: "Choose small orders first. Extra parameters can fit noise."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p3-08"] = tsLab({
  title: "P3.08 Fit an ARIMA Model",
  problem: tsP("A random-walk-like series needs differencing. Compare ARIMA(0,1,0) with ARIMA(1,1,0) and explain d = 1."),
  outcomes: tsList([
    "Explain differencing as removing a wandering level.",
    "Choose d from plots, not at random."
  ]),
  theory: tsP("ARIMA(p,d,q) adds differencing. d = 1 means model the changes. A random walk is ARIMA(0,1,0). If ACF of the raw series decays very slowly, try differences and then identify p and q on the differenced series."),
  dataset: tsP("Constructed cumulative-sum series of length 100."),
  code: `import numpy as np
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.stattools import acf

rng = np.random.default_rng(2)
y = pd.Series(np.cumsum(rng.normal(size=100)))
print("ACF raw lag1:", round(acf(y, nlags=1, fft=True)[1], 3))
print("ACF diff lag1:", round(acf(y.diff().dropna(), nlags=1, fft=True)[1], 3))
fit = ARIMA(y, order=(0, 1, 0)).fit()
print(fit.summary())`,
  output: tsP("Raw ACF lag 1 near 1, differenced ACF much smaller, plus a simple ARIMA(0,1,0) summary."),
  result: tsP("d = 1 is motivated by the wandering plot and slow ACF, not by guessing (2,2,2). After differencing, remaining AR/MA terms are considered only if the differenced ACF/PACF show structure."),
  note: "Do not pick p,d,q arbitrarily. Start from the plot and the ACF of the differenced series."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p3-09"] = tsLab({
  title: "P3.09 Forecast Using ARIMA",
  problem: tsP("Fit a justified ARIMA to a wandering teaching series, forecast 6 steps, plot history vs forecast, and report hold-out MAE if you leave out the last 6 points."),
  outcomes: tsList([
    "Produce a multi-step ARIMA forecast.",
    "Plot and evaluate on a time-based hold-out."
  ]),
  theory: tsP("After identifying a simple ARIMA, forecasts are the model's expected future path. Intervals widen with horizon. Evaluate on later observations not used in fitting."),
  dataset: tsP("Constructed 80-point cumulative series. Teaching data."),
  code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA

rng = np.random.default_rng(4)
y = pd.Series(np.cumsum(rng.normal(size=80)))
train, test = y.iloc[:-6], y.iloc[-6:]
fit = ARIMA(train, order=(0, 1, 0)).fit()
fc = fit.get_forecast(steps=6)
mean = fc.predicted_mean
print(mean)
mae = np.mean(np.abs(test.values - mean.values))
print("Hold-out MAE:", round(mae, 3))
train.plot(label="train")
test.plot(label="test")
mean.plot(label="forecast", style="--")
plt.legend()
plt.tight_layout()
plt.show()`,
  output: tsP("A six-step forecast table, hold-out MAE for this simulation, and a plot of train, test and forecast. Random-walk forecasts stay near the last train value."),
  result: tsP("ARIMA(0,1,0) forecasts a flat line at the last level. That is correct for a pure random walk mean. MAE describes average miss on the six hold-out points of this run."),
  note: "A good ARIMA forecast still needs a plot and an error metric on unused dates."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p3-10"] = tsLab({
  title: "P3.10 Seasonal SARIMA Forecasting",
  problem: tsP("Using a constructed monthly seasonal series, inspect seasonality, fit a small SARIMA, and forecast one year. Explain seasonal order in words."),
  outcomes: tsList([
    "Identify period 12 from the plot/ACF.",
    "Fit a small seasonal ARIMA and forecast."
  ]),
  kaggle: tsList([
    "Inspect and plot",
    "ACF at seasonal lags",
    "Choose a small seasonal order",
    "Fit on train months",
    "Forecast 12 months",
    "MAE/RMSE on hold-out year if length allows"
  ]),
  theory: tsP("Seasonal ARIMA adds seasonal AR, differencing and MA at lag s (s = 12 for months). A teaching starting point is often a small model such as (0,1,1)(0,1,1,12) after seeing trend plus yearly seasonality, then checking residuals. Do not start with a large grid of orders."),
  dataset: tsP("Constructed 72 monthly observations with trend and yearly season. Teaching data, airline-passenger-like in spirit, not a downloaded file."),
  code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.statespace.sarimax import SARIMAX

idx = pd.date_range("2019-01-01", periods=72, freq="MS")
t = np.arange(72)
y = pd.Series(0.4 * t + 8 * np.sin(2 * np.pi * t / 12) + 50, index=idx)
train, test = y.iloc[:-12], y.iloc[-12:]
fit = SARIMAX(train, order=(0, 1, 1), seasonal_order=(0, 1, 1, 12),
              enforce_stationarity=False, enforce_invertibility=False).fit(disp=False)
fc = fit.get_forecast(12).predicted_mean
mae = np.mean(np.abs(test - fc))
print(fit.summary())
print("Hold-out MAE:", round(mae, 3))
train.plot(label="train")
test.plot(label="test")
fc.plot(label="SARIMA forecast", style="--")
plt.legend()
plt.tight_layout()
plt.show()`,
  output: tsP("A SARIMAX summary, a 12-month forecast line, and hold-out MAE for this constructed series. Seasonal wiggles in the forecast should resemble the yearly pattern."),
  result: tsP("s = 12 because the data are monthly. Seasonal differencing D = 1 is motivated by a repeating yearly shape plus a drifting level. Residual plots should still be checked before trusting the forecast."),
  note: "Seasonal ARIMA is for repeating calendar patterns. It is not the first tool in Unit 1."
});


// ============================================================
// UNIT 4
// ============================================================

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p4-01"] = tsLab({
  title: "P4.01 Linear Regression with Time",
  problem: tsP("Fit a simple linear regression of monthly sales on a time index. Explain the slope as an average change per month, and state why this is not the same as an ARIMA model."),
  outcomes: tsList([
    "Treat time as a predictor in OLS.",
    "Interpret intercept and slope in original units.",
    "State the independence assumption carefully."
  ]),
  hint: tsP("Create t = 0, 1, 2, ... then regress sales on t. Plot fitted line against the series."),
  theory: tsP("A trend regression says Y_t = β0 + β1 t + ε_t. Ordinary least squares finds β0 and β1 by minimising the sum of squared residuals. The slope is the average change in Y per unit time if the linear form is adequate. OLS assumes independent errors. Time series errors are often correlated, so OLS can still describe a trend but inference may be misleading. Regression does not automatically remove autocorrelation."),
  dataset: tsP("Constructed 24 monthly sales figures with a gentle rise and modest noise. Teaching data."),
  code: `# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm

# Load a small monthly series
idx = pd.date_range("2024-01-01", periods=24, freq="MS")
t = np.arange(24)
sales = 80 + 1.5 * t + np.array([
    2, -1, 3, 0, -2, 4, 1, -3, 2, 0, -1, 3,
    1, -2, 2, 0, 1, -1, 3, -2, 0, 2, -1, 1
])
y = pd.Series(sales, index=idx, name="sales")

# Inspect
print(y.head())
print("Shape:", y.shape)

# Prepare datetime-aligned time index as a predictor
X = sm.add_constant(t)

# Fit OLS
model = sm.OLS(y.values, X).fit()
print(model.summary())

# Visualize actual vs fitted
fitted = pd.Series(model.fittedvalues, index=idx)
y.plot(marker="o", label="sales")
fitted.plot(label="OLS trend", style="--")
plt.title("Sales with linear time trend")
plt.legend()
plt.tight_layout()
plt.show()`,
  output: tsP("A 24-row series preview, a regression summary with intercept near 80 and slope near 1.5, and a plot of sales with a straight fitted trend. Exact coefficients will be close to the construction values but not identical."),
  result: tsP("The slope estimates the average monthly increase under a straight-line trend. The line summarises direction. It does not model seasonal wiggles or lagged dependence. Residuals should still be checked in later practicals."),
  note: "A time trend regression describes average change with t. It is not an ARIMA model and does not by itself fix autocorrelated errors."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p4-02"] = tsLab({
  title: "P4.02 Least Squares Estimation",
  problem: tsP("Compute OLS intercept and slope for a tiny six-point series both with the normal equations and with statsmodels, then confirm they match."),
  outcomes: tsList([
    "State the least-squares criterion.",
    "Estimate β0 and β1 from formulas.",
    "Check the software estimate against the formulas."
  ]),
  theory: tsP("Least squares chooses coefficients that minimise Σ(y_t − β0 − β1 x_t)². For simple regression, β1 = Σ(x − x̄)(y − ȳ) / Σ(x − x̄)² and β0 = ȳ − β1 x̄. The fitted line passes through the point of means. This is a calculation practical: students should see that the software is doing the same arithmetic."),
  dataset: tsP("Six observations: t = 1..6 and y = 10, 12, 13, 15, 16, 18. Teaching data small enough to compute by hand."),
  code: `import numpy as np
import statsmodels.api as sm

x = np.arange(1, 7, dtype=float)
y = np.array([10, 12, 13, 15, 16, 18], dtype=float)

# Least-squares formulas
xbar, ybar = x.mean(), y.mean()
beta1 = np.sum((x - xbar) * (y - ybar)) / np.sum((x - xbar) ** 2)
beta0 = ybar - beta1 * xbar
print("Hand slope:", round(beta1, 4))
print("Hand intercept:", round(beta0, 4))

# Same fit with OLS
X = sm.add_constant(x)
fit = sm.OLS(y, X).fit()
print("Software intercept, slope:", np.round(fit.params, 4))`,
  output: tsP("Printed intercept and slope from the formulas and the same pair from statsmodels. For this six-point table the two methods must agree to rounding error. Students can also compute the slope on paper."),
  result: tsP("Agreement shows that 'least squares' is a defined calculation, not a mysterious black box. Later practicals add standard errors and residual plots on top of these same coefficients."),
  note: "OLS estimates minimise squared residuals. Matching the formula to software builds trust in the numbers."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p4-03"] = tsLab({
  title: "P4.03 Statistical Inference in Regression",
  problem: tsP("Using the 24-month sales trend from P4.01, report coefficient standard errors, a 95% confidence interval for the slope, and the t-test of H0: slope = 0. Then warn about autocorrelation."),
  outcomes: tsList([
    "Read standard errors and confidence intervals.",
    "Interpret a slope t-test in words.",
    "State that i.i.d. error inference can fail for time series."
  ]),
  theory: tsP("Under classical OLS assumptions, each coefficient has a standard error. A 95% confidence interval is estimate ± t-critical × SE. The t-statistic tests whether a coefficient could be zero. If residuals are autocorrelated, those SEs and p-values are often too optimistic. Report the numbers, then treat them as tentative until residual ACF is checked."),
  dataset: tsP("Same constructed 24-month sales series as P4.01."),
  code: `import numpy as np
import pandas as pd
import statsmodels.api as sm

t = np.arange(24)
sales = 80 + 1.5 * t + np.array([
    2, -1, 3, 0, -2, 4, 1, -3, 2, 0, -1, 3,
    1, -2, 2, 0, 1, -1, 3, -2, 0, 2, -1, 1
])
X = sm.add_constant(t)
fit = sm.OLS(sales, X).fit()

print(fit.summary().tables[1])
print("Slope 95% CI:", fit.conf_int()[1])
print("Slope t-stat:", round(fit.tvalues[1], 3))
print("Slope p-value:", round(fit.pvalues[1], 4))`,
  output: tsP("A coefficient table with std err, t, P>|t|, and a printed 95% interval for the slope. For this constructed upward series the slope interval should lie above zero, but do not memorise a fabricated p-value."),
  result: tsP("If the slope interval excludes zero, the linear time term is statistically detectable under OLS assumptions. Those assumptions include uncorrelated errors. A later residual ACF may show that the reported p-value should not be treated as exact."),
  note: "Standard errors and p-values assume the model errors behave as stated. Autocorrelation can invalidate ordinary OLS inference."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p4-04"] = tsLab({
  title: "P4.04 Predict New Observations",
  problem: tsP("Use the fitted trend to predict sales for the next three months. Distinguish a point prediction from a prediction interval, and keep forecasts in chronological order."),
  outcomes: tsList([
    "Form new t values beyond the sample.",
    "Produce point predictions.",
    "Read a prediction interval as a range, not a guarantee."
  ]),
  theory: tsP("Prediction plugs a new x into the fitted equation. A confidence interval for the mean response is narrower than a prediction interval for a new observation, because a new point also has error variance. Extrapolating far beyond the observed t range is risky if the trend changes."),
  dataset: tsP("Same 24-month constructed sales series. Forecast months 25–27."),
  code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm

idx = pd.date_range("2024-01-01", periods=24, freq="MS")
t = np.arange(24)
sales = 80 + 1.5 * t + np.array([
    2, -1, 3, 0, -2, 4, 1, -3, 2, 0, -1, 3,
    1, -2, 2, 0, 1, -1, 3, -2, 0, 2, -1, 1
])
y = pd.Series(sales, index=idx)
X = sm.add_constant(t)
fit = sm.OLS(y.values, X).fit()

# New time points for three months ahead
t_new = np.arange(24, 27)
X_new = sm.add_constant(t_new, has_constant="add")
pred = fit.get_prediction(X_new).summary_frame(alpha=0.05)
pred.index = pd.date_range("2026-01-01", periods=3, freq="MS")
print(pred[["mean", "obs_ci_lower", "obs_ci_upper"]])

# Plot history and predicted means
ax = y.plot(label="history")
pred["mean"].plot(ax=ax, style="o--", label="forecast")
plt.legend()
plt.tight_layout()
plt.show()`,
  output: tsP("A three-row table with predicted mean and lower/upper observation intervals, plus a plot continuing the trend line. Interval widths depend on residual variance; do not invent a single memorised number."),
  result: tsP("The next three months follow the same slope. The interval is a plausible range for a new observation under the linear model, not a promise. If seasonality exists, a pure time trend will miss the seasonal peak or trough."),
  note: "Prediction extends the fitted equation forward. A prediction interval is wider than an interval for the mean line."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p4-05"] = tsLab({
  title: "P4.05 Residual Adequacy Checks",
  problem: tsP("After fitting the sales-on-time regression, plot residuals against time, inspect residual ACF, and decide whether ordinary OLS looks adequate."),
  outcomes: tsList([
    "Plot residuals versus time.",
    "Look for leftover pattern or autocorrelation.",
    "Conclude adequacy cautiously."
  ]),
  theory: tsP("Adequacy checking asks whether residuals look like unstructured noise. A trend left in residuals means the mean model is incomplete. A residual ACF spike means errors are dependent, so OLS t-tests are doubtful and a time-series error model or GLS may be needed. Residual plots do not prove a model is true; they can show it is incomplete."),
  dataset: tsP("Same 24-month sales series. Optional comparison: a series with leftover sine seasonality."),
  code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm
from statsmodels.graphics.tsaplots import plot_acf

t = np.arange(24)
sales = 80 + 1.5 * t + np.array([
    2, -1, 3, 0, -2, 4, 1, -3, 2, 0, -1, 3,
    1, -2, 2, 0, 1, -1, 3, -2, 0, 2, -1, 1
])
fit = sm.OLS(sales, sm.add_constant(t)).fit()
resid = pd.Series(fit.resid)

fig, axes = plt.subplots(1, 2, figsize=(9, 4))
resid.plot(ax=axes[0], marker="o", title="Residuals vs time")
axes[0].axhline(0, color="gray")
plot_acf(resid, ax=axes[1], title="Residual ACF")
plt.tight_layout()
plt.show()
print("Residual mean:", round(resid.mean(), 4))`,
  output: tsP("A residual time plot centred near zero and an ACF plot. For this almost-linear construction, leftover ACF should be weaker than in a strongly seasonal leftover example. Describe the pattern you see; do not invent a Durbin–Watson number unless you compute it."),
  result: tsP("If residuals wander or the ACF stays large, the linear trend is not a complete time-series model. OLS may still be a useful trend summary, but inference and short-term forecasts need a better error structure."),
  note: "Always inspect residuals. Ordinary regression does not automatically solve autocorrelation."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p4-06"] = tsLab({
  title: "P4.06 Variable Selection",
  problem: tsP("A monthly series may depend on time, a seasonal dummy for December, and a promotional flag. Compare a time-only model with a fuller model using AIC and residual plots. Do not keep useless predictors."),
  outcomes: tsList([
    "Fit nested regression models.",
    "Use AIC as a comparison aid.",
    "Prefer a simpler model when extra variables add little."
  ]),
  theory: tsP("Variable selection chooses which predictors to keep. Adding variables can reduce in-sample error while fitting noise. AIC penalises extra parameters. For teaching, compare a small set of sensible candidates rather than an automated hunt through dozens of columns. Seasonal dummies and a time trend are interpretable; random extra columns are not."),
  dataset: tsP("Constructed 36 monthly observations: trend, a December lift, and a weak random promo flag that is mostly noise."),
  code: `import numpy as np
import pandas as pd
import statsmodels.api as sm

idx = pd.date_range("2023-01-01", periods=36, freq="MS")
t = np.arange(36)
dec = (idx.month == 12).astype(int)
rng = np.random.default_rng(1)
promo = rng.binomial(1, 0.2, 36)
y = 40 + 0.8 * t + 12 * dec + rng.normal(0, 2, 36)

def fit(cols, names):
    X = sm.add_constant(np.column_stack(cols))
    m = sm.OLS(y, X).fit()
    print(names, "AIC:", round(m.aic, 1), "params:", np.round(m.params, 3))
    return m

m1 = fit([t], "time only")
m2 = fit([t, dec], "time + December")
m3 = fit([t, dec, promo], "time + December + promo")`,
  output: tsP("Three AIC values and coefficient vectors. Time + December should improve on time only for this construction. The promo flag should look weak or unstable. Exact AIC numbers depend on the random draw."),
  result: tsP("Keep predictors that match a real mechanism and improve AIC without wrecking residual plots. Dropping the noisy promo flag is good science, not a failure. Selection is not a substitute for checking autocorrelation."),
  note: "Compare a few interpretable models. Extra variables can fit noise and still leave time-series dependence in the errors."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p4-07"] = tsLab({
  title: "P4.07 Weighted Least Squares",
  problem: tsP("When later months are noisier than early months, ordinary OLS treats every point equally. Fit WLS with weights that down-weight high-variance periods and compare the slope to OLS."),
  outcomes: tsList([
    "Explain why unequal error variance is a problem for OLS.",
    "Fit WLS with known or estimated weights.",
    "Compare OLS and WLS slopes."
  ]),
  theory: tsP("Weighted least squares minimises Σ w_t (y_t − x_t′β)². If Var(ε_t) is larger for some t, those points should get smaller weight (often w_t = 1/σ_t²). WLS addresses heteroscedasticity, not autocorrelation. Do not treat WLS as a cure for lagged errors."),
  dataset: tsP("Constructed 30-point series whose noise scale grows with time. Teaching data."),
  code: `import numpy as np
import statsmodels.api as sm

rng = np.random.default_rng(0)
t = np.arange(30)
sigma = 0.5 + 0.15 * t
y = 10 + 0.4 * t + rng.normal(0, 1, 30) * sigma
X = sm.add_constant(t)

ols = sm.OLS(y, X).fit()
wls = sm.WLS(y, X, weights=1 / sigma**2).fit()
print("OLS slope:", round(ols.params[1], 3), "SE:", round(ols.bse[1], 3))
print("WLS slope:", round(wls.params[1], 3), "SE:", round(wls.bse[1], 3))`,
  output: tsP("Printed OLS and WLS slopes with their standard errors. They will be similar but not identical. WLS SEs use the weights; they are still not valid if residuals are serially correlated."),
  result: tsP("WLS gives more influence to precise early points. That is appropriate when variance clearly grows. If the real problem is autocorrelation, WLS is the wrong tool and GLS or a lagged-error model is next."),
  note: "WLS handles unequal variances. It does not remove serial correlation."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p4-08"] = tsLab({
  title: "P4.08 GLS and Regression for Time Series",
  problem: tsP("Fit OLS, inspect residual autocorrelation, then fit GLS with an AR(1)-like error covariance. Compare coefficients and explain what GLS is trying to do."),
  outcomes: tsList([
    "Detect leftover AR(1)-like errors after a trend fit.",
    "Fit GLS as a teaching contrast to OLS.",
    "State remaining limitations."
  ]),
  kaggle: tsList([
    "Inspect the series and time plot",
    "Fit OLS trend",
    "Check residual ACF",
    "Build a simple GLS / AR-error regression",
    "Compare coefficients",
    "Interpret whether inference changed"
  ]),
  theory: tsP("Generalised least squares allows a non-scalar error covariance. For time series, a common teaching case is AR(1) errors: the residual at t depends on the residual at t−1. GLS (or feasible GLS) aims for efficient estimates and more honest SEs under that covariance. It still assumes the mean model and the error model are roughly right. It is not a multivariate VAR, and it is not automatic proof that autocorrelation is gone."),
  dataset: tsP("Constructed 40 observations: linear trend plus AR(1) errors. Teaching data, not a public download."),
  code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm
from statsmodels.graphics.tsaplots import plot_acf

rng = np.random.default_rng(6)
n = 40
t = np.arange(n)
e = np.zeros(n)
u = rng.normal(size=n)
for i in range(1, n):
    e[i] = 0.6 * e[i - 1] + u[i]
y = 5 + 0.3 * t + e
X = sm.add_constant(t)

ols = sm.OLS(y, X).fit()
print("OLS slope:", round(ols.params[1], 3), "SE:", round(ols.bse[1], 3))
plot_acf(ols.resid, title="OLS residual ACF")
plt.tight_layout()
plt.show()

# Feasible GLS with AR(1) correlation structure
gls = sm.GLSAR(y, X, rho=1).iterative_fit(maxiter=5)
print(gls.summary().tables[1])`,
  output: tsP("OLS slope and SE, a residual ACF that should show lag-1 dependence for this construction, then a GLSAR coefficient table. GLS SEs often differ from OLS SEs. Do not memorise a single 'correct' slope."),
  result: tsP("OLS described the trend but treated errors as independent. GLS adjusts for AR(1)-like dependence. Students should still plot GLS residuals. Regression with time-series errors is a modelling strategy, not a claim that OLS was 'wrong' as a trend sketch."),
  note: "GLS can account for correlated errors. Ordinary regression does not automatically solve autocorrelation."
});


// ============================================================
// UNIT 5
// ============================================================

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p5-01"] = tsLab({
  title: "P5.01 Multivariate Time Series Idea",
  problem: tsP("Store temperature, electricity demand and a weekday indicator as columns of one time-indexed table. Explain what makes the dataset multivariate rather than three separate unrelated files."),
  outcomes: tsList([
    "Define a multivariate series as several variables observed on the same times.",
    "Align columns on one datetime index.",
    "Give a reason they might move together."
  ]),
  theory: tsP("A multivariate time series records two or more variables at the same dates. Joint structure can include contemporaneous correlation and lagged cross-effects. Analysing each column alone can miss those links. Alignment of timestamps is the first practical step."),
  dataset: tsP("Constructed 14 daily rows: temperature (°C), electricity demand (MWh), and a weekend flag. Teaching data for a small city-like example."),
  code: `import pandas as pd

idx = pd.date_range("2026-01-05", periods=14, freq="D")
df = pd.DataFrame({
    "temp_c": [18, 17, 16, 15, 21, 22, 19, 18, 17, 16, 20, 23, 22, 18],
    "demand_mwh": [31, 32, 33, 34, 28, 27, 30, 31, 33, 34, 29, 26, 27, 31],
    "is_weekend": [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0]
}, index=idx)

print(df)
print("Shape:", df.shape)
print("Columns:", list(df.columns))
print("Aligned index:", df.index.is_monotonic_increasing)`,
  output: tsP("A 14 × 3 table with a daily index, shape (14, 3), and True for a sorted index. Demand is lower on the hotter weekend-like days in this construction."),
  result: tsP("The three columns are one multivariate series because they share dates. Demand may fall when temperature rises or when it is weekend. Later practicals plot and model those links."),
  note: "Multivariate analysis starts with several series sharing the same time index."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p5-02"] = tsLab({
  title: "P5.02 Explore Related Series Together",
  problem: tsP("Using a longer constructed daily set of temperature, demand and a price-like series, inspect, clean if needed, plot each series, and examine pairwise relationships."),
  outcomes: tsList([
    "Run a Kaggle-style inspection of several columns.",
    "Visualise co-movement.",
    "Compute correlations as a descriptive start."
  ]),
  kaggle: tsList([
    "Import libraries",
    "Load the aligned table",
    "Inspect shape, dtypes, missing values",
    "Descriptive statistics",
    "Plot each series",
    "Scatter or correlation view",
    "Interpret co-movement"
  ]),
  theory: tsP("Related series should be explored together before modelling. Correlation describes linear co-movement but is not causation and ignores lag structure. Overlaid plots with dual axes, or separate panels with a shared time axis, are clearer than dumping all units on one scale."),
  dataset: tsP("Constructed 60 daily observations: temperature, electricity demand, and a smoothed price-like index. Classroom data in the spirit of energy-demand studies, not a downloaded Kaggle file."),
  code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

rng = np.random.default_rng(11)
idx = pd.date_range("2025-11-01", periods=60, freq="D")
temp = 15 + 6 * np.sin(2 * np.pi * np.arange(60) / 7) + rng.normal(0, 0.8, 60)
demand = 40 - 0.8 * temp + rng.normal(0, 1.2, 60)
price = 50 + np.cumsum(rng.normal(0, 0.3, 60))
df = pd.DataFrame({"temp_c": temp, "demand_mwh": demand, "price_index": price}, index=idx)

print("Shape:", df.shape)
print(df.dtypes)
print(df.isna().sum())
print(df.describe().round(2))
print("Correlation:\\n", df.corr().round(2))

fig, axes = plt.subplots(3, 1, figsize=(8, 7), sharex=True)
for ax, col in zip(axes, df.columns):
    df[col].plot(ax=ax, title=col)
plt.tight_layout()
plt.show()`,
  output: tsP("Shape (60, 3), dtypes, a missing-value count of zeros, a describe table, a correlation matrix, and three aligned time plots. Temperature and demand should move in opposite directions in this construction."),
  result: tsP("Joint EDA shows whether variables share peaks and troughs. Negative temp–demand correlation here matches a heating-like story. Price may wander more independently. Modelling comes after this picture."),
  note: "Plot related series on a shared time axis before fitting a multivariate model."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p5-03"] = tsLab({
  title: "P5.03 Multivariate Stationary Process",
  problem: tsP("Compare two constructed pairs: a stationary pair that wiggles around stable means, and a pair of wandering cumulative sums. Discuss why joint modelling is easier after the wandering is removed."),
  outcomes: tsList([
    "Describe stationarity as stable mean/variance/dependence.",
    "See that two random walks can look spuriously related.",
    "Difference wandering series before correlation claims."
  ]),
  theory: tsP("A multivariate stationary process has means, variances and lag relationships that do not systematically change with time. Two nonstationary series can show a large correlation even when they are unrelated (spurious correlation). A teaching check is to difference each series and recompute correlation."),
  dataset: tsP("Two constructed bivariate samples of length 80: stationary noise, and independent random walks."),
  code: `import numpy as np
import pandas as pd

rng = np.random.default_rng(3)
n = 80
stat = pd.DataFrame({
    "x": rng.normal(size=n),
    "y": rng.normal(size=n)
})
rw = pd.DataFrame({
    "x": np.cumsum(rng.normal(size=n)),
    "y": np.cumsum(rng.normal(size=n))
})
print("Stationary corr:\\n", stat.corr().round(3))
print("Random-walk corr:\\n", rw.corr().round(3))
print("Differenced RW corr:\\n", rw.diff().dropna().corr().round(3))`,
  output: tsP("Three 2×2 correlation matrices. Stationary independent series should show correlation near 0. Random walks may show a large accidental correlation. After differencing, that correlation should shrink toward 0 in this independent construction."),
  result: tsP("Stationarity is about the process, not a single plot looking 'flat enough'. For multivariate work, check each series and their differences before treating a high correlation as a real link."),
  note: "Unrelated wandering series can look correlated. Difference or otherwise stationarise before strong claims."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p5-04"] = tsLab({
  title: "P5.04 Simple Multivariate Forecast",
  problem: tsP("Fit a small VAR(1) to two related stationary teaching series, forecast both variables a few steps, and plot history against forecasts."),
  outcomes: tsList([
    "Fit a beginner VAR on aligned columns.",
    "Forecast more than one series from the same model.",
    "Evaluate with MAE on a hold-out window."
  ]),
  kaggle: tsList([
    "Inspect bivariate series",
    "Check they are not strongly wandering",
    "Train/test split by time",
    "Fit VAR(1)",
    "Forecast both variables",
    "MAE per variable",
    "Plot"
  ]),
  theory: tsP("A vector autoregression (VAR) lets each variable depend on lags of itself and of the others. VAR(1) is a teaching starting point: one lag, two series. The series should be roughly stationary. VAR is one multivariate forecasting tool; it is not the only one, and large lag orders overfit short samples."),
  dataset: tsP("Constructed 90 observations of two related stationary series (demand-like and temperature-like). Teaching data."),
  code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.api import VAR

rng = np.random.default_rng(4)
n = 90
e1, e2 = rng.normal(size=n), rng.normal(size=n)
x = np.zeros(n)
y = np.zeros(n)
for t in range(1, n):
    x[t] = 0.5 * x[t-1] + 0.2 * y[t-1] + e1[t]
    y[t] = 0.4 * y[t-1] + 0.1 * x[t-1] + e2[t]
df = pd.DataFrame({"x": x, "y": y})
train, test = df.iloc[:-6], df.iloc[-6:]

model = VAR(train).fit(maxlags=1, ic=None)
print(model.summary())
fc = model.forecast(train.values[-1:], steps=6)
fc = pd.DataFrame(fc, index=test.index, columns=["x", "y"])
print("Forecast:\\n", fc.round(3))
print("MAE x:", round(np.mean(np.abs(test["x"] - fc["x"])), 3))
print("MAE y:", round(np.mean(np.abs(test["y"] - fc["y"])), 3))

fig, axes = plt.subplots(2, 1, figsize=(8, 6), sharex=True)
for ax, col in zip(axes, ["x", "y"]):
    train[col].plot(ax=ax, label="train")
    test[col].plot(ax=ax, label="test")
    fc[col].plot(ax=ax, style="--", label="VAR forecast")
    ax.legend()
    ax.set_title(col)
plt.tight_layout()
plt.show()`,
  output: tsP("A VAR summary, a 6-row forecast table for x and y, MAE for each column, and two panels of history vs forecast. Exact MAE depends on the random construction."),
  result: tsP("Each forecast uses information from both series. If one variable helps the other, multivariate MAE can beat separate univariate naive forecasts, but students should compare rather than assume. Hold-out dates must remain later than the training dates."),
  note: "A small VAR is a joint forecast of several stationary series. Large lag orders need more data."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p5-05"] = tsLab({
  title: "P5.05 Compare Forecasts Across Variables",
  problem: tsP("Compare a multivariate VAR(1) forecast with separate last-value naive forecasts for each of two series. Report MAE for each method and each variable."),
  outcomes: tsList([
    "Build a fair time-based hold-out.",
    "Compare multivariate vs naive univariate forecasts.",
    "Read which variable was easier to forecast."
  ]),
  kaggle: tsList([
    "Split by time",
    "Naive forecast per column",
    "VAR forecast",
    "MAE table",
    "Interpret which method wins on this sample"
  ]),
  theory: tsP("A multivariate model is useful only if it improves decisions or accuracy relative to a simple alternative. Last-value naive forecasts are a honest baseline for persistent series. Compare MAE (and RMSE if scale comparison helps) on the same hold-out. A win on one variable and a loss on the other is a real outcome, not a failure of the exercise."),
  dataset: tsP("Reuse the two-series construction from P5.04 (same seed so students can compare)."),
  code: `import numpy as np
import pandas as pd
from statsmodels.tsa.api import VAR

rng = np.random.default_rng(4)
n = 90
e1, e2 = rng.normal(size=n), rng.normal(size=n)
x = np.zeros(n)
y = np.zeros(n)
for t in range(1, n):
    x[t] = 0.5 * x[t-1] + 0.2 * y[t-1] + e1[t]
    y[t] = 0.4 * y[t-1] + 0.1 * x[t-1] + e2[t]
df = pd.DataFrame({"x": x, "y": y})
train, test = df.iloc[:-6], df.iloc[-6:]

naive = pd.DataFrame({
    "x": np.repeat(train["x"].iloc[-1], 6),
    "y": np.repeat(train["y"].iloc[-1], 6)
}, index=test.index)
fc = pd.DataFrame(
    VAR(train).fit(1).forecast(train.values[-1:], 6),
    index=test.index, columns=["x", "y"]
)

def mae(a, b):
    return np.mean(np.abs(a - b))

print("Naive MAE x, y:", round(mae(test.x, naive.x), 3), round(mae(test.y, naive.y), 3))
print("VAR   MAE x, y:", round(mae(test.x, fc.x), 3), round(mae(test.y, fc.y), 3))`,
  output: tsP("Four MAE numbers: naive and VAR for x and for y. Which method wins can change with the random seed; the point is the comparison table, not a guaranteed VAR victory."),
  result: tsP("Comparing methods prevents treating a multivariate fit as automatically better. If VAR MAE is close to naive, the cross-variable lags may be weak in this sample. Report both variables; do not hide the worse one."),
  note: "Always compare multivariate forecasts with a simple baseline on unused dates."
});

TIME_SERIES_PRACTICAL_SOLUTIONS["ts-p5-06"] = tsLab({
  title: "P5.06 Bayesian Forecasting Idea",
  problem: tsP("Forecast the next mean of a small series using a beginner Bayesian update: a prior guess for the mean, a likelihood from the data, and a posterior mean used as the forecast. Keep the mathematics light."),
  outcomes: tsList([
    "State prior, likelihood and posterior in words.",
    "Combine a prior mean with the sample mean.",
    "Interpret the posterior mean as a shrinkage forecast."
  ]),
  theory: tsP("Bayesian forecasting starts with a prior belief about an unknown quantity, updates that belief with the likelihood of the observed data, and uses the posterior for prediction. In the simplest normal-mean teaching case, the posterior mean is a weighted average of the prior mean and the sample mean. More data pulls the forecast toward the sample. A strong prior pulls it toward the guess. This practical does not develop MCMC or full Bayesian VARs."),
  dataset: tsP("Ten demand observations: 30, 32, 31, 29, 33, 30, 31, 28, 32, 30. Prior guess: mean 35 with modest confidence, as if last year ran hotter. Teaching numbers."),
  code: `import numpy as np

y = np.array([30, 32, 31, 29, 33, 30, 31, 28, 32, 30], dtype=float)
# Prior: mean m0, strength n0 (like prior sample size)
m0, n0 = 35.0, 4
# Likelihood: sample mean with n observations
n = len(y)
ybar = y.mean()
# Posterior mean for a simple normal-mean teaching update
n1 = n0 + n
m1 = (n0 * m0 + n * ybar) / n1
print("Sample mean (likelihood summary):", round(ybar, 3))
print("Prior mean:", m0)
print("Posterior mean (forecast of the level):", round(m1, 3))
print("Weight on data:", round(n / n1, 3), "weight on prior:", round(n0 / n1, 3))`,
  output: tsP("Printed sample mean near 30.6, prior 35, and a posterior mean between them, closer to the data because n = 10 is larger than n0 = 4. The exact posterior equals (4×35 + 10×ȳ) / 14."),
  result: tsP("The forecast of the level shrinks the sample mean toward 35. That is the Bayesian idea in one number: combine prior and data. A full Bayesian time-series model would also put priors on persistence and seasonality; this lab only introduces the update."),
  note: "A Bayesian forecast combines a prior with the likelihood. The posterior mean shrinks the sample toward the prior."
});


