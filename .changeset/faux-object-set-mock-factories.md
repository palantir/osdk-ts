---
"@osdk/faux": minor
---

Add `loadLinks` and `createTemporary` mock call factories to `MockOntologiesV2.OntologyObjectSets`, alongside the existing `load`, `aggregate`, and `loadMultipleObjectTypes`. Tests can now intercept those two object set endpoints and assert on their request bodies.
