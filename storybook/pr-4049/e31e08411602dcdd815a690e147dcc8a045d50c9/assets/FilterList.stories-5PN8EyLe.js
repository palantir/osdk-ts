import{f as cn,j as e,r}from"./iframe-CYdVR6sB.js";import{F as s}from"./filter-list-BnQTBBKG.js";import{O as Zt}from"./object-table-ZxHLjbpQ.js";import{E as l}from"./Employee-BAk2o20h.js";import{u as re}from"./useOsdkClient-B70HxYsA.js";import{g as pe}from"./getFilterLabel-Q4q_P2bO.js";import"./preload-helper-BXur23Md.js";import"./MultiColumnSortDialog-BX2U8Aqs.js";import"./DraggableList-Dp6tw8Q3.js";import"./svgIconContainer-BA_bcDbd.js";import"./index-BALJL5HN.js";import"./search-Ceaj3yJ_.js";import"./Input-8WX07h9e.js";import"./useBaseUiId-DWAeiyj4.js";import"./useControlled-DJ_ChqUq.js";import"./index-DoUPlBgv.js";import"./index-B8qCRObq.js";import"./Button-DXqS5gF6.js";import"./small-cross-DNLJnJK1.js";import"./ActionButton-CJlnBbXa.js";import"./Dialog-CIiEyQiz.js";import"./cross-Cw6hhHQ7.js";import"./InternalBackdrop--MuUQ9Ln.js";import"./composite-Cc3NubB-.js";import"./index-BqyVDr6I.js";import"./MenuTrigger-DgEhPmqF.js";import"./CompositeItem-C73xX0Ds.js";import"./ToolbarRootContext-ryiKPViF.js";import"./getDisabledMountTransitionStyles-CA4nP4MP.js";import"./getPseudoElementBounds-DwFXzaQG.js";import"./withOsdkMetrics-DXfIJx3f.js";import"./Table-BTEdK2br.js";import"./useEventCallback-DQs5DmXL.js";import"./SkeletonBar-n38Gly5n.js";import"./LoadingCell-C7i97lZg.js";import"./ColumnConfigDialog-b6IYNXHE.js";import"./Checkbox-CSD08bSL.js";import"./useValueChanged-C6DcZDB6.js";import"./CollapsiblePanel-CJCKVm3B.js";import"./chevron-down-BTVG76nb.js";import"./index-BfKW-3Wf.js";import"./error-D8UfR1ZG.js";import"./BaseCbacBanner-w9kh10oP.js";import"./makeExternalStore-CoWYgG6l.js";import"./Tooltip-tNCAdybw.js";import"./PopoverPopup-xCKZwX1o.js";import"./debounce-CbnfdRbo.js";import"./tick-BTWCOhDI.js";import"./DropdownField-B6eovdov.js";import"./isEqual-qYEMRRs3.js";import"./Switch-DyYnu5bb.js";import"./CompositeRoot-B6EvVlLu.js";import"./assertUnreachable-tCT10eXl.js";import"./index-CQX30p5n.js";const{expect:h,fn:g,userEvent:v,waitFor:F,within:en}=__STORYBOOK_MODULE_TEST__,R={type:"PROPERTY",id:"department",key:"department",label:"Department",filterComponent:"LISTOGRAM"},le={type:"PROPERTY",id:"team",key:"team",label:"Team",filterComponent:"LISTOGRAM"},tn={type:"PROPERTY",id:"fullName",key:"fullName",label:"Full Name",filterComponent:"CONTAINS_TEXT"},nn={type:"PROPERTY",id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",filterComponent:"DATE_RANGE",clickToFilter:!0,enableRelativeMode:!0,formatDate:t=>t.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})},ae={type:"PROPERTY",id:"employeeNumber",key:"employeeNumber",label:"Employee Number",filterComponent:"NUMBER_RANGE",clickToFilter:!0},L={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Location City",filterComponent:"LISTOGRAM"},se={type:"PROPERTY",id:"jobTitle-multi",key:"jobTitle",label:"Job Title",filterComponent:"MULTI_SELECT"},T=[R,le,tn,nn,se,ae,L],dn=[{type:"PROPERTY",id:"start-date-absolute",key:"firstFullTimeStartDate",label:"Absolute Only",filterComponent:"DATE_RANGE"},{type:"PROPERTY",id:"start-date-relative",key:"firstFullTimeStartDate",label:"Relative Enabled",filterComponent:"DATE_RANGE",enableRelativeMode:!0},{type:"PROPERTY",id:"start-date-relative-default",key:"firstFullTimeStartDate",label:"Relative with Defaults",filterComponent:"DATE_RANGE",enableRelativeMode:!0,defaultFilterState:{type:"DATE_RANGE",relativeState:{relativeMin:{count:30,unit:"years",direction:"ago"},relativeMax:{count:0,unit:"days",direction:"fromNow"}}}}],d={width:320,height:600},b={display:"flex",gap:16},S={flex:1},E={marginTop:8,padding:12,background:"#f5f5f5",borderRadius:4,fontSize:12,overflow:"auto",maxHeight:560},on={display:"flex",gap:16,height:600},rn={width:320,flexShrink:0},an=e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),to={title:"Components/FilterList",component:s,tags:["beta"],args:{title:"Filters",enableSorting:!1,showResetButton:!1,showActiveFilterCount:!1,onFilterClauseChanged:g(),onFilterStateChanged:g(),onFilterListChanged:g(),onFilterAdded:g(),onFilterRemoved:g(),onFilterVisibilityChange:g(),onCollapsedChange:g(),onReset:g()},parameters:{msw:{handlers:[...cn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object type definition for the objects being filtered",control:!1},objectSet:{description:"Optional object set to scope aggregation queries",control:!1},filterDefinitions:{description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered.",control:!1},title:{description:"Title displayed in the filter list header",control:"text"},titleIcon:{description:"Icon displayed next to the title",control:!1},onFilterClauseChanged:{description:"Called whenever the filter clause changes. FilterList owns filter state; this is how you read it out.",control:!1,table:{category:"Events"}},onFilterStateChanged:{description:"Called when an individual filter's state changes",control:!1,table:{category:"Events"}},enableSorting:{description:"Enable drag-and-drop reordering of filters",control:"boolean",table:{defaultValue:{summary:"false"}}},enableCollapse:{description:"Whether the collapse/expand control is available. When false the panel is always expanded.",control:"boolean",table:{defaultValue:{summary:"true"}}},collapsed:{description:"Controlled mode. Source of truth for the collapsed state; takes precedence over defaultCollapsed.",control:"boolean"},defaultCollapsed:{description:"Uncontrolled mode. Seeds the initial collapsed state; the component owns it after mount.",control:"boolean",table:{defaultValue:{summary:"false"}}},onCollapsedChange:{description:"Called whenever the collapsed state changes, in both modes. An event listener — it neither controls the state nor enables the control.",control:!1,table:{category:"Events"}},showResetButton:{description:"Show reset filters button in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onReset:{description:"Called when the reset button is clicked",control:!1,table:{category:"Events"}},showActiveFilterCount:{description:"Show count of active filters in header",control:"boolean",table:{defaultValue:{summary:"false"}}},onFilterAdded:{description:"Fires after a filter is shown from the built-in Add filter popover.",control:!1,table:{category:"Events"}},onFilterRemoved:{description:"Fires after a filter's remove button is clicked, once the filter is hidden and its state cleared.",control:!1,table:{category:"Events"}},onFilterVisibilityChange:{description:"Fires when filters are reordered, added or removed via the built-in controls, or reset. Visible filters first in display order, then hidden.",control:!1,table:{category:"Events"}},addFilterMode:{description:"Deprecated — going away; visibility will always be managed internally. Seed it with isVisible on each definition and observe changes with onFilterVisibilityChange.",control:"select",options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},renderAddFilterButton:{description:"Custom render function for the add filter button.",control:!1,table:{category:"Advanced"}},defaultFilterStates:{description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",control:!1,table:{category:"Advanced"}},className:{description:"Additional CSS class name",control:"text"}}},j={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
  ]}
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const o=r.useMemo(()=>[R,L],[]);return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:o,...i})})}},k={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."},source:{code:`<FilterList
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
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const o=r.useMemo(()=>[ae],[]);return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:o,...i})})}};function pn(t){const n=re(),i=r.useMemo(()=>n(l).where({department:"Marketing"}),[n]),o=r.useMemo(()=>[le,L],[]);return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,objectSet:i,filterDefinitions:o,...t})})}const O={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
  ]}
/>`}}},render:t=>e.jsx(pn,{...t})};function un(t){const n=r.useMemo(()=>[R,le,{...tn,isVisible:!1},{...nn,isVisible:!1},{...ae,isVisible:!1},{...L,isVisible:!1}],[]);return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:n,addFilterMode:"uncontrolled",...t})})}const w={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(un,{...t})};function mn(t){const[n,i]=r.useState(void 0),o=t.onFilterClauseChanged,a=r.useCallback(c=>{i(c),o==null||o(c)},[o]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:T,...t,onFilterClauseChanged:a})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:E,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const M={parameters:{docs:{description:{story:"All filter component types, with the emitted where clause shown as JSON. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(mn,{...t})},A={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:T,titleIcon:an,...i})})};function yn(t){const n=t.onReset,i=r.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:T,...t,onReset:i})})}const P={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:t=>e.jsx(yn,{...t})},I={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:T,...i})})},x={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:T,...i})})};function fn(t){return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:T,...t})})}const N={args:{title:"Employee Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"Click the collapse button to minimize the panel. Collapse is available by default and uncontrolled here — no state wiring required. Active filter count is shown in the collapsed state."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  showActiveFilterCount={true}
/>`}}},render:t=>e.jsx(fn,{...t})};function hn(t){const[n,i]=r.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start"},children:[e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:T,...t,collapsed:n,onCollapsedChange:i})}),e.jsx("button",{type:"button",onClick:()=>i(o=>!o),children:n?"Expand from outside":"Collapse from outside"})]})}const _={args:{title:"Employee Filters"},parameters:{docs:{description:{story:"Controlled mode: `collapsed` is the source of truth, so the panel only moves when the caller re-renders with a new value. The external button drives the same state as the header control."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
/>`}}},render:t=>e.jsx(hn,{...t})},Y={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM" },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:t,objectSet:n,...i})=>{const o=r.useMemo(()=>[{type:"KEYWORD_SEARCH",properties:["fullName","department","jobTitle","locationCity"],label:"Search"},R,L],[]);return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:o,...i})})}};function bn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-no-color",key:"department",label:"Department (default colors)",filterComponent:"LISTOGRAM"}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"department-color",key:"department",label:"Department (custom colors)",filterComponent:"LISTOGRAM",colorMap:{Marketing:"#e74c3c",Operations:"#2ecc71",Finance:"#3498db",Product:"#f39c12"}}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:i,...t})})]})}const W={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(bn,{...t})},ln={Marketing:"Marketing Dept.",Operations:"Ops Team",Finance:"Finance & Accounting",Product:"Product Group"};function Tn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-default",key:"department",label:"Department (default)",filterComponent:"LISTOGRAM"}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"department-custom",key:"department",label:"Department (custom render)",filterComponent:"LISTOGRAM",renderValue:o=>ln[o]??o},{type:"PROPERTY",id:"team-custom",key:"team",label:"Team (custom render)",filterComponent:"MULTI_SELECT",renderValue:o=>o.toUpperCase()}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:i,...t})})]})}const B={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Tn,{...t})},Sn={Marketing:"#f97316",Operations:"#3b82f6",Finance:"#10b981",Product:"#a855f7"},Cn={display:"inline-flex",alignItems:"center",gap:8},En={display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0};function gn({value:t}){const n=Sn[t]??"#94a3b8";return e.jsxs("span",{style:Cn,children:[e.jsx("span",{style:{...En,background:n}}),e.jsx("span",{children:ln[t]??t})]})}function Rn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-swatch",key:"department",label:"Department (JSX)",filterComponent:"LISTOGRAM",renderValue:i=>e.jsx(gn,{value:i})},{type:"PROPERTY",id:"team-link",key:"team",label:"Team (anchor JSX)",filterComponent:"MULTI_SELECT",renderValue:i=>e.jsx("a",{href:`#/team/${encodeURIComponent(i)}`,onClick:o=>o.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:i})}],[]);return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})})}const G={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Rn,{...t})};function vn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"dept-full",key:"department",label:"full: label + bar + count",filterComponent:"LISTOGRAM",listogramConfig:{displayMode:"full"}}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"dept-count",key:"department",label:"count: label + count (no bar)",filterComponent:"LISTOGRAM",listogramConfig:{displayMode:"count"}}],[]),o=r.useMemo(()=>[{type:"PROPERTY",id:"dept-minimal",key:"department",label:"minimal: label only",filterComponent:"LISTOGRAM",listogramConfig:{displayMode:"minimal"}}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:i,...t})}),e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:o,...t})})]})}const V={parameters:{docs:{source:{code:`// listogramConfig.displayMode controls what each bucket row renders:
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
</div>`}}},render:t=>e.jsx(vn,{...t})};function Fn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"dept-with-count",key:"department",label:"Department (counts visible)",filterComponent:"LISTOGRAM"},{type:"PROPERTY",id:"team-with-count",key:"team",label:"Team (counts visible)",filterComponent:"MULTI_SELECT"}],[]),i=r.useMemo(()=>[{type:"PROPERTY",id:"dept-no-count",key:"department",label:"Department (counts hidden)",filterComponent:"LISTOGRAM",showCount:!1},{type:"PROPERTY",id:"team-no-count",key:"team",label:"Team (counts hidden)",filterComponent:"MULTI_SELECT",showCount:!1}],[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:i,...t})})]})}const U={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Fn,{...t})};function Ln(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-checkbox",key:"department",label:"Department",filterComponent:"LISTOGRAM"},{type:"PROPERTY",id:"team-checkbox",key:"team",label:"Team",filterComponent:"LISTOGRAM"}],[]);return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})})}const H={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM" },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM" },
  ]}
/>`}}},render:t=>e.jsx(Ln,{...t}),play:async({canvasElement:t})=>{const n=en(t),i=["Engineering","Marketing","Design","Data","Finance"],o=()=>n.getAllByRole("button",{name:/^(Engineering|Marketing|Design|Data|Finance)\s+\d+/u}).map(a=>{const c=i.find(p=>{var u;return(u=a.textContent)==null?void 0:u.includes(p)});if(c==null)throw new Error(`Unable to identify department row from "${a.textContent}"`);return c});await n.findByRole("button",{name:"Marketing 4"}),await h(o()).toEqual(i),await v.click(n.getByRole("button",{name:"Marketing 4"})),await F(()=>h(n.getByRole("button",{name:"Marketing 4"})).toHaveAttribute("aria-pressed","true")),await h(o()).toEqual(i),await v.click(n.getByRole("button",{name:"Marketing 4"})),await F(()=>h(n.getByRole("button",{name:"Marketing 4"})).toHaveAttribute("aria-pressed","false")),await h(o()).toEqual(i)}};function Dn(t){const n=r.useMemo(()=>[{type:"PROPERTY",id:"department-below-fold",key:"department",label:"Department",filterComponent:"LISTOGRAM",defaultFilterState:{type:"EXACT_MATCH",values:["Sales"]}}],[]);return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t})})}const K={parameters:{docs:{description:{story:'A selected value that sorts below the collapsed fold stays visible, appended at the tail of the collapsed view rather than hoisted to the top. The "View all" toggle reveals the rest, and "View less" collapses back to this state.'},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", defaultFilterState: { type: "EXACT_MATCH", values: ["Sales"] } },
  ]}
/>`}}},render:t=>e.jsx(Dn,{...t}),play:async({canvasElement:t})=>{const n=en(t),i=["Engineering","Marketing","Design","Data","Finance","Operations","People","Sales","Customer Success","Legal","Product"],o=/^(Engineering|Marketing|Design|Data|Finance|Operations|People|Sales|Customer Success|Legal|Product)\s+\d+/u,a=()=>n.getAllByRole("button",{name:o}).map(u=>{const y=i.find(m=>{var f;return(f=u.textContent)==null?void 0:f.includes(m)});if(y==null)throw new Error(`Unable to identify department row from "${u.textContent}"`);return y}),c=["Engineering","Marketing","Design","Data","Finance","Sales"],p=["Engineering","Marketing","Design","Data","Finance"];await n.findByRole("button",{name:"Marketing 4"}),await h(a()).toEqual(c),await h(n.getByRole("button",{name:"Sales 2"})).toHaveAttribute("aria-pressed","true"),await v.click(n.getByRole("button",{name:"Sales 2"})),await F(()=>h(a()).toEqual(p)),await h(n.queryByRole("button",{name:"Sales 2"})).toBeNull(),await v.click(n.getByRole("button",{name:/^View all \(\d+\)/u})),await n.findByRole("button",{name:"View less"}),await v.click(n.getByRole("button",{name:"Sales 2"})),await F(()=>h(n.getByRole("button",{name:"Sales 2"})).toHaveAttribute("aria-pressed","true")),await v.click(n.getByRole("button",{name:"View less"})),await n.findByRole("button",{name:/^View all \(\d+\)/u}),await h(n.queryByRole("button",{name:"View less"})).toBeNull(),await F(()=>h(a()).toEqual(c))}};function jn(t){const[n,i]=r.useState(T),o=t.onFilterRemoved,a=r.useCallback(c=>{i(p=>p.filter(u=>"key"in u?u.key!==c:!0)),o==null||o(c)},[o]);return e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:n,...t,onFilterRemoved:a})})}const X={name:"Removable Filters",args:{title:"Removable Filters",showActiveFilterCount:!0},parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:t=>e.jsx(jn,{...t})};function kn(t){const[n,i]=r.useState(void 0),o=r.useMemo(()=>[{type:"STATIC_VALUES",key:"department",label:"Department (static)",filterComponent:"LISTOGRAM",values:["Marketing","Operations","Finance","Product"],listogramConfig:{displayMode:"minimal"}},{type:"STATIC_VALUES",key:"locationCity",label:"Office Location",filterComponent:"SINGLE_SELECT",values:["New York","San Francisco","London","Tokyo"]},{type:"STATIC_VALUES",key:"team",label:"Team (multi-select)",filterComponent:"MULTI_SELECT",values:["Alpha","Beta","Gamma","Delta"]},{type:"STATIC_VALUES",id:"custom-status",key:"status",label:"Status (custom clause)",filterComponent:"LISTOGRAM",values:["Active","Inactive"],listogramConfig:{displayMode:"minimal"},toWhereClause:p=>{if(p.type!=="EXACT_MATCH"||p.values.length===0)return;const u=p.values,y=u.includes("Active"),m=u.includes("Inactive");if(y&&m)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(y)return{employeeStatus:"Active"};if(m)return{employeeStatus:"Inactive"}}}],[]),a=t.onFilterClauseChanged,c=r.useCallback(p=>{i(p),a==null||a(p)},[a]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:o,...t,onFilterClauseChanged:c})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:E,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const J={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(kn,{...t})};function On(t){const[n,i]=r.useState(void 0),[o,a]=r.useState(T),c=t.onFilterRemoved,p=r.useCallback(C=>{a(D=>D.filter(de=>"key"in de?de.key!==C:!0)),c==null||c(C)},[c]),u=t.onReset,y=r.useCallback(()=>{a(T),u==null||u()},[u]),m=t.onFilterClauseChanged,f=r.useCallback(C=>{i(C),m==null||m(C)},[m]);return e.jsxs("div",{style:on,children:[e.jsx("div",{style:rn,children:e.jsx(s,{objectType:l,filterDefinitions:o,titleIcon:an,...t,onReset:y,onFilterRemoved:p,onFilterClauseChanged:f})}),e.jsx("div",{style:S,children:e.jsx(Zt,{objectType:l,filter:n})})]})}const q={name:"Full Featured",args:{title:"Employee Filters",showResetButton:!0,showActiveFilterCount:!0,enableSorting:!0},parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and the emitted where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:t=>e.jsx(On,{...t})};function wn(t){const n=re(),i=r.useMemo(()=>n(l),[n]),[o,a]=r.useState(void 0),c=r.useMemo(()=>[{type:"HAS_LINK",linkName:"lead",label:"Has Manager"},{type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"department",filterComponent:"MULTI_SELECT",label:"Manager Department"}],[]),p=t.onFilterClauseChanged,u=r.useCallback(y=>{a(y),p==null||p(y)},[p]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,objectSet:i,filterDefinitions:c,...t,onFilterClauseChanged:u})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("p",{children:"Note: HAS_LINK and LINKED_PROPERTY filters do not appear in the clause"}),e.jsx("pre",{style:E,children:o?JSON.stringify(o,null,2):"(no active filters)"})]})]})}const z={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. LINKED_PROPERTY filters on a property of the linked object and exposes the same overflow (…) controls as direct property filters — the inline Keeping/Excluding dropdown and Clear all."},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:t=>e.jsx(wn,{...t})},Mn={type:"PROPERTY",id:"combined-department",key:"department",label:"Department",filterComponent:"LISTOGRAM"},An={type:"PROPERTY",id:"combined-locationCity",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT"},Pn={type:"LINKED_PROPERTY",id:"combined-lead-name",linkName:"lead",linkedPropertyKey:"fullName",filterComponent:"MULTI_SELECT",searchField:!1,label:"Manager Name"},In=[Pn,Mn,An],xn=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"rdp",id:"managerName",creator:t=>t.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager Name",renderCell:t=>"managerName"in t?e.jsx("span",{children:t.managerName}):e.jsx("span",{style:{color:"#999"},children:"No Manager"})}];function Nn(t){const n=re(),i=r.useMemo(()=>n(l),[n]),[o,a]=r.useState(i);return e.jsxs("div",{style:on,children:[e.jsx("div",{style:rn,children:e.jsx(s,{...t,objectType:l,objectSet:i,filterDefinitions:In,onFilterClauseChanged:t.onFilterClauseChanged,onEffectiveObjectSet:a,showFilteredOutValues:!0})}),e.jsx("div",{style:S,children:e.jsx(Zt,{objectType:l,objectSet:o,columnDefinitions:xn})})]})}const $={name:"Combined with Object Table",parameters:{docs:{description:{story:'A linked filter (Manager Name) and direct property filters coexist in one FilterList alongside an ObjectTable. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. The table surfaces the linked manager via a derived-property `Manager Name` column (`pivotTo("lead").selectProperty("fullName")`). With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows.'},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
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
/>`}}},render:t=>e.jsx(Nn,{...t})};function ce({filterState:t,onFilterStateChanged:n}){const i=r.useCallback(a=>{const c=a.target.value;n({type:"custom",customState:{value:c}})},[n]),o=r.useCallback(()=>{n({type:"custom",customState:{value:""}})},[n]);return e.jsxs("div",{style:{padding:"12px 0",display:"flex",gap:"8px"},children:[e.jsx("input",{type:"text",value:t.customState.value??"",onChange:i,placeholder:"Enter name substring...",style:{flex:1,padding:"6px 8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),t.customState.value&&e.jsx("button",{onClick:o,style:{padding:"6px 12px",fontSize:"12px",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Clear"})]})}function _n(t){const[n,i]=r.useState(void 0),o=r.useMemo(()=>[{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",renderInput:({filterState:p,onFilterStateChanged:u})=>e.jsx(ce,{filterState:p,onFilterStateChanged:u}),toWhereClause:p=>{var y;const u=(y=p.customState)==null?void 0:y.value;if(u)return{fullName:{$containsAnyTerm:u}}}}],[]),a=t.onFilterClauseChanged,c=r.useCallback(p=>{i(p),a==null||a(p)},[a]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:o,...t,onFilterClauseChanged:c})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:E,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const Q={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:t=>e.jsx(_n,{...t})},Yn={type:"PROPERTY",id:"department-multi",key:"department",label:"Department",filterComponent:"MULTI_SELECT"},Wn={type:"PROPERTY",id:"department-single",key:"department",label:"Department (single)",filterComponent:"SINGLE_SELECT"},Bn=[R,Yn,Wn,ae],Z={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."},source:{code:`// Empty/null values render via <NoValueLabel /> across every filter type.
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
/>`}}},render:()=>e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:Bn})})},Gn=[{type:"KEYWORD_SEARCH",properties:["fullName","jobTitle"],label:"Search",defaultFilterState:{type:"keywordSearch",searchTerm:"manager",operator:"AND"}},{type:"PROPERTY",key:"department",label:"Department",filterComponent:"LISTOGRAM",defaultFilterState:{type:"EXACT_MATCH",values:["Engineering"]}},{type:"PROPERTY",key:"locationCity",label:"Location City",filterComponent:"MULTI_SELECT",defaultFilterState:{type:"SELECT",selectedValues:["New York","Tokyo"]}},{type:"STATIC_VALUES",key:"team",label:"Team (static)",filterComponent:"MULTI_SELECT",values:["Content","Platform","Treasury","Legal"],defaultFilterState:{type:"SELECT",selectedValues:["Platform"]}},{type:"HAS_LINK",linkName:"lead",label:"Has a manager",defaultFilterState:{type:"hasLink",hasLink:!0}},{type:"CUSTOM",key:"custom-name-contains",label:"Name Contains",filterComponent:"CUSTOM",defaultFilterState:{type:"custom",customState:{value:"man"}},renderInput:({filterState:t,onFilterStateChanged:n})=>e.jsx(ce,{filterState:t,onFilterStateChanged:n}),toWhereClause:t=>{var i;const n=(i=t.customState)==null?void 0:i.value;if(n)return{fullName:{$containsAnyTerm:n}}}}];function Vn(t){const[n,i]=r.useState(void 0),o=r.useCallback(a=>{i(a)},[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{...t,objectType:l,filterDefinitions:Gn,onFilterClauseChanged:o})}),e.jsxs("div",{style:S,children:[e.jsx("h4",{children:"Where clause"}),e.jsx("pre",{style:E,children:n?JSON.stringify(n,null,2):"(none)"})]})]})}const ee={name:"With Default Filter State Per Filter",args:{showActiveFilterCount:!0,showResetButton:!0},parameters:{docs:{description:{story:'Give a definition a `defaultFilterState` to start that filter off with a value. Every kind spells it the same way, and the seeded value applies on mount — the where clause is already populated on first render and the seeded filters count towards the active filter count. FilterList owns the state from then on, so editing a filter does not write back to the definition. The seed is also the baseline the reset button returns to, which is why reset starts disabled here and re-enables once you change something.\n\nTo hydrate from saved state keyed by filter instead (localStorage, URL params), use the `defaultFilterStates` map — see "With initial filter states".'},source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(Vn,{...t})},Un={type:"PROPERTY",id:"locationCity-single",key:"locationCity",label:"Location City (single)",filterComponent:"SINGLE_SELECT"},Hn={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"department",filterComponent:"MULTI_SELECT",label:"Manager Department (linked multi)"},Kn={type:"LINKED_PROPERTY",linkName:"lead",linkedPropertyKey:"locationCity",filterComponent:"SINGLE_SELECT",label:"Manager City (linked single)"},Xn={type:"CUSTOM",key:"custom-name-contains",label:"Name Contains (custom)",filterComponent:"CUSTOM",renderInput:({filterState:t,onFilterStateChanged:n})=>e.jsx(ce,{filterState:t,onFilterStateChanged:n}),toWhereClause:t=>{var i;const n=(i=t.customState)==null?void 0:i.value;if(n)return{fullName:{$containsAnyTerm:n}}}},Jn=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Marketing Manager","Chief Scientist"]}],["locationCity-single",{type:"SELECT",selectedValues:["Berlin"]}],["linkedProperty:lead:department",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Marketing","Research"]}}],["linkedProperty:lead:locationCity",{type:"linkedProperty",linkedFilterState:{type:"SELECT",selectedValues:["Berlin"]}}],["custom-name-contains",{type:"custom",customState:{value:"man"}}]]),qn=[R,se,Un,Hn,Kn,Xn];function zn(t){const n=re(),i=r.useMemo(()=>n(l),[n]),[o,a]=r.useState(void 0),c=r.useCallback(p=>{a(p)},[]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{...t,objectType:l,objectSet:i,filterDefinitions:qn,defaultFilterStates:Jn,onFilterClauseChanged:c})}),e.jsxs("div",{style:S,children:[e.jsx("h4",{children:"Active where clause"}),e.jsx("pre",{style:E,children:o?JSON.stringify(o,null,2):"(none)"})]})]})}const te={name:"With Top-level Default Filter States",parameters:{docs:{description:{story:"Pass `defaultFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, LINKED_PROPERTY, and CUSTOM filters. A CUSTOM filter hydrates the same way, except its state shape is defined by the filter itself rather than by FilterList."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:t=>e.jsx(zn,{...t})},ue=[R,se],$n=new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{type:"SELECT",selectedValues:["Software Engineer"]}]]);function me(t){const n=[...t.keys()].sort(),i={};for(const o of n){const a=t.get(o);a!==void 0&&(i[o]=a)}return JSON.stringify(i,null,2)}function sn({defaultFilterStates:t,storyArgs:n}){const i=r.useMemo(()=>{const m=new Map;for(const f of ue)f.type==="PROPERTY"&&f.defaultFilterState&&m.set(pe(f),f.defaultFilterState);if(t)for(const[f,C]of t)m.set(f,C);return m},[t]),[o,a]=r.useState(()=>new Map(i)),c=n.onFilterStateChanged,p=r.useCallback((m,f)=>{a(C=>{const D=new Map(C);return D.set(pe(m),f),D}),c==null||c(m,f)},[c]),u=n.onReset,y=r.useCallback(()=>{a(new Map(i)),u==null||u()},[u,i]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{...n,objectType:l,filterDefinitions:ue,defaultFilterStates:t,showResetButton:!0,onFilterStateChanged:p,onReset:y})}),e.jsxs("div",{style:S,children:[e.jsx("h4",{children:"Filter state dump"}),e.jsx("pre",{"data-testid":"filter-state-dump",style:E,children:me(o)}),e.jsx("h4",{children:"Initial snapshot"}),e.jsx("pre",{"data-testid":"filter-state-initial",style:E,children:me(i)})]})]})}function Qn(t){return e.jsx(sn,{storyArgs:t})}const ne={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button is disabled-by-default until the user diverges from the initial (empty string) snapshot. After clicking reset the filter state returns to the initial snapshot and the button disables itself again."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`}}},render:t=>e.jsx(Qn,{...t})};function Zn(t){return e.jsx(sn,{storyArgs:t,defaultFilterStates:$n})}const ie={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button stays disabled on mount even though there are active selections, because the live filter state matches the initial snapshot. Changing a selection enables the button; clicking it restores the initial snapshot, not an empty state."},source:{code:`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  defaultFilterStates={savedStates}
  showResetButton={true}
/>`}}},render:t=>e.jsx(Zn,{...t})};function ei(t){const[n,i]=r.useState(void 0),o=t.onFilterClauseChanged,a=r.useCallback(c=>{i(c),o==null||o(c)},[o]);return e.jsxs("div",{style:b,children:[e.jsx("div",{style:d,children:e.jsx(s,{objectType:l,filterDefinitions:dn,...t,onFilterClauseChanged:a})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:E,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const oe={parameters:{docs:{description:{story:"One FilterList with three DATE_RANGE filters on the same property (using unique ids): absolute only, relative enabled (empty), and relative with default bounds (30 days ago – Today). The combined where clause JSON is shown on the right."}}},render:t=>e.jsx(ei,{...t})};var ye,fe,he;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(he=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var be,Te,Se;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Se=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var Ce,Ee,ge;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(ge=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:ge.source}}};var Re,ve,Fe;w.parameters={...w.parameters,docs:{...(Re=w.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Fe=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Fe.source}}};var Le,De,je;M.parameters={...M.parameters,docs:{...(Le=M.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(je=(De=M.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};var ke,Oe,we;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(we=(Oe=A.parameters)==null?void 0:Oe.docs)==null?void 0:we.source}}};var Me,Ae,Pe;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Pe=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Ie,xe,Ne;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ne=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source}}};var _e,Ye,We;x.parameters={...x.parameters,docs:{...(_e=x.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(We=(Ye=x.parameters)==null?void 0:Ye.docs)==null?void 0:We.source}}};var Be,Ge,Ve;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ve=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var Ue,He,Ke;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ke=(He=_.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var Xe,Je,qe;Y.parameters={...Y.parameters,docs:{...(Xe=Y.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(qe=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:qe.source}}};var ze,$e,Qe;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Qe=($e=W.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source}}};var Ze,et,tt;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=B.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,it,ot;G.parameters={...G.parameters,docs:{...(nt=G.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(it=G.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var rt,at,lt;V.parameters={...V.parameters,docs:{...(rt=V.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(lt=(at=V.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var st,ct,dt;U.parameters={...U.parameters,docs:{...(st=U.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(dt=(ct=U.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var pt,ut,mt;H.parameters={...H.parameters,docs:{...(pt=H.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(mt=(ut=H.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var yt,ft,ht;K.parameters={...K.parameters,docs:{...(yt=K.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(ht=(ft=K.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var bt,Tt,St;X.parameters={...X.parameters,docs:{...(bt=X.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(St=(Tt=X.parameters)==null?void 0:Tt.docs)==null?void 0:St.source}}};var Ct,Et,gt;J.parameters={...J.parameters,docs:{...(Ct=J.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(gt=(Et=J.parameters)==null?void 0:Et.docs)==null?void 0:gt.source}}};var Rt,vt,Ft;q.parameters={...q.parameters,docs:{...(Rt=q.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Ft=(vt=q.parameters)==null?void 0:vt.docs)==null?void 0:Ft.source}}};var Lt,Dt,jt;z.parameters={...z.parameters,docs:{...(Lt=z.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(jt=(Dt=z.parameters)==null?void 0:Dt.docs)==null?void 0:jt.source}}};var kt,Ot,wt;$.parameters={...$.parameters,docs:{...(kt=$.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(wt=(Ot=$.parameters)==null?void 0:Ot.docs)==null?void 0:wt.source}}};var Mt,At,Pt;Q.parameters={...Q.parameters,docs:{...(Mt=Q.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Pt=(At=Q.parameters)==null?void 0:At.docs)==null?void 0:Pt.source}}};var It,xt,Nt;Z.parameters={...Z.parameters,docs:{...(It=Z.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Nt=(xt=Z.parameters)==null?void 0:xt.docs)==null?void 0:Nt.source}}};var _t,Yt,Wt;ee.parameters={...ee.parameters,docs:{...(_t=ee.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Wt=(Yt=ee.parameters)==null?void 0:Yt.docs)==null?void 0:Wt.source}}};var Bt,Gt,Vt;te.parameters={...te.parameters,docs:{...(Bt=te.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Vt=(Gt=te.parameters)==null?void 0:Gt.docs)==null?void 0:Vt.source}}};var Ut,Ht,Kt;ne.parameters={...ne.parameters,docs:{...(Ut=ne.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Kt=(Ht=ne.parameters)==null?void 0:Ht.docs)==null?void 0:Kt.source}}};var Xt,Jt,qt;ie.parameters={...ie.parameters,docs:{...(Xt=ie.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(qt=(Jt=ie.parameters)==null?void 0:Jt.docs)==null?void 0:qt.source}}};var zt,$t,Qt;oe.parameters={...oe.parameters,docs:{...(zt=oe.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "One FilterList with three DATE_RANGE filters on the same property (using unique ids): " + "absolute only, relative enabled (empty), and relative with default bounds (30 days ago – Today). " + "The combined where clause JSON is shown on the right."
      }
    }
  },
  render: args => <RelativeDateFilterStory {...args} />
}`,...(Qt=($t=oe.parameters)==null?void 0:$t.docs)==null?void 0:Qt.source}}};const no=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","ControlledCollapse","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","WithBelowFoldSelection","WithRemovableFilters","WithStaticValues","FullFeatured","WithLinkedPropertyFilters","CombinedWithObjectTable","WithCustomFilters","NoValueRendering","WithDefaultFilterState","WithInitialFilterStates","WithResetButtonEmptyInitial","WithResetButtonNonEmptyInitial","RelativeDateFilter"];export{w as AddFilterMode,N as CollapsiblePanel,$ as CombinedWithObjectTable,_ as ControlledCollapse,j as Default,q as FullFeatured,k as IntegerNumberRangeRounding,Y as KeywordSearch,Z as NoValueRendering,oe as RelativeDateFilter,I as WithActiveFilterCount,M as WithAllFilterTypes,K as WithBelowFoldSelection,H as WithCheckbox,W as WithColorMap,Q as WithCustomFilters,ee as WithDefaultFilterState,U as WithHiddenCounts,te as WithInitialFilterStates,z as WithLinkedPropertyFilters,V as WithListogramDisplayModes,O as WithObjectSet,X as WithRemovableFilters,B as WithRenderValue,G as WithRenderValueAsReactNode,P as WithResetButton,ne as WithResetButtonEmptyInitial,ie as WithResetButtonNonEmptyInitial,x as WithSorting,J as WithStaticValues,A as WithTitleAndIcon,no as __namedExportsOrder,to as default};
