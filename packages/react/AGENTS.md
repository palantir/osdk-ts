# @osdk/react — development guide

This documentation provides guidance for developing in `@osdk/react`. Consumer-facing installation, hook reference, and usage rules live in [`README.md`](./README.md); repo-wide rules live in the root [`AGENTS.md`](../../AGENTS.md).

## Source of truth

[`CONTRIBUTING.md`](./CONTRIBUTING.md) is canonical for this package and covers:

- **Development Setup** and **Development Workflow** — typecheck, test, lint, and vitest commands
- **Architecture** — how the hooks sit on top of `ObservableClient` and the observable runtime in `@osdk/client/observable`
- **Hook API Conventions** — option shapes, return shapes, naming
- **Adding a New Hook** — the checklist to follow
- **Cache and Invalidation** — normalized cache behavior and invalidation entry points
- **Testing**, **Documentation**, **Submitting a Pull Request**, **Changesets**

Do not restate those rules here. If this file ever conflicts with `CONTRIBUTING.md`, `CONTRIBUTING.md` wins — flag the conflict.

## Rules that also bind contributors

The consumer rules in [`README.md`](./README.md) ("Rules", "Anti-Patterns") apply to code written inside this package too — never conditionally call hooks, keep rendering during loading, and remember that `useOsdkObject`'s `enabled` is positional.

## Version coupling

`@osdk/react` imports its observable runtime from `@osdk/client/observable`, an unstable surface that moves between releases. Any change that touches those imports must be validated against the matching `@osdk/client` and `@osdk/api` versions — see the CHANGELOG recipe in [`README.md`](./README.md).
