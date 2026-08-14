import{f as b,j as a,r as i}from"./iframe-CVr9LoxM.js";import{O as u}from"./object-table-BAwa8E0X.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B3cY2-AW.js";import"./Table-IkqPuQ6B.js";import"./index-Df4Vb_Rg.js";import"./Dialog-Bvfn0Z3y.js";import"./cross-CBN4pK4_.js";import"./svgIconContainer-BVc8zREf.js";import"./useBaseUiId-BgjPqsl9.js";import"./InternalBackdrop-B9YxhYvi.js";import"./composite-CWgHrWA4.js";import"./index-F2yAeMdf.js";import"./index-HRRYB8HE.js";import"./index-DjjNgAfl.js";import"./useEventCallback-B-NY5P9l.js";import"./SkeletonBar-NYup2M2c.js";import"./LoadingCell-DTpfEbFX.js";import"./ColumnConfigDialog-CM1tbYEm.js";import"./DraggableList-CWLH3RMw.js";import"./search-Brj5g3oE.js";import"./Input-BcPZGFIr.js";import"./useControlled-smGAEf-G.js";import"./Button-vPPL3ll8.js";import"./small-cross-DABERClE.js";import"./ActionButton-D0hhWxeW.js";import"./Checkbox-DDyQcp9_.js";import"./useValueChanged-DNfH4ZzU.js";import"./CollapsiblePanel-C0K5tgYw.js";import"./MultiColumnSortDialog-npyZMECM.js";import"./MenuTrigger-5w2KnMTa.js";import"./CompositeItem-B09-p_Fm.js";import"./ToolbarRootContext-CLf2yNEL.js";import"./getDisabledMountTransitionStyles-DmWpyYJT.js";import"./getPseudoElementBounds-CCTtg9pk.js";import"./chevron-down-B0k-btX-.js";import"./index-Clqhcc_a.js";import"./error-BXLmWA6n.js";import"./BaseCbacBanner-C5szwo-7.js";import"./makeExternalStore--O5_5o65.js";import"./Tooltip-BiirjfzW.js";import"./PopoverPopup-DM6VnfOU.js";import"./debounce-BAwOJApV.js";import"./useOsdkClient-DdROgngo.js";import"./tick-Bnn8MQdF.js";import"./DropdownField-CgCH9W6l.js";import"./isEqual-D8JbxFr7.js";import"./withOsdkMetrics-DBLS2NQA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = ${f};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);`}}},render:()=>a.jsx(C,{})};function C(){const e=i.useRef(null),[n,t]=i.useState(!1),r=i.useCallback(async()=>{var o;t(!0);try{const s=await((o=e.current)==null?void 0:o.getSnapshot());if(!s)return;await g(E(s.columns,s.rows),"employees.csv")}finally{t(!1)}},[]);return a.jsxs("div",{className:"object-table-container",style:{height:"600px",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:a.jsx("button",{disabled:n,onClick:r,type:"button",style:{...y,...n?{cursor:"not-allowed",opacity:.6}:null},children:n?"Downloading…":"Download as CSV"})}),a.jsx(u,{objectType:h,columnDefinitions:w,pageSize:f,tableRef:e})]})}function E(e,n){return[e.map(t=>c(t.name)).join(","),...n.map(t=>e.map(r=>c(S(t.getValue(r.id)))).join(","))].join(`
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/u.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uses \`tableRef.current.getSnapshot()\` to build and download a CSV from the ObjectTable's data. The Full name column uses \`renderCell\`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an \`Error\` instance from \`row.getValue\`, which the CSV renders as a literal marker."
      },
      source: {
        code: \`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = \${PAGE_SIZE};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);\`
      }
    }
  },
  render: () => <LoadedDataDownloadExample />
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,we as __namedExportsOrder,ye as default};
