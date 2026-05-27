---
sidebar_position: 2
---

# Getting Started

A tour of the `@osdk/react-devtools` panel and the four tabs it exposes.

## Prerequisites

Before continuing, complete the setup described in [Prerequisites](./Prerequisites.md):

- Install `@osdk/react-devtools` as a dev dependency
- Add `osdkDevTools()` to your Vite plugins
- Wrap your app with `OsdkProvider`
- Run `vite dev`

The floating `</>` panel should appear in the bottom-right corner of the browser. If it doesn't, see [Troubleshooting](#troubleshooting).

## What the panel shows

The devtools panel sits alongside your application and observes `@osdk/react` in real time. It surfaces behavior that is otherwise invisible to your app code — the underlying object cache, network deduplication, compute consumption, and which components are bound to which hooks.

The panel has four tabs:

| Tab                                | Purpose                                                                                                                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Performance](./Performance.md)    | Live metrics for object loads, action latency, cache hits and misses, deduplication, and revalidation. Flags slow queries, redundant work, and unused fields.            |
| [Compute](./Compute.md)            | Per-request Foundry compute usage, broken down by hook and component, with a bubble-chart visualization for the heaviest requests. Pause network traffic to freeze against the cache. |
| [Intercept](./Intercept.md)        | Mock OSDK queries and actions inline. Click any component to capture its OSDK usage, then override responses with static data, dynamic functions, or pass-through.       |
| [Debugging](./Debugging.md)        | Unified issues panel (errors, console logs, stack traces), a component view of every active `@osdk/react` hook, and a cache inspector for the normalized cache.          |

## Panel layout

The panel is a floating surface that can be docked. The header exposes the controls that apply to every tab:

- **Position** — drag the panel to any corner, or dock it to the bottom of the viewport.
- **Size** — resize the panel by dragging its edges.
- **Theme** — toggle between light, dark, and auto (follows the system color scheme).
- **Tabs** — switch between Performance, Compute, Intercept, and Debugging.

All preferences (position, size, theme, active tab) persist across reloads.

## How the data is collected

`@osdk/react-devtools` plugs into the same store and observable cache that `@osdk/react` already uses. It does not duplicate fetches or open new connections — every metric the panel shows is read from the cache and the requests `@osdk/react` is making anyway.

The Vite plugin installs the React Fiber hook automatically, which is what lets the panel walk the component tree and attribute hooks back to the components that mounted them.

## Quick checklist

Before you dive into the tabs, confirm:

- [ ] `osdkDevTools()` is in your Vite `plugins` array
- [ ] The dev server is started via `vite dev` (not a production build)
- [ ] Your app is wrapped in `<OsdkProvider client={client}>`
- [ ] Your components use hooks from `@osdk/react` (the devtools cannot observe direct `fetch` or `axios` calls)

## Troubleshooting

### Panel does not appear

- Confirm `osdkDevTools()` is the second argument to `plugins`, not commented out
- Confirm you started Vite in dev mode (`vite dev` or `vite`)
- Open the browser DevTools and check the network tab for `@osdk/react-devtools` modules — if they 404, your install is broken; reinstall with `pnpm add -D @osdk/react-devtools`
- Check the browser console for plugin errors. Re-run with `osdkDevTools({ verbose: true })` to print plugin-side logs

### Panel appears but no data shows

- Verify your app is wrapped in `OsdkProvider` at the root (see [@osdk/react Getting Started](/react/getting-started#provider-setup))
- Verify components are reading data through `@osdk/react` hooks. The devtools cannot observe raw `fetch` calls or non-OSDK data sources.

### Panel is in production builds

It should not be. The Vite plugin returns `false` from `apply()` when `mode === "production"`, so the dev hook, register script, and CSS are never injected. If you are seeing it in production, check that you do not have a custom plugin re-injecting it or a stale build artifact.

## Next steps

- [Performance](./Performance.md) — measure where your app is spending request time
- [Compute](./Compute.md) — track Foundry compute usage per request
- [Intercept](./Intercept.md) — mock queries and actions without touching app code
- [Debugging](./Debugging.md) — inspect errors, hooks, and the normalized cache
