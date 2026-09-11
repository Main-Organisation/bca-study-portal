// ============================================================
// TIME SERIES — UNIT 1 NOTES
// Topic IDs must match TIME_SERIES_SYLLABUS in subjects.js.
// ============================================================

const TIME_SERIES_NOTES = {};


// ------------------------------------------------------------
// ts-introduction
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-introduction"] = [
  `

  <h1>Introduction to Time Series and Forecasting</h1>

  <h2>Definition</h2>

  <p>
    A <strong>time series</strong> is a sequence of observations recorded
    at different points of time, usually in chronological order.
    The observations may be collected daily, monthly, quarterly,
    yearly, or at any other regular time interval.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A company's monthly sales for January, February, March and April
      form a time series.
    </p>
  </div>


  <h2>Working</h2>

  <p>
    The observations are arranged according to time so that we can study
    how the variable changes. This helps us identify useful patterns
    that may later help in forecasting future values.
  </p>


  <h2>Time Series Forecasting</h2>

  <p>
    <strong>Time series forecasting</strong> is the process of using past
    and present observations to estimate future values of a variable.
    It is useful when future outcomes are expected to depend, at least
    partly, on historical patterns.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A shop can use previous monthly sales to estimate next month's sales.
    </p>
  </div>


  <h2>Basic Forecasting Flow</h2>

  <div class="note-flow">Past Data
  ↓
Identify Pattern
  ↓
Build Forecasting Model
  ↓
Estimate Future Value</div>


  <h2>Models for Time Series Analysis</h2>

  <p>
    A <strong>time series model</strong> is a mathematical or statistical
    representation used to describe the behaviour of observations over
    time. The model helps identify patterns and can be used for analysis
    and forecasting.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Past sales data can be modeled to estimate future sales.
    </p>
  </div>

  <div class="note-flow">Observed Time Series
  ↓
Identify Structure
  ↓
Choose Model
  ↓
Estimate Parameters
  ↓
Check Model
  ↓
Forecast</div>

  <p>
    Two broad approaches are commonly used at this stage:
  </p>

  <ul>
    <li>
      <strong>Time-series-based models:</strong>
      the forecast depends mainly on the past values of the same series.
      Example: using previous monthly sales values to forecast future sales.
    </li>
    <li>
      <strong>Regression-based models:</strong>
      the forecast also uses related explanatory variables.
      Example: predicting electricity demand using temperature and
      historical demand.
    </li>
  </ul>

  <div class="note-callout">
    <span class="note-callout-title">Exam Note</span>
    <p>
      Detailed ARMA and ARIMA mathematics belong to later units.
      Unit 1 only requires the idea of a model and these two broad approaches.
    </p>
  </div>


  <h2>Nature and Uses of Forecasting</h2>

  <p>
    <strong>Forecasting</strong> is an estimation of what may happen in
    the future based on available historical information, current
    conditions, and an appropriate forecasting method.
    A forecast is an <strong>estimate</strong>, not a guaranteed future value.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A company estimating next quarter's demand based on previous sales.
    </p>
  </div>

  <h3>Uses of Forecasting</h3>

  <ul>
    <li><strong>Business:</strong> sales and demand estimation</li>
    <li><strong>Finance:</strong> revenue and financial planning</li>
    <li><strong>Inventory:</strong> stock requirement estimation</li>
    <li><strong>Production:</strong> production planning</li>
    <li><strong>Government:</strong> planning and resource allocation</li>
    <li><strong>Weather:</strong> future weather estimation</li>
    <li><strong>Energy:</strong> electricity demand forecasting</li>
  </ul>


  <h2>Forecasting Process</h2>

  <p>
    The <strong>forecasting process</strong> is a systematic sequence of
    activities used to convert historical data into useful future estimates.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Forecast monthly sales for the next six months.
    </p>
  </div>

  <ol class="exam-list">
    <li>
      <strong>Define the Forecasting Problem:</strong>
      state clearly what is to be forecast, for which period, and why
      the forecast is needed.
    </li>
    <li>
      <strong>Collect Data:</strong>
      gather historical observations and any related information needed
      for the problem.
    </li>
    <li>
      <strong>Prepare and Understand Data:</strong>
      check the series, study its pattern, and correct missing or
      incorrect values where possible.
    </li>
    <li>
      <strong>Select Forecasting Method:</strong>
      choose a suitable time-series-based or regression-based approach.
    </li>
    <li>
      <strong>Build the Model:</strong>
      fit the selected method to the prepared data.
    </li>
    <li>
      <strong>Evaluate the Model:</strong>
      check whether the model describes the past data reasonably well.
    </li>
    <li>
      <strong>Generate Forecast:</strong>
      use the accepted model to estimate future values.
    </li>
    <li>
      <strong>Monitor Forecast Performance:</strong>
      compare later actual values with the forecast and revise the
      method if needed.
    </li>
  </ol>


  <h2>Data for Forecasting</h2>

  <p>
    Forecasting depends on suitable and reliable data. The quality,
    relevance, frequency and length of historical data can strongly
    affect the usefulness of a forecasting model.
  </p>

  <ul>
    <li>
      <strong>Historical Data:</strong>
      previous observations of the variable, such as five years of
      monthly sales.
    </li>
    <li>
      <strong>Frequency:</strong>
      how often values are recorded, such as hourly, daily, monthly
      or yearly. Example: hourly or daily electricity demand.
    </li>
    <li>
      <strong>Data Quality:</strong>
      missing, incorrect or inconsistent values reduce the reliability
      of the forecast.
    </li>
    <li>
      <strong>Relevant Variables:</strong>
      additional information that helps explain the series, such as
      temperature in electricity-demand forecasting.
    </li>
  </ul>


  <h2>Resources for Forecasting</h2>

  <p>
    Forecasting resources include the data, people, methods, software,
    computational facilities and domain knowledge required to produce
    and evaluate forecasts.
  </p>

  <div class="note-flow">Forecasting Resources
  |
  ├── Historical Data
  ├── Statistical Methods
  ├── Software / Tools
  ├── Computational Resources
  ├── Domain Knowledge
  └── Skilled Analysts</div>

  <ul>
    <li><strong>Historical Data:</strong> the recorded series used for modelling.</li>
    <li><strong>Statistical Methods:</strong> the techniques used to identify patterns and make estimates.</li>
    <li><strong>Software / Tools:</strong> programs used to analyse data and generate forecasts.</li>
    <li><strong>Computational Resources:</strong> the computing facilities needed to process the data.</li>
    <li><strong>Domain Knowledge:</strong> subject understanding, such as sales, weather or energy demand.</li>
    <li><strong>Skilled Analysts:</strong> people who can prepare data, choose methods and interpret results.</li>
  </ul>

  `
];


// ------------------------------------------------------------
// ts-meaning
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-meaning"] = [
  `

  <h1>Meaning and Definition of Time Series</h1>

  <h2>Definition</h2>

  <p>
    A <strong>time series</strong> consists of observations of a variable
    collected sequentially over time. The time order of observations is
    important because the purpose is to study how the variable behaves
    and changes over time.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">In Simple Words</span>
    <p>
      A time series is a set of values written in the order of time,
      so that we can see how a variable moves from the past to the present.
    </p>
  </div>


  <h2>Examples</h2>

  <ul>
    <li>Daily temperature</li>
    <li>Monthly sales</li>
    <li>Yearly population</li>
    <li>Quarterly profit</li>
  </ul>


  <h2>Importance of Chronological Order</h2>

  <p>
    Time-series observations are <strong>chronological</strong>.
    Their original time order must be preserved during analysis.
    If the order is changed, the true pattern of the series is lost
    and any later forecast may become misleading.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Monthly sales must be kept as January, February, March, and so on.
      Mixing these months would hide the actual movement of sales over time.
    </p>
  </div>

  `
];


// ------------------------------------------------------------
// ts-components
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-components"] = [
  `

  <h1>Components of Time Series</h1>

  <h2>Definition</h2>

  <p>
    The observed value of a time series may be influenced by different
    underlying patterns or movements. The important components commonly
    studied are <strong>Trend</strong>, <strong>Seasonal Variation</strong>,
    <strong>Cyclical Variation</strong> and <strong>Irregular Variation</strong>.
  </p>

  <div class="note-flow">Time Series
  |
  ├── Trend
  ├── Seasonal Variation
  ├── Cyclical Variation
  └── Irregular Variation</div>


  <h2>Trend</h2>

  <p>
    Trend represents the long-term general direction of a time series.
    It may show a long-term increase, decrease, or relatively stable movement.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A company's sales increasing gradually over several years indicate
      an upward trend.
    </p>
  </div>


  <h2>Seasonal Variation</h2>

  <p>
    Seasonal variation refers to a pattern that repeats at a regular and
    known interval, such as monthly, quarterly, or weekly.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Retail sales may increase every year during the festival season.
    </p>
  </div>


  <h2>Cyclical Variation</h2>

  <p>
    Cyclical variation refers to long-term fluctuations around the trend
    that are generally associated with economic or business cycles.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Business activity may rise during an expansion phase and decline
      during an economic slowdown.
    </p>
  </div>


  <h2>Irregular Variation</h2>

  <p>
    Irregular variation represents unpredictable movements caused by
    unusual or random events. These movements do not follow a regular pattern.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A sudden fall in sales due to an unexpected natural disaster.
    </p>
  </div>

  `
];


// ------------------------------------------------------------
// ts-types
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-types"] = [
  `

  <h1>Types of Time Series Data</h1>

  <p>
    In statistics and forecasting, data are often classified as
    time series data, cross-sectional data, or panel data.
    These types differ according to <strong>who</strong> is observed
    and <strong>when</strong> the observations are recorded.
  </p>


  <h2>A. Time Series Data</h2>

  <p>
    Time series data consists of observations of a variable collected
    sequentially over time.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Daily temperature recorded from 1 January to 31 January.
    </p>
  </div>


  <h2>B. Cross-Sectional Data</h2>

  <p>
    Cross-sectional data contains observations for different entities
    at the same point or period of time.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Income of 100 households during the year 2026.
    </p>
  </div>


  <h2>C. Panel Data</h2>

  <p>
    Panel data combines cross-sectional and time-series information by
    observing multiple entities repeatedly over time.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Annual sales of 20 companies from 2020 to 2026.
    </p>
  </div>


  <h2>Comparison</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Main Idea</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Time Series</strong></td>
          <td>One variable across time</td>
          <td>Monthly sales</td>
        </tr>
        <tr>
          <td><strong>Cross-Sectional</strong></td>
          <td>Many entities at one time</td>
          <td>Income of households</td>
        </tr>
        <tr>
          <td><strong>Panel</strong></td>
          <td>Many entities across time</td>
          <td>Sales of many companies for several years</td>
        </tr>
      </tbody>
    </table>
  </div>

  `
];


// ------------------------------------------------------------
// ts-trend
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-trend"] = [
  `

  <h1>Trend</h1>

  <h2>Definition</h2>

  <p>
    Trend represents the long-term general direction of a time series.
    It may show a long-term increase, decrease, or relatively stable movement.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A company's sales increasing gradually over several years indicate
      an upward trend.
    </p>
  </div>


  <h2>Types of Trend</h2>

  <h3>Upward Trend</h3>
  <p>
    The series shows a long-term increase. Values tend to rise as time
    passes, even if there are small short-term ups and downs.
  </p>

  <h3>Downward Trend</h3>
  <p>
    The series shows a long-term decrease. Values tend to fall over a
    long period.
  </p>

  <h3>Relatively Stable Trend</h3>
  <p>
    The series does not show a clear long-term rise or fall.
    The general level remains roughly the same over time.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Exam Note</span>
    <p>
      Unit 1 is concerned with the meaning of trend.
      Methods of estimating trend belong to later syllabus areas.
    </p>
  </div>

  `
];


// ------------------------------------------------------------
// ts-seasonal
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-seasonal"] = [
  `

  <h1>Seasonal Variation</h1>

  <h2>Definition</h2>

  <p>
    Seasonal variation refers to a pattern that repeats at a regular and
    known interval, such as monthly, quarterly, weekly, or yearly.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Retail sales may increase every year during the festival season.
    </p>
  </div>


  <h2>Nature of Seasonality</h2>

  <p>
    Seasonality is:
  </p>

  <ul>
    <li><strong>Regular</strong> — the movement appears in a systematic way</li>
    <li><strong>Repeating</strong> — the same type of movement occurs again and again</li>
    <li><strong>Associated with a known period or calendar pattern</strong> — such as weeks, months, quarters or festivals</li>
  </ul>

  <div class="note-callout">
    <span class="note-callout-title">In Simple Words</span>
    <p>
      If a pattern returns at a known interval, it is seasonal.
      Ice-cream sales rising every summer is a seasonal movement.
    </p>
  </div>

  <p>
    Seasonal ARIMA and other advanced seasonal models are not required
    at this stage.
  </p>

  `
];


// ------------------------------------------------------------
// ts-cyclical
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-cyclical"] = [
  `

  <h1>Cyclical Variation</h1>

  <h2>Definition</h2>

  <p>
    Cyclical variation refers to long-term fluctuations around the trend
    that are generally associated with broader economic or business cycles.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Business activity may rise during an expansion phase and decline
      during an economic slowdown.
    </p>
  </div>


  <h2>Exam Points</h2>

  <ul>
    <li>Cyclical movements occur over a comparatively long period.</li>
    <li>They move around the trend rather than replacing it.</li>
    <li>They are often linked with prosperity, recession, depression and recovery.</li>
    <li>Unlike seasonal variation, the length of a cycle is not a fixed calendar period.</li>
  </ul>

  `
];


// ------------------------------------------------------------
// ts-irregular
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-irregular"] = [
  `

  <h1>Irregular Variation</h1>

  <h2>Definition</h2>

  <p>
    Irregular variation represents unpredictable movements caused by
    unusual or random events. These movements do not follow a regular pattern.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A sudden fall in sales due to an unexpected natural disaster.
    </p>
  </div>


  <h2>Why Irregular Variation Is Hard to Predict</h2>

  <p>
    Irregular variation is difficult to predict because it does not
    follow a fixed repeating pattern. It may appear suddenly due to
    strikes, accidents, epidemics, floods, or other unexpected events.
  </p>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Term</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Time Series</strong></td>
          <td>Data recorded sequentially over time.</td>
        </tr>
        <tr>
          <td><strong>Forecasting</strong></td>
          <td>Estimating future values using available information and appropriate methods.</td>
        </tr>
        <tr>
          <td><strong>Trend</strong></td>
          <td>Long-term general movement.</td>
        </tr>
        <tr>
          <td><strong>Seasonal Variation</strong></td>
          <td>Regularly repeating pattern at a known interval.</td>
        </tr>
        <tr>
          <td><strong>Cyclical Variation</strong></td>
          <td>Long-term fluctuations associated with broader cycles.</td>
        </tr>
        <tr>
          <td><strong>Irregular Variation</strong></td>
          <td>Unpredictable movement caused by unusual events.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    <strong>Forecasting Process:</strong>
    Problem definition → Data → Analysis → Model → Evaluation → Forecast → Monitoring.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Key Point</span>
    <p>
      A forecast is an estimate, not a guarantee.
    </p>
  </div>

  `
];


// ============================================================
// TIME SERIES — UNIT 2 NOTES
// Module 3: Statistics Background for Forecasting
// Topic IDs must match TIME_SERIES_SYLLABUS.
// ============================================================


// ------------------------------------------------------------
// ts-graphical-displays
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-graphical-displays"] = [
  `

  <h1>Graphical Displays</h1>

  <h2>Definition</h2>

  <p>
    A <strong>graphical display</strong> is a visual presentation of
    time series observations. Instead of studying only a table of numbers,
    the analyst plots the data so that pattern, change and unusual
    behaviour can be seen at a glance.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A line chart of monthly electricity demand for two years shows
      whether demand is rising, whether summer months are regularly
      higher, and whether any month is unusually high or low.
    </p>
  </div>


  <h2>Why Graphs Are Used Before Modelling</h2>

  <p>
    Graphs are a first step in analysis. A model chosen without looking
    at the series may ignore trend, seasonality or a sudden change in
    level. Visual inspection does not replace later numerical checks,
    but it guides which checks and methods are reasonable.
  </p>

  <p>
    In simple terms: <strong>look at the series before you try to forecast it</strong>.
  </p>


  <h2>What Graphs Help Identify</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>What the graph may show</th>
          <th>Simple interpretation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Trend</strong></td>
          <td>A long-term rise, fall or stable level</td>
          <td>Sales climbing slowly over several years</td>
        </tr>
        <tr>
          <td><strong>Seasonality</strong></td>
          <td>A repeating shape at a known interval</td>
          <td>Ice-cream sales peaking every summer</td>
        </tr>
        <tr>
          <td><strong>Variability</strong></td>
          <td>Whether swings become larger or stay similar</td>
          <td>Later years showing bigger ups and downs</td>
        </tr>
        <tr>
          <td><strong>Unusual observations</strong></td>
          <td>A spike, drop or isolated odd point</td>
          <td>One month of very high sales after a festival</td>
        </tr>
        <tr>
          <td><strong>Change in behaviour</strong></td>
          <td>A break in the earlier pattern</td>
          <td>Demand shifting after a new product launch</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>Common Graphical Displays (Introductory)</h2>

  <ul>
    <li>
      <strong>Time series plot (line plot):</strong>
      time on the horizontal axis and the observed value on the
      vertical axis. This is the main display for a single series.
    </li>
    <li>
      <strong>Multiple series on one time axis:</strong>
      two related series, such as temperature and demand, plotted
      together to compare movement.
    </li>
    <li>
      <strong>Original vs smoothed plot:</strong>
      the raw series together with a smoothed line so that the
      underlying movement is easier to see.
    </li>
    <li>
      <strong>Seasonal comparison (simple):</strong>
      the same months of different years compared to judge whether
      a yearly pattern repeats.
    </li>
  </ul>

  <p>
    Histograms and box plots can summarise the size of values, but they
    do not keep time order. For time series work, a chronological plot
    remains the first and most important display.
  </p>


  <h2>Simple Workflow</h2>

  <div class="note-flow">Raw Data
  ↓
Plot Data
  ↓
Observe Pattern
  ↓
Identify Possible Structure
  ↓
Select Appropriate Analysis</div>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A shop plots 24 months of packet sales, sees a gentle rise and
      a dip every February, then decides that both trend and a yearly
      seasonal pattern should be considered before forecasting.
    </p>
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>
      Graphical display means presenting the series visually so that
      pattern can be studied.
    </li>
    <li>
      Graphs are used before modelling because they reveal trend,
      seasonality, variability, unusual points and changes in behaviour.
    </li>
    <li>
      A table of numbers alone can hide time-order structure.
    </li>
    <li>
      The time series plot is the basic graphical tool at this stage.
    </li>
  </ol>

  <div class="note-callout">
    <span class="note-callout-title">Exam Note</span>
    <p>
      Always inspect a time series graph before selecting a forecasting method.
    </p>
  </div>

  `
];


// ------------------------------------------------------------
// ts-time-series-plots
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-time-series-plots"] = [
  `

  <h1>Time Series Plots</h1>

  <h2>Definition</h2>

  <p>
    A <strong>time series plot</strong> is a graph of observations against
    time. Time is shown on the <strong>x-axis</strong> and the observed
    value is shown on the <strong>y-axis</strong>. The points are joined
    in chronological order so that the path of the series can be followed.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Monthly shop sales from January to December are plotted with months
      along the x-axis and sales along the y-axis. January comes before
      February; the order is never shuffled by size.
    </p>
  </div>


  <h2>Why a Line Plot Is Commonly Used</h2>

  <p>
    A line plot emphasises sequence. Neighbouring months or days are
    connected, so a rise, fall or repeating wave is easier to see than
    in a bar chart of unsorted values. Bars can still be used for a few
    discrete periods, but the standard teaching display is a line through
    time-ordered points.
  </p>

  <div class="note-flow">Time (x-axis)
  ↓
Observed value (y-axis)
  ↓
Keep chronological order
  ↓
Join successive points
  ↓
Read the pattern of the line</div>


  <h2>How to Interpret the Line</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Appearance</th>
          <th>Possible meaning</th>
          <th>Simple example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Rising line</strong></td>
          <td>Values tend to increase over time</td>
          <td>Sales growing through the year</td>
        </tr>
        <tr>
          <td><strong>Falling line</strong></td>
          <td>Values tend to decrease over time</td>
          <td>Demand falling after a peak season</td>
        </tr>
        <tr>
          <td><strong>Repeating pattern</strong></td>
          <td>A similar shape returns at a regular interval</td>
          <td>Higher sales every December</td>
        </tr>
        <tr>
          <td><strong>Sudden spike or drop</strong></td>
          <td>An unusual observation or a short shock</td>
          <td>One week of very high festival sales</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    A rising line does not prove that next month must be higher. It only
    describes what has happened so far. A spike should be studied: it may
    be a data error, a one-time event, or the start of a new level.
  </p>


  <h2>Practical Interpretation</h2>

  <p>
    Suppose monthly sales run roughly: low in February, higher towards
    December, and generally a little higher than the previous year.
    The plot would show a repeating yearly wave sitting on a gentle
    upward movement. That picture is the starting point for later
    smoothing, numerical summary and modelling.
  </p>

  <p>
    The exact height of each point depends on the dataset. Students
    should describe the <strong>shape</strong> of their own plot rather
    than memorising invented numbers.
  </p>


  <h2>Small Educational Python Example</h2>

  <p>
    The following snippet only shows how a chronological plot is prepared.
    Run it outside the portal. The chart should show eight weeks in time
    order with a general rise and one small dip.
  </p>

  <div class="program-code notranslate" data-language="python">
# Import libraries
import pandas as pd
import matplotlib.pyplot as plt

# Chronological weekly index and sales
weeks = pd.date_range("2026-01-06", periods=8, freq="W-MON")
sales = [42, 45, 44, 50, 53, 49, 55, 58]
ts = pd.Series(sales, index=weeks, name="packet_sales")

# Time series plot
ts.plot(marker="o", title="Weekly packet sales")
plt.xlabel("Time")
plt.ylabel("Packets sold")
plt.tight_layout()
plt.show()
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>
      In a time series plot, time is on the x-axis and the observed
      value is on the y-axis.
    </li>
    <li>
      Observations must stay in chronological order.
    </li>
    <li>
      Line plots are common because they show movement over time.
    </li>
    <li>
      Rising, falling, repeating and spiked shapes are interpreted
      from the plot, then confirmed with further analysis.
    </li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-smoothed-data
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-smoothed-data"] = [
  `

  <h1>Plotting Smoothed Data</h1>

  <h2>Definition</h2>

  <p>
    <strong>Smoothing</strong> is a method of reducing short-term
    irregular ups and downs so that the underlying movement of a
    series is easier to see. A smoothed series is not a replacement
    for the original data; it is a clearer view of the general path.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Daily sales jump up and down because of weekday effects.
      A three-day average produces a smoother line that shows whether
      sales are generally rising during the month.
    </p>
  </div>


  <h2>Purpose of Smoothing</h2>

  <p>
    Real series mix a slower pattern with short-term noise. Plotting
    only the raw series can make the trend or seasonal wave hard to
    read. Smoothing reduces those short fluctuations. It does not
    invent a new theory of the data; it is a visual and descriptive tool.
  </p>


  <h2>Simple Moving Average</h2>

  <p>
    A <strong>simple moving average</strong> replaces each value by the
    average of a small number of neighbouring observations. For a
    3-period moving average:
  </p>

  <p>
    <strong>SMA at time t</strong> =
    (Y<sub>t</sub> + Y<sub>t−1</sub> + Y<sub>t−2</sub>) / 3
  </p>

  <ul>
    <li><strong>Y<sub>t</sub></strong> = observation at time t</li>
    <li><strong>Y<sub>t−1</sub></strong> = previous observation</li>
    <li><strong>Y<sub>t−2</sub></strong> = observation two periods earlier</li>
    <li>The divisor 3 is the number of terms in the window</li>
  </ul>

  <p>
    The first two periods have no 3-point average because three values
    are not yet available. A longer window (for example 5 or 7) is
    smoother but reacts more slowly to a genuine change.
  </p>


  <h2>Small Numerical Example</h2>

  <p>
    Five weeks of sales: 10, 20, 12, 18, 14.
  </p>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Week</th>
          <th>Original</th>
          <th>3-point moving average</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>10</td>
          <td>—</td>
        </tr>
        <tr>
          <td>2</td>
          <td>20</td>
          <td>—</td>
        </tr>
        <tr>
          <td>3</td>
          <td>12</td>
          <td>(10 + 20 + 12) / 3 = 14</td>
        </tr>
        <tr>
          <td>4</td>
          <td>18</td>
          <td>(20 + 12 + 18) / 3 = 16.67</td>
        </tr>
        <tr>
          <td>5</td>
          <td>14</td>
          <td>(12 + 18 + 14) / 3 = 14.67</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    The original series jumps from 10 to 20 and back. The smoothed
    values stay in a narrower band around the middle of the data.
    A plot of both series would show a calmer line next to a jumpy line.
  </p>


  <h2>Advantages and Limitations</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>Point</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Advantage</strong></td>
          <td>Underlying trend or seasonal wave is easier to see.</td>
        </tr>
        <tr>
          <td><strong>Advantage</strong></td>
          <td>Short-term noise is reduced for teaching and inspection.</td>
        </tr>
        <tr>
          <td><strong>Limitation</strong></td>
          <td>Sudden genuine changes can be delayed or hidden.</td>
        </tr>
        <tr>
          <td><strong>Limitation</strong></td>
          <td>The start (and sometimes the end) of the series has fewer smoothed points.</td>
        </tr>
        <tr>
          <td><strong>Limitation</strong></td>
          <td>Smoothing is not by itself a complete forecasting model.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="note-callout">
    <span class="note-callout-title">Key Point</span>
    <p>
      Smoothing can make underlying patterns easier to see, but it can
      also hide short-term changes.
    </p>
  </div>


  <h2>Small Educational Python Example</h2>

  <div class="program-code notranslate" data-language="python">
# Import libraries
import pandas as pd
import matplotlib.pyplot as plt

sales = pd.Series([10, 20, 12, 18, 14], name="sales")

# 3-period simple moving average
smoothed = sales.rolling(window=3).mean()

print(sales)
print(smoothed)

sales.plot(marker="o", label="original")
smoothed.plot(marker="o", label="smoothed")
plt.legend()
plt.title("Original vs 3-period moving average")
plt.tight_layout()
plt.show()
  </div>

  <p>
    The printed smoothed series should show missing values for the first
    two points, then averages near 14, 16.67 and 14.67. The plot should
    look calmer than the original line.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>
      Smoothing reduces short-term fluctuations to reveal the general path.
    </li>
    <li>
      A simple moving average is the average of a small window of neighbouring values.
    </li>
    <li>
      Always compare the original series with the smoothed series.
    </li>
    <li>
      Smoothing is a display and description tool, not a full forecast method.
    </li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-numerical-description
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-numerical-description"] = [
  `

  <h1>Numerical Description of Time Series Data</h1>

  <h2>Definition</h2>

  <p>
    <strong>Numerical description</strong> uses summary numbers to describe
    a set of observations: typical size, spread, and extreme values.
    These measures help compare series and check whether a value is
    unusually large or small.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Five weekly sales figures 10, 12, 11, 13, 14 can be summarised by
      a mean of 12 packets and a range of 4 packets.
    </p>
  </div>


  <h2>Why Numerical Measures Are Used</h2>

  <p>
    A plot shows shape. Numbers answer questions such as: What is a
    typical value? How much do values vary? What were the lowest and
    highest observations? Both views are needed. Numerical summaries
    <strong>ignore time order</strong> unless they are calculated on
    specially chosen periods, so they cannot replace a time series plot.
  </p>


  <h2>Small Dataset</h2>

  <p>
    Weekly packet sales: <strong>10, 12, 11, 13, 14</strong>
    (already in time order).
  </p>


  <h2>Main Measures</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Measure</th>
          <th>Meaning</th>
          <th>Interpretation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mean</strong></td>
          <td>Arithmetic average of all observations</td>
          <td>Typical level of the series</td>
        </tr>
        <tr>
          <td><strong>Median</strong></td>
          <td>Middle value after sorting</td>
          <td>Typical level that is less affected by one extreme</td>
        </tr>
        <tr>
          <td><strong>Minimum / Maximum</strong></td>
          <td>Smallest and largest observations</td>
          <td>The observed extremes</td>
        </tr>
        <tr>
          <td><strong>Range</strong></td>
          <td>Maximum minus minimum</td>
          <td>Overall spread of the recorded values</td>
        </tr>
        <tr>
          <td><strong>Variance</strong></td>
          <td>Average of squared deviations from the mean</td>
          <td>How widely values scatter; units are squared</td>
        </tr>
        <tr>
          <td><strong>Standard deviation</strong></td>
          <td>Square root of variance</td>
          <td>Spread in the same units as the data</td>
        </tr>
        <tr>
          <td><strong>Quartiles</strong></td>
          <td>Values that split the ordered data into four parts</td>
          <td>Where the lower, middle and upper observations lie</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>Calculations for the Example</h2>

  <p>
    Mean = (10 + 12 + 11 + 13 + 14) / 5 = 60 / 5 = <strong>12</strong>.
  </p>

  <p>
    Ordered values: 10, 11, 12, 13, 14. Median = <strong>12</strong>.
  </p>

  <p>
    Minimum = 10, maximum = 14, range = 14 − 10 = <strong>4</strong>.
  </p>

  <p>
    Deviations from the mean 12: −2, 0, −1, 1, 2.
    Squared deviations: 4, 0, 1, 1, 4. Sum = 10.
    Sample variance with divisor n − 1 = 10 / 4 = <strong>2.5</strong>.
    Sample standard deviation = √2.5, which is a little more than 1.5.
  </p>

  <p>
    The lower quartile of these five points is near 11 and the upper
    quartile is near 13. With only five observations, quartiles are a
    rough split, not a precise population claim.
  </p>


  <h2>Practical Interpretation</h2>

  <p>
    The mean and median both equal 12, so the typical weekly sales in
    this tiny sample sit at 12 packets. The range of 4 packets shows
    modest spread. None of these numbers, by themselves, tell you that
    week 1 came before week 5. That order is seen on the time plot.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Exam Note</span>
    <p>
      Numerical summaries cannot reveal all time-order patterns.
      A time series plot is also important.
    </p>
  </div>


  <h2>Small Educational Python Example</h2>

  <div class="program-code notranslate" data-language="python">
# Import libraries
import pandas as pd

sales = pd.Series([10, 12, 11, 13, 14], name="sales")

print("Mean:", sales.mean())
print("Median:", sales.median())
print("Min, max:", sales.min(), sales.max())
print("Range:", sales.max() - sales.min())
print("Sample variance:", sales.var())
print("Sample standard deviation:", sales.std())
print(sales.describe())
  </div>

  <p>
    The printed mean and median should match 12, and the range should
    be 4. Software may show extra decimal places for variance and
    standard deviation; use the same formula convention (sample or
    population) that your course requires.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>
      Mean and median describe typical level; variance and standard
      deviation describe spread.
    </li>
    <li>
      Minimum, maximum and range describe extremes.
    </li>
    <li>
      Quartiles split ordered data into four parts.
    </li>
    <li>
      Always read numerical summaries together with a time plot.
    </li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-data-transformations
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-data-transformations"] = [
  `

  <h1>Use of Data Transformations and Adjustments</h1>

  <h2>Definition</h2>

  <p>
    A <strong>transformation</strong> is a change of scale applied to
    each observation, such as taking logarithms, so that variation or
    shape becomes easier to study. An <strong>adjustment</strong> is a
    change made to correct or simplify a feature of the series, such as
    removing a changing level, handling a calendar effect, or treating
    an unusual observation.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      If monthly sales grow and the ups and downs become larger as the
      level rises, a logarithmic transformation can make the variation
      more stable before further analysis.
    </p>
  </div>


  <h2>Why Transformation May Be Useful</h2>

  <ul>
    <li>
      <strong>Stabilising variability:</strong>
      when swings grow with the size of the series, a log or square-root
      scale can reduce that fan shape.
    </li>
    <li>
      <strong>Making patterns easier to model:</strong>
      a straighter trend or more even seasonal waves can be simpler to
      describe at an introductory level.
    </li>
    <li>
      <strong>Handling scale differences:</strong>
      very large numbers can be compared more fairly on a log scale.
    </li>
  </ul>

  <p>
    Transformations should be chosen from the <strong>nature of the data</strong>,
    not from habit. If variability is already stable, transforming
    without reason can make interpretation harder.
  </p>


  <h2>Introductory Transformations</h2>

  <h3>Logarithmic transformation</h3>
  <p>
    Each positive value Y is replaced by log(Y). Percentage-like growth
    and increasing spread often look more regular after a log. Values
    must be positive. After analysis, results may need to be converted
    back to the original units for a practical report.
  </p>

  <h3>Square-root transformation</h3>
  <p>
    Each non-negative value Y is replaced by √Y. This is a milder change
    than a logarithm and is sometimes used when counts are moderately
    variable. It is not required for every series.
  </p>


  <h2>Differencing as a Basic Adjustment</h2>

  <p>
    <strong>Differencing</strong> replaces a series by its period-to-period
    changes: D<sub>t</sub> = Y<sub>t</sub> − Y<sub>t−1</sub>.
    This can remove a steadily changing level so that the remaining
    series is easier to look at. Unit 2 only needs this idea.
    Detailed use of differencing inside ARIMA models belongs to
    <strong>Unit 3</strong> and is not developed here.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Sales 40, 42, 45 have first differences 2 and 3. The original
      series is climbing; the differences describe the size of each step.
    </p>
  </div>


  <h2>Transformation vs Adjustment</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>Transformation</th>
          <th>Adjustment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Main idea</strong></td>
          <td>Change the scale of the values</td>
          <td>Correct or simplify a feature of the series</td>
        </tr>
        <tr>
          <td><strong>Typical tools</strong></td>
          <td>Log, square root</td>
          <td>Differencing, calendar correction, treating an outlier</td>
        </tr>
        <tr>
          <td><strong>Simple example</strong></td>
          <td>log of monthly sales</td>
          <td>First difference of a climbing series</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>Practical Interpretation</h2>

  <p>
    Suppose weekly sales rise and the later weeks bounce more than the
    early weeks. A time plot of the raw series would show a widening
    fan. A plot of log sales may look more even. That does not prove
    a model; it only shows why a transformation might be considered.
    If instead the problem is a steadily rising level with similar
    bounce, a difference of the original series may be the more
    relevant adjustment.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>
      Use transformation to change scale, often to stabilise variability.
    </li>
    <li>
      Use adjustment to correct or simplify a feature such as changing level.
    </li>
    <li>
      Log and square-root transformations are introductory options for suitable data.
    </li>
    <li>
      Differencing is a basic adjustment for changing level; ARIMA details come in Unit 3.
    </li>
    <li>
      Choose the method from the behaviour of the series, not automatically.
    </li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-modelling-forecasting
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-modelling-forecasting"] = [
  `

  <h1>General Approach to Time Series Modelling and Forecasting</h1>

  <h2>Definition</h2>

  <p>
    The <strong>general approach</strong> to time series modelling and
    forecasting is a planned sequence of steps: define the task, prepare
    data, study pattern, choose and fit a method, evaluate it, produce
    a forecast, and then watch how well it performs.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A shop wants a forecast of monthly packet sales for the next three
      months. It collects past monthly sales, plots them, notes a gentle
      rise, fits a simple method on earlier months, checks the method on
      later months, then forecasts and later compares the forecast with
      actual sales.
    </p>
  </div>


  <h2>Standard Workflow</h2>

  <div class="note-flow">1. Define forecasting objective
  ↓
2. Collect data
  ↓
3. Inspect and clean data
  ↓
4. Visualize data
  ↓
5. Identify structure
  ↓
6. Transform/adjust if required
  ↓
7. Select candidate model
  ↓
8. Fit model
  ↓
9. Evaluate model
  ↓
10. Generate forecast
  ↓
11. Monitor performance</div>


  <h2>Meaning of Each Step</h2>

  <ol class="exam-list">
    <li>
      <strong>Define the objective:</strong>
      state what will be forecast, for which dates, and for what decision
      (for example, next three months of sales for stock planning).
    </li>
    <li>
      <strong>Collect data:</strong>
      gather a long enough history at the right frequency (here, monthly sales).
    </li>
    <li>
      <strong>Inspect and clean:</strong>
      check missing values, typing errors and impossible figures.
    </li>
    <li>
      <strong>Visualize:</strong>
      draw a time series plot before choosing a method.
    </li>
    <li>
      <strong>Identify structure:</strong>
      note trend, seasonality, unusual points or a change in behaviour.
    </li>
    <li>
      <strong>Transform or adjust if required:</strong>
      use a log, a difference or another simple change only when the plot
      suggests it. Detailed ARIMA order selection belongs to Unit 3.
    </li>
    <li>
      <strong>Select a candidate model:</strong>
      start with a method that matches the visible structure
      (for example a simple trend summary, not an advanced seasonal ARIMA
      at this stage).
    </li>
    <li>
      <strong>Fit the model:</strong>
      estimate the method using historical data set aside for fitting.
    </li>
    <li>
      <strong>Evaluate:</strong>
      compare forecasts with observations that were not used in fitting.
    </li>
    <li>
      <strong>Generate the forecast:</strong>
      produce future values and, where possible, a sense of uncertainty.
    </li>
    <li>
      <strong>Monitor:</strong>
      when new actual sales arrive, compare them with the forecast and
      revise the method if performance worsens.
    </li>
  </ol>

  `,

  `

  <h1>Training Data, Test Data and a Simple Sales Example</h1>

  <h2>Training Data and Test Data</h2>

  <p>
    <strong>Training data</strong> (also called fitting data) are the
    earlier observations used to build the method.
    <strong>Test data</strong> (evaluation data) are later observations
    held back to check how well the method forecasts new time points.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Use January–September sales to fit a simple method. Keep
      October–December to evaluate it. Do not judge the method only on
      the months that were used to fit it.
    </p>
  </div>

  <p>
    The split must respect time: test months come <strong>after</strong>
    training months. Randomly mixing months would destroy chronological
    order.
  </p>


  <h2>End-to-End Illustration: Monthly Sales</h2>

  <p>
    Objective: forecast the next quarter of packet sales.
    Data: two years of monthly sales, cleaned for missing months.
    Plot: a gentle rise and a December peak.
    Structure: trend plus yearly seasonality is suspected.
    Adjustment: none required at first if variation looks stable.
    Candidate method at Unit 2 level: a simple combination of a trend
    idea and a seasonal comparison of Decembers — not a full SARIMA.
    Fit on the first 21 months, evaluate on the last 3 months, then
    forecast the next 3 months and later monitor them against actuals.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Exam Note</span>
    <p>
      Unit 2 teaches the workflow. Choosing ARIMA or SARIMA orders is
      a Unit 3 task.
    </p>
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>
      Forecasting follows a sequence from objective and data through
      plot, structure, optional transform, fit, evaluate, forecast and monitor.
    </li>
    <li>
      Always plot before selecting a method.
    </li>
    <li>
      Training data are used to fit; test data are later dates used to evaluate.
    </li>
    <li>
      A good in-sample fit is not enough; later performance must be checked.
    </li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-model-performance
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-model-performance"] = [
  `

  <h1>Evaluating and Monitoring Forecasting Model Performance</h1>

  <h2>Definition</h2>

  <p>
    <strong>Evaluation</strong> means measuring how close forecasts are
    to actual values, preferably on dates not used for fitting.
    <strong>Monitoring</strong> means repeating that comparison as new
    actual observations arrive, so that a method which has become poor
    can be updated.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      A shop forecasts October sales as 50 packets. Actual October sales
      are 52. The forecast error is 2 packets. Repeating this for later
      months shows whether the method stays useful.
    </p>
  </div>


  <h2>Why Evaluation Is Needed</h2>

  <p>
    A method can follow the training period closely and still fail on
    later dates. Judging a forecast only by how well it copies the fitted
    sample is not enough. Evaluation asks: how large are the misses on
    new time points?
  </p>


  <h2>Actual, Forecast and Error</h2>

  <p>
    Let Y<sub>t</sub> be the <strong>actual value</strong> and
    F<sub>t</sub> be the <strong>forecast value</strong> for the same date.
  </p>

  <p>
    <strong>Forecast error</strong> e<sub>t</sub> = Y<sub>t</sub> − F<sub>t</sub>
  </p>

  <p>
    A positive error means the actual value was higher than the forecast.
    A negative error means the actual value was lower. The sign shows
    direction; size is judged with summary measures.
  </p>


  <h2>Small Illustrative Example</h2>

  <p>
    Three hold-out months:
  </p>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Month</th>
          <th>Actual Y</th>
          <th>Forecast F</th>
          <th>Error Y − F</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>50</td>
          <td>49</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>52</td>
          <td>51</td>
          <td>1</td>
        </tr>
        <tr>
          <td>3</td>
          <td>48</td>
          <td>50</td>
          <td>−2</td>
        </tr>
      </tbody>
    </table>
  </div>

  `,

  `

  <h1>Error Measures, Training vs Test Data, and Monitoring</h1>

  <h2>Common Evaluation Measures</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Measure</th>
          <th>Idea</th>
          <th>Usefulness</th>
          <th>Limitation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>MAE</strong></td>
          <td>Mean of absolute errors</td>
          <td>Easy to interpret in original units</td>
          <td>Treats every miss equally; does not emphasise large errors</td>
        </tr>
        <tr>
          <td><strong>MSE</strong></td>
          <td>Mean of squared errors</td>
          <td>Penalises large misses more strongly</td>
          <td>Units are squared; harder to read in the original scale</td>
        </tr>
        <tr>
          <td><strong>RMSE</strong></td>
          <td>Square root of MSE</td>
          <td>Large misses matter, and the unit matches the data</td>
          <td>Still sensitive to a few very large errors</td>
        </tr>
        <tr>
          <td><strong>MAPE</strong></td>
          <td>Mean of absolute errors as a percentage of actual values</td>
          <td>Useful for comparing series of different sizes</td>
          <td>Unstable if actual values are near zero</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    For the three-month example:
    MAE = (|1| + |1| + |−2|) / 3 = 4 / 3.
    MSE = (1² + 1² + (−2)²) / 3 = 6 / 3 = 2.
    RMSE = √2.
    MAPE uses |error| / actual × 100 for each month, then the mean of
    those percentages. Do not memorise extra decimal places from software;
    be able to compute the three errors and the idea of each measure.
  </p>


  <h2>Training Data vs Evaluation Data</h2>

  <p>
    Fit the method on <strong>training</strong> (earlier) dates.
    Compute MAE, RMSE or MAPE on <strong>test</strong> (later) dates
    whenever the series is long enough. Reporting only training error
    can make a method look better than it is for real forecasting.
  </p>


  <h2>Monitoring Over Time</h2>

  <div class="note-flow">Forecast
  ↓
Compare with Actual
  ↓
Calculate Error
  ↓
Evaluate
  ↓
Monitor Over Time
  ↓
Improve Model if Needed</div>

  <p>
    After the forecast period, new actual values become available.
    Compare them with the forecasts. If errors become systematically
    larger, or if the plot of the series changes behaviour, the method
    may have deteriorated. Then collect newer data, inspect the graph
    again, and reconsider the method. Monitoring is part of the
    forecasting process, not an optional extra.
  </p>


  <h2>Small Educational Python Example</h2>

  <div class="program-code notranslate" data-language="python">
# Import libraries
import numpy as np

actual = np.array([50, 52, 48])
forecast = np.array([49, 51, 50])
error = actual - forecast

mae = np.mean(np.abs(error))
mse = np.mean(error ** 2)
rmse = np.sqrt(mse)
mape = np.mean(np.abs(error / actual)) * 100

print("Errors:", error)
print("MAE:", mae)
print("MSE:", mse)
print("RMSE:", rmse)
print("MAPE (%):", mape)
  </div>

  <p>
    Errors should be 1, 1 and −2. MAE should be 4/3. MSE should be 2.
    RMSE should be the square root of 2. MAPE depends on the three
    percentage misses and should be described as a percentage, not as
    an invented extra case study.
  </p>


  <h2>Unit 2 Quick Revision</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Short definition / exam point</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Graphical Displays</strong></td>
          <td>Visual presentation of the series. Inspect a graph before choosing a method.</td>
        </tr>
        <tr>
          <td><strong>Time Series Plots</strong></td>
          <td>Time on the x-axis, value on the y-axis, chronological line plot.</td>
        </tr>
        <tr>
          <td><strong>Smoothing</strong></td>
          <td>Reduces short-term noise (for example a moving average) but can hide sudden changes.</td>
        </tr>
        <tr>
          <td><strong>Numerical Description</strong></td>
          <td>Mean, median, spread and extremes summarise values; they do not replace a time plot.</td>
        </tr>
        <tr>
          <td><strong>Transformations and Adjustments</strong></td>
          <td>Logs change scale; differencing is a basic level adjustment. Choose from the data.</td>
        </tr>
        <tr>
          <td><strong>Modelling Workflow</strong></td>
          <td>Objective → data → plot → structure → optional transform → fit → evaluate → forecast → monitor.</td>
        </tr>
        <tr>
          <td><strong>Evaluation and Monitoring</strong></td>
          <td>Error = actual − forecast. Use MAE/RMSE/MAPE on later dates and keep watching performance.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <ol class="exam-list">
    <li>Always inspect a time series graph before selecting a forecasting method.</li>
    <li>Smoothing reveals the general path; it is not a complete model.</li>
    <li>Training data fit the method; test data evaluate it.</li>
    <li>A forecast is an estimate and must be monitored against later actual values.</li>
  </ol>

  `
];


// ============================================================
// TIME SERIES — UNIT 3 NOTES
// Module 4: Introduction to Autoregressive Models and Forecasting
// Topic IDs must match TIME_SERIES_SYLLABUS.
// ============================================================


// ------------------------------------------------------------
// ts-autocorrelation
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-autocorrelation"] = [
  `

  <h1>Autocorrelation and Partial Autocorrelation</h1>

  <h2>Definition</h2>

  <p>
    <strong>Autocorrelation</strong> is the correlation between a time
    series and a lagged version of itself. It measures whether today's
    value tends to move together with a past value. Because observations
    are ordered in time, neighbouring values are often dependent rather
    than independent.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      If this month's sales are high, next month's sales are also often
      fairly high. That lag-1 pattern is a form of autocorrelation.
    </p>
  </div>


  <h2>Lag</h2>

  <p>
    A <strong>lag</strong> is the number of time steps between two
    observations being compared.
  </p>

  <ul>
    <li><strong>Lag 1:</strong> compare Y<sub>t</sub> with Y<sub>t−1</sub> (the previous period).</li>
    <li><strong>Lag 2:</strong> compare Y<sub>t</sub> with Y<sub>t−2</sub> (two periods earlier).</li>
    <li><strong>Lag k:</strong> compare Y<sub>t</sub> with Y<sub>t−k</sub>.</li>
  </ul>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      For monthly data, lag 1 is last month and lag 12 is the same month
      last year.
    </p>
  </div>


  <h2>Positive and Negative Autocorrelation</h2>

  <p>
    <strong>Positive autocorrelation</strong> means a high value tends
    to be followed by another high value (and a low by a low).
    <strong>Negative autocorrelation</strong> means a high value tends
    to be followed by a low value, or the reverse.
  </p>

  <p>
    Slow decay of autocorrelation across many lags often suggests
    persistence or a wandering level. Near-zero autocorrelation after
    lag 0 is closer to unstructured noise. These are guides for
    inspection, not automatic model names.
  </p>


  <h2>Partial Autocorrelation</h2>

  <p>
    <strong>Partial autocorrelation</strong> at lag k is the correlation
    between Y<sub>t</sub> and Y<sub>t−k</sub> after the linear effect of
    the intermediate lags 1, 2, …, k−1 has been accounted for. It asks:
    is there a <em>direct</em> link at lag k, once shorter lags are
    controlled for?
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Sales may correlate with lag 2 partly because both lag 2 and today
      are linked through lag 1. Partial autocorrelation at lag 2 removes
      that shorter-lag path and looks at what remains.
    </p>
  </div>

  `,

  `

  <h1>ACF, PACF and How They Differ</h1>

  <h2>Comparison</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
          <th>What it helps identify</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Autocorrelation</strong></td>
          <td>Correlation of the series with its lagged values, including indirect paths through shorter lags</td>
          <td>Overall dependence on the past; persistence; possible seasonal lag spikes</td>
        </tr>
        <tr>
          <td><strong>Partial Autocorrelation</strong></td>
          <td>Correlation at a chosen lag after accounting for intermediate lags</td>
          <td>More direct lag-k dependence; often used when thinking about autoregressive order</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>ACF and PACF Plots</h2>

  <p>
    The <strong>ACF plot</strong> shows sample autocorrelation at lags
    1, 2, 3, … . The <strong>PACF plot</strong> shows sample partial
    autocorrelation at those lags. Bars that stand well away from zero
    (relative to a simple confidence band on the plot) suggest that the
    lag is worth noticing. Finite samples are noisy, so one extra bar
    should not be over-interpreted.
  </p>

  <p>
    At an introductory level:
  </p>

  <ul>
    <li>
      ACF helps study correlation with lagged observations.
    </li>
    <li>
      PACF helps study direct correlation at a particular lag after
      accounting for intermediate lags.
    </li>
  </ul>

  <p>
    Teaching rules of thumb (for later AR/MA discussion) say that a
    pure autoregressive pattern often shows ACF tailing off and PACF
    cutting off, while a pure moving-average pattern often shows the
    reverse. Mixed series and short samples do not follow textbooks
    perfectly.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Exam Note</span>
    <p>
      ACF and PACF are identification tools. They do not automatically
      determine the final ARMA or ARIMA model. Always read them with a
      time plot and, after fitting, with residual checks.
    </p>
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>
      Autocorrelation measures dependence between a series and its lags.
    </li>
    <li>
      Lag k compares the current observation with the value k periods earlier.
    </li>
    <li>
      Partial autocorrelation at lag k removes the effect of lags 1 to k−1.
    </li>
    <li>
      ACF/PACF plots support model thinking; they do not replace diagnostics.
    </li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-arma-models
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-arma-models"] = [
  `

  <h1>Autoregressive Moving Average (ARMA) Models</h1>

  <h2>Definition</h2>

  <p>
    An <strong>ARMA</strong> model combines an <strong>autoregressive (AR)</strong>
    part with a <strong>moving average (MA)</strong> part.
    The current observation is allowed to depend on previous values
    <em>and</em> on previous error terms (shocks). ARMA is written
    ARMA(p, q), where p is the AR order and q is the MA order.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      This month's sales may depend on last month's sales (AR) and on
      last month's unexpected shock, such as a one-off festival leftover
      (MA).
    </p>
  </div>


  <h2>Autoregressive (AR) Part</h2>

  <p>
    In an AR model, the current value depends partly on previous values
    of the same series, plus a random error.
  </p>

  <p>
    A simple <strong>AR(1)</strong> intuition is:
  </p>

  <p>
    X<sub>t</sub> = c + φ X<sub>t−1</sub> + ε<sub>t</sub>
  </p>

  <ul>
    <li><strong>X<sub>t</sub></strong> = value at time t</li>
    <li><strong>X<sub>t−1</sub></strong> = previous value</li>
    <li><strong>c</strong> = constant term</li>
    <li><strong>φ</strong> (phi) = AR coefficient (how strongly yesterday feeds today)</li>
    <li><strong>ε<sub>t</sub></strong> = random error (shock) at time t</li>
  </ul>

  <p>
    If |φ| is large (but less than 1 in a weakly stationary AR(1)),
    the series is persistent: high values tend to stay high for a while.
  </p>


  <h2>Moving Average (MA) Part</h2>

  <p>
    In an MA model, the current value depends on the current error and
    on past error terms, not directly on past observed levels.
  </p>

  <p>
    A simple <strong>MA(1)</strong> intuition is:
  </p>

  <p>
    X<sub>t</sub> = μ + ε<sub>t</sub> + θ ε<sub>t−1</sub>
  </p>

  <ul>
    <li><strong>μ</strong> (mu) = mean level</li>
    <li><strong>ε<sub>t</sub></strong> = shock at time t</li>
    <li><strong>ε<sub>t−1</sub></strong> = previous shock</li>
    <li><strong>θ</strong> (theta) = MA coefficient</li>
  </ul>

  <p>
    An MA(1) shock affects today and, through θ, the next period, then
    dies out. That is different from AR persistence through past
    <em>values</em>.
  </p>


  <h2>ARMA(p, q)</h2>

  <p>
    <strong>p</strong> is the number of lagged values in the AR part.
    <strong>q</strong> is the number of lagged errors in the MA part.
    ARMA(1, 1) uses one lagged value and one lagged error. Small p and q
    are preferred unless the data clearly need more.
  </p>

  <p>
    Conceptually, ARMA is suitable when the series is
    <strong>stationary</strong> and shows a mix of value-dependence and
    shock-dependence. Stationarity here means that the typical level,
    the amount of variation, and the lag-dependence pattern stay
    reasonably stable over the sample. If the level wanders strongly,
    ARIMA (next topic) brings in differencing. That extra step is not
    part of a basic ARMA definition.
  </p>


  <h2>AR vs MA vs ARMA</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Model</th>
          <th>Depends on</th>
          <th>Simple reading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>AR</strong></td>
          <td>Past values of the series</td>
          <td>Today follows yesterday's level, plus noise</td>
        </tr>
        <tr>
          <td><strong>MA</strong></td>
          <td>Past error terms / shocks</td>
          <td>Today is affected by a recent unexpected shock</td>
        </tr>
        <tr>
          <td><strong>ARMA</strong></td>
          <td>Past values and past errors</td>
          <td>Both persistence and leftover shocks matter</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="note-callout">
    <span class="note-callout-title">Exam Note</span>
    <p>
      ARMA = Autoregressive + Moving Average, for a series that is
      already (approximately) stationary. Do not confuse ARMA with ARIMA.
    </p>
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>AR uses lagged values; MA uses lagged errors; ARMA uses both.</li>
    <li>p is the AR order; q is the MA order.</li>
    <li>ARMA is a model for stationary behaviour, not a cure for every trend.</li>
    <li>ACF/PACF can suggest small p or q; residual checks still decide adequacy.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-arima-models
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-arima-models"] = [
  `

  <h1>Autoregressive Integrated Moving Average (ARIMA) Models</h1>

  <h2>Definition</h2>

  <p>
    An <strong>ARIMA</strong> model is an ARMA model applied after
    <strong>differencing</strong> when that step is needed.
    ARIMA stands for Autoregressive Integrated Moving Average.
    The orders are written ARIMA(p, d, q).
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      ARIMA(1, 1, 1) means: difference the series once (d = 1), then
      use one AR lag (p = 1) and one MA lag (q = 1) on the differenced
      series.
    </p>
  </div>


  <h2>The Three Components</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Letter</th>
          <th>Name</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>p</strong></td>
          <td>Autoregressive order</td>
          <td>How many lagged values of the (possibly differenced) series are used</td>
        </tr>
        <tr>
          <td><strong>d</strong></td>
          <td>Integrated / differencing order</td>
          <td>How many times the series is differenced</td>
        </tr>
        <tr>
          <td><strong>q</strong></td>
          <td>Moving-average order</td>
          <td>How many lagged error terms are used</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>What Differencing Means</h2>

  <p>
    <strong>Differencing</strong> replaces Y<sub>t</sub> by the change
    Y<sub>t</sub> − Y<sub>t−1</sub>. One difference (d = 1) often
    removes a slowly wandering level. A series that already looks stable
    in level may need d = 0, which is just ARMA. Not every time series
    needs differencing.
  </p>

  <p>
    Choose d from the plot and from whether the raw ACF dies slowly,
    not by guessing a large d. Extra differencing can over-correct the
    series.
  </p>


  <h2>Stationarity (Conceptual)</h2>

  <p>
    A <strong>stationary</strong> time series has statistical properties
    that remain reasonably stable over time:
  </p>

  <ul>
    <li><strong>Level:</strong> the typical value does not keep drifting.</li>
    <li><strong>Variation:</strong> the size of ups and downs stays comparable.</li>
    <li><strong>Dependence structure:</strong> the lag relationships do not keep changing in a systematic way.</li>
  </ul>

  <p>
    ARMA is aimed at that stable setting. The <strong>I</strong> in ARIMA
    is the tool that tries to reach a more stable series by differencing
    when the original level is not stable enough.
  </p>


  <h2>ARMA vs ARIMA</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>ARMA</th>
          <th>ARIMA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Orders</strong></td>
          <td>(p, q) with d = 0</td>
          <td>(p, d, q)</td>
        </tr>
        <tr>
          <td><strong>Differencing</strong></td>
          <td>Not used as a built-in step</td>
          <td>Allowed through d</td>
        </tr>
        <tr>
          <td><strong>Typical use</strong></td>
          <td>Already roughly stationary series</td>
          <td>Series that may need a change-of-level step first</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="note-callout">
    <span class="note-callout-title">Exam Note</span>
    <p>
      ARIMA builds on ARMA by allowing differencing through the
      integrated component. Seasonal ARIMA (SARIMA) is a later topic
      and adds seasonal orders; it is not required to define ARIMA.
    </p>
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>ARIMA(p, d, q) = AR order p, differences d, MA order q.</li>
    <li>Differencing models changes when the level wanders; it is not compulsory for every series.</li>
    <li>Stationarity is about a reasonably stable level, variation and lag structure.</li>
    <li>ARIMA(p, 0, q) is the same idea as ARMA(p, q).</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-arima-forecasting
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-arima-forecasting"] = [
  `

  <h1>Forecasting using ARIMA</h1>

  <h2>Definition</h2>

  <p>
    <strong>Forecasting using ARIMA</strong> means fitting a justified
    ARIMA(p, d, q) model to historical data and then using that model
    to estimate future values. The forecast is the model's expected
    future path, not a guarantee.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Monthly shop sales that wander in level may be differenced once
      and then given a small ARIMA, using earlier months to fit and
      later months to check the forecast.
    </p>
  </div>


  <h2>General Workflow</h2>

  <div class="note-flow">Historical Time Series
  ↓
Inspect / Clean
  ↓
Check Stationarity
  ↓
Difference if Required
  ↓
Identify Candidate Model
  ↓
Fit ARIMA
  ↓
Diagnose Residuals
  ↓
Forecast
  ↓
Evaluate</div>

  <ol class="exam-list">
    <li>
      <strong>Inspect / clean:</strong> plot the series, fix obvious errors, keep time order.
    </li>
    <li>
      <strong>Check stationarity:</strong> look at level, variation and whether ACF decays very slowly.
    </li>
    <li>
      <strong>Difference if required:</strong> use d = 1 only when the plot/ACF justify it.
    </li>
    <li>
      <strong>Identify a candidate:</strong> use ACF/PACF of the (differenced) series to suggest small p and q. This is a candidate, not a final proof.
    </li>
    <li>
      <strong>Fit ARIMA:</strong> estimate the model on <strong>training</strong> (earlier) dates.
    </li>
    <li>
      <strong>Diagnose residuals:</strong> leftover ACF should look closer to noise; patterns mean the model is incomplete.
    </li>
    <li>
      <strong>Forecast:</strong> produce future values. A
      <strong>forecast interval</strong> is a range that is intended to
      cover the future observation with a stated probability under the
      model; it widens as the horizon grows.
    </li>
    <li>
      <strong>Evaluate:</strong> compare forecasts with
      <strong>test</strong> (later) dates using MAE or RMSE when possible.
    </li>
  </ol>


  <h2>Training Data, Test Data and Fitting</h2>

  <p>
    <strong>Training data</strong> are used to estimate p, d, q and the
    coefficients. <strong>Test data</strong> are later observations held
    back so that forecast accuracy is not judged only on the fitted
    sample. Fitting means estimating the ARIMA coefficients from the
    training series.
  </p>

  `,

  `

  <h1>Diagnostics, Intervals and a Simple ARIMA Forecast Example</h1>

  <h2>Why Residuals Should Be Examined</h2>

  <p>
    If residuals still show trend, seasonality or strong ACF, the ARIMA
    mean/error structure is not capturing the series. A pretty in-sample
    plot is not enough. Residual plots and residual ACF are part of
    forecasting using ARIMA.
  </p>


  <h2>What a Forecast Plot Should Show</h2>

  <p>
    A useful plot shows the historical series, the forecast path, and
    often an interval band. For a pure random-walk style ARIMA(0, 1, 0),
    the mean forecast stays near the last training value. For models
    with AR/MA terms, the short-run path can move, then settle. Students
    should describe that shape from their own run, not memorise invented
    numbers.
  </p>


  <h2>Small Educational Python Example</h2>

  <p>
    Constructed teaching series (not a downloaded file). Fit a simple
    ARIMA(0, 1, 0) on all but the last six points. Expected display:
    a six-step forecast table, a hold-out MAE, and a plot of train,
    test and forecast. The mean forecast should stay near the last
    training level for this construction.
  </p>

  <div class="program-code notranslate" data-language="python">
# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA

# Load / prepare a wandering teaching series
rng = np.random.default_rng(4)
y = pd.Series(np.cumsum(rng.normal(size=80)))
train, test = y.iloc[:-6], y.iloc[-6:]

# Fit model on training dates only
fit = ARIMA(train, order=(0, 1, 0)).fit()

# Generate forecast
fc = fit.get_forecast(steps=6)
mean = fc.predicted_mean
mae = np.mean(np.abs(test.values - mean.values))

print(mean)
print("Hold-out MAE:", round(mae, 3))

# Plot forecast
train.plot(label="train")
test.plot(label="test")
mean.plot(label="forecast", style="--")
plt.legend()
plt.title("ARIMA(0,1,0) history vs forecast")
plt.tight_layout()
plt.show()
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Fit ARIMA on earlier dates; evaluate on later dates when possible.</li>
    <li>Difference only if stationarity checks suggest it.</li>
    <li>Examine residuals before trusting the forecast.</li>
    <li>Forecast intervals widen with the horizon; they are model-based ranges, not promises.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-seasonal-data
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-seasonal-data"] = [
  `

  <h1>Seasonal Data</h1>

  <h2>Definition</h2>

  <p>
    <strong>Seasonal data</strong> show a repeating pattern at a known
    calendar interval. That repeating pattern is <strong>seasonality</strong>.
    The <strong>seasonal period</strong> m is the length of one full
    seasonal cycle, measured in the same time units as the series.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Ice-cream sales that peak every summer have yearly seasonality.
      For monthly data, m = 12. For quarterly data with a yearly cycle,
      m = 4.
    </p>
  </div>


  <h2>Seasonal Period m</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Data frequency</th>
          <th>Typical yearly seasonality</th>
          <th>m</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monthly</td>
          <td>Same month each year</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Quarterly</td>
          <td>Same quarter each year</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Daily (weekly pattern)</td>
          <td>Same weekday each week</td>
          <td>7</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    Not every daily series is seasonal at 7, and not every monthly series
    is seasonal at 12. m is chosen from knowledge of the calendar and
    from the plot/ACF, not copied blindly.
  </p>


  <h2>How Seasonality Appears on Plots</h2>

  <p>
    A time plot of seasonal data often shows a wave that returns at the
    same time of year (or week). An ACF plot may show a spike at lag m
    (for example lag 12 for months). A rising trend can sit underneath
    the seasonal wave; both can appear together.
  </p>


  <h2>Trend vs Seasonality vs Cyclical Movement</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Meaning</th>
          <th>Interval</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Trend</strong></td>
          <td>Long-term general rise, fall or stable level</td>
          <td>Not a fixed short calendar cycle</td>
        </tr>
        <tr>
          <td><strong>Seasonal pattern</strong></td>
          <td>Repeating shape at a known seasonal period m</td>
          <td>Known (month, quarter, weekday, …)</td>
        </tr>
        <tr>
          <td><strong>Cyclical movement</strong></td>
          <td>Longer swings not tied to a fixed short calendar period</td>
          <td>Irregular length (for example business-cycle style)</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>Why Ordinary ARIMA May Not Be Enough</h2>

  <p>
    Non-seasonal ARIMA(p, d, q) can handle trend-like wandering through d
    and short-lag AR/MA terms. Strong seasonality at lag m is a repeating
    calendar structure. If that structure is clear, a non-seasonal ARIMA
    may leave seasonal leftover in the residuals. Seasonal ARIMA
    (next topic) adds seasonal orders. This topic only states the need;
    it does not introduce SARIMA formulas.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Exam Note</span>
    <p>
      Seasonality is a repeating pattern at a known period m.
      It is not the same as trend, and it is not the same as a long
      irregular cycle.
    </p>
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Seasonal data repeat at a known period m.</li>
    <li>Monthly yearly seasonality uses m = 12; quarterly yearly seasonality uses m = 4.</li>
    <li>Trend, seasonality and cyclical movement must be distinguished.</li>
    <li>Ordinary ARIMA may miss a strong seasonal lag; SARIMA is the seasonal extension.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-sarima-models
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-sarima-models"] = [
  `

  <h1>Seasonal ARIMA Models</h1>

  <h2>Definition</h2>

  <p>
    A <strong>Seasonal ARIMA</strong> model, written <strong>SARIMA</strong>,
    extends ARIMA by adding seasonal AR, seasonal differencing and
    seasonal MA at lag m. It is used when the series has a repeating
    seasonal pattern as well as possible non-seasonal dependence.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Monthly packet sales with a December peak every year may use
      m = 12. A small teaching model such as
      SARIMA(0, 1, 1)(0, 1, 1)<sub>12</sub> combines ordinary
      differencing with seasonal differencing at lag 12.
    </p>
  </div>


  <h2>Notation</h2>

  <p>
    SARIMA(p, d, q)(P, D, Q)<sub>m</sub>
  </p>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>p, d, q</strong></td>
          <td>Non-seasonal AR, differencing and MA (same idea as ARIMA)</td>
        </tr>
        <tr>
          <td><strong>P, D, Q</strong></td>
          <td>Seasonal AR, seasonal differencing and seasonal MA</td>
        </tr>
        <tr>
          <td><strong>m</strong></td>
          <td>Seasonal period (for example 12 for months)</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>Seasonal Components in Words</h2>

  <ul>
    <li>
      <strong>Seasonal AR (P):</strong>
      the current value can depend on the value from m periods ago
      (last year, for monthly data), not only on last month.
    </li>
    <li>
      <strong>Seasonal differencing (D):</strong>
      compare this period with the same period one season earlier,
      for example Y<sub>t</sub> − Y<sub>t−12</sub> when m = 12.
      This is not the same as ordinary (non-seasonal) differencing
      Y<sub>t</sub> − Y<sub>t−1</sub>.
    </li>
    <li>
      <strong>Seasonal MA (Q):</strong>
      the current value can depend on the shock from m periods ago.
    </li>
  </ul>

  <p>
    Ordinary d and seasonal D answer different questions: nearby
    wandering versus a repeating seasonal level. Both can be 0 or 1
    in simple teaching models. Large grids of P, D, Q are not the
    first step.
  </p>


  <h2>ARIMA vs SARIMA</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>ARIMA</th>
          <th>SARIMA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Notation</strong></td>
          <td>(p, d, q)</td>
          <td>(p, d, q)(P, D, Q)<sub>m</sub></td>
        </tr>
        <tr>
          <td><strong>Seasonal lag m</strong></td>
          <td>Not built in</td>
          <td>Included</td>
        </tr>
        <tr>
          <td><strong>Typical use</strong></td>
          <td>Non-seasonal or weakly seasonal series</td>
          <td>Clear repeating seasonal pattern</td>
        </tr>
        <tr>
          <td><strong>Differencing</strong></td>
          <td>Non-seasonal d</td>
          <td>Non-seasonal d and/or seasonal D</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    SARIMA extends ARIMA; it does not replace the need to plot the
    series and to check residuals. ACF at lag m supports the choice
    of m, but does not by itself prove a unique (P, D, Q).
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>SARIMA = Seasonal ARIMA with extra orders (P, D, Q) and period m.</li>
    <li>p, d, q are non-seasonal; P, D, Q are seasonal.</li>
    <li>Seasonal differencing uses lag m; non-seasonal differencing uses lag 1.</li>
    <li>For monthly yearly seasonality, m = 12 is the usual teaching choice.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-sarima-forecasting
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-sarima-forecasting"] = [
  `

  <h1>Forecasting using Seasonal ARIMA Models</h1>

  <h2>Definition</h2>

  <p>
    <strong>Forecasting using Seasonal ARIMA</strong> means fitting a
    SARIMA model whose seasonal period matches the data, then producing
    future values that can continue the historical seasonal shape as
    well as any non-seasonal movement the model allows.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Two years of monthly sales with a yearly peak can be fit with a
      small SARIMA and m = 12, using the last year as a hold-out if the
      series is long enough.
    </p>
  </div>


  <h2>Practical Workflow</h2>

  <div class="note-flow">Seasonal Time Series
  ↓
Visualize
  ↓
Identify Seasonality
  ↓
Check Stationarity
  ↓
Seasonal / Non-seasonal Differencing if Required
  ↓
Select Candidate SARIMA
  ↓
Fit Model
  ↓
Diagnose
  ↓
Forecast
  ↓
Evaluate</div>

  <ol class="exam-list">
    <li>
      <strong>Visualize:</strong> plot the series and look for a repeating wave.
    </li>
    <li>
      <strong>Identify seasonality:</strong> choose m from the calendar and from lag-m ACF (for example m = 12).
    </li>
    <li>
      <strong>Check stationarity:</strong> see whether the level wanders and whether seasonal peaks grow or stay similar.
    </li>
    <li>
      <strong>Difference if required:</strong> ordinary d for nearby wandering; seasonal D for a repeating seasonal level. Use only what the plot supports.
    </li>
    <li>
      <strong>Select a candidate:</strong> start with a small seasonal model, not a huge search.
    </li>
    <li>
      <strong>Fit:</strong> estimate on training months.
    </li>
    <li>
      <strong>Diagnose:</strong> residual ACF should not keep a large seasonal spike if the seasonal part is adequate.
    </li>
    <li>
      <strong>Forecast:</strong> future months, with interval bands that widen with the horizon.
    </li>
    <li>
      <strong>Evaluate:</strong> MAE or RMSE on later months not used in fitting.
    </li>
  </ol>

  `,

  `

  <h1>Interpretation, a Small SARIMA Example, and Unit 3 Quick Revision</h1>

  <h2>How to Read a Seasonal Forecast</h2>

  <p>
    If the historical series peaks every December, a useful SARIMA
    forecast should still show a similar seasonal wiggle, unless the
    data have clearly changed. If the forecast is a flat line while
    the history is strongly seasonal, the seasonal orders or m may be
    wrong. Performance is still judged by error measures on hold-out
    dates, not by how attractive the in-sample plot looks.
  </p>

  <p>
    A forecast interval is a model-based range for a future observation.
    It is not a promise that the actual value must fall inside the band.
  </p>


  <h2>Small Educational Python Example</h2>

  <p>
    Constructed 72 monthly points with trend and a yearly wave
    (airline-passenger-like in spirit, not a downloaded file).
    A small SARIMA is fit on the first 60 months. Expected display:
    a model summary, a 12-month forecast line that still wiggles
    yearly, and a hold-out MAE. Exact MAE depends on the run.
  </p>

  <div class="program-code notranslate" data-language="python">
# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.statespace.sarimax import SARIMAX

# Load / prepare a monthly seasonal teaching series
idx = pd.date_range("2019-01-01", periods=72, freq="MS")
t = np.arange(72)
y = pd.Series(0.4 * t + 8 * np.sin(2 * np.pi * t / 12) + 50, index=idx)
train, test = y.iloc[:-12], y.iloc[-12:]

# Fit a small SARIMA: non-seasonal (0,1,1), seasonal (0,1,1,12)
fit = SARIMAX(
    train,
    order=(0, 1, 1),
    seasonal_order=(0, 1, 1, 12),
    enforce_stationarity=False,
    enforce_invertibility=False
).fit(disp=False)

# Generate forecast
fc = fit.get_forecast(12).predicted_mean
mae = np.mean(np.abs(test - fc))
print(fit.summary())
print("Hold-out MAE:", round(mae, 3))

# Plot forecast
train.plot(label="train")
test.plot(label="test")
fc.plot(label="SARIMA forecast", style="--")
plt.legend()
plt.title("Seasonal ARIMA history vs 12-month forecast")
plt.tight_layout()
plt.show()
  </div>


  <div class="note-callout">
    <span class="note-callout-title">Exam Note</span>
    <p>
      For monthly seasonal forecasting, state m = 12, fit on earlier
      months, and check that the forecast still follows the seasonal
      pattern and is evaluated on later months.
    </p>
  </div>


  <h2>Unit 3 Quick Revision</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Term</th>
          <th>Short definition / exam point</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Autocorrelation</strong></td>
          <td>Correlation of a series with its lagged values.</td>
        </tr>
        <tr>
          <td><strong>Partial autocorrelation</strong></td>
          <td>Lag-k correlation after accounting for intermediate lags.</td>
        </tr>
        <tr>
          <td><strong>AR</strong></td>
          <td>Current value depends on past values. AR(1): X<sub>t</sub> = c + φ X<sub>t−1</sub> + ε<sub>t</sub>.</td>
        </tr>
        <tr>
          <td><strong>MA</strong></td>
          <td>Current value depends on past errors. MA(1): X<sub>t</sub> = μ + ε<sub>t</sub> + θ ε<sub>t−1</sub>.</td>
        </tr>
        <tr>
          <td><strong>ARMA</strong></td>
          <td>AR + MA for a roughly stationary series; orders (p, q).</td>
        </tr>
        <tr>
          <td><strong>ARIMA</strong></td>
          <td>ARMA plus differencing; orders (p, d, q). d is not always needed.</td>
        </tr>
        <tr>
          <td><strong>Forecasting using ARIMA</strong></td>
          <td>Fit on training dates, check residuals, forecast, evaluate on later dates.</td>
        </tr>
        <tr>
          <td><strong>Seasonal data</strong></td>
          <td>Repeating pattern at known period m. Not the same as trend or cycle.</td>
        </tr>
        <tr>
          <td><strong>SARIMA</strong></td>
          <td>Seasonal ARIMA: (p, d, q)(P, D, Q)<sub>m</sub>.</td>
        </tr>
        <tr>
          <td><strong>Forecasting using SARIMA</strong></td>
          <td>Include m, possibly seasonal differencing, then forecast and evaluate.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    <strong>Compact model-selection intuition:</strong>
  </p>

  <div class="note-flow">ACF / PACF / stationarity / seasonality
  ↓
Candidate Model
  ↓
Fit
  ↓
Diagnose
  ↓
Forecast
  ↓
Evaluate</div>

  <ol class="exam-list">
    <li>ACF vs PACF: overall lag correlation vs direct lag-k correlation.</li>
    <li>AR vs MA: past values vs past shocks.</li>
    <li>ARMA vs ARIMA: no built-in differencing vs optional d.</li>
    <li>Non-seasonal vs seasonal differencing: lag 1 vs lag m.</li>
    <li>ARIMA vs SARIMA: no seasonal orders vs (P, D, Q)<sub>m</sub>.</li>
  </ol>

  `
];


// ============================================================
// TIME SERIES — UNIT 4 NOTES
// Module 5: Time Series Regression Model
// Topic IDs must match TIME_SERIES_SYLLABUS.
// ============================================================


// ------------------------------------------------------------
// ts-regression-introduction
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-regression-introduction"] = [
  `

  <h1>Introduction to Time Series Regression</h1>

  <h2>Definition</h2>

  <p>
    <strong>Time series regression</strong> models a dependent series as
    a function of one or more explanatory (predictor) variables, using
    observations that are ordered in time. The regression relationship
    describes how the typical value of the dependent variable changes
    when the predictors change. Time itself, a trend, seasonal
    indicators, or lagged information can be among those predictors.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Daily electricity demand can be modelled using temperature (hot
      days raise cooling load) together with calendar information such
      as weekday vs weekend. The aim is to describe demand, not only to
      follow last week's demand in isolation.
    </p>
  </div>


  <h2>Dependent and Explanatory Variables</h2>

  <p>
    The <strong>dependent variable</strong> (response) is the series we
    want to explain or forecast, written y. An
    <strong>explanatory</strong> or <strong>predictor</strong> variable
    is an x that we treat as given when we write the equation. In
    <strong>simple regression</strong> there is one x. In
    <strong>multiple regression</strong> there are several predictors
    (temperature, holiday indicator, trend, and so on).
  </p>

  <p>
    Time can be an explanatory factor: a time index t can capture a
    slow trend, and month or weekday indicators can capture a repeating
    seasonal calendar. Previous values of y can also appear as lagged
    predictors when that is justified by the problem.
  </p>


  <h2>Why Regression Can Be Useful with Time Series</h2>

  <p>
    ARIMA-style models use mainly the past of the same series. Regression
    is useful when an external series (temperature, price, advertising)
    is believed to drive the response. It can also organise trend and
    seasonal dummy variables in one equation. The fitted equation then
    supports interpretation (“one extra degree of temperature”) and
    prediction of new observations when future x values can be supplied.
  </p>


  <h2>Ordinary Regression vs Time Series Regression</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>Ordinary (cross-section) regression</th>
          <th>Time series regression</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Data order</strong></td>
          <td>Observations are often treated as separate cases</td>
          <td>Observations have a time order that must be kept</td>
        </tr>
        <tr>
          <td><strong>Typical assumption</strong></td>
          <td>Errors independent of each other</td>
          <td>Neighbouring errors may be correlated</td>
        </tr>
        <tr>
          <td><strong>Extra structure</strong></td>
          <td>Usually no lag or season by default</td>
          <td>Trend, season, lags and residual autocorrelation matter</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    Ordinary least squares (OLS) formulas can still be used to
    <em>fit</em> a line, but time series data may
    <strong>violate ordinary regression assumptions</strong> because
    residuals can be autocorrelated. That does not make regression
    useless; it means inference and prediction need extra care. Methods
    such as GLS and WLS, and residual checking, appear later in this
    unit. They are not required to define time series regression.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Time series regression explains y using predictors x that may include time, season and external series.</li>
    <li>Simple regression uses one x; multiple regression uses several.</li>
    <li>Keep chronological order; neighbouring observations are often dependent.</li>
    <li>Autocorrelated errors can invalidate ordinary OLS inference even if the fitted line looks reasonable.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-least-squares
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-least-squares"] = [
  `

  <h1>Least Squares Estimation in Linear Regression Models</h1>

  <h2>Definition</h2>

  <p>
    <strong>Least squares</strong> chooses the coefficients of a linear
    regression so that the total of squared residuals is as small as
    possible. A residual is the gap between an observed y and the value
    predicted by the fitted line. Ordinary least squares (OLS) uses
    equal weight for every observation.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Four constructed pairs (x, y): (1, 3), (2, 5), (3, 6), (4, 8).
      The OLS line computed from these points is
      ŷ = 1.5 + 1.6x (calculation on the next page). At x = 2 the line
      predicts 4.7, while the observed y is 5, so the residual is 0.3.
    </p>
  </div>


  <h2>The Linear Model</h2>

  <p>
    A simple linear regression is written
  </p>

  <p>
    y = β<sub>0</sub> + β<sub>1</sub>x + ε
  </p>

  <ul>
    <li><strong>y</strong> — observed dependent value</li>
    <li><strong>x</strong> — explanatory value</li>
    <li><strong>β<sub>0</sub></strong> — intercept (mean of y when x = 0, if that is meaningful)</li>
    <li><strong>β<sub>1</sub></strong> — slope (change in the mean of y for a one-unit change in x)</li>
    <li><strong>ε</strong> — random error (unobservable shock around the line)</li>
  </ul>

  <p>
    After fitting, the estimated intercept and slope are written
    β̂<sub>0</sub> and β̂<sub>1</sub>. The fitted (predicted) value is
    ŷ = β̂<sub>0</sub> + β̂<sub>1</sub>x. The
    <strong>residual</strong> is e = y − ŷ. The residual is the sample
    leftover; the error ε is the theoretical term in the model. They
    are related ideas, not identical names.
  </p>


  <h2>Least Squares Objective</h2>

  <div class="note-flow">Observed value
  ↓
Predicted value
  ↓
Residual (y − ŷ)
  ↓
Square residual
  ↓
Minimize total squared residuals Σ e<sub>i</sub><sup>2</sup></div>

  <p>
    OLS chooses β̂<sub>0</sub> and β̂<sub>1</sub> so that
    Σ e<sub>i</sub><sup>2</sup> is minimized. Squaring treats over- and
    under-prediction equally and penalises large misses more than small
    ones. Other methods (GLS, WLS) change the weights; they still start
    from this residual idea.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>OLS estimates are chosen to minimize the sum of squared residuals.</li>
    <li>Residual e<sub>i</sub> = y<sub>i</sub> − ŷ<sub>i</sub>; error ε is the unobservable model shock.</li>
    <li>β<sub>0</sub> is the intercept; β<sub>1</sub> is the slope.</li>
    <li>Fitting a line is not the same as checking whether the line is adequate.</li>
  </ol>

  `,

  `

  <h1>A Worked Four-Point OLS Example</h1>

  <h2>Data and Formulas</h2>

  <p>
    Use the constructed pairs (1, 3), (2, 5), (3, 6), (4, 8).
    n = 4, Σx = 10, Σy = 22, x̄ = 2.5, ȳ = 5.5,
    Σxy = 63, Σx<sup>2</sup> = 30.
  </p>

  <p>
    Slope:
    β̂<sub>1</sub> = (n Σxy − (Σx)(Σy)) / (n Σx<sup>2</sup> − (Σx)<sup>2</sup>)
    = (4×63 − 10×22) / (4×30 − 10<sup>2</sup>)
    = (252 − 220) / (120 − 100)
    = 32 / 20
    = 1.6.
  </p>

  <p>
    Intercept:
    β̂<sub>0</sub> = ȳ − β̂<sub>1</sub> x̄
    = 5.5 − 1.6×2.5
    = 1.5.
  </p>

  <p>
    Interpretation: each extra unit of x is associated with a 1.6 unit
    rise in fitted y, on this tiny teaching set. The intercept 1.5 is
    the fitted value at x = 0; here x = 0 is outside the observed range,
    so treat 1.5 as an algebraic intercept, not a real-world claim.
  </p>


  <h2>Small Educational Python Example</h2>

  <p>
    The same four constructed points. Expected display: intercept near
    1.5 and slope near 1.6, plus a scatter with the fitted line. Do not
    treat software rounding as a new exam number.
  </p>

  <div class="program-code notranslate" data-language="python">
# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm

# Load / prepare a constructed four-point series
df = pd.DataFrame({
    "x": [1, 2, 3, 4],
    "y": [3, 5, 6, 8]
})
X = sm.add_constant(df["x"])  # intercept column

# Fit OLS
fit = sm.OLS(df["y"], X).fit()
print(fit.params)

# Plot points and fitted line
plt.scatter(df["x"], df["y"], label="observed")
plt.plot(df["x"], fit.fittedvalues, label="OLS line")
plt.legend()
plt.title("Constructed OLS example")
plt.tight_layout()
plt.show()
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Show the data before quoting a fitted intercept and slope.</li>
    <li>β̂<sub>0</sub> = ȳ − β̂<sub>1</sub> x̄ for simple OLS.</li>
    <li>A fitted line describes association in the sample; it is not proof of cause.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-regression-inference
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-regression-inference"] = [
  `

  <h1>Statistical Inference in Linear Regression</h1>

  <h2>Definition</h2>

  <p>
    After OLS produces coefficient estimates, <strong>statistical
    inference</strong> asks how much uncertainty remains and whether a
    coefficient is distinguishable from a stated null value (often zero).
    Inference uses the estimate, its standard error, and a test or
    interval. It does not replace residual checking, and it does not by
    itself prove that the predictor is important in practice.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Suppose the fitted slope of demand on temperature is positive and
      the associated p-value is small. That suggests, under the model
      assumptions, that a zero slope is a poor description of the
      sample. It does not by itself say that the temperature effect is
      large enough for operations planning.
    </p>
  </div>


  <h2>Estimate, Uncertainty and Tests</h2>

  <div class="note-flow">Estimate (β̂)
  ↓
Uncertainty (standard error)
  ↓
Hypothesis test or confidence interval
  ↓
Interpretation (not automatic importance)</div>

  <ul>
    <li><strong>Coefficient estimate</strong> — the OLS number β̂ (intercept or slope).</li>
    <li><strong>Standard error (SE)</strong> — a scale for how much β̂ would typically vary from sample to sample under the model.</li>
    <li><strong>t-statistic</strong> — often (β̂ − hypothesised value) / SE. Large |t| means the estimate sits far from the null relative to its SE.</li>
    <li><strong>p-value</strong> — under the stated null and the model assumptions, how unusual the test statistic would be. A small p-value is evidence against that null, not a probability that the hypothesis is “true”.</li>
    <li><strong>Statistical significance</strong> — shorthand for “the test rejected the null at a chosen level (for example 5%)”.</li>
  </ul>

  <p>
    A <strong>confidence interval</strong> for a coefficient is a range
    built from β̂ and its SE. In repeated sampling under the model, a
    95% interval procedure covers the true coefficient about 95% of the
    time. One interval from one sample is not a 95% chance that the
    true value “is inside” in a mystical sense; it is the result of that
    procedure.
  </p>


  <h2>Significance vs Practical Importance</h2>

  <p>
    <strong>Statistical significance is not the same as practical
    significance.</strong> A tiny slope can be “significant” in a large
    sample. A large slope can fail a test in a short, noisy series.
    Always read the size of β̂ (and the units of x and y) together with
    the test.
  </p>

  <p>
    Time-series warning: if residuals are autocorrelated, ordinary SEs,
    t-statistics and p-values can be misleading even when β̂ itself is
    a reasonable point fit. Adequacy checking comes before trusting
    inference.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Inference turns an estimate into a statement of uncertainty (SE, interval, test).</li>
    <li>A small p-value is evidence against a stated null, under assumptions.</li>
    <li>Do not equate statistical significance with practical importance.</li>
    <li>Autocorrelated residuals can invalidate ordinary OLS standard errors.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-prediction
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-prediction"] = [
  `

  <h1>Prediction of New Observations</h1>

  <h2>Definition</h2>

  <p>
    <strong>Prediction of a new observation</strong> uses a fitted
    regression to estimate a future or unused y at a chosen set of x
    values. That is different from reporting the estimated
    <strong>mean response</strong> at the same x: the mean is the
    average level of the line; an individual y still has extra scatter
    around that line.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Using ŷ = 1.5 + 1.6x from the four-point teaching fit, a new
      x = 5 gives fitted mean 1.5 + 1.6×5 = 9.5. That 9.5 is the
      estimated mean response at x = 5. An individual new y at x = 5
      would still vary around 9.5. x = 5 is one step beyond the
      observed x range 1–4, so treat it as a short extrapolation, not
      a guaranteed future.
    </p>
  </div>


  <h2>Mean Response vs Individual Prediction</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>Estimated mean response</th>
          <th>Prediction of a new observation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Target</strong></td>
          <td>The average y at a given x</td>
          <td>One new y at that x</td>
        </tr>
        <tr>
          <td><strong>Uncertainty</strong></td>
          <td>Uncertainty in the fitted line</td>
          <td>Line uncertainty plus leftover scatter</td>
        </tr>
        <tr>
          <td><strong>Interval</strong></td>
          <td>Confidence interval for the mean</td>
          <td>Prediction interval for the new y</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    A <strong>prediction interval</strong> is generally
    <strong>wider</strong> than a confidence interval for the mean at
    the same x, because an individual outcome has more to explain than
    the average. Both intervals are model-based ranges, not promises.
    They typically widen as x moves away from the centre of the
    training x values.
  </p>


  <h2>Prediction Flow</h2>

  <div class="note-flow">Input values of x
  ↓
Fitted regression model
  ↓
Predicted value ŷ
  ↓
Prediction interval (wider than CI for the mean)</div>

  <p>
    Supply future x values that are realistic (next week's temperature,
    not an impossible calendar). For time series, also remember that
    autocorrelated residuals mean the leftover is not independent noise;
    a simple OLS prediction interval can then be too narrow.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Mean response ≠ one new observation; the second has extra scatter.</li>
    <li>Prediction intervals are generally wider than confidence intervals for the mean.</li>
    <li>Plug in x, compute ŷ, then attach an interval if the assumptions allow it.</li>
    <li>Extrapolation beyond the observed x range is weaker than interpolation.</li>
  </ol>

  `,

  `

  <h1>A Small Prediction Example in Python</h1>

  <h2>What the Student Should Expect</h2>

  <p>
    Same constructed four points as the OLS example. Predict at x = 5.
    Expected display: a mean near 9.5 and a summary that includes a
    mean confidence interval and a prediction interval. The prediction
    interval should be the wider of the two. Do not copy invented
    printed bounds into an answer booklet.
  </p>

  <div class="program-code notranslate" data-language="python">
# Import libraries
import pandas as pd
import statsmodels.api as sm

# Load / prepare constructed data
df = pd.DataFrame({"x": [1, 2, 3, 4], "y": [3, 5, 6, 8]})
X = sm.add_constant(df["x"])
fit = sm.OLS(df["y"], X).fit()

# New x (one step beyond the sample)
new_X = sm.add_constant(pd.DataFrame({"x": [5]}), has_constant="add")

# Mean response interval and prediction interval
mean_ci = fit.get_prediction(new_X).summary_frame(alpha=0.05)
print(mean_ci[["mean", "mean_ci_lower", "mean_ci_upper",
               "obs_ci_lower", "obs_ci_upper"]])
  </div>

  <p>
    In statsmodels, <code>mean_ci_*</code> refers to the mean response
    and <code>obs_ci_*</code> to the new observation. Compare those two
    widths on your own run.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Prediction needs the fitted model and the new x values.</li>
    <li>Report ŷ and, when asked, say whether the interval is for the mean or for a new y.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-model-adequacy
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-model-adequacy"] = [
  `

  <h1>Model Adequacy Checking</h1>

  <h2>Definition</h2>

  <p>
    <strong>Model adequacy checking</strong> asks whether a fitted
    regression is a reasonable description of the data, not only whether
    coefficients could be computed. The main tools are residuals:
    their centre, spread, plots against fitted values or time, and
    (for time series) residual autocorrelation. Fitting and checking
    are separate jobs.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Electricity demand regressed on temperature may show a straight
      line in-sample, yet residuals that still rise on Mondays or that
      have a strong lag-1 ACF. The line is not adequate until those
      leftover patterns are addressed (extra predictors, GLS-type
      errors, or another structure).
    </p>
  </div>


  <h2>What to Inspect</h2>

  <ul>
    <li><strong>Residual centre:</strong> residuals should scatter around zero, not a large systematic offset.</li>
    <li><strong>Residual variance:</strong> the vertical spread should not fan out or collapse in a clear way.</li>
    <li><strong>Residual vs fitted plot:</strong> a healthy plot looks like unstructured scatter about a horizontal zero line. Curves, funnels or stripes are warnings.</li>
    <li><strong>Normal Q-Q plot (introductory):</strong> ordered residuals versus expected normal scores. A roughly straight pattern supports a normal-error story; clear bends suggest heavy tails or skew. It is a guide, not a proof.</li>
    <li><strong>Residual autocorrelation:</strong> leftover ACF at lag 1 (or lag m) means time dependence was not captured.</li>
    <li><strong>Outliers / unusual points:</strong> one far residual or one far-x point can pull OLS. Investigate; do not delete automatically.</li>
  </ul>

  <p>
    A plot that “looks random” is encouraging, not a certificate of a
    perfect model. Always combine plots with subject knowledge and,
    for time series, with residual ACF.
  </p>


  <h2>Diagnostic Flow</h2>

  <div class="note-flow">Fit Model
  ↓
Calculate Residuals
  ↓
Plot Residuals
  ↓
Check Pattern
  ↓
Check Autocorrelation
  ↓
Assess Adequacy
  ↓
Improve Model if Needed</div>

  <p>
    Residual autocorrelation is especially important in this subject:
    it is a sign that the regression has not captured time dependence
    adequately. Ordinary t-tests and prediction intervals then need
    doubt until the leftover dependence is reduced or modelled.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Adequacy checking is not the same as fitting coefficients.</li>
    <li>Look at residual vs fitted, time order, Q-Q (introductory) and residual ACF.</li>
    <li>Random-looking residuals help; they do not prove the model is perfect.</li>
    <li>Autocorrelated residuals warn that time structure remains.</li>
  </ol>

  `,

  `

  <h1>Residual Plots in a Small Python Check</h1>

  <h2>What the Student Should Expect</h2>

  <p>
    Constructed y = 2 + 0.5x plus noise. Expected display: residuals
    scattered about zero against fitted values, and a residual ACF that
    is not a large, persistent lag-1 spike for this independent-noise
    construction. If you later add a leftover trend, the ACF should
    look more persistent — compare the two runs yourself.
  </p>

  <div class="program-code notranslate" data-language="python">
# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm
from statsmodels.graphics.tsaplots import plot_acf

# Load / prepare a constructed teaching series
rng = np.random.default_rng(7)
x = np.arange(1, 41)
y = 2 + 0.5 * x + rng.normal(scale=1.0, size=40)
X = sm.add_constant(x)
fit = sm.OLS(y, X).fit()
resid = fit.resid

# Residual vs fitted
plt.axhline(0, linestyle="--")
plt.scatter(fit.fittedvalues, resid)
plt.xlabel("Fitted")
plt.ylabel("Residual")
plt.title("Residual vs fitted (constructed OLS)")
plt.tight_layout()
plt.show()

# Residual autocorrelation
plot_acf(resid, lags=10)
plt.title("Residual ACF")
plt.tight_layout()
plt.show()
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Plot residuals against fitted values and against time.</li>
    <li>Use residual ACF when the data are a time series.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-variable-selection
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-variable-selection"] = [
  `

  <h1>Variable Selection Methods in Regression</h1>

  <h2>Definition</h2>

  <p>
    <strong>Variable selection</strong> is the process of choosing which
    predictors to keep in a regression. The aims are to include
    variables that matter for the problem, to drop variables that add
    noise or duplication, to reduce overfitting, and to keep the
    equation readable. More variables do
    <strong>not</strong> always improve the model.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Daily demand might be considered with temperature, a holiday
      indicator, an advertising spend series, and a linear time index.
      Temperature and holidays may earn a place; a second temperature
      copy, or a weakly measured extra series, may not.
    </p>
  </div>


  <h2>Why Selection Is Needed</h2>

  <ul>
    <li><strong>Relevance:</strong> keep predictors with a clear story and a stable association.</li>
    <li><strong>Unnecessary variables:</strong> extra x terms use up degrees of freedom and can inflate coefficient SEs.</li>
    <li><strong>Overfitting:</strong> an equation that hugs the training sample may forecast later dates poorly.</li>
    <li><strong>Interpretability:</strong> a short, justified list is easier to explain in an exam and in practice.</li>
  </ul>


  <h2>Basic Search Methods</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Idea</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Forward selection</strong></td>
          <td>Start with no predictors; add the most useful remaining x one at a time</td>
        </tr>
        <tr>
          <td><strong>Backward elimination</strong></td>
          <td>Start with all candidates; drop the least useful x one at a time</td>
        </tr>
        <tr>
          <td><strong>Stepwise selection</strong></td>
          <td>Allow both adding and dropping as the search proceeds</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    These searches are helpers, not proofs. Different paths can keep
    different sets. Always re-check residuals and the story of the
    variables after the search.
  </p>


  <h2>Simple Comparison Criteria</h2>

  <p>
    Ordinary R<sup>2</sup> never falls when a variable is added, so it
    is a poor “more is better” score.
    <strong>Adjusted R<sup>2</sup></strong> penalises extra predictors
    in a simple way.
    <strong>AIC</strong> and <strong>BIC</strong> are information
    criteria: smaller is preferred on the usual scale; BIC penalises
    extra variables more heavily than AIC. Use them to compare a few
    candidate equations, not as a machine-learning tournament.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Variable selection balances fit, leftover diagnostics, and a short justified predictor list.</li>
    <li>Forward, backward and stepwise are search habits, not unique true models.</li>
    <li>Adjusted R<sup>2</sup>, AIC and BIC can compare candidates; ordinary R<sup>2</sup> always rises with extra x.</li>
    <li>More variables do not always improve the model, especially for later-date forecasts.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-gls
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-gls"] = [
  `

  <h1>Generalized Least Squares</h1>

  <h2>Definition</h2>

  <p>
    <strong>Generalized least squares (GLS)</strong> estimates
    regression coefficients using a stated structure for the errors —
    typically correlation over time, or unequal variances, or both.
    OLS treats every residual as if it had the same variance and no
    correlation with other residuals. When that simple error story is
    wrong, OLS point estimates may still be usable, but they can be
    inefficient, and ordinary SEs can be invalid.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Monthly sales on price may leave residuals that stay high for
      several months in a row (positive autocorrelation). GLS (or a
      close practical relative) uses that covariance pattern when
      estimating the price slope, instead of pretending the leftovers
      are independent.
    </p>
  </div>


  <h2>OLS vs GLS</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>OLS</th>
          <th>GLS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Error story</strong></td>
          <td>Equal variance; independent errors</td>
          <td>Uses a covariance structure (correlation and/or unequal variance)</td>
        </tr>
        <tr>
          <td><strong>How coefficients are estimated</strong></td>
          <td>Minimize Σ e<sub>i</sub><sup>2</sup> with equal weights</td>
          <td>Minimize a weighted residual criterion that respects the covariance</td>
        </tr>
        <tr>
          <td><strong>When it is the natural tool</strong></td>
          <td>Simple independent-error setting</td>
          <td>Autocorrelated or otherwise structured errors, if the structure is reasonable</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    Conceptually, GLS “re-weights and re-combines” the observations
    using the error covariance so that leftover dependence is not
    ignored. The covariance structure must be
    <strong>specified or estimated</strong> (for example a simple AR(1)
    leftover). A badly chosen structure can be worse than OLS. This
    unit does not require matrix derivations of GLS.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>OLS assumes a simple error structure; GLS uses a covariance structure.</li>
    <li>Correlated errors and/or unequal variances are reasons to consider GLS.</li>
    <li>GLS can improve efficiency and inference when the structure is appropriate.</li>
    <li>The covariance must be justified; GLS is not an automatic upgrade.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-wls
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-wls"] = [
  `

  <h1>Weighted Least Squares</h1>

  <h2>Definition</h2>

  <p>
    <strong>Weighted least squares (WLS)</strong> is least squares in
    which each observation has its own weight. It is the usual tool
    when errors are independent (or treated as independent) but do not
    share one common variance: some y values are measured more
    precisely than others. High-precision observations get a
    <strong>higher</strong> weight; noisy observations get a
    <strong>lower</strong> weight.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Annual regional demand might be more precisely recorded in later
      years than in early years with incomplete meters. WLS can down-
      weight the early, noisier years instead of treating every year as
      equally precise.
    </p>
  </div>


  <h2>The WLS Criterion</h2>

  <p>
    WLS minimizes Σ w<sub>i</sub> (y<sub>i</sub> − ŷ<sub>i</sub>)<sup>2</sup>
  </p>

  <ul>
    <li><strong>w<sub>i</sub></strong> — weight for observation i (larger when that y is more precise)</li>
    <li><strong>y<sub>i</sub></strong> — observed response</li>
    <li><strong>ŷ<sub>i</sub></strong> — fitted value from the weighted estimates</li>
  </ul>

  <p>
    If all weights equal 1, WLS reduces to OLS. Weights are often
    taken as inversely proportional to an estimated variance. WLS does
    <strong>not</strong> automatically fix every heteroscedasticity
    problem: the weights must be reasonable, and leftover
    autocorrelation is a different issue (then think GLS or a time-
    series error model, not only WLS).
  </p>


  <h2>OLS vs WLS vs GLS</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>OLS</th>
          <th>WLS</th>
          <th>GLS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Main error concern</strong></td>
          <td>Equal variance; independence</td>
          <td>Unequal variances (weights)</td>
          <td>General covariance, including correlation</td>
        </tr>
        <tr>
          <td><strong>Criterion</strong></td>
          <td>Σ e<sub>i</sub><sup>2</sup></td>
          <td>Σ w<sub>i</sub> e<sub>i</sub><sup>2</sup></td>
          <td>Uses the full error covariance idea</td>
        </tr>
        <tr>
          <td><strong>Relation</strong></td>
          <td>Equal-weight special case</td>
          <td>A special case of GLS when errors are uncorrelated but variances differ</td>
          <td>Broader; WLS is not the same as modelling lag-1 residual correlation</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>WLS down-weights noisy observations and up-weights precise ones.</li>
    <li>Minimize Σ w<sub>i</sub>(y<sub>i</sub> − ŷ<sub>i</sub>)<sup>2</sup>.</li>
    <li>WLS is not identical to GLS: GLS also covers correlated errors.</li>
    <li>WLS does not solve every variance problem if weights are poor or residuals remain autocorrelated.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-general-regression
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-general-regression"] = [
  `

  <h1>Regression Models for General Time Series Data</h1>

  <h2>Definition</h2>

  <p>
    A <strong>regression model for general time series data</strong>
    explains a series using a mix of time-based structure and external
    predictors: a trend in time, seasonal indicators, explanatory
    series such as temperature, and sometimes lagged y or lagged x.
    The same residual discipline as the rest of this unit still
    applies: fit, check leftovers, then choose OLS, GLS or WLS as the
    error pattern suggests.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Conceptual electricity demand:
      Demand = trend effect + seasonal effect + temperature effect + error.
      The trend captures slow growth, the seasonal term captures winter
      vs summer (or weekday vs weekend), and temperature captures
      weather beyond the calendar average.
    </p>
  </div>


  <h2>Typical Predictors</h2>

  <ul>
    <li><strong>Time / trend:</strong> a time index t or a smooth trend term.</li>
    <li><strong>Seasonal indicators:</strong> month, quarter or weekday dummies (period m as in Unit 3).</li>
    <li><strong>External explanatory variables:</strong> temperature, price, holidays, promotions.</li>
    <li><strong>Lagged information:</strong> y<sub>t−1</sub> or a lagged x, when yesterday genuinely feeds today.</li>
  </ul>


  <h2>Time-Series Issues that Remain</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Issue</th>
          <th>Why it matters in regression</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Autocorrelation</strong></td>
          <td>Ordinary SEs and prediction intervals can be wrong; consider GLS-type errors or extra lags</td>
        </tr>
        <tr>
          <td><strong>Seasonality</strong></td>
          <td>A trend-only regression leaves a repeating leftover wave</td>
        </tr>
        <tr>
          <td><strong>Non-stationarity</strong></td>
          <td>A drifting level may need a trend, differencing, or another structure; do not ignore a wandering y</td>
        </tr>
        <tr>
          <td><strong>Changing variance</strong></td>
          <td>Fan-shaped residuals may suggest WLS or a variance transformation</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    Ordinary OLS regression is often a first fit, not the last word.
    If residuals are still autocorrelated, additional treatment is
    needed before treating t-tests and forecast bands as trustworthy.
    Multivariate systems of several series together belong to a later
    unit; this topic stays with one response and its predictors.
  </p>


  <h2>From Fit to Forecast</h2>

  <div class="note-flow">Regression Model
  ↓
Fit
  ↓
Check Residuals
  ↓
Check Autocorrelation / Variance
  ↓
Choose OLS / GLS / WLS as Appropriate
  ↓
Predict
  ↓
Evaluate</div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>General time series regression can include trend, season, external x and lags.</li>
    <li>Autocorrelation, seasonality, non-stationarity and changing variance still need checking.</li>
    <li>OLS, GLS and WLS are chosen after looking at the error pattern.</li>
    <li>Evaluate predictions on later dates, not only on the fitted sample.</li>
  </ol>

  `,

  `

  <h1>Unit 4 Quick Revision</h1>

  <h2>Short Exam Definitions</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Short definition / exam point</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Time series regression</strong></td>
          <td>Explain y using predictors, keeping time order; errors may be correlated.</td>
        </tr>
        <tr>
          <td><strong>Least squares / OLS</strong></td>
          <td>Choose coefficients to minimize Σ e<sub>i</sub><sup>2</sup> with equal weights.</td>
        </tr>
        <tr>
          <td><strong>Statistical inference</strong></td>
          <td>SE, t / p-value, confidence interval; significance ≠ practical importance.</td>
        </tr>
        <tr>
          <td><strong>Prediction</strong></td>
          <td>New ŷ at new x; prediction interval is generally wider than CI for the mean.</td>
        </tr>
        <tr>
          <td><strong>Residual vs error</strong></td>
          <td>e = y − ŷ (sample leftover); ε is the unobservable model shock.</td>
        </tr>
        <tr>
          <td><strong>Model adequacy</strong></td>
          <td>Residual plots, Q-Q (intro), residual ACF; fitting ≠ checking.</td>
        </tr>
        <tr>
          <td><strong>Variable selection</strong></td>
          <td>Forward / backward / stepwise; adjusted R<sup>2</sup>, AIC, BIC; more x is not always better.</td>
        </tr>
        <tr>
          <td><strong>GLS</strong></td>
          <td>Uses an error covariance structure (correlation and/or unequal variance).</td>
        </tr>
        <tr>
          <td><strong>WLS</strong></td>
          <td>Σ w<sub>i</sub>e<sub>i</sub><sup>2</sup>; higher weight for more precise observations.</td>
        </tr>
        <tr>
          <td><strong>General TS regression</strong></td>
          <td>Trend + season + external x (+ lags); then diagnose and forecast.</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>OLS / WLS / GLS</h2>

  <p>
    OLS: simple independent equal-variance errors.
    WLS: independent errors with different variances (weights).
    GLS: general covariance, including autocorrelation.
    WLS is a special case of the GLS idea when correlation is ignored
    and only variances differ.
  </p>


  <h2>Compact Decision Intuition</h2>

  <div class="note-flow">Regression Model
  ↓
Fit
  ↓
Check Residuals
  ↓
Check Autocorrelation / Variance
  ↓
Choose OLS / GLS / WLS as Appropriate
  ↓
Predict
  ↓
Evaluate</div>

  <ol class="exam-list">
    <li>OLS vs GLS: equal independent errors vs structured covariance.</li>
    <li>OLS vs WLS: equal weights vs precision weights.</li>
    <li>GLS vs WLS: full covariance vs variance weights only.</li>
    <li>Confidence interval vs prediction interval: mean vs one new y (wider).</li>
    <li>Statistical vs practical significance: test rejection vs useful size.</li>
  </ol>

  `
];


// ============================================================
// TIME SERIES — UNIT 5 NOTES
// Module 6: Multivariate Time Series Models and Forecasting
// Topic IDs must match TIME_SERIES_SYLLABUS.
// ============================================================


// ------------------------------------------------------------
// ts-multivariate-models
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-multivariate-models"] = [
  `

  <h1>Multivariate Time Series Models and Forecasting</h1>

  <h2>Definition</h2>

  <p>
    A <strong>multivariate time series</strong> contains observations of
    <strong>multiple variables</strong> recorded over the same time
    points. The variables may be related to one another, and their
    <strong>joint behaviour</strong> can be used for analysis and
    forecasting. That is different from a univariate series, which
    follows one variable only.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Monthly sales, advertising expenditure and customer visits for
      the same shop, recorded for the same months. A rise in visits
      may accompany a rise in sales; advertising may move with both.
      Those links are information. They are not, by themselves, proof
      that advertising <em>caused</em> the extra sales.
    </p>
  </div>


  <h2>Univariate vs Multivariate</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>Univariate time series</th>
          <th>Multivariate time series</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>What is recorded</strong></td>
          <td>One variable over time (for example sales only)</td>
          <td>Several variables over the same times (sales, ads, visits)</td>
        </tr>
        <tr>
          <td><strong>Main information</strong></td>
          <td>The past of that one series</td>
          <td>Own pasts plus relationships among the series</td>
        </tr>
        <tr>
          <td><strong>Forecast idea</strong></td>
          <td>Forecast one series, mainly from itself</td>
          <td>Can forecast several series together (simultaneous forecasting)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    Multiple series can help because one variable may lead another
    (temperature ahead of electricity demand) or move together with it
    (GDP, inflation and unemployment in the same quarters).
    <strong>Correlation does not automatically imply causation.</strong>
    A joint model can still be useful for description and forecasting
    even when the economic “why” is not fully settled.
  </p>


  <h2>Joint Behaviour and Simultaneous Forecasting</h2>

  <p>
    <strong>Joint behaviour</strong> means the typical co-movement:
    when one series is high, is another also high, in the same month or
    after a lag? <strong>Simultaneous forecasting</strong> means
    producing future values for more than one series in a way that
    respects those links, rather than fitting three unrelated univariate
    models and ignoring the rest.
  </p>

  <div class="note-flow">Multiple Time Series
  ↓
Examine Relationships
  ↓
Model Joint Behavior
  ↓
Forecast Multiple Variables</div>

  <p>
    At this syllabus level, the modelling idea is broad: keep a common
    time index, plot the series together, look at contemporaneous and
    lagged association, then choose a joint structure if the
    relationships look stable enough. Named systems such as vector
    autoregressions are not required here; the exam point is the
    multivariate idea, not a matrix derivation.
  </p>


  <h2>A Compact Modelling Flow</h2>

  <div class="note-flow">Multivariate Data
  ↓
Explore Relationships
  ↓
Check Stationarity
  ↓
Select Model
  ↓
Fit
  ↓
Forecast
  ↓
Evaluate</div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Multivariate = several series, same time index, possibly related.</li>
    <li>Univariate uses one series; multivariate uses joint behaviour as well.</li>
    <li>Variables can help predict each other; correlation is not causation.</li>
    <li>Simultaneous forecasting means producing several futures that respect the links.</li>
  </ol>

  `,

  `

  <h1>A Small Multivariate Plot Example</h1>

  <h2>What the Student Should Expect</h2>

  <p>
    Constructed monthly teaching series (not a downloaded file): sales,
    advertising and visits that tend to move together. Expected display:
    three aligned line plots and a correlation table printed by your
    run. Describe the co-movement from the graph; do not memorise
    invented printed numbers.
  </p>

  <div class="program-code notranslate" data-language="python">
# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Load / prepare constructed monthly series
idx = pd.date_range("2024-01-01", periods=24, freq="MS")
t = np.arange(24)
visits = 80 + 0.8 * t + 8 * np.sin(2 * np.pi * t / 12)
ads = 20 + 0.3 * t + 0.15 * (visits - visits.mean())
sales = 40 + 0.4 * visits + 0.2 * ads

df = pd.DataFrame(
    {"sales": sales, "advertising": ads, "visits": visits},
    index=idx
)

# Plot the three series together
df.plot(subplots=True, title="Constructed multivariate monthly series")
plt.tight_layout()
plt.show()

# Association among the same-month values (not a causal test)
print(df.corr())
  </div>

  <p>
    Same-month correlation summarises contemporaneous association.
    Lagged cross-correlation (sales now vs advertising last month) is
    the next conceptual step; it still does not prove cause.
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Always align multivariate series on a common time index.</li>
    <li>Plot first, then summarise association; do not skip the graph.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-multivariate-stationary
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-multivariate-stationary"] = [
  `

  <h1>Multivariate Stationary Process</h1>

  <h2>Definition</h2>

  <p>
    Unit 3 used <strong>stationarity</strong> for one series: a
    reasonably stable typical level, a reasonably stable amount of
    variation, and a dependence structure that does not keep changing
    in a systematic way. A <strong>multivariate stationary process</strong>
    extends that idea to several series at once. Not only each series,
    but also the <strong>relationships among the series</strong> (including
    lagged cross-links), stay reasonably stable over time.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Two related economic series, such as a regional price index and a
      wage index, recorded monthly. If both wander upward without bound
      and the gap between them keeps changing regime, the pair is not
      behaving as a stationary multivariate process. If, after a simple
      transformation or differencing, the pair fluctuates around stable
      means and a stable co-movement, modelling is on safer ground.
    </p>
  </div>


  <h2>What Should Stay Stable</h2>

  <ul>
    <li><strong>Mean behaviour:</strong> each series does not keep drifting in level (after any justified differencing or trend removal).</li>
    <li><strong>Variance / covariance behaviour:</strong> the typical size of each series, and how strongly they move together at the same time, does not keep jumping to a new regime.</li>
    <li><strong>Lagged relationships:</strong> the way series A now relates to series B last month stays comparable through the sample.</li>
  </ul>

  <p>
    <strong>Covariance</strong> at the same time is “do they move
    together this month?”
    <strong>Cross-covariance</strong> at a lag is “does today's A move
    with last month's B?” Both are association measures. They are
    not causation. Advanced matrix proofs of these quantities are not
    required at this level.
  </p>


  <h2>Univariate vs Multivariate Stationarity</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>Univariate stationarity</th>
          <th>Multivariate stationarity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Focus</strong></td>
          <td>One series: level, variation, own lags</td>
          <td>The whole vector: own properties plus cross-series links</td>
        </tr>
        <tr>
          <td><strong>Can fail even if…</strong></td>
          <td>The single series wanders or changes volatility</td>
          <td>Each series looks calmer but the relationship between them keeps shifting</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>Why It Matters for Modelling</h2>

  <p>
    Joint models and simultaneous forecasts assume that the pattern you
    estimated will still be relevant next month. If the means, spreads
    or cross-links are still evolving, the fitted joint structure can
    be a poor guide to the future.
  </p>

  <div class="note-flow">Non-stationary series
  ↓
May require transformation / differencing
  ↓
More stable structure
  ↓
Then model the multivariate process</div>

  <p>
    As in Unit 3, not every series needs differencing. Check plots and
    whether associations look stable. Do not difference automatically
    “because the data are multivariate.”
  </p>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Multivariate stationarity = stable individual behaviour <em>and</em> stable cross-variable relationships.</li>
    <li>Cross-covariance describes lagged association between two series; it is not causation.</li>
    <li>Non-stationary pairs may need transformation or differencing before a joint model.</li>
    <li>Do not assume that separate univariate stationarity automatically gives multivariate stationarity.</li>
  </ol>

  `
];


// ------------------------------------------------------------
// ts-bayesian-forecasting
// ------------------------------------------------------------

TIME_SERIES_NOTES["ts-bayesian-forecasting"] = [
  `

  <h1>Bayesian Methods in Forecasting</h1>

  <h2>Definition</h2>

  <p>
    <strong>Bayesian forecasting</strong> combines
    <strong>prior</strong> knowledge or beliefs with
    <strong>observed data</strong> to update the uncertainty about
    unknown quantities and about future outcomes. The updated belief is
    the <strong>posterior</strong>. A forecast can then be read from
    that posterior (a likely range, not only a single number).
  </p>

  <div class="note-callout">
    <span class="note-callout-title">Example</span>
    <p>
      Historical shop knowledge says weekly demand is usually in a
      moderate range (prior). This week's new sales counts are extra
      evidence (likelihood). Bayesian updating mixes the prior with
      those counts to produce a posterior for next week's demand. If
      the new weeks are unusually high, the posterior shifts upward,
      but it need not ignore all past experience.
    </p>
  </div>


  <h2>Prior, Likelihood, Posterior</h2>

  <div class="note-flow">Prior Knowledge
  ↓
Observe Data
  ↓
Update Belief
  ↓
Posterior Distribution
  ↓
Forecast</div>

  <ul>
    <li><strong>Prior</strong> — initial belief about a quantity (typical demand, a slope, a seasonal peak) before seeing the current sample, or before adding the latest observations.</li>
    <li><strong>Likelihood</strong> — how plausible the observed data are for different values of that quantity; the evidence coming from the data under a stated model.</li>
    <li><strong>Posterior</strong> — the updated belief after combining prior and likelihood.</li>
  </ul>

  <p>
    Conceptually:
  </p>

  <p>
    Posterior ∝ Likelihood × Prior
  </p>

  <p>
    The symbol ∝ means “proportional to”: the posterior is shaped by
    multiplying the data evidence by the prior (then scaled so that it
    is a proper distribution). This is the updating idea, not a full
    probability derivation or a sampling algorithm.
  </p>

  <div class="note-flow">Prior
  +
Observed Data
  ↓
Posterior
  ↓
Forecast</div>


  <h2>Point Forecast vs Uncertainty-Aware Forecast</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th></th>
          <th>Simple point forecast</th>
          <th>Bayesian / uncertainty-aware forecast</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>What is reported</strong></td>
          <td>Often one number (next week's sales = 50)</td>
          <td>A distribution or a range that reflects remaining uncertainty</td>
        </tr>
        <tr>
          <td><strong>Prior knowledge</strong></td>
          <td>May be ignored or used informally</td>
          <td>Can be written into the prior and updated with data</td>
        </tr>
        <tr>
          <td><strong>New observations</strong></td>
          <td>May require a full re-fit from scratch in spirit</td>
          <td>Natural story: update the posterior as data arrive</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    Bayesian forecasting is <strong>not always better</strong> than
    classical (frequentist) methods such as OLS or ARIMA. A poor prior
    or a wrong likelihood can mislead. Classical methods remain
    standard when a simple fitted model and residual checks are enough.
  </p>


  <h2>Advantages and Limitations</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Advantages</th>
          <th>Limitations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Can incorporate prior knowledge (manager experience, earlier studies)</td>
          <td>Choosing an appropriate prior can be difficult</td>
        </tr>
        <tr>
          <td>Uncertainty is represented explicitly (a posterior, not only a point)</td>
          <td>Computation can be more complex than a single OLS/ARIMA fit</td>
        </tr>
        <tr>
          <td>Beliefs can be updated as new observations arrive</td>
          <td>Results still depend on the model and the assumptions</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>Exam-Oriented Key Points</h2>

  <ol class="exam-list">
    <li>Prior = initial belief; likelihood = data evidence; posterior = updated belief.</li>
    <li>Posterior ∝ Likelihood × Prior.</li>
    <li>Bayesian forecasts can carry a range of uncertainty, not only one point.</li>
    <li>Bayesian methods are not automatically superior to classical forecasting.</li>
  </ol>

  `,

  `

  <h1>Unit 5 Quick Revision</h1>

  <h2>Short Exam Definitions</h2>

  <div class="note-table-wrap">
    <table class="note-table">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Short definition / exam point</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Multivariate time series</strong></td>
          <td>Several variables recorded over the same times; joint behaviour can inform forecasts.</td>
        </tr>
        <tr>
          <td><strong>Multivariate forecasting</strong></td>
          <td>Produce futures for more than one series while respecting their links.</td>
        </tr>
        <tr>
          <td><strong>Multivariate stationarity</strong></td>
          <td>Stable means/variances <em>and</em> stable cross-variable (including lagged) relationships.</td>
        </tr>
        <tr>
          <td><strong>Cross-variable relationship</strong></td>
          <td>Association at the same time or at a lag; not automatically causation.</td>
        </tr>
        <tr>
          <td><strong>Bayesian forecasting</strong></td>
          <td>Combine prior and data to update uncertainty, then forecast from the posterior.</td>
        </tr>
        <tr>
          <td><strong>Prior</strong></td>
          <td>Initial belief before (or besides) the current observations.</td>
        </tr>
        <tr>
          <td><strong>Likelihood</strong></td>
          <td>Evidence from the observed data under a stated model.</td>
        </tr>
        <tr>
          <td><strong>Posterior</strong></td>
          <td>Updated belief: Posterior ∝ Likelihood × Prior.</td>
        </tr>
        <tr>
          <td><strong>Point vs uncertainty-aware</strong></td>
          <td>One number vs a distribution/range that shows remaining uncertainty.</td>
        </tr>
      </tbody>
    </table>
  </div>


  <h2>Key Distinctions</h2>

  <ol class="exam-list">
    <li>Univariate vs multivariate: one series vs several related series.</li>
    <li>Univariate vs multivariate stationarity: own stability vs own plus cross-links.</li>
    <li>Correlation vs causation: moving together ≠ one variable caused the other.</li>
    <li>Prior vs likelihood vs posterior: initial belief vs data evidence vs updated belief.</li>
    <li>Point forecast vs probabilistic forecast: a single value vs an uncertainty-aware range.</li>
  </ol>


  <h2>Compact Flows</h2>

  <div class="note-flow">Multivariate Data
  ↓
Explore Relationships
  ↓
Check Stationarity
  ↓
Select Model
  ↓
Fit
  ↓
Forecast
  ↓
Evaluate</div>

  <div class="note-flow">Prior
  +
Observed Data
  ↓
Posterior
  ↓
Forecast</div>

  `
];


