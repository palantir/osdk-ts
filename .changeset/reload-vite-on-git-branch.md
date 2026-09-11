---
"@osdk/vite-plugin-branch": patch
---

Reload connected pages when the Git branch changes so they receive fresh branch metadata without restarting the Vite dev server, including in middleware mode. Requires Vite 6, 7, or 8 for environment-scoped cleanup.

Use `ri.branch..branch.unknown` during development when Git cannot read a branch or HEAD is detached. Keep polling through failures and reload connected pages once when entering or leaving the unknown state.
