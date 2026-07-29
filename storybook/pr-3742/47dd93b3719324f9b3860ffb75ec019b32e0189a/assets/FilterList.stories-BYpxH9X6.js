import{f as zt,j as e,r as o}from"./iframe-9L4vMhG3.js";import{F as p}from"./filter-list-DH5UFTEM.js";import{O as Bt}from"./object-table-DlLw0Dw8.js";import{E as a}from"./Employee-BAk2o20h.js";import{u as ne}from"./useOsdkClient-B0jbpyHy.js";import{g as ae}from"./getFilterLabel-BXV0lhLO.js";import"./preload-helper-BmqcIEn7.js";import"./MultiColumnSortDialog-Tl8jPhNb.js";import"./DraggableList-DjUTDOw-.js";import"./svgIconContainer-D9lmXivJ.js";import"./index-_pdaMpiB.js";import"./search-Xcg7LzRX.js";import"./Input-Bux853dQ.js";import"./useBaseUiId-D-sjda76.js";import"./useControlled-CD9rYDgT.js";import"./index-Dxea6VRI.js";import"./index-B9Ie_NWS.js";import"./isEqual-Dd0SMg4R.js";import"./isObject-bWt81XNR.js";import"./Button-drHfdObt.js";import"./ActionButton-UywGJSCF.js";import"./Dialog-CEYM9xS_.js";import"./cross-BpNWdRWr.js";import"./InternalBackdrop-Cen5tzmJ.js";import"./composite-Bx4vMELY.js";import"./index-DPjA9htS.js";import"./MenuTrigger-CXgtBZpD.js";import"./CompositeItem-BfdUBqPa.js";import"./ToolbarRootContext-DnGH9Ipt.js";import"./getDisabledMountTransitionStyles-CPYcuQBc.js";import"./getPseudoElementBounds-cc7gm7GG.js";import"./withOsdkMetrics-CRdZIZCN.js";import"./Table-CiEgzwih.js";import"./useEventCallback-CQVpKJiq.js";import"./SkeletonBar-DG_ilxDz.js";import"./LoadingCell-CTXKMQu7.js";import"./ColumnConfigDialog-EKNQe5rB.js";import"./Checkbox-D94n2NGO.js";import"./useValueChanged-C7jgUmnL.js";import"./CollapsiblePanel-DYm1U3zT.js";import"./chevron-down-B91fbDl5.js";import"./index-DAKTJ6F7.js";import"./error-XbW8w7e0.js";import"./BaseCbacBanner-DI9IEL2s.js";import"./makeExternalStore-DlzWWYhg.js";import"./Tooltip-CX_775Pp.js";import"./PopoverPopup-D4s4p01u.js";import"./toNumber-C7Jq7yzN.js";import"./tick-jg97K6ah.js";import"./DropdownField-3bMQt7y0.js";import"./Switch-CL-1UywG.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";const{useArgs:Yt}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:C,fn:b,userEvent:v,waitFor:L,within:Gt}=__STORYBOOK_MODULE_TEST__,R={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},re={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Wt={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},Ht={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0,formatDate:t=>t.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})},ie={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},A={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},oe={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},E=[R,re,Wt,Ht,oe,ie,A],u={width:320,height:600},T={display:"flex",gap:16},S={flex:1},g={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Ut={display:"flex",gap:16,height:600},Xt={width:320,flexShrink:0},Kt=e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),Ni={title:"Components/FilterList",component:p,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,collapsed:!1,onFilterClauseChanged:b(),onFilterStateChanged:b(),onFilterAdded:b(),onFilterRemoved:b(),onFilterVisibilityChange:b(),onCollapsedChange:b(),onReset:b()},parameters:{msw:{handlers:[...zt.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},filterClause:{description:"The current where clause. If provided, the filter clause is controlled.",control:!1},onFilterClauseChanged:{description:"Called when the filter clause changes. Required in controlled mode.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},collapsed:{description:"Whether the filter list panel is collapsed",control:"boolean"},onCollapsedChange:{description:"Called when the collapsed state changes",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Called when a filter is added. If provided, users can add filters.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Called when a filter is removed. If provided, users can remove filters.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Called when filter visibility or ordering changes (reorder, add, remove).",control:!1,table:{category:"Events"}},addFilterMode:{description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},M={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const r=o.useMemo(()=>[R,A],[]);return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:r,...i})})}},D={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "employeeNumber",
      label: "Employee Number",
      filterComponent: "NUMBER_RANGE",
      filterState: { type: "NUMBER_RANGE" },
      clickToFilter: true,
    },
  ]}
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const r=o.useMemo(()=>[ie],[]);return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:r,...i})})}};function $t(t){const n=ne(),i=o.useMemo(()=>n(a).where({department:"Marketing"}),[n]),r=o.useMemo(()=>[re,A],[]);return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,objectSet:i,filterDefinitions:r,...t})})}const j={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:t=>e.jsx($t,{...t})};function Qt(t){const n=o.useMemo(()=>[R,re,{...Wt,isVisible:!1},{...Ht,isVisible:!1},{...ie,isVisible:!1},{...A,isVisible:!1}],[]);return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:n,addFilterMode:"uncontrolled",...t})})}const k={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "fullName", label: "Full Name", filterComponent: "CONTAINS_TEXT", filterState: { type: "CONTAINS_TEXT" }, isVisible: false },
  { type: "PROPERTY", key: "firstFullTimeStartDate", label: "Start Date", filterComponent: "DATE_RANGE", filterState: { type: "DATE_RANGE" }, isVisible: false },
  { type: "PROPERTY", key: "employeeNumber", label: "Employee Number", filterComponent: "NUMBER_RANGE", filterState: { type: "NUMBER_RANGE" }, isVisible: false },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] }, isVisible: false },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  addFilterMode="uncontrolled"
  showResetButton={true}
/>`}}},render:t=>e.jsx(Qt,{...t})};function Zt(t){const[n,i]=o.useState(void 0),r=t.onFilterClauseChanged,l=o.useCallback(s=>{i(s),r==null||r(s)},[r]);return e.jsxs("div",{style:T,children:[e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:E,...t,filterClause:n,onFilterClauseChanged:l})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:g,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const O={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(Zt,{...t})},P={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:E,titleIcon:Kt,...i})})};function en(t){const n=t.onReset,i=o.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:E,...t,onReset:i})})}const w={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:t=>e.jsx(en,{...t})},_={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:E,...i})})},I={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:E,...i})})};function tn(t){return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:E,...t})})}const N={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:t=>{const[,n]=Yt(),i=t.onCollapsedChange,r=o.useCallback(l=>{n({collapsed:l}),i==null||i(l)},[n,i]);return e.jsx(tn,{...t,onCollapsedChange:r})}},x={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:t,objectSet:n,...i})=>{const r=o.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},R,A],[]);return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:r,...i})})}};function nn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),i=o.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return e.jsxs("div",{style:T,children:[e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:i,...t})})]})}const V={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
// With colorMap: each value gets a distinct color for its bar

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    colorMap: {
      Marketing: "#e74c3c",
      Operations: "#2ecc71",
      Finance: "#3498db",
      Product: "#f39c12",
    },
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(nn,{...t})},qt={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function rn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),i=o.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>qt[r]??r},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>r.toUpperCase()}],[]);return e.jsxs("div",{style:T,children:[e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:i,...t})})]})}const B={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
  Marketing: "Marketing Dept.",
  Operations: "Ops Team",
  Finance: "Finance & Accounting",
  Product: "Product Group",
};

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => DEPARTMENT_LABELS[value] ?? value,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(rn,{...t})},on={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},ln={display:"inline-flex",alignItems:"center",gap:8},an={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function sn({value:t}){const n=on[t]??"#94a3b8";return e.jsxs("span",{style:ln,children:[e.jsx("span",{style:{...an,background:n}}),e.jsx("span",{children:qt[t]??t})]})}function cn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:i=>e.jsx(sn,{value:i})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:i=>e.jsx("a",{href:`#/team/${encodeURIComponent(i)}`,onClick:r=>r.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:i})}],[]);return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:n,...t})})}const Y={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(cn,{...t})};function pn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),i=o.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),r=o.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return e.jsxs("div",{style:T,children:[e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:i,...t})}),e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:r,...t})})]})}const G={parameters:{docs:{source:{code:`// listogramConfig.displayMode controls what each bucket row renders:
//   "full" (default): label + colored bar + count number
//   "count":          label + count number (no bar)
//   "minimal":        label only (no bar, no count)
// One FilterList per mode, shown side by side.

<div style={{ display: "flex", gap: 16 }}>
  <FilterList
    objectType={Employee}
    filterDefinitions={[{
      type: "PROPERTY",
      key: "department",
      label: "full: label + bar + count",
      filterComponent: "LISTOGRAM",
      filterState: { type: "EXACT_MATCH", values: [] },
      listogramConfig: { displayMode: "full" },
    }]}
  />
  <FilterList
    objectType={Employee}
    filterDefinitions={[{
      type: "PROPERTY",
      key: "department",
      label: "count: label + count (no bar)",
      filterComponent: "LISTOGRAM",
      filterState: { type: "EXACT_MATCH", values: [] },
      listogramConfig: { displayMode: "count" },
    }]}
  />
  <FilterList
    objectType={Employee}
    filterDefinitions={[{
      type: "PROPERTY",
      key: "department",
      label: "minimal: label only",
      filterComponent: "LISTOGRAM",
      filterState: { type: "EXACT_MATCH", values: [] },
      listogramConfig: { displayMode: "minimal" },
    }]}
  />
</div>`}}},render:t=>e.jsx(pn,{...t})};function dn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),i=o.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return e.jsxs("div",{style:T,children:[e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:i,...t})})]})}const W={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(dn,{...t})};function un(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:n,...t})})}const H={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:t=>e.jsx(un,{...t}),play:async({canvasElement:t})=>{const n=Gt(t),i=["Engineering","Marketing","Design","Data","Finance"],r=()=>n.getAllByRole("button",{name:/^(Engineering|Marketing|Design|Data|Finance)\s+\d+/u}).map(l=>{const s=i.find(d=>{var c;return(c=l.textContent)==null?void 0:c.includes(d)});if(s==null)throw new Error(`Unable to identify department row from "${l.textContent}"`);return s});await n.findByRole("button",{name:"Marketing 4"}),await C(r()).toEqual(i),await v.click(n.getByRole("button",{name:"Marketing 4"})),await L(()=>C(n.getByRole("button",{name:"Marketing 4"})).toHaveAttribute("aria-pressed","true")),await C(r()).toEqual(i),await v.click(n.getByRole("button",{name:"Marketing 4"})),await L(()=>C(n.getByRole("button",{name:"Marketing 4"})).toHaveAttribute("aria-pressed","false")),await C(r()).toEqual(i)}};function mn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"department-below-fold",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:["Sales"]}}],[]);return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:n,...t})})}const U={parameters:{docs:{description:{story:'A selected value that sorts below the collapsed fold stays visible, appended at the tail of the collapsed view rather than hoisted to the top. The "View all" toggle reveals the rest, and "View less" collapses back to this state.'},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: ["Sales"] } },
  ]}
/>`}}},render:t=>e.jsx(mn,{...t}),play:async({canvasElement:t})=>{const n=Gt(t),i=["Engineering","Marketing","Design","Data","Finance","Operations","People","Sales","Customer Success","Legal","Product"],r=/^(Engineering|Marketing|Design|Data|Finance|Operations|People|Sales|Customer Success|Legal|Product)\s+\d+/u,l=()=>n.getAllByRole("button",{name:r}).map(c=>{const y=i.find(m=>{var f;return(f=c.textContent)==null?void 0:f.includes(m)});if(y==null)throw new Error(`Unable to identify department row from "${c.textContent}"`);return y}),s=["Engineering","Marketing","Design","Data","Finance","Sales"],d=["Engineering","Marketing","Design","Data","Finance"];await n.findByRole("button",{name:"Marketing 4"}),await C(l()).toEqual(s),await C(n.getByRole("button",{name:"Sales 2"})).toHaveAttribute("aria-pressed","true"),await v.click(n.getByRole("button",{name:"Sales 2"})),await L(()=>C(l()).toEqual(d)),await C(n.queryByRole("button",{name:"Sales 2"})).toBeNull(),await v.click(n.getByRole("button",{name:/^View all \(\d+\)/u})),await n.findByRole("button",{name:"View less"}),await v.click(n.getByRole("button",{name:"Sales 2"})),await L(()=>C(n.getByRole("button",{name:"Sales 2"})).toHaveAttribute("aria-pressed","true")),await v.click(n.getByRole("button",{name:"View less"})),await n.findByRole("button",{name:/^View all \(\d+\)/u}),await C(n.queryByRole("button",{name:"View less"})).toBeNull(),await L(()=>C(l()).toEqual(s))}};function yn(t){const[n,i]=o.useState(E),r=t.onFilterRemoved,l=o.useCallback(s=>{i(d=>d.filter(c=>"key"in c?c.key!==s:!0)),r==null||r(s)},[r]);return e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:n,...t,onFilterRemoved:l})})}const X={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:t=>e.jsx(yn,{...t})};function fn(t){const[n,i]=o.useState(void 0),r=o.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const c=d.values,y=c.includes("Active"),m=c.includes("Inactive");if(y&&m)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(y)return{employeeStatus:"Active"};if(m)return{employeeStatus:"Inactive"}}}],[]),l=t.onFilterClauseChanged,s=o.useCallback(d=>{i(d),l==null||l(d)},[l]);return e.jsxs("div",{style:T,children:[e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:r,...t,filterClause:n,onFilterClauseChanged:s})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:g,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const K={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
  {
    type: "STATIC_VALUES",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    values: ["Marketing", "Operations", "Finance", "Product"],
    filterState: { type: "EXACT_MATCH", values: [] },
    listogramConfig: { displayMode: "minimal" },
  },
  {
    type: "STATIC_VALUES",
    key: "locationCity",
    label: "Office Location",
    filterComponent: "SINGLE_SELECT",
    values: ["New York", "San Francisco", "London", "Tokyo"],
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "team",
    label: "Team",
    filterComponent: "MULTI_SELECT",
    values: ["Alpha", "Beta", "Gamma", "Delta"],
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "status",
    label: "Status",
    filterComponent: "LISTOGRAM",
    values: ["Active", "Inactive"],
    filterState: { type: "EXACT_MATCH", values: [] },
    toWhereClause: (state) => {
      // Custom WHERE clause mapping
      if (state.type === "EXACT_MATCH" && state.values.includes("Active")) {
        return { employeeStatus: "Active" };
      }
      return undefined;
    },
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(fn,{...t})};function Cn(t){const[n,i]=o.useState(void 0),[r,l]=o.useState(E),s=t.onFilterRemoved,d=o.useCallback(h=>{l(F=>F.filter(le=>"key"in le?le.key!==h:!0)),s==null||s(h)},[s]),c=t.onReset,y=o.useCallback(()=>{l(E),c==null||c()},[c]),m=t.onFilterClauseChanged,f=o.useCallback(h=>{i(h),m==null||m(h)},[m]);return e.jsxs("div",{style:Ut,children:[e.jsx("div",{style:Xt,children:e.jsx(p,{objectType:a,filterDefinitions:r,titleIcon:Kt,...t,onReset:y,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:f})}),e.jsx("div",{style:S,children:e.jsx(Bt,{objectType:a,filter:n})})]})}const q={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  title="Employee Filters"
  titleIcon={<FilterIcon />}
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showResetButton={true}
  showActiveFilterCount={true}
  onReset={handleReset}
  onFilterRemoved={handleFilterRemoved}
  enableSorting={true}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>{const[,n]=Yt(),i=t.onCollapsedChange,r=o.useCallback(l=>{n({collapsed:l}),i==null||i(l)},[n,i]);return e.jsx(Cn,{...t,onCollapsedChange:r})}};function Tn(t){const n=ne(),i=o.useMemo(()=>n(a),[n]),[r,l]=o.useState(void 0),s=o.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}},{type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department"}],[]),d=t.onFilterClauseChanged,c=o.useCallback(y=>{l(y),d==null||d(y)},[d]);return e.jsxs("div",{style:T,children:[e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,objectSet:i,filterDefinitions:s,...t,filterClause:r,onFilterClauseChanged:c})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("p",{children:"Note: LINKED_PROPERTY filter is not applied through where clause"}),e.jsx("pre",{style:g,children:r?JSON.stringify(r,null,2):"(no active filters)"})]})]})}const J={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. LINKED_PROPERTY filters on a property of the linked object and exposes the same overflow (…) controls as direct property filters — the inline Keeping/Excluding dropdown and Clear all."},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
const filterDefinitions = [
  {
    type: "HAS_LINK",
    linkName: "lead",
    label: "Has Manager",
    filterState: { type: "hasLink", hasLink: false },
  },
  {
    type: "LINKED_PROPERTY",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "department",
    linkedFilterComponent: "MULTI_SELECT",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
    label: "Manager Department",
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(Tn,{...t})},hn={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},En={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},Sn={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},searchField:!1,label:"Manager Name"},bn=[Sn,hn,En],gn=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"rdp",id:"managerName",creator:t=>t.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager Name",renderCell:t=>"managerName"in t?e.jsx("span",{children:t.managerName}):e.jsx("span",{style:{color:"#999"},children:"No Manager"})}];function Rn(t){const n=ne(),i=o.useMemo(()=>n(a),[n]),[r,l]=o.useState(void 0),[s,d]=o.useState(i),c=t.onFilterClauseChanged,y=o.useCallback(m=>{l(m),c==null||c(m)},[c]);return e.jsxs("div",{style:Ut,children:[e.jsx("div",{style:Xt,children:e.jsx(p,{...t,objectType:a,objectSet:i,filterDefinitions:bn,filterClause:r,onFilterClauseChanged:y,onEffectiveObjectSet:d,showFilteredOutValues:!0})}),e.jsx("div",{style:S,children:e.jsx(Bt,{objectType:a,objectSet:s,columnDefinitions:gn})})]})}const z={name:"Combined with Object Table",parameters:{docs:{description:{story:'A linked filter (Manager Name) and direct property filters coexist in one FilterList alongside an ObjectTable. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. The table surfaces the linked manager via a derived-property `Manager Name` column (`pivotTo("lead").selectProperty("fullName")`). With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows.'},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
const [effectiveObjectSet, setEffectiveObjectSet] = useState(baseObjectSet);

const filterDefinitions: FilterDefinitionUnion<Employee>[] = [
  {
    type: "LINKED_PROPERTY",
    id: "combined-lead-name",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "fullName",
    linkedFilterComponent: "MULTI_SELECT",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
    searchField: false,
    label: "Manager Name",
  },
  {
    type: "PROPERTY",
    id: "combined-department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "combined-locationCity",
    key: "locationCity",
    label: "Location City",
    filterComponent: "MULTI_SELECT",
    filterState: { type: "SELECT", selectedValues: [] },
  },
];

type RDPs = { managerName: "string" };
const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  { locator: { type: "property", id: "locationCity" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager Name",
    renderCell: (object) =>
      "managerName" in object
        ? <span>{object.managerName}</span>
        : <span style={{ color: "#999" }}>No Manager</span>,
  },
];

<FilterList
  objectType={Employee}
  objectSet={baseObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
  onEffectiveObjectSet={setEffectiveObjectSet}
  showFilteredOutValues
/>
<ObjectTable
  objectType={Employee}
  objectSet={effectiveObjectSet}
  columnDefinitions={columnDefinitions}
/>`}}},render:t=>e.jsx(Rn,{...t})};function vn({filterState:t,onFilterStateChanged:n}){const i=o.useCallback(l=>{const s=l.target.value;n({type:"custom",customState:{value:s}})},[n]),r=o.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return e.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",value:t.customState.value,onChange:i,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),t.customState.value&&e.jsx("button",{onClick:r,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function Ln(t){const[n,i]=o.useState(void 0),r=o.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:c})=>e.jsx(vn,{filterState:d,onFilterStateChanged:c}),toWhereClause:d=>{var y;const c=(y=d.customState)==null?void 0:y.value;if(c)return{fullName:{$containsAnyTerm:c}}}}],[]),l=t.onFilterClauseChanged,s=o.useCallback(d=>{i(d),l==null||l(d)},[l]);return e.jsxs("div",{style:T,children:[e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:r,...t,filterClause:n,onFilterClauseChanged:s})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:g,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const $={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
const nameContainsFilter = {
  type: "CUSTOM",
  key: "custom-name-contains",
  label: "Name Contains",
  filterComponent: "CUSTOM",
  filterState: { type: "custom", customState: { value: "" } },
  renderInput: ({ filterState, onFilterStateChanged }) => (
    <input
      type="text"
      value={filterState.customState.value}
      onChange={(e) =>
        onFilterStateChanged({
          type: "custom",
          customState: { value: e.target.value },
        })
      }
      placeholder="Enter name substring..."
    />
  ),
  toWhereClause: (state) => {
    const value = state.customState.value;
    if (!value) return undefined;
    return { fullName: { $containsAnyTerm: value } };
  },
};

<FilterList
  objectType={Employee}
  filterDefinitions={[nameContainsFilter]}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(Ln,{...t})},An={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},Fn={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},Mn=[R,An,Fn,ie],Q={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."},source:{code:`// Empty/null values render via <NoValueLabel /> across every filter type.
<FilterList
  objectType={Employee}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "department",
      label: "Department",
      filterComponent: "LISTOGRAM",
      filterState: { type: "EXACT_MATCH", values: [] },
    },
    {
      type: "PROPERTY",
      key: "department",
      label: "Department",
      filterComponent: "MULTI_SELECT",
      filterState: { type: "SELECT", selectedValues: [] },
    },
    {
      type: "PROPERTY",
      key: "department",
      label: "Department (single)",
      filterComponent: "SINGLE_SELECT",
      filterState: { type: "SELECT", selectedValues: [] },
    },
    {
      type: "PROPERTY",
      key: "employeeNumber",
      label: "Employee Number",
      filterComponent: "NUMBER_RANGE",
      filterState: { type: "NUMBER_RANGE" },
      clickToFilter: true,
    },
  ]}
/>`}}},render:()=>e.jsx("div",{style:u,children:e.jsx(p,{objectType:a,filterDefinitions:Mn})})},Dn={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},jn={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager Department (linked multi)"},kn={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"locationCity",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{type:"SELECT",selectedValues:[]},filterState:{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:[]}},label:"Manager City (linked single)"},On=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),Pn=[R,oe,Dn,jn,kn];function wn(t){const n=ne(),i=o.useMemo(()=>n(a),[n]),[r,l]=o.useState(void 0),s=o.useCallback(d=>{l(d)},[]);return e.jsxs("div",{style:T,children:[e.jsx("div",{style:u,children:e.jsx(p,{...t,objectType:a,objectSet:i,filterDefinitions:Pn,initialFilterStates:On,onFilterClauseChanged:s})}),e.jsxs("div",{style:S,children:[e.jsx("h4",{children:"Active where clause"}),e.jsx("pre",{style:g,children:r?JSON.stringify(r,null,2):"(none)"})]})]})}const Z={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
// dataset — they represent saved selections with zero matching rows
// today. The filter list still shows them so users can see and clear them.
const savedStates = new Map([
  // Direct property filters
  ["department", { type: "EXACT_MATCH", values: ["Marketing", "Research"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Marketing Manager", "Chief Scientist"] }],
  ["locationCity-single", { type: "SELECT", selectedValues: ["Berlin"] }],
  // Linked property filters
  ["linkedProperty:lead:department", {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: ["Marketing", "Research"] },
  }],
  ["linkedProperty:lead:locationCity", {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: ["Berlin"] },
  }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  onFilterClauseChanged={handleFilterClauseChanged}
/>`}}},render:t=>e.jsx(wn,{...t})},se=[R,oe],_n=new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Software Engineer"]}]]);function ce(t){const n=[...t.keys()].sort(),i={};for(const r of n){const l=t.get(r);l!==void 0&&(i[r]=l)}return JSON.stringify(i,null,2)}function Jt({initialFilterStates:t,storyArgs:n}){const i=o.useMemo(()=>{const m=new Map;for(const f of se)f.type==="PROPERTY"&&f.filterState&&m.set(ae(f),f.filterState);if(t)for(const[f,h]of t)m.set(f,h);return m},[t]),[r,l]=o.useState(()=>new Map(i)),s=n.onFilterStateChanged,d=o.useCallback((m,f)=>{l(h=>{const F=new Map(h);return F.set(ae(m),f),F}),s==null||s(m,f)},[s]),c=n.onReset,y=o.useCallback(()=>{l(new Map(i)),c==null||c()},[c,i]);return e.jsxs("div",{style:T,children:[e.jsx("div",{style:u,children:e.jsx(p,{...n,objectType:a,filterDefinitions:se,initialFilterStates:t,showResetButton:!0,onFilterStateChanged:d,onReset:y})}),e.jsxs("div",{style:S,children:[e.jsx("h4",{children:"Filter state dump"}),e.jsx("pre",{"data-testid":"filter-state-dump",style:g,children:ce(r)}),e.jsx("h4",{children:"Initial snapshot"}),e.jsx("pre",{"data-testid":"filter-state-initial",style:g,children:ce(i)})]})]})}function In(t){return e.jsx(Jt,{storyArgs:t})}const ee={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button is disabled-by-default until the user diverges from the initial (empty string) snapshot. After clicking reset the filter state returns to the initial snapshot and the button disables itself again."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`}}},render:t=>e.jsx(In,{...t})};function Nn(t){return e.jsx(Jt,{storyArgs:t,initialFilterStates:_n})}const te={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button stays disabled on mount even though there are active selections, because the live filter state matches the initial snapshot. Changing a selection enables the button; clicking it restores the initial snapshot, not an empty state."},source:{code:`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  showResetButton={true}
/>`}}},render:t=>e.jsx(Nn,{...t})};var pe,de,ue;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    const filterDefinitions = useMemo((): FilterDefinitionUnion<Employee>[] => [departmentFilter, locationCityFilter], []);
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={filterDefinitions} {...args} />
      </div>;
  }
}`,...(ue=(de=M.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ye,fe;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Repro for the integer-typed \`NUMBER_RANGE\` rounding fix. " + "\`employeeNumber\` is an \`integer\` property, so histogram bucket " + "boundaries — \`(maxValue - minValue) / 20\` — are usually fractional. " + "Click any bar in the histogram. The Min/Max boxes must show whole " + "integers (e.g. \`657495073\`), not fractional values " + "(e.g. \`657495073.4\`)."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "employeeNumber",
      label: "Employee Number",
      filterComponent: "NUMBER_RANGE",
      filterState: { type: "NUMBER_RANGE" },
      clickToFilter: true,
    },
  ]}
/>\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    const filterDefinitions = useMemo((): FilterDefinitionUnion<Employee>[] => [employeeNumberFilter], []);
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={filterDefinitions} {...args} />
      </div>;
  }
}`,...(fe=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Ce,Te,he;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass an \`objectSet\` prop to scope filter aggregations to a subset of objects. " + "Here the object set is filtered to Marketing department employees, " + "so the listogram counts reflect only that subset."
      },
      source: {
        code: \`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>\`
      }
    }
  },
  render: args => <WithObjectSetStory {...args} />
}`,...(he=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var Ee,Se,be;k.parameters={...k.parameters,docs:{...(Ee=k.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    showResetButton: true
  },
  parameters: {
    docs: {
      source: {
        code: \`const filterDefinitions = [
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "fullName", label: "Full Name", filterComponent: "CONTAINS_TEXT", filterState: { type: "CONTAINS_TEXT" }, isVisible: false },
  { type: "PROPERTY", key: "firstFullTimeStartDate", label: "Start Date", filterComponent: "DATE_RANGE", filterState: { type: "DATE_RANGE" }, isVisible: false },
  { type: "PROPERTY", key: "employeeNumber", label: "Employee Number", filterComponent: "NUMBER_RANGE", filterState: { type: "NUMBER_RANGE" }, isVisible: false },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] }, isVisible: false },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  addFilterMode="uncontrolled"
  showResetButton={true}
/>\`
      }
    }
  },
  render: args => <AddFilterModeStory {...args} />
}`,...(be=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var ge,Re,ve;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "All filter component types with a controlled where clause. " + "Hover filter items to reveal search and exclude actions."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithAllFilterTypesStory {...args} />
}`,...(ve=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:ve.source}}};var Le,Ae,Fe;P.parameters={...P.parameters,docs:{...(Le=P.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    title: "Employee Filters"
  },
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={sharedFilterDefinitions} titleIcon={FILTER_ICON} {...args} />
      </div>;
  }
}`,...(Fe=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:Fe.source}}};var Me,De,je;w.parameters={...w.parameters,docs:{...(Me=w.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    showResetButton: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>\`
      }
    }
  },
  render: args => <WithResetButtonStory {...args} />
}`,...(je=(De=w.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};var ke,Oe,Pe;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    showActiveFilterCount: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={sharedFilterDefinitions} {...args} />
      </div>;
  }
}`,...(Pe=(Oe=_.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var we,_e,Ie;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    enableSorting: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={sharedFilterDefinitions} {...args} />
      </div>;
  }
}`,...(Ie=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var Ne,xe,Ve;N.parameters={...N.parameters,docs:{...(Ne=N.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    title: "Employee Filters",
    showActiveFilterCount: true
  },
  parameters: {
    docs: {
      description: {
        story: "Click the collapse button to minimize the filter panel. " + "Active filter count is shown in the collapsed state."
      },
      source: {
        code: \`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>\`
      }
    }
  },
  render: args => {
    const [, updateArgs] = useArgs<Partial<EmployeeFilterListProps>>();
    const argsOnCollapsedChange = args.onCollapsedChange;
    const handleCollapsedChange = useCallback((collapsed: boolean) => {
      updateArgs({
        collapsed
      });
      argsOnCollapsedChange?.(collapsed);
    }, [updateArgs, argsOnCollapsedChange]);
    return <CollapsiblePanelStory {...args} onCollapsedChange={handleCollapsedChange} />;
  }
}`,...(Ve=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:Ve.source}}};var Be,Ye,Ge;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: ({
    objectType: _ot,
    objectSet: _os,
    ...args
  }) => {
    const filterDefinitions = useMemo((): FilterDefinitionUnion<Employee>[] => [{
      type: "KEYWORD_SEARCH",
      properties: ["fullName", "department", "jobTitle", "locationCity"],
      label: "Search"
    }, departmentFilter, locationCityFilter], []);
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={filterDefinitions} {...args} />
      </div>;
  }
}`,...(Ge=(Ye=x.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var We,He,Ue;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`// Without colorMap: all bars use the default theme color
// With colorMap: each value gets a distinct color for its bar

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    colorMap: {
      Marketing: "#e74c3c",
      Operations: "#2ecc71",
      Finance: "#3498db",
      Product: "#f39c12",
    },
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: args => <WithColorMapStory {...args} />
}`,...(Ue=(He=V.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}};var Xe,Ke,qe;B.parameters={...B.parameters,docs:{...(Xe=B.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use \`renderValue\` to customize how filter values are displayed and searched. " + "The returned string replaces the raw value for display and search matching. " + "Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."
      },
      source: {
        code: \`const DEPARTMENT_LABELS = {
  Marketing: "Marketing Dept.",
  Operations: "Ops Team",
  Finance: "Finance & Accounting",
  Product: "Product Group",
};

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => DEPARTMENT_LABELS[value] ?? value,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: args => <WithRenderValueStory {...args} />
}`,...(qe=(Ke=B.parameters)==null?void 0:Ke.docs)==null?void 0:qe.source}}};var Je,ze,$e;Y.parameters={...Y.parameters,docs:{...(Je=Y.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`renderValue\` may return any \`ReactNode\`, not just a string. " + "Use this to render avatars, anchors, status pills, or any " + "custom JSX inside listogram rows, dropdown items, and chips. " + "When the function returns non-string JSX, search matching " + "falls back to the raw value."
      },
      source: {
        code: \`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: args => <WithRenderValueReactNodeStory {...args} />
}`,...($e=(ze=Y.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Qe,Ze,et;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`// listogramConfig.displayMode controls what each bucket row renders:
//   "full" (default): label + colored bar + count number
//   "count":          label + count number (no bar)
//   "minimal":        label only (no bar, no count)
// One FilterList per mode, shown side by side.

<div style={{ display: "flex", gap: 16 }}>
  <FilterList
    objectType={Employee}
    filterDefinitions={[{
      type: "PROPERTY",
      key: "department",
      label: "full: label + bar + count",
      filterComponent: "LISTOGRAM",
      filterState: { type: "EXACT_MATCH", values: [] },
      listogramConfig: { displayMode: "full" },
    }]}
  />
  <FilterList
    objectType={Employee}
    filterDefinitions={[{
      type: "PROPERTY",
      key: "department",
      label: "count: label + count (no bar)",
      filterComponent: "LISTOGRAM",
      filterState: { type: "EXACT_MATCH", values: [] },
      listogramConfig: { displayMode: "count" },
    }]}
  />
  <FilterList
    objectType={Employee}
    filterDefinitions={[{
      type: "PROPERTY",
      key: "department",
      label: "minimal: label only",
      filterComponent: "LISTOGRAM",
      filterState: { type: "EXACT_MATCH", values: [] },
      listogramConfig: { displayMode: "minimal" },
    }]}
  />
</div>\`
      }
    }
  },
  render: args => <WithListogramDisplayModesStory {...args} />
}`,...(et=(Ze=G.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,it;W.parameters={...W.parameters,docs:{...(tt=W.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use \`showCount: false\` on individual filter definitions to hide " + "aggregation counts in LISTOGRAM and MULTI_SELECT inputs. " + "Bar visualizations in LISTOGRAM are preserved."
      },
      source: {
        code: \`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: args => <WithHiddenCountsStory {...args} />
}`,...(it=(nt=W.parameters)==null?void 0:nt.docs)==null?void 0:it.source}}};var rt,ot,lt;H.parameters={...H.parameters,docs:{...(rt=H.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Listogram rows always include a checkbox for multi-select. " + "Selecting values checks the checkbox and highlights the row. " + "Use the exclude toggle (three-dot menu) to invert selections."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>\`
      }
    }
  },
  render: args => <WithCheckboxStory {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const expectedDepartmentOrder = ["Engineering", "Marketing", "Design", "Data", "Finance"];
    const visibleDepartmentOrder = () => canvas.getAllByRole("button", {
      name: /^(Engineering|Marketing|Design|Data|Finance)\\s+\\d+/u
    }).map(row => {
      const label = expectedDepartmentOrder.find(name => row.textContent?.includes(name));
      if (label == null) {
        throw new Error(\`Unable to identify department row from "\${row.textContent}"\`);
      }
      return label;
    });
    await canvas.findByRole("button", {
      name: "Marketing 4"
    });
    await expect(visibleDepartmentOrder()).toEqual(expectedDepartmentOrder);
    await userEvent.click(canvas.getByRole("button", {
      name: "Marketing 4"
    }));
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Marketing 4"
    })).toHaveAttribute("aria-pressed", "true"));
    await expect(visibleDepartmentOrder()).toEqual(expectedDepartmentOrder);
    await userEvent.click(canvas.getByRole("button", {
      name: "Marketing 4"
    }));
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Marketing 4"
    })).toHaveAttribute("aria-pressed", "false"));
    await expect(visibleDepartmentOrder()).toEqual(expectedDepartmentOrder);
  }
}`,...(lt=(ot=H.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var at,st,ct;U.parameters={...U.parameters,docs:{...(at=U.parameters)==null?void 0:at.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A selected value that sorts below the collapsed fold stays visible, " + "appended at the tail of the collapsed view rather than hoisted to " + 'the top. The "View all" toggle reveals the rest, and "View less" ' + "collapses back to this state."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: ["Sales"] } },
  ]}
/>\`
      }
    }
  },
  render: args => <WithBelowFoldSelectionStory {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Every distinct department bucket, used to read the rendered row order
    // regardless of which are currently visible.
    const allDepartments = ["Engineering", "Marketing", "Design", "Data", "Finance", "Operations", "People", "Sales", "Customer Success", "Legal", "Product"];
    const departmentRowName = /^(Engineering|Marketing|Design|Data|Finance|Operations|People|Sales|Customer Success|Legal|Product)\\s+\\d+/u;
    const renderedDepartments = () => canvas.getAllByRole("button", {
      name: departmentRowName
    }).map(row => {
      const label = allDepartments.find(name => row.textContent?.includes(name));
      if (label == null) {
        throw new Error(\`Unable to identify department row from "\${row.textContent}"\`);
      }
      return label;
    });

    // Collapsed initial state: the five highest-count departments form the
    // head, plus the below-fold selected "Sales" appended at the tail.
    const initialCollapsedOrder = ["Engineering", "Marketing", "Design", "Data", "Finance", "Sales"];
    // With no below-fold selection the collapsed view is just the head.
    const headOnlyOrder = ["Engineering", "Marketing", "Design", "Data", "Finance"];
    await canvas.findByRole("button", {
      name: "Marketing 4"
    });
    await expect(renderedDepartments()).toEqual(initialCollapsedOrder);
    await expect(canvas.getByRole("button", {
      name: "Sales 2"
    })).toHaveAttribute("aria-pressed", "true");

    // Unselect the below-fold "Sales": it is no longer selected, so it drops
    // out of the collapsed view and the list falls back to the head alone.
    await userEvent.click(canvas.getByRole("button", {
      name: "Sales 2"
    }));
    await waitFor(() => expect(renderedDepartments()).toEqual(headOnlyOrder));
    await expect(canvas.queryByRole("button", {
      name: "Sales 2"
    })).toBeNull();

    // Expand with "View all (N)" to reach "Sales" again, then re-select it.
    await userEvent.click(canvas.getByRole("button", {
      name: /^View all \\(\\d+\\)/u
    }));
    await canvas.findByRole("button", {
      name: "View less"
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Sales 2"
    }));
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Sales 2"
    })).toHaveAttribute("aria-pressed", "true"));

    // "View less" collapses back to the initial state: the head plus the
    // re-selected below-fold "Sales" appended at the tail.
    await userEvent.click(canvas.getByRole("button", {
      name: "View less"
    }));
    await canvas.findByRole("button", {
      name: /^View all \\(\\d+\\)/u
    });
    await expect(canvas.queryByRole("button", {
      name: "View less"
    })).toBeNull();
    await waitFor(() => expect(renderedDepartments()).toEqual(initialCollapsedOrder));
  }
}`,...(ct=(st=U.parameters)==null?void 0:st.docs)==null?void 0:ct.source}}};var pt,dt,ut;X.parameters={...X.parameters,docs:{...(pt=X.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  name: "Removable Filters",
  args: {
    title: "Removable Filters",
    showActiveFilterCount: true
  },
  parameters: {
    docs: {
      description: {
        story: "When \`onFilterRemoved\` is provided, each filter item shows a remove button (X) on hover. " + "Clicking it removes the filter from the list."
      },
      source: {
        code: \`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>\`
      }
    }
  },
  render: args => <WithRemovableFiltersStory {...args} />
}`,...(ut=(dt=X.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var mt,yt,ft;K.parameters={...K.parameters,docs:{...(mt=K.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use \`STATIC_VALUES\` filter definitions to provide a fixed list of values " + "instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, " + "MULTI_SELECT, and TEXT_TAGS components. Optionally provide a \`toWhereClause\` " + "function for custom clause generation."
      },
      source: {
        code: \`const filterDefinitions = [
  {
    type: "STATIC_VALUES",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    values: ["Marketing", "Operations", "Finance", "Product"],
    filterState: { type: "EXACT_MATCH", values: [] },
    listogramConfig: { displayMode: "minimal" },
  },
  {
    type: "STATIC_VALUES",
    key: "locationCity",
    label: "Office Location",
    filterComponent: "SINGLE_SELECT",
    values: ["New York", "San Francisco", "London", "Tokyo"],
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "team",
    label: "Team",
    filterComponent: "MULTI_SELECT",
    values: ["Alpha", "Beta", "Gamma", "Delta"],
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "status",
    label: "Status",
    filterComponent: "LISTOGRAM",
    values: ["Active", "Inactive"],
    filterState: { type: "EXACT_MATCH", values: [] },
    toWhereClause: (state) => {
      // Custom WHERE clause mapping
      if (state.type === "EXACT_MATCH" && state.values.includes("Active")) {
        return { employeeStatus: "Active" };
      }
      return undefined;
    },
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithStaticValuesStory {...args} />
}`,...(ft=(yt=K.parameters)==null?void 0:yt.docs)==null?void 0:ft.source}}};var Ct,Tt,ht;q.parameters={...q.parameters,docs:{...(Ct=q.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  name: "Full Featured",
  args: {
    title: "Employee Filters",
    showResetButton: true,
    showActiveFilterCount: true,
    enableSorting: true
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates all filter list features together: collapse, reset, active count, sorting, " + "removable filters, per-filter search, exclude toggle, and controlled where clause " + "driving an ObjectTable."
      },
      source: {
        code: \`// All features combined: collapse, sort, search, exclude, remove, reset

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  title="Employee Filters"
  titleIcon={<FilterIcon />}
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showResetButton={true}
  showActiveFilterCount={true}
  onReset={handleReset}
  onFilterRemoved={handleFilterRemoved}
  enableSorting={true}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => {
    const [, updateArgs] = useArgs<Partial<EmployeeFilterListProps>>();
    const argsOnCollapsedChange = args.onCollapsedChange;
    const handleCollapsedChange = useCallback((collapsed: boolean) => {
      updateArgs({
        collapsed
      });
      argsOnCollapsedChange?.(collapsed);
    }, [updateArgs, argsOnCollapsedChange]);
    return <FullFeaturedStory {...args} onCollapsedChange={handleCollapsedChange} />;
  }
}`,...(ht=(Tt=q.parameters)==null?void 0:Tt.docs)==null?void 0:ht.source}}};var Et,St,bt;J.parameters={...J.parameters,docs:{...(Et=J.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  name: "Linked Property Filters",
  parameters: {
    docs: {
      description: {
        story: "Demonstrates filtering on properties of linked objects. " + "HAS_LINK filters objects based on whether they have a linked object. " + "LINKED_PROPERTY filters on a property of the linked object and " + "exposes the same overflow (…) controls as direct property filters — " + "the inline Keeping/Excluding dropdown and Clear all."
      },
      source: {
        code: \`// HAS_LINK and LINKED_PROPERTY filter definitions
const filterDefinitions = [
  {
    type: "HAS_LINK",
    linkName: "lead",
    label: "Has Manager",
    filterState: { type: "hasLink", hasLink: false },
  },
  {
    type: "LINKED_PROPERTY",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "department",
    linkedFilterComponent: "MULTI_SELECT",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
    label: "Manager Department",
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithLinkedPropertyFiltersStory {...args} />
}`,...(bt=(St=J.parameters)==null?void 0:St.docs)==null?void 0:bt.source}}};var gt,Rt,vt;z.parameters={...z.parameters,docs:{...(gt=z.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  name: "Combined with Object Table",
  parameters: {
    docs: {
      description: {
        story: "A linked filter (Manager Name) and direct property filters coexist in " + "one FilterList alongside an ObjectTable. Pass the unfiltered scope as " + "\`objectSet\`; FilterList applies the linked-filter narrowing internally " + "and emits the fully-narrowed \`ObjectSet\` via \`onEffectiveObjectSet\` for " + "the table. The table surfaces the linked manager via a derived-property " + '\`Manager Name\` column (\`pivotTo("lead").selectProperty("fullName")\`). ' + "With \`showFilteredOutValues\`, direct-facet values absent under the " + "active linked filter render as greyed-out count=0 filtered-out rows."
      },
      source: {
        code: \`const baseObjectSet = useMemo(() => client(Employee), [client]);
const [effectiveObjectSet, setEffectiveObjectSet] = useState(baseObjectSet);

const filterDefinitions: FilterDefinitionUnion<Employee>[] = [
  {
    type: "LINKED_PROPERTY",
    id: "combined-lead-name",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "fullName",
    linkedFilterComponent: "MULTI_SELECT",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
    searchField: false,
    label: "Manager Name",
  },
  {
    type: "PROPERTY",
    id: "combined-department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "combined-locationCity",
    key: "locationCity",
    label: "Location City",
    filterComponent: "MULTI_SELECT",
    filterState: { type: "SELECT", selectedValues: [] },
  },
];

type RDPs = { managerName: "string" };
const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  { locator: { type: "property", id: "locationCity" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager Name",
    renderCell: (object) =>
      "managerName" in object
        ? <span>{object.managerName}</span>
        : <span style={{ color: "#999" }}>No Manager</span>,
  },
];

<FilterList
  objectType={Employee}
  objectSet={baseObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
  onEffectiveObjectSet={setEffectiveObjectSet}
  showFilteredOutValues
/>
<ObjectTable
  objectType={Employee}
  objectSet={effectiveObjectSet}
  columnDefinitions={columnDefinitions}
/>\`
      }
    }
  },
  render: args => <CombinedWithObjectTableStory {...args} />
}`,...(vt=(Rt=z.parameters)==null?void 0:Rt.docs)==null?void 0:vt.source}}};var Lt,At,Ft;$.parameters={...$.parameters,docs:{...(Lt=$.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  name: "Custom Filters",
  parameters: {
    docs: {
      description: {
        story: "Custom filters provide full control over filtering logic and UI. " + "The 'Name Contains' filter uses \`renderInput\` for a simple custom input. "
      },
      source: {
        code: \`// Custom filter with renderInput
const nameContainsFilter = {
  type: "CUSTOM",
  key: "custom-name-contains",
  label: "Name Contains",
  filterComponent: "CUSTOM",
  filterState: { type: "custom", customState: { value: "" } },
  renderInput: ({ filterState, onFilterStateChanged }) => (
    <input
      type="text"
      value={filterState.customState.value}
      onChange={(e) =>
        onFilterStateChanged({
          type: "custom",
          customState: { value: e.target.value },
        })
      }
      placeholder="Enter name substring..."
    />
  ),
  toWhereClause: (state) => {
    const value = state.customState.value;
    if (!value) return undefined;
    return { fullName: { $containsAnyTerm: value } };
  },
};

<FilterList
  objectType={Employee}
  filterDefinitions={[nameContainsFilter]}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithCustomFiltersStory {...args} />
}`,...(Ft=(At=$.parameters)==null?void 0:At.docs)==null?void 0:Ft.source}}};var Mt,Dt,jt;Q.parameters={...Q.parameters,docs:{...(Mt=Q.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  name: "No value rendering",
  parameters: {
    docs: {
      description: {
        story: "Empty/null filter values render via the canonical \`<NoValueLabel />\` " + "component — italic, muted, with the literal text 'No value' — across " + "listogram buckets, single-select dropdown options, multi-select dropdown " + "options, and multi-select chips. The mock dataset includes one Employee " + 'with \`department: ""\` so the No value row is visible in the listogram.'
      },
      source: {
        code: \`// Empty/null values render via <NoValueLabel /> across every filter type.
<FilterList
  objectType={Employee}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "department",
      label: "Department",
      filterComponent: "LISTOGRAM",
      filterState: { type: "EXACT_MATCH", values: [] },
    },
    {
      type: "PROPERTY",
      key: "department",
      label: "Department",
      filterComponent: "MULTI_SELECT",
      filterState: { type: "SELECT", selectedValues: [] },
    },
    {
      type: "PROPERTY",
      key: "department",
      label: "Department (single)",
      filterComponent: "SINGLE_SELECT",
      filterState: { type: "SELECT", selectedValues: [] },
    },
    {
      type: "PROPERTY",
      key: "employeeNumber",
      label: "Employee Number",
      filterComponent: "NUMBER_RANGE",
      filterState: { type: "NUMBER_RANGE" },
      clickToFilter: true,
    },
  ]}
/>\`
      }
    }
  },
  render: () => <div style={SIDEBAR_STYLE}>
      <FilterList objectType={Employee} filterDefinitions={NO_VALUE_FILTER_DEFINITIONS} />
    </div>
}`,...(jt=(Dt=Q.parameters)==null?void 0:Dt.docs)==null?void 0:jt.source}}};var kt,Ot,Pt;Z.parameters={...Z.parameters,docs:{...(kt=Z.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  name: "With initial filter states",
  parameters: {
    docs: {
      description: {
        story: "Pass \`initialFilterStates\` to hydrate filters from saved state " + "(e.g. localStorage or URL params). Selections are restored on " + "mount, including values that currently have zero matching rows " + "— they appear with a count of 0 so users can see and clear them. " + "Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, " + "and LINKED_PROPERTY filters."
      },
      source: {
        code: \`// "Research", "Chief Scientist", and "Berlin" are not in the current
// dataset — they represent saved selections with zero matching rows
// today. The filter list still shows them so users can see and clear them.
const savedStates = new Map([
  // Direct property filters
  ["department", { type: "EXACT_MATCH", values: ["Marketing", "Research"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Marketing Manager", "Chief Scientist"] }],
  ["locationCity-single", { type: "SELECT", selectedValues: ["Berlin"] }],
  // Linked property filters
  ["linkedProperty:lead:department", {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: ["Marketing", "Research"] },
  }],
  ["linkedProperty:lead:locationCity", {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: ["Berlin"] },
  }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  onFilterClauseChanged={handleFilterClauseChanged}
/>\`
      }
    }
  },
  render: args => <WithInitialFilterStatesStory {...args} />
}`,...(Pt=(Ot=Z.parameters)==null?void 0:Ot.docs)==null?void 0:Pt.source}}};var wt,_t,It;ee.parameters={...ee.parameters,docs:{...(wt=ee.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    showResetButton: true
  },
  parameters: {
    docs: {
      description: {
        story: "Reset button is disabled-by-default until the user diverges from " + "the initial (empty string) snapshot. After clicking reset the filter " + "state returns to the initial snapshot and the button disables " + "itself again."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>\`
      }
    }
  },
  render: args => <WithResetButtonEmptyInitialStory {...args} />
}`,...(It=(_t=ee.parameters)==null?void 0:_t.docs)==null?void 0:It.source}}};var Nt,xt,Vt;te.parameters={...te.parameters,docs:{...(Nt=te.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  args: {
    showResetButton: true
  },
  parameters: {
    docs: {
      description: {
        story: "Reset button stays disabled on mount even though there are active " + "selections, because the live filter state matches the initial " + "snapshot. Changing a selection enables the button; clicking it " + "restores the initial snapshot, not an empty state."
      },
      source: {
        code: \`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  showResetButton={true}
/>\`
      }
    }
  },
  render: args => <WithResetButtonNonEmptyInitialStory {...args} />
}`,...(Vt=(xt=te.parameters)==null?void 0:xt.docs)==null?void 0:Vt.source}}};const xi=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","WithBelowFoldSelection","WithRemovableFilters","WithStaticValues","FullFeatured","WithLinkedPropertyFilters","CombinedWithObjectTable","WithCustomFilters","NoValueRendering","WithInitialFilterStates","WithResetButtonEmptyInitial","WithResetButtonNonEmptyInitial"];export{k as AddFilterMode,N as CollapsiblePanel,z as CombinedWithObjectTable,M as Default,q as FullFeatured,D as IntegerNumberRangeRounding,x as KeywordSearch,Q as NoValueRendering,_ as WithActiveFilterCount,O as WithAllFilterTypes,U as WithBelowFoldSelection,H as WithCheckbox,V as WithColorMap,$ as WithCustomFilters,W as WithHiddenCounts,Z as WithInitialFilterStates,J as WithLinkedPropertyFilters,G as WithListogramDisplayModes,j as WithObjectSet,X as WithRemovableFilters,B as WithRenderValue,Y as WithRenderValueAsReactNode,w as WithResetButton,ee as WithResetButtonEmptyInitial,te as WithResetButtonNonEmptyInitial,I as WithSorting,K as WithStaticValues,P as WithTitleAndIcon,xi as __namedExportsOrder,Ni as default};
