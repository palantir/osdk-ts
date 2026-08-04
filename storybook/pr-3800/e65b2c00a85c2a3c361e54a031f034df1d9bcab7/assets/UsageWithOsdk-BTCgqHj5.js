import{j as n}from"./iframe-Dj3y_FXz.js";import{useMDXComponents as r}from"./index-B0AzU_zv.js";import{b as a,c as s}from"./blocks-f3mNVGmh.js";import"./preload-helper-D41TUqQK.js";import"./index-CxKUFA2E.js";import"./index-18fnm7EA.js";import"./index-Q6m8Uz6B.js";const i=`# Usage with OSDK

\`@osdk/react-components\` is built on top of
[\`@osdk/react\`](https://github.com/palantir/osdk-ts/tree/main/packages/react),
which provides hooks for fetching Ontology data. Components accept OSDK types
directly and handle data loading, caching, and state management automatically.

## How it works

Every OSDK-aware component follows a two-layer architecture:

1. **OSDK layer** (e.g. \`ObjectTable\`, \`FilterList\`, \`ActionForm\`) — fetches
   data via \`@osdk/react\` hooks, converts OSDK entities into primitives, and
   passes them down.
2. **Base layer** (e.g. \`BaseTable\`, \`BaseFilterList\`) — a pure React
   component with no OSDK imports. It receives primitives and handles all UI
   interactions and styling.

This means you can always drop down to the \`Base*\` variant and bring your own
data source.

## OsdkProvider

All components require an \`OsdkProvider\` wrapping your app. The provider
supplies the OSDK client that hooks use for network requests.

\`\`\`tsx
import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "your-ontology-rid",
  async () => "your-auth-token",
);

function App() {
  return (
    <OsdkProvider client={client}>
      {/* All @osdk/react-components go inside here */}
    </OsdkProvider>
  );
}
\`\`\`

Refer to individual component stories for up-to-date usage examples — the
component API is under active development and props may change between releases.
`;function o(e){return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(a,{title:"Docs/Guides/Usage with OSDK"}),`
`,n.jsx(s,{children:i})]})}function k(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{k as default};
