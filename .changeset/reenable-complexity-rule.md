---
"@osdk/client": patch
"@osdk/faux": patch
"@osdk/maker": patch
"@osdk/maker-experimental": patch
"@osdk/react-components": patch
---

Enable the `complexity` oxlint rule with a ceiling of 40 and refactor the functions that exceeded it by extracting behavior-preserving helper functions. The ceiling is set to 40 (rather than the preset's 20) so it only flags genuinely unwieldy functions; the many discriminated-union dispatchers that read fine as one flat switch are left alone. No API or runtime behavior changes.
