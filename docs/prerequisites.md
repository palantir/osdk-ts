---
sidebar_position: 2
---

# Prerequisites

Common setup required before using `@osdk/react-components` or `@osdk/cbac-components`.

## Install dependencies

```bash
npm install @osdk/api@beta @osdk/client@beta @osdk/react@beta
npm install @osdk/react-components@beta @osdk/react-components-styles@beta
npm install @osdk/cbac-components@beta  # if using CBAC components
npm install react react-dom classnames
```

## Configure the OSDK client

Create an OSDK client and wrap your app with `OsdkProvider2`:

```tsx
import { createClient } from "@osdk/client";
import { OsdkProvider2 } from "@osdk/react/experimental";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
  async () => {
    // return your auth token
  },
);

function App() {
  return <OsdkProvider2 client={client}>{/* your app */}</OsdkProvider2>;
}
```

All OSDK components must be rendered inside an `OsdkProvider2`. Without it, data fetching hooks will throw.

## CSS setup

OSDK components use CSS [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) for predictable theming. Add these imports to your application's entry CSS file (e.g., `index.css`).

### Layers

| Layer             | Purpose                                                    |
| ----------------- | ---------------------------------------------------------- |
| `osdk.tokens`     | Design tokens (colors, spacing, typography) — the defaults |
| `osdk.components` | Component structural styles (layout, borders, sizing)      |

Later layers always win when styles conflict, regardless of selector specificity.

### Without Tailwind

```css
/* index.css */
@layer osdk.tokens, osdk.components;

@import "@osdk/react-components-styles" layer(osdk.tokens);
@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "@osdk/cbac-components/styles.css" layer(osdk.components);
```

### With Tailwind CSS v4

```css
/* index.css */
@layer tailwind, osdk.tokens, osdk.components;

@import "tailwindcss" layer(tailwind);

@import "@osdk/react-components-styles" layer(osdk.tokens);
@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "@osdk/cbac-components/styles.css" layer(osdk.components);
```

### Custom theme overrides

Add a custom layer after the OSDK layers to override any token:

```css
@layer osdk.tokens, osdk.components, user.brand;

@import "@osdk/react-components-styles" layer(osdk.tokens);
@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "@osdk/cbac-components/styles.css" layer(osdk.components);
@import "./user-brand.css" layer(user.brand);
```

### Portal isolation (required)

OSDK components use [Base UI](https://base-ui.com) portals, which require stacking context isolation:

```css
.root {
  isolation: isolate;
}
```

Apply this to your root element. See the [Base UI docs](https://base-ui.com/react/overview/quick-start#portals) for details.
