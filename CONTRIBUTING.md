# Contributing to Everything Claude Trading

Thank you for contributing to Everything Claude Trading! This guide covers how to add new strategy skills, asset-class agents, and indicator skills.

## Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes
4. Submit a pull request

## Adding a New Strategy Skill

Strategy skills live in `skills/strategies/`. Each skill follows this template:

```markdown
---
name: your-strategy-name
category: strategies
version: 1.0.0
tags: [momentum, equities, daily]
---

# Strategy Name

## Context
When this strategy applies and market conditions it targets.

## Signal Generation
Step-by-step signal construction.

## Entry/Exit Rules
Precise rules for trade entry and exit.

## Risk Controls
Position sizing, stop losses, max drawdown.

## Backtesting Requirements
Minimum validation criteria.
```

### Requirements for Strategy Skills

- Must include transaction cost assumptions
- Must specify look-ahead bias prevention measures
- Must include out-of-sample validation guidance
- Must specify which asset classes apply

## Adding an Asset-Class Agent

Agents live in `agents/`. Each agent needs:

```markdown
---
name: agent-name
role: One-line role description
model: opus | sonnet
category: asset-class
---

# Agent Name

## Expertise
Domain knowledge this agent possesses.

## Skills
List of skills this agent can invoke.

## Communication Style
How this agent presents analysis.

## Handoff Rules
When this agent defers to another agent.
```

### Requirements for Agents

- Must specify which model tier (Opus for complex analysis, Sonnet for routine tasks)
- Must define clear handoff boundaries
- Must list all skills the agent can invoke

## Adding an Indicator Skill

Indicator skills live in `skills/quant-methods/`. They provide technical or quantitative analysis tools:

```markdown
---
name: indicator-name
category: quant-methods
version: 1.0.0
tags: [technical, statistical]
---

# Indicator Name

## Formula
Mathematical definition.

## Parameters
Configurable parameters with defaults.

## Interpretation
How to read the indicator output.

## Limitations
Known failure modes and edge cases.
```

## Pull Request Checklist

- [ ] Skill/agent follows the template structure
- [ ] Frontmatter is valid YAML
- [ ] All required fields are present
- [ ] Strategy skills include cost assumptions
- [ ] Backtesting guidance is included
- [ ] No look-ahead bias in methodology
- [ ] Added to the appropriate category in README

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Questions?

Open an issue or start a discussion. We are happy to help!
