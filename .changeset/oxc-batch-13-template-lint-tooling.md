---
"@osdk/create-app.react.beta.common": patch
"@osdk/create-app.template.react": patch
"@osdk/create-app.template.react.beta": patch
"@osdk/create-app.template.expo.v2": patch
"@osdk/create-app.template.tutorial-todo-app": patch
"@osdk/create-app.template.tutorial-todo-app.beta": patch
"@osdk/create-app.template.tutorial-todo-aip-app": patch
"@osdk/create-app.template.tutorial-todo-aip-app.beta": patch
"@osdk/create-widget.template.react.v2": patch
"@osdk/create-widget.template.minimal-react.v2": patch
"@osdk/create-app.template.typescript-library.beta": patch
"@osdk/react-components-storybook": patch
---

Scaffolded projects now lint and format with oxlint + oxfmt via ultracite instead of ESLint and Prettier. Each template ships an oxlint.config.ts and oxfmt.config.ts, and the generated package.json exposes lint, fix and format scripts backed by the new toolchain. `lint` also reports unused oxlint-disable directives as errors, matching what the previous ESLint setup did. Type-only imports must be marked and are marked inline, so a module is imported by a single statement: `import Mocks, { type MockProject } from "./mocks"`.

ultracite, oxlint and oxfmt are pinned to exact versions rather than caret ranges. Ultracite's presets are strict by default and grow between releases: its react preset went from 20 rules to 103 between 7.8.2 and 7.10.5, which is enough to make a freshly scaffolded project fail its own `npm run lint`. Pinning keeps a new project green on the rule set it was generated against, and upgrading the toolchain becomes a deliberate step.

The Expo template does not move to oxlint (its ultracite preset flags React Native idioms such as StyleSheet.create ordering and require() for Metro assets). It does, however, stop shipping fourteen unused ESLint packages. It has never had a lint config or a lint script, so nothing consumed them. Projects that want linting can run `npx expo lint`, which installs and configures ESLint on demand.
