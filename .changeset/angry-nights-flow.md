---
"@osdk/react-components": minor
---

Merge @osdk/react-components-styles into @osdk/react-components

Design tokens and component styles are now bundled in a single package. `@osdk/react-components-styles` is deprecated and will be removed in a future release.

**Migration steps:**

1. Remove `@osdk/react-components-styles` from your dependencies
2. Replace your CSS imports:

   ```css
   /* Before */
   @import "@osdk/react-components-styles" layer(osdk.tokens);
   @import "@osdk/react-components/styles.css" layer(osdk.components);

   /* After */
   @import "@osdk/react-components/styles.css" layer(osdk.styles);
   ```
