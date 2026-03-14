#!/usr/bin/env node

/**
 * Post-edit hook: Warn about data quality issues.
 * Checks for mentions of data cleaning, point-in-time data, and proper adjustments.
 * Non-blocking (always exits 0).
 */

const fs = require("fs");

const input = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));
const filePath = input.tool_input?.file_path || input.tool_input?.path || "";
const content = input.tool_input?.content || input.tool_input?.new_string || "";

const dataKeywords = [
  "data",
  "pipeline",
  "ingest",
  "market.?data",
  "price.?history",
  "time.?series",
  "dataset",
];

const isDataContent = dataKeywords.some((kw) =>
  new RegExp(kw, "i").test(filePath + " " + content)
);

if (!isDataContent) {
  process.exit(0);
}

const warnings = [];

const hasDataCleaning =
  /data.?clean|outlier|gap.?detect|missing.?data|null.?check|imputation|forward.?fill/i.test(
    content
  );
if (!hasDataCleaning) {
  warnings.push("No data cleaning or gap detection procedures mentioned");
}

const hasPointInTime =
  /point.?in.?time|as.?of.?date|filing.?date|announcement.?date|release.?date/i.test(
    content
  );
if (!hasPointInTime) {
  warnings.push(
    "No point-in-time data handling mentioned — risk of look-ahead bias"
  );
}

const hasAdjustments =
  /adjust|split|dividend|corporate.?action|spin.?off|merger|delist/i.test(
    content
  );
if (!hasAdjustments) {
  warnings.push(
    "No corporate action adjustments mentioned (splits, dividends, mergers)"
  );
}

const hasValidation =
  /validat|cross.?check|reconcil|quality.?check|data.?integrity|verification/i.test(
    content
  );
if (!hasValidation) {
  warnings.push("No data validation or cross-source reconciliation mentioned");
}

if (warnings.length > 0) {
  console.error("Data Quality Check:");
  warnings.forEach((w) => console.error(`  Warning: ${w}`));
  console.error(
    "  Reminder: All data pipelines must include cleaning, point-in-time handling, adjustments, and validation."
  );
}

process.exit(0);
