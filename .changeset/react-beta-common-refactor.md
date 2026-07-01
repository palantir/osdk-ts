---
---

Refactor the React (beta) template onto a shared `@osdk/create-app.react.beta.common` package and add a `--shared` flag to `@osdk/create-app.template-packager`. All affected packages are private and the generated app output is unchanged, so no published package version bump is needed.
