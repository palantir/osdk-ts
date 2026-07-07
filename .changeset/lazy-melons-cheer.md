---
"@osdk/react-components": patch
---

Stop listogram filter rows reordering when a checkbox is toggled; render values in natural count/value order and append below-fold selections at the tail in the collapsed view. Keep a tail-pinned below-fold row visible after it is unchecked so it can be re-checked in place, rather than vanishing under the cursor.
