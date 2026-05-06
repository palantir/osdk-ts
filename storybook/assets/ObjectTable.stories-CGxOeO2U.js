import{f as sn,r as a,j as n}from"./iframe-tom4IkXw.js";import{O as r}from"./object-table-BfVr7wj0.js";import{E as o}from"./Employee-BAk2o20h.js";import{m as dn}from"./toNumber-vNYDsPL_.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D3Fezj5q.js";import"./index-re_9MejM.js";import"./SkeletonBar-DllF92UK.js";import"./LoadingCell-B55ABsxj.js";import"./ColumnConfigDialog-Cnt2TOiy.js";import"./DraggableList-BmqO7di4.js";import"./svgIconContainer-Cjdc7kOr.js";import"./Input-SjRvgIR6.js";import"./useBaseUiId-BUmajB7L.js";import"./useControlled-Bej4nu2w.js";import"./index-YrV6hnxy.js";import"./index-CPX1r99E.js";import"./Button-B5lv9fzp.js";import"./small-cross-D4ELnKFq.js";import"./InternalBackdrop-DFOZ6J4t.js";import"./composite-DpudtoJz.js";import"./index-B98NTzox.js";import"./minus-DMgWyX6K.js";import"./cross-B5Gn2zgq.js";import"./CollapsiblePanel-CMi5I4qb.js";import"./Dialog-CCFxIhK_.js";import"./MultiColumnSortDialog-Dm7-YTgZ.js";import"./ToolbarRootContext-B00dcKN5.js";import"./getPseudoElementBounds-F64WnqM7.js";import"./CompositeItem-Dbrw1sxP.js";import"./getDisabledMountTransitionStyles-2STlB4IQ.js";import"./chevron-down-BPFDu9mo.js";import"./index-Z-jkU_Ff.js";import"./error-cbmKhX9E.js";import"./PopoverPopup-Bbz6SdC4.js";import"./withOsdkMetrics-CklmsZvO.js";import"./useRegisterUserAgent-BSpk3MwE.js";import"./makeExternalStore-CE7xw9ng.js";const cn={type:"interface",apiName:"Worker"},{fn:p}=__STORYBOOK_MODULE_TEST__,Zn={title:"Experimental/ObjectTable/Features",tags:["experimental"],component:r,parameters:{msw:{handlers:[...sn.handlers]},controls:{expanded:!0}},argTypes:{objectType:{description:"The object or interface type of the object",control:!1},columnDefinitions:{description:"Ordered list of column definitions to show in the table. If not provided, all of the properties of the object type will be shown in default order.",control:!1},filter:{description:"The current where clause to filter the objects in the table. If provided, the filter is controlled.",control:!1},enableOrdering:{description:"Whether the table is sortable by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnPinning:{description:"Whether columns can be pinned by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnResizing:{description:"Whether columns can be resized by the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},enableColumnConfig:{description:"Whether the column configuration dialog for column visibility and ordering is available to the user.",control:"boolean",defaultValue:!0,table:{defaultValue:{summary:"true"}}},editMode:{description:"Controls the edit mode behavior of the table. 'always': Table is always in edit mode. 'manual': User can toggle edit mode on/off.",control:"select",options:["manual","always"],defaultValue:"manual",table:{defaultValue:{summary:"manual"}}},defaultOrderBy:{description:"The default order by clause to sort the objects in the table. If provided without orderBy prop, the sorting is uncontrolled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:!1},orderBy:{description:"The current order by clause to sort the objects in the table. If provided, the sorting is controlled. If both orderBy and defaultOrderBy are provided, orderBy takes precedence.",control:!1},onOrderByChanged:{description:"Called when the order by clause is changed. Required when sorting is controlled.",control:!1,table:{category:"Events"}},onColumnVisibilityChanged:{description:"Called when the column visibility or ordering changed. If provided, the table will allow the user to show/hide columns.",control:!1,table:{category:"Events"}},onColumnsPinnedChanged:{description:"Called when the pinned columns change. If provided, the table will allow the user to pin/unpin columns.",control:!1,table:{category:"Events"}},onColumnResize:{description:"Called when a column is resized. Parameters: columnId - The ID of the resized column, newWidth - The new width of the column. When newWidth = null, the column size is reset.",control:!1,table:{category:"Events"}},onRowClick:{description:"Called when a row is clicked.",control:!1,table:{category:"Events"}},onColumnHeaderClick:{description:"Called when a column header is clicked. Parameters: columnId - The ID of the clicked column.",control:!1,table:{category:"Events"}},selectionMode:{description:"Selection mode for the table rows. If multiple, a checkbox will be shown for each row to allow selecting multiple rows as well as a top-level checkbox in the header to select all rows.",control:{type:"select"},options:["single","multiple","none"],defaultValue:"none",table:{defaultValue:{summary:"none"}}},selectedRows:{description:"The currently selected rows in the table. If provided, the row selection is controlled.",control:!1},onRowSelection:{description:"Called when the row selection changes. Required when row selection is controlled.",control:!1,table:{category:"Events"}},renderCellContextMenu:{description:"If provided, will render this context menu when right clicking on a cell",control:!1,table:{category:"Advanced"}},rowHeight:{description:"The height of each row in pixels.",control:"number",defaultValue:40,table:{defaultValue:{summary:"40"}}},className:{description:"Additional CSS class name for the table",control:"text"}}},m=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobProfile"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"businessTitle"}},{locator:{type:"property",id:"businessArea"}},{locator:{type:"property",id:"team"}},{locator:{type:"property",id:"workerType"}},{locator:{type:"property",id:"locationName"}},{locator:{type:"property",id:"locationCity"}},{locator:{type:"property",id:"locationCountry"}},{locator:{type:"property",id:"locationRegion"}},{locator:{type:"property",id:"locationType"}},{locator:{type:"property",id:"firstFullTimeStartDate"}},{locator:{type:"property",id:"firstInternStartDate"}},{locator:{type:"property",id:"employeeNumber"}},{locator:{type:"property",id:"adUsername"}},{locator:{type:"property",id:"primaryOfficeId"}},{locator:{type:"property",id:"preferredNameFirst"}},{locator:{type:"property",id:"preferredNameLast"}},{locator:{type:"property",id:"leadEmployeeNumber"}},{locator:{type:"property",id:"mentorEmployeeNumber"}}],Ye={type:"query",apiName:"getEmployeeSeniority",version:"1.0.0",osdkMetadata:void 0},Ge=[{locator:{type:"property",id:"fullName"}},{locator:{type:"rdp",id:"managerName",creator:e=>e.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:e=>"managerName"in e?n.jsx("span",{children:e.managerName}):n.jsx("span",{style:{color:"#999"},children:"No Manager"})},{locator:{type:"function",id:"seniority",queryDefinition:Ye,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}],j={args:{objectType:o,columnDefinitions:m},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},S={args:{objectType:o,columnDefinitions:m},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:e=>{const i=dn()(o).where({jobProfile:"Marketing Manager"});return n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e,objectType:o,objectSet:i})})}},v={args:{objectType:cn},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},w={render:()=>{const e=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"rdp",id:"managerName",creator:i=>i.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:i=>"managerName"in i?n.jsx("span",{children:i.managerName}):n.jsx("span",{style:{color:"#999"},children:"No Manager"})}],t={managerName:{$in:["Ahmed Williams","Fatima Zhang"]}};return n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{objectType:o,columnDefinitions:e,defaultOrderBy:[{property:"managerName",direction:"asc"}],filter:t})})},parameters:{docs:{description:{story:"Combines derived property columns with `defaultOrderBy` and `filter`. Demonstrates sorting by an RDP (managerName) and filtering the derived property."},source:{code:`type RDPs = { managerName: "string" };

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
/>`}}}},E={args:{objectType:o,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"function",id:"seniority",queryDefinition:Ye,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}]},parameters:{docs:{description:{story:"Use function-backed columns to display computed values from a Foundry query. The 'Seniority' column calls `getEmployeeSeniority` with the current object set and maps each result back to the corresponding row."},source:{code:`import { getEmployeeSeniority } from "./ontology/queries";

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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},x={args:{objectType:o,columnDefinitions:m,selectionMode:"single"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="single" />'}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},D={args:{objectType:o,columnDefinitions:m,selectionMode:"multiple"},parameters:{docs:{source:{code:'<ObjectTable objectType={Employee} selectionMode="multiple" />'}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},T={args:{objectType:o,columnDefinitions:m,renderCellContextMenu:(e,t)=>n.jsxs("div",{style:{background:"white",padding:8,border:"1px solid #d1d5db",boxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.1)",fontSize:13,borderRadius:4},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:"Cell Value:"}),n.jsx("div",{children:t?String(t):"No Value"})]})},parameters:{docs:{source:{code:`<ObjectTable
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
/>`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px"},children:"Right click on any cell"}),n.jsx(r,{...e})]})},N={args:{objectType:o,columnDefinitions:Ge.map((e,t)=>({...e,width:t===0?250:t===1?300:150}))},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  { locator: { type: "property", id: "department" }, width: 300 },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},R={args:{objectType:o,columnDefinitions:m,defaultOrderBy:[{property:"fullName",direction:"desc"}]},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{
    property: "fullName",
    direction: "desc",
  }]}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},O={args:{objectType:o,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},k={parameters:{docs:{source:{code:`const customColumnDefinition = [
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
    `}}},args:{objectType:o,columnDefinitions:[...Ge.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),n.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},P={args:{objectType:o,columnDefinitions:m,selectionMode:"multiple",selectedRows:[],orderBy:[{property:"fullName",direction:"asc"}],onRowClick:p(),onColumnHeaderClick:p(),onRowSelection:p(),onOrderByChanged:p(),onColumnVisibilityChanged:p(),onColumnsPinnedChanged:p(),onColumnResize:p()},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  columnDefinitions={defaultEmployeeColumns}
  selectionMode="multiple"
  onRowClick={(employee) => {
    console.log("Row clicked:", employee);
  }}
  onColumnHeaderClick={(columnId) => {
    console.log("Column header clicked:", columnId);
  }}
  onRowSelection={(selectedRows, isSelectAll) => {
    console.log("Row selection changed:", selectedRows, isSelectAll);
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
/>`}}},render:e=>{const[t,i]=a.useState(null),[u,d]=a.useState(null),[c,h]=a.useState([]),[g,C]=a.useState(!1),[b,Qe]=a.useState([{property:"fullName",direction:"asc"}]),[Xe,y]=a.useState(""),en=a.useCallback(s=>{var l;(l=e.onRowClick)==null||l.call(e,s),i(s),y("onRowClick")},[e]),nn=a.useCallback(s=>{var l;(l=e.onColumnHeaderClick)==null||l.call(e,s),d(s),y("onColumnHeaderClick")},[e]),tn=a.useCallback((s,l)=>{var f;(f=e.onRowSelection)==null||f.call(e,s,l),h(s),l!==void 0&&C(l),y("onRowSelection")},[e]),on=a.useCallback(s=>{var l;(l=e.onOrderByChanged)==null||l.call(e,s),Qe(s),y("onOrderByChanged")},[e]),rn=a.useCallback(s=>{var l;(l=e.onColumnVisibilityChanged)==null||l.call(e,s),y("onColumnVisibilityChanged")},[e]),ln=a.useCallback(s=>{var l;(l=e.onColumnsPinnedChanged)==null||l.call(e,s),y("onColumnsPinnedChanged")},[e]),an=a.useCallback((s,l)=>{var f;(f=e.onColumnResize)==null||f.call(e,s,l),y(`onColumnResize (${s})`)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #bfdbfe"},children:[n.jsx("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:"Event Monitor:"}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Last event:"})," ",Xe||"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Row clicked:"})," ",t?n.jsx("code",{children:t.fullName}):"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Column clicked:"})," ",u?n.jsx("code",{children:u}):"None"]}),n.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px"},children:[n.jsx("strong",{children:"Selected rows:"})," ",g?"All employees":`${c.length} employees`]}),n.jsxs("div",{style:{fontSize:"12px"},children:[n.jsx("strong",{children:"Current sort:"})," ",b!=null&&b[0]?`${b[0].property} (${b[0].direction})`:"None"]})]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e,selectedRows:c,orderBy:b,onRowClick:en,onColumnHeaderClick:nn,onRowSelection:tn,onOrderByChanged:on,onColumnVisibilityChanged:rn,onColumnsPinnedChanged:ln,onColumnResize:an})})]})}},B={args:{objectType:o,columnDefinitions:m,orderBy:[{property:"fullName",direction:"asc"}],onOrderByChanged:p()},parameters:{docs:{source:{code:`const [orderBy, setOrderBy] = useState<any>([
  { property: "fullName", direction: "asc" },
]);

return (
  <ObjectTable
    objectType={Employee}
    orderBy={orderBy}
    onOrderByChanged={setOrderBy}
  />
);`}}},render:e=>{const[t,i]=a.useState(e.orderBy??[{property:"fullName",direction:"asc"}]),u=a.useCallback(d=>{var c;(c=e.onOrderByChanged)==null||c.call(e,d),i(d)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("strong",{children:"Current Sort:"})," ",t.map((d,c)=>n.jsxs("span",{children:[d.property," (",d.direction,")",c<t.length-1&&", "]},c))]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e,orderBy:t,onOrderByChanged:u})})]})}},W={args:{objectType:o,columnDefinitions:m,selectionMode:"multiple",selectedRows:[],onRowSelection:p()},parameters:{docs:{source:{code:`const [selectedRows, setSelectedRows] = useState<any[]>([]);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    onRowSelection={setSelectedRows}
  />
);`}}},render:e=>{const[t,i]=a.useState(e.selectedRows??[]),[u,d]=a.useState(!1),c=a.useCallback((h,g)=>{var C;(C=e.onRowSelection)==null||C.call(e,h,g),i(h),g!==void 0&&d(g)},[e]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("strong",{children:"Selected:"})," ",u?"All Employees":`${t.length} employees`,t.length>0&&n.jsx("button",{style:{marginLeft:"16px",padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{i([]),d(!1)},children:"Clear Selection"})]}),n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e,selectedRows:t,onRowSelection:c})})]})}},M={args:{objectType:o,columnDefinitions:m,enableOrdering:!1,enableColumnPinning:!1,enableColumnResizing:!1,enableColumnConfig:!1},parameters:{docs:{source:{code:`<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},I={args:{objectType:o,columnDefinitions:m,rowHeight:56},parameters:{docs:{source:{code:"<ObjectTable objectType={Employee} rowHeight={56} />"}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},V={args:{objectType:o,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>n.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const t=e.firstFullTimeStartDate,i=t&&new Date(t)<=new Date;return n.jsx("span",{className:`status-tag ${i?"active":"inactive"}`,children:i?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e})})},F={args:{objectType:o,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",fieldComponentProps:{items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"}}},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",fieldComponentProps:{items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]}}},{locator:{type:"property",id:"firstInternStartDate"},editable:!0,renderCell:e=>n.jsx("div",{children:e.firstInternStartDate?new Date(e.firstInternStartDate).toISOString():"No value"})},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",fieldComponentProps:{showTime:!1,placeholder:"Select date..."}}}],editMode:"manual",onCellValueChanged:p()},parameters:{docs:{source:{code:`const columnDefinitions = [
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
      fieldComponentProps: {
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
      },
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      fieldComponentProps: {
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      },
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
      fieldComponentProps: {
        showTime: false,
        placeholder: "Select date...",
      },
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="manual"
  />
);`}}},render:e=>{const[t,i]=a.useState(),u=a.useCallback(d=>{var c;(c=e.onCellValueChanged)==null||c.call(e,d),i(d)},[e]);return n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'Try changing edit mode to "manual" to enable inline editing with an Edit Table button.'}),t!=null&&n.jsxs("div",{style:{padding:"12px",backgroundColor:"#d1ecf1",marginBottom:"8px",borderRadius:"4px",fontFamily:"monospace",fontSize:"13px"},children:[n.jsx("strong",{children:"Last cell edit:"})," ",'Column "',t.columnId,'" changed from "',String(t.oldValue),'" to "',String(t.newValue),'"']}),n.jsx(r,{...e,onCellValueChanged:u})]})}},A={args:{objectType:o,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0},{locator:{type:"property",id:"jobTitle"},editable:!0}],editMode:"manual",onSubmitEdits:p(async e=>(await new Promise(t=>setTimeout(t,1e3)),!0))},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>n.jsx("div",{className:"object-table-container",style:{height:"600px"},children:n.jsx(r,{...e,objectType:o})})},H={args:{objectType:o,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0,validateEdit:async e=>String(e??"").trim().length>=2?void 0:"Name must be at least 2 characters long"},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0,validateEdit:async e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e??""))?void 0:"Please enter a valid email address"},{locator:{type:"property",id:"employeeNumber"},editable:!0,validateEdit:async e=>Number(e)>0?void 0:"Employee number must be positive"},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",fieldComponentProps:{items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"}},validateEdit:async e=>e?void 0:"Job title is required"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",fieldComponentProps:{items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]}}},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",fieldComponentProps:{showTime:!1,placeholder:"Select date..."}},validateEdit:async e=>{if(!e||isNaN(Date.parse(e)))return"Please enter a valid date";const t=new Date(e),i=new Date;if(i.setHours(0,0,0,0),t<i)return"Date cannot be before today"}}],editMode:"always",onSubmitEdits:p(async e=>!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
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
      fieldComponentProps: {
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
      },
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
      fieldComponentProps: {
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      },
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
);`}}},render:e=>n.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[n.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:["Try editing cells with invalid values to see validation in action:",n.jsxs("ul",{style:{margin:"8px 0 0 20px"},children:[n.jsx("li",{children:"Name must be at least 2 characters"}),n.jsx("li",{children:"Email must be a valid format"}),n.jsx("li",{children:"Employee number must be positive"}),n.jsx("li",{children:"Job title is required"}),n.jsx("li",{children:"Start date is required"})]})]}),n.jsx(r,{...e,objectType:o})]})};var z,$,L;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=($=j.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var q,_,K;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(_=S.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var J,U,Z;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var Y,G,Q;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(G=w.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,ee,ne;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ne=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,re;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "single"
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
}`,...(re=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,le,ae;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple"
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
}`,...(ae=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var se,de,ce;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,ue;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(me=N.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ye,be,ge;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(be=R.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var fe,he,Ce;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=(he=O.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var je,Se,ve;k.parameters={...k.parameters,docs:{...(je=k.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(ve=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var we,Ee,xe;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
    onRowSelection: fn(),
    onOrderByChanged: fn(),
    onColumnVisibilityChanged: fn(),
    onColumnsPinnedChanged: fn(),
    onColumnResize: fn()
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
  onColumnHeaderClick={(columnId) => {
    console.log("Column header clicked:", columnId);
  }}
  onRowSelection={(selectedRows, isSelectAll) => {
    console.log("Row selection changed:", selectedRows, isSelectAll);
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
    const handleRowSelection = useCallback((newSelectedRows: any[], newIsSelectAll?: boolean) => {
      args.onRowSelection?.(newSelectedRows, newIsSelectAll);
      setSelectedRows(newSelectedRows);
      if (newIsSelectAll !== undefined) {
        setIsSelectAll(newIsSelectAll);
      }
      setLastEvent("onRowSelection");
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
          <ObjectTable {...args} selectedRows={selectedRows} orderBy={orderBy} onRowClick={handleRowClick} onColumnHeaderClick={handleColumnHeaderClick} onRowSelection={handleRowSelection} onOrderByChanged={handleOrderByChanged} onColumnVisibilityChanged={handleColumnVisibilityChanged} onColumnsPinnedChanged={handleColumnsPinnedChanged} onColumnResize={handleColumnResize} />
        </div>
      </div>;
  }
}`,...(xe=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:xe.source}}};var De,Te,Ne;B.parameters={...B.parameters,docs:{...(De=B.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ne=(Te=B.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var Re,Oe,ke;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns,
    selectionMode: "multiple" as const,
    selectedRows: [],
    onRowSelection: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: \`const [selectedRows, setSelectedRows] = useState<any[]>([]);

return (
  <ObjectTable
    objectType={Employee}
    selectionMode="multiple"
    selectedRows={selectedRows}
    onRowSelection={setSelectedRows}
  />
);\`
      }
    }
  },
  render: args => {
    const [selectedRows, setSelectedRows] = useState<any[]>(args.selectedRows ?? []);
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
    const handleRowSelection = useCallback((newSelectedRows: any[], newIsSelectAll?: boolean) => {
      args.onRowSelection?.(newSelectedRows, newIsSelectAll);
      setSelectedRows(newSelectedRows);
      if (newIsSelectAll !== undefined) {
        setIsSelectAll(newIsSelectAll);
      }
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
          <ObjectTable {...args} selectedRows={selectedRows} onRowSelection={handleRowSelection} />
        </div>
      </div>;
  }
}`,...(ke=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:ke.source}}};var Pe,Be,We;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(We=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var Me,Ie,Ve;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ve=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Fe,Ae,He;V.parameters={...V.parameters,docs:{...(Fe=V.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(He=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:He.source}}};var ze,$e,Le;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      },
      editable: true
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DROPDOWN",
        fieldComponentProps: {
          items: ["Software Engineer", "Senior Software Engineer", "Staff Engineer", "Engineering Manager", "Product Manager", "Designer"],
          isSearchable: true,
          placeholder: "Search job titles…"
        }
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DROPDOWN",
        fieldComponentProps: {
          items: ["Engineering", "Product", "Design", "Sales", "Marketing", "Finance", "Human Resources"]
        }
      }
    }, {
      locator: {
        type: "property",
        id: "firstInternStartDate"
      },
      editable: true,
      renderCell: (object: Osdk.Instance<Employee>) => {
        return <div>
              {object.firstInternStartDate ? new Date(object.firstInternStartDate).toISOString() : "No value"}
            </div>;
      }
    }, {
      locator: {
        type: "property",
        id: "firstFullTimeStartDate"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DATE_PICKER",
        fieldComponentProps: {
          showTime: false,
          placeholder: "Select date..."
        }
      }
    }],
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
      fieldComponentProps: {
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
      },
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      fieldComponentProps: {
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      },
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
      fieldComponentProps: {
        showTime: false,
        placeholder: "Select date...",
      },
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
          Try changing edit mode to "manual" to enable inline editing with an
          Edit Table button.
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
}`,...(Le=($e=F.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var qe,_e,Ke;A.parameters={...A.parameters,docs:{...(qe=A.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      },
      editable: true
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      editable: true
    }],
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
}`,...(Ke=(_e=A.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};var Je,Ue,Ze;H.parameters={...H.parameters,docs:{...(Je=H.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
        fieldComponentProps: {
          items: ["Software Engineer", "Senior Software Engineer", "Staff Engineer", "Engineering Manager", "Product Manager", "Designer"],
          isSearchable: true,
          placeholder: "Search job titles…"
        }
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
        fieldComponentProps: {
          items: ["Engineering", "Product", "Design", "Sales", "Marketing", "Finance", "Human Resources"]
        }
      }
    }, {
      locator: {
        type: "property",
        id: "firstFullTimeStartDate"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DATE_PICKER",
        fieldComponentProps: {
          showTime: false,
          placeholder: "Select date..."
        }
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
      fieldComponentProps: {
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
      },
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
      fieldComponentProps: {
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      },
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
}`,...(Ze=(Ue=H.parameters)==null?void 0:Ue.docs)==null?void 0:Ze.source}}};const Yn=["Default","WithObjectSet","WithInterfaceType","WithDerivedPropertyOrderingAndFilter","WithFunctionColumn","SingleSelection","MultipleSelection","WithContextMenu","CustomColumnWidths","WithDefaultSorting","WithDefaultColumnPinning","WithCustomColumn","EventListeners","ControlledSorting","ControlledSelection","DisableAllHeaderMenuFeatures","CustomRowHeight","WithCustomRenderers","EditableTable","WithSubmitEditsButton","EditableWithValidation"];export{W as ControlledSelection,B as ControlledSorting,N as CustomColumnWidths,I as CustomRowHeight,j as Default,M as DisableAllHeaderMenuFeatures,F as EditableTable,H as EditableWithValidation,P as EventListeners,D as MultipleSelection,x as SingleSelection,T as WithContextMenu,k as WithCustomColumn,V as WithCustomRenderers,O as WithDefaultColumnPinning,R as WithDefaultSorting,w as WithDerivedPropertyOrderingAndFilter,E as WithFunctionColumn,v as WithInterfaceType,S as WithObjectSet,A as WithSubmitEditsButton,Yn as __namedExportsOrder,Zn as default};
