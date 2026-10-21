import{j as n}from"./iframe-AXAl_lkK.js";import{useMDXComponents as r}from"./index-DkapFA-z.js";import{b as s,c as a}from"./blocks-B7m_qxif.js";import{f as i}from"./formatGithubAlerts-DFDLIJ49.js";import"./preload-helper-CmOyIjss.js";import"./index-waMJrP0w.js";import"./index-BfO3FL2b.js";import"./index--PmXZ_gO.js";const c=`# Getting Started

Install \`@osdk/react-components\`, import its styles, set up \`OsdkProvider\`, and render your first \`ObjectTable\`.

## 1. Install

\`\`\`bash
npm install @osdk/react-components @osdk/react @osdk/client @osdk/api @osdk/oauth react react-dom classnames
\`\`\`

## 2. Import styles

Add the component styles to your application CSS entry point:

\`\`\`css
/* index.css */
@layer osdk.components;

@import "@osdk/react-components/styles.css" layer(osdk.components);
\`\`\`

Add portal isolation to your root element:

\`\`\`css
#root {
  isolation: isolate;
}
\`\`\`

## 3. Set up the provider

Create a client with an OAuth token provider and wrap your application with \`OsdkProvider\`:

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
  return <OsdkProvider client={client}>{/* your app */}</OsdkProvider>;
}
\`\`\`

## 4. Render your first component

\`\`\`tsx
import { ObjectTable } from "@osdk/react-components/object-table";
import { Employee } from "@my-app/sdk";

function EmployeeDirectory() {
  return <ObjectTable objectType={Employee} />;
}
\`\`\`

\`ObjectTable\` handles data fetching, pagination, and sorting for you.
`;function e(t){return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(s,{title:"Docs/Guides/Getting Started"}),`
`,n.jsx(a,{children:i(c)})]})}function h(t={}){const{wrapper:o}={...r(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{h as default};
