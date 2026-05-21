import{j as e}from"./iframe-Dm6eVTzG.js";import{useMDXComponents as t}from"./index-FlUseBxK.js";import{M as d}from"./blocks-Dr6SaYbC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhPs6Q8c.js";import"./index-DSDYHDv9.js";import"./index-CDLvbpJ7.js";function s(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(d,{title:"Docs/Tokens/Typography"}),`
`,e.jsx(o.h1,{id:"typography-tokens",children:"Typography Tokens"}),`
`,e.jsxs(o.p,{children:[`Typography tokens control font family, size, weight, and line height across
all `,e.jsx(o.code,{children:"@osdk/react-components"}),"."]}),`
`,e.jsx(o.h2,{id:"font-family",children:"Font Family"}),`
`,e.jsxs(o.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(o.code,{children:"--osdk-typography-family-default"})," | ",e.jsx(o.code,{children:"--bp-typography-family-default"})," |"]}),`
`,e.jsx(o.p,{children:`The default font family inherits from Blueprint, which resolves to the
system font stack.`}),`
`,e.jsx(o.h2,{id:"font-sizes",children:"Font Sizes"}),`
`,e.jsxs(o.p,{children:[`| Token | Maps to | Typical use |
|-------|---------|-------------|
| `,e.jsx(o.code,{children:"--osdk-typography-size-body-x-small"})," | ",e.jsx(o.code,{children:"--bp-typography-size-body-x-small"}),` | Captions, footnotes |
| `,e.jsx(o.code,{children:"--osdk-typography-size-body-small"})," | ",e.jsx(o.code,{children:"--bp-typography-size-body-small"}),` | Secondary text, labels |
| `,e.jsx(o.code,{children:"--osdk-typography-size-body-medium"})," | ",e.jsx(o.code,{children:"--bp-typography-size-body-medium"}),` | Body text (default) |
| `,e.jsx(o.code,{children:"--osdk-typography-size-body-large"})," | ",e.jsx(o.code,{children:"--bp-typography-size-body-large"})," | Headings, emphasis |"]}),`
`,e.jsx(o.h2,{id:"font-weights",children:"Font Weights"}),`
`,e.jsxs(o.p,{children:[`| Token | Maps to | Typical use |
|-------|---------|-------------|
| `,e.jsx(o.code,{children:"--osdk-typography-weight-default"})," | ",e.jsx(o.code,{children:"--bp-typography-weight-default"}),` | Body text |
| `,e.jsx(o.code,{children:"--osdk-typography-weight-bold"})," | ",e.jsx(o.code,{children:"--bp-typography-weight-bold"})," | Headings, emphasis |"]}),`
`,e.jsx(o.h2,{id:"line-height",children:"Line Height"}),`
`,e.jsxs(o.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(o.code,{children:"--osdk-typography-line-height-default"})," | ",e.jsx(o.code,{children:"--bp-typography-line-height-default"})," |"]}),`
`,e.jsx(o.h2,{id:"text-colors",children:"Text Colors"}),`
`,e.jsxs(o.p,{children:["See the ",e.jsx(o.strong,{children:e.jsx(o.a,{href:"?path=/docs/docs-tokens-colors--docs",children:"Colors"})}),` page for the full
`,e.jsx(o.code,{children:"--osdk-typography-color-*"})," reference."]}),`
`,e.jsx(o.h2,{id:"global-defaults",children:"Global Defaults"}),`
`,e.jsx(o.p,{children:"The root element sets these defaults for all OSDK components:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`:root {
  font-family: var(--osdk-typography-family-default);
  color: var(--osdk-typography-color-default-rest);
  font-size: var(--osdk-typography-size-body-medium);
}
`})}),`
`,e.jsx(o.h2,{id:"override-example",children:"Override Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`/* Make all OSDK components use a custom font */
:root {
  --osdk-typography-family-default: "Inter", sans-serif;
  --osdk-typography-size-body-medium: 15px;
}
`})})]})}function y(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{y as default};
