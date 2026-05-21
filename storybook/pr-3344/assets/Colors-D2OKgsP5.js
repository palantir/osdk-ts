import{j as e}from"./iframe-Dm6eVTzG.js";import{useMDXComponents as r}from"./index-FlUseBxK.js";import{M as c}from"./blocks-Dr6SaYbC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhPs6Q8c.js";import"./index-DSDYHDv9.js";import"./index-CDLvbpJ7.js";function o(d){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...r(),...d.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(c,{title:"Docs/Tokens/Colors"}),`
`,e.jsx(n.h1,{id:"color-tokens",children:"Color Tokens"}),`
`,e.jsxs(n.p,{children:["All color values in ",e.jsx(n.code,{children:"@osdk/react-components"}),` are exposed as CSS custom
properties. Override them to theme components without touching source code.`]}),`
`,e.jsx(n.h2,{id:"palette-tokens",children:"Palette Tokens"}),`
`,e.jsx(n.p,{children:`Raw color primitives mapped from Blueprint. Use these as building blocks for
semantic tokens.`}),`
`,e.jsxs(n.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(n.code,{children:"--osdk-palette-white"})," | ",e.jsx(n.code,{children:"--bp-palette-white"}),` |
| `,e.jsx(n.code,{children:"--osdk-palette-black"})," | ",e.jsx(n.code,{children:"--bp-palette-black"}),` |
| `,e.jsx(n.code,{children:"--osdk-palette-gray-1"})," | ",e.jsx(n.code,{children:"--bp-palette-gray-1"}),` |
| `,e.jsx(n.code,{children:"--osdk-palette-gray-2"})," | ",e.jsx(n.code,{children:"--bp-palette-gray-2"}),` |
| `,e.jsx(n.code,{children:"--osdk-palette-gray-4"})," | ",e.jsx(n.code,{children:"--bp-palette-gray-4"}),` |
| `,e.jsx(n.code,{children:"--osdk-palette-dark-gray-2"})," | ",e.jsx(n.code,{children:"--bp-palette-dark-gray-2"}),` |
| `,e.jsx(n.code,{children:"--osdk-palette-dark-gray-3"})," | ",e.jsx(n.code,{children:"--bp-palette-dark-gray-3"}),` |
| `,e.jsx(n.code,{children:"--osdk-palette-light-gray-1"})," | ",e.jsx(n.code,{children:"--bp-palette-light-gray-1"}),` |
| `,e.jsx(n.code,{children:"--osdk-palette-light-gray-3"})," | ",e.jsx(n.code,{children:"--bp-palette-light-gray-3"}),` |
| `,e.jsx(n.code,{children:"--osdk-palette-light-gray-4"})," | ",e.jsx(n.code,{children:"--bp-palette-light-gray-4"}),` |
| `,e.jsx(n.code,{children:"--osdk-palette-light-gray-5"})," | ",e.jsx(n.code,{children:"--bp-palette-light-gray-5"})," |"]}),`
`,e.jsx(n.h2,{id:"semantic-background-tokens",children:"Semantic Background Tokens"}),`
`,e.jsx(n.p,{children:"Higher-level tokens that abstract palette usage into meaningful roles."}),`
`,e.jsxs(n.p,{children:[`| Token | Default |
|-------|---------|
| `,e.jsx(n.code,{children:"--osdk-background-primary"})," | ",e.jsx(n.code,{children:"var(--osdk-palette-white)"}),` |
| `,e.jsx(n.code,{children:"--osdk-background-secondary"})," | ",e.jsx(n.code,{children:"var(--osdk-palette-light-gray-5)"}),` |
| `,e.jsx(n.code,{children:"--osdk-background-tertiary"})," | ",e.jsx(n.code,{children:"var(--osdk-palette-light-gray-4)"}),` |
| `,e.jsx(n.code,{children:"--osdk-background-skeleton-from"})," | ",e.jsx(n.code,{children:"color-mix(gray-1, 5%)"}),` |
| `,e.jsx(n.code,{children:"--osdk-background-skeleton-to"})," | ",e.jsx(n.code,{children:"color-mix(gray-1, 40%)"}),` |
| `,e.jsx(n.code,{children:"--osdk-background-backdrop"})," | ",e.jsx(n.code,{children:"color-mix(black, 50%)"})," |"]}),`
`,e.jsx(n.h2,{id:"intent-tokens",children:"Intent Tokens"}),`
`,e.jsxs(n.p,{children:[`Intent tokens define interactive color states. Each intent has five states:
`,e.jsx(n.code,{children:"rest"}),", ",e.jsx(n.code,{children:"hover"}),", ",e.jsx(n.code,{children:"active"}),", ",e.jsx(n.code,{children:"disabled"}),", and ",e.jsx(n.code,{children:"foreground"}),"."]}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(n.code,{children:"--osdk-intent-default-rest"})," | ",e.jsx(n.code,{children:"--bp-intent-default-rest"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-default-hover"})," | ",e.jsx(n.code,{children:"--bp-intent-default-hover"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-default-active"})," | ",e.jsx(n.code,{children:"--bp-intent-default-active"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-default-disabled"})," | ",e.jsx(n.code,{children:"--bp-intent-default-disabled"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-default-foreground"})," | ",e.jsx(n.code,{children:"--bp-intent-default-foreground"})," |"]}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(n.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(n.code,{children:"--osdk-intent-primary-rest"})," | ",e.jsx(n.code,{children:"--bp-intent-primary-rest"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-primary-hover"})," | ",e.jsx(n.code,{children:"--bp-intent-primary-hover"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-primary-active"})," | ",e.jsx(n.code,{children:"--bp-intent-primary-active"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-primary-disabled"})," | ",e.jsx(n.code,{children:"--bp-intent-primary-disabled"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-primary-foreground"})," | ",e.jsx(n.code,{children:"--bp-intent-primary-foreground"})," |"]}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsxs(n.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(n.code,{children:"--osdk-intent-success-rest"})," | ",e.jsx(n.code,{children:"--bp-intent-success-rest"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-success-hover"})," | ",e.jsx(n.code,{children:"--bp-intent-success-hover"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-success-active"})," | ",e.jsx(n.code,{children:"--bp-intent-success-active"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-success-disabled"})," | ",e.jsx(n.code,{children:"--bp-intent-success-disabled"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-success-foreground"})," | ",e.jsx(n.code,{children:"--bp-intent-success-foreground"})," |"]}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsxs(n.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(n.code,{children:"--osdk-intent-warning-rest"})," | ",e.jsx(n.code,{children:"--bp-intent-warning-rest"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-warning-hover"})," | ",e.jsx(n.code,{children:"--bp-intent-warning-hover"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-warning-active"})," | ",e.jsx(n.code,{children:"--bp-intent-warning-active"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-warning-disabled"})," | ",e.jsx(n.code,{children:"--bp-intent-warning-disabled"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-warning-foreground"})," | ",e.jsx(n.code,{children:"--bp-intent-warning-foreground"})," |"]}),`
`,e.jsx(n.h3,{id:"danger",children:"Danger"}),`
`,e.jsxs(n.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(n.code,{children:"--osdk-intent-danger-rest"})," | ",e.jsx(n.code,{children:"--bp-intent-danger-rest"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-danger-hover"})," | ",e.jsx(n.code,{children:"--bp-intent-danger-hover"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-danger-active"})," | ",e.jsx(n.code,{children:"--bp-intent-danger-active"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-danger-disabled"})," | ",e.jsx(n.code,{children:"--bp-intent-danger-disabled"}),` |
| `,e.jsx(n.code,{children:"--osdk-intent-danger-foreground"})," | ",e.jsx(n.code,{children:"--bp-intent-danger-foreground"})," |"]}),`
`,e.jsx(n.h2,{id:"surface-tokens",children:"Surface Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(n.code,{children:"--osdk-surface-background-color-default-rest"})," | ",e.jsx(n.code,{children:"--bp-surface-background-color-default-rest"}),` |
| `,e.jsx(n.code,{children:"--osdk-surface-background-color-default-hover"})," | ",e.jsx(n.code,{children:"--bp-surface-background-color-default-hover"}),` |
| `,e.jsx(n.code,{children:"--osdk-surface-background-color-default-active"})," | ",e.jsx(n.code,{children:"--bp-surface-background-color-default-active"}),` |
| `,e.jsx(n.code,{children:"--osdk-surface-background-color-danger-rest"})," | ",e.jsx(n.code,{children:"--bp-surface-background-color-danger-rest"}),` |
| `,e.jsx(n.code,{children:"--osdk-surface-background-color-danger-hover"})," | ",e.jsx(n.code,{children:"--bp-surface-background-color-danger-hover"}),` |
| `,e.jsx(n.code,{children:"--osdk-surface-background-color-danger-active"})," | ",e.jsx(n.code,{children:"--bp-surface-background-color-danger-active"}),` |
| `,e.jsx(n.code,{children:"--osdk-surface-border-color-default"})," | ",e.jsx(n.code,{children:"--bp-surface-border-color-default"}),` |
| `,e.jsx(n.code,{children:"--osdk-surface-border-color-strong"})," | ",e.jsx(n.code,{children:"--bp-surface-border-color-strong"})," |"]}),`
`,e.jsx(n.h2,{id:"custom-color-tokens",children:"Custom Color Tokens"}),`
`,e.jsxs(n.p,{children:["Derived colors using ",e.jsx(n.code,{children:"color-mix()"})," for opacity effects."]}),`
`,e.jsxs(n.p,{children:[`| Token | Definition |
|-------|-----------|
| `,e.jsx(n.code,{children:"--osdk-custom-color-gray-1"})," | ",e.jsx(n.code,{children:"color-mix(gray-1, 5%)"}),` |
| `,e.jsx(n.code,{children:"--osdk-custom-color-gray-2"})," | ",e.jsx(n.code,{children:"color-mix(gray-1, 8%)"}),` |
| `,e.jsx(n.code,{children:"--osdk-custom-color-gray-3"})," | ",e.jsx(n.code,{children:"color-mix(gray-1, 10%)"}),` |
| `,e.jsx(n.code,{children:"--osdk-custom-color-gray-4"})," | ",e.jsx(n.code,{children:"color-mix(gray-1, 20%)"}),` |
| `,e.jsx(n.code,{children:"--osdk-custom-color-light-gray-1"})," | ",e.jsx(n.code,{children:"color-mix(light-gray-1, 60%)"}),` |
| `,e.jsx(n.code,{children:"--osdk-custom-color-light-gray-2"})," | ",e.jsx(n.code,{children:"color-mix(light-gray-5, 50%)"}),` |
| `,e.jsx(n.code,{children:"--osdk-custom-color-primary-1"})," | ",e.jsx(n.code,{children:"color-mix(intent-primary-rest, 50%)"})," |"]}),`
`,e.jsx(n.h2,{id:"typography-color-tokens",children:"Typography Color Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token | Maps to |
|-------|---------|
| `,e.jsx(n.code,{children:"--osdk-typography-color-default-rest"})," | ",e.jsx(n.code,{children:"--bp-typography-color-default-rest"}),` |
| `,e.jsx(n.code,{children:"--osdk-typography-color-default-hover"})," | ",e.jsx(n.code,{children:"--bp-typography-color-default-hover"}),` |
| `,e.jsx(n.code,{children:"--osdk-typography-color-default-active"})," | ",e.jsx(n.code,{children:"--bp-typography-color-default-active"}),` |
| `,e.jsx(n.code,{children:"--osdk-typography-color-default-disabled"})," | ",e.jsx(n.code,{children:"--bp-typography-color-default-disabled"}),` |
| `,e.jsx(n.code,{children:"--osdk-typography-color-muted"})," | ",e.jsx(n.code,{children:"--bp-typography-color-muted"}),` |
| `,e.jsx(n.code,{children:"--osdk-typography-color-danger-rest"})," | ",e.jsx(n.code,{children:"--bp-typography-color-danger-rest"}),` |
| `,e.jsx(n.code,{children:"--osdk-typography-color-danger-active"})," | ",e.jsx(n.code,{children:"--bp-typography-color-danger-active"})," |"]})]})}function p(d={}){const{wrapper:n}={...r(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(o,{...d})}):o(d)}export{p as default};
