import{j as e}from"./iframe-BzNCj-A2.js";import{useMDXComponents as s}from"./index-COfpTQ2M.js";import{M as o}from"./blocks-tfWf4Ine.js";import"./preload-helper-CsxyAYTe.js";import"./index-BTfzs6VV.js";import"./index-br0iDOVq.js";import"./index-BAWQzv7R.js";function i(t){const n={h1:"h1",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
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
