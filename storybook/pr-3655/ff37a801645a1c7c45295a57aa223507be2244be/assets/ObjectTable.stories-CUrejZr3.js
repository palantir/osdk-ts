var ft=Object.defineProperty;var Ct=(e,n,a)=>n in e?ft(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a;var B=(e,n,a)=>Ct(e,typeof n!="symbol"?n+"":n,a);import{r as d,j as t,f as vt}from"./iframe-DWIQQc1o.js";import{O as p}from"./object-table-Duh1IjoL.js";import{E as m}from"./Employee-BAk2o20h.js";import{D as xt}from"./Dialog-CNZCJXnO.js";import{c as le}from"./index-Dko6AC1_.js";import{i as fe,a as nt,b as Tt,p as Bt,O as jt,c as St,d as Et,e as Dt,f as Rt,B as se,g as kt,h as Nt,I as tt,H as at,N as Ot,j as It,k as At,l as Pt,m as Ce,D as Ft}from"./dialog-BgfwcHg6.js";import{S as Ht}from"./small-cross-BvihPhRr.js";import{I as ve}from"./svgIconContainer-DkuZeZGf.js";import{u as ot}from"./useOsdkClient-BFYn6u59.js";import"./preload-helper-E6GNJgXQ.js";import"./Table-Ce1cXZsz.js";import"./useEventCallback-C9XQNpzo.js";import"./SkeletonBar-Ca6xdKOW.js";import"./LoadingCell-Df1xPnUj.js";import"./ColumnConfigDialog-BX7XxE13.js";import"./DraggableList-CLBnBhEq.js";import"./search-tetJrjI4.js";import"./Input-C_cv6YYM.js";import"./useBaseUiId-CdoOGcfY.js";import"./useControlled-9pXM-sJL.js";import"./index-S1zUj8ZB.js";import"./index-DYvmvnyQ.js";import"./Button-DvrZcAky.js";import"./ActionButton-CNOfszZi.js";import"./Checkbox-CrwWik7f.js";import"./InternalBackdrop-CzpSHQxK.js";import"./composite-BEvibf3m.js";import"./index-DlRmRGet.js";import"./useValueChanged-CTQeir4U.js";import"./CollapsiblePanel-21E5Shon.js";import"./MultiColumnSortDialog-i27hbhZX.js";import"./MenuTrigger-BijjanYT.js";import"./CompositeItem-kMm1BSnS.js";import"./ToolbarRootContext-CqAlJbED.js";import"./getDisabledMountTransitionStyles-E_cXQNEm.js";import"./getPseudoElementBounds-D5a2OQeA.js";import"./chevron-down-CHkq8C0c.js";import"./index-CLKrzqd-.js";import"./error-D3MaX7u3.js";import"./BaseCbacBanner-D2gDWTiW.js";import"./makeExternalStore-CYACmAN7.js";import"./cross-Bx1_ZWdV.js";import"./Tooltip-D1cmWRY2.js";import"./PopoverPopup-DjQSrnR7.js";import"./toNumber-CHMHh1nM.js";import"./tick-BbdAb4vX.js";import"./DropdownField-Bi7BOCao.js";import"./withOsdkMetrics-PMyDQr0x.js";import"./iconLoader-Dq1glO5m.js";const w={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT:"right",TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};function Wt(e){return e===w.TOP||e===w.TOP_LEFT||e===w.TOP_RIGHT||e===w.BOTTOM||e===w.BOTTOM_LEFT||e===w.BOTTOM_RIGHT}function xe(e){return e===w.TOP||e===w.TOP_LEFT||e===w.TOP_RIGHT?w.TOP:e===w.BOTTOM||e===w.BOTTOM_LEFT||e===w.BOTTOM_RIGHT?w.BOTTOM:e===w.LEFT||e===w.LEFT_TOP||e===w.LEFT_BOTTOM?w.LEFT:w.RIGHT}class Mt extends d.PureComponent{constructor(a){super(a);B(this,"componentWillUpdate");B(this,"componentWillReceiveProps");B(this,"componentWillMount");B(this,"getDerivedStateFromProps");B(this,"displayName");B(this,"timeoutIds",[]);B(this,"requestIds",[]);B(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const a of this.timeoutIds)window.clearTimeout(a);this.timeoutIds=[]}});B(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const a of this.requestIds)window.cancelAnimationFrame(a);this.requestIds=[]}});fe("production")||this.validateProps(this.props)}componentDidUpdate(a,i,l){fe("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(a){const i=window.requestAnimationFrame(a);return this.requestIds.push(i),()=>window.cancelAnimationFrame(i)}setTimeout(a,i){const l=window.setTimeout(a,i);return this.timeoutIds.push(l),()=>window.clearTimeout(l)}validateProps(a){}}var Te;(function(e){e.SMALL="360px",e.STANDARD="50%",e.LARGE="90%"})(Te||(Te={}));class ue extends Mt{render(){const{hasBackdrop:n,size:a,style:i,position:l}=this.props,{className:s,children:h,...C}=this.props,D=xe(l),T=le(Tt,{[Bt(D)??""]:!0},s),ce=a==null?i:{...i,[Wt(D)?"height":"width"]:a};return t.jsx(jt,{...C,className:le({[St]:n}),children:t.jsxs("div",{className:T,style:ce,children:[this.maybeRenderHeader(),h]})})}validateProps(n){n.title==null&&(n.icon!=null&&console.warn(Et),n.isCloseButtonShown!=null&&console.warn(Dt)),n.position!=null&&n.position!==xe(n.position)&&console.warn(Rt)}maybeRenderCloseButton(){return this.props.isCloseButtonShown!==!1?t.jsx(se,{"aria-label":"Close",className:kt,icon:t.jsx(Ht,{size:ve.LARGE}),onClick:this.props.onClose,variant:"minimal"}):null}maybeRenderHeader(){const{icon:n,title:a}=this.props;return a==null?null:t.jsxs("div",{className:Nt,children:[t.jsx(tt,{icon:n,size:ve.LARGE}),t.jsx(at,{children:a}),this.maybeRenderCloseButton()]})}}B(ue,"displayName",`${nt}.Drawer`),B(ue,"defaultProps",{canOutsideClickClose:!0,isOpen:!1,position:"right",style:{}});var me;(function(e){e[e.STANDARD=48]="STANDARD",e[e.SMALL=32]="SMALL",e[e.EXTRA_SMALL=20]="EXTRA_SMALL"})(me||(me={}));const it=e=>{const{action:n,children:a,className:i,description:l,icon:s,iconMuted:h=!0,iconSize:C=me.STANDARD,layout:D="vertical",title:T}=e;return t.jsxs("div",{className:le(Ce,`${Ce}-${D}`,i),children:[s==null?void 0:t.jsx("div",{className:Ot,style:{fontSize:`${C}px`,lineHeight:`${C}px`},children:t.jsx(tt,{className:le({[It]:h}),icon:s,size:C,"aria-hidden":!0,tabIndex:-1})}),T==null&&l==null?void 0:t.jsxs("div",{className:At,children:[T&&t.jsx(at,{children:T}),l&&Pt(l,"div")]}),n,a]})};it.displayName=`${nt}.NonIdealState`;const Vt={type:"interface",apiName:"Worker"},_t="_reopenButton_lf80i_17",zt="_drawerBody_lf80i_21",Lt="_blueprintDialog_lf80i_28",qt="_blueprintDialogContent_lf80i_32",$t="_baseUiDialog_lf80i_39",Ut="_shell_lf80i_44",Kt="_instructions_lf80i_52",Gt="_tableFrame_lf80i_57",S={reopenButton:_t,drawerBody:zt,blueprintDialog:Lt,blueprintDialogContent:qt,baseUiDialog:$t,shell:Ut,instructions:Kt,tableFrame:Gt},ge=d.memo(function({tableProps:n}){return t.jsxs("div",{className:S.shell,children:[t.jsx("div",{className:S.instructions,children:"Click a column header chevron. The header menu should open above the overlay and stay interactive."}),t.jsx("div",{className:S.tableFrame,children:t.jsx(p,{...n})})]})}),pe=d.memo(function({tableProps:n}){const[a,i]=d.useState(!0),l=d.useCallback(()=>{i(!0)},[]),s=d.useCallback(()=>{i(!1)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(se,{className:S.reopenButton,onClick:l,text:"Open drawer"}),t.jsx(ue,{isOpen:a,onClose:s,size:"90%",title:"ObjectTable in Blueprint Drawer",children:t.jsx("div",{className:S.drawerBody,children:t.jsx(ge,{tableProps:n})})})]})}),ye=d.memo(function({tableProps:n}){const[a,i]=d.useState(!0),l=d.useCallback(()=>{i(!0)},[]),s=d.useCallback(()=>{i(!1)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(se,{className:S.reopenButton,onClick:l,text:"Open Blueprint dialog"}),t.jsx(Ft,{className:S.blueprintDialog,isOpen:a,onClose:s,title:"ObjectTable in Blueprint Dialog",children:t.jsx("div",{className:S.blueprintDialogContent,children:t.jsx(ge,{tableProps:n})})})]})}),he=d.memo(function({tableProps:n}){const[a,i]=d.useState(!0),l=d.useCallback(()=>{i(!0)},[]),s=d.useCallback(h=>{i(h)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(se,{className:S.reopenButton,onClick:l,text:"Open Base UI dialog"}),t.jsx(xt,{className:S.baseUiDialog,isOpen:a,onOpenChange:s,title:"ObjectTable in Base UI Dialog",children:t.jsx(ge,{tableProps:n})})]})});try{pe.displayName="ObjectTableInBlueprintDrawer",pe.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDrawer",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{ye.displayName="ObjectTableInBlueprintDialog",ye.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{he.displayName="ObjectTableInBaseUIDialog",he.__docgenInfo={description:"",displayName:"ObjectTableInBaseUIDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}const{expect:o,fireEvent:be,fn:f,screen:y,userEvent:r,waitFor:c,within:u}=__STORYBOOK_MODULE_TEST__,Ua={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...vt.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object or interface type of the object",control:!1},columnDefinitions:{description:"Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",control:!1},filter:{description:"The current where clause to filter the objects in the table. If provided, the filter is controlled.",control:!1},enableOrdering:{description:"Whether the table is sortable by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnPinning:{description:"Whether columns can be pinned by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnResizing:{description:"Whether columns can be resized by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnConfig:{description:"Whether the column configuration dialog for column visibility and ordering is available to the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},editMode:{description:"Controls the edit mode behavior of the table. 'always': Table is always in edit mode. 'manual': User can toggle edit mode on/off.",control:"select",options:["manual","always"],defaultValue:"manual",table:{defaultValue:{summary:"manual"}}},showEditFooter:{description:"Whether to render the bottom edit footer. Defaults to `true`. Ignored when `editMode` is manual or `onSubmitEdits` is provided — the footer is always shown in that case.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},defaultOrderBy:{description:"The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:!1},orderBy:{description:"The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:!1},onOrderByChanged:{description:"Called when the order by clause is changed. Required when sorting is controlled.",control:!1,table:{category:"Events"}},onColumnVisibilityChanged:{description:"Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",control:!1,table:{category:"Events"}},onColumnsPinnedChanged:{description:"Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",control:!1,table:{category:"Events"}},onColumnResize:{description:"Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",control:!1,table:{category:"Events"}},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},onColumnHeaderClick:{description:"Called when a column header is clicked. Parameters: columnId - The ID of the clicked column.",control:!1,table:{category:"Events"}},selectionMode:{description:"Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",control:{type:"select"},options:["single","multiple","none"],defaultValue:"none",table:{defaultValue:{summary:"none"}}},selectedRows:{description:"The currently selected rows in the table. If provided, the row selection is controlled.",control:!1},onRowSelection:{description:"Called when the row selection changes. Required when row selection is controlled.",control:!1,table:{category:"Events"}},onRowSelectionChanged:{description:"Called when the row selection changes, with a RowSelectionChange payload (selectedRows, isSelectAll, derived objectSet). Preferred over the deprecated onRowSelection callback.",control:!1,table:{category:"Events"}},focusedRow:{description:"The primary key of the row to render as visually focused. When provided, focus is controlled.",control:!1},onFocusedRowChanged:{description:"Called when the focused row changes — fires in both controlled and uncontrolled modes so callers can observe focus without taking it over.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},rowHeight:{description:"The height of each row in pixels.",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},className:{description:"Additional CSS class name for the table",control:"text"}}},v=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobProfile"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"businessTitle"}},{locator:{type:"property",id:"businessArea"}},{locator:{type:"property",id:"team"}},{locator:{type:"property",id:"workerType"}},{locator:{type:"property",id:"locationName"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"property",id:"locationCountry"}},{locator:{type:"property",id:"locationRegion"}},{locator:{type:"property",id:"locationType"}},{locator:{type:"property",id:"firstFullTimeStartDate"}},{locator:{type:"property",id:"firstInternStartDate"}},{locator:{type:"property",id:"employeeNumber"}},{locator:{type:"property",id:"adUsername"}},{locator:{type:"property",id:"primaryOfficeId"}},{locator:{type:"property",id:"preferredNameFirst"}},{locator:{type:"property",id:"preferredNameLast"}},{locator:{type:"property",id:"leadEmployeeNumber"}},{locator:{type:"property",id:"mentorEmployeeNumber"}}],rt=[{locator:{type:"property",id:"fullName"},editable:!0},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})}},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstInternStartDate"},editable:!0,renderCell:e=>t.jsx("div",{children:e.firstInternStartDate?new Date(e.firstInternStartDate).toISOString():"No value"})},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})}},{locator:{type:"property",id:"isRemote"},renderCell:e=>e.isRemote==null?"No Value":e.isRemote?"Yes":"No",editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:[!0,!1],itemToStringLabel:e=>e==null?"No Value":e?"Yes":"No"})}}],lt={type:"query",apiName:"getEmployeeSeniority",version:"1.0.0",osdkMetadata:void 0},st=[{locator:{type:"property",id:"fullName"}},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:e=>"managerName"in e?t.jsx("span",{children:e.managerName}):t.jsx("span",{style:{color:"#999"},children:"No Manager"})},{locator:{type:"function",id:"seniority",queryDefinition:lt,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}],we=e=>`Open header menu for column with id=${e}`;async function R(e,n){const i=(await e.findByRole("button",{name:we(n)})).closest("th");if(i==null)throw new Error(`Could not find <th> for column "${n}"`);return i}async function x(e,n){await r.click(await e.findByRole("button",{name:we(n)}))}async function E(e){await r.click(await y.findByRole("menuitem",{name:e}))}function Yt(e){return e.querySelector('[data-icon="sort-alphabetical-desc"]')!=null?"desc":e.querySelector('[data-icon="sort-alphabetical"]')!=null?"asc":"none"}function N(e,n){const a=e.queryByRole("button",{name:we(n)}),i=(a==null?void 0:a.closest("th"))??null;return i!=null?Yt(i):"none"}function ct(e){const n=e.querySelectorAll(":scope > div"),a=n[n.length-1];if(!(a instanceof HTMLElement))throw new Error("Could not find column resize handle");return a}async function dt(e,n){const a=ct(e),i=a.getBoundingClientRect(),l=i.left+i.width/2,s=i.top+i.height/2;await r.pointer([{keys:"[MouseLeft>]",target:a,coords:{x:l,y:s}},{coords:{x:l+n,y:s}},{keys:"[/MouseLeft]",coords:{x:l+n,y:s}}])}function de(e){return Number.parseFloat(e.style.width)}function j(e){const n=e.closest("tr");if(n==null)throw new Error("Cell is not inside a row");return n}const I={args:{objectType:m,columnDefinitions:v},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Ahmed Williams"),await x(n,"fullName"),await o(await y.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await o(y.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await o(y.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await o(y.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await r.keyboard("{Escape}")}},A={args:{objectType:m,columnDefinitions:v},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:e=>{const a=ot()(m).where({jobProfile:"Marketing Manager"});return t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e,objectType:m,objectSet:a})})},play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Pierre Gonzalez"),await o(n.getByText("Kimberly Martinez")).toBeInTheDocument(),await o(n.getByText("Richard Bernard")).toBeInTheDocument(),await o(n.queryByText("Ahmed Williams")).not.toBeInTheDocument()}},P={args:{objectType:Vt},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Ahmed Williams"),await o(n.getByText("Name")).toBeInTheDocument(),await o(n.getByText("Email")).toBeInTheDocument()}},F={render:()=>{const e=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"rdp",id:"managerName",creator:a=>a.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:a=>"managerName"in a?t.jsx("span",{children:a.managerName}):t.jsx("span",{style:{color:"#999"},children:"No Manager"})}],n={managerName:{$in:["Ahmed Williams","Fatima Zhang"]}};return t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{objectType:m,columnDefinitions:e,defaultOrderBy:[{property:"managerName",direction:"asc"}],filter:n})})},play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Manager"),await c(()=>o(n.getAllByRole("row").length).toBeGreaterThan(1)),await R(n,"managerName"),await c(()=>o(N(n,"managerName")).toBe("asc")),await x(n,"managerName"),await E("Sort descending"),await c(()=>o(N(n,"managerName")).toBe("desc"))},parameters:{docs:{description:{story:"Combines derived property columns with `defaultOrderBy` and `filter`. Demonstrates sorting by an RDP (managerName) and filtering the derived property."},source:{code:`type RDPs = { managerName: "string" };

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
/>`}}}},H={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"function",id:"seniority",queryDefinition:lt,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}]},parameters:{docs:{description:{story:"Use function-backed columns to display computed values from a Foundry query. The 'Seniority' column calls `getEmployeeSeniority` with the current object set and maps each result back to the corresponding row."},source:{code:`import { getEmployeeSeniority } from "./ontology/queries";

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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Seniority"),await c(()=>o(n.getAllByText(/^(Senior|Mid|Junior|Unknown)$/u).length).toBeGreaterThan(0))}},W={args:{objectType:m,columnDefinitions:v,selectionMode:"single",onRowSelectionChanged:f()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e,args:n})=>{const a=u(e),i=()=>a.findAllByRole("checkbox",{name:/select row/iu});await i(),await o(a.queryByRole("checkbox",{name:/select all rows/iu})).not.toBeInTheDocument(),await r.click((await i())[0]),await c(()=>o(n.onRowSelectionChanged).toHaveBeenCalled()),await o((await i())[0]).toBeChecked(),await r.click((await i())[1]),await o((await i())[1]).toBeChecked(),await o((await i())[0]).not.toBeChecked()}},M={args:{objectType:m,columnDefinitions:v,selectionMode:"multiple",onRowSelectionChanged:f()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e,args:n})=>{const a=u(e),i=()=>a.findAllByRole("checkbox",{name:/select row/iu}),l=()=>a.findByRole("checkbox",{name:/deselect all rows/iu}),[s,h]=await i();await r.click(s),await o(s).toBeChecked(),await c(()=>o(n.onRowSelectionChanged).toHaveBeenCalled()),await r.click(h),await o(s).toBeChecked(),await o(h).toBeChecked(),await r.click(await l());for(const C of await i())await o(C).not.toBeChecked();await r.click(await a.findByRole("checkbox",{name:"Select all rows"}));for(const C of await i())await o(C).toBeChecked();await r.click(await l());for(const C of await i())await o(C).not.toBeChecked()}},V={args:{objectType:m,columnDefinitions:v,renderCellContextMenu:(e,n)=>t.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[t.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),t.jsx("div",{children:n?String(n):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
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
/>`}}},render:e=>t.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[t.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),t.jsx(p,{...e})]}),play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Ahmed Williams"),be.contextMenu(n.getByText("Ahmed Williams")),await o(await y.findByText("Cell Value:")).toBeInTheDocument(),await r.click(n.getByText("Right click on any cell")),await c(()=>o(y.queryByText("Cell Value:")).not.toBeInTheDocument())}},_={args:{objectType:m,columnDefinitions:st.map((e,n)=>({...e,width:n===0?250:n===1?300:150})),onColumnResize:f()},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  { locator: { type: "property", id: "department" }, width: 300 },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e,args:n})=>{const a=u(e),i=await R(a,"fullName");await o(de(i)).toBe(250),await dt(i,120),await c(()=>o(de(i)).toBeGreaterThan(250)),await o(n.onColumnResize).toHaveBeenCalledWith("fullName",o.any(Number)),n.onColumnResize.mockClear(),await r.dblClick(ct(i)),await c(()=>o(de(i)).toBe(250)),await o(n.onColumnResize).toHaveBeenCalledWith("fullName",null)}},z={args:{objectType:m,columnDefinitions:v,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e})=>{const n=u(e);await R(n,"fullName"),await c(()=>o(N(n,"fullName")).toBe("desc")),await x(n,"fullName"),await E("Sort ascending"),await c(()=>o(N(n,"fullName")).toBe("asc")),await x(n,"fullName"),await E("Sort descending"),await c(()=>o(N(n,"fullName")).toBe("desc"))}},L={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}],onColumnsPinnedChanged:f()},parameters:{docs:{source:{code:`const columnDefinitions = [
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
/>`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e,args:n})=>{const a=u(e),i=await R(a,"fullName"),l=await R(a,"department");await o(i).toHaveAttribute("data-pinned","left"),await o(l).toHaveAttribute("data-pinned","right"),await x(a,"fullName"),await E("Unpin Column"),await c(()=>o(i).toHaveAttribute("data-pinned","false")),await o(n.onColumnsPinnedChanged).toHaveBeenCalled(),await x(a,"fullName"),await E("Pin column"),await c(()=>o(i).toHaveAttribute("data-pinned","left"))}},q={parameters:{docs:{source:{code:`const customColumnDefinition = [
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
    `}}},args:{objectType:m,columnDefinitions:[...st.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),t.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e})=>{const n=u(e);await o((await n.findAllByRole("button",{name:"View"})).length).toBeGreaterThan(0),await o(n.getByText("Actions")).toBeInTheDocument(),await o(n.getAllByRole("button",{name:"Edit"}).length).toBeGreaterThan(0)}},$={args:{objectType:m,columnDefinitions:v,selectionMode:"multiple",selectedRows:[],orderBy:[{property:"fullName",direction:"asc"}],onRowClick:f(),onColumnHeaderClick:f(),onRowSelectionChanged:f(),onOrderByChanged:f(),onColumnVisibilityChanged:f(),onColumnsPinnedChanged:f(),onColumnResize:f(),onFocusedRowChanged:f()},parameters:{docs:{source:{code:`<ObjectTable
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
/>`}}},render:e=>{const[n,a]=d.useState(null),[i,l]=d.useState(null),[s,h]=d.useState([]),[C,D]=d.useState(!1),[T,ce]=d.useState([{property:"fullName",direction:"asc"}]),[ut,k]=d.useState(""),mt=d.useCallback(b=>{var g;(g=e.onRowClick)==null||g.call(e,b),a(b),k("onRowClick")},[e]),pt=d.useCallback(b=>{var g;(g=e.onColumnHeaderClick)==null||g.call(e,b),l(b),k("onColumnHeaderClick")},[e]),yt=d.useCallback(b=>{var g;(g=e.onRowSelectionChanged)==null||g.call(e,b),h(b.selectedRows.map(O=>O.$primaryKey)),D(b.isSelectAll),k("onRowSelectionChanged")},[e]),ht=d.useCallback(b=>{var g;(g=e.onOrderByChanged)==null||g.call(e,b),ce(b),k("onOrderByChanged")},[e]),bt=d.useCallback(b=>{var g;(g=e.onColumnVisibilityChanged)==null||g.call(e,b),k("onColumnVisibilityChanged")},[e]),gt=d.useCallback(b=>{var g;(g=e.onColumnsPinnedChanged)==null||g.call(e,b),k("onColumnsPinnedChanged")},[e]),wt=d.useCallback((b,g)=>{var O;(O=e.onColumnResize)==null||O.call(e,b,g),k(`onColumnResize (${b})`)},[e]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe"},children:[t.jsx("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:"Event Monitor:"}),t.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[t.jsx("strong",{children:"Last event:"})," ",ut||"None"]}),t.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[t.jsx("strong",{children:"Row clicked:"})," ",n?t.jsx("code",{children:n.fullName}):"None"]}),t.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[t.jsx("strong",{children:"Column clicked:"})," ",i?t.jsx("code",{children:i}):"None"]}),t.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[t.jsx("strong",{children:"Selected rows:"})," ",C?"All employees":`${s.length} employees`]}),t.jsxs("div",{style:{fontSize:"12px"},children:[t.jsx("strong",{children:"Current sort:"})," ",T!=null&&T[0]?`${T[0].property} (${T[0].direction})`:"None"]})]}),t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e,selectedRows:s,orderBy:T,onRowClick:mt,onColumnHeaderClick:pt,onRowSelectionChanged:yt,onOrderByChanged:ht,onColumnVisibilityChanged:bt,onColumnsPinnedChanged:gt,onColumnResize:wt})})]})},play:async({canvasElement:e,args:n})=>{const a=u(e);await a.findByText("Ahmed Williams"),await r.click(a.getByText("Ahmed Williams")),await c(()=>o(n.onRowClick).toHaveBeenCalled()),await o(n.onFocusedRowChanged).toHaveBeenCalled();const i=await R(a,"fullName");await r.click(u(i).getByText("Name")),await c(()=>o(n.onColumnHeaderClick).toHaveBeenCalledWith("fullName")),await r.click((await a.findAllByRole("checkbox",{name:/select row/iu}))[0]),await c(()=>o(n.onRowSelectionChanged).toHaveBeenCalled()),await x(a,"fullName"),await E("Sort descending"),await c(()=>o(n.onOrderByChanged).toHaveBeenCalled()),await x(a,"fullName"),await E("Pin column"),await c(()=>o(n.onColumnsPinnedChanged).toHaveBeenCalled()),await dt(await R(a,"fullName"),100),await c(()=>o(n.onColumnResize).toHaveBeenCalled()),await x(a,"fullName"),await E("Configure Columns");const l=await y.findAllByRole("button",{name:/^Remove /u});await r.click(l[0]),await r.click(await y.findByRole("button",{name:"Apply"})),await c(()=>o(n.onColumnVisibilityChanged).toHaveBeenCalled())}},U={args:{objectType:m,columnDefinitions:v,orderBy:[{property:"fullName",direction:"asc"}],onOrderByChanged:f()},parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:e=>{const[n,a]=d.useState(e.orderBy??[{property:"fullName",direction:"asc"}]),i=d.useCallback(l=>{var s;(s=e.onOrderByChanged)==null||s.call(e,l),a(l)},[e]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("strong",{children:"Current Sort:"})," ",n.map((l,s)=>t.jsxs("span",{children:[l.property," (",l.direction,")",s<n.length-1&&", "]},s))]}),t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e,orderBy:n,onOrderByChanged:i})})]})},play:async({canvasElement:e,args:n})=>{const a=u(e);await R(a,"fullName"),await o(a.getByText("fullName (asc)")).toBeInTheDocument(),await x(a,"fullName"),await E("Sort descending"),await c(()=>o(n.onOrderByChanged).toHaveBeenCalled()),await c(()=>o(a.getByText("fullName (desc)")).toBeInTheDocument())}},K={args:{objectType:m,columnDefinitions:v,selectionMode:"multiple",selectedRows:[],onRowSelectionChanged:f()},parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);
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
);`}}},render:e=>{const[n,a]=d.useState(e.selectedRows??[]),[i,l]=d.useState(!1),s=d.useCallback(h=>{var C;(C=e.onRowSelectionChanged)==null||C.call(e,h),a(h.selectedRows.map(D=>D.$primaryKey)),l(h.isSelectAll)},[e]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("strong",{children:"Selected:"})," ",i?"All Employees":`${n.length} employees`,n.length>0&&t.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{a([]),l(!1)},children:"Clear Selection"})]}),t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e,selectedRows:n,isAllSelected:i,onRowSelectionChanged:s})})]})},play:async({canvasElement:e,args:n})=>{const a=u(e),i=()=>a.findAllByRole("checkbox",{name:/select row/iu});await i(),await r.click((await i())[0]),await c(()=>o(n.onRowSelectionChanged).toHaveBeenCalled()),await c(()=>o(a.getByText("1 employees")).toBeInTheDocument()),await r.click((await i())[1]),await c(()=>o(a.getByText("2 employees")).toBeInTheDocument()),await r.click(a.getByRole("button",{name:"Clear Selection"})),await c(()=>o(a.getByText("0 employees")).toBeInTheDocument()),await o(a.queryByRole("button",{name:"Clear Selection"})).not.toBeInTheDocument()}},G={args:{objectType:m,columnDefinitions:v,onFocusedRowChanged:f()},parameters:{docs:{description:{story:"Demonstrates the `focusedRow` / `onFocusedRowChanged` API. Click any row to focus it; the focused employee is shown in the banner above and persists until cleared by the caller. Because focus is controlled, outside clicks no longer auto-clear — the caller owns clearing."},source:{code:`const [focusedRow, setFocusedRow] = useState<Osdk.Instance<Employee> | null>(null);

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
);`}}},render:e=>{const[n,a]=d.useState(null),i=d.useCallback(l=>{var s;(s=e.onFocusedRowChanged)==null||s.call(e,l),a(l)},[e]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe",display:"flex",alignItems:"center",gap:"12px"},children:[t.jsxs("span",{children:[t.jsx("strong",{children:"Focused employee:"})," ",n==null?"none":`${n.fullName} (#${n.employeeNumber})`]}),t.jsx("button",{type:"button",style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:n==null?"not-allowed":"pointer"},onClick:()=>a(null),disabled:n==null,children:"Clear focus"})]}),t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e,focusedRow:(n==null?void 0:n.$primaryKey)??null,onFocusedRowChanged:i})})]})},play:async({canvasElement:e,args:n})=>{const a=u(e);await a.findByText("Ahmed Williams"),await r.click(a.getByText("Ahmed Williams")),await c(()=>o(n.onFocusedRowChanged).toHaveBeenCalled()),await c(()=>o(a.getByText(/Ahmed Williams \(#\d+\)/u)).toBeInTheDocument()),await c(()=>o(j(a.getByText("Ahmed Williams"))).toHaveAttribute("data-focused","true")),await r.click(a.getByText(/Focused employee:/u)),await c(()=>o(j(a.getByText("Ahmed Williams"))).toHaveAttribute("data-focused","false")),await r.click(a.getByText("Ahmed Williams")),await c(()=>o(j(a.getByText("Ahmed Williams"))).toHaveAttribute("data-focused","true")),await r.click(a.getByRole("button",{name:"Clear focus"})),await c(()=>o(j(a.getByText("Ahmed Williams"))).toHaveAttribute("data-focused","false"))}},Y={args:{objectType:m,columnDefinitions:v,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Ahmed Williams"),await o(n.queryByRole("button",{name:/Open header menu/iu})).not.toBeInTheDocument()}},J={args:{objectType:m,columnDefinitions:v},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. Open the drawer and click any column header chevron; the menu should appear above the drawer."},source:{code:`<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>`}}},render:e=>t.jsx(pe,{tableProps:e}),play:async()=>{await y.findByText("Ahmed Williams"),await x(y,"fullName"),await o(await y.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await r.keyboard("{Escape}")}},X={args:{objectType:m,columnDefinitions:v},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>t.jsx(ye,{tableProps:e}),play:async()=>{await y.findByText("Ahmed Williams"),await x(y,"fullName"),await o(await y.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await r.keyboard("{Escape}")}},Z={args:{objectType:m,columnDefinitions:v},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>t.jsx(he,{tableProps:e}),play:async()=>{await y.findByText("Ahmed Williams"),await x(y,"fullName"),await o(await y.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await r.keyboard("{Escape}")}},Q={args:{objectType:m,columnDefinitions:v,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Ahmed Williams"),await o(j(n.getByText("Ahmed Williams"))).toHaveStyle({height:"56px"})}},ee={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>t.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const n=e.firstFullTimeStartDate,a=n&&new Date(n)<=new Date;return t.jsx("span",{className:`status-tag ${a?"active":"inactive"}`,children:a?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e})}),play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Ahmed Williams"),await o(n.getByRole("link",{name:"Employee Name"})).toBeInTheDocument(),await o(n.getByText("Employment Status")).toBeInTheDocument(),await o(n.getAllByText(/^(Active|Inactive)$/u).length).toBeGreaterThan(0)}},ne={args:{objectType:m,columnDefinitions:rt,editMode:"manual",onCellValueChanged:f()},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>{const[n,a]=d.useState(),i=d.useCallback(l=>{var s;(s=e.onCellValueChanged)==null||s.call(e,l),a(l)},[e]);return t.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[t.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'Try changing showEditFooter to false to hide the edit footer bar. Change edit mode to "manual" to enable inline editing with an Edit Table button.'}),n!=null&&t.jsxs("div",{style:{padding:"12px",backgroundColor:"#d1ecf1",marginBottom:"8px",borderRadius:"4px",fontFamily:"monospace",fontSize:"13px"},children:[t.jsx("strong",{children:"Last cell edit:"}),' Column "',n.columnId,'" changed from "',String(n.oldValue),'" to "',String(n.newValue),'"']}),t.jsx(p,{...e,onCellValueChanged:i})]})},play:async({canvasElement:e,args:n})=>{const a=u(e);await a.findByText("Ahmed Williams"),await r.click(a.getByRole("button",{name:"Edit Table"}));const i=a.getAllByRole("row")[1],l=()=>u(i).getAllByRole("cell"),s=u(l()[0]).getByRole("textbox");await r.click(s),await r.clear(s),await r.type(s,"Ahmed Williamson"),await r.tab(),await c(()=>o(n.onCellValueChanged).toHaveBeenCalledWith(o.objectContaining({columnId:"fullName",newValue:"Ahmed Williamson"})));const h=await u(l()[3]).findByRole("combobox");await r.click(h),await r.click(await y.findByRole("option",{name:"Engineering"})),await c(()=>o(n.onCellValueChanged).toHaveBeenCalledWith(o.objectContaining({columnId:"department",newValue:"Engineering"})));const C=u(l()[5]).getByRole("combobox");await r.click(C),await r.click(await y.findByRole("button",{name:"Today"})),await c(()=>o(n.onCellValueChanged).toHaveBeenCalledWith(o.objectContaining({columnId:"firstFullTimeStartDate"}))),await r.click(a.getByRole("button",{name:"Cancel"})),await o(await a.findByRole("button",{name:"Edit Table"})).toBeInTheDocument()}},te={args:{objectType:m,columnDefinitions:rt,editMode:"manual",onSubmitEdits:f(async e=>(await new Promise(n=>setTimeout(n,1e3)),!0))},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e,objectType:m})}),play:async({canvasElement:e,args:n})=>{const a=u(e);await a.findByText("Ahmed Williams"),await r.click(a.getByRole("button",{name:"Edit Table"}));const i=a.getAllByRole("row")[1],l=u(i).getAllByRole("cell")[0],s=u(l).getByRole("textbox");await r.click(s),await r.clear(s),await r.type(s,"Ahmed Williamson"),await r.tab();const h=a.getByRole("button",{name:"Submit Edits"});await c(()=>o(h).toBeEnabled()),await r.click(h),await c(()=>o(n.onSubmitEdits).toHaveBeenCalled()),await c(()=>o(a.getByRole("button",{name:"Edit Table"})).toBeInTheDocument(),{timeout:5e3})}},ae={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0,validateEdit:async e=>String(e??"").trim().length>=2?void 0:"Name must be at least 2 characters long"},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0,validateEdit:async e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(String(e??""))?void 0:"Please enter a valid email address"},{locator:{type:"property",id:"employeeNumber"},editable:!0,validateEdit:async e=>Number(e)>0?void 0:"Employee number must be positive"},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})},validateEdit:async e=>e?void 0:"Job title is required"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})},validateEdit:async e=>{if(!e||isNaN(Date.parse(e)))return"Please enter a valid date";const n=new Date(e),a=new Date;if(a.setHours(0,0,0,0),n<a)return"Date cannot be before today"}}],editMode:"always",onSubmitEdits:f(async e=>!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>t.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[t.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:["Try editing cells with invalid values to see validation in action:",t.jsxs("ul",{style:{margin:"8px 0 0 20px"},children:[t.jsx("li",{children:"Name must be at least 2 characters"}),t.jsx("li",{children:"Email must be a valid format"}),t.jsx("li",{children:"Employee number must be positive"}),t.jsx("li",{children:"Job title is required"}),t.jsx("li",{children:"Start date is required"})]})]}),t.jsx(p,{...e,objectType:m})]}),play:async({canvasElement:e})=>{const n=u(e),a=await n.findByDisplayValue("Ahmed Williams");await r.click(a),await r.clear(a),await r.type(a,"a"),await r.tab(),await c(()=>o(n.getByText("Validation error")).toBeInTheDocument()),await o(n.getByRole("button",{name:"Submit Edits"})).toBeDisabled(),await r.click(a),await r.clear(a),await r.type(a,"Valid Name"),await r.tab(),await c(()=>o(n.queryByText("Validation error")).not.toBeInTheDocument()),await o(n.getByRole("button",{name:"Submit Edits"})).toBeEnabled()}},oe={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"},editable:e=>(e.jobTitle??"")==="Senior Product Manager"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:e=>({items:e.department==="Operations"?["Sales","Marketing"]:["Sales","Marketing","Finance","Human Resources"]})}}],editMode:"always",onCellValueChanged:f()},parameters:{docs:{description:{story:"Demonstrates per-row configuration with `editable` as a predicate function and dynamic `getFieldComponentProps` that computes dropdown items from the row's data. jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows"},source:{code:`const columnDefinitions = [
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
);`}}},render:e=>t.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[t.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'JobTitle is only editable for "Senior Product Manager" rows. Department dropdown shows only 2 options for Operations rows.'}),t.jsx(p,{...e})]}),play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Ahmed Williams");const a=u(j(n.getByText("Margaret Jackson"))).getAllByRole("cell");await o(a[1]).toHaveAttribute("data-editable","true");const i=u(j(n.getByText("Ahmed Williams"))).getAllByRole("cell");await o(i[1]).not.toHaveAttribute("data-editable");const l=j(n.getByText("Yuki Torres"));await r.click(n.getByText("Yuki Torres")),be.click(await u(l).findByRole("combobox")),await o(await y.findAllByRole("option")).toHaveLength(2),await o(y.queryByRole("option",{name:"Finance"})).not.toBeInTheDocument(),await r.keyboard("{Escape}");const s=j(n.getByText("Ahmed Williams"));await r.click(n.getByText("Ahmed Williams")),be.click(await u(s).findByRole("combobox")),await o(await y.findByRole("option",{name:"Finance"})).toBeInTheDocument()}},ie={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}}]},parameters:{docs:{description:{story:'Demonstrates using `getRowAttributes` to set data attributes on rows and a `className` on the table to scope CSS overrides via the data attribute selector. New York employees get a light blue background through the `[data-highlight-row="true"]` CSS selector scoped under the table\'s className.'},source:{code:`/* CSS (imported stylesheet):
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
);`}}},render:e=>{const n=d.useCallback(a=>({"data-highlight-row":a.locationCity==="New York"?"true":void 0}),[]);return t.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[t.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:[t.jsx("strong",{children:"Row attributes + className for CSS override:"})," New York employees have a light blue background via"," ",t.jsx("code",{children:'tr[data-highlight-row="true"]'})," scoped under"," ",t.jsx("code",{children:".customTableStyling"}),"."]}),t.jsx(p,{...e,getRowAttributes:n,className:"customTableStyling"})]})},play:async({canvasElement:e})=>{const n=u(e);await n.findByText("Ahmed Williams"),await o(j(n.getByText("Ahmed Williams"))).toHaveAttribute("data-highlight-row","true"),await o(j(n.getByText("Charlotte Weber"))).not.toHaveAttribute("data-highlight-row")}},re={args:{objectType:m,columnDefinitions:v,renderEmptyState:()=>t.jsx(it,{icon:"folder-close",title:"No saved views found."})},parameters:{docs:{description:{story:"Override the default empty state with a custom render function. Useful for matching product copy or visuals (here a Blueprint `NonIdealState`)."},source:{code:`
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
`}}},render:e=>{const a=ot()(m).where({jobProfile:"Nonexistent Role"});return t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(p,{...e,objectSet:a})})},play:async({canvasElement:e})=>{const n=u(e);await o(await n.findByText("No saved views found.")).toBeInTheDocument(),await o(n.queryByText("Ahmed Williams")).not.toBeInTheDocument()}};var Be,je,Se;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features (sort / pin / configure) are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText("Ahmed Williams");
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(Se=(je=I.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Ee,De,Re;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`, so only
  // the three matching employees should render and unrelated ones should not.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Pierre Gonzalez");
    await expect(canvas.getByText("Kimberly Martinez")).toBeInTheDocument();
    await expect(canvas.getByText("Richard Bernard")).toBeInTheDocument();

    // Ahmed Williams is a Content Manager — excluded by the filter.
    await expect(canvas.queryByText("Ahmed Williams")).not.toBeInTheDocument();
  }
}`,...(Re=(De=A.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var ke,Ne,Oe;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText("Ahmed Williams");

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(Oe=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var Ie,Ae,Pe;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
  // The derived "Manager" column is sortable through the header menu, and
  // \`defaultOrderBy\` seeds it ascending.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Header for the RDP column renders once the filtered rows load.
    await canvas.findByText("Manager");
    await waitFor(() => expect(canvas.getAllByRole("row").length).toBeGreaterThan(1));

    // defaultOrderBy seeds an ascending sort on the derived managerName column.
    await getColumnHeader(canvas, "managerName");
    await waitFor(() => expect(sortDirectionOf(canvas, "managerName")).toBe("asc"));

    // Sorting an RDP column flips direction through the same header menu.
    await openHeaderMenu(canvas, "managerName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() => expect(sortDirectionOf(canvas, "managerName")).toBe("desc"));
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
}`,...(Pe=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Fe,He,We;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
    </div>,
  // The "Seniority" function column resolves server-computed values (the mocked
  // query returns Senior/Mid/Junior/Unknown) and maps them back to each row.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Seniority");

    // At least one row should resolve a computed seniority value.
    await waitFor(() => expect(canvas.getAllByText(/^(Senior|Mid|Junior|Unknown)$/u).length).toBeGreaterThan(0));
  }
}`,...(We=(He=H.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Me,Ve,_e;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
    </div>,
  // In "single" mode each row gets a checkbox but there is no header
  // "select all", and selecting a new row replaces the previous selection.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Re-query fresh each time: toggling selection re-renders the rows.
    const rowCheckboxes = () => canvas.findAllByRole("checkbox", {
      name: /select row/iu
    });
    await rowCheckboxes();

    // No top-level "select all rows" checkbox in single-selection mode.
    await expect(canvas.queryByRole("checkbox", {
      name: /select all rows/iu
    })).not.toBeInTheDocument();

    // Selecting the first row checks it and notifies the consumer.
    await userEvent.click((await rowCheckboxes())[0]);
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());
    await expect((await rowCheckboxes())[0]).toBeChecked();

    // Selecting a second row moves the selection — the first row clears.
    await userEvent.click((await rowCheckboxes())[1]);
    await expect((await rowCheckboxes())[1]).toBeChecked();
    await expect((await rowCheckboxes())[0]).not.toBeChecked();
  }
}`,...(_e=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var ze,Le,qe;M.parameters={...M.parameters,docs:{...(ze=M.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
    </div>,
  // Storybook "Interactions" test: the play function drives the rendered
  // component with simulated user input and asserts on the result. It runs
  // automatically in the Interactions panel and as part of the test runner.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Re-query fresh each time: toggling the header re-renders the rows, so
    // checkbox refs captured earlier could go stale.
    const rowCheckboxes = () => canvas.findAllByRole("checkbox", {
      name: /select row/iu
    });
    const deselectAllCheckbox = () => canvas.findByRole("checkbox", {
      name: /deselect all rows/iu
    });

    // Wait for the (MSW-mocked) rows to load, then grab the per-row checkboxes.
    const [firstRow, secondRow] = await rowCheckboxes();

    // Selecting one row checks it and notifies the consumer.
    await userEvent.click(firstRow);
    await expect(firstRow).toBeChecked();
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());

    // In "multiple" mode a second row can be selected without clearing the
    // first — both stay checked.
    await userEvent.click(secondRow);
    await expect(firstRow).toBeChecked();
    await expect(secondRow).toBeChecked();

    // The header checkbox toggles every row. Once rows are selected its label
    // flips to "Deselect all rows", so clicking it clears the selection.
    await userEvent.click(await deselectAllCheckbox());
    for (const rowCheckbox of await rowCheckboxes()) {
      await expect(rowCheckbox).not.toBeChecked();
    }

    // With nothing selected the header label flips back to "Select all rows"
    // (exact-string match so it doesn't also match "Deselect all rows").
    // Clicking it now selects every row.
    await userEvent.click(await canvas.findByRole("checkbox", {
      name: "Select all rows"
    }));
    for (const rowCheckbox of await rowCheckboxes()) {
      await expect(rowCheckbox).toBeChecked();
    }

    // Everything is selected, so the header label is "Deselect all rows" again.
    // Clicking it clears the entire selection.
    await userEvent.click(await deselectAllCheckbox());
    for (const rowCheckbox of await rowCheckboxes()) {
      await expect(rowCheckbox).not.toBeChecked();
    }
  }
}`,...(qe=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var $e,Ue,Ke;V.parameters={...V.parameters,docs:{...($e=V.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
    </div>,
  // Right-clicking a cell opens the custom context menu (portalled to body),
  // and clicking elsewhere dismisses it.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Ahmed Williams");

    // Right-click a cell to open the custom context menu.
    fireEvent.contextMenu(canvas.getByText("Ahmed Williams"));
    await expect(await screen.findByText("Cell Value:")).toBeInTheDocument();

    // Clicking outside the menu closes it.
    await userEvent.click(canvas.getByText("Right click on any cell"));
    await waitFor(() => expect(screen.queryByText("Cell Value:")).not.toBeInTheDocument());
  }
}`,...(Ke=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var Ge,Ye,Je;_.parameters={..._.parameters,docs:{...(Ge=_.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: columnDefinitions.map((col, index) => ({
      ...col,
      width: index === 0 ? 250 : index === 1 ? 300 : 150
    })) as any,
    onColumnResize: fn()
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
    </div>,
  // Columns render at their configured widths; dragging the resize handle
  // changes a column's width (firing onColumnResize), and a double-click on the
  // handle resets it back to the configured width (firing onColumnResize null).
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // \`getColumnHeader\` resolves once the real (non-loading) header renders.
    const fullNameHeader = await getColumnHeader(canvas, "fullName");
    await expect(getHeaderWidth(fullNameHeader)).toBe(250);

    // Drag the resize handle to widen the column.
    await dragResizeHandle(fullNameHeader, 120);
    await waitFor(() => expect(getHeaderWidth(fullNameHeader)).toBeGreaterThan(250));
    await expect(args.onColumnResize).toHaveBeenCalledWith("fullName", expect.any(Number));

    // Double-clicking the handle resets the column to its configured width.
    (args.onColumnResize as ReturnType<typeof fn>).mockClear();
    await userEvent.dblClick(getResizeHandle(fullNameHeader));
    await waitFor(() => expect(getHeaderWidth(fullNameHeader)).toBe(250));
    await expect(args.onColumnResize).toHaveBeenCalledWith("fullName", null);
  }
}`,...(Je=(Ye=_.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Xe,Ze,Qe;z.parameters={...z.parameters,docs:{...(Xe=z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
    </div>,
  // \`defaultOrderBy\` seeds a descending sort on fullName. The header menu can
  // flip it to ascending and back to the default descending state.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await getColumnHeader(canvas, "fullName");
    await waitFor(() => expect(sortDirectionOf(canvas, "fullName")).toBe("desc"));

    // Switch to ascending.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort ascending");
    await waitFor(() => expect(sortDirectionOf(canvas, "fullName")).toBe("asc"));

    // Sorting descending again returns to the default sort state.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() => expect(sortDirectionOf(canvas, "fullName")).toBe("desc"));
  }
}`,...(Qe=(Ze=z.parameters)==null?void 0:Ze.docs)==null?void 0:Qe.source}}};var en,nn,tn;L.parameters={...L.parameters,docs:{...(en=L.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
    }],
    onColumnsPinnedChanged: fn()
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
    </div>,
  // fullName is pinned left and department pinned right by default. Unpinning a
  // column and re-pinning it through the header menu returns it to its pinned
  // state, firing onColumnsPinnedChanged each time.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const fullNameHeader = await getColumnHeader(canvas, "fullName");
    const departmentHeader = await getColumnHeader(canvas, "department");
    await expect(fullNameHeader).toHaveAttribute("data-pinned", "left");
    await expect(departmentHeader).toHaveAttribute("data-pinned", "right");

    // Unpin fullName via its header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Unpin Column");
    await waitFor(() => expect(fullNameHeader).toHaveAttribute("data-pinned", "false"));
    await expect(args.onColumnsPinnedChanged).toHaveBeenCalled();

    // Re-pin it to restore the default left-pinned state.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Pin column");
    await waitFor(() => expect(fullNameHeader).toHaveAttribute("data-pinned", "left"));
  }
}`,...(tn=(nn=L.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var an,on,rn;q.parameters={...q.parameters,docs:{...(an=q.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
    </div>,
  // The custom "Actions" column renders View/Edit buttons in every row.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for rows (and their action buttons) to render.
    await expect((await canvas.findAllByRole("button", {
      name: "View"
    })).length).toBeGreaterThan(0);
    await expect(canvas.getByText("Actions")).toBeInTheDocument();
    await expect(canvas.getAllByRole("button", {
      name: "Edit"
    }).length).toBeGreaterThan(0);
  }
}`,...(rn=(on=q.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var ln,sn,cn;$.parameters={...$.parameters,docs:{...(ln=$.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
            <strong>Current sort:</strong>{" "}
            {orderBy?.[0] ? \`\${orderBy[0].property} (\${orderBy[0].direction})\` : "None"}
          </div>
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable {...args} selectedRows={selectedRows} orderBy={orderBy} onRowClick={handleRowClick} onColumnHeaderClick={handleColumnHeaderClick} onRowSelectionChanged={handleRowSelectionChanged} onOrderByChanged={handleOrderByChanged} onColumnVisibilityChanged={handleColumnVisibilityChanged} onColumnsPinnedChanged={handleColumnsPinnedChanged} onColumnResize={handleColumnResize} />
        </div>
      </div>;
  },
  // Exercises every event listener exposed by ObjectTable and asserts each spy
  // fires: row click, focused-row change, selection, header click, sorting,
  // pinning, column visibility, and column resize.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Ahmed Williams");

    // onRowClick + onFocusedRowChanged: clicking a row body fires both.
    await userEvent.click(canvas.getByText("Ahmed Williams"));
    await waitFor(() => expect(args.onRowClick).toHaveBeenCalled());
    await expect(args.onFocusedRowChanged).toHaveBeenCalled();

    // onColumnHeaderClick: clicking the header label (not the menu chevron).
    const fullNameHeader = await getColumnHeader(canvas, "fullName");
    await userEvent.click(within(fullNameHeader).getByText("Name"));
    await waitFor(() => expect(args.onColumnHeaderClick).toHaveBeenCalledWith("fullName"));

    // onRowSelectionChanged: toggling a row checkbox (selectionMode "multiple").
    await userEvent.click((await canvas.findAllByRole("checkbox", {
      name: /select row/iu
    }))[0]);
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());

    // onOrderByChanged: sorting through the header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() => expect(args.onOrderByChanged).toHaveBeenCalled());

    // onColumnsPinnedChanged: pinning through the header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Pin column");
    await waitFor(() => expect(args.onColumnsPinnedChanged).toHaveBeenCalled());

    // onColumnResize: dragging the resize handle (re-resolve the header, since
    // the earlier sort/pin re-renders may have replaced the node).
    await dragResizeHandle(await getColumnHeader(canvas, "fullName"), 100);
    await waitFor(() => expect(args.onColumnResize).toHaveBeenCalled());

    // onColumnVisibilityChanged: removing a column via the config dialog.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Configure Columns");
    const removeButtons = await screen.findAllByRole("button", {
      name: /^Remove /u
    });
    await userEvent.click(removeButtons[0]);
    await userEvent.click(await screen.findByRole("button", {
      name: "Apply"
    }));
    await waitFor(() => expect(args.onColumnVisibilityChanged).toHaveBeenCalled());
  }
}`,...(cn=(sn=$.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var dn,un,mn;U.parameters={...U.parameters,docs:{...(dn=U.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
              {o.property} ({o.direction}){i < orderBy.length - 1 && ", "}
            </span>)}
        </div>
        <div className="object-table-container" style={{
        height: "600px"
      }}>
          <ObjectTable {...args} orderBy={orderBy} onOrderByChanged={handleOrderByChanged} />
        </div>
      </div>;
  },
  // Sorting is controlled: the header menu drives \`onOrderByChanged\`, and the
  // caller's banner reflects the new order.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Seeded controlled state shows fullName ascending.
    await getColumnHeader(canvas, "fullName");
    await expect(canvas.getByText("fullName (asc)")).toBeInTheDocument();

    // Sort descending through the header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() => expect(args.onOrderByChanged).toHaveBeenCalled());
    await waitFor(() => expect(canvas.getByText("fullName (desc)")).toBeInTheDocument());
  }
}`,...(mn=(un=U.parameters)==null?void 0:un.docs)==null?void 0:mn.source}}};var pn,yn,hn;K.parameters={...K.parameters,docs:{...(pn=K.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
  },
  // Selection is controlled: the caller's banner tracks the selected count and a
  // "Clear Selection" button resets it.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const rowCheckboxes = () => canvas.findAllByRole("checkbox", {
      name: /select row/iu
    });
    await rowCheckboxes();

    // Select two rows; the controlled banner counts them.
    await userEvent.click((await rowCheckboxes())[0]);
    await waitFor(() => expect(args.onRowSelectionChanged).toHaveBeenCalled());
    await waitFor(() => expect(canvas.getByText("1 employees")).toBeInTheDocument());
    await userEvent.click((await rowCheckboxes())[1]);
    await waitFor(() => expect(canvas.getByText("2 employees")).toBeInTheDocument());

    // Clearing resets the controlled selection back to zero.
    await userEvent.click(canvas.getByRole("button", {
      name: "Clear Selection"
    }));
    await waitFor(() => expect(canvas.getByText("0 employees")).toBeInTheDocument());
    await expect(canvas.queryByRole("button", {
      name: "Clear Selection"
    })).not.toBeInTheDocument();
  }
}`,...(hn=(yn=K.parameters)==null?void 0:yn.docs)==null?void 0:hn.source}}};var bn,gn,wn;G.parameters={...G.parameters,docs:{...(bn=G.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
            <strong>Focused employee:</strong>{" "}
            {focusedRow == null ? "none" : \`\${focusedRow.fullName} (#\${focusedRow.employeeNumber})\`}
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
  },
  // Focus is controlled: clicking a row focuses it (data-focused + banner),
  // clicking outside fires onFocusedRowChanged(null) so the caller clears it,
  // and the explicit "Clear focus" button also resets it.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Ahmed Williams");

    // Clicking a row focuses it (state update + re-render is async).
    await userEvent.click(canvas.getByText("Ahmed Williams"));
    await waitFor(() => expect(args.onFocusedRowChanged).toHaveBeenCalled());
    await waitFor(() => expect(canvas.getByText(/Ahmed Williams \\(#\\d+\\)/u)).toBeInTheDocument());
    await waitFor(() => expect(rowContaining(canvas.getByText("Ahmed Williams"))).toHaveAttribute("data-focused", "true"));

    // Clicking outside the table clears focus via onFocusedRowChanged(null).
    await userEvent.click(canvas.getByText(/Focused employee:/u));
    await waitFor(() => expect(rowContaining(canvas.getByText("Ahmed Williams"))).toHaveAttribute("data-focused", "false"));

    // Re-focus, then the explicit "Clear focus" button also resets it.
    await userEvent.click(canvas.getByText("Ahmed Williams"));
    await waitFor(() => expect(rowContaining(canvas.getByText("Ahmed Williams"))).toHaveAttribute("data-focused", "true"));
    await userEvent.click(canvas.getByRole("button", {
      name: "Clear focus"
    }));
    await waitFor(() => expect(rowContaining(canvas.getByText("Ahmed Williams"))).toHaveAttribute("data-focused", "false"));
  }
}`,...(wn=(gn=G.parameters)==null?void 0:gn.docs)==null?void 0:wn.source}}};var fn,Cn,vn;Y.parameters={...Y.parameters,docs:{...(fn=Y.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
    </div>,
  // With ordering, pinning, resizing and column config all disabled, the header
  // menu has no items, so its chevron trigger is never rendered.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Ahmed Williams");
    await expect(canvas.queryByRole("button", {
      name: /Open header menu/iu
    })).not.toBeInTheDocument();
  }
}`,...(vn=(Cn=Y.parameters)==null?void 0:Cn.docs)==null?void 0:vn.source}}};var xn,Tn,Bn;J.parameters={...J.parameters,docs:{...(xn=J.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
  render: args => <ObjectTableInBlueprintDrawer tableProps={args} />,
  // The drawer opens by default. The header menu must portal *above* the drawer
  // and stay interactive. The drawer renders to document.body, so query \`screen\`.
  play: async () => {
    await screen.findByText("Ahmed Williams");
    await openHeaderMenu(screen, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  }
}`,...(Bn=(Tn=J.parameters)==null?void 0:Tn.docs)==null?void 0:Bn.source}}};var jn,Sn,En;X.parameters={...X.parameters,docs:{...(jn=X.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
  render: args => <ObjectTableInBlueprintDialog tableProps={args} />,
  // The dialog opens by default; the header menu must portal above it.
  play: async () => {
    await screen.findByText("Ahmed Williams");
    await openHeaderMenu(screen, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  }
}`,...(En=(Sn=X.parameters)==null?void 0:Sn.docs)==null?void 0:En.source}}};var Dn,Rn,kn;Z.parameters={...Z.parameters,docs:{...(Dn=Z.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
  render: args => <ObjectTableInBaseUIDialog tableProps={args} />,
  // The Base UI dialog opens by default; the header menu must portal above it.
  play: async () => {
    await screen.findByText("Ahmed Williams");
    await openHeaderMenu(screen, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  }
}`,...(kn=(Rn=Z.parameters)==null?void 0:Rn.docs)==null?void 0:kn.source}}};var Nn,On,In;Q.parameters={...Q.parameters,docs:{...(Nn=Q.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
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
    </div>,
  // \`rowHeight\` is applied to each rendered row.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Ahmed Williams");
    await expect(rowContaining(canvas.getByText("Ahmed Williams"))).toHaveStyle({
      height: "56px"
    });
  }
}`,...(In=(On=Q.parameters)==null?void 0:On.docs)==null?void 0:In.source}}};var An,Pn,Fn;ee.parameters={...ee.parameters,docs:{...(An=ee.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
    </div>,
  // Custom \`renderHeader\` produces a link header, and a custom \`renderCell\`
  // produces Active/Inactive status tags. (The header link calls window.alert
  // on click, which would block the test runner, so we only assert it renders.)
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Ahmed Williams");
    await expect(canvas.getByRole("link", {
      name: "Employee Name"
    })).toBeInTheDocument();
    await expect(canvas.getByText("Employment Status")).toBeInTheDocument();
    await expect(canvas.getAllByText(/^(Active|Inactive)$/u).length).toBeGreaterThan(0);
  }
}`,...(Fn=(Pn=ee.parameters)==null?void 0:Pn.docs)==null?void 0:Fn.source}}};var Hn,Wn,Mn;ne.parameters={...ne.parameters,docs:{...(Hn=ne.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
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
            <strong>Last cell edit:</strong> Column "{lastEdit.columnId}"
            changed from "{String(lastEdit.oldValue)}" to "
            {String(lastEdit.newValue)}"
          </div>}
        <ObjectTable {...args} onCellValueChanged={handleCellValueChanged} />
      </div>;
  },
  // Manual edit mode: enter edit mode, then edit a text cell, a dropdown cell
  // and a date cell (each firing onCellValueChanged), and finally Cancel out.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Display mode first — the fullName cell shows plain text.
    await canvas.findByText("Ahmed Williams");

    // Enter edit mode; cells become editable inputs.
    await userEvent.click(canvas.getByRole("button", {
      name: "Edit Table"
    }));

    // First data row (header row is index 0). Cells follow column order.
    const firstRow = canvas.getAllByRole("row")[1];
    const cellsOf = () => within(firstRow).getAllByRole("cell");

    // Text edit (fullName, column 0). Typing then tabbing away commits the edit.
    const nameInput = within(cellsOf()[0]).getByRole("textbox");
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Ahmed Williamson");
    await userEvent.tab();
    await waitFor(() => expect(args.onCellValueChanged).toHaveBeenCalledWith(expect.objectContaining({
      columnId: "fullName",
      newValue: "Ahmed Williamson"
    })));

    // Dropdown edit (department, column 3) — visible once the row is focused.
    const departmentCombobox = await within(cellsOf()[3]).findByRole("combobox");
    await userEvent.click(departmentCombobox);
    await userEvent.click(await screen.findByRole("option", {
      name: "Engineering"
    }));
    await waitFor(() => expect(args.onCellValueChanged).toHaveBeenCalledWith(expect.objectContaining({
      columnId: "department",
      newValue: "Engineering"
    })));

    // Date edit (firstFullTimeStartDate, column 5) — focusing opens the
    // calendar, then "Today" commits a new value.
    const dateInput = within(cellsOf()[5]).getByRole("combobox");
    await userEvent.click(dateInput);
    await userEvent.click(await screen.findByRole("button", {
      name: "Today"
    }));
    await waitFor(() => expect(args.onCellValueChanged).toHaveBeenCalledWith(expect.objectContaining({
      columnId: "firstFullTimeStartDate"
    })));

    // Cancel exits edit mode; the "Edit Table" button returns.
    await userEvent.click(canvas.getByRole("button", {
      name: "Cancel"
    }));
    await expect(await canvas.findByRole("button", {
      name: "Edit Table"
    })).toBeInTheDocument();
  }
}`,...(Mn=(Wn=ne.parameters)==null?void 0:Wn.docs)==null?void 0:Mn.source}}};var Vn,_n,zn;te.parameters={...te.parameters,docs:{...(Vn=te.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
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
    </div>,
  // Editing enables "Submit Edits"; submitting calls onSubmitEdits and, on
  // success, clears edits and exits edit mode (the async mock resolves true).
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Ahmed Williams");
    await userEvent.click(canvas.getByRole("button", {
      name: "Edit Table"
    }));
    const firstRow = canvas.getAllByRole("row")[1];
    const firstCell = within(firstRow).getAllByRole("cell")[0];
    const nameInput = within(firstCell).getByRole("textbox");
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Ahmed Williamson");
    await userEvent.tab();

    // The Submit Edits button enables once there is a pending edit.
    const submit = canvas.getByRole("button", {
      name: "Submit Edits"
    });
    await waitFor(() => expect(submit).toBeEnabled());
    await userEvent.click(submit);
    await waitFor(() => expect(args.onSubmitEdits).toHaveBeenCalled());

    // After the async submit resolves successfully, edit mode exits.
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Edit Table"
    })).toBeInTheDocument(), {
      timeout: 5000
    });
  }
}`,...(zn=(_n=te.parameters)==null?void 0:_n.docs)==null?void 0:zn.source}}};var Ln,qn,$n;ae.parameters={...ae.parameters,docs:{...(Ln=ae.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true,
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
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
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
      validateEdit: async (value: unknown) => {
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/u;
        return emailRegex.test(String(value ?? "")) ? undefined : "Please enter a valid email address";
      }
    }, {
      locator: {
        type: "property",
        id: "employeeNumber"
      },
      editable: true,
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
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
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
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
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
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
    onSubmitEdits: fn(
    // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
    async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
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
    </div>,
  // editMode "always": entering an invalid value surfaces a validation error and
  // disables Submit Edits; correcting the value clears the error and re-enables.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Cells are editable immediately; fullName is pre-filled with the value.
    const nameInput = await canvas.findByDisplayValue("Ahmed Williams");

    // Too-short name fails validation (min 2 chars).
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "a");
    await userEvent.tab();
    await waitFor(() => expect(canvas.getByText("Validation error")).toBeInTheDocument());
    await expect(canvas.getByRole("button", {
      name: "Submit Edits"
    })).toBeDisabled();

    // Correcting the value clears the error and re-enables Submit Edits.
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Valid Name");
    await userEvent.tab();
    await waitFor(() => expect(canvas.queryByText("Validation error")).not.toBeInTheDocument());
    await expect(canvas.getByRole("button", {
      name: "Submit Edits"
    })).toBeEnabled();
  }
}`,...($n=(qn=ae.parameters)==null?void 0:qn.docs)==null?void 0:$n.source}}};var Un,Kn,Gn;oe.parameters={...oe.parameters,docs:{...(Un=oe.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
    </div>,
  // Per-row config: jobTitle is only editable for "Senior Product Manager" rows,
  // and the department dropdown offers a restricted item list for Operations
  // rows (2 options) versus other rows (4, including "Finance").
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Ahmed Williams");

    // jobTitle (column 1) is editable only for the Senior Product Manager.
    const margaretCells = within(rowContaining(canvas.getByText("Margaret Jackson"))).getAllByRole("cell");
    await expect(margaretCells[1]).toHaveAttribute("data-editable", "true");
    const ahmedCells = within(rowContaining(canvas.getByText("Ahmed Williams"))).getAllByRole("cell");
    await expect(ahmedCells[1]).not.toHaveAttribute("data-editable");

    // Operations row (Yuki Torres): department dropdown shows only 2 options.
    const yukiRow = rowContaining(canvas.getByText("Yuki Torres"));
    await userEvent.click(canvas.getByText("Yuki Torres"));
    fireEvent.click(await within(yukiRow).findByRole("combobox"));
    await expect(await screen.findAllByRole("option")).toHaveLength(2);
    await expect(screen.queryByRole("option", {
      name: "Finance"
    })).not.toBeInTheDocument();
    await userEvent.keyboard("{Escape}");

    // Non-Operations row (Ahmed Williams): the list includes "Finance".
    const ahmedRow = rowContaining(canvas.getByText("Ahmed Williams"));
    await userEvent.click(canvas.getByText("Ahmed Williams"));
    fireEvent.click(await within(ahmedRow).findByRole("combobox"));
    await expect(await screen.findByRole("option", {
      name: "Finance"
    })).toBeInTheDocument();
  }
}`,...(Gn=(Kn=oe.parameters)==null?void 0:Kn.docs)==null?void 0:Gn.source}}};var Yn,Jn,Xn;ie.parameters={...ie.parameters,docs:{...(Yn=ie.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
        story: "Demonstrates using \`getRowAttributes\` to set data attributes on rows and a \`className\` on the table to scope CSS overrides via the data attribute selector. " + 'New York employees get a light blue background through the \`[data-highlight-row="true"]\` CSS selector scoped under the table\\'s className.'
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
          <strong>Row attributes + className for CSS override:</strong> New York
          employees have a light blue background via{" "}
          <code>tr[data-highlight-row="true"]</code> scoped under{" "}
          <code>.customTableStyling</code>.
        </div>
        <ObjectTable {...args} getRowAttributes={getRowAttributes} className="customTableStyling" />
      </div>;
  },
  // \`getRowAttributes\` sets data-highlight-row="true" only on New York rows.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Ahmed Williams");

    // New York employees carry the highlight attribute...
    await expect(rowContaining(canvas.getByText("Ahmed Williams"))).toHaveAttribute("data-highlight-row", "true");

    // ...while non–New York employees (Charlotte Weber is in Tokyo) do not.
    await expect(rowContaining(canvas.getByText("Charlotte Weber"))).not.toHaveAttribute("data-highlight-row");
  }
}`,...(Xn=(Jn=ie.parameters)==null?void 0:Jn.docs)==null?void 0:Xn.source}}};var Zn,Qn,et;re.parameters={...re.parameters,docs:{...(Zn=re.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
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
  },
  // The object set matches no objects, so the custom empty state renders.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText("No saved views found.")).toBeInTheDocument();
    await expect(canvas.queryByText("Ahmed Williams")).not.toBeInTheDocument();
  }
}`,...(et=(Qn=re.parameters)==null?void 0:Qn.docs)==null?void 0:et.source}}};const Ka=["Default","WithObjectSet","WithInterfaceType","WithDerivedPropertyOrderingAndFilter","WithFunctionColumn","SingleSelection","MultipleSelection","WithContextMenu","CustomColumnWidths","WithDefaultSorting","WithDefaultColumnPinning","WithCustomColumn","EventListeners","ControlledSorting","ControlledSelection","ControlledFocusedRow","DisableAllHeaderMenuFeatures","HeaderMenuInsideBlueprintDrawer","HeaderMenuInsideBlueprintDialog","HeaderMenuInsideBaseUIDialog","CustomRowHeight","WithCustomRenderers","EditableTable","WithSubmitEditsButton","EditableWithValidation","PerRowEditableAndFieldConfig","RowAttributesForStyling","CustomEmptyState"];export{G as ControlledFocusedRow,K as ControlledSelection,U as ControlledSorting,_ as CustomColumnWidths,re as CustomEmptyState,Q as CustomRowHeight,I as Default,Y as DisableAllHeaderMenuFeatures,ne as EditableTable,ae as EditableWithValidation,$ as EventListeners,Z as HeaderMenuInsideBaseUIDialog,X as HeaderMenuInsideBlueprintDialog,J as HeaderMenuInsideBlueprintDrawer,M as MultipleSelection,oe as PerRowEditableAndFieldConfig,ie as RowAttributesForStyling,W as SingleSelection,V as WithContextMenu,q as WithCustomColumn,ee as WithCustomRenderers,L as WithDefaultColumnPinning,z as WithDefaultSorting,F as WithDerivedPropertyOrderingAndFilter,H as WithFunctionColumn,P as WithInterfaceType,A as WithObjectSet,te as WithSubmitEditsButton,Ka as __namedExportsOrder,Ua as default};
