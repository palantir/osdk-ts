---
"@osdk/cbac-components": patch
"@osdk/react-components": patch
"@osdk/react-devtools": patch
"@osdk/react-sdk-docs": patch
"@osdk/typescript-sdk-docs": patch
"@osdk/cli": patch
"@osdk/create-app": patch
"@osdk/create-widget": patch
---

Re-enable the oxlint rules the `**/*.{js,mjs,cjs}` override had disabled and delete the override, so JS build scripts, bin shims, and config files are held to the same ruleset as TypeScript. Changes are behavior-preserving (lint/format fixes to build tooling only).
