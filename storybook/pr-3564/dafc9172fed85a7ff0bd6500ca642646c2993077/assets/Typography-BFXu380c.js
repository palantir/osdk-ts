import{j as o}from"./iframe-V6i4bT8x.js";import{useMDXComponents as s}from"./index-CGo-5S8z.js";import{b as a,c as p}from"./blocks-DG1_L1Gy.js";import"./preload-helper-CmldX7sB.js";import"./index-CveQVLJL.js";import"./index-BWb5Ixk2.js";import"./index-BZYQi9Q4.js";const y=`# Typography Tokens

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
