# Source-aware validation

Source-aware loading connects Maker validation issues to authored TypeScript, so authors can find and fix invalid definitions without tracing generated code. It adds source locations and code frames, validation remains owned by the definition APIs.

Enable it with `maker-experimental --experimental-source-loader` on Node 24+, with the optional `typescript` peer installed. Older Node versions use ordinary imports.

Only validation errors escaping evaluation are enriched. Author catches still receive the original errors. Locations are best-effort: when a field cannot be identified reliably, diagnostics highlight an enclosing expression rather than guess.
