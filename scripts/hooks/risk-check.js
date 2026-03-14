#!/usr/bin/env node

/**
 * Post-edit hook: Check for risk management mentions when strategy content is written.
 * Warns if no stop-loss, position sizing, or drawdown limits are mentioned.
 * Non-blocking (always exits 0).
 */

const fs = require("fs");

const input = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));
const filePath = input.tool_input?.file_path || input.tool_input?.path || "";
const content = input.tool_input?.content || input.tool_input?.new_string || "";

const tradingKeywords = [
  "strategy",
  "trading",
  "signal",
  "entry",
  "exit",
  "position",
  "backtest",
  "alpha",
  "portfolio",
];

const isTradeContent = tradingKeywords.some(
  (kw) =>
    filePath.toLowerCase().includes(kw) ||
    content.toLowerCase().includes(kw)
);

if (!isTradeContent) {
  process.exit(0);
}

const warnings = [];

const hasStopLoss =
  /stop.?loss|stop.?out|protective.?stop|trailing.?stop|risk.?limit/i.test(
    content
  );
if (!hasStopLoss) {
  warnings.push("No stop-loss or risk limit mentioned");
}

const hasPositionSizing =
  /position.?siz|kelly|risk.?per.?trade|lot.?size|notional|allocation.?weight/i.test(
    content
  );
if (!hasPositionSizing) {
  warnings.push("No position sizing methodology mentioned");
}

const hasDrawdown =
  /drawdown|max.?loss|risk.?budget|max.?dd|peak.?to.?trough/i.test(content);
if (!hasDrawdown) {
  warnings.push("No drawdown limits or risk budget mentioned");
}

if (warnings.length > 0) {
  console.error("Risk Management Check:");
  warnings.forEach((w) => console.error(`  Warning: ${w}`));
  console.error(
    "  Reminder: All strategies must include stop-loss, position sizing, and drawdown limits."
  );
}

process.exit(0);
