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
---

Scaffolded projects now lint and format with oxlint + oxfmt via ultracite instead of ESLint and Prettier. Each template ships an oxlint.config.ts and oxfmt.config.ts, and the generated package.json exposes check, fix, format, and lint scripts backed by the new toolchain.

The Expo template does not move to oxlint (its ultracite preset flags React Native idioms such as StyleSheet.create ordering and require() for Metro assets). It does, however, stop shipping fourteen unused ESLint packages. It has never had a lint config or a lint script, so nothing consumed them. Projects that want linting can run `npx expo lint`, which installs and configures ESLint on demand.
