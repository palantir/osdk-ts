import{f as dn,j as e,r}from"./iframe-BIgcXSDZ.js";import{F as l}from"./filter-list-C8KQsh6S.js";import{O as en}from"./object-table-_RywpXF4.js";import{E as a}from"./Employee-BAk2o20h.js";import{u as L}from"./useOsdkClient-DHZTS1gO.js";import{g as pe}from"./getFilterLabel-Cp55Dfri.js";import"./preload-helper-I7b_Ch73.js";import"./MultiColumnSortDialog-XQQGQuR1.js";import"./DraggableList-CAh5UQ6G.js";import"./svgIconContainer-CenQjbw3.js";import"./index-DM8zfWsc.js";import"./search-BW9tAKbE.js";import"./Input-eEwOcgZF.js";import"./useBaseUiId-DcQenqe4.js";import"./useControlled-BZIw4uYt.js";import"./index-CQ7oQ3AC.js";import"./index-CiZKwyh5.js";import"./Button-DFsV6Wzt.js";import"./small-cross-BPNqh88V.js";import"./ActionButton-BNjzCZrh.js";import"./Dialog-DykK4055.js";import"./cross-2eC_maeE.js";import"./InternalBackdrop-yc5qSodQ.js";import"./composite-3NX-rf4m.js";import"./index-8J_dNII4.js";import"./MenuTrigger-CJeh0sRw.js";import"./CompositeItem-AZoCKB1T.js";import"./ToolbarRootContext-DU0Y7qe6.js";import"./getDisabledMountTransitionStyles-CUA0J2Ai.js";import"./getPseudoElementBounds-CWCGnWko.js";import"./withOsdkMetrics-CSD8F9fY.js";import"./Table-DotfhjQY.js";import"./useEventCallback-B1L0skHy.js";import"./SkeletonBar-br23o8HZ.js";import"./LoadingCell-BOT6J6jL.js";import"./ColumnConfigDialog-DzugBcZL.js";import"./Checkbox-B1KgIEsw.js";import"./useValueChanged-Dm5GnS4m.js";import"./CollapsiblePanel-CoeryTM7.js";import"./chevron-down-DaVoXduB.js";import"./index-Co6Wvvdj.js";import"./error-DVtZos_5.js";import"./BaseCbacBanner-CETulZJB.js";import"./makeExternalStore-DIX60yxh.js";import"./Tooltip-BCrH7ks-.js";import"./PopoverPopup-re9QpKIm.js";import"./debounce-Bmij6q9M.js";import"./tick-YabvmYPV.js";import"./DropdownField-Bi_mfmqp.js";import"./useDebouncedCallback-CuViuzMQ.js";import"./Switch-ivKe15sR.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";const{expect:h,fn:E,userEvent:R,waitFor:F,within:tn}=__STORYBOOK_MODULE_TEST__,v={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM"},le={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM"},nn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT"},on={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",clickToFilter:!0,formatDate:t=>t.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})},ae={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",clickToFilter:!0},j={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM"},se={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT"},C=[v,le,nn,on,se,ae,j],d={width:320,height:600},b={display:"flex",gap:16},g={flex:1},T={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},rn={display:"flex",gap:16,height:600},an={width:320,flexShrink:0},sn=e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),oo={title:"Components/FilterList",component:l,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,onFilterClauseChanged:E(),onFilterStateChanged:E(),onFilterChanged:E(),onFilterAdded:E(),onFilterRemoved:E(),onFilterVisibilityChange:E(),onCollapsedChange:E(),onReset:E()},parameters:{msw:{handlers:[...dn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},onFilterClauseChanged:{description:"Called whenever the filter clause changes. FilterList owns filter state; this is how you read it out.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},enableCollapse:{description:"Whether the collapse/expand control is available. When false the panel is always expanded.",control:"boolean",table:{defaultValue:{summary:"true"}}},collapsed:{description:"Controlled mode. Source of truth for the collapsed state; takes precedence over defaultCollapsed.",control:"boolean"},defaultCollapsed:{description:"Uncontrolled mode. Seeds the initial collapsed state; the component owns it after mount.",control:"boolean",table:{defaultValue:{summary:"false"}}},onCollapsedChange:{description:"Called whenever the collapsed state changes, in both modes. An event listener — it neither controls the state nor enables the control.",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Fires after a filter is shown from the built-in Add filter popover.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Fires after a filter's remove button is clicked, once the filter is hidden and its state cleared.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Fires when filters are reordered, added or removed via the built-in controls, or reset. Visible filters first in display order, then hidden.",control:!1,table:{category:"Events"}},addFilterMode:{description:"Deprecated — going away; visibility will always be managed internally. Seed it with isVisible on each definition and observe changes with onFilterVisibilityChange.",control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},defaultFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},w={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
  ]}
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const o=r.useMemo(()=>[v,j],[]);return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:o,...i})})}},k={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "employeeNumber",
      label: "Employee Number",
      filterComponent: "NUMBER_RANGE",
      clickToFilter: true,
    },
  ]}
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const o=r.useMemo(()=>[ae],[]);return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:o,...i})})}};function pn(t){const n=L(),i=r.useMemo(()=>n(a).where({department:"Marketing"}),[n]),o=r.useMemo(()=>[le,j],[]);return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,objectSet:i,filterDefinitions:o,...t})})}const M={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
  ]}
/>`}}},render:t=>e.jsx(pn,{...t})};function un(t){const n=r.useMemo(()=>[v,le,{...nn,isVisible:!1},{...on,isVisible:!1},{...ae,isVisible:!1},{...j,isVisible:!1}],[]);return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:n,addFilterMode:"uncontrolled",...t})})}const O={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
  { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM" },
  { type: "PROPERTY", key: "fullName", label: "Full Name", filterComponent: "CONTAINS_TEXT", isVisible: false },
  { type: "PROPERTY", key: "firstFullTimeStartDate", label: "Start Date", filterComponent: "DATE_RANGE", isVisible: false },
  { type: "PROPERTY", key: "employeeNumber", label: "Employee Number", filterComponent: "NUMBER_RANGE", isVisible: false },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", isVisible: false },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  addFilterMode="uncontrolled"
  showResetButton={true}
/>`}}},render:t=>e.jsx(un,{...t})};function mn(t){const[n,i]=r.useState(void 0),o=t.onFilterClauseChanged,s=r.useCallback(c=>{i(c),o==null||o(c)},[o]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:C,...t,onFilterClauseChanged:s})}),e.jsxs("div",{style:g,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:T,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const A={parameters:{docs:{description:{story:"All filter component types, with the emitted where clause shown as JSON. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(mn,{...t})},P={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:C,titleIcon:sn,...i})})};function fn(t){const n=t.onReset,i=r.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:C,...t,onReset:i})})}const I={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:t=>e.jsx(fn,{...t})},x={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:C,...i})})},N={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:C,...i})})};function yn(t){return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:C,...t})})}const _={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the panel. Collapse is available by default and uncontrolled here — no state wiring required. Active filter count is shown in the collapsed state."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  showActiveFilterCount={true}
/>`}}},render:t=>e.jsx(yn,{...t})};function hn(t){const[n,i]=r.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start"},children:[e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:C,...t,collapsed:n,onCollapsedChange:i})}),e.jsx("button",{type:"button",onClick:()=>i(o=>!o),children:n?"Expand from outside":"Collapse from outside"})]})}const V={args:{title:"Employee Filters"},parameters:{docs:{description:{story:"Controlled mode: `collapsed` is the source of truth, so the panel only moves when the caller re-renders with a new value. The external button drives the same state as the header control."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
/>`}}},render:t=>e.jsx(hn,{...t})},B={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:t,objectSet:n,...i})=>{const o=r.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},v,j],[]);return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:o,...i})})}};function bn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM"}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:i,...t})})]})}const W={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
// With colorMap: each value gets a distinct color for its bar

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    colorMap: {
      Marketing: "#e74c3c",
      Operations: "#2ecc71",
      Finance: "#3498db",
      Product: "#f39c12",
    },
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(bn,{...t})},ln={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Sn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM"}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",renderValue:o=>ln[o]??o},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",renderValue:o=>o.toUpperCase()}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:i,...t})})]})}const Y={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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
    renderValue: (value) => DEPARTMENT_LABELS[value] ?? value,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Sn,{...t})},Cn={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},Tn={display:"inline-flex",alignItems:"center",gap:8},gn={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function En({value:t}){const n=Cn[t]??"#94a3b8";return e.jsxs("span",{style:Tn,children:[e.jsx("span",{style:{...gn,background:n}}),e.jsx("span",{children:ln[t]??t})]})}function vn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",renderValue:i=>e.jsx(En,{value:i})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",renderValue:i=>e.jsx("a",{href:`#/team/${encodeURIComponent(i)}`,onClick:o=>o.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:i})}],[]);return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:n,...t})})}const G={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(vn,{...t})};function Rn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",listogramConfig:{displayMode:"full"}}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",listogramConfig:{displayMode:"count"}}],[]),o=r.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",listogramConfig:{displayMode:"minimal"}}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:i,...t})}),e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:o,...t})})]})}const U={parameters:{docs:{source:{code:`// listogramConfig.displayMode controls what each bucket row renders:
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
      listogramConfig: { displayMode: "minimal" },
    }]}
  />
</div>`}}},render:t=>e.jsx(Rn,{...t})};function Fn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM"},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT"}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",showCount:!1}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:i,...t})})]})}const H={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Fn,{...t})};function Ln(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM"},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM"}],[]);return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:n,...t})})}const K={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM" },
  ]}
/>`}}},render:t=>e.jsx(Ln,{...t}),play:async({canvasElement:t})=>{const n=tn(t),i=["Engineering","Marketing","Design","Data","Finance"],o=()=>n.getAllByRole("button",{name:/^(Engineering|Marketing|Design|Data|Finance)\s+\d+/u}).map(s=>{const c=i.find(p=>{var u;return(u=s.textContent)==null?void 0:u.includes(p)});if(c==null)throw new Error(`Unable to identify department row from "${s.textContent}"`);return c});await n.findByRole("button",{name:"Marketing 4"}),await h(o()).toEqual(i),await R.click(n.getByRole("button",{name:"Marketing 4"})),await F(()=>h(n.getByRole("button",{name:"Marketing 4"})).toHaveAttribute("aria-pressed","true")),await h(o()).toEqual(i),await R.click(n.getByRole("button",{name:"Marketing 4"})),await F(()=>h(n.getByRole("button",{name:"Marketing 4"})).toHaveAttribute("aria-pressed","false")),await h(o()).toEqual(i)}};function jn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-below-fold",key:"department",label:"Department",filterComponent:"LISTOGRAM",defaultFilterState:{type:"EXACT_MATCH",values:["Sales"]}}],[]);return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:n,...t})})}const X={parameters:{docs:{description:{story:'A selected value that sorts below the collapsed fold stays visible, appended at the tail of the collapsed view rather than hoisted to the top. The "View all" toggle reveals the rest, and "View less" collapses back to this state.'},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", defaultFilterState: { type: "EXACT_MATCH", values: ["Sales"] } },
  ]}
/>`}}},render:t=>e.jsx(jn,{...t}),play:async({canvasElement:t})=>{const n=tn(t),i=["Engineering","Marketing","Design","Data","Finance","Operations","People","Sales","Customer Success","Legal","Product"],o=/^(Engineering|Marketing|Design|Data|Finance|Operations|People|Sales|Customer Success|Legal|Product)\s+\d+/u,s=()=>n.getAllByRole("button",{name:o}).map(u=>{const y=i.find(f=>{var m;return(m=u.textContent)==null?void 0:m.includes(f)});if(y==null)throw new Error(`Unable to identify department row from "${u.textContent}"`);return y}),c=["Engineering","Marketing","Design","Data","Finance","Sales"],p=["Engineering","Marketing","Design","Data","Finance"];await n.findByRole("button",{name:"Marketing 4"}),await h(s()).toEqual(c),await h(n.getByRole("button",{name:"Sales 2"})).toHaveAttribute("aria-pressed","true"),await R.click(n.getByRole("button",{name:"Sales 2"})),await F(()=>h(s()).toEqual(p)),await h(n.queryByRole("button",{name:"Sales 2"})).toBeNull(),await R.click(n.getByRole("button",{name:/^View all \(\d+\)/u})),await n.findByRole("button",{name:"View less"}),await R.click(n.getByRole("button",{name:"Sales 2"})),await F(()=>h(n.getByRole("button",{name:"Sales 2"})).toHaveAttribute("aria-pressed","true")),await R.click(n.getByRole("button",{name:"View less"})),await n.findByRole("button",{name:/^View all \(\d+\)/u}),await h(n.queryByRole("button",{name:"View less"})).toBeNull(),await F(()=>h(s()).toEqual(c))}};function Dn(t){const[n,i]=r.useState(C),o=t.onFilterRemoved,s=r.useCallback(c=>{i(p=>p.filter(u=>"key"in u?u.key!==c:!0)),o==null||o(c)},[o]);return e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:n,...t,onFilterRemoved:s})})}const J={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:t=>e.jsx(Dn,{...t})};function wn(t){const[n,i]=r.useState(void 0),o=r.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"]},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"]},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],listogramConfig:{displayMode:"minimal"},toWhereClause:p=>{if(p.type!=="EXACT_MATCH"||p.values.length===0)return;const u=p.values,y=u.includes("Active"),f=u.includes("Inactive");if(y&&f)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(y)return{employeeStatus:"Active"};if(f)return{employeeStatus:"Inactive"}}}],[]),s=t.onFilterClauseChanged,c=r.useCallback(p=>{i(p),s==null||s(p)},[s]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:o,...t,onFilterClauseChanged:c})}),e.jsxs("div",{style:g,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:T,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const q={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
  {
    type: "STATIC_VALUES",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    values: ["Marketing", "Operations", "Finance", "Product"],
    listogramConfig: { displayMode: "minimal" },
  },
  {
    type: "STATIC_VALUES",
    key: "locationCity",
    label: "Office Location",
    filterComponent: "SINGLE_SELECT",
    values: ["New York", "San Francisco", "London", "Tokyo"],
  },
  {
    type: "STATIC_VALUES",
    key: "team",
    label: "Team",
    filterComponent: "MULTI_SELECT",
    values: ["Alpha", "Beta", "Gamma", "Delta"],
  },
  {
    type: "STATIC_VALUES",
    key: "status",
    label: "Status",
    filterComponent: "LISTOGRAM",
    values: ["Active", "Inactive"],
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
/>`}}},render:t=>e.jsx(wn,{...t})};function kn(t){const[n,i]=r.useState(void 0),[o,s]=r.useState(C),c=t.onFilterRemoved,p=r.useCallback(S=>{s(D=>D.filter(de=>"key"in de?de.key!==S:!0)),c==null||c(S)},[c]),u=t.onReset,y=r.useCallback(()=>{s(C),u==null||u()},[u]),f=t.onFilterClauseChanged,m=r.useCallback(S=>{i(S),f==null||f(S)},[f]);return e.jsxs("div",{style:rn,children:[e.jsx("div",{style:an,children:e.jsx(l,{objectType:a,filterDefinitions:o,titleIcon:sn,...t,onReset:y,onFilterRemoved:p,onFilterClauseChanged:m})}),e.jsx("div",{style:g,children:e.jsx(en,{objectType:a,filter:n})})]})}const z={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and the emitted where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:t=>e.jsx(kn,{...t})};function Mn(t){const n=L(),i=r.useMemo(()=>n(a),[n]),[o,s]=r.useState(void 0),c=r.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager"},{type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"department",filterComponent:"MULTI_SELECT",label:"Manager Department"}],[]),p=t.onFilterClauseChanged,u=r.useCallback(y=>{s(y),p==null||p(y)},[p]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,objectSet:i,filterDefinitions:c,...t,onFilterClauseChanged:u})}),e.jsxs("div",{style:g,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("p",{children:"Note: HAS_LINK and LINKED_PROPERTY filters do not appear in the clause"}),e.jsx("pre",{style:T,children:o?JSON.stringify(o,null,2):"(no active filters)"})]})]})}const $={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. LINKED_PROPERTY filters on a property of the linked object and exposes the same overflow (…) controls as direct property filters — the inline Keeping/Excluding dropdown and Clear all."},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
const filterDefinitions = [
  {
    type: "HAS_LINK",
    linkName: "lead",
    label: "Has Manager",
  },
  {
    type: "LINKED_PROPERTY",
    linkName: "lead",
    linkedPropertyKey: "department",
    filterComponent: "MULTI_SELECT",
    label: "Manager Department",
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(Mn,{...t})},On={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM"},An={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT"},Pn={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",linkedPropertyKey:"fullName",filterComponent:"MULTI_SELECT",searchField:!1,label:"Manager Name"},In=[Pn,On,An],xn=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"rdp",id:"managerName",creator:t=>t.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager Name",renderCell:t=>"managerName"in t?e.jsx("span",{children:t.managerName}):e.jsx("span",{style:{color:"#999"},children:"No Manager"})}];function Nn(t){const n=L(),i=r.useMemo(()=>n(a),[n]),[o,s]=r.useState(i);return e.jsxs("div",{style:rn,children:[e.jsx("div",{style:an,children:e.jsx(l,{...t,objectType:a,objectSet:i,filterDefinitions:In,onFilterClauseChanged:t.onFilterClauseChanged,onEffectiveObjectSet:s,showFilteredOutValues:!0})}),e.jsx("div",{style:g,children:e.jsx(en,{objectType:a,objectSet:o,columnDefinitions:xn})})]})}const Q={name:"Combined with Object Table",parameters:{docs:{description:{story:'A linked filter (Manager Name) and direct property filters coexist in one FilterList alongside an ObjectTable. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. The table surfaces the linked manager via a derived-property `Manager Name` column (`pivotTo("lead").selectProperty("fullName")`). With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows.'},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
const [effectiveObjectSet, setEffectiveObjectSet] = useState(baseObjectSet);

const filterDefinitions: FilterDefinitionUnion<Employee>[] = [
  {
    type: "LINKED_PROPERTY",
    id: "combined-lead-name",
    linkName: "lead",
    linkedPropertyKey: "fullName",
    filterComponent: "MULTI_SELECT",
    searchField: false,
    label: "Manager Name",
  },
  {
    type: "PROPERTY",
    id: "combined-department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
  },
  {
    type: "PROPERTY",
    id: "combined-locationCity",
    key: "locationCity",
    label: "Location City",
    filterComponent: "MULTI_SELECT",
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
/>`}}},render:t=>e.jsx(Nn,{...t})};function ce({filterState:t,onFilterStateChanged:n}){const i=r.useCallback(s=>{const c=s.target.value;n({type:"custom",customState:{value:c}})},[n]),o=r.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return e.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",value:t.customState.value??"",onChange:i,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),t.customState.value&&e.jsx("button",{onClick:o,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function _n(t){const[n,i]=r.useState(void 0),o=r.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",renderInput:({filterState:p,onFilterStateChanged:u})=>e.jsx(ce,{filterState:p,onFilterStateChanged:u}),toWhereClause:p=>{var y;const u=(y=p.customState)==null?void 0:y.value;if(u)return{fullName:{$containsAnyTerm:u}}}}],[]),s=t.onFilterClauseChanged,c=r.useCallback(p=>{i(p),s==null||s(p)},[s]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:o,...t,onFilterClauseChanged:c})}),e.jsxs("div",{style:g,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:T,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Z={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
const nameContainsFilter = {
  type: "CUSTOM",
  key: "custom-name-contains",
  label: "Name Contains",
  filterComponent: "CUSTOM",
  renderInput: ({ filterState, onFilterStateChanged }) => (
    <input
      type="text"
      value={filterState.customState.value ?? ""}
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
/>`}}},render:t=>e.jsx(_n,{...t})},Vn={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT"},Bn={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT"},Wn=[v,Vn,Bn,ae],ee={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."},source:{code:`// Empty/null values render via <NoValueLabel /> across every filter type.
<FilterList
  objectType={Employee}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "department",
      label: "Department",
      filterComponent: "LISTOGRAM",
    },
    {
      type: "PROPERTY",
      key: "department",
      label: "Department",
      filterComponent: "MULTI_SELECT",
    },
    {
      type: "PROPERTY",
      key: "department",
      label: "Department (single)",
      filterComponent: "SINGLE_SELECT",
    },
    {
      type: "PROPERTY",
      key: "employeeNumber",
      label: "Employee Number",
      filterComponent: "NUMBER_RANGE",
      clickToFilter: true,
    },
  ]}
/>`}}},render:()=>e.jsx("div",{style:d,children:e.jsx(l,{objectType:a,filterDefinitions:Wn})})},Yn=[{type:"KEYWORD_SEARCH",properties:["fullName","jobTitle"],label:"Search",defaultFilterState:{type:"keywordSearch",searchTerm:"manager",operator:"AND"}},{type:"PROPERTY",key:"department",label:"Department",filterComponent:"LISTOGRAM",defaultFilterState:{type:"EXACT_MATCH",values:["Engineering"]}},{type:"PROPERTY",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",defaultFilterState:{type:"SELECT",selectedValues:["New York","Tokyo"]}},{type:"STATIC_VALUES",key:"team",label:"Team (static)",filterComponent:"MULTI_SELECT",values:["Content","Platform","Treasury","Legal"],defaultFilterState:{type:"SELECT",selectedValues:["Platform"]}},{type:"HAS_LINK",linkName:"lead",label:"Has a manager",defaultFilterState:{type:"hasLink",hasLink:!0}},{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",defaultFilterState:{type:"custom",customState:{value:"man"}},renderInput:({filterState:t,onFilterStateChanged:n})=>e.jsx(ce,{filterState:t,onFilterStateChanged:n}),toWhereClause:t=>{var i;const n=(i=t.customState)==null?void 0:i.value;if(n)return{fullName:{$containsAnyTerm:n}}}}];function Gn(t){const[n,i]=r.useState(void 0),o=r.useCallback(s=>{i(s)},[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{...t,objectType:a,filterDefinitions:Yn,onFilterClauseChanged:o})}),e.jsxs("div",{style:g,children:[e.jsx("h4",{children:"Where clause"}),e.jsx("pre",{style:T,children:n?JSON.stringify(n,null,2):"(none)"})]})]})}const te={name:"With Default Filter State Per Filter",args:{showActiveFilterCount:!0,showResetButton:!0},parameters:{docs:{description:{story:'Give a definition a `defaultFilterState` to start that filter off with a value. Every kind spells it the same way, and the seeded value applies on mount — the where clause is already populated on first render and the seeded filters count towards the active filter count. FilterList owns the state from then on, so editing a filter does not write back to the definition. The seed is also the baseline the reset button returns to, which is why reset starts disabled here and re-enables once you change something.\n\nTo hydrate from saved state keyed by filter instead (localStorage, URL params), use the `defaultFilterStates` map — see "With initial filter states".'},source:{code:`const filterDefinitions = [
  {
    type: "KEYWORD_SEARCH",
    properties: ["fullName", "jobTitle"],
    label: "Search",
    defaultFilterState: { type: "keywordSearch", searchTerm: "manager", operator: "AND" },
  },
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    defaultFilterState: { type: "EXACT_MATCH", values: ["Engineering"] },
  },
  {
    type: "PROPERTY",
    key: "locationCity",
    label: "Location City",
    filterComponent: "MULTI_SELECT",
    defaultFilterState: { type: "SELECT", selectedValues: ["New York", "Tokyo"] },
  },
  {
    type: "STATIC_VALUES",
    key: "team",
    label: "Team (static)",
    filterComponent: "MULTI_SELECT",
    values: ["Content", "Platform", "Treasury", "Legal"],
    defaultFilterState: { type: "SELECT", selectedValues: ["Platform"] },
  },
  {
    type: "HAS_LINK",
    linkName: "lead",
    label: "Has a manager",
    defaultFilterState: { type: "hasLink", hasLink: true },
  },
  {
    type: "CUSTOM",
    key: "custom-name-contains",
    label: "Name Contains",
    filterComponent: "CUSTOM",
    defaultFilterState: { type: "custom", customState: { value: "man" } },
    renderInput: ({ filterState, onFilterStateChanged }) => (
      <CustomNameContainsFilter
        filterState={filterState}
        onFilterStateChanged={onFilterStateChanged}
      />
    ),
    toWhereClause: (state) => {
      const value = state.customState?.value;
      if (!value) return undefined;
      return { fullName: { $containsAnyTerm: value } };
    },
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount
  showResetButton
  onFilterClauseChanged={handleFilterClauseChanged}
/>`}}},render:t=>e.jsx(Gn,{...t})},Un={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT"},Hn={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"department",filterComponent:"MULTI_SELECT",label:"Manager Department (linked multi)"},Kn={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"locationCity",filterComponent:"SINGLE_SELECT",label:"Manager City (linked single)"},Xn={type:"CUSTOM",key:"custom-name-contains",label:"Name Contains (custom)",filterComponent:"CUSTOM",renderInput:({filterState:t,onFilterStateChanged:n})=>e.jsx(ce,{filterState:t,onFilterStateChanged:n}),toWhereClause:t=>{var i;const n=(i=t.customState)==null?void 0:i.value;if(n)return{fullName:{$containsAnyTerm:n}}}},Jn=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}],["custom-name-contains",{type:"custom",customState:{value:"man"}}]]),qn=[v,se,Un,Hn,Kn,Xn];function zn(t){const n=L(),i=r.useMemo(()=>n(a),[n]),[o,s]=r.useState(void 0),c=r.useCallback(p=>{s(p)},[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{...t,objectType:a,objectSet:i,filterDefinitions:qn,defaultFilterStates:Jn,onFilterClauseChanged:c})}),e.jsxs("div",{style:g,children:[e.jsx("h4",{children:"Active where clause"}),e.jsx("pre",{style:T,children:o?JSON.stringify(o,null,2):"(none)"})]})]})}const ne={name:"With Top-level Default Filter States",parameters:{docs:{description:{story:"Pass `defaultFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, LINKED_PROPERTY, and CUSTOM filters. A CUSTOM filter hydrates the same way, except its state shape is defined by the filter itself rather than by FilterList."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
  // Custom filter — state shape is whatever its renderInput/toWhereClause use
  ["custom-name-contains", { type: "custom", customState: { value: "man" } }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  defaultFilterStates={savedStates}
  onFilterClauseChanged={handleFilterClauseChanged}
/>`}}},render:t=>e.jsx(zn,{...t})},ue=[{id:"everyone",label:"Everyone"},{id:"marketing",label:"Marketing"},{id:"engineering",label:"Engineering"}],$n={everyone:new Map,marketing:new Map([["department",{type:"EXACT_MATCH",values:["Marketing"]}]]),engineering:new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Software Engineer"]}]])},Qn=[v,se],Zn={display:"flex",gap:4,marginBottom:12,borderBottom:"1px solid #d3d8de"};function ei({view:t,isActive:n,onSelect:i}){const o=r.useCallback(()=>{i(t.id)},[i,t.id]);return e.jsx("button",{type:"button",role:"tab","aria-selected":n,onClick:o,style:{padding:"8px 14px",border:"none",borderBottom:`2px solid ${n?"#2d72d2":"transparent"}`,background:"none",color:n?"#1c2127":"#5f6b7c",fontWeight:n?600:400,cursor:"pointer"},children:t.label})}function ti(t){const n=L(),i=r.useMemo(()=>n(a),[n]),[o,s]=r.useState("everyone"),[c,p]=r.useState($n),[u,y]=r.useState(),f=r.useCallback(m=>{y(m),p(S=>({...S,[o]:new Map(m.filterStates)}))},[o]);return e.jsxs("div",{children:[e.jsx("div",{style:Zn,role:"tablist",children:ue.map(m=>e.jsx(ei,{view:m,isActive:m.id===o,onSelect:s},m.id))}),e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{...t,objectType:a,objectSet:i,filterDefinitions:Qn,filterStates:c[o],onFilterChanged:f,title:"Employee filters",showActiveFilterCount:!0,showResetButton:!0})}),e.jsxs("div",{style:g,children:[e.jsx("h4",{children:"Saved filter states per view"}),e.jsx("pre",{style:T,children:JSON.stringify(Object.fromEntries(ue.map(m=>[m.id,Object.fromEntries(c[m.id])])),null,2)}),e.jsx("h4",{children:"Last onFilterChanged event"}),e.jsx("pre",{style:T,children:(u==null?void 0:u.event)??"(none)"})]})]})]})}const ie={name:"With Controlled Filter States",parameters:{docs:{description:{story:'Pass `filterStates` to own the filter state from outside. Each tab keeps its own saved view: changes are read out of `onFilterChanged`\'s `filterStates` and passed straight back in, and switching tabs pushes a different map so the filters — and the reset baseline — follow the tab. Editing a filter still renders immediately, so typing stays responsive while the map only has to come back for the change to survive a later push. A push also reports an `onFilterChanged` with `event: "REPLACE"`, carrying the clause and filtered `ObjectSet` the pushed states produce.'},source:{code:`const [activeViewId, setActiveViewId] = useState("everyone");
const [filterStatesByView, setFilterStatesByView] = useState({
  everyone: new Map(),
  marketing: new Map([["department", { type: "EXACT_MATCH", values: ["Marketing"] }]]),
  engineering: new Map([["department", { type: "EXACT_MATCH", values: ["Engineering"] }]]),
});

const handleFilterChanged = useCallback(
  (change) => {
    setFilterStatesByView((previous) => ({
      ...previous,
      [activeViewId]: new Map(change.filterStates),
    }));
  },
  [activeViewId],
);

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={filterDefinitions}
  filterStates={filterStatesByView[activeViewId]}
  onFilterChanged={handleFilterChanged}
/>`}}},render:t=>e.jsx(ti,{...t})},me=[v,se],ni=new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Software Engineer"]}]]);function fe(t){const n=[...t.keys()].sort(),i={};for(const o of n){const s=t.get(o);s!==void 0&&(i[o]=s)}return JSON.stringify(i,null,2)}function cn({defaultFilterStates:t,storyArgs:n}){const i=r.useMemo(()=>{const f=new Map;for(const m of me)m.type==="PROPERTY"&&m.defaultFilterState&&f.set(pe(m),m.defaultFilterState);if(t)for(const[m,S]of t)f.set(m,S);return f},[t]),[o,s]=r.useState(()=>new Map(i)),c=n.onFilterStateChanged,p=r.useCallback((f,m)=>{s(S=>{const D=new Map(S);return D.set(pe(f),m),D}),c==null||c(f,m)},[c]),u=n.onReset,y=r.useCallback(()=>{s(new Map(i)),u==null||u()},[u,i]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(l,{...n,objectType:a,filterDefinitions:me,defaultFilterStates:t,showResetButton:!0,onFilterStateChanged:p,onReset:y})}),e.jsxs("div",{style:g,children:[e.jsx("h4",{children:"Filter state dump"}),e.jsx("pre",{"data-testid":"filter-state-dump",style:T,children:fe(o)}),e.jsx("h4",{children:"Initial snapshot"}),e.jsx("pre",{"data-testid":"filter-state-initial",style:T,children:fe(i)})]})]})}function ii(t){return e.jsx(cn,{storyArgs:t})}const oe={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button is disabled-by-default until the user diverges from the initial (empty string) snapshot. After clicking reset the filter state returns to the initial snapshot and the button disables itself again."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`}}},render:t=>e.jsx(ii,{...t})};function oi(t){return e.jsx(cn,{storyArgs:t,defaultFilterStates:ni})}const re={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button stays disabled on mount even though there are active selections, because the live filter state matches the initial snapshot. Changing a selection enables the button; clicking it restores the initial snapshot, not an empty state."},source:{code:`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  defaultFilterStates={savedStates}
  showResetButton={true}
/>`}}},render:t=>e.jsx(oi,{...t})};var ye,he,be;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
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
}`,...(be=(he=w.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var Se,Ce,Te;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Te=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var ge,Ee,ve;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
  ]}
/>\`
      }
    }
  },
  render: args => <WithObjectSetStory {...args} />
}`,...(ve=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};var Re,Fe,Le;O.parameters={...O.parameters,docs:{...(Re=O.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    showResetButton: true
  },
  parameters: {
    docs: {
      source: {
        code: \`const filterDefinitions = [
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
  { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM" },
  { type: "PROPERTY", key: "fullName", label: "Full Name", filterComponent: "CONTAINS_TEXT", isVisible: false },
  { type: "PROPERTY", key: "firstFullTimeStartDate", label: "Start Date", filterComponent: "DATE_RANGE", isVisible: false },
  { type: "PROPERTY", key: "employeeNumber", label: "Employee Number", filterComponent: "NUMBER_RANGE", isVisible: false },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", isVisible: false },
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
}`,...(Le=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var je,De,we;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(we=(De=A.parameters)==null?void 0:De.docs)==null?void 0:we.source}}};var ke,Me,Oe;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Ae,Pe,Ie;I.parameters={...I.parameters,docs:{...(Ae=I.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ie=(Pe=I.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source}}};var xe,Ne,_e;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(_e=(Ne=x.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};var Ve,Be,We;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(We=(Be=N.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var Ye,Ge,Ue;_.parameters={..._.parameters,docs:{...(Ye=_.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var He,Ke,Xe;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Xe=(Ke=V.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};var Je,qe,ze;B.parameters={...B.parameters,docs:{...(Je=B.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
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
}`,...(ze=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var $e,Qe,Ze;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;Y.parameters={...Y.parameters,docs:{...(et=Y.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
    renderValue: (value) => DEPARTMENT_LABELS[value] ?? value,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: args => <WithRenderValueStory {...args} />
}`,...(nt=(tt=Y.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var it,ot,rt;G.parameters={...G.parameters,docs:{...(it=G.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />\`
      }
    }
  },
  render: args => <WithRenderValueReactNodeStory {...args} />
}`,...(rt=(ot=G.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var at,st,lt;U.parameters={...U.parameters,docs:{...(at=U.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
      listogramConfig: { displayMode: "minimal" },
    }]}
  />
</div>\`
      }
    }
  },
  render: args => <WithListogramDisplayModesStory {...args} />
}`,...(lt=(st=U.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var ct,dt,pt;H.parameters={...H.parameters,docs:{...(ct=H.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(pt=(dt=H.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var ut,mt,ft;K.parameters={...K.parameters,docs:{...(ut=K.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Listogram rows always include a checkbox for multi-select. " + "Selecting values checks the checkbox and highlights the row. " + "Use the exclude toggle (three-dot menu) to invert selections."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM" },
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
}`,...(ft=(mt=K.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var yt,ht,bt;X.parameters={...X.parameters,docs:{...(yt=X.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A selected value that sorts below the collapsed fold stays visible, " + "appended at the tail of the collapsed view rather than hoisted to " + 'the top. The "View all" toggle reveals the rest, and "View less" ' + "collapses back to this state."
      },
      source: {
        code: \`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", defaultFilterState: { type: "EXACT_MATCH", values: ["Sales"] } },
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
}`,...(bt=(ht=X.parameters)==null?void 0:ht.docs)==null?void 0:bt.source}}};var St,Ct,Tt;J.parameters={...J.parameters,docs:{...(St=J.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Tt=(Ct=J.parameters)==null?void 0:Ct.docs)==null?void 0:Tt.source}}};var gt,Et,vt;q.parameters={...q.parameters,docs:{...(gt=q.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
    listogramConfig: { displayMode: "minimal" },
  },
  {
    type: "STATIC_VALUES",
    key: "locationCity",
    label: "Office Location",
    filterComponent: "SINGLE_SELECT",
    values: ["New York", "San Francisco", "London", "Tokyo"],
  },
  {
    type: "STATIC_VALUES",
    key: "team",
    label: "Team",
    filterComponent: "MULTI_SELECT",
    values: ["Alpha", "Beta", "Gamma", "Delta"],
  },
  {
    type: "STATIC_VALUES",
    key: "status",
    label: "Status",
    filterComponent: "LISTOGRAM",
    values: ["Active", "Inactive"],
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
}`,...(vt=(Et=q.parameters)==null?void 0:Et.docs)==null?void 0:vt.source}}};var Rt,Ft,Lt;z.parameters={...z.parameters,docs:{...(Rt=z.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Lt=(Ft=z.parameters)==null?void 0:Ft.docs)==null?void 0:Lt.source}}};var jt,Dt,wt;$.parameters={...$.parameters,docs:{...(jt=$.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
  },
  {
    type: "LINKED_PROPERTY",
    linkName: "lead",
    linkedPropertyKey: "department",
    filterComponent: "MULTI_SELECT",
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
}`,...(wt=(Dt=$.parameters)==null?void 0:Dt.docs)==null?void 0:wt.source}}};var kt,Mt,Ot;Q.parameters={...Q.parameters,docs:{...(kt=Q.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
    linkedPropertyKey: "fullName",
    filterComponent: "MULTI_SELECT",
    searchField: false,
    label: "Manager Name",
  },
  {
    type: "PROPERTY",
    id: "combined-department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
  },
  {
    type: "PROPERTY",
    id: "combined-locationCity",
    key: "locationCity",
    label: "Location City",
    filterComponent: "MULTI_SELECT",
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
}`,...(Ot=(Mt=Q.parameters)==null?void 0:Mt.docs)==null?void 0:Ot.source}}};var At,Pt,It;Z.parameters={...Z.parameters,docs:{...(At=Z.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
  renderInput: ({ filterState, onFilterStateChanged }) => (
    <input
      type="text"
      value={filterState.customState.value ?? ""}
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
}`,...(It=(Pt=Z.parameters)==null?void 0:Pt.docs)==null?void 0:It.source}}};var xt,Nt,_t;ee.parameters={...ee.parameters,docs:{...(xt=ee.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
    },
    {
      type: "PROPERTY",
      key: "department",
      label: "Department",
      filterComponent: "MULTI_SELECT",
    },
    {
      type: "PROPERTY",
      key: "department",
      label: "Department (single)",
      filterComponent: "SINGLE_SELECT",
    },
    {
      type: "PROPERTY",
      key: "employeeNumber",
      label: "Employee Number",
      filterComponent: "NUMBER_RANGE",
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
}`,...(_t=(Nt=ee.parameters)==null?void 0:Nt.docs)==null?void 0:_t.source}}};var Vt,Bt,Wt;te.parameters={...te.parameters,docs:{...(Vt=te.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  name: "With Default Filter State Per Filter",
  args: {
    showActiveFilterCount: true,
    showResetButton: true
  },
  parameters: {
    docs: {
      description: {
        story: "Give a definition a \`defaultFilterState\` to start that filter off " + "with a value. Every kind spells it the same way, and the seeded " + "value applies on mount — the where clause is already populated on " + "first render and the seeded filters count towards the active " + "filter count. FilterList owns the state from then on, so editing " + "a filter does not write back to the definition. The seed is also " + "the baseline the reset button returns to, which is why reset " + "starts disabled here and re-enables once you change something.\\n\\n" + "To hydrate from saved state keyed by filter instead (localStorage, " + 'URL params), use the \`defaultFilterStates\` map — see "With ' + 'initial filter states".'
      },
      source: {
        code: \`const filterDefinitions = [
  {
    type: "KEYWORD_SEARCH",
    properties: ["fullName", "jobTitle"],
    label: "Search",
    defaultFilterState: { type: "keywordSearch", searchTerm: "manager", operator: "AND" },
  },
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    defaultFilterState: { type: "EXACT_MATCH", values: ["Engineering"] },
  },
  {
    type: "PROPERTY",
    key: "locationCity",
    label: "Location City",
    filterComponent: "MULTI_SELECT",
    defaultFilterState: { type: "SELECT", selectedValues: ["New York", "Tokyo"] },
  },
  {
    type: "STATIC_VALUES",
    key: "team",
    label: "Team (static)",
    filterComponent: "MULTI_SELECT",
    values: ["Content", "Platform", "Treasury", "Legal"],
    defaultFilterState: { type: "SELECT", selectedValues: ["Platform"] },
  },
  {
    type: "HAS_LINK",
    linkName: "lead",
    label: "Has a manager",
    defaultFilterState: { type: "hasLink", hasLink: true },
  },
  {
    type: "CUSTOM",
    key: "custom-name-contains",
    label: "Name Contains",
    filterComponent: "CUSTOM",
    defaultFilterState: { type: "custom", customState: { value: "man" } },
    renderInput: ({ filterState, onFilterStateChanged }) => (
      <CustomNameContainsFilter
        filterState={filterState}
        onFilterStateChanged={onFilterStateChanged}
      />
    ),
    toWhereClause: (state) => {
      const value = state.customState?.value;
      if (!value) return undefined;
      return { fullName: { $containsAnyTerm: value } };
    },
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount
  showResetButton
  onFilterClauseChanged={handleFilterClauseChanged}
/>\`
      }
    }
  },
  render: args => <WithDefaultFilterStateStory {...args} />
}`,...(Wt=(Bt=te.parameters)==null?void 0:Bt.docs)==null?void 0:Wt.source}}};var Yt,Gt,Ut;ne.parameters={...ne.parameters,docs:{...(Yt=ne.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  name: "With Top-level Default Filter States",
  parameters: {
    docs: {
      description: {
        story: "Pass \`defaultFilterStates\` to hydrate filters from saved state " + "(e.g. localStorage or URL params). Selections are restored on " + "mount, including values that currently have zero matching rows " + "— they appear with a count of 0 so users can see and clear them. " + "Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, " + "LINKED_PROPERTY, and CUSTOM filters. A CUSTOM filter hydrates the " + "same way, except its state shape is defined by the filter itself " + "rather than by FilterList."
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
  // Custom filter — state shape is whatever its renderInput/toWhereClause use
  ["custom-name-contains", { type: "custom", customState: { value: "man" } }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  defaultFilterStates={savedStates}
  onFilterClauseChanged={handleFilterClauseChanged}
/>\`
      }
    }
  },
  render: args => <WithInitialFilterStatesStory {...args} />
}`,...(Ut=(Gt=ne.parameters)==null?void 0:Gt.docs)==null?void 0:Ut.source}}};var Ht,Kt,Xt;ie.parameters={...ie.parameters,docs:{...(Ht=ie.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  name: "With Controlled Filter States",
  parameters: {
    docs: {
      description: {
        story: "Pass \`filterStates\` to own the filter state from outside. Each tab " + "keeps its own saved view: changes are read out of " + "\`onFilterChanged\`'s \`filterStates\` and passed straight back in, " + "and switching tabs pushes a different map so the filters — and the " + "reset baseline — follow the tab. Editing a filter still renders " + "immediately, so typing stays responsive while the map only has to " + "come back for the change to survive a later push. A push also " + 'reports an \`onFilterChanged\` with \`event: "REPLACE"\`, carrying ' + "the clause and filtered \`ObjectSet\` the pushed states produce."
      },
      source: {
        code: \`const [activeViewId, setActiveViewId] = useState("everyone");
const [filterStatesByView, setFilterStatesByView] = useState({
  everyone: new Map(),
  marketing: new Map([["department", { type: "EXACT_MATCH", values: ["Marketing"] }]]),
  engineering: new Map([["department", { type: "EXACT_MATCH", values: ["Engineering"] }]]),
});

const handleFilterChanged = useCallback(
  (change) => {
    setFilterStatesByView((previous) => ({
      ...previous,
      [activeViewId]: new Map(change.filterStates),
    }));
  },
  [activeViewId],
);

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={filterDefinitions}
  filterStates={filterStatesByView[activeViewId]}
  onFilterChanged={handleFilterChanged}
/>\`
      }
    }
  },
  render: args => <ControlledFilterStatesStory {...args} />
}`,...(Xt=(Kt=ie.parameters)==null?void 0:Kt.docs)==null?void 0:Xt.source}}};var Jt,qt,zt;oe.parameters={...oe.parameters,docs:{...(Jt=oe.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(zt=(qt=oe.parameters)==null?void 0:qt.docs)==null?void 0:zt.source}}};var $t,Qt,Zt;re.parameters={...re.parameters,docs:{...($t=re.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
  defaultFilterStates={savedStates}
  showResetButton={true}
/>\`
      }
    }
  },
  render: args => <WithResetButtonNonEmptyInitialStory {...args} />
}`,...(Zt=(Qt=re.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.source}}};const ro=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","ControlledCollapse","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","WithBelowFoldSelection","WithRemovableFilters","WithStaticValues","FullFeatured","WithLinkedPropertyFilters","CombinedWithObjectTable","WithCustomFilters","NoValueRendering","WithDefaultFilterState","WithInitialFilterStates","ControlledFilterStates","WithResetButtonEmptyInitial","WithResetButtonNonEmptyInitial"];export{O as AddFilterMode,_ as CollapsiblePanel,Q as CombinedWithObjectTable,V as ControlledCollapse,ie as ControlledFilterStates,w as Default,z as FullFeatured,k as IntegerNumberRangeRounding,B as KeywordSearch,ee as NoValueRendering,x as WithActiveFilterCount,A as WithAllFilterTypes,X as WithBelowFoldSelection,K as WithCheckbox,W as WithColorMap,Z as WithCustomFilters,te as WithDefaultFilterState,H as WithHiddenCounts,ne as WithInitialFilterStates,$ as WithLinkedPropertyFilters,U as WithListogramDisplayModes,M as WithObjectSet,J as WithRemovableFilters,Y as WithRenderValue,G as WithRenderValueAsReactNode,I as WithResetButton,oe as WithResetButtonEmptyInitial,re as WithResetButtonNonEmptyInitial,N as WithSorting,q as WithStaticValues,P as WithTitleAndIcon,ro as __namedExportsOrder,oo as default};
