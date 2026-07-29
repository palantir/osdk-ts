---
"@osdk/vite-plugin-code-workspace-preview": patch
---

Add a Vite plugin that surfaces preview runtime errors. By default, it injects a script in `code-workspaces` mode that posts uncaught errors and unhandled rejections to the parent, so the preview shows a reason instead of a blank screen.
