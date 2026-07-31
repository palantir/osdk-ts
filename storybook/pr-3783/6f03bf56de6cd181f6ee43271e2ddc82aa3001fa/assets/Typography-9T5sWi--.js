import{j as o}from"./iframe-gzVrYTak.js";import{useMDXComponents as s}from"./index-BxcXfTdh.js";import{b as a,c as p}from"./blocks-mC9Qh7Dt.js";import"./preload-helper-L3pE98T_.js";import"./index-Cj4q3NWW.js";import"./index-CrUm-nlo.js";import"./index-YkVJ8bwT.js";const y=`# Typography Tokens

Typography tokens control font family, size, weight, and line height across
all \`@osdk/react-components\`.

## Font Family

| Token                              | Maps to                          |
| ---------------------------------- | -------------------------------- |
| \`--osdk-typography-family-default\` | \`--bp-typography-family-default\` |

The default font family inherits from Blueprint, which resolves to the
system font stack.

## Font Sizes

| Token                                 | Maps to                             | Typical use            |
| ------------------------------------- | ----------------------------------- | ---------------------- |
| \`--osdk-typography-size-body-x-small\` | \`--bp-typography-size-body-x-small\` | Captions, footnotes    |
| \`--osdk-typography-size-body-small\`   | \`--bp-typography-size-body-small\`   | Secondary text, labels |
| \`--osdk-typography-size-body-medium\`  | \`--bp-typography-size-body-medium\`  | Body text (default)    |
| \`--osdk-typography-size-body-large\`   | \`--bp-typography-size-body-large\`   | Headings, emphasis     |

## Font Weights

| Token                              | Maps to                          | Typical use        |
| ---------------------------------- | -------------------------------- | ------------------ |
| \`--osdk-typography-weight-default\` | \`--bp-typography-weight-default\` | Body text          |
| \`--osdk-typography-weight-bold\`    | \`--bp-typography-weight-bold\`    | Headings, emphasis |

## Line Height

| Token                                   | Maps to                               |
| --------------------------------------- | ------------------------------------- |
| \`--osdk-typography-line-height-default\` | \`--bp-typography-line-height-default\` |

## Global Defaults

The root element sets these defaults for all OSDK components:

\`\`\`css
:root {
  font-family: var(--osdk-typography-family-default);
  color: var(--osdk-typography-color-default-rest);
  font-size: var(--osdk-typography-size-body-medium);
}
\`\`\`

## Override Example

\`\`\`css
/* Make all OSDK components use a custom font */
:root {
  --osdk-typography-family-default: "Inter", sans-serif;
  --osdk-typography-size-body-medium: 15px;
}
\`\`\`
`;function e(n){return o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(a,{title:"Docs/Tokens/Typography"}),`
`,o.jsx(p,{children:y})]})}function f(n={}){const{wrapper:t}={...s(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e()}export{f as default};
