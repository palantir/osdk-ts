# Source-aware validation

Source-aware loading connects Maker validation issues to authored source, so authors can find and fix invalid definitions without tracing generated code. It adds source locations and code frames; validation remains owned by the definition APIs.

Enable it with `maker-experimental --experimental-source-loader` on Node 24+, with the optional `typescript` peer installed. Older Node versions use ordinary imports.

## Execution model

The loader targets one-shot CLI evaluation and compatibility with the existing `import()` loading behavior, not additional module-loading patterns. Run each evaluation in a fresh CLI process or, for a long-running host, a fresh worker or child process. The host owns this lifecycle; `loadOntologySource` does not create workers or child processes. In-process reloading and module-cache invalidation are outside the supported contract.

Resolution, supported syntax, transformations, package export conditions, and module caching remain owned by Node and any loader hooks configured by the host. The source-aware loader does not read `tsconfig.json`, substitute `.ts` files for `.js` imports, or unify separate ESM and CommonJS Maker runtimes.

## Diagnostics

Only validation errors escaping evaluation are enriched. Author catches still receive the original errors. Source maps already enabled by the host are used without changing global source-map settings. Locations are best-effort: when a field cannot be identified reliably, diagnostics highlight an enclosing expression rather than guess.
