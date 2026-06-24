import{j as e}from"./iframe-YphmHIlA.js";import{useMDXComponents as s}from"./index-GTPG_950.js";import{M as o}from"./blocks-CttAQMWg.js";import"./preload-helper-BbYTXdYa.js";import"./index-jJCt0lzF.js";import"./index-UF1T6Q5c.js";import"./index-xdp-exYS.js";function i(t){const n={h1:"h1",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,e.jsx(o,{title:"Components/CbacPicker/Docs",tags:["beta"]}),`
`,e.jsx(n.h1,{id:"cbacpicker",children:"CbacPicker"}),`
`,e.jsx(n.p,{children:`Components for managing classification-based access control (CBAC) markings.
CBAC markings control who can access data. Each piece of data can be tagged
with markings from different categories, and the combination determines its
access restrictions.`}),`
`,e.jsxs(n.p,{children:[`The picker lets users select markings grouped by category. Some categories are
`,e.jsx(n.strong,{children:"disjunctive"}),` (pick exactly one, like a sensitivity level) and others are
`,e.jsx(n.strong,{children:"conjunctive"}),` (pick any combination, like access groups). The server enforces
which combinations are valid, which markings are implied by others, and which
are disallowed.`]})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{p as default};
