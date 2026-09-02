import{f as rn,j as e,r}from"./iframe-DZOL1fAY.js";import{F as s}from"./filter-list-CpKRl_RE.js";import{O as qt}from"./object-table-SSJOUKzl.js";import{E as a}from"./Employee-BAk2o20h.js";import{u as oe}from"./useOsdkClient-eW2Kmz8P.js";import{g as de}from"./getFilterLabel-CPLUce-w.js";import"./preload-helper-3H1iqF3g.js";import"./MultiColumnSortDialog-BWc9Kkx2.js";import"./DraggableList-Dhhz3Grx.js";import"./svgIconContainer-B6vD6Ghc.js";import"./index-Dn4isnDY.js";import"./search-B2NPYcqq.js";import"./Input-VXijC7GT.js";import"./useBaseUiId-Cvxi0iS7.js";import"./useControlled-DRhy3GQv.js";import"./index-C11ji0i2.js";import"./index-DZ_Yay9Y.js";import"./Button-DsiRqDn-.js";import"./small-cross-BoSvEJri.js";import"./ActionButton-BsaHD9YU.js";import"./Dialog-cPcGwNln.js";import"./cross-86m0rjnN.js";import"./InternalBackdrop-DYc2T3en.js";import"./composite-T0X3QkXF.js";import"./index-DFd2jDKC.js";import"./MenuTrigger-CsR5DxY2.js";import"./CompositeItem-BqTSWS-d.js";import"./ToolbarRootContext-BSvTmWDd.js";import"./getDisabledMountTransitionStyles-BhFC88vd.js";import"./getPseudoElementBounds-Ba8N0Q3i.js";import"./withOsdkMetrics-2IcQnEf1.js";import"./Table-B62G5e17.js";import"./useEventCallback-ItCAOyRH.js";import"./SkeletonBar-LYReqkUo.js";import"./LoadingCell-D05YBGhE.js";import"./ColumnConfigDialog-BKBMAzyi.js";import"./Checkbox-D9uKkogi.js";import"./useValueChanged-DcZiCWMF.js";import"./CollapsiblePanel-fLJD7V0z.js";import"./chevron-down-BzBCSFbA.js";import"./index-COxjItVW.js";import"./error-DjEgQQ85.js";import"./BaseCbacBanner-CRUr-lWy.js";import"./makeExternalStore-BS_yphcb.js";import"./Tooltip-DHwsWy8-.js";import"./PopoverPopup-ZYkmOrRT.js";import"./debounce-DZH3gqyd.js";import"./tick-D-SuASFY.js";import"./DropdownField-Sc-mwTM2.js";import"./isEqual-DNKlfwvT.js";import"./Switch-CXc49Acm.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";const{expect:h,fn:E,userEvent:v,waitFor:F,within:zt}=__STORYBOOK_MODULE_TEST__,R={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM"},ae={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM"},$t={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT"},Qt={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",clickToFilter:!0,formatDate:t=>t.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})},re={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",clickToFilter:!0},L={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM"},le={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT"},T=[R,ae,$t,Qt,le,re,L],c={width:320,height:600},b={display:"flex",gap:16},C={flex:1},g={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},Zt={display:"flex",gap:16,height:600},en={width:320,flexShrink:0},tn=e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),Ji={title:"Components/FilterList",component:s,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,onFilterClauseChanged:E(),onFilterStateChanged:E(),onFilterListChanged:E(),onFilterAdded:E(),onFilterRemoved:E(),onFilterVisibilityChange:E(),onCollapsedChange:E(),onReset:E()},parameters:{msw:{handlers:[...rn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},onFilterClauseChanged:{description:"Called whenever the filter clause changes. FilterList owns filter state; this is how you read it out.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},enableCollapse:{description:"Whether the collapse/expand control is available. When false the panel is always expanded.",control:"boolean",table:{defaultValue:{summary:"true"}}},collapsed:{description:"Controlled mode. Source of truth for the collapsed state; takes precedence over defaultCollapsed.",control:"boolean"},defaultCollapsed:{description:"Uncontrolled mode. Seeds the initial collapsed state; the component owns it after mount.",control:"boolean",table:{defaultValue:{summary:"false"}}},onCollapsedChange:{description:"Called whenever the collapsed state changes, in both modes. An event listener — it neither controls the state nor enables the control.",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Fires after a filter is shown from the built-in Add filter popover.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Fires after a filter's remove button is clicked, once the filter is hidden and its state cleared.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Fires when filters are reordered, added or removed via the built-in controls, or reset. Visible filters first in display order, then hidden.",control:!1,table:{category:"Events"}},addFilterMode:{description:"Deprecated — going away; visibility will always be managed internally. Seed it with isVisible on each definition and observe changes with onFilterVisibilityChange.",control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},defaultFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},j={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
  ]}
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const o=r.useMemo(()=>[R,L],[]);return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:o,...i})})}},k={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."},source:{code:`<FilterList
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
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const o=r.useMemo(()=>[re],[]);return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:o,...i})})}};function an(t){const n=oe(),i=r.useMemo(()=>n(a).where({department:"Marketing"}),[n]),o=r.useMemo(()=>[ae,L],[]);return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,objectSet:i,filterDefinitions:o,...t})})}const O={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
  ]}
/>`}}},render:t=>e.jsx(an,{...t})};function ln(t){const n=r.useMemo(()=>[R,ae,{...$t,isVisible:!1},{...Qt,isVisible:!1},{...re,isVisible:!1},{...L,isVisible:!1}],[]);return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:n,addFilterMode:"uncontrolled",...t})})}const w={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(ln,{...t})};function sn(t){const[n,i]=r.useState(void 0),o=t.onFilterClauseChanged,l=r.useCallback(d=>{i(d),o==null||o(d)},[o]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:T,...t,onFilterClauseChanged:l})}),e.jsxs("div",{style:C,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:g,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const M={parameters:{docs:{description:{story:"All filter component types, with the emitted where clause shown as JSON. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(sn,{...t})},A={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:T,titleIcon:tn,...i})})};function cn(t){const n=t.onReset,i=r.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:T,...t,onReset:i})})}const P={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:t=>e.jsx(cn,{...t})},I={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:T,...i})})},x={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:T,...i})})};function dn(t){return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:T,...t})})}const N={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the panel. Collapse is available by default and uncontrolled here — no state wiring required. Active filter count is shown in the collapsed state."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  showActiveFilterCount={true}
/>`}}},render:t=>e.jsx(dn,{...t})};function pn(t){const[n,i]=r.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start"},children:[e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:T,...t,collapsed:n,onCollapsedChange:i})}),e.jsx("button",{type:"button",onClick:()=>i(o=>!o),children:n?"Expand from outside":"Collapse from outside"})]})}const _={args:{title:"Employee Filters"},parameters:{docs:{description:{story:"Controlled mode: `collapsed` is the source of truth, so the panel only moves when the caller re-renders with a new value. The external button drives the same state as the header control."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
/>`}}},render:t=>e.jsx(pn,{...t})},Y={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:t,objectSet:n,...i})=>{const o=r.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},R,L],[]);return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:o,...i})})}};function un(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM"}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:i,...t})})]})}const W={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(un,{...t})},nn={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function mn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM"}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",renderValue:o=>nn[o]??o},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",renderValue:o=>o.toUpperCase()}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:i,...t})})]})}const B={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(mn,{...t})},fn={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},yn={display:"inline-flex",alignItems:"center",gap:8},hn={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function bn({value:t}){const n=fn[t]??"#94a3b8";return e.jsxs("span",{style:yn,children:[e.jsx("span",{style:{...hn,background:n}}),e.jsx("span",{children:nn[t]??t})]})}function Tn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",renderValue:i=>e.jsx(bn,{value:i})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",renderValue:i=>e.jsx("a",{href:`#/team/${encodeURIComponent(i)}`,onClick:o=>o.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:i})}],[]);return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:n,...t})})}const V={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Tn,{...t})};function Sn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",listogramConfig:{displayMode:"full"}}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",listogramConfig:{displayMode:"count"}}],[]),o=r.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",listogramConfig:{displayMode:"minimal"}}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:i,...t})}),e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:o,...t})})]})}const G={parameters:{docs:{source:{code:`// listogramConfig.displayMode controls what each bucket row renders:
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
</div>`}}},render:t=>e.jsx(Sn,{...t})};function Cn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM"},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT"}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",showCount:!1}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:n,...t})}),e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:i,...t})})]})}const U={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Cn,{...t})};function En(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM"},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM"}],[]);return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:n,...t})})}const H={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM" },
  ]}
/>`}}},render:t=>e.jsx(En,{...t}),play:async({canvasElement:t})=>{const n=zt(t),i=["Engineering","Marketing","Design","Data","Finance"],o=()=>n.getAllByRole("button",{name:/^(Engineering|Marketing|Design|Data|Finance)\s+\d+/u}).map(l=>{const d=i.find(p=>{var u;return(u=l.textContent)==null?void 0:u.includes(p)});if(d==null)throw new Error(`Unable to identify department row from "${l.textContent}"`);return d});await n.findByRole("button",{name:"Marketing 4"}),await h(o()).toEqual(i),await v.click(n.getByRole("button",{name:"Marketing 4"})),await F(()=>h(n.getByRole("button",{name:"Marketing 4"})).toHaveAttribute("aria-pressed","true")),await h(o()).toEqual(i),await v.click(n.getByRole("button",{name:"Marketing 4"})),await F(()=>h(n.getByRole("button",{name:"Marketing 4"})).toHaveAttribute("aria-pressed","false")),await h(o()).toEqual(i)}};function gn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-below-fold",key:"department",label:"Department",filterComponent:"LISTOGRAM",defaultFilterState:{type:"EXACT_MATCH",values:["Sales"]}}],[]);return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:n,...t})})}const K={parameters:{docs:{description:{story:'A selected value that sorts below the collapsed fold stays visible, appended at the tail of the collapsed view rather than hoisted to the top. The "View all" toggle reveals the rest, and "View less" collapses back to this state.'},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", defaultFilterState: { type: "EXACT_MATCH", values: ["Sales"] } },
  ]}
/>`}}},render:t=>e.jsx(gn,{...t}),play:async({canvasElement:t})=>{const n=zt(t),i=["Engineering","Marketing","Design","Data","Finance","Operations","People","Sales","Customer Success","Legal","Product"],o=/^(Engineering|Marketing|Design|Data|Finance|Operations|People|Sales|Customer Success|Legal|Product)\s+\d+/u,l=()=>n.getAllByRole("button",{name:o}).map(u=>{const f=i.find(m=>{var y;return(y=u.textContent)==null?void 0:y.includes(m)});if(f==null)throw new Error(`Unable to identify department row from "${u.textContent}"`);return f}),d=["Engineering","Marketing","Design","Data","Finance","Sales"],p=["Engineering","Marketing","Design","Data","Finance"];await n.findByRole("button",{name:"Marketing 4"}),await h(l()).toEqual(d),await h(n.getByRole("button",{name:"Sales 2"})).toHaveAttribute("aria-pressed","true"),await v.click(n.getByRole("button",{name:"Sales 2"})),await F(()=>h(l()).toEqual(p)),await h(n.queryByRole("button",{name:"Sales 2"})).toBeNull(),await v.click(n.getByRole("button",{name:/^View all \(\d+\)/u})),await n.findByRole("button",{name:"View less"}),await v.click(n.getByRole("button",{name:"Sales 2"})),await F(()=>h(n.getByRole("button",{name:"Sales 2"})).toHaveAttribute("aria-pressed","true")),await v.click(n.getByRole("button",{name:"View less"})),await n.findByRole("button",{name:/^View all \(\d+\)/u}),await h(n.queryByRole("button",{name:"View less"})).toBeNull(),await F(()=>h(l()).toEqual(d))}};function Rn(t){const[n,i]=r.useState(T),o=t.onFilterRemoved,l=r.useCallback(d=>{i(p=>p.filter(u=>"key"in u?u.key!==d:!0)),o==null||o(d)},[o]);return e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:n,...t,onFilterRemoved:l})})}const X={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:t=>e.jsx(Rn,{...t})};function vn(t){const[n,i]=r.useState(void 0),o=r.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"]},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"]},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],listogramConfig:{displayMode:"minimal"},toWhereClause:p=>{if(p.type!=="EXACT_MATCH"||p.values.length===0)return;const u=p.values,f=u.includes("Active"),m=u.includes("Inactive");if(f&&m)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(f)return{employeeStatus:"Active"};if(m)return{employeeStatus:"Inactive"}}}],[]),l=t.onFilterClauseChanged,d=r.useCallback(p=>{i(p),l==null||l(p)},[l]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:o,...t,onFilterClauseChanged:d})}),e.jsxs("div",{style:C,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:g,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const J={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(vn,{...t})};function Fn(t){const[n,i]=r.useState(void 0),[o,l]=r.useState(T),d=t.onFilterRemoved,p=r.useCallback(S=>{l(D=>D.filter(ce=>"key"in ce?ce.key!==S:!0)),d==null||d(S)},[d]),u=t.onReset,f=r.useCallback(()=>{l(T),u==null||u()},[u]),m=t.onFilterClauseChanged,y=r.useCallback(S=>{i(S),m==null||m(S)},[m]);return e.jsxs("div",{style:Zt,children:[e.jsx("div",{style:en,children:e.jsx(s,{objectType:a,filterDefinitions:o,titleIcon:tn,...t,onReset:f,onFilterRemoved:p,onFilterClauseChanged:y})}),e.jsx("div",{style:C,children:e.jsx(qt,{objectType:a,filter:n})})]})}const q={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and the emitted where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:t=>e.jsx(Fn,{...t})};function Ln(t){const n=oe(),i=r.useMemo(()=>n(a),[n]),[o,l]=r.useState(void 0),d=r.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager"},{type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"department",filterComponent:"MULTI_SELECT",label:"Manager Department"}],[]),p=t.onFilterClauseChanged,u=r.useCallback(f=>{l(f),p==null||p(f)},[p]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,objectSet:i,filterDefinitions:d,...t,onFilterClauseChanged:u})}),e.jsxs("div",{style:C,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("p",{children:"Note: HAS_LINK and LINKED_PROPERTY filters do not appear in the clause"}),e.jsx("pre",{style:g,children:o?JSON.stringify(o,null,2):"(no active filters)"})]})]})}const z={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. LINKED_PROPERTY filters on a property of the linked object and exposes the same overflow (…) controls as direct property filters — the inline Keeping/Excluding dropdown and Clear all."},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:t=>e.jsx(Ln,{...t})},Dn={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM"},jn={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT"},kn={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",linkedPropertyKey:"fullName",filterComponent:"MULTI_SELECT",searchField:!1,label:"Manager Name"},On=[kn,Dn,jn],wn=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"rdp",id:"managerName",creator:t=>t.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager Name",renderCell:t=>"managerName"in t?e.jsx("span",{children:t.managerName}):e.jsx("span",{style:{color:"#999"},children:"No Manager"})}];function Mn(t){const n=oe(),i=r.useMemo(()=>n(a),[n]),[o,l]=r.useState(i);return e.jsxs("div",{style:Zt,children:[e.jsx("div",{style:en,children:e.jsx(s,{...t,objectType:a,objectSet:i,filterDefinitions:On,onFilterClauseChanged:t.onFilterClauseChanged,onEffectiveObjectSet:l,showFilteredOutValues:!0})}),e.jsx("div",{style:C,children:e.jsx(qt,{objectType:a,objectSet:o,columnDefinitions:wn})})]})}const $={name:"Combined with Object Table",parameters:{docs:{description:{story:'A linked filter (Manager Name) and direct property filters coexist in one FilterList alongside an ObjectTable. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. The table surfaces the linked manager via a derived-property `Manager Name` column (`pivotTo("lead").selectProperty("fullName")`). With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows.'},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
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
/>`}}},render:t=>e.jsx(Mn,{...t})};function se({filterState:t,onFilterStateChanged:n}){const i=r.useCallback(l=>{const d=l.target.value;n({type:"custom",customState:{value:d}})},[n]),o=r.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return e.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",value:t.customState.value??"",onChange:i,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),t.customState.value&&e.jsx("button",{onClick:o,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function An(t){const[n,i]=r.useState(void 0),o=r.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",renderInput:({filterState:p,onFilterStateChanged:u})=>e.jsx(se,{filterState:p,onFilterStateChanged:u}),toWhereClause:p=>{var f;const u=(f=p.customState)==null?void 0:f.value;if(u)return{fullName:{$containsAnyTerm:u}}}}],[]),l=t.onFilterClauseChanged,d=r.useCallback(p=>{i(p),l==null||l(p)},[l]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:o,...t,onFilterClauseChanged:d})}),e.jsxs("div",{style:C,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:g,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Q={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:t=>e.jsx(An,{...t})},Pn={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT"},In={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT"},xn=[R,Pn,In,re],Z={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."},source:{code:`// Empty/null values render via <NoValueLabel /> across every filter type.
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
/>`}}},render:()=>e.jsx("div",{style:c,children:e.jsx(s,{objectType:a,filterDefinitions:xn})})},Nn=[{type:"KEYWORD_SEARCH",properties:["fullName","jobTitle"],label:"Search",defaultFilterState:{type:"keywordSearch",searchTerm:"manager",operator:"AND"}},{type:"PROPERTY",key:"department",label:"Department",filterComponent:"LISTOGRAM",defaultFilterState:{type:"EXACT_MATCH",values:["Engineering"]}},{type:"PROPERTY",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",defaultFilterState:{type:"SELECT",selectedValues:["New York","Tokyo"]}},{type:"STATIC_VALUES",key:"team",label:"Team (static)",filterComponent:"MULTI_SELECT",values:["Content","Platform","Treasury","Legal"],defaultFilterState:{type:"SELECT",selectedValues:["Platform"]}},{type:"HAS_LINK",linkName:"lead",label:"Has a manager",defaultFilterState:{type:"hasLink",hasLink:!0}},{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",defaultFilterState:{type:"custom",customState:{value:"man"}},renderInput:({filterState:t,onFilterStateChanged:n})=>e.jsx(se,{filterState:t,onFilterStateChanged:n}),toWhereClause:t=>{var i;const n=(i=t.customState)==null?void 0:i.value;if(n)return{fullName:{$containsAnyTerm:n}}}}];function _n(t){const[n,i]=r.useState(void 0),o=r.useCallback(l=>{i(l)},[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{...t,objectType:a,filterDefinitions:Nn,onFilterClauseChanged:o})}),e.jsxs("div",{style:C,children:[e.jsx("h4",{children:"Where clause"}),e.jsx("pre",{style:g,children:n?JSON.stringify(n,null,2):"(none)"})]})]})}const ee={name:"With Default Filter State Per Filter",args:{showActiveFilterCount:!0,showResetButton:!0},parameters:{docs:{description:{story:'Give a definition a `defaultFilterState` to start that filter off with a value. Every kind spells it the same way, and the seeded value applies on mount — the where clause is already populated on first render and the seeded filters count towards the active filter count. FilterList owns the state from then on, so editing a filter does not write back to the definition. The seed is also the baseline the reset button returns to, which is why reset starts disabled here and re-enables once you change something.\n\nTo hydrate from saved state keyed by filter instead (localStorage, URL params), use the `defaultFilterStates` map — see "With initial filter states".'},source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(_n,{...t})},Yn={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT"},Wn={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"department",filterComponent:"MULTI_SELECT",label:"Manager Department (linked multi)"},Bn={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"locationCity",filterComponent:"SINGLE_SELECT",label:"Manager City (linked single)"},Vn={type:"CUSTOM",key:"custom-name-contains",label:"Name Contains (custom)",filterComponent:"CUSTOM",renderInput:({filterState:t,onFilterStateChanged:n})=>e.jsx(se,{filterState:t,onFilterStateChanged:n}),toWhereClause:t=>{var i;const n=(i=t.customState)==null?void 0:i.value;if(n)return{fullName:{$containsAnyTerm:n}}}},Gn=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}],["custom-name-contains",{type:"custom",customState:{value:"man"}}]]),Un=[R,le,Yn,Wn,Bn,Vn];function Hn(t){const n=oe(),i=r.useMemo(()=>n(a),[n]),[o,l]=r.useState(void 0),d=r.useCallback(p=>{l(p)},[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{...t,objectType:a,objectSet:i,filterDefinitions:Un,defaultFilterStates:Gn,onFilterClauseChanged:d})}),e.jsxs("div",{style:C,children:[e.jsx("h4",{children:"Active where clause"}),e.jsx("pre",{style:g,children:o?JSON.stringify(o,null,2):"(none)"})]})]})}const te={name:"With Top-level Default Filter States",parameters:{docs:{description:{story:"Pass `defaultFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, LINKED_PROPERTY, and CUSTOM filters. A CUSTOM filter hydrates the same way, except its state shape is defined by the filter itself rather than by FilterList."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:t=>e.jsx(Hn,{...t})},pe=[R,le],Kn=new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Software Engineer"]}]]);function ue(t){const n=[...t.keys()].sort(),i={};for(const o of n){const l=t.get(o);l!==void 0&&(i[o]=l)}return JSON.stringify(i,null,2)}function on({defaultFilterStates:t,storyArgs:n}){const i=r.useMemo(()=>{const m=new Map;for(const y of pe)y.type==="PROPERTY"&&y.defaultFilterState&&m.set(de(y),y.defaultFilterState);if(t)for(const[y,S]of t)m.set(y,S);return m},[t]),[o,l]=r.useState(()=>new Map(i)),d=n.onFilterStateChanged,p=r.useCallback((m,y)=>{l(S=>{const D=new Map(S);return D.set(de(m),y),D}),d==null||d(m,y)},[d]),u=n.onReset,f=r.useCallback(()=>{l(new Map(i)),u==null||u()},[u,i]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:c,children:e.jsx(s,{...n,objectType:a,filterDefinitions:pe,defaultFilterStates:t,showResetButton:!0,onFilterStateChanged:p,onReset:f})}),e.jsxs("div",{style:C,children:[e.jsx("h4",{children:"Filter state dump"}),e.jsx("pre",{"data-testid":"filter-state-dump",style:g,children:ue(o)}),e.jsx("h4",{children:"Initial snapshot"}),e.jsx("pre",{"data-testid":"filter-state-initial",style:g,children:ue(i)})]})]})}function Xn(t){return e.jsx(on,{storyArgs:t})}const ne={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button is disabled-by-default until the user diverges from the initial (empty string) snapshot. After clicking reset the filter state returns to the initial snapshot and the button disables itself again."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`}}},render:t=>e.jsx(Xn,{...t})};function Jn(t){return e.jsx(on,{storyArgs:t,defaultFilterStates:Kn})}const ie={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button stays disabled on mount even though there are active selections, because the live filter state matches the initial snapshot. Changing a selection enables the button; clicking it restores the initial snapshot, not an empty state."},source:{code:`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  defaultFilterStates={savedStates}
  showResetButton={true}
/>`}}},render:t=>e.jsx(Jn,{...t})};var me,fe,ye;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var he,be,Te;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Te=(be=k.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var Se,Ce,Ee;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ee=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var ge,Re,ve;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(Re=w.parameters)==null?void 0:Re.docs)==null?void 0:ve.source}}};var Fe,Le,De;M.parameters={...M.parameters,docs:{...(Fe=M.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(De=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var je,ke,Oe;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Oe=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};var we,Me,Ae;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ae=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source}}};var Pe,Ie,xe;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(xe=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var Ne,_e,Ye;x.parameters={...x.parameters,docs:{...(Ne=x.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ye=(_e=x.parameters)==null?void 0:_e.docs)==null?void 0:Ye.source}}};var We,Be,Ve;N.parameters={...N.parameters,docs:{...(We=N.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ve=(Be=N.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var Ge,Ue,He;_.parameters={..._.parameters,docs:{...(Ge=_.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(He=(Ue=_.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Ke,Xe,Je;Y.parameters={...Y.parameters,docs:{...(Ke=Y.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Je=(Xe=Y.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var qe,ze,$e;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...($e=(ze=W.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Qe,Ze,et;B.parameters={...B.parameters,docs:{...(Qe=B.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=B.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,it;V.parameters={...V.parameters,docs:{...(tt=V.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(it=(nt=V.parameters)==null?void 0:nt.docs)==null?void 0:it.source}}};var ot,rt,at;G.parameters={...G.parameters,docs:{...(ot=G.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(at=(rt=G.parameters)==null?void 0:rt.docs)==null?void 0:at.source}}};var lt,st,ct;U.parameters={...U.parameters,docs:{...(lt=U.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ct=(st=U.parameters)==null?void 0:st.docs)==null?void 0:ct.source}}};var dt,pt,ut;H.parameters={...H.parameters,docs:{...(dt=H.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ut=(pt=H.parameters)==null?void 0:pt.docs)==null?void 0:ut.source}}};var mt,ft,yt;K.parameters={...K.parameters,docs:{...(mt=K.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(yt=(ft=K.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var ht,bt,Tt;X.parameters={...X.parameters,docs:{...(ht=X.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(Tt=(bt=X.parameters)==null?void 0:bt.docs)==null?void 0:Tt.source}}};var St,Ct,Et;J.parameters={...J.parameters,docs:{...(St=J.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Et=(Ct=J.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var gt,Rt,vt;q.parameters={...q.parameters,docs:{...(gt=q.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(vt=(Rt=q.parameters)==null?void 0:Rt.docs)==null?void 0:vt.source}}};var Ft,Lt,Dt;z.parameters={...z.parameters,docs:{...(Ft=z.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Dt=(Lt=z.parameters)==null?void 0:Lt.docs)==null?void 0:Dt.source}}};var jt,kt,Ot;$.parameters={...$.parameters,docs:{...(jt=$.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Ot=(kt=$.parameters)==null?void 0:kt.docs)==null?void 0:Ot.source}}};var wt,Mt,At;Q.parameters={...Q.parameters,docs:{...(wt=Q.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(At=(Mt=Q.parameters)==null?void 0:Mt.docs)==null?void 0:At.source}}};var Pt,It,xt;Z.parameters={...Z.parameters,docs:{...(Pt=Z.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(xt=(It=Z.parameters)==null?void 0:It.docs)==null?void 0:xt.source}}};var Nt,_t,Yt;ee.parameters={...ee.parameters,docs:{...(Nt=ee.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Yt=(_t=ee.parameters)==null?void 0:_t.docs)==null?void 0:Yt.source}}};var Wt,Bt,Vt;te.parameters={...te.parameters,docs:{...(Wt=te.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Vt=(Bt=te.parameters)==null?void 0:Bt.docs)==null?void 0:Vt.source}}};var Gt,Ut,Ht;ne.parameters={...ne.parameters,docs:{...(Gt=ne.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Ht=(Ut=ne.parameters)==null?void 0:Ut.docs)==null?void 0:Ht.source}}};var Kt,Xt,Jt;ie.parameters={...ie.parameters,docs:{...(Kt=ie.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Jt=(Xt=ie.parameters)==null?void 0:Xt.docs)==null?void 0:Jt.source}}};const qi=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","ControlledCollapse","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","WithBelowFoldSelection","WithRemovableFilters","WithStaticValues","FullFeatured","WithLinkedPropertyFilters","CombinedWithObjectTable","WithCustomFilters","NoValueRendering","WithDefaultFilterState","WithInitialFilterStates","WithResetButtonEmptyInitial","WithResetButtonNonEmptyInitial"];export{w as AddFilterMode,N as CollapsiblePanel,$ as CombinedWithObjectTable,_ as ControlledCollapse,j as Default,q as FullFeatured,k as IntegerNumberRangeRounding,Y as KeywordSearch,Z as NoValueRendering,I as WithActiveFilterCount,M as WithAllFilterTypes,K as WithBelowFoldSelection,H as WithCheckbox,W as WithColorMap,Q as WithCustomFilters,ee as WithDefaultFilterState,U as WithHiddenCounts,te as WithInitialFilterStates,z as WithLinkedPropertyFilters,G as WithListogramDisplayModes,O as WithObjectSet,X as WithRemovableFilters,B as WithRenderValue,V as WithRenderValueAsReactNode,P as WithResetButton,ne as WithResetButtonEmptyInitial,ie as WithResetButtonNonEmptyInitial,x as WithSorting,J as WithStaticValues,A as WithTitleAndIcon,qi as __namedExportsOrder,Ji as default};
