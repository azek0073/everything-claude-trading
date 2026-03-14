# Changelog

All notable changes to Everything Claude Trading will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-03-15

### Added

#### Agents (18)
- Quant Strategist agent for quantitative strategy design and alpha research
- Risk Manager agent for portfolio risk assessment and stress testing
- Derivatives Analyst agent for options/futures pricing and Greeks analysis
- Execution Specialist agent for order routing and transaction cost analysis
- Backtesting Engineer agent for historical simulation and walk-forward analysis
- Portfolio Optimizer agent for asset allocation and factor models
- Data Engineer agent for market data pipelines and alternative data
- Crypto Trader agent for digital asset strategies and DeFi analytics
- Macro Strategist agent for global macro and cross-asset analysis
- Systematic Trader agent for rule-based systems and signal automation
- Statistical Arbitrageur agent for stat arb and cointegration
- Market Microstructure agent for order book dynamics and tick data
- Volatility Trader agent for vol strategies and dispersion trading
- Fixed Income Quant agent for rates modeling and curve fitting
- Commodities Trader agent for commodity futures and seasonality
- Algorithmic Developer agent for trading algorithm design
- Compliance Monitor agent for trading rule compliance
- Performance Analyst agent for attribution and benchmarking

#### Skills (82)
- 10 Quant Methods skills (factor models, ML signals, time series, Bayesian inference)
- 10 Strategy skills (momentum, mean reversion, pairs, trend following, market making)
- 10 Risk Management skills (VaR, stress testing, position sizing, tail risk)
- 10 Derivatives skills (options pricing, Greeks, vol surface, exotic options)
- 8 Portfolio Management skills (mean-variance, risk parity, factor investing)
- 8 Execution skills (order management, TCA, market impact, dark pools)
- 6 Market Data skills (data pipelines, alternative data, tick processing)
- 8 Crypto skills (DeFi analytics, on-chain analysis, perpetual swaps, MEV)
- 6 Macro skills (economic indicators, central bank analysis, FX strategy)
- 6 Backtesting skills (backtest engine, walk-forward, Monte Carlo, overfitting detection)

#### Commands (20)
- `/trading-strategy` for end-to-end strategy design
- `/backtest` for historical backtesting with full reports
- `/risk-report` for comprehensive risk analysis
- `/price-derivative` for derivatives pricing
- `/portfolio-optimize` for portfolio optimization
- `/execution-plan` for execution algorithm design
- `/crypto-analysis` for crypto market analysis
- `/macro-outlook` for macro economic outlook
- `/factor-analysis` for factor model analysis
- `/vol-surface` for volatility surface construction
- `/pairs-scan` for cointegrated pairs scanning
- `/stress-test` for portfolio stress testing
- `/signal-research` for alpha signal research
- `/tca-report` for transaction cost analysis
- `/position-sizer` for position sizing
- `/regime-detect` for market regime identification
- `/correlation-monitor` for dynamic correlation monitoring
- `/performance-review` for performance attribution
- `/data-pipeline` for data pipeline design
- `/compliance-check` for compliance verification

#### Rules (5)
- Risk Before Return rule
- Backtest Before Deploy rule
- Overfitting Awareness rule
- Data Integrity First rule
- Execution Realism rule

#### Infrastructure
- Multi-agent workflow orchestration
- Context management for portfolio state, strategy config, and risk limits
- Pre-trade risk check hook
- Post-backtest validation hook
- Complete documentation and contributing guidelines
