---
sidebar_position: 2
---

# Getting Started

The OSDK Devtools panel observes an `@osdk/react` application while it runs. It summarizes Ontology usage, attributes hooks to React components, captures console output, and exposes the observable cache.

## Prerequisites

Complete the [Prerequisites](./Prerequisites.md) before using the panel. Your application needs the Vite plugin, an `OsdkProvider`, and at least one component that calls an `@osdk/react` hook.

## Open the panel

Start the Vite development server. The panel opens automatically in the top right corner on Overview. Use Minimize in the panel header to collapse it to a `</>` launcher in the bottom right corner. Select the launcher to reopen the panel.

## Tabs

| Tab | Purpose |
| --- | --- |
| [Overview](./Overview.md) | Summarizes Ontology usage, request behavior, optimistic actions, errors, overfetching, and recommendations. |
| [Components](./Components.md) | Shows which React components use OSDK hooks and which object types, actions, and properties they touch. |
| [Console](./Console.md) | Captures console output with text search, level filters, counts, and source locations. |
| [Cache](./Cache.md) | Inspects normalized cache entries and the recent cache operation timeline. |

## Header controls

The controls in the panel header apply to every tab.

- The theme control cycles through dark, light, and automatic themes.
- The dock control cycles through floating, docked to the bottom, and docked to the right.
- Reset metrics clears the metrics collected during the current session.
- Minimize closes the panel back to the `</>` launcher.

Drag the header to move a floating panel. Drag an edge or corner to resize it. The browser stores the panel position, size, theme, and dock mode.

## How collection works

The package wraps the observable client used by `@osdk/react`. It records the cache and requests that the application already uses. Opening the panel does not issue a second copy of each query.

The Vite plugin installs a React Fiber hook before the application loads. The hook attributes OSDK hooks to the components that mounted them. If React loads first, the panel remains usable but shows a notice that component inspection is unavailable.

## Quick checklist

- [ ] `osdkDevTools()` appears in the Vite `plugins` array.
- [ ] The application runs through `vite dev`, not a production build.
- [ ] The application root renders `<OsdkProvider client={client}>`.
- [ ] The screen under inspection calls hooks from `@osdk/react`.

## Troubleshooting

### Panel does not appear

Confirm that `osdkDevTools()` is enabled and that Vite runs in development mode. Check the browser network panel for failed `@osdk/react-devtools` modules. Run the plugin with `osdkDevTools({ verbose: true })` to print startup diagnostics.

### Panel appears but no data shows

Open the panel before exercising the screen you want to inspect. Confirm that the screen reads data through `@osdk/react` hooks. The monitor does not observe raw `fetch`, `axios`, or unrelated data sources.

### Component inspection is unavailable

The Vite plugin must install the Fiber hook before React loads. Keep `osdkDevTools()` in the Vite plugin list and remove manual imports that load React before the injected Devtools script.

### Panel appears in a production build

The plugin is inactive in production. Check for a custom script that imports `@osdk/react-devtools` directly or a stale development artifact in the deployed bundle.
