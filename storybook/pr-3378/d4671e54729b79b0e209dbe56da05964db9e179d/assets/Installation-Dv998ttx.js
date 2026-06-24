import{j as e}from"./iframe-YphmHIlA.js";import{useMDXComponents as s}from"./index-GTPG_950.js";import{M as r,c as a}from"./blocks-CttAQMWg.js";import"./preload-helper-BbYTXdYa.js";import"./index-jJCt0lzF.js";import"./index-UF1T6Q5c.js";import"./index-xdp-exYS.js";const i=`---
sidebar_position: 1
---

# Prerequisites

Setup required before using \`@osdk/react-components\` or \`@osdk/cbac-components\`.

## Install dependencies

> **Tip:** If your tooling already installs dependencies, skip this step.

Use whichever package manager your project uses (\`# if using CBAC components\` lines are optional):

\`\`\`bash
# npm
npm install @osdk/api@beta @osdk/client@beta @osdk/react@beta
npm install @osdk/react-components
npm install @osdk/cbac-components # if using CBAC components
npm install react react-dom classnames

# pnpm
pnpm add @osdk/api@beta @osdk/client@beta @osdk/react@beta
pnpm add @osdk/react-components
pnpm add @osdk/cbac-components # if using CBAC components
pnpm add react react-dom classnames

# yarn
yarn add @osdk/api@beta @osdk/client@beta @osdk/react@beta
yarn add @osdk/react-components
yarn add @osdk/cbac-components # if using CBAC components
yarn add react react-dom classnames
\`\`\`

## Configure the OSDK client

Create an OSDK client and wrap your app with \`OsdkProvider\`:

\`\`\`tsx
import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "ri.ontology.main.ontology.{UUID}",
  async () => {
    // return your auth token
  },
);

function App() {
  return <OsdkProvider client={client}>{/* your app */}</OsdkProvider>;
}
\`\`\`

All component packages require an \`OsdkProvider\` wrapping your app. Without it, data fetching hooks will throw.

## CSS setup

### IMPORTANT: Portal isolation (required)

Components use [Base UI](https://base-ui.com) portals, which require stacking context isolation:

\`\`\`css
.root {
  isolation: isolate;
}
\`\`\`

Apply this to your root element. See the [Base UI docs](https://base-ui.com/react/overview/quick-start#portals) for details.

### Layers

Components use CSS [\`@layer\`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) for predictable theming. Add these imports to your application's entry CSS file (e.g., \`index.css\`).

| Layer             | Purpose                                                    |
| ----------------- | ---------------------------------------------------------- |
| \`osdk.tokens\`     | Design tokens (colors, spacing, typography) — the defaults |
| \`osdk.components\` | Component structural styles (layout, borders, sizing)      |

Later layers always win when styles conflict, regardless of selector specificity.

#### Without Tailwind

\`\`\`css
/* index.css */
@layer osdk.components, cbac.components;

@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "@osdk/cbac-components/styles.css" layer(cbac.components); /* only needed if using CBAC components */
\`\`\`

#### With Tailwind CSS v4

\`\`\`css
/* index.css */
@layer tailwind, osdk.components, cbac.components;

@import "tailwindcss" layer(tailwind);

@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "@osdk/cbac-components/styles.css" layer(cbac.components); /* only needed if using CBAC components */
\`\`\`

#### Custom theme overrides

Add a custom layer after the OSDK layers to override any token:

\`\`\`css
@layer osdk.components, user.brand;

@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "@osdk/cbac-components/styles.css" layer(cbac.components); /* only needed if using CBAC components */
@import "./user-brand.css" layer(user.brand);
\`\`\`

### Token scopes

All components resolve their visual properties through CSS custom properties. There are two scopes of tokens you can target when theming:

- **OSDK tokens (\`--osdk-*\`)** — every visual property used inside OSDK components resolves through a token prefixed with \`--osdk-\` (e.g. \`--osdk-table-header-bg\`, \`--osdk-form-section-padding\`). Override these to theme **OSDK components only**, leaving other Blueprint components in your app untouched.
- **Blueprint tokens (\`--bp-*\`)** — the underlying Blueprint design tokens that \`--osdk-*\` tokens map to. Override these for consistent theming across **both Blueprint and OSDK components**.

Per-component references list the \`--osdk-*\` variables each component exposes — see, for example, [ObjectTable › Theming](./ObjectTable.md#theming). The full catalog of variables lives in [CSSVariables.md](./CSSVariables.md).

### Light and dark mode

OSDK components ship a built-in dark theme. Wrap your app in \`<OsdkThemeProvider>\` to activate it and to let users override the OS preference at runtime:

\`\`\`tsx
import { OsdkThemeProvider } from "@osdk/react-components/experimental/theme";

function App() {
  return (
    <OsdkProvider client={client}>
      <OsdkThemeProvider>
        {/* defaults to "system" */}
        {/* your app */}
      </OsdkThemeProvider>
    </OsdkProvider>
  );
}
\`\`\`

By default the provider follows \`prefers-color-scheme\` and writes the resolved value to \`data-bp-color-scheme\` on \`<html>\` — matching [Blueprint's convention](https://blueprintjs.com/docs/#core/colors) so the theme also applies to portaled overlays (popovers, dialogs, tooltips).

See [OsdkThemeProvider](./OsdkThemeProvider.md) for the full reference, including the \`defaultTheme\` modes, the \`useOsdkTheme\` hook, persisting the user's choice, and integrating with an external theme store via controlled mode.

### Accessibility

When overriding theme tokens, keep the result accessible:

- **Color contrast (WCAG AA):** 4.5:1 for normal text, 3:1 for large text.
- **Distinct interactive states:** rest, hover, active, selected, and focused should each be visually distinguishable — the default \`--osdk-table-row-bg-*\` and \`--osdk-table-row-border-color-*\` tokens are designed to meet WCAG AA; preserve that intent in custom themes.
`;function t(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Docs/Installation"}),`
`,e.jsx(a,{children:i})]})}function k(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t()}export{k as default};
