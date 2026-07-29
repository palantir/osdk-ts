# @osdk/vite-plugin-code-workspace-preview

## 0.1.0

### Minor Changes

- 574979f: Add a Vite plugin that surfaces preview runtime errors. By default, it injects a script in `code-workspaces` mode that posts uncaught errors and unhandled rejections to the parent, so the preview shows a reason instead of a blank screen.
