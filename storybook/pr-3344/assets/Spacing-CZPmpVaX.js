import{j as e}from"./iframe-Dm6eVTzG.js";import{useMDXComponents as n}from"./index-FlUseBxK.js";import{M as r}from"./blocks-Dr6SaYbC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhPs6Q8c.js";import"./index-DSDYHDv9.js";import"./index-CDLvbpJ7.js";function o(d){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...d.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Docs/Tokens/Spacing"}),`
`,e.jsx(s.h1,{id:"spacing-tokens",children:"Spacing Tokens"}),`
`,e.jsxs(s.p,{children:[`Spacing, border, shadow, and z-index tokens used across
`,e.jsx(s.code,{children:"@osdk/react-components"}),"."]}),`
`,e.jsx(s.h2,{id:"surface-spacing",children:"Surface Spacing"}),`
`,e.jsxs(s.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(s.code,{children:"--osdk-surface-spacing"})," | ",e.jsx(s.code,{children:"--bp-surface-spacing"}),` |
| `,e.jsx(s.code,{children:"--osdk-surface-border-radius"})," | ",e.jsx(s.code,{children:"--bp-surface-border-radius"}),` |
| `,e.jsx(s.code,{children:"--osdk-surface-border-width"})," | ",e.jsx(s.code,{children:"--bp-surface-border-width"}),` |
| `,e.jsx(s.code,{children:"--osdk-surface-layer-primary"})," | ",e.jsx(s.code,{children:"--bp-surface-layer-primary"})," |"]}),`
`,e.jsx(s.h2,{id:"borders",children:"Borders"}),`
`,e.jsxs(s.p,{children:[`| Token | Default |
|-------|---------|
| `,e.jsx(s.code,{children:"--osdk-surface-border"})," | ",e.jsx(s.code,{children:"var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-default)"}),` |
| `,e.jsx(s.code,{children:"--osdk-surface-border-color-default"})," | ",e.jsx(s.code,{children:"--bp-surface-border-color-default"}),` |
| `,e.jsx(s.code,{children:"--osdk-surface-border-color-strong"})," | ",e.jsx(s.code,{children:"--bp-surface-border-color-strong"})," |"]}),`
`,e.jsx(s.h2,{id:"shadows",children:"Shadows"}),`
`,e.jsxs(s.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(s.code,{children:"--osdk-surface-shadow-2"})," | ",e.jsx(s.code,{children:"--bp-surface-shadow-2"})," |"]}),`
`,e.jsx(s.h2,{id:"z-index",children:"Z-Index"}),`
`,e.jsx(s.p,{children:"Four z-index layers provide consistent stacking across components."}),`
`,e.jsxs(s.p,{children:[`| Token | Maps to | Typical use |
|-------|---------|-------------|
| `,e.jsx(s.code,{children:"--osdk-surface-z-index-1"})," | ",e.jsx(s.code,{children:"--bp-surface-z-index-1"}),` | Base content |
| `,e.jsx(s.code,{children:"--osdk-surface-z-index-2"})," | ",e.jsx(s.code,{children:"--bp-surface-z-index-2"}),` | Sticky headers, floating elements |
| `,e.jsx(s.code,{children:"--osdk-surface-z-index-3"})," | ",e.jsx(s.code,{children:"--bp-surface-z-index-3"}),` | Overlays, dropdowns |
| `,e.jsx(s.code,{children:"--osdk-surface-z-index-4"})," | ",e.jsx(s.code,{children:"--bp-surface-z-index-4"})," | Modals, dialogs |"]}),`
`,e.jsx(s.h2,{id:"focus-tokens",children:"Focus Tokens"}),`
`,e.jsxs(s.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(s.code,{children:"--osdk-emphasis-focus-width"})," | ",e.jsx(s.code,{children:"--bp-emphasis-focus-width"}),` |
| `,e.jsx(s.code,{children:"--osdk-emphasis-focus-color"})," | ",e.jsx(s.code,{children:"--bp-emphasis-focus-color"}),` |
| `,e.jsx(s.code,{children:"--osdk-emphasis-focus-offset"})," | ",e.jsx(s.code,{children:"--bp-emphasis-focus-offset"}),` |
| `,e.jsx(s.code,{children:"--osdk-focus-outline"})," | ",e.jsx(s.code,{children:"var(--osdk-emphasis-focus-width) solid var(--osdk-emphasis-focus-color)"}),` |
| `,e.jsx(s.code,{children:"--osdk-focus-visible-outline-offset"})," | ",e.jsx(s.code,{children:"var(--osdk-emphasis-focus-offset)"})," |"]}),`
`,e.jsx(s.h2,{id:"transition-tokens",children:"Transition Tokens"}),`
`,e.jsxs(s.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(s.code,{children:"--osdk-emphasis-transition-duration"})," | ",e.jsx(s.code,{children:"--bp-emphasis-transition-duration"}),` |
| `,e.jsx(s.code,{children:"--osdk-emphasis-ease-default"})," | ",e.jsx(s.code,{children:"--bp-emphasis-ease-default"})," |"]}),`
`,e.jsx(s.h2,{id:"miscellaneous",children:"Miscellaneous"}),`
`,e.jsxs(s.p,{children:[`| Token | Default |
|-------|---------|
| `,e.jsx(s.code,{children:"--osdk-disabled-opacity"})," | ",e.jsx(s.code,{children:"0.5"})," |"]}),`
`,e.jsx(s.h2,{id:"override-example",children:"Override Example"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* Increase border radius for a softer look */
:root {
  --osdk-surface-border-radius: 8px;
  --osdk-surface-spacing: 12px;
}
`})})]})}function p(d={}){const{wrapper:s}={...n(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(o,{...d})}):o(d)}export{p as default};
