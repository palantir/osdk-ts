import{j as n}from"./iframe-Dm6eVTzG.js";import{useMDXComponents as o}from"./index-FlUseBxK.js";import{M as r}from"./blocks-Dr6SaYbC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhPs6Q8c.js";import"./index-DSDYHDv9.js";import"./index-CDLvbpJ7.js";function s(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(r,{title:"Docs/Guides/Getting Started"}),`
`,n.jsx(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsxs(e.p,{children:["Get up and running with ",n.jsx(e.code,{children:"@osdk/react-components"})," in under five minutes."]}),`
`,n.jsx(e.h2,{id:"1-install",children:"1. Install"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @osdk/react-components @osdk/react @osdk/client @osdk/api react react-dom classnames
`})}),`
`,n.jsx(e.h2,{id:"2-import-styles",children:"2. Import styles"}),`
`,n.jsx(e.p,{children:"Add the component styles to your application CSS entry point:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* index.css */
@layer osdk.components;

@import "@osdk/react-components/styles.css" layer(osdk.components);
`})}),`
`,n.jsx(e.p,{children:"Add portal isolation to your root element:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`#root {
  isolation: isolate;
}
`})}),`
`,n.jsx(e.h2,{id:"3-set-up-the-provider",children:"3. Set up the provider"}),`
`,n.jsxs(e.p,{children:["Wrap your application with ",n.jsx(e.code,{children:"OsdkProvider"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "ri.ontology.main.ontology.{UUID}",
  async () => {
    // return your auth token
  },
);

function App() {
  return (
    <OsdkProvider client={client}>
      {/* your app */}
    </OsdkProvider>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"4-render-your-first-component",children:"4. Render your first component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { Employee } from "@your-osdk-package";

function EmployeeDirectory() {
  return <ObjectTable objectType={Employee} />;
}
`})}),`
`,n.jsxs(e.p,{children:["That's it! The ",n.jsx(e.code,{children:"ObjectTable"}),` handles data fetching, pagination, and sorting
out of the box.`]}),`
`,n.jsx(e.h2,{id:"next-steps",children:"Next steps"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"?path=/docs/docs-guides-installation--docs",children:"Installation"})}),` — Detailed
install instructions, peer dependencies, and bundler setup.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"?path=/docs/docs-guides-usage-with-osdk--docs",children:"Usage with OSDK"})}),` — How
components bind to Ontology data.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"?path=/docs/docs-styling-overview--docs",children:"Styling Overview"})}),` — Token
architecture, theming, and dark mode.`]}),`
`]})]})}function m(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{m as default};
