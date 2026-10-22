import{j as o}from"./iframe-tNZJ_yts.js";import{useMDXComponents as s}from"./index-C9ntu47N.js";import{b as a,c as p}from"./blocks-DKnRvISx.js";import{f as r}from"./formatGithubAlerts-DFDLIJ49.js";import"./preload-helper-Cs-zZmWk.js";import"./index-B8odcJPp.js";import"./index-BI50CR4r.js";import"./index-9T6sqMOx.js";const y=`# Typography Tokens

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
`,o.jsx(p,{children:r(y)})]})}function c(n={}){const{wrapper:t}={...s(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e()}export{c as default};
