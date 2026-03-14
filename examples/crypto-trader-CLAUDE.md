# Crypto & DeFi Trading

Active crypto trader focused on on-chain analysis, DEX trading, yield farming, and DeFi protocol evaluation. Trading across CEXs and DEXs with emphasis on Ethereum and Solana ecosystems.

## Strategy Focus

- **On-chain alpha**: Whale wallet tracking, exchange flow analysis, smart money following
- **DEX trading**: MEV-aware execution, concentrated liquidity provision on Uniswap V3
- **Yield farming**: Protocol yield optimization with risk-adjusted allocation
- **Event-driven**: Token unlocks, governance proposals, protocol upgrades

## Risk Limits

- Maximum single token position: 10% of portfolio (excluding BTC/ETH)
- Maximum protocol exposure (DeFi): 15% of portfolio per protocol
- BTC + ETH core allocation: minimum 40% of portfolio
- Maximum leverage: 2.0x (CEX perpetuals only)
- Smart contract risk budget: maximum 30% of portfolio in unaudited or < 1 year old protocols
- Stop-loss: 15% per position, 10% portfolio drawdown triggers review

## Data Sources

- On-chain: Dune Analytics queries, Etherscan/Solscan APIs
- Market data: CoinGecko, DEX Screener, TradingView
- DeFi: DefiLlama for TVL, Token Terminal for revenue metrics
- Social: Crypto Twitter sentiment, Discord activity, governance forums

## Execution

- CEX: Binance, Coinbase for major pairs. Limit orders preferred.
- DEX: Uniswap V3, Raydium for on-chain execution
- Gas management: Execute during low-gas periods (weekends, off-hours)
- MEV protection: Use Flashbots Protect for Ethereum transactions
- Slippage tolerance: 0.5% for major pairs, 1-2% for low-liquidity tokens

## DeFi Protocol Evaluation Checklist

Before deploying capital to any DeFi protocol:

1. Smart contract audited by reputable firm (Trail of Bits, OpenZeppelin, Spearbit)
2. TVL > $100M and growing
3. Protocol live for > 6 months without exploits
4. Team doxxed or reputable pseudonymous with track record
5. Token distribution not excessively concentrated (top 10 wallets < 40%)
6. Revenue model sustainable without token emissions
7. Governance active with meaningful community participation

## Yield Farming Rules

- APY source must be identifiable (trading fees, lending interest, protocol incentives)
- Unsustainable emission-based yields: maximum 5% portfolio allocation
- Impermanent loss modeling required before LP positions
- Auto-compound when gas-efficient
- Exit if TVL drops > 30% in 7 days (smart money leaving)

## Commands Used Frequently

- `/crypto-analysis` — Protocol and token evaluation
- `/risk-report` — Portfolio risk assessment including smart contract risk
- `/position-size` — Sizing new positions accounting for crypto volatility
- `/correlation-check` — Crypto correlation monitoring (BTC dominance regime)
- `/execution-plan` — DEX vs CEX execution optimization

## Agents

Primary agents: `crypto-defi-analyst`, `risk-manager`, `execution-specialist`
Supporting agents: `quant-researcher`, `technical-analyst`
