var fe=Object.defineProperty;var ge=(e,t,o)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var D=(e,t,o)=>ge(e,typeof t!="symbol"?t+"":t,o);import{r as d,j as n,f as we}from"./iframe-BrNUdAJB.js";import{O as y}from"./object-table-CRZl0us5.js";import{E as m}from"./Employee-BAk2o20h.js";import{D as Ce}from"./Dialog-DK-Lx55u.js";import{c as P}from"./index-ClxT7YU8.js";import{i as K,a as Q,b as Te,p as xe,O as je,c as Be,d as De,e as Se,f as ve,B as A,g as Re,h as Ne,I as ee,H as te,N as Oe,j as Ee,k as ke,l as Ie,m as Y,D as Pe}from"./dialog-Cmg6jMYt.js";import{S as Ae}from"./small-cross-BFf1jECu.js";import{I as J}from"./svgIconContainer-QCCLAHhT.js";import{u as oe}from"./useOsdkClient-BEcqcP7n.js";const w={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT:"right",TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};function Fe(e){return e===w.TOP||e===w.TOP_LEFT||e===w.TOP_RIGHT||e===w.BOTTOM||e===w.BOTTOM_LEFT||e===w.BOTTOM_RIGHT}function X(e){return e===w.TOP||e===w.TOP_LEFT||e===w.TOP_RIGHT?w.TOP:e===w.BOTTOM||e===w.BOTTOM_LEFT||e===w.BOTTOM_RIGHT?w.BOTTOM:e===w.LEFT||e===w.LEFT_TOP||e===w.LEFT_BOTTOM?w.LEFT:w.RIGHT}class _e extends d.PureComponent{constructor(o){super(o);D(this,"componentWillUpdate");D(this,"componentWillReceiveProps");D(this,"componentWillMount");D(this,"getDerivedStateFromProps");D(this,"displayName");D(this,"timeoutIds",[]);D(this,"requestIds",[]);D(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const o of this.timeoutIds)window.clearTimeout(o);this.timeoutIds=[]}});D(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const o of this.requestIds)window.cancelAnimationFrame(o);this.requestIds=[]}});K("production")||this.validateProps(this.props)}componentDidUpdate(o,i,r){K("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(o){const i=window.requestAnimationFrame(o);return this.requestIds.push(i),()=>window.cancelAnimationFrame(i)}setTimeout(o,i){const r=window.setTimeout(o,i);return this.timeoutIds.push(r),()=>window.clearTimeout(r)}validateProps(o){}}var Z;(function(e){e.SMALL="360px",e.STANDARD="50%",e.LARGE="90%"})(Z||(Z={}));class H extends _e{render(){const{hasBackdrop:t,size:o,style:i,position:r}=this.props,{className:s,children:b,...j}=this.props,N=X(r),B=P(Te,{[xe(N)??""]:!0},s),_=o==null?i:{...i,[Fe(N)?"height":"width"]:o};return n.jsx(je,{...j,className:P({[Be]:t}),children:n.jsxs("div",{className:B,style:_,children:[this.maybeRenderHeader(),b]})})}validateProps(t){t.title==null&&(t.icon!=null&&console.warn(De),t.isCloseButtonShown!=null&&console.warn(Se)),t.position!=null&&t.position!==X(t.position)&&console.warn(ve)}maybeRenderCloseButton(){return this.props.isCloseButtonShown!==!1?n.jsx(A,{"aria-label":"Close",className:Re,icon:n.jsx(Ae,{size:J.LARGE}),onClick:this.props.onClose,variant:"minimal"}):null}maybeRenderHeader(){const{icon:t,title:o}=this.props;return o==null?null:n.jsxs("div",{className:Ne,children:[n.jsx(ee,{icon:t,size:J.LARGE}),n.jsx(te,{children:o}),this.maybeRenderCloseButton()]})}}D(H,"displayName",`${Q}.Drawer`),D(H,"defaultProps",{canOutsideClickClose:!0,isOpen:!1,position:"right",style:{}});var W;(function(e){e[e.STANDARD=48]="STANDARD",e[e.SMALL=32]="SMALL",e[e.EXTRA_SMALL=20]="EXTRA_SMALL"})(W||(W={}));const ne=e=>{const{action:t,children:o,className:i,description:r,icon:s,iconMuted:b=!0,iconSize:j=W.STANDARD,layout:N="vertical",title:B}=e;return n.jsxs("div",{className:P(Y,`${Y}-${N}`,i),children:[s==null?void 0:n.jsx("div",{className:Oe,style:{fontSize:`${j}px`,lineHeight:`${j}px`},children:n.jsx(ee,{className:P({[Ee]:b}),icon:s,size:j,"aria-hidden":!0,tabIndex:-1})}),B==null&&r==null?void 0:n.jsxs("div",{className:ke,children:[B&&n.jsx(te,{children:B}),r&&Ie(r,"div")]}),t,o]})};ne.displayName=`${Q}.NonIdealState`;const Me={type:"interface",apiName:"Worker"},He="_reopenButton_lf80i_17",We="_drawerBody_lf80i_21",Ve="_blueprintDialog_lf80i_28",Le="_blueprintDialogContent_lf80i_32",ze="_baseUiDialog_lf80i_39",qe="_shell_lf80i_44",$e="_instructions_lf80i_52",Ue="_tableFrame_lf80i_57",R={reopenButton:He,drawerBody:We,blueprintDialog:Ve,blueprintDialogContent:Le,baseUiDialog:ze,shell:qe,instructions:$e,tableFrame:Ue},U=d.memo(function({tableProps:t}){return n.jsxs("div",{className:R.shell,children:[n.jsx("div",{className:R.instructions,children:"Click a column header chevron. The header menu should open above the overlay and stay interactive."}),n.jsx("div",{className:R.tableFrame,children:n.jsx(y,{...t})})]})}),V=d.memo(function({tableProps:t}){const[o,i]=d.useState(!0),r=d.useCallback(()=>{i(!0)},[]),s=d.useCallback(()=>{i(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(A,{className:R.reopenButton,onClick:r,text:"Open drawer"}),n.jsx(H,{isOpen:o,onClose:s,size:"90%",title:"ObjectTable in Blueprint Drawer",children:n.jsx("div",{className:R.drawerBody,children:n.jsx(U,{tableProps:t})})})]})}),L=d.memo(function({tableProps:t}){const[o,i]=d.useState(!0),r=d.useCallback(()=>{i(!0)},[]),s=d.useCallback(()=>{i(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(A,{className:R.reopenButton,onClick:r,text:"Open Blueprint dialog"}),n.jsx(Pe,{className:R.blueprintDialog,isOpen:o,onClose:s,title:"ObjectTable in Blueprint Dialog",children:n.jsx("div",{className:R.blueprintDialogContent,children:n.jsx(U,{tableProps:t})})})]})}),z=d.memo(function({tableProps:t}){const[o,i]=d.useState(!0),r=d.useCallback(()=>{i(!0)},[]),s=d.useCallback(b=>{i(b)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(A,{className:R.reopenButton,onClick:r,text:"Open Base UI dialog"}),n.jsx(Ce,{className:R.baseUiDialog,isOpen:o,onOpenChange:s,title:"ObjectTable in Base UI Dialog",children:n.jsx(U,{tableProps:t})})]})});try{V.displayName="ObjectTableInBlueprintDrawer",V.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDrawer",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{L.displayName="ObjectTableInBlueprintDialog",L.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{z.displayName="ObjectTableInBaseUIDialog",z.__docgenInfo={description:"",displayName:"ObjectTableInBaseUIDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}const{expect:a,fireEvent:q,fn:C,screen:h,userEvent:l,waitFor:c,within:u}=__STORYBOOK_MODULE_TEST__,Ge={title:"Components/ObjectTable/Features",component:y,tags:["beta"],parameters:{msw:{handlers:[...we.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object or interface type of the object",control:!1},columnDefinitions:{description:"Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",control:!1},filter:{description:"The current where clause to filter the objects in the table. If provided, the filter is controlled.",control:!1},enableOrdering:{description:"Whether the table is sortable by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnPinning:{description:"Whether columns can be pinned by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnResizing:{description:"Whether columns can be resized by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnConfig:{description:"Whether the column configuration dialog for column visibility and ordering is available to the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},editMode:{description:"Controls the edit mode behavior of the table. 'always': Table is always in edit mode. 'manual': User can toggle edit mode on/off.",control:"select",options:["manual","always"],defaultValue:"manual",table:{defaultValue:{summary:"manual"}}},showEditFooter:{description:"Whether to render the bottom edit footer. Defaults to `true`. Ignored when `editMode` is manual or `onSubmitEdits` is provided — the footer is always shown in that case.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},defaultOrderBy:{description:"The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:!1},orderBy:{description:"The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:!1},onOrderByChanged:{description:"Called when the order by clause is changed. Required when sorting is controlled.",control:!1,table:{category:"Events"}},onColumnVisibilityChanged:{description:"Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",control:!1,table:{category:"Events"}},onColumnsPinnedChanged:{description:"Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",control:!1,table:{category:"Events"}},onColumnResize:{description:"Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",control:!1,table:{category:"Events"}},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},onColumnHeaderClick:{description:"Called when a column header is clicked. Parameters: columnId - The ID of the clicked column.",control:!1,table:{category:"Events"}},selectionMode:{description:"Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",control:{type:"select"},options:["single","multiple","none"],defaultValue:"none",table:{defaultValue:{summary:"none"}}},selectedRows:{description:"The currently selected rows in the table. If provided, the row selection is controlled.",control:!1},onRowSelectionChanged:{description:"Called when the row selection changes, with a RowSelectionChange payload (selectedRows, isSelectAll, derived objectSet).",control:!1,table:{category:"Events"}},focusedRow:{description:"The primary key of the row to render as visually focused. When provided, focus is controlled.",control:!1},onFocusedRowChanged:{description:"Called when the focused row changes — fires in both controlled and uncontrolled modes so callers can observe focus without taking it over.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},rowHeight:{description:"The height of each row in pixels.",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},className:{description:"Additional CSS class name for the table",control:"text"}}},lt=Ge,T=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobProfile"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"businessTitle"}},{locator:{type:"property",id:"businessArea"}},{locator:{type:"property",id:"team"}},{locator:{type:"property",id:"workerType"}},{locator:{type:"property",id:"locationName"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"property",id:"locationCountry"}},{locator:{type:"property",id:"locationRegion"}},{locator:{type:"property",id:"locationType"}},{locator:{type:"property",id:"firstFullTimeStartDate"}},{locator:{type:"property",id:"firstInternStartDate"}},{locator:{type:"property",id:"employeeNumber"}},{locator:{type:"property",id:"adUsername"}},{locator:{type:"property",id:"primaryOfficeId"}},{locator:{type:"property",id:"preferredNameFirst"}},{locator:{type:"property",id:"preferredNameLast"}},{locator:{type:"property",id:"leadEmployeeNumber"}},{locator:{type:"property",id:"mentorEmployeeNumber"}}],ae=[{locator:{type:"property",id:"fullName"},editable:!0},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})}},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstInternStartDate"},editable:!0,renderCell:e=>n.jsx("div",{children:e.firstInternStartDate?new Date(e.firstInternStartDate).toISOString():"No value"})},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})}},{locator:{type:"property",id:"isRemote"},renderCell:e=>e.isRemote==null?"No Value":e.isRemote?"Yes":"No",editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:[!0,!1],itemToStringLabel:e=>e==null?"No Value":e?"Yes":"No"})}}],ie={type:"query",apiName:"getEmployeeSeniority",version:"1.0.0",osdkMetadata:void 0},le=[{locator:{type:"property",id:"fullName"}},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:e=>"managerName"in e?n.jsx("span",{children:e.managerName}):n.jsx("span",{style:{color:"#999"},children:"No Manager"})},{locator:{type:"function",id:"seniority",queryDefinition:ie,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}],p="Ahmed Williams",G=e=>`Open header menu for column with id=${e}`;async function O(e,t){const i=(await e.findByRole("button",{name:G(t)})).closest("th");if(i==null)throw new Error(`Could not find <th> for column "${t}"`);return i}async function x(e,t){await l.click(await e.findByRole("button",{name:G(t)}))}async function v(e){await l.click(await h.findByRole("menuitem",{name:e}))}function Ke(e){return e.querySelector('[data-icon="sort-alphabetical-desc"]')!=null?"desc":e.querySelector('[data-icon="sort-alphabetical"]')!=null?"asc":"none"}function k(e,t){const o=e.queryByRole("button",{name:G(t)}),i=o==null?void 0:o.closest("th");return i!=null?Ke(i):"none"}function re(e){const t=e.querySelectorAll(":scope > div"),o=t[t.length-1];if(!(o instanceof HTMLElement))throw new Error("Could not find column resize handle");return o}async function se(e,t){const o=re(e),i=o.getBoundingClientRect(),r=i.left+i.width/2,s=i.top+i.height/2;await l.pointer([{keys:"[MouseLeft>]",target:o,coords:{x:r,y:s}},{coords:{x:r+t,y:s}},{keys:"[/MouseLeft]",coords:{x:r+t,y:s}}])}function M(e){return Number.parseFloat(e.style.width)}function S(e){const t=e.closest("tr");if(t==null)throw new Error("Cell is not inside a row");return t}const F=e=>()=>e.findAllByRole("checkbox",{name:/Select row/u}),Ye=e=>e.findByRole("checkbox",{name:/Select all rows/u}),$=e=>e.findByRole("checkbox",{name:/Deselect all rows/u}),rt={args:{objectType:m,columnDefinitions:T},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e})=>{const t=u(e);await t.findByText(p),await x(t,"fullName"),await a(await h.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await a(h.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await a(h.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await a(h.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await l.keyboard("{Escape}")}},st={args:{objectType:m,columnDefinitions:T},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:e=>{const o=oe()(m).where({jobProfile:"Marketing Manager"});return n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e,objectType:m,objectSet:o})})},play:async({canvasElement:e})=>{const t=u(e);await t.findAllByText("Marketing Manager"),await a(t.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await a(t.queryByText("Content Manager")).not.toBeInTheDocument()}},ct={args:{objectType:Me},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e})=>{const t=u(e);await t.findByText(p),await a(t.getByText("Name")).toBeInTheDocument(),await a(t.getByText("Email")).toBeInTheDocument()}},dt={render:()=>{const e=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"rdp",id:"managerName",creator:o=>o.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:o=>"managerName"in o?n.jsx("span",{children:o.managerName}):n.jsx("span",{style:{color:"#999"},children:"No Manager"})}],t={managerName:{$in:[p,"Fatima Zhang"]}};return n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{objectType:m,columnDefinitions:e,defaultOrderBy:[{property:"managerName",direction:"asc"}],filter:t})})},play:async({canvasElement:e})=>{const t=u(e);await t.findByText("Manager"),await c(()=>a(t.getAllByRole("row").length).toBeGreaterThan(1)),await O(t,"managerName"),await c(()=>a(k(t,"managerName")).toBe("asc")),await x(t,"managerName"),await v("Sort descending"),await c(()=>a(k(t,"managerName")).toBe("desc")),await x(t,"managerName"),await v("Sort ascending"),await c(()=>a(k(t,"managerName")).toBe("asc"))},parameters:{docs:{description:{story:"Combines derived property columns with `defaultOrderBy` and `filter`. Demonstrates sorting by an RDP (managerName) and filtering the derived property."},source:{code:`type RDPs = { managerName: "string" };

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
  managerName: { $in: [TARGET_DATA, "Fatima Zhang"] },
};

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  defaultOrderBy={[{ property: "managerName", direction: "asc" }]}
  filter={filter}
/>`}}}},ut={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"function",id:"seniority",queryDefinition:ie,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}]},parameters:{docs:{description:{story:"Use function-backed columns to display computed values from a Foundry query. The 'Seniority' column calls `getEmployeeSeniority` with the current object set and maps each result back to the corresponding row."},source:{code:`import { getEmployeeSeniority } from "./ontology/queries";

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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e})=>{const t=u(e);await t.findByText("Seniority"),await c(()=>a(t.getAllByText(/^(Senior|Mid|Junior|Unknown)$/u).length).toBeGreaterThan(0))}},pt={args:{objectType:m,columnDefinitions:T,selectionMode:"single",onRowSelectionChanged:C()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e,args:t})=>{const o=u(e),i=F(o);await i(),await a(o.queryByRole("checkbox",{name:/Select all rows/u})).not.toBeInTheDocument(),await l.click((await i())[0]),await c(()=>a(t.onRowSelectionChanged).toHaveBeenCalled()),await a((await i())[0]).toBeChecked(),await l.click((await i())[1]),await a((await i())[1]).toBeChecked(),await a((await i())[0]).not.toBeChecked(),await l.click((await i())[1]),await a((await i())[1]).not.toBeChecked()}},mt={args:{objectType:m,columnDefinitions:T,selectionMode:"multiple",onRowSelectionChanged:C()},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e,args:t})=>{const o=u(e),i=F(o),[r,s]=await i();await l.click(r),await a(r).toBeChecked(),await c(()=>a(t.onRowSelectionChanged).toHaveBeenCalled()),await l.click(s),await a(r).toBeChecked(),await a(s).toBeChecked(),await l.click(await $(o));for(const b of await i())await a(b).not.toBeChecked();await l.click(await Ye(o));for(const b of await i())await a(b).toBeChecked();await l.click(await $(o));for(const b of await i())await a(b).not.toBeChecked()}},yt={args:{objectType:m,columnDefinitions:T,renderCellContextMenu:(e,t)=>n.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),n.jsx("div",{children:t?String(t):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
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
/>`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),n.jsx(y,{...e})]}),play:async({canvasElement:e})=>{const t=u(e);await t.findByText(p),q.contextMenu(t.getByText(p)),await a(await h.findByText("Cell Value:")).toBeInTheDocument(),await l.click(t.getByText("Right click on any cell")),await c(()=>a(h.queryByText("Cell Value:")).not.toBeInTheDocument())}},bt={args:{objectType:m,columnDefinitions:le.map((e,t)=>({...e,width:t===0?250:t===1?300:150})),onColumnResize:C()},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  { locator: { type: "property", id: "department" }, width: 300 },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e,args:t})=>{const o=u(e),i=await O(o,"fullName");await a(M(i)).toBe(250),await se(i,120),await c(()=>a(M(i)).toBeGreaterThan(250)),await a(t.onColumnResize).toHaveBeenCalledWith("fullName",a.any(Number)),t.onColumnResize.mockClear(),await l.dblClick(re(i)),await c(()=>a(M(i)).toBe(250)),await a(t.onColumnResize).toHaveBeenCalledWith("fullName",null)}},ht={args:{objectType:m,columnDefinitions:T,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e})=>{const t=u(e);await O(t,"fullName"),await c(()=>a(k(t,"fullName")).toBe("desc")),await x(t,"fullName"),await v("Sort ascending"),await c(()=>a(k(t,"fullName")).toBe("asc")),await x(t,"fullName"),await v("Sort descending"),await c(()=>a(k(t,"fullName")).toBe("desc"))}},ft={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}],onColumnsPinnedChanged:C()},parameters:{docs:{source:{code:`const columnDefinitions = [
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
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e,args:t})=>{const o=u(e),i=await O(o,"fullName"),r=await O(o,"department");await a(i).toHaveAttribute("data-pinned","left"),await a(r).toHaveAttribute("data-pinned","right"),await x(o,"fullName"),await v("Unpin Column"),await c(()=>a(i).toHaveAttribute("data-pinned","false")),await a(t.onColumnsPinnedChanged).toHaveBeenCalled(),await x(o,"fullName"),await v("Pin column"),await c(()=>a(i).toHaveAttribute("data-pinned","left"))}},gt={parameters:{docs:{source:{code:`const customColumnDefinition = [
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
    `}}},args:{objectType:m,columnDefinitions:[...le.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),n.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e})=>{const t=u(e);await a((await t.findAllByRole("button",{name:"View"})).length).toBeGreaterThan(0),await a(t.getByText("Actions")).toBeInTheDocument(),await a(t.getAllByRole("button",{name:"Edit"}).length).toBeGreaterThan(0)}},wt={args:{objectType:m,columnDefinitions:T,selectionMode:"multiple",selectedRows:[],orderBy:[{property:"fullName",direction:"asc"}],onRowClick:C(),onColumnHeaderClick:C(),onRowSelectionChanged:C(),onOrderByChanged:C(),onColumnVisibilityChanged:C(),onColumnsPinnedChanged:C(),onColumnResize:C(),onFocusedRowChanged:C()},parameters:{docs:{source:{code:`<ObjectTable
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
/>`}}},render:e=>{const[t,o]=d.useState(null),[i,r]=d.useState(null),[s,b]=d.useState([]),[j,N]=d.useState(!1),[B,_]=d.useState([{property:"fullName",direction:"asc"}]),[ce,E]=d.useState(""),de=d.useCallback(f=>{var g;(g=e.onRowClick)==null||g.call(e,f),o(f),E("onRowClick")},[e]),ue=d.useCallback(f=>{var g;(g=e.onColumnHeaderClick)==null||g.call(e,f),r(f),E("onColumnHeaderClick")},[e]),pe=d.useCallback(f=>{var g;(g=e.onRowSelectionChanged)==null||g.call(e,f),b(f.selectedRows.map(I=>I.$primaryKey)),N(f.isSelectAll),E("onRowSelectionChanged")},[e]),me=d.useCallback(f=>{var g;(g=e.onOrderByChanged)==null||g.call(e,f),_(f),E("onOrderByChanged")},[e]),ye=d.useCallback(f=>{var g;(g=e.onColumnVisibilityChanged)==null||g.call(e,f),E("onColumnVisibilityChanged")},[e]),be=d.useCallback(f=>{var g;(g=e.onColumnsPinnedChanged)==null||g.call(e,f),E("onColumnsPinnedChanged")},[e]),he=d.useCallback((f,g)=>{var I;(I=e.onColumnResize)==null||I.call(e,f,g),E(`onColumnResize (${f})`)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe"},children:[n.jsx("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:"Event Monitor:"}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Last event:"})," ",ce||"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Row clicked:"})," ",t?n.jsx("code",{children:t.fullName}):"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Column clicked:"})," ",i?n.jsx("code",{children:i}):"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Selected rows:"})," ",j?"All employees":`${s.length} employees`]}),n.jsxs("div",{style:{fontSize:"12px"},children:[n.jsx("strong",{children:"Current sort:"})," ",B!=null&&B[0]?`${B[0].property} (${B[0].direction})`:"None"]})]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e,selectedRows:s,orderBy:B,onRowClick:de,onColumnHeaderClick:ue,onRowSelectionChanged:pe,onOrderByChanged:me,onColumnVisibilityChanged:ye,onColumnsPinnedChanged:be,onColumnResize:he})})]})},play:async({canvasElement:e,args:t})=>{const o=u(e),i=F(o);await o.findByText(p),await l.click(o.getByText(p)),await c(()=>a(t.onRowClick).toHaveBeenCalled()),await a(t.onFocusedRowChanged).toHaveBeenCalled();const r=await O(o,"fullName");await l.click(u(r).getByText("Name")),await c(()=>a(t.onColumnHeaderClick).toHaveBeenCalledWith("fullName")),await l.click((await i())[0]),await c(()=>a(t.onRowSelectionChanged).toHaveBeenCalled()),await x(o,"fullName"),await v("Sort descending"),await c(()=>a(t.onOrderByChanged).toHaveBeenCalled()),await x(o,"fullName"),await v("Pin column"),await c(()=>a(t.onColumnsPinnedChanged).toHaveBeenCalled()),await se(await O(o,"fullName"),100),await c(()=>a(t.onColumnResize).toHaveBeenCalled()),await x(o,"fullName"),await v("Configure Columns");const s=await h.findAllByRole("button",{name:/^Remove /u});await l.click(s[0]),await l.click(await h.findByRole("button",{name:"Apply"})),await c(()=>a(t.onColumnVisibilityChanged).toHaveBeenCalled()),await l.click(await $(o)),await c(async()=>{for(const b of await i())a(b).not.toBeChecked()})}},Ct={args:{objectType:m,columnDefinitions:T,orderBy:[{property:"fullName",direction:"asc"}],onOrderByChanged:C()},parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:e=>{const[t,o]=d.useState(e.orderBy??[{property:"fullName",direction:"asc"}]),i=d.useCallback(r=>{var s;(s=e.onOrderByChanged)==null||s.call(e,r),o(r)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("strong",{children:"Current Sort:"})," ",t.map((r,s)=>n.jsxs("span",{children:[r.property," (",r.direction,")",s<t.length-1&&", "]},s))]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e,orderBy:t,onOrderByChanged:i})})]})},play:async({canvasElement:e,args:t})=>{const o=u(e);await O(o,"fullName"),await a(o.getByText("fullName (asc)")).toBeInTheDocument(),await x(o,"fullName"),await v("Sort descending"),await c(()=>a(t.onOrderByChanged).toHaveBeenCalled()),await c(()=>a(o.getByText("fullName (desc)")).toBeInTheDocument()),await x(o,"fullName"),await v("Sort ascending"),await c(()=>a(o.getByText("fullName (asc)")).toBeInTheDocument())}},Tt={args:{objectType:m,columnDefinitions:T,selectionMode:"multiple",selectedRows:[],onRowSelectionChanged:C()},parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);
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
);`}}},render:e=>{const[t,o]=d.useState(e.selectedRows??[]),[i,r]=d.useState(!1),s=d.useCallback(b=>{var j;(j=e.onRowSelectionChanged)==null||j.call(e,b),o(b.selectedRows.map(N=>N.$primaryKey)),r(b.isSelectAll)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("strong",{children:"Selected:"})," ",i?"All Employees":`${t.length} employees`,t.length>0&&n.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{o([]),r(!1)},children:"Clear Selection"})]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e,selectedRows:t,isAllSelected:i,onRowSelectionChanged:s})})]})},play:async({canvasElement:e,args:t})=>{const o=u(e),i=F(o);await i(),await l.click((await i())[0]),await c(()=>a(t.onRowSelectionChanged).toHaveBeenCalled()),await c(()=>a(o.getByText("1 employees")).toBeInTheDocument()),await l.click((await i())[1]),await c(()=>a(o.getByText("2 employees")).toBeInTheDocument()),await l.click(o.getByRole("button",{name:"Clear Selection"})),await c(()=>a(o.getByText("0 employees")).toBeInTheDocument()),await a(o.queryByRole("button",{name:"Clear Selection"})).not.toBeInTheDocument()}},xt={args:{objectType:m,columnDefinitions:T,onFocusedRowChanged:C()},parameters:{docs:{description:{story:"Demonstrates the `focusedRow` / `onFocusedRowChanged` API. Click any row to focus it; the focused employee is shown in the banner above and persists until cleared by the caller. Because focus is controlled, outside clicks no longer auto-clear — the caller owns clearing."},source:{code:`const [focusedRow, setFocusedRow] = useState<Osdk.Instance<Employee> | null>(null);

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
);`}}},render:e=>{const[t,o]=d.useState(null),i=d.useCallback(r=>{var s;(s=e.onFocusedRowChanged)==null||s.call(e,r),o(r)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe",display:"flex",alignItems:"center",gap:"12px"},children:[n.jsxs("span",{children:[n.jsx("strong",{children:"Focused employee:"})," ",t==null?"none":`${t.fullName} (#${t.employeeNumber})`]}),n.jsx("button",{type:"button",style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:t==null?"not-allowed":"pointer"},onClick:()=>o(null),disabled:t==null,children:"Clear focus"})]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e,focusedRow:(t==null?void 0:t.$primaryKey)??null,onFocusedRowChanged:i})})]})},play:async({canvasElement:e,args:t})=>{const o=u(e);await o.findByText(p),await l.click(o.getByText(p)),await c(()=>a(t.onFocusedRowChanged).toHaveBeenCalled()),await c(()=>a(o.getByText(/Ahmed Williams \(#\d+\)/u)).toBeInTheDocument()),await c(()=>a(S(o.getByText(p))).toHaveAttribute("data-focused","true")),await l.click(o.getByText(/Focused employee:/u)),await c(()=>a(S(o.getByText(p))).toHaveAttribute("data-focused","false")),await l.click(o.getByText(p)),await c(()=>a(S(o.getByText(p))).toHaveAttribute("data-focused","true")),await l.click(o.getByRole("button",{name:"Clear focus"})),await c(()=>a(S(o.getByText(p))).toHaveAttribute("data-focused","false"))}},jt={args:{objectType:m,columnDefinitions:T,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e})=>{const t=u(e);await t.findByText(p),await a(t.queryByRole("button",{name:/Open header menu/iu})).not.toBeInTheDocument()}},Bt={args:{objectType:m,columnDefinitions:T},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. Open the drawer and click any column header chevron; the menu should appear above the drawer."},source:{code:`<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>`}}},render:e=>n.jsx(V,{tableProps:e}),play:async()=>{await h.findByText(p),await x(h,"fullName"),await a(await h.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await l.keyboard("{Escape}")}},Dt={args:{objectType:m,columnDefinitions:T},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>n.jsx(L,{tableProps:e}),play:async()=>{await h.findByText(p),await x(h,"fullName"),await a(await h.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await l.keyboard("{Escape}")}},St={args:{objectType:m,columnDefinitions:T},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>n.jsx(z,{tableProps:e}),play:async()=>{await h.findByText(p),await x(h,"fullName"),await a(await h.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await l.keyboard("{Escape}")}},vt={args:{objectType:m,columnDefinitions:T,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e})=>{const t=u(e);await t.findByText(p),await a(S(t.getByText(p))).toHaveStyle({height:"56px"})}},Rt={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>n.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const t=e.firstFullTimeStartDate,o=t&&new Date(t)<=new Date;return n.jsx("span",{className:`status-tag ${o?"active":"inactive"}`,children:o?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e})}),play:async({canvasElement:e})=>{const t=u(e);await t.findByText(p),await a(t.getByRole("link",{name:"Employee Name"})).toBeInTheDocument(),await a(t.getByText("Employment Status")).toBeInTheDocument(),await a(t.getAllByText(/^(Active|Inactive)$/u).length).toBeGreaterThan(0)}},Nt={args:{objectType:m,columnDefinitions:ae,editMode:"manual",onCellValueChanged:C()},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>{const[t,o]=d.useState(),i=d.useCallback(r=>{var s;(s=e.onCellValueChanged)==null||s.call(e,r),o(r)},[e]);return n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'Try changing showEditFooter to false to hide the edit footer bar. Change edit mode to "manual" to enable inline editing with an Edit Table button.'}),t!=null&&n.jsxs("div",{style:{padding:"12px",backgroundColor:"#d1ecf1",marginBottom:"8px",borderRadius:"4px",fontFamily:"monospace",fontSize:"13px"},children:[n.jsx("strong",{children:"Last cell edit:"}),' Column "',t.columnId,'" changed from "',String(t.oldValue),'" to "',String(t.newValue),'"']}),n.jsx(y,{...e,onCellValueChanged:i})]})},play:async({canvasElement:e,args:t})=>{const o=u(e);await o.findByText(p),await l.click(o.getByRole("button",{name:"Edit Table"}));const i=o.getAllByRole("row")[1],r=()=>u(i).getAllByRole("cell"),s=u(r()[0]).getByRole("textbox");await l.click(s),await l.clear(s),await l.type(s,"Ahmed Williamson"),await l.tab(),await c(()=>a(t.onCellValueChanged).toHaveBeenCalledWith(a.objectContaining({columnId:"fullName",newValue:"Ahmed Williamson"})));const b=await u(r()[3]).findByRole("combobox");await l.click(b),await l.click(await h.findByRole("option",{name:"Engineering"})),await c(()=>a(t.onCellValueChanged).toHaveBeenCalledWith(a.objectContaining({columnId:"department",newValue:"Engineering"})));const j=u(r()[5]).getByRole("combobox");await l.click(j),await l.click(await h.findByRole("button",{name:"Today"})),await c(()=>a(t.onCellValueChanged).toHaveBeenCalledWith(a.objectContaining({columnId:"firstFullTimeStartDate"}))),await l.click(o.getByRole("button",{name:"Cancel"})),await a(await o.findByRole("button",{name:"Edit Table"})).toBeInTheDocument()}},Ot={args:{objectType:m,columnDefinitions:ae,editMode:"manual",onSubmitEdits:C(async e=>(await new Promise(t=>setTimeout(t,1e3)),!0))},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e,objectType:m})}),play:async({canvasElement:e,args:t})=>{const o=u(e);await o.findByText(p),await l.click(o.getByRole("button",{name:"Edit Table"}));const i=o.getAllByRole("row")[1],r=u(i).getAllByRole("cell")[0],s=u(r).getByRole("textbox");await l.click(s),await l.clear(s),await l.type(s,"Ahmed Williamson"),await l.tab();const b=o.getByRole("button",{name:"Submit Edits"});await c(()=>a(b).toBeEnabled()),await l.click(b),await c(()=>a(t.onSubmitEdits).toHaveBeenCalled()),await c(()=>a(o.getByRole("button",{name:"Edit Table"})).toBeInTheDocument(),{timeout:5e3})}},Et={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0,validateEdit:async e=>String(e??"").trim().length>=2?void 0:"Name must be at least 2 characters long"},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0,validateEdit:async e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(String(e??""))?void 0:"Please enter a valid email address"},{locator:{type:"property",id:"employeeNumber"},editable:!0,validateEdit:async e=>Number(e)>0?void 0:"Employee number must be positive"},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})},validateEdit:async e=>e?void 0:"Job title is required"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})},validateEdit:async e=>{if(!e||isNaN(Date.parse(e)))return"Please enter a valid date";const t=new Date(e),o=new Date;if(o.setHours(0,0,0,0),t<o)return"Date cannot be before today"}}],editMode:"always",onSubmitEdits:C(async e=>!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:["Try editing cells with invalid values to see validation in action:",n.jsxs("ul",{style:{margin:"8px 0 0 20px"},children:[n.jsx("li",{children:"Name must be at least 2 characters"}),n.jsx("li",{children:"Email must be a valid format"}),n.jsx("li",{children:"Employee number must be positive"}),n.jsx("li",{children:"Job title is required"}),n.jsx("li",{children:"Start date is required"})]})]}),n.jsx(y,{...e,objectType:m})]}),play:async({canvasElement:e})=>{const t=u(e),o=await t.findByDisplayValue(p);await l.click(o),await l.clear(o),await l.type(o,"a"),await l.tab(),await c(()=>a(t.getByText("Validation error")).toBeInTheDocument()),await a(t.getByRole("button",{name:"Submit Edits"})).toBeDisabled(),await l.click(o),await l.clear(o),await l.type(o,"Valid Name"),await l.tab(),await c(()=>a(t.queryByText("Validation error")).not.toBeInTheDocument()),await a(t.getByRole("button",{name:"Submit Edits"})).toBeEnabled(),await l.click(o),await l.clear(o),await l.type(o,p),await l.tab(),await c(()=>a(t.getByDisplayValue(p)).toBeInTheDocument())}},kt={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"},editable:e=>(e.jobTitle??"")==="Senior Product Manager"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:e=>({items:e.department==="Operations"?["Sales","Marketing"]:["Sales","Marketing","Finance","Human Resources"]})}}],editMode:"always",onCellValueChanged:C()},parameters:{docs:{description:{story:"Demonstrates per-row configuration with `editable` as a predicate function and dynamic `getFieldComponentProps` that computes dropdown items from the row's data. jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows"},source:{code:`const columnDefinitions = [
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
);`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'JobTitle is only editable for "Senior Product Manager" rows. Department dropdown shows only 2 options for Operations rows.'}),n.jsx(y,{...e})]}),play:async({canvasElement:e})=>{const t=u(e);await t.findByText(p);const o=u(S(t.getByText("Margaret Jackson"))).getAllByRole("cell");await a(o[1]).toHaveAttribute("data-editable","true");const i=u(S(t.getByText(p))).getAllByRole("cell");await a(i[1]).not.toHaveAttribute("data-editable");const r=S(t.getByText("William Liu"));await l.click(t.getByText("William Liu")),q.click(await u(r).findByRole("combobox")),await a(await h.findAllByRole("option")).toHaveLength(2),await a(h.queryByRole("option",{name:"Finance"})).not.toBeInTheDocument(),await l.keyboard("{Escape}");const s=S(t.getByText(p));await l.click(t.getByText(p)),q.click(await u(s).findByRole("combobox")),await a(await h.findByRole("option",{name:"Finance"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await c(()=>a(h.queryByRole("option",{name:"Finance"})).not.toBeInTheDocument())}},It={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"locationCity"}}]},parameters:{docs:{description:{story:'Demonstrates using `getRowAttributes` to set data attributes on rows and a `className` on the table to scope CSS overrides via the data attribute selector. New York employees get a light blue background through the `[data-highlight-row="true"]` CSS selector scoped under the table\'s className.'},source:{code:`/* CSS (imported stylesheet):
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
);`}}},render:e=>{const t=d.useCallback(o=>({"data-highlight-row":o.locationCity==="New York"?"true":void 0}),[]);return n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:[n.jsx("strong",{children:"Row attributes + className for CSS override:"})," New York employees have a light blue background via"," ",n.jsx("code",{children:'tr[data-highlight-row="true"]'})," scoped under"," ",n.jsx("code",{children:".customTableStyling"}),"."]}),n.jsx(y,{...e,getRowAttributes:t,className:"customTableStyling"})]})},play:async({canvasElement:e})=>{const t=u(e);await t.findByText(p),await a(S(t.getByText(p))).toHaveAttribute("data-highlight-row","true"),await a(S(t.getByText("Charlotte Weber"))).not.toHaveAttribute("data-highlight-row")}},Pt={args:{objectType:m,columnDefinitions:T,renderEmptyState:()=>n.jsx(ne,{icon:"folder-close",title:"No saved views found."})},parameters:{docs:{description:{story:"Override the default empty state with a custom render function. Useful for matching product copy or visuals (here a Blueprint `NonIdealState`)."},source:{code:`
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
`}}},render:e=>{const o=oe()(m).where({jobProfile:"Nonexistent Role"});return n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(y,{...e,objectSet:o})})},play:async({canvasElement:e})=>{const t=u(e);await a(await t.findByText("No saved views found.")).toBeInTheDocument(),await a(t.queryByText(p)).not.toBeInTheDocument()}};export{Ct as C,rt as D,Nt as E,St as H,mt as M,kt as P,It as R,pt as S,ct as W,st as a,gt as b,Rt as c,ft as d,dt as e,ut as f,ht as g,xt as h,Tt as i,Et as j,Ot as k,wt as l,yt as m,bt as n,lt as o,Pt as p,vt as q,jt as r,Dt as s,Bt as t};
