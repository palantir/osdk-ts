---
"@osdk/maker": patch
"@osdk/maker-experimental": patch
---

Stop maker and maker-experimental tests from passing `/tmp/` as `defineOntology`'s output directory. Every test wrote into the machine-global `/tmp/codegen`, whose per-type subdirectories `writeStaticObjects` wipes and recreates on each call, so concurrent test processes raced and intermittently failed with `ENOTEMPTY`. No test asserted on that output, and the tests that do check generated files already use unique directories. Test configuration only; no runtime or API changes.
