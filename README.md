<p align="center">
  <h1 align="center">Everything Claude Trading</h1>
  <p align="center"><strong>The complete trading & quant finance system for Claude Code</strong></p>
  <p align="center">18 specialized agents | 82 domain skills | 20 commands | Every trading discipline covered</p>
</p>

<p align="center">
  <a href="https://github.com/brainbytes-dev/everything-claude-trading/stargazers"><img src="https://img.shields.io/github/stars/brainbytes-dev/everything-claude-trading?style=for-the-badge&logo=github&color=yellow" alt="Stars"></a>
  <a href="https://github.com/brainbytes-dev/everything-claude-trading/network/members"><img src="https://img.shields.io/github/forks/brainbytes-dev/everything-claude-trading?style=for-the-badge&logo=github&color=blue" alt="Forks"></a>
  <a href="https://github.com/brainbytes-dev/everything-claude-trading/graphs/contributors"><img src="https://img.shields.io/github/contributors/brainbytes-dev/everything-claude-trading?style=for-the-badge&logo=github&color=green" alt="Contributors"></a>
  <a href="https://github.com/brainbytes-dev/everything-claude-trading/blob/main/LICENSE"><img src="https://img.shields.io/github/license/brainbytes-dev/everything-claude-trading?style=for-the-badge&color=purple" alt="License"></a>
  <a href="https://buymeacoffee.com/brainbytes"><img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-brainbytes-orange?style=for-the-badge&logo=buy-me-a-coffee" alt="Buy Me a Coffee"></a>
</p>

---

> **From strategy ideation to live execution** -- 82 skills, 18 agents, and 20 slash commands that turn Claude Code into your quant trading co-pilot. Backtest, optimize, risk-check, and deploy -- all from your terminal.

---

## Quick Start

**Install the plugin:**

```bash
claude install-skill github:brainbytes-dev/everything-claude-trading
```

**Start using it immediately:**

```bash
# Develop a mean-reversion strategy
claude /trading-strategy "pairs trading on SPY/QQQ with 2-sigma entry"

# Run a full backtest
claude /backtest "momentum factor strategy, 2015-2025, daily rebalance"

# Assess portfolio risk
claude /risk-report "current portfolio with 60/40 equity/bond split"

# Price an options structure
claude /price-derivative "iron condor on AAPL, 30 DTE, 1-sigma wings"

# Analyze crypto markets
claude /crypto-analysis "ETH on-chain metrics vs price action"
```

---

## Agents

18 specialized agents, each an expert in a distinct trading discipline:

| # | Agent | Role | Model |
|---|-------|------|-------|
| 1 | **Quant Strategist** | Quantitative strategy design and alpha research | Opus |
| 2 | **Risk Manager** | Portfolio risk assessment, VaR, stress testing | Opus |
| 3 | **Derivatives Analyst** | Options/futures pricing, Greeks, vol surfaces | Opus |
| 4 | **Execution Specialist** | Order routing, slippage modeling, TCA | Sonnet |
| 5 | **Backtesting Engineer** | Historical simulation, walk-forward analysis | Sonnet |
| 6 | **Portfolio Optimizer** | Asset allocation, factor models, rebalancing | Opus |
| 7 | **Data Engineer** | Market data pipelines, alternative data ingestion | Sonnet |
| 8 | **Crypto Trader** | Digital asset strategies, DeFi, on-chain analytics | Sonnet |
| 9 | **Macro Strategist** | Global macro, rates, FX, cross-asset flows | Opus |
| 10 | **Systematic Trader** | Rule-based systems, signal generation, automation | Sonnet |
| 11 | **Statistical Arbitrageur** | Stat arb, pairs trading, cointegration | Opus |
| 12 | **Market Microstructure** | Order book dynamics, HFT patterns, tick data | Opus |
| 13 | **Volatility Trader** | Vol strategies, dispersion, variance swaps | Opus |
| 14 | **Fixed Income Quant** | Rates modeling, curve fitting, duration management | Opus |
| 15 | **Commodities Trader** | Commodity futures, seasonality, term structure | Sonnet |
| 16 | **Algorithmic Developer** | Trading algorithm design, latency optimization | Sonnet |
| 17 | **Compliance Monitor** | Trading rule compliance, position limits, reporting | Sonnet |
| 18 | **Performance Analyst** | Attribution, benchmarking, Sharpe/Sortino analysis | Sonnet |

---

## Skills (82)

<details>
<summary><strong>Quant Methods (10)</strong></summary>

| Skill | Description |
|-------|-------------|
| `factor-model-design` | Multi-factor model construction and validation |
| `alpha-signal-research` | Alpha signal discovery, decay analysis, IC testing |
| `time-series-analysis` | ARIMA, GARCH, regime detection, stationarity tests |
| `machine-learning-signals` | ML-based signal generation: random forests, XGBoost, neural nets |
| `statistical-testing` | Hypothesis testing, multiple comparison correction, p-hacking prevention |
| `cointegration-analysis` | Engle-Granger, Johansen tests, half-life estimation |
| `dimensionality-reduction` | PCA, autoencoders for factor extraction |
| `bayesian-inference` | Bayesian parameter estimation, posterior analysis |
| `regime-detection` | Hidden Markov models, change-point detection |
| `feature-engineering` | Trading feature construction, normalization, selection |

</details>

<details>
<summary><strong>Strategies (10)</strong></summary>

| Skill | Description |
|-------|-------------|
| `momentum-strategy` | Cross-sectional and time-series momentum |
| `mean-reversion-strategy` | Statistical mean reversion, Ornstein-Uhlenbeck |
| `pairs-trading` | Pair selection, spread modeling, entry/exit rules |
| `trend-following` | Breakout detection, moving average systems, turtle rules |
| `market-making` | Bid-ask quoting, inventory management, adverse selection |
| `event-driven-strategy` | Earnings, M&A, macro event trading |
| `carry-trade` | Interest rate carry, roll yield, funding cost analysis |
| `relative-value` | Cross-asset relative value, rich/cheap analysis |
| `multi-strategy-portfolio` | Strategy combination, capital allocation across strategies |
| `alternative-data-strategy` | Sentiment, satellite, web scraping signal strategies |

</details>

<details>
<summary><strong>Risk Management (10)</strong></summary>

| Skill | Description |
|-------|-------------|
| `var-calculation` | Parametric, historical, Monte Carlo VaR |
| `stress-testing` | Scenario analysis, historical stress events |
| `position-sizing` | Kelly criterion, risk parity, volatility targeting |
| `correlation-analysis` | Dynamic correlations, tail dependence, copulas |
| `drawdown-analysis` | Max drawdown, drawdown duration, recovery analysis |
| `tail-risk-management` | CVaR, extreme value theory, tail hedging |
| `liquidity-risk` | Market impact modeling, liquidity-adjusted VaR |
| `counterparty-risk` | Credit exposure, netting, collateral management |
| `margin-optimization` | Initial/variation margin, cross-margining |
| `risk-budgeting` | Risk allocation, contribution analysis, limits |

</details>

<details>
<summary><strong>Derivatives (10)</strong></summary>

| Skill | Description |
|-------|-------------|
| `options-pricing` | Black-Scholes, binomial trees, Monte Carlo |
| `greeks-analysis` | Delta, gamma, vega, theta, rho computation |
| `volatility-surface` | Implied vol surface construction, SABR, SVI |
| `exotic-options` | Barrier, Asian, lookback, digital options |
| `structured-products` | Autocallables, CLNs, reverse convertibles |
| `futures-pricing` | Cost of carry, convenience yield, calendar spreads |
| `interest-rate-derivatives` | Swaps, swaptions, caps/floors pricing |
| `credit-derivatives` | CDS pricing, CDO tranching, default correlation |
| `options-strategies` | Spreads, straddles, condors, butterflies |
| `hedging-optimization` | Delta-hedging, cross-hedging, hedge ratio optimization |

</details>

<details>
<summary><strong>Portfolio Management (8)</strong></summary>

| Skill | Description |
|-------|-------------|
| `mean-variance-optimization` | Markowitz, Black-Litterman, robust optimization |
| `risk-parity` | Equal risk contribution, hierarchical risk parity |
| `factor-investing` | Smart beta, factor tilts, factor timing |
| `rebalancing-strategy` | Calendar vs threshold rebalancing, tax-aware |
| `performance-attribution` | Brinson, factor-based, risk-adjusted attribution |
| `benchmark-construction` | Custom benchmark design, tracking error budgeting |
| `asset-allocation` | Strategic and tactical asset allocation |
| `portfolio-construction` | Constraint handling, turnover management, ESG integration |

</details>

<details>
<summary><strong>Execution (8)</strong></summary>

| Skill | Description |
|-------|-------------|
| `order-management` | Order types, routing logic, smart order routing |
| `transaction-cost-analysis` | Implementation shortfall, VWAP/TWAP analysis |
| `market-impact-model` | Almgren-Chriss, temporary/permanent impact |
| `execution-algorithm` | VWAP, TWAP, POV, IS algorithm design |
| `dark-pool-strategy` | Dark pool routing, information leakage prevention |
| `latency-optimization` | Execution latency measurement and reduction |
| `fill-analysis` | Fill rate, partial fill handling, queue position |
| `best-execution-compliance` | MiFID II / Reg NMS best execution reporting |

</details>

<details>
<summary><strong>Market Data (6)</strong></summary>

| Skill | Description |
|-------|-------------|
| `data-pipeline-design` | Real-time and historical data pipeline architecture |
| `alternative-data-ingestion` | NLP sentiment, satellite imagery, web data |
| `tick-data-processing` | Tick-by-tick cleaning, aggregation, bar construction |
| `reference-data-management` | Symbology, corporate actions, universe maintenance |
| `data-quality-monitoring` | Anomaly detection, gap filling, data validation |
| `api-integration` | Broker API, exchange feed, vendor data integration |

</details>

<details>
<summary><strong>Crypto & Digital Assets (8)</strong></summary>

| Skill | Description |
|-------|-------------|
| `defi-analytics` | DEX volume, TVL, yield farming analysis |
| `on-chain-analysis` | Wallet tracking, whale alerts, network metrics |
| `crypto-derivatives` | Perpetual swaps, funding rates, basis trading |
| `tokenomics-analysis` | Token supply dynamics, vesting schedules, inflation |
| `mev-analysis` | MEV extraction, sandwich attacks, flashbots |
| `cross-chain-arbitrage` | Bridge arbitrage, cross-DEX opportunities |
| `stablecoin-monitoring` | Peg stability, reserve analysis, de-peg risk |
| `nft-market-analysis` | Floor price models, wash trading detection, rarity |

</details>

<details>
<summary><strong>Macro & Global (6)</strong></summary>

| Skill | Description |
|-------|-------------|
| `economic-indicator-analysis` | GDP, CPI, NFP, PMI interpretation and trading |
| `central-bank-analysis` | Fed/ECB/BOJ policy analysis, rate path modeling |
| `fx-strategy` | Currency pair analysis, carry, PPP models |
| `rates-strategy` | Yield curve trades, duration, convexity |
| `geopolitical-risk` | Political risk scoring, event impact modeling |
| `cross-asset-flows` | Fund flow analysis, risk-on/risk-off indicators |

</details>

<details>
<summary><strong>Backtesting & Research (6)</strong></summary>

| Skill | Description |
|-------|-------------|
| `backtest-engine` | Event-driven and vectorized backtesting frameworks |
| `walk-forward-analysis` | Rolling window optimization, out-of-sample testing |
| `monte-carlo-simulation` | Portfolio simulation, confidence intervals |
| `overfitting-detection` | Deflated Sharpe, CSCV, combinatorial purging |
| `paper-trading-setup` | Paper trading configuration, live signal monitoring |
| `research-notebook` | Jupyter-based research workflow, reproducibility |

</details>

---

## Commands (20)

| Command | Description |
|---------|-------------|
| `/trading-strategy` | Design and document a complete trading strategy |
| `/backtest` | Run historical backtest with full performance report |
| `/risk-report` | Generate comprehensive portfolio risk analysis |
| `/price-derivative` | Price options, futures, and structured products |
| `/portfolio-optimize` | Run mean-variance or risk parity optimization |
| `/execution-plan` | Design execution algorithm with cost estimates |
| `/crypto-analysis` | Analyze crypto markets, on-chain data, DeFi |
| `/macro-outlook` | Generate macro economic outlook and trade ideas |
| `/factor-analysis` | Analyze factor exposures and construct factor models |
| `/vol-surface` | Build and analyze implied volatility surfaces |
| `/pairs-scan` | Scan universe for cointegrated pairs |
| `/stress-test` | Run portfolio stress tests against historical scenarios |
| `/signal-research` | Research and validate new alpha signals |
| `/tca-report` | Transaction cost analysis on recent executions |
| `/position-sizer` | Calculate optimal position sizes given risk budget |
| `/regime-detect` | Identify current market regime |
| `/correlation-monitor` | Monitor dynamic correlations across assets |
| `/performance-review` | Generate performance attribution and analytics |
| `/data-pipeline` | Design or debug market data pipeline |
| `/compliance-check` | Verify trading compliance with rules and limits |

---

## Rules (5)

| # | Rule | Description |
|---|------|-------------|
| 1 | **Risk Before Return** | Always quantify risk before evaluating return potential |
| 2 | **Backtest Before Deploy** | No strategy goes live without rigorous historical testing |
| 3 | **Overfitting Awareness** | Apply deflated Sharpe, cross-validation, and out-of-sample checks |
| 4 | **Data Integrity First** | Validate all data inputs; never trust raw feeds blindly |
| 5 | **Execution Realism** | Include transaction costs, slippage, and market impact in all analysis |

---

## Architecture

```
everything-claude-trading/
├── agents/
│   ├── quant-strategist.md
│   ├── risk-manager.md
│   ├── derivatives-analyst.md
│   ├── execution-specialist.md
│   ├── backtesting-engineer.md
│   ├── portfolio-optimizer.md
│   ├── data-engineer.md
│   ├── crypto-trader.md
│   ├── macro-strategist.md
│   ├── systematic-trader.md
│   ├── statistical-arbitrageur.md
│   ├── market-microstructure.md
│   ├── volatility-trader.md
│   ├── fixed-income-quant.md
│   ├── commodities-trader.md
│   ├── algorithmic-developer.md
│   ├── compliance-monitor.md
│   └── performance-analyst.md
├── skills/
│   ├── quant-methods/
│   ├── strategies/
│   ├── risk/
│   ├── derivatives/
│   ├── portfolio/
│   ├── execution/
│   ├── data/
│   ├── crypto/
│   ├── macro/
│   └── backtesting/
├── commands/
│   ├── trading-strategy.md
│   ├── backtest.md
│   ├── risk-report.md
│   └── ... (20 commands)
├── rules/
│   ├── risk-before-return.md
│   ├── backtest-before-deploy.md
│   ├── overfitting-awareness.md
│   ├── data-integrity.md
│   └── execution-realism.md
├── contexts/
│   ├── market-data.md
│   ├── portfolio-state.md
│   └── strategy-config.md
├── hooks/
│   ├── pre-trade-risk-check.md
│   └── post-backtest-validation.md
└── README.md
```

---

## Core Principles

| Principle | What It Means |
|-----------|---------------|
| **Risk-First** | Every analysis starts with risk quantification. No blind return-chasing. |
| **Data-Driven** | Decisions grounded in data, not narratives. Statistical significance required. |
| **Backtest Before Deploy** | Rigorous historical validation before any live deployment. |
| **Overfitting-Aware** | Multiple testing corrections, out-of-sample validation, deflated Sharpe ratios. |
| **Execution-Conscious** | Transaction costs, slippage, and market impact are never ignored. |
| **Regulatory-Compliant** | Adherence to MiFID II, Reg NMS, Dodd-Frank, and relevant trading regulations. |

---

## Multi-Agent Workflows

Complex trading tasks orchestrate multiple agents working together:

| Workflow | Agents Involved | Description |
|----------|----------------|-------------|
| **Strategy Development** | Quant Strategist -> Backtesting Engineer -> Risk Manager -> Performance Analyst | End-to-end strategy creation, validation, and analysis |
| **Risk Assessment** | Risk Manager -> Portfolio Optimizer -> Compliance Monitor | Comprehensive portfolio risk review with compliance checks |
| **Live Deployment** | Systematic Trader -> Execution Specialist -> Compliance Monitor -> Performance Analyst | Strategy deployment with execution optimization |
| **Derivatives Pricing** | Derivatives Analyst -> Volatility Trader -> Risk Manager | Complex derivatives pricing with vol and risk analysis |
| **Crypto Research** | Crypto Trader -> Data Engineer -> Quant Strategist | Digital asset research with on-chain data integration |
| **Macro Analysis** | Macro Strategist -> Fixed Income Quant -> Portfolio Optimizer | Global macro view with rates analysis and positioning |

---

## Contexts

| Context | Purpose |
|---------|---------|
| `market-data` | Current market state, asset prices, volumes, and spreads |
| `portfolio-state` | Active positions, P&L, exposure breakdown |
| `strategy-config` | Strategy parameters, universe definitions, signal thresholds |
| `risk-limits` | Position limits, drawdown limits, concentration constraints |
| `execution-config` | Broker connections, order routing preferences, cost models |

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding new strategy skills, asset-class agents, and indicator skills.

## License

MIT License -- see [LICENSE](LICENSE) for details.

## Acknowledgments

- The quantitative finance open-source community
- Contributors who keep pushing the boundaries of AI-assisted trading
- Every quant who shared a paper, a backtest, or a hard-won lesson

---

<p align="center">
  <strong>Built for traders who build with AI.</strong>
</p>
<p align="center">
  <a href="https://buymeacoffee.com/brainbytes"><img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-brainbytes-orange?style=for-the-badge&logo=buy-me-a-coffee" alt="Buy Me a Coffee"></a>
</p>
<p align="center">
  <sub>Made with conviction by <a href="https://github.com/brainbytes-dev">Brain Bytes</a></sub>
</p>
