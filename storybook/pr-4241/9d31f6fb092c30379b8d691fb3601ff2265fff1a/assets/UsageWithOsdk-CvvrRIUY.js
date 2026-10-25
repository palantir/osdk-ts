import{j as n}from"./iframe-nl_vu0vo.js";import{useMDXComponents as r}from"./index-CSfU3WCV.js";import{b as s,c as a}from"./blocks-CeHPMhqz.js";import{f as i}from"./formatGithubAlerts-DFDLIJ49.js";import"./preload-helper-Dj6yhN1L.js";import"./index-DbGOmI0j.js";import"./index-Bt64noRU.js";import"./index-B_91enxX.js";const c=`# Usage with OSDK

\`@osdk/react-components\` builds on the \`@osdk/react\` hooks, so components accept OSDK types directly and handle data loading, caching, and state for you.

See the [\`@osdk/react\` documentation](https://palantir.github.io/osdk-ts/react/objects) for the hooks themselves.

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
import { createPublicOauthClient } from "@osdk/oauth";
import { OsdkProvider } from "@osdk/react";

const foundryUrl = "https://your-stack.palantirfoundry.com";

const auth = createPublicOauthClient(
  "your-client-id",
  foundryUrl,
  "http://localhost:8080/auth/callback",
);

const client = createClient(
  foundryUrl,
  "ri.ontology.main.ontology.{UUID}",
  auth,
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
`;function o(t){return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(s,{title:"Docs/Guides/Usage with OSDK"}),`
`,n.jsx(a,{children:i(c)})]})}function y(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o()}export{y as default};
