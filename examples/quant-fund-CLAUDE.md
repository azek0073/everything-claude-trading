# Systematic Quant Fund

Multi-strategy systematic fund running daily rebalancing across equity, fixed income, and commodity futures. Risk parity allocation framework with factor-based alpha models.

## Architecture

- **Strategy layer**: 8 alpha models (momentum, value, quality, carry, mean-reversion, event-driven, sentiment, volatility)
- **Portfolio layer**: Risk parity allocation across strategies, daily rebalancing
- **Execution layer**: TWAP/VWAP execution with smart order routing
- **Risk layer**: Real-time risk monitoring with automated circuit breakers

## Risk Limits

- Maximum gross leverage: 3.0x
- Maximum single strategy allocation: 25%
- Portfolio-level VaR (99%, 1-day): 1.5% of NAV
- Maximum drawdown trigger: -8% (reduce to 50% exposure)
- Maximum single-name position: 2% of NAV
- Maximum sector concentration: 20%

## Data Pipeline

- Market data: Polygon.io real-time + daily OHLCV
- Fundamentals: SEC EDGAR filings, point-in-time
- Alternative data: NLP sentiment from earnings calls, satellite data for commodities
- Update frequency: Daily at 18:00 ET, real-time for risk monitoring

## Models

All models follow the governance framework:

1. Walk-forward validation with 5 out-of-sample windows minimum
2. Deflated Sharpe ratio reported for all strategies
3. Monthly model performance monitoring
4. Quarterly re-validation against live performance
5. Maximum 10 free parameters per model

## Rebalancing

- Frequency: Daily at market open
- Method: Target weights from optimizer, constrained by turnover limits
- Turnover budget: 5% of NAV per day maximum
- Transaction cost model: 3bps for large-cap equities, 8bps for small-cap, 2bps for futures

## Compliance

- MiFID II best execution documentation for all trades
- Daily position limit checks against exchange limits
- Weekly compliance report generation
- All algorithmic trading registered with regulators
- Kill switch tested monthly

## Commands Used Frequently

- `/risk-report` — Daily morning risk report
- `/factor-analysis` — Weekly factor exposure review
- `/market-regime` — Daily regime classification for strategy weighting
- `/stress-test` — Weekly stress test against historical scenarios
- `/trade-review` — Monthly performance attribution
- `/correlation-check` — Weekly correlation monitoring
- `/alpha-decay` — Quarterly signal decay assessment

## Agents

Primary agents: `quant-researcher`, `risk-manager`, `portfolio-manager`, `execution-specialist`
Supporting agents: `algo-strategist`, `backtesting-engineer`, `financial-data-scientist`
