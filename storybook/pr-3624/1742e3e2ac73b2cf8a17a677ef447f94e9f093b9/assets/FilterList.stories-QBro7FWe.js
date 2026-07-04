import{f as Gt,j as e,r as o}from"./iframe-BeCKStTi.js";import{F as a}from"./filter-list-FTH4XQOY.js";import{O as _t}from"./object-table-BuDALHzo.js";import{E as l}from"./Employee-BBLL99Vm.js";import{u as Q}from"./useOsdkClient-BYjQakhT.js";import{g as ie}from"./getFilterLabel-4iPQGQ-F.js";import"./preload-helper-BICrzKRt.js";import"./MultiColumnSortDialog-JV7B42df.js";import"./DraggableList-CTKpXlM5.js";import"./svgIconContainer-D-9_AOAs.js";import"./index-BfYzXW_3.js";import"./search-CZf2_gwq.js";import"./Input-fr7UgVSn.js";import"./useBaseUiId-COsIpFVh.js";import"./useControlled-5Cxw9uoZ.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./Button-to0u69wN.js";import"./small-cross-BWK0DWdF.js";import"./ActionButton-BABms-rZ.js";import"./Dialog-sahsqXct.js";import"./cross-DDXI9CZ5.js";import"./InternalBackdrop--cXN5sjO.js";import"./composite-U2ojCD3f.js";import"./index-ya4S42ZF.js";import"./MenuTrigger-Boxj4qRh.js";import"./CompositeItem-DkAKuEhG.js";import"./ToolbarRootContext-HD-Y_-jz.js";import"./getDisabledMountTransitionStyles-CyUadLiF.js";import"./getPseudoElementBounds-DW-1RV5o.js";import"./withOsdkMetrics-DoKVZacI.js";import"./Table-C5VSqhJw.js";import"./useEventCallback-g6xh18Ck.js";import"./SkeletonBar-Cbjlo5SH.js";import"./LoadingCell-B04qx1eN.js";import"./ColumnConfigDialog-DdaKJmFv.js";import"./Checkbox-B6cs6clj.js";import"./useValueChanged-BYmOXC78.js";import"./CollapsiblePanel-DkIfNruL.js";import"./chevron-down-BtABU6Ff.js";import"./index-DWv9wz-O.js";import"./error-DvUULirA.js";import"./BaseCbacBanner-DAo4gLE_.js";import"./makeExternalStore-WWCfiCZx.js";import"./Tooltip-CzbeK7mV.js";import"./PopoverPopup-eHRJK0-R.js";import"./toNumber-DLFKNsjO.js";import"./tick-DR0G5XTI.js";import"./DropdownField-DPTs74yS.js";import"./Switch-BuVA-y6q.js";import"./assertUnreachable-tCT10eXl.js";import"./index-ClnMgKgk.js";const{useArgs:It}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:E}=__STORYBOOK_MODULE_TEST__,g={filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"department",key:"department",label:"Department",type:"PROPERTY"},ee={filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"team",key:"team",label:"Team",type:"PROPERTY"},Pt={filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"},id:"fullName",key:"fullName",label:"Full Name",type:"PROPERTY"},Nt={clickToFilter:!0,filterComponent:"DATE_RANGE",filterState:{type:"DATE_RANGE"},formatDate:t=>t.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),id:"firstFullTimeStartDate",key:"firstFullTimeStartDate",label:"Start Date",type:"PROPERTY"},Z={clickToFilter:!0,filterComponent:"NUMBER_RANGE",filterState:{type:"NUMBER_RANGE"},id:"employeeNumber",key:"employeeNumber",label:"Employee Number",type:"PROPERTY"},v={filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"locationCity",key:"locationCity",label:"Location City",type:"PROPERTY"},te={filterComponent:"MULTI_SELECT",filterState:{selectedValues:[],type:"SELECT"},id:"jobTitle-multi",key:"jobTitle",label:"Job Title",type:"PROPERTY"},h=[g,ee,Pt,Nt,te,Z,v],c={height:600,width:320},C={display:"flex",gap:16},S={flex:1},b={background:"#f5f5f5",borderRadius:4,fontSize:12,marginTop:8,maxHeight:560,overflow:"auto",padding:12},xt={display:"flex",gap:16,height:600},wt={flexShrink:0,width:320},Vt=e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z"})}),Fi={argTypes:{addFilterMode:{control:"select",description:'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',options:["controlled","uncontrolled"],table:{category:"Advanced",defaultValue:{summary:'"uncontrolled"'}}},className:{control:"text",description:"Additional CSS class name"},collapsed:{control:"boolean",description:"Whether the filter list panel is collapsed"},enableSorting:{control:"boolean",description:"Enable drag-and-drop reordering of filters",table:{defaultValue:{summary:"false"}}},filterClause:{control:!1,description:"The current where clause. If provided, the filter clause is controlled."},filterDefinitions:{control:!1,description:"Array of filter definitions. If not provided, all filterable properties are auto-discovered."},initialFilterStates:{control:!1,description:"Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",table:{category:"Advanced"}},objectSet:{control:!1,description:"Optional object set to scope aggregation queries"},objectType:{control:!1,description:"The object type definition for the objects being filtered"},onCollapsedChange:{control:!1,description:"Called when the collapsed state changes",table:{category:"Events"}},onFilterAdded:{control:!1,description:"Called when a filter is added. If provided, users can add filters.",table:{category:"Events"}},onFilterClauseChanged:{control:!1,description:"Called when the filter clause changes. Required in controlled mode.",table:{category:"Events"}},onFilterRemoved:{control:!1,description:"Called when a filter is removed. If provided, users can remove filters.",table:{category:"Events"}},onFilterStateChanged:{control:!1,description:"Called when an individual filter's state changes",table:{category:"Events"}},onFilterVisibilityChange:{control:!1,description:"Called when filter visibility or ordering changes (reorder, add, remove).",table:{category:"Events"}},onReset:{control:!1,description:"Called when the reset button is clicked",table:{category:"Events"}},renderAddFilterButton:{control:!1,description:"Custom render function for the add filter button.",table:{category:"Advanced"}},showActiveFilterCount:{control:"boolean",description:"Show count of active filters in header",table:{defaultValue:{summary:"false"}}},showResetButton:{control:"boolean",description:"Show reset filters button in header",table:{defaultValue:{summary:"false"}}},title:{control:"text",description:"Title displayed in the filter list header"},titleIcon:{control:!1,description:"Icon displayed next to the title"}},args:{collapsed:!1,enableSorting:!1,onCollapsedChange:E(),onFilterAdded:E(),onFilterClauseChanged:E(),onFilterRemoved:E(),onFilterStateChanged:E(),onFilterVisibilityChange:E(),onReset:E(),showActiveFilterCount:!1,showResetButton:!1,title:"Filters"},component:a,parameters:{controls:{expanded:!0},msw:{handlers:[...Gt.handlers]}},tags:["beta"],title:"Components/FilterList"},L={parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:({objectType:t,objectSet:n,...i})=>{const r=o.useMemo(()=>[g,v],[]);return e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:r,...i})})}},A={parameters:{docs:{description:{story:"Repro for the integer-typed `NUMBER_RANGE` rounding fix. `employeeNumber` is an `integer` property, so histogram bucket boundaries — `(maxValue - minValue) / 20` — are usually fractional. Click any bar in the histogram. The Min/Max boxes must show whole integers (e.g. `657495073`), not fractional values (e.g. `657495073.4`)."}}},render:({objectType:t,objectSet:n,...i})=>{const r=o.useMemo(()=>[Z],[]);return e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:r,...i})})}};function Ht(t){const n=Q(),i=o.useMemo(()=>n(l).where({department:"Marketing"}),[n]),r=o.useMemo(()=>[ee,v],[]);return e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,objectSet:i,filterDefinitions:r,...t})})}const F={parameters:{docs:{description:{story:"Pass an `objectSet` prop to scope filter aggregations to a subset of objects. Here the object set is filtered to Marketing department employees, so the listogram counts reflect only that subset."},source:{code:`const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:t=>e.jsx(Ht,{...t})};function Ut(t){const n=o.useMemo(()=>[g,ee,{...Pt,isVisible:!1},{...Nt,isVisible:!1},{...Z,isVisible:!1},{...v,isVisible:!1}],[]);return e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:n,addFilterMode:"uncontrolled",...t})})}const j={args:{showResetButton:!0},parameters:{docs:{source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(Ut,{...t})};function Xt(t){const[n,i]=o.useState(void 0),r=t.onFilterClauseChanged,s=o.useCallback(p=>{i(p),r==null||r(p)},[r]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:h,...t,filterClause:n,onFilterClauseChanged:s})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:b,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const M={parameters:{docs:{description:{story:"All filter component types with a controlled where clause. Hover filter items to reveal search and exclude actions."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`}}},render:t=>e.jsx(Xt,{...t})},D={args:{title:"Employee Filters"},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:h,titleIcon:Vt,...i})})};function Bt(t){const n=t.onReset,i=o.useCallback(()=>{console.log("Reset clicked"),n==null||n()},[n]);return e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:h,...t,onReset:i})})}const k={args:{showResetButton:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`}}},render:t=>e.jsx(Bt,{...t})},O={args:{showActiveFilterCount:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:h,...i})})},_={args:{enableSorting:!0},parameters:{docs:{source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`}}},render:({objectType:t,objectSet:n,...i})=>e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:h,...i})})};function Kt(t){return e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:h,...t})})}const I={args:{showActiveFilterCount:!0,title:"Employee Filters"},parameters:{docs:{description:{story:"Click the collapse button to minimize the filter panel. Active filter count is shown in the collapsed state."},source:{code:`const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`}}},render:t=>{const[,n]=It(),i=t.onCollapsedChange,r=o.useCallback(s=>{n({collapsed:s}),i==null||i(s)},[n,i]);return e.jsx(Kt,{...t,onCollapsedChange:r})}},P={parameters:{docs:{source:{code:`const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:({objectType:t,objectSet:n,...i})=>{const r=o.useMemo(()=>[{label:"Search",properties:["fullName","department","jobTitle","locationCity"],type:"KEYWORD_SEARCH"},g,v],[]);return e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:r,...i})})}};function Jt(t){const n=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"department-no-color",key:"department",label:"Department (default colors)",type:"PROPERTY"}],[]),i=o.useMemo(()=>[{colorMap:{Finance:"#3498db",Marketing:"#e74c3c",Operations:"#2ecc71",Product:"#f39c12"},filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"department-color",key:"department",label:"Department (custom colors)",type:"PROPERTY"}],[]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:i,...t})})]})}const N={parameters:{docs:{source:{code:`// Without colorMap: all bars use the default theme color
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(Jt,{...t})},Wt={Finance:"Finance & Accounting",Marketing:"Marketing Dept.",Operations:"Ops Team",Product:"Product Group"};function zt(t){const n=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"department-default",key:"department",label:"Department (default)",type:"PROPERTY"}],[]),i=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"department-custom",key:"department",label:"Department (custom render)",renderValue:r=>Wt[r]??r,type:"PROPERTY"},{filterComponent:"MULTI_SELECT",filterState:{selectedValues:[],type:"SELECT"},id:"team-custom",key:"team",label:"Team (custom render)",renderValue:r=>r.toUpperCase(),type:"PROPERTY"}],[]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:i,...t})})]})}const x={parameters:{docs:{description:{story:"Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for display and search matching. Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components."},source:{code:`const DEPARTMENT_LABELS = {
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

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(zt,{...t})},$t={Finance:"#10b981",Marketing:"#f97316",Operations:"#3b82f6",Product:"#a855f7"},qt={alignItems:"center",display:"inline-flex",gap:8},Qt={borderRadius:"50%",display:"inline-block",flexShrink:0,height:10,width:10};function Zt({value:t}){const n=$t[t]??"#94a3b8";return e.jsxs("span",{style:qt,children:[e.jsx("span",{style:{...Qt,background:n}}),e.jsx("span",{children:Wt[t]??t})]})}function en(t){const n=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"department-swatch",key:"department",label:"Department (JSX)",renderValue:i=>e.jsx(Zt,{value:i}),type:"PROPERTY"},{filterComponent:"MULTI_SELECT",filterState:{selectedValues:[],type:"SELECT"},id:"team-link",key:"team",label:"Team (anchor JSX)",renderValue:i=>e.jsx("a",{href:`#/team/${encodeURIComponent(i)}`,onClick:r=>r.preventDefault(),style:{color:"#2563eb",textDecoration:"underline"},children:i}),type:"PROPERTY"}],[]);return e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:n,...t})})}const w={parameters:{docs:{description:{story:"`renderValue` may return any `ReactNode`, not just a string. Use this to render avatars, anchors, status pills, or any custom JSX inside listogram rows, dropdown items, and chips. When the function returns non-string JSX, search matching falls back to the raw value."},source:{code:`const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(en,{...t})};function tn(t){const n=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"dept-full",key:"department",label:"full: label + bar + count",listogramConfig:{displayMode:"full"},type:"PROPERTY"}],[]),i=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"dept-count",key:"department",label:"count: label + count (no bar)",listogramConfig:{displayMode:"count"},type:"PROPERTY"}],[]),r=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"dept-minimal",key:"department",label:"minimal: label only",listogramConfig:{displayMode:"minimal"},type:"PROPERTY"}],[]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:i,...t})}),e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:r,...t})})]})}const V={parameters:{docs:{source:{code:`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`}}},render:t=>e.jsx(tn,{...t})};function nn(t){const n=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"dept-with-count",key:"department",label:"Department (counts visible)",type:"PROPERTY"},{filterComponent:"MULTI_SELECT",filterState:{selectedValues:[],type:"SELECT"},id:"team-with-count",key:"team",label:"Team (counts visible)",type:"PROPERTY"}],[]),i=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"dept-no-count",key:"department",label:"Department (counts hidden)",showCount:!1,type:"PROPERTY"},{filterComponent:"MULTI_SELECT",filterState:{selectedValues:[],type:"SELECT"},id:"team-no-count",key:"team",label:"Team (counts hidden)",showCount:!1,type:"PROPERTY"}],[]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:n,...t})}),e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:i,...t})})]})}const W={parameters:{docs:{description:{story:"Use `showCount: false` on individual filter definitions to hide aggregation counts in LISTOGRAM and MULTI_SELECT inputs. Bar visualizations in LISTOGRAM are preserved."},source:{code:`// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`}}},render:t=>e.jsx(nn,{...t})};function rn(t){const n=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"department-checkbox",key:"department",label:"Department",type:"PROPERTY"},{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"team-checkbox",key:"team",label:"Team",type:"PROPERTY"}],[]);return e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:n,...t})})}const Y={parameters:{docs:{description:{story:"Listogram rows always include a checkbox for multi-select. Selecting values checks the checkbox and highlights the row. Use the exclude toggle (three-dot menu) to invert selections."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`}}},render:t=>e.jsx(rn,{...t})};function on(t){const[n,i]=o.useState(h),r=t.onFilterRemoved,s=o.useCallback(p=>{i(d=>d.filter(u=>"key"in u?u.key!==p:!0)),r==null||r(p)},[r]);return e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:n,...t,onFilterRemoved:s})})}const G={args:{showActiveFilterCount:!0,title:"Removable Filters"},name:"Removable Filters",parameters:{docs:{description:{story:"When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. Clicking it removes the filter from the list."},source:{code:`const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`}}},render:t=>e.jsx(on,{...t})};function ln(t){const[n,i]=o.useState(void 0),r=o.useMemo(()=>[{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},key:"department",label:"Department (static)",listogramConfig:{displayMode:"minimal"},type:"STATIC_VALUES",values:["Marketing","Operations","Finance","Product"]},{filterComponent:"SINGLE_SELECT",filterState:{selectedValues:[],type:"SELECT"},key:"locationCity",label:"Office Location",type:"STATIC_VALUES",values:["New York","San Francisco","London","Tokyo"]},{filterComponent:"MULTI_SELECT",filterState:{selectedValues:[],type:"SELECT"},key:"team",label:"Team (multi-select)",type:"STATIC_VALUES",values:["Alpha","Beta","Gamma","Delta"]},{filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"custom-status",key:"status",label:"Status (custom clause)",listogramConfig:{displayMode:"minimal"},toWhereClause:d=>{if(d.type!=="EXACT_MATCH"||d.values.length===0)return;const u=d.values,f=u.includes("Active"),m=u.includes("Inactive");if(f&&m)return{$or:[{employeeStatus:"Active"},{employeeStatus:"Inactive"}]};if(f)return{employeeStatus:"Active"};if(m)return{employeeStatus:"Inactive"}},type:"STATIC_VALUES",values:["Active","Inactive"]}],[]),s=t.onFilterClauseChanged,p=o.useCallback(d=>{i(d),s==null||s(d)},[s]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:r,...t,filterClause:n,onFilterClauseChanged:p})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:b,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const H={parameters:{docs:{description:{story:"Use `STATIC_VALUES` filter definitions to provide a fixed list of values instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` function for custom clause generation."},source:{code:`const filterDefinitions = [
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
/>`}}},render:t=>e.jsx(ln,{...t})};function sn(t){const[n,i]=o.useState(void 0),[r,s]=o.useState(h),p=t.onFilterRemoved,d=o.useCallback(T=>{s(R=>R.filter(ne=>"key"in ne?ne.key!==T:!0)),p==null||p(T)},[p]),u=t.onReset,f=o.useCallback(()=>{s(h),u==null||u()},[u]),m=t.onFilterClauseChanged,y=o.useCallback(T=>{i(T),m==null||m(T)},[m]);return e.jsxs("div",{style:xt,children:[e.jsx("div",{style:wt,children:e.jsx(a,{objectType:l,filterDefinitions:r,titleIcon:Vt,...t,onReset:f,onFilterRemoved:d,filterClause:n,onFilterClauseChanged:y})}),e.jsx("div",{style:S,children:e.jsx(_t,{objectType:l,filter:n})})]})}const U={args:{enableSorting:!0,showActiveFilterCount:!0,showResetButton:!0,title:"Employee Filters"},name:"Full Featured",parameters:{docs:{description:{story:"Demonstrates all filter list features together: collapse, reset, active count, sorting, removable filters, per-filter search, exclude toggle, and controlled where clause driving an ObjectTable."},source:{code:`// All features combined: collapse, sort, search, exclude, remove, reset

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
/>`}}},render:t=>{const[,n]=It(),i=t.onCollapsedChange,r=o.useCallback(s=>{n({collapsed:s}),i==null||i(s)},[n,i]);return e.jsx(sn,{...t,onCollapsedChange:r})}};function an(t){const n=Q(),i=o.useMemo(()=>n(l),[n]),[r,s]=o.useState(void 0),p=o.useMemo(()=>[{filterState:{hasLink:!1,type:"hasLink"},label:"Has Manager",linkName:"lead",type:"HAS_LINK"},{filterState:{linkedFilterState:{selectedValues:[],type:"SELECT"},type:"linkedProperty"},label:"Manager Department",linkName:"lead",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{selectedValues:[],type:"SELECT"},linkedPropertyKey:"department",reverseLinkName:"peeps",type:"LINKED_PROPERTY"}],[]),d=t.onFilterClauseChanged,u=o.useCallback(f=>{s(f),d==null||d(f)},[d]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,objectSet:i,filterDefinitions:p,...t,filterClause:r,onFilterClauseChanged:u})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("p",{children:"Note: LINKED_PROPERTY filter is not applied through where clause"}),e.jsx("pre",{style:b,children:r?JSON.stringify(r,null,2):"(no active filters)"})]})]})}const X={name:"Linked Property Filters",parameters:{docs:{description:{story:"Demonstrates filtering on properties of linked objects. HAS_LINK filters objects based on whether they have a linked object. LINKED_PROPERTY filters on a property of the linked object and exposes the same overflow (…) controls as direct property filters — the inline Keeping/Excluding dropdown and Clear all."},source:{code:`// HAS_LINK and LINKED_PROPERTY filter definitions
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
/>`}}},render:t=>e.jsx(an,{...t})},cn={filterComponent:"LISTOGRAM",filterState:{type:"EXACT_MATCH",values:[]},id:"combined-department",key:"department",label:"Department",type:"PROPERTY"},dn={filterComponent:"MULTI_SELECT",filterState:{selectedValues:[],type:"SELECT"},id:"combined-locationCity",key:"locationCity",label:"Location City",type:"PROPERTY"},pn={filterState:{linkedFilterState:{selectedValues:[],type:"SELECT"},type:"linkedProperty"},id:"combined-lead-name",label:"Manager Name",linkName:"lead",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{selectedValues:[],type:"SELECT"},linkedPropertyKey:"fullName",reverseLinkName:"peeps",searchField:!1,type:"LINKED_PROPERTY"},un=[pn,cn,dn],mn=[{locator:{id:"fullName",type:"property"}},{locator:{id:"department",type:"property"}},{locator:{id:"locationCity",type:"property"}},{locator:{creator:t=>t.pivotTo("lead").selectProperty("fullName"),id:"managerName",type:"rdp"},renderCell:t=>"managerName"in t?e.jsx("span",{children:t.managerName}):e.jsx("span",{style:{color:"#999"},children:"No Manager"}),renderHeader:()=>"Manager Name"}];function fn(t){const n=Q(),i=o.useMemo(()=>n(l),[n]),[r,s]=o.useState(void 0),[p,d]=o.useState(i),u=t.onFilterClauseChanged,f=o.useCallback(m=>{s(m),u==null||u(m)},[u]);return e.jsxs("div",{style:xt,children:[e.jsx("div",{style:wt,children:e.jsx(a,{...t,objectType:l,objectSet:i,filterDefinitions:un,filterClause:r,onFilterClauseChanged:f,onEffectiveObjectSet:d,showFilteredOutValues:!0})}),e.jsx("div",{style:S,children:e.jsx(_t,{objectType:l,objectSet:p,columnDefinitions:mn})})]})}const B={name:"Combined with Object Table",parameters:{docs:{description:{story:'A linked filter (Manager Name) and direct property filters coexist in one FilterList alongside an ObjectTable. Pass the unfiltered scope as `objectSet`; FilterList applies the linked-filter narrowing internally and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for the table. The table surfaces the linked manager via a derived-property `Manager Name` column (`pivotTo("lead").selectProperty("fullName")`). With `showFilteredOutValues`, direct-facet values absent under the active linked filter render as greyed-out count=0 filtered-out rows.'},source:{code:`const baseObjectSet = useMemo(() => client(Employee), [client]);
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
/>`}}},render:t=>e.jsx(fn,{...t})};function yn({filterState:t,onFilterStateChanged:n}){const i=o.useCallback(s=>{const{value:p}=s.target;n({customState:{value:p},type:"custom"})},[n]),r=o.useCallback(()=>{n({customState:{value:""},type:"custom"})},[n]);return e.jsxs("div",{style:{display:"flex",gap:"8px",padding:"12px 0"},children:[e.jsx("input",{type:"text",value:t.customState.value,onChange:i,placeholder:"Enter name substring...",style:{border:"1px solid #ccc",borderRadius:"4px",flex:1,fontSize:"14px",padding:"6px 8px"}}),t.customState.value&&e.jsx("button",{onClick:r,style:{backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer",fontSize:"12px",padding:"6px 12px"},children:"Clear"})]})}function Cn(t){const[n,i]=o.useState(void 0),r=o.useMemo(()=>[{filterComponent:"CUSTOM",filterState:{customState:{value:""},type:"custom"},key:"custom-name-contains",label:"Name Contains",renderInput:({filterState:d,onFilterStateChanged:u})=>e.jsx(yn,{filterState:d,onFilterStateChanged:u}),toWhereClause:d=>{var f;const u=(f=d.customState)==null?void 0:f.value;if(u)return{fullName:{$containsAnyTerm:u}}},type:"CUSTOM"}],[]),s=t.onFilterClauseChanged,p=o.useCallback(d=>{i(d),s==null||s(d)},[s]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:r,...t,filterClause:n,onFilterClauseChanged:p})}),e.jsxs("div",{style:S,children:[e.jsx("strong",{children:"Filter Clause (JSON):"}),e.jsx("pre",{style:b,children:n?JSON.stringify(n,null,2):"(no active filters)"})]})]})}const K={name:"Custom Filters",parameters:{docs:{description:{story:"Custom filters provide full control over filtering logic and UI. The 'Name Contains' filter uses `renderInput` for a simple custom input. "},source:{code:`// Custom filter with renderInput
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
/>`}}},render:t=>e.jsx(Cn,{...t})},Tn={filterComponent:"MULTI_SELECT",filterState:{selectedValues:[],type:"SELECT"},id:"department-multi",key:"department",label:"Department",type:"PROPERTY"},hn={filterComponent:"SINGLE_SELECT",filterState:{selectedValues:[],type:"SELECT"},id:"department-single",key:"department",label:"Department (single)",type:"PROPERTY"},Sn=[g,Tn,hn,Z],J={name:"No value rendering",parameters:{docs:{description:{story:"Empty/null filter values render via the canonical `<NoValueLabel />` component — italic, muted, with the literal text 'No value' — across listogram buckets, single-select dropdown options, multi-select dropdown options, and multi-select chips. The mock dataset includes one Employee with `department: \"\"` so the No value row is visible in the listogram."}}},render:()=>e.jsx("div",{style:c,children:e.jsx(a,{objectType:l,filterDefinitions:Sn})})},En={filterComponent:"SINGLE_SELECT",filterState:{selectedValues:[],type:"SELECT"},id:"locationCity-single",key:"locationCity",label:"Location City (single)",type:"PROPERTY"},bn={filterState:{linkedFilterState:{selectedValues:[],type:"SELECT"},type:"linkedProperty"},label:"Manager Department (linked multi)",linkName:"lead",linkedFilterComponent:"MULTI_SELECT",linkedFilterState:{selectedValues:[],type:"SELECT"},linkedPropertyKey:"department",reverseLinkName:"peeps",type:"LINKED_PROPERTY"},gn={filterState:{linkedFilterState:{selectedValues:[],type:"SELECT"},type:"linkedProperty"},label:"Manager City (linked single)",linkName:"lead",linkedFilterComponent:"SINGLE_SELECT",linkedFilterState:{selectedValues:[],type:"SELECT"},linkedPropertyKey:"locationCity",reverseLinkName:"peeps",type:"LINKED_PROPERTY"},vn=new Map([["department",{type:"EXACT_MATCH",values:["Marketing","Research"]}],["jobTitle-multi",{selectedValues:["Marketing Manager","Chief Scientist"],type:"SELECT"}],["locationCity-single",{selectedValues:["Berlin"],type:"SELECT"}],["linkedProperty:lead:department",{linkedFilterState:{selectedValues:["Marketing","Research"],type:"SELECT"},type:"linkedProperty"}],["linkedProperty:lead:locationCity",{linkedFilterState:{selectedValues:["Berlin"],type:"SELECT"},type:"linkedProperty"}]]),Rn=[g,te,En,bn,gn];function Ln(t){const n=Q(),i=o.useMemo(()=>n(l),[n]),[r,s]=o.useState(void 0),p=o.useCallback(d=>{s(d)},[]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:c,children:e.jsx(a,{...t,objectType:l,objectSet:i,filterDefinitions:Rn,initialFilterStates:vn,onFilterClauseChanged:p})}),e.jsxs("div",{style:S,children:[e.jsx("h4",{children:"Active where clause"}),e.jsx("pre",{style:b,children:r?JSON.stringify(r,null,2):"(none)"})]})]})}const z={name:"With initial filter states",parameters:{docs:{description:{story:"Pass `initialFilterStates` to hydrate filters from saved state (e.g. localStorage or URL params). Selections are restored on mount, including values that currently have zero matching rows — they appear with a count of 0 so users can see and clear them. Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, and LINKED_PROPERTY filters."},source:{code:`// "Research", "Chief Scientist", and "Berlin" are not in the current
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
/>`}}},render:t=>e.jsx(Ln,{...t})},re=[g,te],An=new Map([["department",{type:"EXACT_MATCH",values:["Engineering"]}],["jobTitle-multi",{selectedValues:["Software Engineer"],type:"SELECT"}]]);function oe(t){const n=[...t.keys()].sort(),i={};for(const r of n){const s=t.get(r);s!==void 0&&(i[r]=s)}return JSON.stringify(i,null,2)}function Yt({initialFilterStates:t,storyArgs:n}){const i=o.useMemo(()=>{const m=new Map;for(const y of re)y.type==="PROPERTY"&&y.filterState&&m.set(ie(y),y.filterState);if(t)for(const[y,T]of t)m.set(y,T);return m},[t]),[r,s]=o.useState(()=>new Map(i)),p=n.onFilterStateChanged,d=o.useCallback((m,y)=>{s(T=>{const R=new Map(T);return R.set(ie(m),y),R}),p==null||p(m,y)},[p]),u=n.onReset,f=o.useCallback(()=>{s(new Map(i)),u==null||u()},[u,i]);return e.jsxs("div",{style:C,children:[e.jsx("div",{style:c,children:e.jsx(a,{...n,objectType:l,filterDefinitions:re,initialFilterStates:t,showResetButton:!0,onFilterStateChanged:d,onReset:f})}),e.jsxs("div",{style:S,children:[e.jsx("h4",{children:"Filter state dump"}),e.jsx("pre",{"data-testid":"filter-state-dump",style:b,children:oe(r)}),e.jsx("h4",{children:"Initial snapshot"}),e.jsx("pre",{"data-testid":"filter-state-initial",style:b,children:oe(i)})]})]})}function Fn(t){return e.jsx(Yt,{storyArgs:t})}const $={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button is disabled-by-default until the user diverges from the initial (empty string) snapshot. After clicking reset the filter state returns to the initial snapshot and the button disables itself again."},source:{code:`<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`}}},render:t=>e.jsx(Fn,{...t})};function jn(t){return e.jsx(Yt,{storyArgs:t,initialFilterStates:An})}const q={args:{showResetButton:!0},parameters:{docs:{description:{story:"Reset button stays disabled on mount even though there are active selections, because the live filter state matches the initial snapshot. Changing a selection enables the button; clicking it restores the initial snapshot, not an empty state."},source:{code:`const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  showResetButton={true}
/>`}}},render:t=>e.jsx(jn,{...t})};var le,se,ae;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ae=(se=L.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ce,de,pe;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Repro for the integer-typed \`NUMBER_RANGE\` rounding fix. " + "\`employeeNumber\` is an \`integer\` property, so histogram bucket " + "boundaries — \`(maxValue - minValue) / 20\` — are usually fractional. " + "Click any bar in the histogram. The Min/Max boxes must show whole " + "integers (e.g. \`657495073\`), not fractional values " + "(e.g. \`657495073.4\`)."
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
}`,...(pe=(de=A.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,fe;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(me=F.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ye,Ce,Te;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Te=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var he,Se,Ee;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=M.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var be,ge,ve;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ve=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var Re,Le,Ae;k.parameters={...k.parameters,docs:{...(Re=k.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ae=(Le=k.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}};var Fe,je,Me;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(je=O.parameters)==null?void 0:je.docs)==null?void 0:Me.source}}};var De,ke,Oe;_.parameters={..._.parameters,docs:{...(De=_.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Oe=(ke=_.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};var _e,Ie,Pe;I.parameters={...I.parameters,docs:{...(_e=I.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    showActiveFilterCount: true,
    title: "Employee Filters"
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
}`,...(Pe=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Ne,xe,we;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
      label: "Search",
      properties: ["fullName", "department", "jobTitle", "locationCity"],
      type: "KEYWORD_SEARCH"
    }, departmentFilter, locationCityFilter], []);
    return <div style={SIDEBAR_STYLE}>
        <FilterList objectType={Employee} filterDefinitions={filterDefinitions} {...args} />
      </div>;
  }
}`,...(we=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Ve,We,Ye;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ye=(We=N.parameters)==null?void 0:We.docs)==null?void 0:Ye.source}}};var Ge,He,Ue;x.parameters={...x.parameters,docs:{...(Ge=x.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ue=(He=x.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}};var Xe,Be,Ke;w.parameters={...w.parameters,docs:{...(Xe=w.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ke=(Be=w.parameters)==null?void 0:Be.docs)==null?void 0:Ke.source}}};var Je,ze,$e;V.parameters={...V.parameters,docs:{...(Je=V.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];\`
      }
    }
  },
  render: args => <WithListogramDisplayModesStory {...args} />
}`,...($e=(ze=V.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var qe,Qe,Ze;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;Y.parameters={...Y.parameters,docs:{...(et=Y.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
  render: args => <WithCheckboxStory {...args} />
}`,...(nt=(tt=Y.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var it,rt,ot;G.parameters={...G.parameters,docs:{...(it=G.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    showActiveFilterCount: true,
    title: "Removable Filters"
  },
  name: "Removable Filters",
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
}`,...(ot=(rt=G.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var lt,st,at;H.parameters={...H.parameters,docs:{...(lt=H.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(at=(st=H.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};var ct,dt,pt;U.parameters={...U.parameters,docs:{...(ct=U.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    enableSorting: true,
    showActiveFilterCount: true,
    showResetButton: true,
    title: "Employee Filters"
  },
  name: "Full Featured",
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
}`,...(pt=(dt=U.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var ut,mt,ft;X.parameters={...X.parameters,docs:{...(ut=X.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(ft=(mt=X.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var yt,Ct,Tt;B.parameters={...B.parameters,docs:{...(yt=B.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(Tt=(Ct=B.parameters)==null?void 0:Ct.docs)==null?void 0:Tt.source}}};var ht,St,Et;K.parameters={...K.parameters,docs:{...(ht=K.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(Et=(St=K.parameters)==null?void 0:St.docs)==null?void 0:Et.source}}};var bt,gt,vt;J.parameters={...J.parameters,docs:{...(bt=J.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  name: "No value rendering",
  parameters: {
    docs: {
      description: {
        story: "Empty/null filter values render via the canonical \`<NoValueLabel />\` " + "component — italic, muted, with the literal text 'No value' — across " + "listogram buckets, single-select dropdown options, multi-select dropdown " + "options, and multi-select chips. The mock dataset includes one Employee " + 'with \`department: ""\` so the No value row is visible in the listogram.'
      }
    }
  },
  render: () => <div style={SIDEBAR_STYLE}>
      <FilterList objectType={Employee} filterDefinitions={NO_VALUE_FILTER_DEFINITIONS} />
    </div>
}`,...(vt=(gt=J.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var Rt,Lt,At;z.parameters={...z.parameters,docs:{...(Rt=z.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(At=(Lt=z.parameters)==null?void 0:Lt.docs)==null?void 0:At.source}}};var Ft,jt,Mt;$.parameters={...$.parameters,docs:{...(Ft=$.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Mt=(jt=$.parameters)==null?void 0:jt.docs)==null?void 0:Mt.source}}};var Dt,kt,Ot;q.parameters={...q.parameters,docs:{...(Dt=q.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Ot=(kt=q.parameters)==null?void 0:kt.docs)==null?void 0:Ot.source}}};const ji=["Default","IntegerNumberRangeRounding","WithObjectSet","AddFilterMode","WithAllFilterTypes","WithTitleAndIcon","WithResetButton","WithActiveFilterCount","WithSorting","CollapsiblePanel","KeywordSearch","WithColorMap","WithRenderValue","WithRenderValueAsReactNode","WithListogramDisplayModes","WithHiddenCounts","WithCheckbox","WithRemovableFilters","WithStaticValues","FullFeatured","WithLinkedPropertyFilters","CombinedWithObjectTable","WithCustomFilters","NoValueRendering","WithInitialFilterStates","WithResetButtonEmptyInitial","WithResetButtonNonEmptyInitial"];export{j as AddFilterMode,I as CollapsiblePanel,B as CombinedWithObjectTable,L as Default,U as FullFeatured,A as IntegerNumberRangeRounding,P as KeywordSearch,J as NoValueRendering,O as WithActiveFilterCount,M as WithAllFilterTypes,Y as WithCheckbox,N as WithColorMap,K as WithCustomFilters,W as WithHiddenCounts,z as WithInitialFilterStates,X as WithLinkedPropertyFilters,V as WithListogramDisplayModes,F as WithObjectSet,G as WithRemovableFilters,x as WithRenderValue,w as WithRenderValueAsReactNode,k as WithResetButton,$ as WithResetButtonEmptyInitial,q as WithResetButtonNonEmptyInitial,_ as WithSorting,H as WithStaticValues,D as WithTitleAndIcon,ji as __namedExportsOrder,Fi as default};
