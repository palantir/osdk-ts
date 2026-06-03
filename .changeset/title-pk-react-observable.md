---
"@osdk/react-components": patch
"@osdk/client": patch
---

use $title/$primaryKey special filters in object components and harden the observable matcher

ObjectSelectField now searches via the generic $title filter instead of resolving the title property from object metadata, and ObjectTable derives its row-selection object set via $primaryKey so interface-typed tables also produce a derived set on partial selection. The observable where-clause matcher no longer throws when $startsWith is evaluated against a null $title.
