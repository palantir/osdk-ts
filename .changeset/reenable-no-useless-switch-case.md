---
"@osdk/maker": patch
"@osdk/maker-experimental": patch
"@osdk/react-devtools": patch
"@osdk/react-sdk-docs": patch
"@osdk/typescript-sdk-docs": patch
---

Re-enable the `unicorn/no-useless-switch-case` oxlint rule and drop the redundant empty `case` labels that fell straight through to `default`. Behavior-preserving with no runtime or API changes.
