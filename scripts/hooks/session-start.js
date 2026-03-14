#!/usr/bin/env node

/**
 * Session start hook: Print welcome message with available trading commands.
 */

console.error(`
Everything Claude Trading
=========================

Available commands:
  /strategy          Design a trading strategy
  /backtest          Backtest with validation
  /risk-report       Portfolio risk report
  /options-analysis  Options strategy analysis
  /portfolio-optimize Portfolio optimization
  /signal-research   Alpha signal research
  /vol-analysis      Volatility surface analysis
  /pairs-scan        Pairs trading scan
  /macro-outlook     Macroeconomic outlook
  /crypto-analysis   Crypto/DeFi analysis
  /execution-plan    Trade execution planning
  /factor-analysis   Factor exposure analysis
  /stress-test       Stress test scenarios
  /trade-review      Performance review
  /market-regime     Market regime detection
  /hedging-plan      Hedging strategy design
  /data-pipeline     Data pipeline design
  /alpha-decay       Signal decay analysis
  /correlation-check Correlation analysis
  /position-size     Position sizing

Type any command to get started. Risk management is enforced on all operations.
`);

process.exit(0);
