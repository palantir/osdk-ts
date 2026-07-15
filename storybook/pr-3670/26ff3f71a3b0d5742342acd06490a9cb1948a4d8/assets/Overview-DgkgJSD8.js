import{j as e}from"./iframe-BFjDjldP.js";import{useMDXComponents as s}from"./index-D9pJ6BXs.js";import{b as r,c as a}from"./blocks-k8-I3UVL.js";import"./preload-helper-C4pZiwVf.js";import"./index-WnNqCI-y.js";import"./index-DoxA6u-7.js";import"./index-BIqccblu.js";const i=`# Styling Overview

\`@osdk/react-components\` uses a three-layer token architecture that makes
theming predictable and composable.

## Token Architecture

\`\`\`
Blueprint Core (@blueprintjs/core)
         |
   Blueprint Tokens (--bp-*)
         |
   OSDK Tokens (--osdk-*)
         |
   Component Styles
\`\`\`

[Blueprint](https://blueprintjs.com) is a React UI toolkit built by Palantir.
OSDK components use Blueprint's design tokens as the foundation layer so they
integrate seamlessly with other Palantir applications and components that
already use Blueprint.

### Layer 1: Blueprint Tokens

The foundation. Blueprint design tokens (\`--bp-*\`) define the raw visual
primitives — colors, typography, spacing, and intent states. These are
inherited from \`@blueprintjs/core\`.

### Layer 2: OSDK Tokens

Most OSDK tokens (\`--osdk-*\`) map to Blueprint tokens by default; a few hold
raw values instead (e.g. opacities and cursors). Override these to theme OSDK
components **without** affecting other Blueprint components in your app.

\`\`\`css
:root {
  /* Override just the OSDK table header */
  --osdk-table-header-bg: #f5f5f5;
}
\`\`\`

### Layer 3: Component Tokens

Per-component CSS variables (e.g. \`--osdk-table-*\`, \`--osdk-form-*\`) control
specific UI elements. Each component documents its available variables.

## CSS Layers

Styles are organized using CSS \`@layer\` for predictable cascade ordering:

\`\`\`css
@layer osdk.components, user.brand;

@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "./my-brand.css" layer(user.brand);
\`\`\`

Later layers always win, regardless of selector specificity. This means your
brand overrides will always take precedence over OSDK defaults.

## Dark Mode

Wrap your app with \`OsdkThemeProvider\` to control the color scheme:

\`\`\`tsx
import { OsdkThemeProvider } from "@osdk/react-components/experimental/theme";

function App() {
  return (
    <OsdkThemeProvider defaultTheme="system">
      {/* your app */}
    </OsdkThemeProvider>
  );
}
\`\`\`

### Theme modes

| Mode       | Behavior                                                    |
| ---------- | ----------------------------------------------------------- |
| \`"system"\` | Follows the OS \`prefers-color-scheme\` and updates on change |
| \`"light"\`  | Forces light theme regardless of OS setting                 |
| \`"dark"\`   | Forces dark theme regardless of OS setting                  |

The provider sets \`data-bp-color-scheme\` on the document element, which
the CSS token layer uses to flip both \`--bp-*\` and \`--osdk-*\` tokens.

### Switching at runtime

Use the \`useOsdkTheme\` hook from a descendant to switch modes:

\`\`\`tsx
import { useOsdkTheme } from "@osdk/react-components/experimental/theme";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useOsdkTheme();
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      Toggle theme
    </button>
  );
}
\`\`\`

### Controlled mode

If an external store already owns the theme (e.g. Redux, a parent
design-system provider), pass \`theme\` instead of \`defaultTheme\`:

\`\`\`tsx
<OsdkThemeProvider theme={externalTheme} onThemeChanged={setExternalTheme}>
\`\`\`

## When to Override \`--bp-*\` vs \`--osdk-*\`

| Prefix                 | Override when you want to...                          |
| ---------------------- | ----------------------------------------------------- |
| \`--bp-*\`               | Theme both Blueprint and OSDK components consistently |
| \`--osdk-*\`             | Theme only OSDK components, leave Blueprint unchanged |
| \`--osdk-<component>-*\` | Customize a single component                          |

Most \`--osdk-*\` tokens map to a \`--bp-*\` token by default (a handful — e.g.
\`--osdk-disabled-opacity\`, \`--osdk-drag-handle-cursor\` — hold raw values
instead). If your app uses Blueprint components alongside OSDK components and
you want a consistent look, override the \`--bp-*\` tokens; for \`--osdk-*\` tokens
with no \`--bp-*\` backing, override the \`--osdk-*\` token directly. If you only
want to restyle OSDK components without affecting Blueprint, override the
\`--osdk-*\` tokens.

## Custom Themes

Create a brand layer that overrides the tokens you care about:

\`\`\`css
/* user-brand.css */
:root {
  /* Global surface overrides */
  --osdk-surface-border-radius: 8px;

  /* Table-specific overrides */
  --osdk-table-header-bg: var(--my-brand-surface);
  --osdk-table-row-bg-hover: var(--my-brand-hover);

  /* Form-specific overrides */
  --osdk-form-section-padding: 20px;
}
\`\`\`
`;function o(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Docs/Styling/Overview"}),`
`,e.jsx(a,{children:i})]})}function k(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{k as default};
