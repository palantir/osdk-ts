---
"@osdk/platform-sdk-generator": patch
"@osdk/generator": patch
---

Fixing bug for codegen on windows machines, where we would use backslashes instead of forward slashes for import paths, which should be OS agnostic.
