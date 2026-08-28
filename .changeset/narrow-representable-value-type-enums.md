---
"@osdk/generator": patch
"@osdk/generator-converters.ontologyir": patch
"@osdk/maker": patch
"@osdk/maker-experimental": patch
---

Narrow generated Value Type properties only to representable string, boolean, integer, and short enum literals; mirror those semantics in semantic manifests; preserve authoritative interface implementer metadata; and recursively convert supported nested array constraints while clearly rejecting unsupported nested shapes.
