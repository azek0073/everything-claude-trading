# Everything Claude Trading -- The Complete Guide

> From zero to production quant system. This guide covers foundations, advanced patterns, team setups, and every command at your disposal.

---

## Table of Contents

- [Part 1: Foundations](#part-1-foundations)
- [Part 2: Advanced Patterns](#part-2-advanced-patterns)
- [Part 3: Setup for Your Team](#part-3-setup-for-your-team)
- [Part 4: Quick Reference](#part-4-quick-reference)

---

# Part 1: Foundations

## What Is Everything Claude Trading?

Everything Claude Trading transforms Claude Code into a complete quant trading workstation. It provides **82 skills** organized across 10 domains, **18 specialized agents** that collaborate on complex workflows, and **20 slash commands** for instant access to common operations.

The system is designed around a simple principle: **trading is too complex for a single prompt.** By decomposing trading into specialized domains -- each with its own agent, skills, and context -- you get expert-level output at every stage.

## Skills

Skills are the atomic building blocks. Each skill is a focused prompt template that gives Claude deep expertise in a narrow domain.

### How Skills Work

```
User: /trading-strategy "momentum factor on US equities"

Claude activates:
  - skill: momentum-strategy (strategy design)
  - skill: factor-model-design (factor construction)
  - skill: backtest-engine (historical validation)
  - skill: overfitting-detection (robustness checks)
```

Skills are grouped into 10 categories:

| Category | Count | Focus |
|----------|-------|-------|
| Quant Methods | 10 | Statistical tools, ML, time series |
| Strategies | 10 | Momentum, mean reversion, pairs, market making |
| Risk Management | 10 | VaR, stress testing, tail risk, position sizing |
| Derivatives | 10 | Options, futures, structured products, Greeks |
| Portfolio | 8 | Optimization, allocation, attribution |
| Execution | 8 | Order management, TCA, market impact |
| Market Data | 6 | Pipelines, alternative data, tick processing |
| Crypto | 8 | DeFi, on-chain, perpetuals, MEV |
| Macro | 6 | Economic indicators, central banks, FX |
| Backtesting | 6 | Simulation, walk-forward, overfitting detection |

### Writing Effective Skill Prompts

When contributing a new skill, follow this structure:

```markdown
---
name: your-skill-name
category: strategies
version: 1.0.0
---

# Skill Name

## Context
When this skill is activated and why.

## Methodology
Step-by-step approach the agent should follow.

## Outputs
What the skill produces (tables, code, analysis).

## Validation
How to verify the output is correct.
```

## Agents

Agents are specialized personas that combine multiple skills with domain-specific reasoning. When you invoke an agent, Claude adopts that agent's expertise, communication style, and analytical framework.

### Agent Selection

The system automatically selects agents based on your query:

| Query Pattern | Agent Selected |
|--------------|----------------|
| "price this option..." | Derivatives Analyst |
| "backtest a strategy..." | Backtesting Engineer -> Quant Strategist |
| "what's the risk of..." | Risk Manager |
| "execute this order..." | Execution Specialist |
| "analyze BTC..." | Crypto Trader |

### Agent Collaboration

Agents hand off to each other. A strategy development flow:

```
1. Quant Strategist    -> designs the strategy logic
2. Backtesting Engineer -> validates historically
3. Risk Manager         -> stress tests the portfolio
4. Execution Specialist -> plans the implementation
5. Performance Analyst  -> sets up monitoring
```

## Hooks

Hooks automate quality gates in your trading workflow:

| Hook | Trigger | Action |
|------|---------|--------|
| `pre-trade-risk-check` | Before any trade recommendation | Validates position limits, concentration, drawdown |
| `post-backtest-validation` | After any backtest completes | Checks for overfitting, data snooping, look-ahead bias |

### Example Hook Flow

```
User: /backtest "momentum strategy on SPY"

[Backtest runs...]

Hook: post-backtest-validation
  - Deflated Sharpe Ratio: PASS (DSR > 0.5)
  - Out-of-sample ratio: PASS (30% held out)
  - Look-ahead bias check: PASS
  - Survivorship bias check: WARNING (single asset)

Result: Backtest approved with warnings.
```

## Rules

Rules are always-on constraints that every agent respects:

1. **Risk Before Return** -- Every analysis quantifies downside before upside.
2. **Backtest Before Deploy** -- No live trading without historical validation.
3. **Overfitting Awareness** -- Multiple testing corrections are mandatory.
4. **Data Integrity First** -- All data is validated before use.
5. **Execution Realism** -- Costs, slippage, and impact are always included.

## Contexts

Contexts provide persistent state across conversations:

| Context | Contents | Updated By |
|---------|----------|------------|
| `market-data` | Current prices, volumes, spreads | Data Engineer |
| `portfolio-state` | Positions, P&L, exposures | Portfolio Optimizer |
| `strategy-config` | Parameters, universe, thresholds | Quant Strategist |
| `risk-limits` | Position/drawdown/concentration limits | Risk Manager |
| `execution-config` | Broker settings, cost models | Execution Specialist |

### Loading Context

```bash
# Load your portfolio state before analysis
claude context add portfolio-state.json

# Load strategy parameters
claude context add strategy-config.yaml
```

## MCPs (Model Context Protocols)

MCPs connect the trading system to external data and services:

| MCP | Purpose |
|-----|---------|
| Market Data | Real-time and historical price feeds |
| Broker API | Order submission and position management |
| Research DB | Strategy research and backtest results |
| Risk System | Real-time risk metrics and alerts |

---

# Part 2: Advanced Patterns

## Multi-Agent Workflows

### Strategy Development Pipeline

The most common workflow chains four agents:

```
/trading-strategy "pairs trading on sector ETFs"

Agent Chain:
1. Quant Strategist
   - Identifies cointegrated ETF pairs
   - Designs entry/exit rules
   - Specifies signal generation logic

2. Backtesting Engineer
   - Implements the strategy in backtest framework
   - Runs walk-forward optimization
   - Generates performance metrics

3. Risk Manager
   - Stress tests against 2008, 2020, 2022 scenarios
   - Calculates VaR and CVaR
   - Evaluates tail risk

4. Performance Analyst
   - Computes Sharpe, Sortino, Calmar ratios
   - Attribution analysis
   - Benchmark comparison
```

### Risk Assessment Workflow

```
/risk-report "full portfolio"

Agent Chain:
1. Risk Manager
   - Computes VaR (parametric, historical, Monte Carlo)
   - Runs factor decomposition
   - Identifies concentration risks

2. Portfolio Optimizer
   - Suggests rebalancing to reduce risk
   - Proposes hedge positions
   - Calculates efficient frontier

3. Compliance Monitor
   - Checks position limits
   - Verifies regulatory compliance
   - Flags any breaches
```

### Backtesting Pipeline

```
/backtest "trend following on commodity futures"

Agent Chain:
1. Backtesting Engineer
   - Configures universe, dates, costs
   - Runs initial backtest

2. Quant Strategist
   - Reviews results for economic sense
   - Suggests parameter refinements

3. Backtesting Engineer (round 2)
   - Walk-forward analysis
   - Out-of-sample validation
   - Bootstrap confidence intervals

4. Risk Manager
   - Validates risk metrics
   - Confirms drawdown acceptability
```

## Context Management for Trading

### Portfolio Context Pattern

Keep your portfolio context updated for accurate analysis:

```yaml
# portfolio-state.yaml
positions:
  - symbol: SPY
    quantity: 1000
    avg_price: 445.20
    current_price: 458.30
  - symbol: TLT
    quantity: 500
    avg_price: 98.50
    current_price: 95.20
cash: 250000
margin_used: 0.35
last_updated: "2026-03-15"
```

### Strategy Config Pattern

```yaml
# strategy-config.yaml
name: momentum-factor-v2
universe: SP500
lookback: 252  # trading days
holding_period: 21
rebalance: monthly
long_count: 50
short_count: 50
cost_model:
  commission_bps: 2
  slippage_bps: 5
  market_impact_bps: 3
```

## Token Optimization

Trading queries can be token-heavy. Optimize with these patterns:

### 1. Scope Your Universe

```bash
# Bad: vague, triggers broad analysis
claude /trading-strategy "find something profitable"

# Good: scoped, efficient
claude /trading-strategy "momentum on SP500 large-cap, monthly rebalance, 2020-2025"
```

### 2. Use Commands, Not Open Prompts

```bash
# Bad: requires Claude to figure out what you want
claude "I want to understand the risk of my portfolio"

# Good: direct command, clear output
claude /risk-report "current portfolio, focus on tail risk and VaR"
```

### 3. Chain Incrementally

```bash
# Instead of one massive query, chain focused steps:
claude /pairs-scan "sector ETFs, top 10 pairs"
# Review results, then:
claude /backtest "top 3 pairs from scan, 2018-2025"
# Review, then:
claude /risk-report "pairs strategy with $1M capital"
```

## Parallel Workflows for Quant Research

Run independent research streams simultaneously:

```
Stream A: Momentum Research
  /factor-analysis "momentum factor, SP500, 2015-2025"
  /backtest "12-1 momentum, monthly rebalance"

Stream B: Mean Reversion Research
  /factor-analysis "mean reversion, SP500, 2015-2025"
  /backtest "20-day mean reversion, daily signals"

Stream C: Volatility Research
  /vol-surface "SPY options, current term structure"
  /trading-strategy "vol carry, short front-month, long back-month"

Combine:
  /portfolio-optimize "combine momentum + mean reversion + vol carry"
```

### Research Reproducibility

Always capture your research state:

```bash
# Save the current session's research context
claude context save research-session-2026-03-15.json

# Resume later
claude context load research-session-2026-03-15.json
```

---

# Part 3: Setup for Your Team

## Solo Quant

You do everything yourself -- research, trading, risk, ops.

**Recommended setup:**

```bash
# Install the plugin
claude install-skill github:brainbytes-dev/everything-claude-trading

# Daily workflow
claude /macro-outlook "today's market drivers"
claude /risk-report "current portfolio"
claude /pairs-scan "tech sector, new opportunities"
```

**Key agents:** Quant Strategist, Risk Manager, Backtesting Engineer

**Focus skills:** All strategy skills, risk management, backtesting

## Prop Trading Desk

Multiple traders, shared risk limits, compliance requirements.

**Recommended setup:**

```bash
# Shared risk context for the desk
claude context add desk-risk-limits.yaml

# Each trader runs their own strategies but shares risk context
claude /compliance-check "desk-wide position limits"
claude /risk-report "aggregated desk exposure"
```

**Key agents:** Risk Manager, Compliance Monitor, Execution Specialist, Performance Analyst

**Focus skills:** Risk budgeting, position sizing, best execution, TCA

**Team workflow:**
1. Morning: `/macro-outlook` for desk-wide market view
2. Pre-trade: `/risk-report` to check desk limits
3. Trading: `/execution-plan` for each strategy
4. EOD: `/performance-review` for desk attribution
5. Weekly: `/stress-test` against tail scenarios

## Quant Fund

Systematic strategies, team-based research, production deployment.

**Recommended setup:**

```bash
# Strategy research pipeline
claude /signal-research "new alpha signal candidates"
claude /backtest "candidate signal, full validation suite"
claude /overfitting-detection "backtest results"

# Production monitoring
claude /performance-review "live strategies vs backtest"
claude /regime-detect "current market regime"
```

**Key agents:** All 18 agents in coordinated workflows

**Focus skills:** Full stack -- research through production

**Research process:**
1. Signal generation with Quant Strategist
2. Validation with Backtesting Engineer
3. Risk review with Risk Manager
4. Approval from Compliance Monitor
5. Deployment with Execution Specialist
6. Monitoring with Performance Analyst

## Crypto Trader

Digital assets, DeFi, 24/7 markets.

**Recommended setup:**

```bash
# Crypto-specific workflows
claude /crypto-analysis "ETH ecosystem, DeFi TVL trends"
claude /trading-strategy "basis trade, BTC perps vs spot"
claude /risk-report "crypto portfolio, focus on liquidation risk"
```

**Key agents:** Crypto Trader, Data Engineer, Risk Manager

**Focus skills:** DeFi analytics, on-chain analysis, crypto derivatives, MEV

**Daily workflow:**
1. Morning: `/crypto-analysis` for market overview
2. On-chain: Check whale movements, DEX volumes
3. Trading: Basis trades, funding rate arb, DeFi yields
4. Risk: Liquidation levels, stablecoin health, exchange exposure

---

# Part 4: Quick Reference

## All Commands

| Command | Shortcut | Description |
|---------|----------|-------------|
| `/trading-strategy` | `/ts` | Design a complete trading strategy |
| `/backtest` | `/bt` | Run historical backtest |
| `/risk-report` | `/rr` | Portfolio risk analysis |
| `/price-derivative` | `/pd` | Options/futures pricing |
| `/portfolio-optimize` | `/po` | Portfolio optimization |
| `/execution-plan` | `/ep` | Execution algorithm design |
| `/crypto-analysis` | `/ca` | Crypto market analysis |
| `/macro-outlook` | `/mo` | Macro economic outlook |
| `/factor-analysis` | `/fa` | Factor model analysis |
| `/vol-surface` | `/vs` | Volatility surface analysis |
| `/pairs-scan` | `/ps` | Cointegrated pairs scanner |
| `/stress-test` | `/st` | Portfolio stress testing |
| `/signal-research` | `/sr` | Alpha signal research |
| `/tca-report` | `/tca` | Transaction cost analysis |
| `/position-sizer` | `/pz` | Position sizing calculator |
| `/regime-detect` | `/rd` | Market regime identification |
| `/correlation-monitor` | `/cm` | Dynamic correlation monitor |
| `/performance-review` | `/pr` | Performance attribution |
| `/data-pipeline` | `/dp` | Data pipeline design |
| `/compliance-check` | `/cc` | Compliance verification |

## Agent Quick Reference

| Agent | Best For |
|-------|---------|
| Quant Strategist | New strategy ideas, alpha research |
| Risk Manager | Portfolio risk, VaR, stress tests |
| Derivatives Analyst | Options pricing, Greeks, vol |
| Execution Specialist | Order routing, TCA, algorithms |
| Backtesting Engineer | Historical simulation, validation |
| Portfolio Optimizer | Allocation, rebalancing, factor models |
| Data Engineer | Data pipelines, feeds, alternative data |
| Crypto Trader | Digital assets, DeFi, on-chain |
| Macro Strategist | Rates, FX, global macro |
| Systematic Trader | Rule-based systems, automation |
| Statistical Arbitrageur | Pairs, stat arb, cointegration |
| Market Microstructure | Order book, HFT, tick data |
| Volatility Trader | Vol strategies, dispersion, variance |
| Fixed Income Quant | Rates curves, duration, swaps |
| Commodities Trader | Futures, seasonality, term structure |
| Algorithmic Developer | Algo design, latency, systems |
| Compliance Monitor | Rules, limits, regulatory checks |
| Performance Analyst | Attribution, benchmarks, ratios |

## Key Skill Combos

| Goal | Skills to Combine |
|------|-------------------|
| New strategy | `alpha-signal-research` + `backtest-engine` + `overfitting-detection` |
| Risk review | `var-calculation` + `stress-testing` + `tail-risk-management` |
| Options trade | `options-pricing` + `greeks-analysis` + `volatility-surface` |
| Pairs trade | `cointegration-analysis` + `pairs-trading` + `position-sizing` |
| Crypto yield | `defi-analytics` + `on-chain-analysis` + `stablecoin-monitoring` |
| Macro trade | `economic-indicator-analysis` + `central-bank-analysis` + `fx-strategy` |

---

<p align="center"><strong>Built for traders who build with AI.</strong></p>
<p align="center"><sub>Made with conviction by <a href="https://github.com/brainbytes-dev">Brain Bytes</a></sub></p>
