var rt=Object.defineProperty;var it=(e,t,o)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var g=(e,t,o)=>it(e,typeof t!="symbol"?t+"":t,o);import{r,j as n,f as at}from"./iframe-DeHTg1tG.js";import{O as d}from"./object-table-DP8rY_QH.js";import{E as a}from"./Employee-BAk2o20h.js";import{D as lt}from"./Dialog-a_3j4i1j.js";import{c as X}from"./index-ro7AvuIc.js";import{i as ae,a as Ln,b as st,p as dt,O as ct,c as pt,d as ut,e as mt,f as yt,B as Z,g as bt,h as gt,I as zn,H as $n,N as ft,j as ht,k as Ct,l as jt,m as le,D as wt}from"./dialog-CT2vGBcH.js";import{S as St}from"./small-cross-Ci3X4BoS.js";import{I as se}from"./svgIconContainer-Lk64Tlsf.js";import{u as Un}from"./useOsdkClient-B1wkU1Z5.js";import"./preload-helper-EJwzNQLU.js";import"./Table-Da1JcJfx.js";import"./useEventCallback-BUD6r9IK.js";import"./SkeletonBar-COBQEB9G.js";import"./LoadingCell-KJTlvCyr.js";import"./ColumnConfigDialog-B7rKhi8M.js";import"./DraggableList-CHUdrHOr.js";import"./Input-BiN32nY5.js";import"./useBaseUiId-C0NRjzKl.js";import"./useControlled-ClFeeM_W.js";import"./index-BlwfbVod.js";import"./index-tnRCpKuy.js";import"./Button-cxzLacU6.js";import"./ActionButton-DZx2s7oN.js";import"./Checkbox-CnVRBN9f.js";import"./minus-g5jyZnLm.js";import"./cross-9ntTTgbT.js";import"./useValueChanged-Ba2RV4iY.js";import"./InternalBackdrop-DogLhwLv.js";import"./composite-CB8XXB9I.js";import"./index-OcEguPI3.js";import"./caret-down-DmBfFsdX.js";import"./CollapsiblePanel-DtAgkHcT.js";import"./MultiColumnSortDialog-BxS8AAEH.js";import"./MenuTrigger-BpR3KwRB.js";import"./CompositeItem-Cimn9Ixc.js";import"./ToolbarRootContext-DnXuKCx7.js";import"./getDisabledMountTransitionStyles-C6sEo0bF.js";import"./getPseudoElementBounds-CG-UnFcJ.js";import"./chevron-down-zU7hHmOr.js";import"./index-GBEKjqFw.js";import"./error-CoPAJ4qi.js";import"./BaseCbacBanner-DLGYzFCR.js";import"./makeExternalStore-rlAonaJe.js";import"./Tooltip-C6evSRPA.js";import"./PopoverPopup-DUH6ZOtv.js";import"./toNumber-DPVZoAeu.js";import"./DropdownField-CbTJYx49.js";import"./useShape-CDq4-oOI.js";import"./withOsdkMetrics-BhvCNdhA.js";import"./iconLoader-wmF7vIZg.js";const u={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT:"right",TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};function Tt(e){return e===u.TOP||e===u.TOP_LEFT||e===u.TOP_RIGHT||e===u.BOTTOM||e===u.BOTTOM_LEFT||e===u.BOTTOM_RIGHT}function de(e){return e===u.TOP||e===u.TOP_LEFT||e===u.TOP_RIGHT?u.TOP:e===u.BOTTOM||e===u.BOTTOM_LEFT||e===u.BOTTOM_RIGHT?u.BOTTOM:e===u.LEFT||e===u.LEFT_TOP||e===u.LEFT_BOTTOM?u.LEFT:u.RIGHT}class Dt extends r.PureComponent{constructor(o){super(o);g(this,"componentWillUpdate");g(this,"componentWillReceiveProps");g(this,"componentWillMount");g(this,"getDerivedStateFromProps");g(this,"displayName");g(this,"timeoutIds",[]);g(this,"requestIds",[]);g(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const o of this.timeoutIds)window.clearTimeout(o);this.timeoutIds=[]}});g(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const o of this.requestIds)window.cancelAnimationFrame(o);this.requestIds=[]}});ae("production")||this.validateProps(this.props)}componentDidUpdate(o,l,i){ae("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(o){const l=window.requestAnimationFrame(o);return this.requestIds.push(l),()=>window.cancelAnimationFrame(l)}setTimeout(o,l){const i=window.setTimeout(o,l);return this.timeoutIds.push(i),()=>window.clearTimeout(i)}validateProps(o){}}var ce;(function(e){e.SMALL="360px",e.STANDARD="50%",e.LARGE="90%"})(ce||(ce={}));class ee extends Dt{render(){const{hasBackdrop:t,size:o,style:l,position:i}=this.props,{className:s,children:f,...h}=this.props,j=de(i),b=X(st,{[dt(j)??""]:!0},s),Q=o==null?l:{...l,[Tt(j)?"height":"width"]:o};return n.jsx(ct,{...h,className:X({[pt]:t}),children:n.jsxs("div",{className:b,style:Q,children:[this.maybeRenderHeader(),f]})})}validateProps(t){t.title==null&&(t.icon!=null&&console.warn(ut),t.isCloseButtonShown!=null&&console.warn(mt)),t.position!=null&&t.position!==de(t.position)&&console.warn(yt)}maybeRenderCloseButton(){return this.props.isCloseButtonShown!==!1?n.jsx(Z,{"aria-label":"Close",className:bt,icon:n.jsx(St,{size:se.LARGE}),onClick:this.props.onClose,variant:"minimal"}):null}maybeRenderHeader(){const{icon:t,title:o}=this.props;return o==null?null:n.jsxs("div",{className:gt,children:[n.jsx(zn,{icon:t,size:se.LARGE}),n.jsx($n,{children:o}),this.maybeRenderCloseButton()]})}}g(ee,"displayName",`${Ln}.Drawer`),g(ee,"defaultProps",{canOutsideClickClose:!0,isOpen:!1,position:"right",style:{}});var ne;(function(e){e[e.STANDARD=48]="STANDARD",e[e.SMALL=32]="SMALL",e[e.EXTRA_SMALL=20]="EXTRA_SMALL"})(ne||(ne={}));const qn=e=>{const{action:t,children:o,className:l,description:i,icon:s,iconMuted:f=!0,iconSize:h=ne.STANDARD,layout:j="vertical",title:b}=e;return n.jsxs("div",{className:X(le,`${le}-${j}`,l),children:[s==null?void 0:n.jsx("div",{className:ft,style:{fontSize:`${h}px`,lineHeight:`${h}px`},children:n.jsx(zn,{className:X({[ht]:f}),icon:s,size:h,"aria-hidden":!0,tabIndex:-1})}),b==null&&i==null?void 0:n.jsxs("div",{className:Ct,children:[b&&n.jsx($n,{children:b}),i&&jt(i,"div")]}),t,o]})};qn.displayName=`${Ln}.NonIdealState`;const vt={type:"interface",apiName:"Worker"},Et="_reopenButton_lf80i_17",xt="_drawerBody_lf80i_21",Ot="_blueprintDialog_lf80i_28",Rt="_blueprintDialogContent_lf80i_32",Nt="_baseUiDialog_lf80i_39",kt="_shell_lf80i_44",Pt="_instructions_lf80i_52",Ft="_tableFrame_lf80i_57",C={reopenButton:Et,drawerBody:xt,blueprintDialog:Ot,blueprintDialogContent:Rt,baseUiDialog:Nt,shell:kt,instructions:Pt,tableFrame:Ft},ie=r.memo(function({tableProps:t}){return n.jsxs("div",{className:C.shell,children:[n.jsx("div",{className:C.instructions,children:"Click a column header chevron. The header menu should open above the overlay and stay interactive."}),n.jsx("div",{className:C.tableFrame,children:n.jsx(d,{...t})})]})}),te=r.memo(function({tableProps:t}){const[o,l]=r.useState(!0),i=r.useCallback(()=>{l(!0)},[]),s=r.useCallback(()=>{l(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(Z,{className:C.reopenButton,onClick:i,text:"Open drawer"}),n.jsx(ee,{isOpen:o,onClose:s,size:"90%",title:"ObjectTable in Blueprint Drawer",children:n.jsx("div",{className:C.drawerBody,children:n.jsx(ie,{tableProps:t})})})]})}),oe=r.memo(function({tableProps:t}){const[o,l]=r.useState(!0),i=r.useCallback(()=>{l(!0)},[]),s=r.useCallback(()=>{l(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(Z,{className:C.reopenButton,onClick:i,text:"Open Blueprint dialog"}),n.jsx(wt,{className:C.blueprintDialog,isOpen:o,onClose:s,title:"ObjectTable in Blueprint Dialog",children:n.jsx("div",{className:C.blueprintDialogContent,children:n.jsx(ie,{tableProps:t})})})]})}),re=r.memo(function({tableProps:t}){const[o,l]=r.useState(!0),i=r.useCallback(()=>{l(!0)},[]),s=r.useCallback(f=>{l(f)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(Z,{className:C.reopenButton,onClick:i,text:"Open Base UI dialog"}),n.jsx(lt,{className:C.baseUiDialog,isOpen:o,onOpenChange:s,title:"ObjectTable in Base UI Dialog",children:n.jsx(ie,{tableProps:t})})]})});try{te.displayName="ObjectTableInBlueprintDrawer",te.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDrawer",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{oe.displayName="ObjectTableInBlueprintDialog",oe.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{re.displayName="ObjectTableInBaseUIDialog",re.__docgenInfo={description:"",displayName:"ObjectTableInBaseUIDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}const{fn:m}=__STORYBOOK_MODULE_TEST__,Po={title:"Components/ObjectTable/Features",component:d,tags:["beta"],parameters:{msw:{handlers:[...at.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object or interface type of the object",control:!1},columnDefinitions:{description:"Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",control:!1},filter:{description:"The current where clause to filter the objects in the table. If provided, the filter is controlled.",control:!1},enableOrdering:{description:"Whether the table is sortable by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnPinning:{description:"Whether columns can be pinned by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnResizing:{description:"Whether columns can be resized by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnConfig:{description:"Whether the column configuration dialog for column visibility and ordering is available to the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},editMode:{description:"Controls the edit mode behavior of the table. 'always': Table is always in edit mode. 'manual': User can toggle edit mode on/off.",control:"select",options:["manual","always"],defaultValue:"manual",table:{defaultValue:{summary:"manual"}}},showEditFooter:{description:"Whether to render the bottom edit footer. Defaults to `true`. Ignored when `editMode` is manual or `onSubmitEdits` is provided — the footer is always shown in that case.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},defaultOrderBy:{description:"The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:!1},orderBy:{description:"The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:!1},onOrderByChanged:{description:"Called when the order by clause is changed. Required when sorting is controlled.",control:!1,table:{category:"Events"}},onColumnVisibilityChanged:{description:"Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",control:!1,table:{category:"Events"}},onColumnsPinnedChanged:{description:"Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",control:!1,table:{category:"Events"}},onColumnResize:{description:"Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",control:!1,table:{category:"Events"}},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},onColumnHeaderClick:{description:"Called when a column header is clicked. Parameters: columnId - The ID of the clicked column.",control:!1,table:{category:"Events"}},selectionMode:{description:"Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",control:{type:"select"},options:["single","multiple","none"],defaultValue:"none",table:{defaultValue:{summary:"none"}}},selectedRows:{description:"The currently selected rows in the table. If provided, the row selection is controlled.",control:!1},onRowSelection:{description:"Called when the row selection changes. Required when row selection is controlled.",control:!1,table:{category:"Events"}},onRowSelectionChanged:{description:"Called when the row selection changes, with a RowSelectionChange payload (selectedRows, isSelectAll, derived objectSet). Preferred over the deprecated onRowSelection callback.",control:!1,table:{category:"Events"}},focusedRow:{description:"The primary key of the row to render as visually focused. When provided, focus is controlled.",control:!1},onFocusedRowChanged:{description:"Called when the focused row changes — fires in both controlled and uncontrolled modes so callers can observe focus without taking it over.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},rowHeight:{description:"The height of each row in pixels.",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},className:{description:"Additional CSS class name for the table",control:"text"}}},y=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobProfile"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"businessTitle"}},{locator:{type:"property",id:"businessArea"}},{locator:{type:"property",id:"team"}},{locator:{type:"property",id:"workerType"}},{locator:{type:"property",id:"locationName"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"property",id:"locationCountry"}},{locator:{type:"property",id:"locationRegion"}},{locator:{type:"property",id:"locationType"}},{locator:{type:"property",id:"firstFullTimeStartDate"}},{locator:{type:"property",id:"firstInternStartDate"}},{locator:{type:"property",id:"employeeNumber"}},{locator:{type:"property",id:"adUsername"}},{locator:{type:"property",id:"primaryOfficeId"}},{locator:{type:"property",id:"preferredNameFirst"}},{locator:{type:"property",id:"preferredNameLast"}},{locator:{type:"property",id:"leadEmployeeNumber"}},{locator:{type:"property",id:"mentorEmployeeNumber"}}],Kn=[{locator:{type:"property",id:"fullName"},editable:!0},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})}},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstInternStartDate"},editable:!0,renderCell:e=>n.jsx("div",{children:e.firstInternStartDate?new Date(e.firstInternStartDate).toISOString():"No value"})},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})}},{locator:{type:"property",id:"isRemote"},renderCell:e=>e.isRemote==null?"No Value":e.isRemote?"Yes":"No",editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:[!0,!1],itemToStringLabel:e=>e==null?"No Value":e?"Yes":"No"})}}],Yn={type:"query",apiName:"getEmployeeSeniority",version:"1.0.0",osdkMetadata:void 0},Gn=[{locator:{type:"property",id:"fullName"}},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:e=>"managerName"in e?n.jsx("span",{children:e.managerName}):n.jsx("span",{style:{color:"#999"},children:"No Manager"})},{locator:{type:"function",id:"seniority",queryDefinition:Yn,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}],T={args:{objectType:a,columnDefinitions:y},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},D={args:{objectType:a,columnDefinitions:y},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:e=>{const o=Un()(a).where({jobProfile:"Marketing Manager"});return n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e,objectType:a,objectSet:o})})}},v={args:{objectType:vt},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},E={render:()=>{const e=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"rdp",id:"managerName",creator:o=>o.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:o=>"managerName"in o?n.jsx("span",{children:o.managerName}):n.jsx("span",{style:{color:"#999"},children:"No Manager"})}],t={managerName:{$in:["Ahmed Williams","Fatima Zhang"]}};return n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{objectType:a,columnDefinitions:e,defaultOrderBy:[{property:"managerName",direction:"asc"}],filter:t})})},parameters:{docs:{description:{story:"Combines derived property columns with `defaultOrderBy` and `filter`. Demonstrates sorting by an RDP (managerName) and filtering the derived property."},source:{code:`type RDPs = { managerName: "string" };

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
/>`}}}},x={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"function",id:"seniority",queryDefinition:Yn,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}]},parameters:{docs:{description:{story:"Use function-backed columns to display computed values from a Foundry query. The 'Seniority' column calls `getEmployeeSeniority` with the current object set and maps each result back to the corresponding row."},source:{code:`import { getEmployeeSeniority } from "./ontology/queries";

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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},O={args:{objectType:a,columnDefinitions:y,selectionMode:"single",onRowSelectionChanged:m()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},R={args:{objectType:a,columnDefinitions:y,selectionMode:"multiple",onRowSelectionChanged:m()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},N={args:{objectType:a,columnDefinitions:y,renderCellContextMenu:(e,t)=>n.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),n.jsx("div",{children:t?String(t):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
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
/>`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),n.jsx(d,{...e})]})},k={args:{objectType:a,columnDefinitions:Gn.map((e,t)=>({...e,width:t===0?250:t===1?300:150}))},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  { locator: { type: "property", id: "department" }, width: 300 },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},P={args:{objectType:a,columnDefinitions:y,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},F={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},B={parameters:{docs:{source:{code:`const customColumnDefinition = [
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
    `}}},args:{objectType:a,columnDefinitions:[...Gn.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),n.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},I={args:{objectType:a,columnDefinitions:y,selectionMode:"multiple",selectedRows:[],orderBy:[{property:"fullName",direction:"asc"}],onRowClick:m(),onColumnHeaderClick:m(),onRowSelectionChanged:m(),onOrderByChanged:m(),onColumnVisibilityChanged:m(),onColumnsPinnedChanged:m(),onColumnResize:m(),onFocusedRowChanged:m()},parameters:{docs:{source:{code:`<ObjectTable
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
/>`}}},render:e=>{const[t,o]=r.useState(null),[l,i]=r.useState(null),[s,f]=r.useState([]),[h,j]=r.useState(!1),[b,Q]=r.useState([{property:"fullName",direction:"asc"}]),[Jn,w]=r.useState(""),Xn=r.useCallback(c=>{var p;(p=e.onRowClick)==null||p.call(e,c),o(c),w("onRowClick")},[e]),Zn=r.useCallback(c=>{var p;(p=e.onColumnHeaderClick)==null||p.call(e,c),i(c),w("onColumnHeaderClick")},[e]),Qn=r.useCallback(c=>{var p;(p=e.onRowSelectionChanged)==null||p.call(e,c),f(c.selectedRows.map(S=>S.$primaryKey)),j(c.isSelectAll),w("onRowSelectionChanged")},[e]),et=r.useCallback(c=>{var p;(p=e.onOrderByChanged)==null||p.call(e,c),Q(c),w("onOrderByChanged")},[e]),nt=r.useCallback(c=>{var p;(p=e.onColumnVisibilityChanged)==null||p.call(e,c),w("onColumnVisibilityChanged")},[e]),tt=r.useCallback(c=>{var p;(p=e.onColumnsPinnedChanged)==null||p.call(e,c),w("onColumnsPinnedChanged")},[e]),ot=r.useCallback((c,p)=>{var S;(S=e.onColumnResize)==null||S.call(e,c,p),w(`onColumnResize (${c})`)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe"},children:[n.jsx("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:"Event Monitor:"}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Last event:"})," ",Jn||"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Row clicked:"})," ",t?n.jsx("code",{children:t.fullName}):"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Column clicked:"})," ",l?n.jsx("code",{children:l}):"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Selected rows:"})," ",h?"All employees":`${s.length} employees`]}),n.jsxs("div",{style:{fontSize:"12px"},children:[n.jsx("strong",{children:"Current sort:"})," ",b!=null&&b[0]?`${b[0].property} (${b[0].direction})`:"None"]})]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e,selectedRows:s,orderBy:b,onRowClick:Xn,onColumnHeaderClick:Zn,onRowSelectionChanged:Qn,onOrderByChanged:et,onColumnVisibilityChanged:nt,onColumnsPinnedChanged:tt,onColumnResize:ot})})]})}},A={args:{objectType:a,columnDefinitions:y,orderBy:[{property:"fullName",direction:"asc"}],onOrderByChanged:m()},parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:e=>{const[t,o]=r.useState(e.orderBy??[{property:"fullName",direction:"asc"}]),l=r.useCallback(i=>{var s;(s=e.onOrderByChanged)==null||s.call(e,i),o(i)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("strong",{children:"Current Sort:"})," ",t.map((i,s)=>n.jsxs("span",{children:[i.property," (",i.direction,")",s<t.length-1&&", "]},s))]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e,orderBy:t,onOrderByChanged:l})})]})}},M={args:{objectType:a,columnDefinitions:y,selectionMode:"multiple",selectedRows:[],onRowSelectionChanged:m()},parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);
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
);`}}},render:e=>{const[t,o]=r.useState(e.selectedRows??[]),[l,i]=r.useState(!1),s=r.useCallback(f=>{var h;(h=e.onRowSelectionChanged)==null||h.call(e,f),o(f.selectedRows.map(j=>j.$primaryKey)),i(f.isSelectAll)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("strong",{children:"Selected:"})," ",l?"All Employees":`${t.length} employees`,t.length>0&&n.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{o([]),i(!1)},children:"Clear Selection"})]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e,selectedRows:t,isAllSelected:l,onRowSelectionChanged:s})})]})}},_={args:{objectType:a,columnDefinitions:y,onFocusedRowChanged:m()},parameters:{docs:{description:{story:"Demonstrates the `focusedRow` / `onFocusedRowChanged` API. Click any row to focus it; the focused employee is shown in the banner above and persists until cleared by the caller. Because focus is controlled, outside clicks no longer auto-clear — the caller owns clearing."},source:{code:`const [focusedRow, setFocusedRow] = useState<Osdk.Instance<Employee> | null>(null);

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
);`}}},render:e=>{const[t,o]=r.useState(null),l=r.useCallback(i=>{var s;(s=e.onFocusedRowChanged)==null||s.call(e,i),o(i)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe",display:"flex",alignItems:"center",gap:"12px"},children:[n.jsxs("span",{children:[n.jsx("strong",{children:"Focused employee:"})," ",t==null?"none":`${t.fullName} (#${t.employeeNumber})`]}),n.jsx("button",{type:"button",style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:t==null?"not-allowed":"pointer"},onClick:()=>o(null),disabled:t==null,children:"Clear focus"})]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e,focusedRow:(t==null?void 0:t.$primaryKey)??null,onFocusedRowChanged:l})})]})}},W={args:{objectType:a,columnDefinitions:y,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},V={args:{objectType:a,columnDefinitions:y},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. Open the drawer and click any column header chevron; the menu should appear above the drawer."},source:{code:`<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>`}}},render:e=>n.jsx(te,{tableProps:e})},H={args:{objectType:a,columnDefinitions:y},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>n.jsx(oe,{tableProps:e})},L={args:{objectType:a,columnDefinitions:y},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>n.jsx(re,{tableProps:e})},z={args:{objectType:a,columnDefinitions:y,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},$={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>n.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const t=e.firstFullTimeStartDate,o=t&&new Date(t)<=new Date;return n.jsx("span",{className:`status-tag ${o?"active":"inactive"}`,children:o?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e})})},U={args:{objectType:a,columnDefinitions:Kn,editMode:"manual",onCellValueChanged:m()},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>{const[t,o]=r.useState(),l=r.useCallback(i=>{var s;(s=e.onCellValueChanged)==null||s.call(e,i),o(i)},[e]);return n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'Try changing showEditFooter to false to hide the edit footer bar. Change edit mode to "manual" to enable inline editing with an Edit Table button.'}),t!=null&&n.jsxs("div",{style:{padding:"12px",backgroundColor:"#d1ecf1",marginBottom:"8px",borderRadius:"4px",fontFamily:"monospace",fontSize:"13px"},children:[n.jsx("strong",{children:"Last cell edit:"})," ",'Column "',t.columnId,'" changed from "',String(t.oldValue),'" to "',String(t.newValue),'"']}),n.jsx(d,{...e,onCellValueChanged:l})]})}},q={args:{objectType:a,columnDefinitions:Kn,editMode:"manual",onSubmitEdits:m(async e=>(await new Promise(t=>setTimeout(t,1e3)),!0))},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e,objectType:a})})},K={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0,validateEdit:async e=>String(e??"").trim().length>=2?void 0:"Name must be at least 2 characters long"},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0,validateEdit:async e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e??""))?void 0:"Please enter a valid email address"},{locator:{type:"property",id:"employeeNumber"},editable:!0,validateEdit:async e=>Number(e)>0?void 0:"Employee number must be positive"},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})},validateEdit:async e=>e?void 0:"Job title is required"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})},validateEdit:async e=>{if(!e||isNaN(Date.parse(e)))return"Please enter a valid date";const t=new Date(e),o=new Date;if(o.setHours(0,0,0,0),t<o)return"Date cannot be before today"}}],editMode:"always",onSubmitEdits:m(async e=>!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:["Try editing cells with invalid values to see validation in action:",n.jsxs("ul",{style:{margin:"8px 0 0 20px"},children:[n.jsx("li",{children:"Name must be at least 2 characters"}),n.jsx("li",{children:"Email must be a valid format"}),n.jsx("li",{children:"Employee number must be positive"}),n.jsx("li",{children:"Job title is required"}),n.jsx("li",{children:"Start date is required"})]})]}),n.jsx(d,{...e,objectType:a})]})},Y={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"},editable:e=>(e.jobTitle??"")==="Senior Product Manager"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:e=>({items:e.department==="Operations"?["Sales","Marketing"]:["Sales","Marketing","Finance","Human Resources"]})}}],editMode:"always",onCellValueChanged:m()},parameters:{docs:{description:{story:"Demonstrates per-row configuration with `editable` as a predicate function and dynamic `getFieldComponentProps` that computes dropdown items from the row's data. jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows"},source:{code:`const columnDefinitions = [
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
);`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'JobTitle is only editable for "Senior Product Manager" rows. Department dropdown shows only 2 options for Operations rows.'}),n.jsx(d,{...e})]})},G={args:{objectType:a,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}}]},parameters:{docs:{description:{story:'Demonstrates using `getRowAttributes` to set data attributes on rows and a `className` on the table to scope CSS overrides via the data attribute selector. New York employees get a light blue background through the `[data-highlight-row="true"]` CSS selector scoped under the table\'s className.'},source:{code:`/* CSS (imported stylesheet):
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
);`}}},render:e=>{const t=r.useCallback(o=>({"data-highlight-row":o.locationCity==="New York"?"true":void 0}),[]);return n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:[n.jsx("strong",{children:"Row attributes + className for CSS override:"})," ","New York employees have a light blue background via"," ",n.jsx("code",{children:'tr[data-highlight-row="true"]'})," scoped under"," ",n.jsx("code",{children:".customTableStyling"}),"."]}),n.jsx(d,{...e,getRowAttributes:t,className:"customTableStyling"})]})}},J={args:{objectType:a,columnDefinitions:y,renderEmptyState:()=>n.jsx(qn,{icon:"folder-close",title:"No saved views found."})},parameters:{docs:{description:{story:"Override the default empty state with a custom render function. Useful for matching product copy or visuals (here a Blueprint `NonIdealState`)."},source:{code:`
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
`}}},render:e=>{const o=Un()(a).where({jobProfile:"Nonexistent Role"});return n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(d,{...e,objectSet:o})})}};var pe,ue,me;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(me=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ye,be,ge;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  }
}`,...(ge=(be=D.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var fe,he,Ce;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(Ce=(he=v.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var je,we,Se;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    type RDPs = {
      managerName: "string";
    };
    const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "rdp",
        id: "managerName",
        creator: (baseObjectSet: DerivedProperty.Builder<Employee, false>) => baseObjectSet.pivotTo("lead").selectProperty("fullName")
      },
      renderHeader: () => "Manager",
      renderCell: (object: Osdk.Instance<Employee>) => {
        if ("managerName" in object) {
          return <span>{object.managerName as string}</span>;
        }
        return <span style={{
          color: "#999"
        }}>No Manager</span>;
      }
    }];
    const filter: WhereClause<Employee, RDPs> = {
      managerName: {
        $in: ["Ahmed Williams", "Fatima Zhang"]
      }
    };
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} defaultOrderBy={[{
        property: "managerName",
        direction: "asc"
      }]} filter={filter} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Combines derived property columns with \`defaultOrderBy\` and \`filter\`. " + "Demonstrates sorting by an RDP (managerName) and filtering the derived property."
      },
      source: {
        code: \`type RDPs = { managerName: "string" };

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
/>\`
      }
    }
  }
}`,...(Se=(we=E.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Te,De,ve;x.parameters={...x.parameters,docs:{...(Te=x.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "function",
        id: "seniority",
        queryDefinition: getEmployeeSeniority,
        getFunctionParams: (objectSet: ObjectSet<Employee>) => ({
          employees: objectSet
        }) as never,
        getKey: (object: Osdk.Instance<Employee>) => String(object.$primaryKey),
        getValue: (cellData?: unknown) => cellData
      },
      renderHeader: () => "Seniority",
      width: 120
    }] as ColumnDefinition<Employee>[]
  },
  parameters: {
    docs: {
      description: {
        story: "Use function-backed columns to display computed values from a Foundry query. " + "The 'Seniority' column calls \`getEmployeeSeniority\` with the current object set " + "and maps each result back to the corresponding row."
      },
      source: {
        code: \`import { getEmployeeSeniority } from "./ontology/queries";

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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(ve=(De=x.parameters)==null?void 0:De.docs)==null?void 0:ve.source}}};var Ee,xe,Oe;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "single",
    onRowSelectionChanged: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} selectionMode="single" />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(Oe=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:Oe.source}}};var Re,Ne,ke;R.parameters={...R.parameters,docs:{...(Re=R.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple",
    onRowSelectionChanged: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} selectionMode="multiple" />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(ke=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var Pe,Fe,Be;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    renderCellContextMenu: (_: any, cellValue: unknown) => {
      return <div style={{
        background: "white",
        padding: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        fontSize: 13,
        borderRadius: 4
      }}>
          <div style={{
          fontWeight: "bold",
          marginBottom: 4
        }}>Cell Value:</div>
          <div>{cellValue ? String(cellValue) : "No Value"}</div>
        </div>;
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
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
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <div style={{
      padding: "12px"
    }}>Right click on any cell</div>
      <ObjectTable {...args} />
    </div>
}`,...(Be=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Ie,Ae,Me;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions.map((col, index) => ({
      ...col,
      width: index === 0 ? 250 : index === 1 ? 300 : 150
    })) as any
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  { locator: { type: "property", id: "department" }, width: 300 },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(Me=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};var _e,We,Ve;P.parameters={...P.parameters,docs:{...(_e=P.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    defaultOrderBy: [{
      property: "fullName",
      direction: "desc"
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(Ve=(We=P.parameters)==null?void 0:We.docs)==null?void 0:Ve.source}}};var He,Le,ze;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      pinned: "left"
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      pinned: "right"
    }, {
      locator: {
        type: "property",
        id: "firstFullTimeStartDate"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
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
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(ze=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:ze.source}}};var $e,Ue,qe;B.parameters={...B.parameters,docs:{...($e=B.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const customColumnDefinition = [
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
    \`
      }
    }
  },
  args: {
    objectType: Employee,
    columnDefinitions: [...(columnDefinitions.slice(0, 3) as ColumnDefinition<Employee>[]), {
      locator: {
        type: "custom",
        id: "actions"
      },
      renderHeader: () => "Actions",
      renderCell: (object: any) => {
        return <div style={{
          display: "flex",
          gap: "8px"
        }}>
              <button style={{
            padding: "4px 8px",
            fontSize: "12px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer"
          }} onClick={() => alert(\`View \${object.fullName}\`)}>
                View
              </button>
              <button style={{
            padding: "4px 8px",
            fontSize: "12px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer"
          }} onClick={() => alert(\`Edit \${object.fullName}\`)}>
                Edit
              </button>
            </div>;
      },
      orderable: false,
      width: 120
    }]
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(qe=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:qe.source}}};var Ke,Ye,Ge;I.parameters={...I.parameters,docs:{...(Ke=I.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple" as const,
    selectedRows: [],
    orderBy: [{
      property: "fullName",
      direction: "asc"
    }] as any,
    onRowClick: fn(),
    onColumnHeaderClick: fn(),
    onRowSelectionChanged: fn(),
    onOrderByChanged: fn(),
    onColumnVisibilityChanged: fn(),
    onColumnsPinnedChanged: fn(),
    onColumnResize: fn(),
    onFocusedRowChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
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
/>\`
      }
    }
  },
  render: args => {
    const [clickedRow, setClickedRow] = useState<any>(null);
    const [clickedColumn, setClickedColumn] = useState<string | null>(null);
    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const [orderBy, setOrderBy] = useState<any>([{
      property: "fullName",
      direction: "asc"
    }]);
    const [lastEvent, setLastEvent] = useState<string>("");
    const handleRowClick = useCallback((employee: any) => {
      args.onRowClick?.(employee);
      setClickedRow(employee);
      setLastEvent("onRowClick");
    }, [args]);
    const handleColumnHeaderClick = useCallback((columnId: string) => {
      args.onColumnHeaderClick?.(columnId);
      setClickedColumn(columnId);
      setLastEvent("onColumnHeaderClick");
    }, [args]);
    const handleRowSelectionChanged = useCallback((change: any) => {
      args.onRowSelectionChanged?.(change);
      setSelectedRows(change.selectedRows.map((r: any) => r.$primaryKey));
      setIsSelectAll(change.isSelectAll);
      setLastEvent("onRowSelectionChanged");
    }, [args]);
    const handleOrderByChanged = useCallback((newOrderBy: any) => {
      args.onOrderByChanged?.(newOrderBy);
      setOrderBy(newOrderBy);
      setLastEvent("onOrderByChanged");
    }, [args]);
    const handleColumnVisibilityChanged = useCallback((visibilityState: any) => {
      args.onColumnVisibilityChanged?.(visibilityState);
      setLastEvent("onColumnVisibilityChanged");
    }, [args]);
    const handleColumnsPinnedChanged = useCallback((pinnedState: any) => {
      args.onColumnsPinnedChanged?.(pinnedState);
      setLastEvent("onColumnsPinnedChanged");
    }, [args]);
    const handleColumnResize = useCallback((columnId: string, newWidth: number | null) => {
      args.onColumnResize?.(columnId, newWidth);
      setLastEvent(\`onColumnResize (\${columnId})\`);
    }, [args]);
    return <div>
        <div style={{
        marginBottom: "16px",
        padding: "12px",
        backgroundColor: "#f0f9ff",
        borderRadius: "4px",
        border: "1px solid #bfdbfe"
      }}>
          <div style={{
          marginBottom: "8px",
          fontWeight: "bold"
        }}>
            Event Monitor:
          </div>
          <div style={{
          marginBottom: "8px",
          fontSize: "12px"
        }}>
            <strong>Last event:</strong> {lastEvent || "None"}
          </div>
          <div style={{
          marginBottom: "8px",
          fontSize: "12px"
        }}>
            <strong>Row clicked:</strong>{" "}
            {clickedRow ? <code>{clickedRow.fullName}</code> : "None"}
          </div>
          <div style={{
          marginBottom: "8px",
          fontSize: "12px"
        }}>
            <strong>Column clicked:</strong>{" "}
            {clickedColumn ? <code>{clickedColumn}</code> : "None"}
          </div>
          <div style={{
          marginBottom: "8px",
          fontSize: "12px"
        }}>
            <strong>Selected rows:</strong>{" "}
            {isSelectAll ? "All employees" : \`\${selectedRows.length} employees\`}
          </div>
          <div style={{
          fontSize: "12px"
        }}>
            <strong>Current sort:</strong> {orderBy?.[0] ? \`\${orderBy[0].property} (\${orderBy[0].direction})\` : "None"}
          </div>
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable {...args} selectedRows={selectedRows} orderBy={orderBy} onRowClick={handleRowClick} onColumnHeaderClick={handleColumnHeaderClick} onRowSelectionChanged={handleRowSelectionChanged} onOrderByChanged={handleOrderByChanged} onColumnVisibilityChanged={handleColumnVisibilityChanged} onColumnsPinnedChanged={handleColumnsPinnedChanged} onColumnResize={handleColumnResize} />
        </div>
      </div>;
  }
}`,...(Ge=(Ye=I.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var Je,Xe,Ze;A.parameters={...A.parameters,docs:{...(Je=A.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    orderBy: [{
      property: "fullName",
      direction: "asc"
    }] as any,
    onOrderByChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: \`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);\`
      }
    }
  },
  render: args => {
    const [orderBy, setOrderBy] = useState<any>(args.orderBy ?? [{
      property: "fullName",
      direction: "asc"
    }]);
    const handleOrderByChanged = useCallback((newOrderBy: any) => {
      args.onOrderByChanged?.(newOrderBy);
      setOrderBy(newOrderBy);
    }, [args]);
    return <div>
        <div style={{
        marginBottom: "16px"
      }}>
          <strong>Current Sort:</strong>{" "}
          {orderBy.map((o: any, i: number) => <span key={i}>
              {o.property} ({o.direction})
              {i < orderBy.length - 1 && ", "}
            </span>)}
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable {...args} orderBy={orderBy} onOrderByChanged={handleOrderByChanged} />
        </div>
      </div>;
  }
}`,...(Ze=(Xe=A.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var Qe,en,nn;M.parameters={...M.parameters,docs:{...(Qe=M.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple" as const,
    selectedRows: [],
    onRowSelectionChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: \`const [selectedRows, setSelectedRows] = useState<any[]>([]);
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
);\`
      }
    }
  },
  render: args => {
    const [selectedRows, setSelectedRows] = useState<any[]>(args.selectedRows ?? []);
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const handleRowSelectionChanged = useCallback((change: {
      selectedRows: Array<{
        $primaryKey: any;
      }>;
      isSelectAll: boolean;
    }) => {
      args.onRowSelectionChanged?.(change as any);
      setSelectedRows(change.selectedRows.map(r => r.$primaryKey));
      setIsSelectAll(change.isSelectAll);
    }, [args]);
    return <div>
        <div style={{
        marginBottom: "16px"
      }}>
          <strong>Selected:</strong>{" "}
          {isSelectAll ? "All Employees" : \`\${selectedRows.length} employees\`}
          {selectedRows.length > 0 && <button style={{
          marginLeft: "16px",
          padding: "4px 8px",
          fontSize: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          background: "white",
          cursor: "pointer"
        }} onClick={() => {
          setSelectedRows([]);
          setIsSelectAll(false);
        }}>
              Clear Selection
            </button>}
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable {...args} selectedRows={selectedRows} isAllSelected={isSelectAll} onRowSelectionChanged={handleRowSelectionChanged} />
        </div>
      </div>;
  }
}`,...(nn=(en=M.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,on,rn;_.parameters={..._.parameters,docs:{...(tn=_.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    onFocusedRowChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the \`focusedRow\` / \`onFocusedRowChanged\` API. Click any row to focus it; " + "the focused employee is shown in the banner above and persists until cleared by the caller. " + "Because focus is controlled, outside clicks no longer auto-clear — the caller owns clearing."
      },
      source: {
        code: \`const [focusedRow, setFocusedRow] = useState<Osdk.Instance<Employee> | null>(null);

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
);\`
      }
    }
  },
  render: args => {
    // \`focusedRow\` (the prop) is now a primary key, but the
    // \`onFocusedRowChanged\` callback still delivers the full row, so the
    // banner keeps a full object in state and passes its key back down.
    type FocusedEmployee = NonNullable<Parameters<NonNullable<EmployeeTableProps["onFocusedRowChanged"]>>[0]>;
    const [focusedRow, setFocusedRow] = useState<FocusedEmployee | null>(null);
    const handleFocusedRowChanged = useCallback((row: FocusedEmployee | null) => {
      args.onFocusedRowChanged?.(row);
      setFocusedRow(row);
    }, [args]);
    return <div>
        <div style={{
        marginBottom: "16px",
        padding: "12px",
        backgroundColor: "#f0f9ff",
        borderRadius: "4px",
        border: "1px solid #bfdbfe",
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}>
          <span>
            <strong>Focused employee:</strong> {focusedRow == null ? "none" : \`\${focusedRow.fullName} (#\${focusedRow.employeeNumber})\`}
          </span>
          <button type="button" style={{
          padding: "4px 8px",
          fontSize: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          background: "white",
          cursor: focusedRow == null ? "not-allowed" : "pointer"
        }} onClick={() => setFocusedRow(null)} disabled={focusedRow == null}>
            Clear focus
          </button>
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable {...args} focusedRow={focusedRow?.$primaryKey ?? null} onFocusedRowChanged={handleFocusedRowChanged} />
        </div>
      </div>;
  }
}`,...(rn=(on=_.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var an,ln,sn;W.parameters={...W.parameters,docs:{...(an=W.parameters)==null?void 0:an.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    enableOrdering: false,
    enableColumnPinning: false,
    enableColumnResizing: false,
    enableColumnConfig: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(sn=(ln=W.parameters)==null?void 0:ln.docs)==null?void 0:sn.source}}};var dn,cn,pn;V.parameters={...V.parameters,docs:{...(dn=V.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. " + "Open the drawer and click any column header chevron; the menu should appear above the drawer."
      },
      source: {
        code: \`<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>\`
      }
    }
  },
  render: args => <ObjectTableInBlueprintDrawer tableProps={args} />
}`,...(pn=(cn=V.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var un,mn,yn;H.parameters={...H.parameters,docs:{...(un=H.parameters)==null?void 0:un.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. " + "Open the dialog and click any column header chevron; the menu should appear above the dialog."
      },
      source: {
        code: \`<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>\`
      }
    }
  },
  render: args => <ObjectTableInBlueprintDialog tableProps={args} />
}`,...(yn=(mn=H.parameters)==null?void 0:mn.docs)==null?void 0:yn.source}}};var bn,gn,fn;L.parameters={...L.parameters,docs:{...(bn=L.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. " + "Open the dialog and click any column header chevron; the menu should appear above the dialog."
      },
      source: {
        code: \`<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>\`
      }
    }
  },
  render: args => <ObjectTableInBaseUIDialog tableProps={args} />
}`,...(fn=(gn=L.parameters)==null?void 0:gn.docs)==null?void 0:fn.source}}};var hn,Cn,jn;z.parameters={...z.parameters,docs:{...(hn=z.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    rowHeight: 56
  },
  parameters: {
    docs: {
      source: {
        code: \`<ObjectTable objectType={Employee} rowHeight={56} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(jn=(Cn=z.parameters)==null?void 0:Cn.docs)==null?void 0:jn.source}}};var wn,Sn,Tn;$.parameters={...$.parameters,docs:{...(wn=$.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      renderHeader: () => <a href="#" className="header-link" onClick={e => {
        e.preventDefault();
        alert("Employee Name column clicked!");
      }}>
            Employee Name
          </a>
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      renderHeader: () => "Job Title"
    }, {
      locator: {
        type: "custom",
        id: "employment-status"
      },
      renderHeader: () => "Employment Status",
      renderCell: (employee: any) => {
        const startDate = employee.firstFullTimeStartDate;
        const isActive = startDate && new Date(startDate) <= new Date();
        return <span className={\`status-tag \${isActive ? "active" : "inactive"}\`}>
              {isActive ? "Active" : "Inactive"}
            </span>;
      },
      width: 140
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
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
        <span className={\\\`status-tag \\\${isActive ? "active" : "inactive"}\\\`}>
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(Tn=(Sn=$.parameters)==null?void 0:Sn.docs)==null?void 0:Tn.source}}};var Dn,vn,En;U.parameters={...U.parameters,docs:{...(Dn=U.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: editableColumnDefinitions,
    editMode: "manual" as const,
    onCellValueChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
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
);\`
      }
    }
  },
  render: args => {
    const [lastEdit, setLastEdit] = useState<CellEditInfo<Osdk.Instance<typeof Employee>> | undefined>();
    const handleCellValueChanged = useCallback((editInfo: CellEditInfo<Osdk.Instance<typeof Employee>>) => {
      args.onCellValueChanged?.(editInfo as any);
      setLastEdit(editInfo);
    }, [args]);
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <div style={{
        padding: "12px",
        backgroundColor: "#fff3cd",
        marginBottom: "8px",
        borderRadius: "4px"
      }}>
          Try changing showEditFooter to false to hide the edit footer bar.
          Change edit mode to "manual" to enable inline editing with an Edit
          Table button.
        </div>
        {lastEdit != null && <div style={{
        padding: "12px",
        backgroundColor: "#d1ecf1",
        marginBottom: "8px",
        borderRadius: "4px",
        fontFamily: "monospace",
        fontSize: "13px"
      }}>
            <strong>Last cell edit:</strong>{" "}
            Column "{lastEdit.columnId}" changed from "{String(lastEdit.oldValue)}" to "
            {String(lastEdit.newValue)}"
          </div>}
        <ObjectTable {...args} onCellValueChanged={handleCellValueChanged} />
      </div>;
  }
}`,...(En=(vn=U.parameters)==null?void 0:vn.docs)==null?void 0:En.source}}};var xn,On,Rn;q.parameters={...q.parameters,docs:{...(xn=q.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: editableColumnDefinitions,
    editMode: "manual",
    onSubmitEdits: fn(async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    })
  } as any,
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
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
);\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} objectType={Employee} />
    </div>
}`,...(Rn=(On=q.parameters)==null?void 0:On.docs)==null?void 0:Rn.source}}};var Nn,kn,Pn;K.parameters={...K.parameters,docs:{...(Nn=K.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true,
      validateEdit: async (value: unknown) => {
        const str = String(value ?? "");
        return str.trim().length >= 2 ? undefined : "Name must be at least 2 characters long";
      }
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      },
      editable: true,
      validateEdit: async (value: unknown) => {
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return emailRegex.test(String(value ?? "")) ? undefined : "Please enter a valid email address";
      }
    }, {
      locator: {
        type: "property",
        id: "employeeNumber"
      },
      editable: true,
      validateEdit: async (value: unknown) => {
        return Number(value) > 0 ? undefined : "Employee number must be positive";
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DROPDOWN",
        getFieldComponentProps: () => ({
          items: ["Software Engineer", "Senior Software Engineer", "Staff Engineer", "Engineering Manager", "Product Manager", "Designer"],
          isSearchable: true,
          placeholder: "Search job titles…"
        })
      },
      validateEdit: async (value: unknown) => {
        return value ? undefined : "Job title is required";
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DROPDOWN",
        getFieldComponentProps: () => ({
          items: ["Engineering", "Product", "Design", "Sales", "Marketing", "Finance", "Human Resources"]
        })
      }
    }, {
      locator: {
        type: "property",
        id: "firstFullTimeStartDate"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DATE_PICKER",
        getFieldComponentProps: () => ({
          showTime: false,
          placeholder: "Select date..."
        })
      },
      validateEdit: async (value: unknown) => {
        if (!value || isNaN(Date.parse(value as string))) {
          return "Please enter a valid date";
        }
        const date = new Date(value as string);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (date < today) {
          return "Date cannot be before today";
        }
        return undefined;
      }
    }],
    editMode: "always",
    onSubmitEdits: fn(async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
      return true;
    })
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
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
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
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
);\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <div style={{
      padding: "12px",
      backgroundColor: "#fff3cd",
      marginBottom: "8px",
      borderRadius: "4px"
    }}>
        Try editing cells with invalid values to see validation in action:
        <ul style={{
        margin: "8px 0 0 20px"
      }}>
          <li>Name must be at least 2 characters</li>
          <li>Email must be a valid format</li>
          <li>Employee number must be positive</li>
          <li>Job title is required</li>
          <li>Start date is required</li>
        </ul>
      </div>
      <ObjectTable {...args} objectType={Employee} />
    </div>
}`,...(Pn=(kn=K.parameters)==null?void 0:kn.docs)==null?void 0:Pn.source}}};var Fn,Bn,In;Y.parameters={...Y.parameters,docs:{...(Fn=Y.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      editable: (rowData: Osdk.Instance<Employee>) => {
        const jobTitle = rowData.jobTitle ?? "";
        return jobTitle === "Senior Product Manager";
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DROPDOWN",
        getFieldComponentProps: (employee: Osdk.Instance<Employee>) => ({
          items: employee.department === "Operations" ? ["Sales", "Marketing"] : ["Sales", "Marketing", "Finance", "Human Resources"]
        })
      }
    }],
    editMode: "always" as const,
    onCellValueChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates per-row configuration with \`editable\` as a predicate function and dynamic \`getFieldComponentProps\` that computes dropdown items from the row's data. " + "jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows"
      },
      source: {
        code: \`const columnDefinitions = [
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
);\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <div style={{
      padding: "12px",
      backgroundColor: "#fff3cd",
      marginBottom: "8px",
      borderRadius: "4px"
    }}>
        JobTitle is only editable for "Senior Product Manager" rows. Department
        dropdown shows only 2 options for Operations rows.
      </div>
      <ObjectTable {...args} />
    </div>
}`,...(In=(Bn=Y.parameters)==null?void 0:Bn.docs)==null?void 0:In.source}}};var An,Mn,_n;G.parameters={...G.parameters,docs:{...(An=G.parameters)==null?void 0:An.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "locationCity"
      }
    }]
  } as EmployeeTableProps,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates using \`getRowAttributes\` to set data attributes on rows and a \`className\` on the table to scope CSS overrides via the data attribute selector. " + "New York employees get a light blue background through the \`[data-highlight-row=\\"true\\"]\` CSS selector scoped under the table's className."
      },
      source: {
        code: \`/* CSS (imported stylesheet):
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
);\`
      }
    }
  },
  render: args => {
    const getRowAttributes = useCallback((rowData: Osdk.Instance<typeof Employee>) => ({
      "data-highlight-row": rowData.locationCity === "New York" ? "true" : undefined
    }), []);
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <div style={{
        padding: "12px",
        backgroundColor: "#fff3cd",
        marginBottom: "8px",
        borderRadius: "4px"
      }}>
          <strong>Row attributes + className for CSS override:</strong>{" "}
          New York employees have a light blue background via{" "}
          <code>tr[data-highlight-row="true"]</code> scoped under{" "}
          <code>.customTableStyling</code>.
        </div>
        <ObjectTable {...args} getRowAttributes={getRowAttributes} className="customTableStyling" />
      </div>;
  }
}`,...(_n=(Mn=G.parameters)==null?void 0:Mn.docs)==null?void 0:_n.source}}};var Wn,Vn,Hn;J.parameters={...J.parameters,docs:{...(Wn=J.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    renderEmptyState: () => <NonIdealState icon="folder-close" title="No saved views found." />
  },
  parameters: {
    docs: {
      description: {
        story: "Override the default empty state with a custom render function. Useful for matching product copy or visuals (here a Blueprint \`NonIdealState\`)."
      },
      source: {
        code: \`
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
\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const emptyObjectSet = client(Employee).where({
      jobProfile: "Nonexistent Role"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectSet={emptyObjectSet} />
      </div>;
  }
}`,...(Hn=(Vn=J.parameters)==null?void 0:Vn.docs)==null?void 0:Hn.source}}};const Fo=["Default","WithObjectSet","WithInterfaceType","WithDerivedPropertyOrderingAndFilter","WithFunctionColumn","SingleSelection","MultipleSelection","WithContextMenu","CustomColumnWidths","WithDefaultSorting","WithDefaultColumnPinning","WithCustomColumn","EventListeners","ControlledSorting","ControlledSelection","ControlledFocusedRow","DisableAllHeaderMenuFeatures","HeaderMenuInsideBlueprintDrawer","HeaderMenuInsideBlueprintDialog","HeaderMenuInsideBaseUIDialog","CustomRowHeight","WithCustomRenderers","EditableTable","WithSubmitEditsButton","EditableWithValidation","PerRowEditableAndFieldConfig","RowAttributesForStyling","CustomEmptyState"];export{_ as ControlledFocusedRow,M as ControlledSelection,A as ControlledSorting,k as CustomColumnWidths,J as CustomEmptyState,z as CustomRowHeight,T as Default,W as DisableAllHeaderMenuFeatures,U as EditableTable,K as EditableWithValidation,I as EventListeners,L as HeaderMenuInsideBaseUIDialog,H as HeaderMenuInsideBlueprintDialog,V as HeaderMenuInsideBlueprintDrawer,R as MultipleSelection,Y as PerRowEditableAndFieldConfig,G as RowAttributesForStyling,O as SingleSelection,N as WithContextMenu,B as WithCustomColumn,$ as WithCustomRenderers,F as WithDefaultColumnPinning,P as WithDefaultSorting,E as WithDerivedPropertyOrderingAndFilter,x as WithFunctionColumn,v as WithInterfaceType,D as WithObjectSet,q as WithSubmitEditsButton,Fo as __namedExportsOrder,Po as default};
