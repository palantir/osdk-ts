var te=Object.defineProperty;var oe=(e,o,n)=>o in e?te(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n;var g=(e,o,n)=>oe(e,typeof o!="symbol"?o+"":o,n);import{r,j as t,f as ne}from"./iframe-CKsf8UzZ.js";import{O as d}from"./object-table-CgwITWqY.js";import{E as a}from"./Employee-BAk2o20h.js";import{D as re}from"./Dialog-DI4irBAH.js";import{c as D}from"./index-Dn2ZZwsq.js";import{i as F,a as W,b as ie,p as le,O as ae,c as se,d as de,e as ce,f as pe,B as O,g as ue,h as me,I as H,H as V,N as ye,j as be,k as he,l as fe,m as I,D as ge}from"./dialog-Cww33DAt.js";import{S as je}from"./small-cross-CCWB5NSU.js";import{I as _}from"./svgIconContainer-Ccw1bsj4.js";import{u as L}from"./useOsdkClient-CH_yLZnk.js";const u={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT:"right",TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};function Ce(e){return e===u.TOP||e===u.TOP_LEFT||e===u.TOP_RIGHT||e===u.BOTTOM||e===u.BOTTOM_LEFT||e===u.BOTTOM_RIGHT}function A(e){return e===u.TOP||e===u.TOP_LEFT||e===u.TOP_RIGHT?u.TOP:e===u.BOTTOM||e===u.BOTTOM_LEFT||e===u.BOTTOM_RIGHT?u.BOTTOM:e===u.LEFT||e===u.LEFT_TOP||e===u.LEFT_BOTTOM?u.LEFT:u.RIGHT}class we extends r.PureComponent{constructor(n){super(n);g(this,"componentWillUpdate");g(this,"componentWillReceiveProps");g(this,"componentWillMount");g(this,"getDerivedStateFromProps");g(this,"displayName");g(this,"timeoutIds",[]);g(this,"requestIds",[]);g(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const n of this.timeoutIds)window.clearTimeout(n);this.timeoutIds=[]}});g(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const n of this.requestIds)window.cancelAnimationFrame(n);this.requestIds=[]}});F("production")||this.validateProps(this.props)}componentDidUpdate(n,i,l){F("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(n){const i=window.requestAnimationFrame(n);return this.requestIds.push(i),()=>window.cancelAnimationFrame(i)}setTimeout(n,i){const l=window.setTimeout(n,i);return this.timeoutIds.push(l),()=>window.clearTimeout(l)}validateProps(n){}}var M;(function(e){e.SMALL="360px",e.STANDARD="50%",e.LARGE="90%"})(M||(M={}));class N extends we{render(){const{hasBackdrop:o,size:n,style:i,position:l}=this.props,{className:s,children:h,...y}=this.props,C=A(l),f=D(ie,{[le(C)??""]:!0},s),v=n==null?i:{...i,[Ce(C)?"height":"width"]:n};return t.jsx(ae,{...y,className:D({[se]:o}),children:t.jsxs("div",{className:f,style:v,children:[this.maybeRenderHeader(),h]})})}validateProps(o){o.title==null&&(o.icon!=null&&console.warn(de),o.isCloseButtonShown!=null&&console.warn(ce)),o.position!=null&&o.position!==A(o.position)&&console.warn(pe)}maybeRenderCloseButton(){return this.props.isCloseButtonShown!==!1?t.jsx(O,{"aria-label":"Close",className:ue,icon:t.jsx(je,{size:_.LARGE}),onClick:this.props.onClose,variant:"minimal"}):null}maybeRenderHeader(){const{icon:o,title:n}=this.props;return n==null?null:t.jsxs("div",{className:me,children:[t.jsx(H,{icon:o,size:_.LARGE}),t.jsx(V,{children:n}),this.maybeRenderCloseButton()]})}}g(N,"displayName",`${W}.Drawer`),g(N,"defaultProps",{canOutsideClickClose:!0,isOpen:!1,position:"right",style:{}});var R;(function(e){e[e.STANDARD=48]="STANDARD",e[e.SMALL=32]="SMALL",e[e.EXTRA_SMALL=20]="EXTRA_SMALL"})(R||(R={}));const z=e=>{const{action:o,children:n,className:i,description:l,icon:s,iconMuted:h=!0,iconSize:y=R.STANDARD,layout:C="vertical",title:f}=e;return t.jsxs("div",{className:D(I,`${I}-${C}`,i),children:[s==null?void 0:t.jsx("div",{className:ye,style:{fontSize:`${y}px`,lineHeight:`${y}px`},children:t.jsx(H,{className:D({[be]:h}),icon:s,size:y,"aria-hidden":!0,tabIndex:-1})}),f==null&&l==null?void 0:t.jsxs("div",{className:he,children:[f&&t.jsx(V,{children:f}),l&&fe(l,"div")]}),o,n]})};z.displayName=`${W}.NonIdealState`;const xe={type:"interface",apiName:"Worker"},Te="_reopenButton_lf80i_17",Se="_drawerBody_lf80i_21",De="_blueprintDialog_lf80i_28",Oe="_blueprintDialogContent_lf80i_32",ve="_baseUiDialog_lf80i_39",Ne="_shell_lf80i_44",Re="_instructions_lf80i_52",Ee="_tableFrame_lf80i_57",j={reopenButton:Te,drawerBody:Se,blueprintDialog:De,blueprintDialogContent:Oe,baseUiDialog:ve,shell:Ne,instructions:Re,tableFrame:Ee},B=r.memo(function({tableProps:o}){return t.jsxs("div",{className:j.shell,children:[t.jsx("div",{className:j.instructions,children:"Click a column header chevron. The header menu should open above the overlay and stay interactive."}),t.jsx("div",{className:j.tableFrame,children:t.jsx(d,{...o})})]})}),E=r.memo(function({tableProps:o}){const[n,i]=r.useState(!0),l=r.useCallback(()=>{i(!0)},[]),s=r.useCallback(()=>{i(!1)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(O,{className:j.reopenButton,onClick:l,text:"Open drawer"}),t.jsx(N,{isOpen:n,onClose:s,size:"90%",title:"ObjectTable in Blueprint Drawer",children:t.jsx("div",{className:j.drawerBody,children:t.jsx(B,{tableProps:o})})})]})}),k=r.memo(function({tableProps:o}){const[n,i]=r.useState(!0),l=r.useCallback(()=>{i(!0)},[]),s=r.useCallback(()=>{i(!1)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(O,{className:j.reopenButton,onClick:l,text:"Open Blueprint dialog"}),t.jsx(ge,{className:j.blueprintDialog,isOpen:n,onClose:s,title:"ObjectTable in Blueprint Dialog",children:t.jsx("div",{className:j.blueprintDialogContent,children:t.jsx(B,{tableProps:o})})})]})}),P=r.memo(function({tableProps:o}){const[n,i]=r.useState(!0),l=r.useCallback(()=>{i(!0)},[]),s=r.useCallback(h=>{i(h)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(O,{className:j.reopenButton,onClick:l,text:"Open Base UI dialog"}),t.jsx(re,{className:j.baseUiDialog,isOpen:n,onOpenChange:s,title:"ObjectTable in Base UI Dialog",children:t.jsx(B,{tableProps:o})})]})});try{E.displayName="ObjectTableInBlueprintDrawer",E.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDrawer",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{k.displayName="ObjectTableInBlueprintDialog",k.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{P.displayName="ObjectTableInBaseUIDialog",P.__docgenInfo={description:"",displayName:"ObjectTableInBaseUIDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}const{expect:x,fn:m,userEvent:T,waitFor:ke,within:Pe}=__STORYBOOK_MODULE_TEST__,Be={title:"Components/ObjectTable/Features",component:d,tags:["beta"],parameters:{msw:{handlers:[...ne.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object or interface type of the object",control:!1},columnDefinitions:{description:"Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",control:!1},filter:{description:"The current where clause to filter the objects in the table. If provided, the filter is controlled.",control:!1},enableOrdering:{description:"Whether the table is sortable by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnPinning:{description:"Whether columns can be pinned by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnResizing:{description:"Whether columns can be resized by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnConfig:{description:"Whether the column configuration dialog for column visibility and ordering is available to the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},editMode:{description:"Controls the edit mode behavior of the table. 'always': Table is always in edit mode. 'manual': User can toggle edit mode on/off.",control:"select",options:["manual","always"],defaultValue:"manual",table:{defaultValue:{summary:"manual"}}},showEditFooter:{description:"Whether to render the bottom edit footer. Defaults to `true`. Ignored when `editMode` is manual or `onSubmitEdits` is provided — the footer is always shown in that case.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},defaultOrderBy:{description:"The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:!1},orderBy:{description:"The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:!1},onOrderByChanged:{description:"Called when the order by clause is changed. Required when sorting is controlled.",control:!1,table:{category:"Events"}},onColumnVisibilityChanged:{description:"Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",control:!1,table:{category:"Events"}},onColumnsPinnedChanged:{description:"Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",control:!1,table:{category:"Events"}},onColumnResize:{description:"Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",control:!1,table:{category:"Events"}},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},onColumnHeaderClick:{description:"Called when a column header is clicked. Parameters: columnId - The ID of the clicked column.",control:!1,table:{category:"Events"}},selectionMode:{description:"Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",control:{type:"select"},options:["single","multiple","none"],defaultValue:"none",table:{defaultValue:{summary:"none"}}},selectedRows:{description:"The currently selected rows in the table. If provided, the row selection is controlled.",control:!1},onRowSelection:{description:"Called when the row selection changes. Required when row selection is controlled.",control:!1,table:{category:"Events"}},onRowSelectionChanged:{description:"Called when the row selection changes, with a RowSelectionChange payload (selectedRows, isSelectAll, derived objectSet). Preferred over the deprecated onRowSelection callback.",control:!1,table:{category:"Events"}},focusedRow:{description:"The primary key of the row to render as visually focused. When provided, focus is controlled.",control:!1},onFocusedRowChanged:{description:"Called when the focused row changes — fires in both controlled and uncontrolled modes so callers can observe focus without taking it over.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},rowHeight:{description:"The height of each row in pixels.",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},className:{description:"Additional CSS class name for the table",control:"text"}}},$e=Be,b=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobProfile"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"businessTitle"}},{locator:{type:"property",id:"businessArea"}},{locator:{type:"property",id:"team"}},{locator:{type:"property",id:"workerType"}},{locator:{type:"property",id:"locationName"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"property",id:"locationCountry"}},{locator:{type:"property",id:"locationRegion"}},{locator:{type:"property",id:"locationType"}},{locator:{type:"property",id:"firstFullTimeStartDate"}},{locator:{type:"property",id:"firstInternStartDate"}},{locator:{type:"property",id:"employeeNumber"}},{locator:{type:"property",id:"adUsername"}},{locator:{type:"property",id:"primaryOfficeId"}},{locator:{type:"property",id:"preferredNameFirst"}},{locator:{type:"property",id:"preferredNameLast"}},{locator:{type:"property",id:"leadEmployeeNumber"}},{locator:{type:"property",id:"mentorEmployeeNumber"}}],$=[{locator:{type:"property",id:"fullName"},editable:!0},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})}},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstInternStartDate"},editable:!0,renderCell:e=>t.jsx("div",{children:e.firstInternStartDate?new Date(e.firstInternStartDate).toISOString():"No value"})},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})}},{locator:{type:"property",id:"isRemote"},renderCell:e=>e.isRemote==null?"No Value":e.isRemote?"Yes":"No",editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:[!0,!1],itemToStringLabel:e=>e==null?"No Value":e?"Yes":"No"})}}],U={type:"query",apiName:"getEmployeeSeniority",version:"1.0.0",osdkMetadata:void 0},q=[{locator:{type:"property",id:"fullName"}},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:e=>"managerName"in e?t.jsx("span",{children:e.managerName}):t.jsx("span",{style:{color:"#999"},children:"No Manager"})},{locator:{type:"function",id:"seniority",queryDefinition:U,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}],Ue={args:{objectType:a,columnDefinitions:b},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},qe={args:{objectType:a,columnDefinitions:b},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:e=>{const n=L()(a).where({jobProfile:"Marketing Manager"});return t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e,objectType:a,objectSet:n})})}},Ke={args:{objectType:xe},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},Ge={render:()=>{const e=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"rdp",id:"managerName",creator:n=>n.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:n=>"managerName"in n?t.jsx("span",{children:n.managerName}):t.jsx("span",{style:{color:"#999"},children:"No Manager"})}],o={managerName:{$in:["Ahmed Williams","Fatima Zhang"]}};return t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{objectType:a,columnDefinitions:e,defaultOrderBy:[{property:"managerName",direction:"asc"}],filter:o})})},parameters:{docs:{description:{story:"Combines derived property columns with `defaultOrderBy` and `filter`. Demonstrates sorting by an RDP (managerName) and filtering the derived property."},source:{code:`type RDPs = { managerName: "string" };

const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager",
    renderCell: (object) => {
      if ("managerName" in object) {
        return <span>{object["managerName"]}</span>;
      }
      return <span style={{ color: "#999" }}>No Manager</span>;
    },
  },
];

const filter: WhereClause<Employee, RDPs> = {
  managerName: { $in: ["Ahmed Williams", "Fatima Zhang"] },
};

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  defaultOrderBy={[{ property: "managerName", direction: "asc" }]}
  filter={filter}
/>`}}}},Ye={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"function",id:"seniority",queryDefinition:U,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}]},parameters:{docs:{description:{story:"Use function-backed columns to display computed values from a Foundry query. The 'Seniority' column calls `getEmployeeSeniority` with the current object set and maps each result back to the corresponding row."},source:{code:`import { getEmployeeSeniority } from "./ontology/queries";

type SeniorityFunctions = { seniority: typeof getEmployeeSeniority };

const columnDefinitions: ColumnDefinition<Employee, {}, SeniorityFunctions>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  {
    locator: {
      type: "function",
      id: "seniority",
      queryDefinition: getEmployeeSeniority,
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      getKey: (object) => String(object.$primaryKey),
      getValue: (cellData) => cellData,
    },
    renderHeader: () => "Seniority",
    width: 120,
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},Je={args:{objectType:a,columnDefinitions:b,selectionMode:"single",onRowSelectionChanged:m()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},Xe={args:{objectType:a,columnDefinitions:b,selectionMode:"multiple",onRowSelectionChanged:m()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})}),play:async({canvasElement:e,args:o})=>{const n=Pe(e),i=()=>n.findAllByRole("checkbox",{name:/select row/i}),l=()=>n.findByRole("checkbox",{name:/deselect all rows/i}),[s,h]=await i();await T.click(s),await x(s).toBeChecked(),await ke(()=>x(o.onRowSelectionChanged).toHaveBeenCalled()),await T.click(h),await x(s).toBeChecked(),await x(h).toBeChecked(),await T.click(await l());for(const y of await i())await x(y).not.toBeChecked();await T.click(await n.findByRole("checkbox",{name:"Select all rows"}));for(const y of await i())await x(y).toBeChecked();await T.click(await l());for(const y of await i())await x(y).not.toBeChecked()}},Ze={args:{objectType:a,columnDefinitions:b,renderCellContextMenu:(e,o)=>t.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[t.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),t.jsx("div",{children:o?String(o):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(_, cellValue) => (
    <div
      style={{
        background: "white",
        padding: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        fontSize: 13,
        borderRadius: 4,
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: 4 }}>Cell Value:</div>
      <div>{cellValue ? String(cellValue) : "No Value"}</div>
    </div>
  )}
/>`}}},render:e=>t.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[t.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),t.jsx(d,{...e})]})},Qe={args:{objectType:a,columnDefinitions:q.map((e,o)=>({...e,width:o===0?250:o===1?300:150}))},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  { locator: { type: "property", id: "department" }, width: 300 },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},et={args:{objectType:a,columnDefinitions:b,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},tt={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    pinned: "left",
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
  },
  {
    locator: { type: "property", id: "department" },
    pinned: "right",
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},ot={parameters:{docs:{source:{code:`const customColumnDefinition = [
      ...columnDefinitions,
      {
        locator: {
          type: "custom",
          id: "actions",
        },
        renderHeader: () => "Actions",
        renderCell: (object: any) => {
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => {}}
              >
                View
              </button>
              <button
                onClick={() => {}}
              >
                Edit
              </button>
            </div>
          );
        },
        orderable: false,
        width: 120,
      },
    ]
    
    return  <ObjectTable objectType={Employee} columnDefinitions={customColumnDefinition} />
    `}}},args:{objectType:a,columnDefinitions:[...q.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),t.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},nt={args:{objectType:a,columnDefinitions:b,selectionMode:"multiple",selectedRows:[],orderBy:[{property:"fullName",direction:"asc"}],onRowClick:m(),onColumnHeaderClick:m(),onRowSelectionChanged:m(),onOrderByChanged:m(),onColumnVisibilityChanged:m(),onColumnsPinnedChanged:m(),onColumnResize:m(),onFocusedRowChanged:m()},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  columnDefinitions={defaultEmployeeColumns}
  selectionMode="multiple"
  onRowClick={(employee) => {
    console.log("Row clicked:", employee);
  }}
  onFocusedRowChanged={(employee) => {
    console.log("Row focused:", employee);
  }}
  onColumnHeaderClick={(columnId) => {
    console.log("Column header clicked:", columnId);
  }}
  onRowSelectionChanged={(change) => {
    console.log("Selection changed:", change.selectedRows, change.isSelectAll);
    console.log("Derived objectSet:", change.objectSet);
  }}
  onOrderByChanged={(orderBy) => {
    console.log("Sort changed:", orderBy);
  }}
  onColumnVisibilityChanged={(visibilityState) => {
    console.log("Column visibility changed:", visibilityState);
  }}
  onColumnsPinnedChanged={(pinnedState) => {
    console.log("Pinned columns changed:", pinnedState);
  }}
  onColumnResize={(columnId, newWidth) => {
    console.log("Column resized:", columnId, newWidth);
  }}
/>`}}},render:e=>{const[o,n]=r.useState(null),[i,l]=r.useState(null),[s,h]=r.useState([]),[y,C]=r.useState(!1),[f,v]=r.useState([{property:"fullName",direction:"asc"}]),[K,w]=r.useState(""),G=r.useCallback(c=>{var p;(p=e.onRowClick)==null||p.call(e,c),n(c),w("onRowClick")},[e]),Y=r.useCallback(c=>{var p;(p=e.onColumnHeaderClick)==null||p.call(e,c),l(c),w("onColumnHeaderClick")},[e]),J=r.useCallback(c=>{var p;(p=e.onRowSelectionChanged)==null||p.call(e,c),h(c.selectedRows.map(S=>S.$primaryKey)),C(c.isSelectAll),w("onRowSelectionChanged")},[e]),X=r.useCallback(c=>{var p;(p=e.onOrderByChanged)==null||p.call(e,c),v(c),w("onOrderByChanged")},[e]),Z=r.useCallback(c=>{var p;(p=e.onColumnVisibilityChanged)==null||p.call(e,c),w("onColumnVisibilityChanged")},[e]),Q=r.useCallback(c=>{var p;(p=e.onColumnsPinnedChanged)==null||p.call(e,c),w("onColumnsPinnedChanged")},[e]),ee=r.useCallback((c,p)=>{var S;(S=e.onColumnResize)==null||S.call(e,c,p),w(`onColumnResize (${c})`)},[e]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe"},children:[t.jsx("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:"Event Monitor:"}),t.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[t.jsx("strong",{children:"Last event:"})," ",K||"None"]}),t.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[t.jsx("strong",{children:"Row clicked:"})," ",o?t.jsx("code",{children:o.fullName}):"None"]}),t.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[t.jsx("strong",{children:"Column clicked:"})," ",i?t.jsx("code",{children:i}):"None"]}),t.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[t.jsx("strong",{children:"Selected rows:"})," ",y?"All employees":`${s.length} employees`]}),t.jsxs("div",{style:{fontSize:"12px"},children:[t.jsx("strong",{children:"Current sort:"})," ",f!=null&&f[0]?`${f[0].property} (${f[0].direction})`:"None"]})]}),t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e,selectedRows:s,orderBy:f,onRowClick:G,onColumnHeaderClick:Y,onRowSelectionChanged:J,onOrderByChanged:X,onColumnVisibilityChanged:Z,onColumnsPinnedChanged:Q,onColumnResize:ee})})]})}},rt={args:{objectType:a,columnDefinitions:b,orderBy:[{property:"fullName",direction:"asc"}],onOrderByChanged:m()},parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:e=>{const[o,n]=r.useState(e.orderBy??[{property:"fullName",direction:"asc"}]),i=r.useCallback(l=>{var s;(s=e.onOrderByChanged)==null||s.call(e,l),n(l)},[e]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("strong",{children:"Current Sort:"})," ",o.map((l,s)=>t.jsxs("span",{children:[l.property," (",l.direction,")",s<o.length-1&&", "]},s))]}),t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e,orderBy:o,onOrderByChanged:i})})]})}},it={args:{objectType:a,columnDefinitions:b,selectionMode:"multiple",selectedRows:[],onRowSelectionChanged:m()},parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);
const [isSelectAll, setIsSelectAll] = useState(false);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    isAllSelected={isSelectAll}
    onRowSelectionChanged={(change) => {
      setSelectedRows(change.selectedRows.map((r) => r.$primaryKey));
      setIsSelectAll(change.isSelectAll);
    }}
  />
);`}}},render:e=>{const[o,n]=r.useState(e.selectedRows??[]),[i,l]=r.useState(!1),s=r.useCallback(h=>{var y;(y=e.onRowSelectionChanged)==null||y.call(e,h),n(h.selectedRows.map(C=>C.$primaryKey)),l(h.isSelectAll)},[e]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("strong",{children:"Selected:"})," ",i?"All Employees":`${o.length} employees`,o.length>0&&t.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{n([]),l(!1)},children:"Clear Selection"})]}),t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e,selectedRows:o,isAllSelected:i,onRowSelectionChanged:s})})]})}},lt={args:{objectType:a,columnDefinitions:b,onFocusedRowChanged:m()},parameters:{docs:{description:{story:"Demonstrates the `focusedRow` / `onFocusedRowChanged` API. Click any row to focus it; the focused employee is shown in the banner above and persists until cleared by the caller. Because focus is controlled, outside clicks no longer auto-clear — the caller owns clearing."},source:{code:`const [focusedRow, setFocusedRow] = useState<Osdk.Instance<Employee> | null>(null);

return (
  <>
    <div>
      Focused employee: {focusedRow?.fullName ?? "none"}
      <button
        onClick={() => setFocusedRow(null)}
        disabled={focusedRow == null}
      >
        Clear focus
      </button>
    </div>
    <ObjectTable
      objectType={Employee}
      focusedRow={focusedRow?.$primaryKey ?? null}
      onFocusedRowChanged={setFocusedRow}
    />
  </>
);`}}},render:e=>{const[o,n]=r.useState(null),i=r.useCallback(l=>{var s;(s=e.onFocusedRowChanged)==null||s.call(e,l),n(l)},[e]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe",display:"flex",alignItems:"center",gap:"12px"},children:[t.jsxs("span",{children:[t.jsx("strong",{children:"Focused employee:"})," ",o==null?"none":`${o.fullName} (#${o.employeeNumber})`]}),t.jsx("button",{type:"button",style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:o==null?"not-allowed":"pointer"},onClick:()=>n(null),disabled:o==null,children:"Clear focus"})]}),t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e,focusedRow:(o==null?void 0:o.$primaryKey)??null,onFocusedRowChanged:i})})]})}},at={args:{objectType:a,columnDefinitions:b,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},st={args:{objectType:a,columnDefinitions:b},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. Open the drawer and click any column header chevron; the menu should appear above the drawer."},source:{code:`<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>`}}},render:e=>t.jsx(E,{tableProps:e})},dt={args:{objectType:a,columnDefinitions:b},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>t.jsx(k,{tableProps:e})},ct={args:{objectType:a,columnDefinitions:b},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>t.jsx(P,{tableProps:e})},pt={args:{objectType:a,columnDefinitions:b,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},ut={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>t.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const o=e.firstFullTimeStartDate,n=o&&new Date(o)<=new Date;return t.jsx("span",{className:`status-tag ${n?"active":"inactive"}`,children:n?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    renderHeader: () => (
      <a
        href="#"
        className="header-link"
        onClick={(e) => {
          e.preventDefault();
          alert("Employee Name column clicked!");
        }}
      >
        Employee Name
      </a>
    ),
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    renderHeader: () => "Job Title",
  },
  {
    locator: {
      type: "custom",
      id: "employment-status",
    },
    renderHeader: () => "Employment Status",
    renderCell: (employee) => {
      const startDate = employee["firstFullTimeStartDate"];
      const isActive = startDate && new Date(startDate) <= new Date();

      return (
        <span className={\`status-tag \${isActive ? "active" : "inactive"}\`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 140,
  },
  {
    locator: { type: "property", id: "department" },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e})})},mt={args:{objectType:a,columnDefinitions:$,editMode:"manual",onCellValueChanged:m()},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Software Engineer",
          "Senior Software Engineer",
          "Staff Engineer",
          "Engineering Manager",
          "Product Manager",
          "Designer",
        ],
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      }),
    },
  },
  // Example where the field is inferred from datatype
  {
    locator: { type: "property", id: "firstInternStartDate" },
    editable: true,
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({
        showTime: false,
        placeholder: "Select date...",
      }),
    },
  },
  // Boolean dropdown example
  {
    locator: { type: "property", id: "isRemote" },
    renderCell: (object) => {
      if (object.isRemote == null) {
        return "No Value";
      }
      return object.isRemote ? "Yes" : "No";
    },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [true, false],
        itemToStringLabel: (item: boolean | undefined) =>
          item === false ? "No" : item === true ? "Yes" : "No Value",
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="manual"
  />
);`}}},render:e=>{const[o,n]=r.useState(),i=r.useCallback(l=>{var s;(s=e.onCellValueChanged)==null||s.call(e,l),n(l)},[e]);return t.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[t.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'Try changing showEditFooter to false to hide the edit footer bar. Change edit mode to "manual" to enable inline editing with an Edit Table button.'}),o!=null&&t.jsxs("div",{style:{padding:"12px",backgroundColor:"#d1ecf1",marginBottom:"8px",borderRadius:"4px",fontFamily:"monospace",fontSize:"13px"},children:[t.jsx("strong",{children:"Last cell edit:"})," ",'Column "',o.columnId,'" changed from "',String(o.oldValue),'" to "',String(o.newValue),'"']}),t.jsx(d,{...e,onCellValueChanged:i})]})}},yt={args:{objectType:a,columnDefinitions:$,editMode:"manual",onSubmitEdits:m(async e=>(await new Promise(o=>setTimeout(o,1e3)),!0))},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Software Engineer",
          "Senior Software Engineer",
          "Staff Engineer",
          "Engineering Manager",
          "Product Manager",
          "Designer",
        ],
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      }),
    },
  },
  {
    locator: { type: "property", id: "firstInternStartDate" },
    editable: true,
    renderCell: (object) => (
      <div>
        {object.firstInternStartDate
          ? new Date(object.firstInternStartDate).toISOString()
          : "No value"}
      </div>
    ),
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({
        showTime: false,
        placeholder: "Select date...",
      }),
    },
  },
  // Boolean dropdown example
  {
    locator: { type: "property", id: "isRemote" },
    renderCell: (object) => {
      if (object.isRemote == null) {
        return "No Value";
      }
      return object.isRemote ? "Yes" : "No";
    },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [true, false],
        itemToStringLabel: (item: boolean | undefined) =>
          item === false ? "No" : item === true ? "Yes" : "No Value",
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="manual"
    onCellValueChanged={(info) => {
      console.log("Cell value changed:", info);
    }}
    onSubmitEdits={async (edits) => {
      // Call your API or action here
      await submitEmployeeUpdates(edits);
      // Return true to indicate success and clear edits
      return true;
    }}
  />
);`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e,objectType:a})})},bt={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0,validateEdit:async e=>String(e??"").trim().length>=2?void 0:"Name must be at least 2 characters long"},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0,validateEdit:async e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e??""))?void 0:"Please enter a valid email address"},{locator:{type:"property",id:"employeeNumber"},editable:!0,validateEdit:async e=>Number(e)>0?void 0:"Employee number must be positive"},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})},validateEdit:async e=>e?void 0:"Job title is required"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})},validateEdit:async e=>{if(!e||isNaN(Date.parse(e)))return"Please enter a valid date";const o=new Date(e),n=new Date;if(n.setHours(0,0,0,0),o<n)return"Date cannot be before today"}}],editMode:"always",onSubmitEdits:m(async e=>!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
    validateEdit: async (value: string) => {
      return value.trim().length >= 2 ? undefined : "Name must be at least 2 characters long";
    },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
    validateEdit: async (value: string) => {
      const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
      return emailRegex.test(value) ? undefined : "Please enter a valid email address";
    },
  },
  {
    locator: { type: "property", id: "employeeNumber" },
    editable: true,
    validateEdit: async (value: number) => {
      return value > 0 ? undefined : "Employee number must be positive";
    },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Software Engineer",
          "Senior Software Engineer",
          "Staff Engineer",
          "Engineering Manager",
          "Product Manager",
          "Designer",
        ],
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
    },
    validateEdit: async (value: unknown) => {
      return value ? undefined : "Job title is required";
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="always"
    onSubmitEdits={async (edits) => {
      return true;
    }}
  />
);`}}},render:e=>t.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[t.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:["Try editing cells with invalid values to see validation in action:",t.jsxs("ul",{style:{margin:"8px 0 0 20px"},children:[t.jsx("li",{children:"Name must be at least 2 characters"}),t.jsx("li",{children:"Email must be a valid format"}),t.jsx("li",{children:"Employee number must be positive"}),t.jsx("li",{children:"Job title is required"}),t.jsx("li",{children:"Start date is required"})]})]}),t.jsx(d,{...e,objectType:a})]})},ht={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"},editable:e=>(e.jobTitle??"")==="Senior Product Manager"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:e=>({items:e.department==="Operations"?["Sales","Marketing"]:["Sales","Marketing","Finance","Human Resources"]})}}],editMode:"always",onCellValueChanged:m()},parameters:{docs:{description:{story:"Demonstrates per-row configuration with `editable` as a predicate function and dynamic `getFieldComponentProps` that computes dropdown items from the row's data. jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows"},source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: { type: "property", id: "jobTitle" },
    // Only allow editing for Senior Product Manager
    editable: (rowData) => {
      const jobTitle = String(rowData.jobTitle ?? "");
      return jobTitle === "Senior Product Manager";
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      // Dropdown items depend on the row's current department
      getFieldComponentProps: (employee) => ({
        items: employee.department === "Engineering"
          ? ["Engineering", "Product", "Design"]
          : ["Sales", "Marketing", "Finance", "Human Resources"],
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="always"
  />
);`}}},render:e=>t.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[t.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'JobTitle is only editable for "Senior Product Manager" rows. Department dropdown shows only 2 options for Operations rows.'}),t.jsx(d,{...e})]})},ft={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}}]},parameters:{docs:{description:{story:'Demonstrates using `getRowAttributes` to set data attributes on rows and a `className` on the table to scope CSS overrides via the data attribute selector. New York employees get a light blue background through the `[data-highlight-row="true"]` CSS selector scoped under the table\'s className.'},source:{code:`/* CSS (imported stylesheet):
.customTableStyling {
  tr[data-highlight-row="true"] {
    --osdk-table-row-bg-default: #f0f8ff;
    --osdk-table-row-bg-alternate: #e8f4ff;
    --osdk-table-row-bg-hover: #e0f0ff;
  }
}
*/

const getRowAttributes = useCallback((rowData) => ({
  "data-highlight-row": rowData.locationCity === "New York" ? "true" : undefined,
}), []);

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    getRowAttributes={getRowAttributes}
    className="customTableStyling"
  />
);`}}},render:e=>{const o=r.useCallback(n=>({"data-highlight-row":n.locationCity==="New York"?"true":void 0}),[]);return t.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[t.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:[t.jsx("strong",{children:"Row attributes + className for CSS override:"})," ","New York employees have a light blue background via"," ",t.jsx("code",{children:'tr[data-highlight-row="true"]'})," scoped under"," ",t.jsx("code",{children:".customTableStyling"}),"."]}),t.jsx(d,{...e,getRowAttributes:o,className:"customTableStyling"})]})}},gt={args:{objectType:a,columnDefinitions:b,renderEmptyState:()=>t.jsx(z,{icon:"folder-close",title:"No saved views found."})},parameters:{docs:{description:{story:"Override the default empty state with a custom render function. Useful for matching product copy or visuals (here a Blueprint `NonIdealState`)."},source:{code:`
import { NonIdealState } from "@blueprintjs/core";

const emptyObjectSet = client(Employee).where({
  jobProfile: "Nonexistent Role",
});

return (
  <ObjectTable
    objectType={Employee}
    objectSet={emptyObjectSet}
    renderEmptyState={() => (
      <NonIdealState
        icon="folder-close"
        title="No saved views found."
      />
    )}
  />
);
`}}},render:e=>{const n=L()(a).where({jobProfile:"Nonexistent Role"});return t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(d,{...e,objectSet:n})})}};export{rt as C,Ue as D,mt as E,ct as H,Xe as M,ht as P,ft as R,Je as S,Ke as W,qe as a,ot as b,ut as c,tt as d,Ge as e,Ye as f,et as g,lt as h,it as i,bt as j,yt as k,nt as l,Ze as m,Qe as n,$e as o,gt as p,pt as q,at as r,dt as s,st as t};
