---
"@osdk/maker": patch
"@osdk/maker-experimental": patch
"@osdk/react-devtools": patch
"@osdk/react-sdk-docs": patch
"@osdk/typescript-sdk-docs": patch
---

Revert re-enabling the `unicorn/no-useless-switch-case` oxlint rule; the rule is disabled again and the explicit `case` labels are restored. Behavior-preserving with no runtime or API changes.
