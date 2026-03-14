# Everything Claude Trading

The complete trading and quantitative finance system for Claude Code. This plugin provides 18 specialized agents, 82 skills, and 20 commands covering quant research, algorithmic trading, derivatives pricing, risk management, portfolio optimization, and crypto/DeFi analysis.

## Commands

| Command | Description |
|---------|-------------|
| `/strategy` | Design and evaluate systematic trading strategies |
| `/backtest` | Run walk-forward backtests with overfitting checks |
| `/risk-report` | Generate comprehensive risk reports (VaR, CVaR, drawdown) |
| `/options-analysis` | Price options, build vol surfaces, analyze Greeks |
| `/portfolio-optimize` | Mean-variance, risk parity, and factor-based optimization |
| `/signal-research` | Research and validate alpha signals and predictive factors |
| `/vol-analysis` | Analyze volatility surfaces, term structure, and skew dynamics |
| `/pairs-scan` | Scan for cointegrated pairs and mean-reversion opportunities |
| `/macro-outlook` | Assess macro regime, rate expectations, and cross-asset flows |
| `/crypto-analysis` | On-chain analytics, DEX liquidity, yield farming, tokenomics |
| `/execution-plan` | Design execution strategies (TWAP, VWAP, smart routing) |
| `/factor-analysis` | Decompose returns by factor exposures (value, momentum, quality) |
| `/stress-test` | Run historical and hypothetical stress scenarios |
| `/trade-review` | Post-trade analysis: slippage, timing, and execution quality |
| `/market-regime` | Classify current market regime (trending, mean-reverting, volatile) |
| `/hedging-plan` | Design hedging strategies for portfolio or single-name risk |
| `/data-pipeline` | Build and validate market data ingestion and cleaning pipelines |
| `/alpha-decay` | Measure signal half-life and alpha decay curves |
| `/correlation-check` | Analyze cross-asset correlations and detect regime breaks |
| `/position-size` | Calculate optimal position sizes using Kelly, risk-parity, or volatility targeting |

## Core Principles

1. **Risk-First** — Never skip risk assessment. Every strategy, trade, and allocation decision must include explicit risk quantification before proceeding.

2. **Data-Driven** — Every decision backed by quantitative evidence. Intuition is a hypothesis; data is the proof.

3. **Backtest Before Deploy** — No live trading without validated backtests. Walk-forward analysis and out-of-sample testing are mandatory.

4. **Overfitting-Aware** — Guard against curve-fitting and data snooping. Monitor strategy complexity, apply regularization, and validate on held-out data.

5. **Execution-Conscious** — Account for slippage, fees, and market impact. A strategy that ignores transaction costs is not a strategy.

6. **Regulatory-Compliant** — MiFID II, Dodd-Frank, position limits respected. All strategies and reports adhere to applicable financial regulations.

## Project Structure

```
everything-claude-trading/
  .claude-plugin/
    plugin.json          # Plugin metadata
    marketplace.json     # Marketplace listing
  agents/                # 18 specialized trading agents
  skills/                # 82 trading and quant skills
  commands/              # 20 slash command definitions
  CLAUDE.md              # This file
  AGENTS.md              # Agent orchestration guide
```
