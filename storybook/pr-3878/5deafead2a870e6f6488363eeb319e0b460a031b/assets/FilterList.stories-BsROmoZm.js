import{f as Zt,j as e,r as o}from"./iframe-BoMYVZ8P.js";import{F as s}from"./filter-list-DDkDofV7.js";import{O as Ht}from"./object-table-Co3y61KL.js";import{E as l}from"./Employee-BAk2o20h.js";import{u as ie}from"./useOsdkClient-C2JlPVLC.js";import{g as se}from"./getFilterLabel-BXk-dgA4.js";import"./preload-helper-BK2UTj0g.js";import"./MultiColumnSortDialog-k7xUY6Eq.js";import"./DraggableList-Cnf7C36G.js";import"./svgIconContainer-BVTvLC-e.js";import"./index-CWGS1jbk.js";import"./search-DXLrUQjP.js";import"./Input-BTERu37S.js";import"./useBaseUiId-B21DQZ5t.js";import"./useControlled-5CvF-qs0.js";import"./index-BhWLpeRw.js";import"./index-ClsDrsL5.js";import"./Button-B6yMNcTW.js";import"./small-cross-BlU6xsJJ.js";import"./ActionButton-BBxv047F.js";import"./Dialog-dGxgbeh7.js";import"./cross-C8gHFhcw.js";import"./InternalBackdrop-B8fkQuwz.js";import"./composite-KNqjoGAg.js";import"./index-BUL6qdYX.js";import"./MenuTrigger-C5KjlB94.js";import"./CompositeItem-Dh_pkc7t.js";import"./ToolbarRootContext-vNggTixJ.js";import"./getDisabledMountTransitionStyles-2namnzPQ.js";import"./getPseudoElementBounds-CjFtrMwo.js";import"./withOsdkMetrics-DqIIQvI6.js";import"./Table-XGt5dfzF.js";import"./useEventCallback-CE7eeu8C.js";import"./SkeletonBar-Dv0Y2UuW.js";import"./LoadingCell-DFwTonfQ.js";import"./ColumnConfigDialog-Ck894DdU.js";import"./Checkbox-f9_0ybPg.js";import"./useValueChanged-ZQkTxx0f.js";import"./CollapsiblePanel-DyxxtPmZ.js";import"./chevron-down-xbPqDJA1.js";import"./index-XV4DS-Dv.js";import"./error-6dVeQLZ0.js";import"./BaseCbacBanner-9RL_iOqo.js";import"./makeExternalStore-DnUcW7Zh.js";import"./Tooltip-DmCHNO1q.js";import"./PopoverPopup-Cj48muFO.js";import"./debounce-CQ_hqDhi.js";import"./tick-Ci6gbHCk.js";import"./DropdownField-B_NajMDf.js";import"./isEqual-DBIn-C9s.js";import"./Switch-DmKD8XV0.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";const{expect:T,fn:b,userEvent:R,waitFor:L,within:Ut}=__STORYBOOK_MODULE_TEST__,v={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},oe={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},Xt={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},Kt={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},clickToFilter:!0,formatDate:t=>t.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})},re={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},clickToFilter:!0},A={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},le={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},h=[v,oe,Xt,Kt,le,re,A],p={width:320,height:600},C={display:"flex",gap:16},S={flex:1},g={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},qt={display:"flex",gap:16,height:600},Jt={width:320,flexShrink:0},zt=e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),Yi={title:"Components/FilterList",component:s,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,onFilterClauseChanged:b(),onFilterStateChanged:b(),onFilterAdded:b(),onFilterRemoved:b(),onFilterVisibilityChange:b(),onCollapsedChange:b(),onReset:b()},parameters:{msw:{handlers:[...Zt.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},onFilterClauseChanged:{description:"Called whenever the filter clause changes. FilterList owns filter state; this is how you read it out.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},enableCollapse:{description:"Whether the collapse/expand control is available. When false the panel is always expanded.",control:"boolean",table:{defaultValue:{summary:"true"}}},collapsed:{description:"Controlled mode. Source of truth for the collapsed state; takes precedence over defaultCollapsed.",control:"boolean"},defaultCollapsed:{description:"Uncontrolled mode. Seeds the initial collapsed state; the component owns it after mount.",control:"boolean",table:{defaultValue:{summary:"false"}}},onCollapsedChange:{description:"Called whenever the collapsed state changes, in both modes. An event listener — it neither controls the state nor enables the control.",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Fires after a filter is shown from the built-in Add filter popover.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Fires after a filter's remove button is clicked, once the filter is hidden and its state cleared.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Fires when filters are reordered, added or removed via the built-in controls, or reset. Visible filters first in display order, then hidden.",control:!1,table:{category:"Events"}},addFilterMode:{description:"Deprecated — going away; visibility will always be managed internally. Seed it with isVisible on each definition and observe changes with onFilterVisibilityChange.",control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},initialFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},D={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const r=o.useMemo(()=>[v,A],[]);return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:r,...i})})}},M={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."},source:{code:`<FilterList
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
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const r=o.useMemo(()=>[re],[]);return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:r,...i})})}};function en(t){const n=ie(),i=o.useMemo(()=>n(l).where({department:"Marketing"}),[n]),r=o.useMemo(()=>[oe,A],[]);return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,objectSet:i,filterDefinitions:r,...t})})}const j={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:t=>e.jsx(en,{...t})};function tn(t){const n=o.useMemo(()=>[v,oe,{...Xt,isVisible:!1},{...Kt,isVisible:!1},{...re,isVisible:!1},{...A,isVisible:!1}],[]);return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:n,addFilterMode:"uncontrolled",...t})})}const k={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(tn,{...t})};function nn(t){const[n,i]=o.useState(void 0),r=t.onFilterClauseChanged,a=o.useCallback(c=>{i(c),r==null||r(c)},[r]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:h,...t,onFilterClauseChanged:a})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:g,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const O={parameters:{docs:{description:{story:"All filter component types, with the emitted where clause shown as JSON. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(nn,{...t})},w={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:h,titleIcon:zt,...i})})};function rn(t){const n=t.onReset,i=o.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:h,...t,onReset:i})})}const P={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:t=>e.jsx(rn,{...t})},_={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:h,...i})})},N={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:h,...i})})};function on(t){return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:h,...t})})}const I={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the panel. Collapse is available by default and uncontrolled here — no state wiring required. Active filter count is shown in the collapsed state."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  showActiveFilterCount={true}
/>`}}},render:t=>e.jsx(on,{...t})};function ln(t){const[n,i]=o.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start"},children:[e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:h,...t,collapsed:n,onCollapsedChange:i})}),e.jsx("button",{type:"button",onClick:()=>i(r=>!r),children:n?"Expand from outside":"Collapse from outside"})]})}const x={args:{title:"Employee Filters"},parameters:{docs:{description:{story:"Controlled mode: `collapsed` is the source of truth, so the panel only moves when the caller re-renders with a new value. The external button drives the same state as the header control."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
/>`}}},render:t=>e.jsx(ln,{...t})},V={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:t,objectSet:n,...i})=>{const r=o.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},v,A],[]);return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:r,...i})})}};function an(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),i=o.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:i,...t})})]})}const B={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(an,{...t})},$t={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function sn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]),i=o.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:r=>$t[r]??r},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:r=>r.toUpperCase()}],[]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:i,...t})})]})}const Y={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(sn,{...t})},cn={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},pn={display:"inline-flex",alignItems:"center",gap:8},dn={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function un({value:t}){const n=cn[t]??"#94a3b8";return e.jsxs("span",{style:pn,children:[e.jsx("span",{style:{...dn,background:n}}),e.jsx("span",{children:$t[t]??t})]})}function mn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},renderValue:i=>e.jsx(un,{value:i})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},renderValue:i=>e.jsx("a",{href:`#/team/${encodeURIComponent(i)}`,onClick:r=>r.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:i})}],[]);return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})})}const G={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(mn,{...t})};function yn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"full"}}],[]),i=o.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"count"}}],[]),r=o.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}}],[]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:i,...t})}),e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:r,...t})})]})}const W={parameters:{docs:{source:{code:`// listogramConfig.displayMode controls what each bucket row renders:
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
</div>`}}},render:t=>e.jsx(yn,{...t})};function fn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}}],[]),i=o.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]},showCount:!1}],[]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:i,...t})})]})}const H={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(fn,{...t})};function Tn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}}],[]);return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})})}const U={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:t=>e.jsx(Tn,{...t}),play:async({canvasElement:t})=>{const n=Ut(t),i=["Engineering","Marketing","Design","Data","Finance"],r=()=>n.getAllByRole("button",{name:/^(Engineering|Marketing|Design|Data|Finance)\s+\d+/u}).map(a=>{const c=i.find(d=>{var u;return(u=a.textContent)==null?void 0:u.includes(d)});if(c==null)throw new Error(`Unable to identify department row from "${a.textContent}"`);return c});await n.findByRole("button",{name:"Marketing 4"}),await T(r()).toEqual(i),await R.click(n.getByRole("button",{name:"Marketing 4"})),await L(()=>T(n.getByRole("button",{name:"Marketing 4"})).toHaveAttribute("aria-pressed","true")),await T(r()).toEqual(i),await R.click(n.getByRole("button",{name:"Marketing 4"})),await L(()=>T(n.getByRole("button",{name:"Marketing 4"})).toHaveAttribute("aria-pressed","false")),await T(r()).toEqual(i)}};function hn(t){const n=o.useMemo(()=>[{type:"PROPERTY",id:"department-below-fold",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:["Sales"]}}],[]);return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})})}const X={parameters:{docs:{description:{story:'A selected value that sorts below the collapsed fold stays visible, appended at the tail of the collapsed view rather than hoisted to the top. The "View all" toggle reveals the rest, and "View less" collapses back to this state.'},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: ["Sales"] } },
  ]}
/>`}}},render:t=>e.jsx(hn,{...t}),play:async({canvasElement:t})=>{const n=Ut(t),i=["Engineering","Marketing","Design","Data","Finance","Operations","People","Sales","Customer Success","Legal","Product"],r=/^(Engineering|Marketing|Design|Data|Finance|Operations|People|Sales|Customer Success|Legal|Product)\s+\d+/u,a=()=>n.getAllByRole("button",{name:r}).map(u=>{const y=i.find(m=>{var f;return(f=u.textContent)==null?void 0:f.includes(m)});if(y==null)throw new Error(`Unable to identify department row from "${u.textContent}"`);return y}),c=["Engineering","Marketing","Design","Data","Finance","Sales"],d=["Engineering","Marketing","Design","Data","Finance"];await n.findByRole("button",{name:"Marketing 4"}),await T(a()).toEqual(c),await T(n.getByRole("button",{name:"Sales 2"})).toHaveAttribute("aria-pressed","true"),await R.click(n.getByRole("button",{name:"Sales 2"})),await L(()=>T(a()).toEqual(d)),await T(n.queryByRole("button",{name:"Sales 2"})).toBeNull(),await R.click(n.getByRole("button",{name:/^View all \(\d+\)/u})),await n.findByRole("button",{name:"View less"}),await R.click(n.getByRole("button",{name:"Sales 2"})),await L(()=>T(n.getByRole("button",{name:"Sales 2"})).toHaveAttribute("aria-pressed","true")),await R.click(n.getByRole("button",{name:"View less"})),await n.findByRole("button",{name:/^View all \(\d+\)/u}),await T(n.queryByRole("button",{name:"View less"})).toBeNull(),await L(()=>T(a()).toEqual(c))}};function Cn(t){const[n,i]=o.useState(h),r=t.onFilterRemoved,a=o.useCallback(c=>{i(d=>d.filter(u=>"key"in u?u.key!==c:!0)),r==null||r(c)},[r]);return e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t,onFilterRemoved:a})})}const K={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:t=>e.jsx(Cn,{...t})};function En(t){const[n,i]=o.useState(void 0),r=o.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"],filterState:{type:"SELECT",selectedValues:[]}},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],filterState:{type:"EXACT_MATCH",values:[]},listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const u=d.values,y=u.includes("Active"),m=u.includes("Inactive");if(y&&m)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(y)return{employeeStatus:"Active"};if(m)return{employeeStatus:"Inactive"}}}],[]),a=t.onFilterClauseChanged,c=o.useCallback(d=>{i(d),a==null||a(d)},[a]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:r,...t,onFilterClauseChanged:c})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:g,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const q={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(En,{...t})};function Sn(t){const[n,i]=o.useState(void 0),[r,a]=o.useState(h),c=t.onFilterRemoved,d=o.useCallback(E=>{a(F=>F.filter(ae=>"key"in ae?ae.key!==E:!0)),c==null||c(E)},[c]),u=t.onReset,y=o.useCallback(()=>{a(h),u==null||u()},[u]),m=t.onFilterClauseChanged,f=o.useCallback(E=>{i(E),m==null||m(E)},[m]);return e.jsxs("div",{style:qt,children:[e.jsx("div",{style:Jt,children:e.jsx(s,{objectType:l,filterDefinitions:r,titleIcon:zt,...t,onReset:y,onFilterRemoved:d,onFilterClauseChanged:f})}),e.jsx("div",{style:S,children:e.jsx(Ht,{objectType:l,filter:n})})]})}const J={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and the emitted where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  title="Employee Filters"
  titleIcon={<FilterIcon />}
  showResetButton={true}
  showActiveFilterCount={true}
  onReset={handleReset}
  onFilterRemoved={handleFilterRemoved}
  enableSorting={true}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(Sn,{...t})};function bn(t){const n=ie(),i=o.useMemo(()=>n(l),[n]),[r,a]=o.useState(void 0),c=o.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager",filterState:{type:"hasLink",hasLink:!1}},{type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",filterComponent:"MULTI_SELECT",defaultFilterState:{type:"SELECT",selectedValues:[]},label:"Manager Department"}],[]),d=t.onFilterClauseChanged,u=o.useCallback(y=>{a(y),d==null||d(y)},[d]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,objectSet:i,filterDefinitions:c,...t,onFilterClauseChanged:u})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("p",{children:"Note: LINKED_PROPERTY filter is not applied through where clause"}),e.jsx("pre",{style:g,children:r?JSON.stringify(r,null,2):"(no active filters)"})]})]})}const z={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. LINKED_PROPERTY filters on a property of the linked object and exposes the same overflow (…) controls as direct property filters — the inline Keeping/Excluding dropdown and Clear all."},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
    filterComponent: "MULTI_SELECT",
    defaultFilterState: { type: "SELECT", selectedValues: [] },
    label: "Manager Department",
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(bn,{...t})},gn={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]}},vn={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},Rn={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"fullName",filterComponent:"MULTI_SELECT",defaultFilterState:{type:"SELECT",selectedValues:[]},searchField:!1,label:"Manager Name"},Ln=[Rn,gn,vn],An=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"rdp",id:"managerName",creator:t=>t.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager Name",renderCell:t=>"managerName"in t?e.jsx("span",{children:t.managerName}):e.jsx("span",{style:{color:"#999"},children:"No Manager"})}];function Fn(t){const n=ie(),i=o.useMemo(()=>n(l),[n]),[r,a]=o.useState(i);return e.jsxs("div",{style:qt,children:[e.jsx("div",{style:Jt,children:e.jsx(s,{...t,objectType:l,objectSet:i,filterDefinitions:Ln,onFilterClauseChanged:t.onFilterClauseChanged,onEffectiveObjectSet:a,showFilteredOutValues:!0})}),e.jsx("div",{style:S,children:e.jsx(Ht,{objectType:l,objectSet:r,columnDefinitions:An})})]})}const $={name:"Combined with Object Table",parameters:{docs:{description:{story:'A linked filter (Manager Name) and direct property filters coexist in one FilterList alongside an ObjectTable. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. The table surfaces the linked manager via a derived-property `Manager Name` column (`pivotTo("lead").selectProperty("fullName")`). With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows.'},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
const [effectiveObjectSet, setEffectiveObjectSet] = useState(baseObjectSet);

const filterDefinitions: FilterDefinitionUnion<Employee>[] = [
  {
    type: "LINKED_PROPERTY",
    id: "combined-lead-name",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "fullName",
    filterComponent: "MULTI_SELECT",
    defaultFilterState: { type: "SELECT", selectedValues: [] },
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
  onEffectiveObjectSet={setEffectiveObjectSet}
  showFilteredOutValues
/>
<ObjectTable
  objectType={Employee}
  objectSet={effectiveObjectSet}
  columnDefinitions={columnDefinitions}
/>`}}},render:t=>e.jsx(Fn,{...t})};function Dn({filterState:t,onFilterStateChanged:n}){const i=o.useCallback(a=>{const c=a.target.value;n({type:"custom",customState:{value:c}})},[n]),r=o.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return e.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",value:t.customState.value,onChange:i,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),t.customState.value&&e.jsx("button",{onClick:r,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function Mn(t){const[n,i]=o.useState(void 0),r=o.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",filterState:{type:"custom",customState:{value:""}},renderInput:({filterState:d,onFilterStateChanged:u})=>e.jsx(Dn,{filterState:d,onFilterStateChanged:u}),toWhereClause:d=>{var y;const u=(y=d.customState)==null?void 0:y.value;if(u)return{fullName:{$containsAnyTerm:u}}}}],[]),a=t.onFilterClauseChanged,c=o.useCallback(d=>{i(d),a==null||a(d)},[a]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:r,...t,onFilterClauseChanged:c})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:g,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Q={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(Mn,{...t})},jn={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},kn={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},On=[v,jn,kn,re],Z={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."},source:{code:`// Empty/null values render via <NoValueLabel /> across every filter type.
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
/>`}}},render:()=>e.jsx("div",{style:p,children:e.jsx(s,{objectType:l,filterDefinitions:On})})},wn={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT",filterState:{type:"SELECT",selectedValues:[]}},Pn={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"department",filterComponent:"MULTI_SELECT",defaultFilterState:{type:"SELECT",selectedValues:[]},label:"Manager Department (linked multi)"},_n={type:"LINKED_PROPERTY",linkName:"lead",reverseLinkName:"peeps",linkedPropertyKey:"locationCity",filterComponent:"SINGLE_SELECT",defaultFilterState:{type:"SELECT",selectedValues:[]},label:"Manager City (linked single)"},Nn=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}]]),In=[v,le,wn,Pn,_n];function xn(t){const n=ie(),i=o.useMemo(()=>n(l),[n]),[r,a]=o.useState(void 0),c=o.useCallback(d=>{a(d)},[]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:p,children:e.jsx(s,{...t,objectType:l,objectSet:i,filterDefinitions:In,initialFilterStates:Nn,onFilterClauseChanged:c})}),e.jsxs("div",{style:S,children:[e.jsx("h4",{children:"Active where clause"}),e.jsx("pre",{style:g,children:r?JSON.stringify(r,null,2):"(none)"})]})]})}const ee={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:t=>e.jsx(xn,{...t})},ce=[v,le],Vn=new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Software Engineer"]}]]);function pe(t){const n=[...t.keys()].sort(),i={};for(const r of n){const a=t.get(r);a!==void 0&&(i[r]=a)}return JSON.stringify(i,null,2)}function Qt({initialFilterStates:t,storyArgs:n}){const i=o.useMemo(()=>{const m=new Map;for(const f of ce)f.type==="PROPERTY"&&f.filterState&&m.set(se(f),f.filterState);if(t)for(const[f,E]of t)m.set(f,E);return m},[t]),[r,a]=o.useState(()=>new Map(i)),c=n.onFilterStateChanged,d=o.useCallback((m,f)=>{a(E=>{const F=new Map(E);return F.set(se(m),f),F}),c==null||c(m,f)},[c]),u=n.onReset,y=o.useCallback(()=>{a(new Map(i)),u==null||u()},[u,i]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:p,children:e.jsx(s,{...n,objectType:l,filterDefinitions:ce,initialFilterStates:t,showResetButton:!0,onFilterStateChanged:d,onReset:y})}),e.jsxs("div",{style:S,children:[e.jsx("h4",{children:"Filter state dump"}),e.jsx("pre",{"data-testid":"filter-state-dump",style:g,children:pe(r)}),e.jsx("h4",{children:"Initial snapshot"}),e.jsx("pre",{"data-testid":"filter-state-initial",style:g,children:pe(i)})]})]})}function Bn(t){return e.jsx(Qt,{storyArgs:t})}const te={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button is disabled-by-default until the user diverges from the initial (empty string) snapshot. After clicking reset the filter state returns to the initial snapshot and the button disables itself again."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`}}},render:t=>e.jsx(Bn,{...t})};function Yn(t){return e.jsx(Qt,{storyArgs:t,initialFilterStates:Vn})}const ne={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button stays disabled on mount even though there are active selections, because the live filter state matches the initial snapshot. Changing a selection enables the button; clicking it restores the initial snapshot, not an empty state."},source:{code:`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  showResetButton={true}
/>`}}},render:t=>e.jsx(Yn,{...t})};var de,ue,me;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ye,fe,Te;M.parameters={...M.parameters,docs:{...(ye=M.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Te=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var he,Ce,Ee;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ee=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var Se,be,ge;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ge=(be=k.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ve,Re,Le;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "All filter component types, with the emitted where clause shown as JSON. " + "Hover filter items to reveal search and exclude actions."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithAllFilterTypesStory {...args} />
}`,...(Le=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var Ae,Fe,De;w.parameters={...w.parameters,docs:{...(Ae=w.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(De=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:De.source}}};var Me,je,ke;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(ke=(je=P.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Oe,we,Pe;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Pe=(we=_.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};var _e,Ne,Ie;N.parameters={...N.parameters,docs:{...(_e=N.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ie=(Ne=N.parameters)==null?void 0:Ne.docs)==null?void 0:Ie.source}}};var xe,Ve,Be;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    title: "Employee Filters",
    showActiveFilterCount: true
  },
  parameters: {
    docs: {
      description: {
        story: "Click the collapse button to minimize the panel. Collapse is " + "available by default and uncontrolled here — no state wiring " + "required. Active filter count is shown in the collapsed state."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  showActiveFilterCount={true}
/>\`
      }
    }
  },
  render: args => <CollapsiblePanelStory {...args} />
}`,...(Be=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:Be.source}}};var Ye,Ge,We;x.parameters={...x.parameters,docs:{...(Ye=x.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    title: "Employee Filters"
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled mode: \`collapsed\` is the source of truth, so the panel " + "only moves when the caller re-renders with a new value. The " + "external button drives the same state as the header control."
      },
      source: {
        code: \`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
/>\`
      }
    }
  },
  render: args => <ControlledCollapseStory {...args} />
}`,...(We=(Ge=x.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var He,Ue,Xe;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Xe=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ke,qe,Je;B.parameters={...B.parameters,docs:{...(Ke=B.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Je=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:Je.source}}};var ze,$e,Qe;Y.parameters={...Y.parameters,docs:{...(ze=Y.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Qe=($e=Y.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source}}};var Ze,et,tt;G.parameters={...G.parameters,docs:{...(Ze=G.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=G.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,it,rt;W.parameters={...W.parameters,docs:{...(nt=W.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(rt=(it=W.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var ot,lt,at;H.parameters={...H.parameters,docs:{...(ot=H.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(at=(lt=H.parameters)==null?void 0:lt.docs)==null?void 0:at.source}}};var st,ct,pt;U.parameters={...U.parameters,docs:{...(st=U.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(pt=(ct=U.parameters)==null?void 0:ct.docs)==null?void 0:pt.source}}};var dt,ut,mt;X.parameters={...X.parameters,docs:{...(dt=X.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(ut=X.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var yt,ft,Tt;K.parameters={...K.parameters,docs:{...(yt=K.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(Tt=(ft=K.parameters)==null?void 0:ft.docs)==null?void 0:Tt.source}}};var ht,Ct,Et;q.parameters={...q.parameters,docs:{...(ht=q.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithStaticValuesStory {...args} />
}`,...(Et=(Ct=q.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var St,bt,gt;J.parameters={...J.parameters,docs:{...(St=J.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
        story: "Demonstrates all filter list features together: collapse, reset, active count, sorting, " + "removable filters, per-filter search, exclude toggle, and the emitted where clause " + "driving an ObjectTable."
      },
      source: {
        code: \`// All features combined: collapse, sort, search, exclude, remove, reset

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  title="Employee Filters"
  titleIcon={<FilterIcon />}
  showResetButton={true}
  showActiveFilterCount={true}
  onReset={handleReset}
  onFilterRemoved={handleFilterRemoved}
  enableSorting={true}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <FullFeaturedStory {...args} />
}`,...(gt=(bt=J.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};var vt,Rt,Lt;z.parameters={...z.parameters,docs:{...(vt=z.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
    filterComponent: "MULTI_SELECT",
    defaultFilterState: { type: "SELECT", selectedValues: [] },
    label: "Manager Department",
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithLinkedPropertyFiltersStory {...args} />
}`,...(Lt=(Rt=z.parameters)==null?void 0:Rt.docs)==null?void 0:Lt.source}}};var At,Ft,Dt;$.parameters={...$.parameters,docs:{...(At=$.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
    filterComponent: "MULTI_SELECT",
    defaultFilterState: { type: "SELECT", selectedValues: [] },
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
}`,...(Dt=(Ft=$.parameters)==null?void 0:Ft.docs)==null?void 0:Dt.source}}};var Mt,jt,kt;Q.parameters={...Q.parameters,docs:{...(Mt=Q.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
  onFilterClauseChanged={setFilterClause}
/>\`
      }
    }
  },
  render: args => <WithCustomFiltersStory {...args} />
}`,...(kt=(jt=Q.parameters)==null?void 0:jt.docs)==null?void 0:kt.source}}};var Ot,wt,Pt;Z.parameters={...Z.parameters,docs:{...(Ot=Z.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Pt=(wt=Z.parameters)==null?void 0:wt.docs)==null?void 0:Pt.source}}};var _t,Nt,It;ee.parameters={...ee.parameters,docs:{...(_t=ee.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(It=(Nt=ee.parameters)==null?void 0:Nt.docs)==null?void 0:It.source}}};var xt,Vt,Bt;te.parameters={...te.parameters,docs:{...(xt=te.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Bt=(Vt=te.parameters)==null?void 0:Vt.docs)==null?void 0:Bt.source}}};var Yt,Gt,Wt;ne.parameters={...ne.parameters,docs:{...(Yt=ne.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Wt=(Gt=ne.parameters)==null?void 0:Gt.docs)==null?void 0:Wt.source}}};const Gi=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","ControlledCollapse","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","WithBelowFoldSelection","WithRemovableFilters","WithStaticValues","FullFeatured","WithLinkedPropertyFilters","CombinedWithObjectTable","WithCustomFilters","NoValueRendering","WithInitialFilterStates","WithResetButtonEmptyInitial","WithResetButtonNonEmptyInitial"];export{k as AddFilterMode,I as CollapsiblePanel,$ as CombinedWithObjectTable,x as ControlledCollapse,D as Default,J as FullFeatured,M as IntegerNumberRangeRounding,V as KeywordSearch,Z as NoValueRendering,_ as WithActiveFilterCount,O as WithAllFilterTypes,X as WithBelowFoldSelection,U as WithCheckbox,B as WithColorMap,Q as WithCustomFilters,H as WithHiddenCounts,ee as WithInitialFilterStates,z as WithLinkedPropertyFilters,W as WithListogramDisplayModes,j as WithObjectSet,K as WithRemovableFilters,Y as WithRenderValue,G as WithRenderValueAsReactNode,P as WithResetButton,te as WithResetButtonEmptyInitial,ne as WithResetButtonNonEmptyInitial,N as WithSorting,q as WithStaticValues,w as WithTitleAndIcon,Gi as __namedExportsOrder,Yi as default};
