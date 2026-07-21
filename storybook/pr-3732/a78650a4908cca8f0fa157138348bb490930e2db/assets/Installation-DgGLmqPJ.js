import{j as e}from"./iframe-BVFrXrYq.js";import{useMDXComponents as s}from"./index-CRapbzXo.js";import{b as r,c as a}from"./blocks-BfQODAdF.js";import"./preload-helper-HXZr6wiN.js";import"./index-CwOjfOXs.js";import"./index-Bc-PTka1.js";import"./index-Ml01DX1I.js";const i=`---
sidebar_position: 1
---

# Prerequisites

Setup required before using \`@osdk/react-components\`.

## Install dependencies

> **Tip:** If your tooling already installs dependencies, skip this step.

Use whichever package manager your project uses:

\`\`\`bash
# npm
npm install @osdk/api @osdk/client @osdk/react
npm install @osdk/react-components
npm install react react-dom classnames

# pnpm
pnpm add @osdk/api @osdk/client @osdk/react
pnpm add @osdk/react-components
pnpm add react react-dom classnames

# yarn
yarn add @osdk/api @osdk/client @osdk/react
yarn add @osdk/react-components
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
  }
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

Import the component styles into a CSS [\`@layer\`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) in your application's entry CSS file (e.g., \`index.css\`). Using a layer keeps the cascade predictable: later layers always win when styles conflict, regardless of selector specificity, so your own styles and theme overrides take precedence over the defaults.

The examples below import the styles into a layer named \`osdk.components\`; declare any of your own layers after it to override.

#### Without Tailwind

\`\`\`css
/* index.css */
@layer osdk.components;

@import "@osdk/react-components/styles.css" layer(osdk.components);
\`\`\`

#### With Tailwind CSS v4

\`\`\`css
/* index.css */
@layer tailwind, osdk.components;

@import "tailwindcss" layer(tailwind);

@import "@osdk/react-components/styles.css" layer(osdk.components);
\`\`\`

#### Custom theme overrides

Add a custom layer after the OSDK layers to override any token:

\`\`\`css
@layer osdk.components, user.brand;

@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "./user-brand.css" layer(user.brand);
\`\`\`

### Token scopes

All components resolve their visual properties through CSS custom properties. There are two scopes of tokens you can target when theming:

- **OSDK tokens (\`--osdk-*\`)** — every visual property used inside OSDK components resolves through a token prefixed with \`--osdk-\` (e.g. \`--osdk-table-header-bg\`, \`--osdk-form-section-padding\`). Override these to theme **OSDK components only**, leaving other Blueprint components in your app untouched.
- **Blueprint tokens (\`--bp-*\`)** — the underlying Blueprint design tokens that most \`--osdk-*\` tokens map to. Override these for consistent theming across **both Blueprint and OSDK components**. (A few \`--osdk-*\` tokens hold raw values rather than mapping to a \`--bp-*\` token — override those \`--osdk-*\` tokens directly.)

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
`;function o(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Docs/Installation"}),`
`,e.jsx(a,{children:i})]})}function k(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{k as default};
