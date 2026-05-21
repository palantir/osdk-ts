import{j as e}from"./iframe-Dm6eVTzG.js";import{useMDXComponents as o}from"./index-FlUseBxK.js";import{M as t}from"./blocks-Dr6SaYbC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhPs6Q8c.js";import"./index-DSDYHDv9.js";import"./index-CDLvbpJ7.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(t,{title:"Docs/Styling/Overview"}),`
`,e.jsx(n.h1,{id:"styling-overview",children:"Styling Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@osdk/react-components"}),` uses a three-layer token architecture that makes
theming predictable and composable.`]}),`
`,e.jsx(n.h2,{id:"token-architecture",children:"Token Architecture"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Blueprint Core (@blueprintjs/core)
         |
   Blueprint Tokens (--bp-*)
         |
   OSDK Tokens (--osdk-*)
         |
   Component Styles
`})}),`
`,e.jsx(n.h3,{id:"layer-1-blueprint-tokens",children:"Layer 1: Blueprint Tokens"}),`
`,e.jsxs(n.p,{children:["The foundation. Blueprint design tokens (",e.jsx(n.code,{children:"--bp-*"}),`) define the raw visual
primitives — colors, typography, spacing, and intent states. These are
inherited from `,e.jsx(n.code,{children:"@blueprintjs/core"}),"."]}),`
`,e.jsx(n.h3,{id:"layer-2-osdk-tokens",children:"Layer 2: OSDK Tokens"}),`
`,e.jsxs(n.p,{children:["OSDK tokens (",e.jsx(n.code,{children:"--osdk-*"}),`) map to Blueprint tokens by default. Override these
to theme OSDK components `,e.jsx(n.strong,{children:"without"}),` affecting other Blueprint components in
your app.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  /* Override just the OSDK table header */
  --osdk-table-header-bg: #f5f5f5;
}
`})}),`
`,e.jsx(n.h3,{id:"layer-3-component-tokens",children:"Layer 3: Component Tokens"}),`
`,e.jsxs(n.p,{children:["Per-component CSS variables (e.g. ",e.jsx(n.code,{children:"--osdk-table-*"}),", ",e.jsx(n.code,{children:"--osdk-form-*"}),`) control
specific UI elements. Each component documents its available variables.`]}),`
`,e.jsx(n.h2,{id:"css-layers",children:"CSS Layers"}),`
`,e.jsxs(n.p,{children:["Styles are organized using CSS ",e.jsx(n.code,{children:"@layer"})," for predictable cascade ordering:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@layer osdk.components, user.brand;

@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "./my-brand.css" layer(user.brand);
`})}),`
`,e.jsx(n.p,{children:`Later layers always win, regardless of selector specificity. This means your
brand overrides will always take precedence over OSDK defaults.`}),`
`,e.jsx(n.h2,{id:"dark-mode",children:"Dark Mode"}),`
`,e.jsx(n.p,{children:"Components react automatically to dark mode via:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"prefers-color-scheme: dark"})," media query"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'[data-bp-color-scheme="dark"]'})," attribute selector"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".bp6-dark"})," class selector"]}),`
`]}),`
`,e.jsx(n.p,{children:`This matches the Foundry custom widgets dark theme guidance. No extra
configuration is needed.`}),`
`,e.jsx(n.h2,{id:"token-scopes",children:"Token Scopes"}),`
`,e.jsxs(n.p,{children:[`| Scope | Prefix | Use when you want to... |
|-------|--------|------------------------|
| Blueprint | `,e.jsx(n.code,{children:"--bp-*"}),` | Theme both Blueprint and OSDK components consistently |
| OSDK | `,e.jsx(n.code,{children:"--osdk-*"}),` | Theme only OSDK components, leave Blueprint unchanged |
| Component | `,e.jsx(n.code,{children:"--osdk-<component>-*"})," | Customize a single component |"]}),`
`,e.jsx(n.h2,{id:"custom-themes",children:"Custom Themes"}),`
`,e.jsx(n.p,{children:"Create a brand layer that overrides the tokens you care about:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* user-brand.css */
:root {
  /* Global surface overrides */
  --osdk-surface-border-radius: 8px;

  /* Table-specific overrides */
  --osdk-table-header-bg: var(--my-brand-surface);
  --osdk-table-row-bg-hover: var(--my-brand-hover);

  /* Form-specific overrides */
  --osdk-form-section-padding: 20px;
}
`})}),`
`,e.jsx(n.h2,{id:"further-reading",children:"Further reading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/docs-styling-css-variables--docs",children:"CSS Variables"})}),` —
Complete variable reference for all components.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/docs-tokens-colors--docs",children:"Colors"})}),` — Color palette and
intent tokens.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/docs-tokens-typography--docs",children:"Typography"})})," — Font tokens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"?path=/docs/docs-tokens-spacing--docs",children:"Spacing"})}),` — Spacing, borders,
and z-index tokens.`]}),`
`]})]})}function m(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{m as default};
