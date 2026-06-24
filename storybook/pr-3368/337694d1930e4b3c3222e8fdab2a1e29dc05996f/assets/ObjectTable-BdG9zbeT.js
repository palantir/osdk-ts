import{j as e}from"./iframe-sEvLPolU.js";import{useMDXComponents as h}from"./index-Dm9Bee2u.js";import{M as p,S as d,C as s,a as b}from"./blocks-_yrC_vLs.js";import{Default as a,MultipleSelection as m,WithCustomColumn as x}from"./ObjectTable.stories-BL7hw7b-.js";import"./preload-helper-Bj-XLBLi.js";import"./index-DixlF0uw.js";import"./index-BOoAG0JL.js";import"./index-BNq8aeRz.js";import"./object-table-Dz1UckaB.js";import"./Table-Cmdqbgjz.js";import"./index-B2k8cSeY.js";import"./Dialog-ldOfkEBY.js";import"./cross-D2g0iDLe.js";import"./svgIconContainer-B0E6OCJM.js";import"./useButton-BEUrubjh.js";import"./InternalBackdrop-g-j4YVXS.js";import"./composite-r2yQWaqa.js";import"./SkeletonBar-DoZ9u-65.js";import"./LoadingCell-B4H3-8yE.js";import"./ColumnConfigDialog-DQu7jukB.js";import"./SearchBar-Bqyl3Hh0.js";import"./Button-DVWy0fU4.js";import"./small-cross-IdsFW2yg.js";import"./Input-CUUYRNNr.js";import"./useControlled-BkOJfPWz.js";import"./ActionButton-DFjwkAN9.js";import"./Checkbox-tlWV1iTA.js";import"./minus-kM6udRA1.js";import"./useValueChanged-DEsyohth.js";import"./caret-down-BNPewwyr.js";import"./CollapsiblePanel-H3ktFhpQ.js";import"./MultiColumnSortDialog-B_mqAY-5.js";import"./MenuTrigger-DOMoyQ5C.js";import"./CompositeItem-ihskczSe.js";import"./ToolbarRootContext-DfGIvNaf.js";import"./getDisabledMountTransitionStyles-DSmyv8Ai.js";import"./getPseudoElementBounds-B4GmEX-d.js";import"./chevron-down-C-qiYxSC.js";import"./index-CiYHEsPi.js";import"./error-D4_SCDen.js";import"./Tooltip-CSa0_Fm0.js";import"./PopoverPopup-DD9Z9U4i.js";import"./toNumber-DxZWx8UX.js";import"./useOsdkClient-DA4oUn_6.js";import"./useEventCallback-C0GArDo-.js";import"./makeExternalStore-DhziIdrM.js";import"./withOsdkMetrics-Ca05WppM.js";import"./useRegisterUserAgent-C5-Tzo77.js";import"./Employee-BAk2o20h.js";import"./dialog-C4R1tLky.js";import"./iconLoader-IrZiVjFH.js";const u=[{title:"Outer border",vars:[["--osdk-table-border","Outer border shorthand"],["--osdk-table-border-color","Outer border color"],["--osdk-table-border-width","Outer border width"]]},{title:"Cells",vars:[["--osdk-table-cell-color","Cell text color"],["--osdk-table-cell-divider","Vertical divider between cells"],["--osdk-table-cell-font","Cell font shorthand"],["--osdk-table-cell-padding","Cell padding"]]},{title:"Editable cells",vars:[["--osdk-table-cell-editable-border","Border on editable cells (read mode)"],["--osdk-table-cell-edited-border","Border on cells with pending edits"],["--osdk-table-cell-edited-border-error","Border on cells with edit errors"],["--osdk-table-cell-input-bg","Background of an editing input"],["--osdk-table-edit-container-padding","Padding of the inline edit container"],["--osdk-table-edit-container-min-height","Min height of the inline edit container"]]},{title:"Header row",vars:[["--osdk-table-header-bg","Header row background"],["--osdk-table-header-color","Header text color"],["--osdk-table-header-font","Header font shorthand"],["--osdk-table-header-height","Header row height"],["--osdk-table-header-divider","Vertical divider between header cells"]]},{title:"Header menu button",vars:[["--osdk-table-header-menu-bg","Background (rest)"],["--osdk-table-header-menu-bg-hover","Background (hover)"],["--osdk-table-header-menu-bg-active","Background (active)"],["--osdk-table-header-menu-border","Border"],["--osdk-table-header-menu-color","Icon/text color (rest)"],["--osdk-table-header-menu-color-active","Icon/text color (active)"],["--osdk-table-header-menu-icon-color","Icon color"],["--osdk-table-header-menu-padding","Padding"]]},{title:"Rows",vars:[["--osdk-table-row-bg-default","Background (default state)"],["--osdk-table-row-bg-alternate","Background (zebra stripe)"],["--osdk-table-row-bg-hover","Background on hover"],["--osdk-table-row-bg-active","Background when selected/focused"],["--osdk-table-row-border-color-hover","Border color on hover"],["--osdk-table-row-border-color-active","Border color when active"],["--osdk-table-row-divider","Horizontal divider between rows"]]},{title:"Pinned columns and resizer",vars:[["--osdk-table-pinned-column-border","Border separating pinned columns"],["--osdk-table-resizer-color-hover","Column resizer handle (hover)"],["--osdk-table-resizer-color-active","Column resizer handle (active)"]]},{title:"Loading state",vars:[["--osdk-table-skeleton-color-from","Skeleton shimmer gradient start"],["--osdk-table-skeleton-color-to","Skeleton shimmer gradient end"]]},{title:"Column config dialog",vars:[["--osdk-table-column-config-dialog-min-width","Min width"],["--osdk-table-column-config-dialog-min-height","Min height"],["--osdk-table-column-config-visible-columns-bg",'Background of the "Visible columns" list']]}],g=[{name:"data-resizing",element:"<thead>",values:'"true" | "false"',when:"Set while the user is dragging a column resizer"},{name:"data-pinned",element:"<th>, <td>",values:'"left" | "right" | "false"',when:"Reflects each column's pin state"},{name:"data-selected",element:"<tr>",values:'"true" | "false"',when:"Set on selected rows"},{name:"data-focused",element:"<tr>",values:'"true" | "false"',when:"Set on the row currently focused by keyboard navigation"},{name:"data-row-parity",element:"<tr>",values:'"even" | "odd"',when:"Row striping; useful for zebra patterns at the consumer level"},{name:"data-editable",element:"<td>",values:'"true" | (absent)',when:"Set when a cell can be edited in the current editMode"}];function c(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...h(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(p,{title:"Beta/ObjectTable/Docs"}),`
`,e.jsx(t.h1,{id:"objecttable",children:"ObjectTable"}),`
`,e.jsxs(t.p,{children:[`An OSDK-aware data table for ontology objects. Renders rows from an
`,e.jsx(t.code,{children:"ObjectType"}),", ",e.jsx(t.code,{children:"ObjectSet"}),`, or interface, and ships with column configuration,
selection, sorting, pinning, resizing, inline editing, and an integrated
filter surface.`]}),`
`,e.jsx(d,{language:"tsx",code:'import { ObjectTable } from "@osdk/react-components/experimental/object-table";'}),`
`,e.jsx(t.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:`Pass an OSDK object type. ObjectTable will fetch rows, infer columns, and
wire up sort / filter / selection out of the box.`}),`
`,e.jsx(d,{language:"tsx",code:`import { Employee } from "@my/osdk";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";

export function EmployeesTable() {
return <ObjectTable objectType={Employee} />;
}`}),`
`,e.jsx(t.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Wrap your app in ",e.jsx(t.code,{children:"OsdkProvider"})," (see ",e.jsx(t.a,{href:"?path=/docs/prerequisites--docs",children:"Prerequisites"}),")."]}),`
`,e.jsxs(t.li,{children:["Import the package CSS and configure ",e.jsx(t.code,{children:"@layer"}),` order — see the
`,e.jsx(t.a,{href:"?path=/docs/css-setup--docs",children:"CSS Setup"})," doc."]}),`
`]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(t.p,{children:["A few common variations. The full set is in the ",e.jsx(t.strong,{children:"Stories"})," sidebar."]}),`
`,e.jsx(t.h3,{id:"selection",children:"Selection"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.h3,{id:"inline-editing",children:"Inline editing"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(t.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(t.h3,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:[`The full prop reference is auto-extracted from
`,e.jsx(t.a,{href:"https://github.com/palantir/osdk-ts/blob/main/packages/react-components/src/object-table/ObjectTableApi.ts",rel:"nofollow",children:e.jsx(t.code,{children:"ObjectTableApi.ts"})}),"."]}),`
`,e.jsx(b,{of:a}),`
`,e.jsx(t.h3,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsxs(t.p,{children:["Override these on ",e.jsx(t.code,{children:"OsdkThemeProvider"}),` (or any ancestor) to customize the table.
Token defaults come from `,e.jsx(t.code,{children:"src/tokens/base-tokens/base.css"}),"."]}),`
`,`
`,u.map(({title:o,vars:n})=>e.jsxs("div",{children:[e.jsx("h4",{children:o}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:16},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:"1px solid var(--osdk-table-border-color, #ccc)"},children:"Variable"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:"1px solid var(--osdk-table-border-color, #ccc)"},children:"Controls"})]})}),e.jsx("tbody",{children:n.map(([i,l])=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"6px 8px",verticalAlign:"top"},children:e.jsx("code",{children:i})}),e.jsx("td",{style:{padding:"6px 8px",verticalAlign:"top"},children:l})]},i))})]})]},o)),`
`,e.jsx(t.h3,{id:"data-attributes",children:"Data Attributes"}),`
`,e.jsx(t.p,{children:`Stateful attributes you can target with CSS selectors. Prefer these over CSS
class names — class names are CSS-module-hashed and not stable.`}),`
`,`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:16},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:"1px solid var(--osdk-table-border-color, #ccc)"},children:"Attribute"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:"1px solid var(--osdk-table-border-color, #ccc)"},children:"Element"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:"1px solid var(--osdk-table-border-color, #ccc)"},children:"Values"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:"1px solid var(--osdk-table-border-color, #ccc)"},children:"When applied"})]})}),e.jsx("tbody",{children:g.map(({name:o,element:n,values:i,when:l})=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"6px 8px",verticalAlign:"top"},children:e.jsx("code",{children:o})}),e.jsx("td",{style:{padding:"6px 8px",verticalAlign:"top"},children:e.jsx("code",{children:n})}),e.jsx("td",{style:{padding:"6px 8px",verticalAlign:"top"},children:e.jsx("code",{children:i})}),e.jsx("td",{style:{padding:"6px 8px",verticalAlign:"top"},children:l})]},o))})]}),`
`,e.jsx(t.h3,{id:"selectors",children:"Selectors"}),`
`,e.jsxs(t.p,{children:[`ObjectTable uses CSS Modules internally, so class names are hashed at build
time and `,e.jsx(t.strong,{children:"not"}),` part of the public API. To style states or variants from a
consuming app, target the documented data attributes instead.`]}),`
`,e.jsx(d,{language:"css",code:`/* Highlight selected rows with a custom accent */
[data-selected="true"] {
background: var(--my-app-selected-row-bg);
}

/* Style the divider between pinned and unpinned columns */
[data-pinned="left"] + [data-pinned="false"] {
border-left: 2px solid var(--my-app-pinned-divider);
}

/* Visually mark editable cells */
[data-editable="true"] {
background: var(--my-app-editable-tint);
}`}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The table renders as a native ",e.jsx(t.code,{children:"<table>"})," with ",e.jsx(t.code,{children:"<thead>"})," / ",e.jsx(t.code,{children:"<tbody>"})," / ",e.jsx(t.code,{children:"<tr>"})," / ",e.jsx(t.code,{children:"<th>"})," / ",e.jsx(t.code,{children:"<td>"})," for screen reader support."]}),`
`,e.jsxs(t.li,{children:["Row focus is exposed via ",e.jsx(t.code,{children:"data-focused"})," so keyboard navigation has a stable styling hook."]}),`
`,e.jsxs(t.li,{children:["Editable cells use focusable form controls from ",e.jsx(t.code,{children:"@base-ui/react"}),"; tab order follows visual order."]}),`
`,e.jsx(t.li,{children:"When customizing colors via CSS variables, verify contrast against the active theme (light + dark)."}),`
`]})]})}function xe(r={}){const{wrapper:t}={...h(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(c,{...r})}):c(r)}export{u as cssVariableGroups,g as dataAttrs,xe as default};
