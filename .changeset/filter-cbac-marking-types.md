---
"@osdk/react": minor
"@osdk/react-components": minor
"@osdk/faux": patch
---

Add markingType filtering to marking hooks and request only CBAC markings and categories in CbacPicker and CbacPickerDialog, ordering categories by descending priority and markings by common, unspecified, then uncommon prominence with descending priority within each group. Honor markingType filters in FauxFoundry's marking and category handlers.
