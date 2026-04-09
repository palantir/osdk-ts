---
"@osdk/react-components": minor
---

Merge @osdk/react-components-styles into @osdk/react-components

Design tokens and component styles are now bundled in a single package. The `@osdk/react-components-styles` package has been removed.

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

A standalone `@osdk/react-components/tokens.css` export is also available for users who only need design tokens.
