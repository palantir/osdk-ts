---
"@osdk/functions-testing.experimental": patch
"@osdk/typescript-sdk-docs-examples": patch
"@osdk/widget.client-react": patch
"@osdk/language-models": patch
"@osdk/cli.cmd.typescript": patch
"@osdk/generator": patch
"@osdk/client": patch
---

Use workspace:^ for peer dependencies to prevent changesets from propagating major bumps when a peer dep receives a minor version change. The internal codegen (`osdk-unstable-typescript generate --internal`) now emits `workspace:^` for peer deps while keeping `workspace:~` for regular/dev deps.
