#!/usr/bin/env node

/**
 * Post-edit hook: Check backtesting content for common biases.
 * Warns if no mention of out-of-sample testing, survivorship bias, or look-ahead bias.
 * Non-blocking (always exits 0).
 */

const fs = require("fs");

const input = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));
const filePath = input.tool_input?.file_path || input.tool_input?.path || "";
const content = input.tool_input?.content || input.tool_input?.new_string || "";

const backtestKeywords = [
  "backtest",
  "historical",
  "simulation",
  "walk.?forward",
  "in.?sample",
  "out.?of.?sample",
];

const isBacktestContent = backtestKeywords.some((kw) =>
  new RegExp(kw, "i").test(filePath + " " + content)
);

if (!isBacktestContent) {
  process.exit(0);
}

const warnings = [];

const hasOutOfSample =
  /out.?of.?sample|oos|walk.?forward|holdout|validation.?set|test.?set/i.test(
    content
  );
if (!hasOutOfSample) {
  warnings.push("No out-of-sample or walk-forward validation mentioned");
}

const hasSurvivorshipBias =
  /survivorship.?bias|delisted|point.?in.?time.?constit|survivorship.?free/i.test(
    content
  );
if (!hasSurvivorshipBias) {
  warnings.push(
    "No survivorship bias consideration mentioned — use point-in-time constituents"
  );
}

const hasLookAheadBias =
  /look.?ahead.?bias|forward.?looking|data.?snoop|future.?information|information.?leakage/i.test(
    content
  );
if (!hasLookAheadBias) {
  warnings.push("No look-ahead bias check mentioned");
}

const hasOverfitting =
  /overfit|curve.?fit|regulariz|deflated.?sharpe|multiple.?testing|data.?mining/i.test(
    content
  );
if (!hasOverfitting) {
  warnings.push("No overfitting diagnostics mentioned");
}

if (warnings.length > 0) {
  console.error("Backtest Validation Check:");
  warnings.forEach((w) => console.error(`  Warning: ${w}`));
  console.error(
    "  Reminder: All backtests must address survivorship bias, look-ahead bias, and overfitting."
  );
}

process.exit(0);
