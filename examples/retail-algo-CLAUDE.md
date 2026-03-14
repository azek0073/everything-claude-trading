# Retail Algorithmic Trader

Individual algorithmic trader building and running simple, robust trading strategies with a focus on risk management and continuous learning. Trading US equities and ETFs with a $100K account.

## Philosophy

- Keep strategies simple. Complexity is the enemy of robustness.
- Risk management is more important than alpha generation.
- Understand every trade. No black-box models without intuition.
- Transaction costs matter at this scale. Trade infrequently.
- Learn from every trade. Document what worked and what did not.

## Strategies

1. **Momentum rotation** — Monthly rotation across sector ETFs based on 6-month momentum. Long only.
2. **Mean-reversion** — Buy S&P 500 stocks at 2+ sigma below 20-day mean, sell at mean reversion. Daily.
3. **Earnings drift** — Post-earnings announcement drift. Buy positive surprises, hold 30 days.

## Risk Limits

- Maximum single position: 10% of account ($10K)
- Maximum number of positions: 15
- Maximum drawdown: -10% before halting all trading for 2 weeks
- Stop-loss on every position: 2x ATR(20) from entry
- No leverage. Cash account only.
- No shorting (avoid complexity and borrowing costs at this account size)
- Maximum daily risk: 1% of account ($1K)

## Data

- Free tier: Alpha Vantage for daily OHLCV and fundamentals
- Polygon.io starter plan for real-time quotes during market hours
- Yahoo Finance for screening and basic fundamentals
- FRED for macro data (free)

## Execution

- Broker: Interactive Brokers (low commissions)
- Order types: Limit orders only. Never market orders.
- Timing: Execute at open or close, avoid mid-day noise
- Commission budget: $500/month maximum
- Review fills weekly against VWAP benchmark

## Backtesting Rules

- Minimum 10-year backtest period
- Walk-forward with 3 out-of-sample windows
- Transaction costs: 5bps per side (conservative for retail)
- Minimum 100 trades for statistical significance
- Compare to buy-and-hold SPY. If you cannot beat it net of costs and time, index.

## Learning Goals

- Build intuition for market microstructure and execution
- Understand factor investing through hands-on factor analysis
- Learn options basics for hedging (not speculation)
- Develop quantitative research skills with proper methodology
- Graduate from simple momentum/mean-reversion to multi-factor models

## Weekly Routine

- Monday: Review portfolio, check risk limits, rebalance if needed
- Wednesday: Research session — test one new hypothesis per week
- Friday: Trade review — document the week's results and lessons
- Monthly: Full `/trade-review` and `/risk-report`

## Commands Used Frequently

- `/strategy` — Design new strategies (keep them simple)
- `/backtest` — Validate before deploying any real capital
- `/position-size` — Size every trade properly
- `/risk-report` — Monthly portfolio risk check
- `/trade-review` — Monthly performance review and learning
- `/market-regime` — Weekly regime check for strategy selection
- `/signal-research` — Weekend research projects

## Agents

Primary agents: `algo-strategist`, `risk-manager`, `backtesting-engineer`
Supporting agents: `quant-researcher`, `execution-specialist`

## Reminders

- You are here to learn, not to get rich quick.
- A 10% annual return with low drawdown is an excellent result.
- The best trade is often no trade at all.
- If you do not understand the risk, you do not understand the trade.
- Journal every trade decision. Your future self will thank you.
