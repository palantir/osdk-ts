---
"@osdk/foundry-config-json": patch
"@osdk/maker-experimental": patch
"@osdk/client.unstable.tpsa": patch
"@osdk/widget.vite-plugin": patch
"@osdk/cbac-components": patch
"@osdk/client.unstable": patch
"@osdk/language-models": patch
"@osdk/unit-testing": patch
"@osdk/create-app": patch
"@osdk/react-components": patch
"@osdk/aip-core": patch
"@osdk/functions": patch
"@osdk/shared.net": patch
"@osdk/client": patch
"@osdk/oauth": patch
"@osdk/react": patch
"@osdk/cli": patch
"@osdk/api": patch
---

Enable the require-await lint rule: drop the redundant `async` keyword from test callbacks that never await, and keep intentionally-async (Promise-returning) functions as-is
