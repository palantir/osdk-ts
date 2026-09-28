import{f as b,j as a,r as i}from"./iframe-CxXsZYaL.js";import{O as u}from"./object-table-zRXuZuYV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dt2THrkM.js";import"./Table-CE4R3ZP_.js";import"./index-DPiocoAy.js";import"./Dialog-43gVh9Z0.js";import"./cross-DyjS402Z.js";import"./svgIconContainer-B1eyjN3k.js";import"./useBaseUiId-Bv8MvEl3.js";import"./InternalBackdrop-BI6mC2qq.js";import"./composite-DTKgIMa8.js";import"./index-Cegb6wp-.js";import"./index-BIZErmx-.js";import"./index-Cw4rMGGb.js";import"./useEventCallback-D6R4tDnw.js";import"./SkeletonBar-DLXC3u_6.js";import"./LoadingCell-Dhr99XtA.js";import"./ColumnConfigDialog-BP9G56Gj.js";import"./DraggableList-C7BzcTVt.js";import"./search-DvGGeQU1.js";import"./Input-CWxuf688.js";import"./useControlled-CCbrWuYr.js";import"./Button-By61fxAS.js";import"./small-cross-DNpUAcLG.js";import"./ActionButton-IBcvUrIn.js";import"./Checkbox-AcH8WHBX.js";import"./useValueChanged-CHP3biT2.js";import"./CollapsiblePanel-DMmR_d8n.js";import"./MultiColumnSortDialog-D0OQTQVu.js";import"./MenuTrigger-CiXpMiQW.js";import"./CompositeItem-ltfNlpKQ.js";import"./ToolbarRootContext-DwwnRCz6.js";import"./getDisabledMountTransitionStyles-BR22wxCp.js";import"./getPseudoElementBounds-DpN1Og-q.js";import"./chevron-down-LKr_hJQt.js";import"./index-CvA8CM7Y.js";import"./error-D5twijSF.js";import"./BaseCbacBanner-BTgCkBtd.js";import"./makeExternalStore-C8dW_5p-.js";import"./Tooltip-64p6zcvU.js";import"./PopoverPopup-u7OHtDv1.js";import"./debounce-C7Sw8tZF.js";import"./useOsdkClient-B9HSbxHr.js";import"./tick-CMFb73FH.js";import"./DropdownField-BIToETMe.js";import"./isEqual-D8N_VdCJ.js";import"./withOsdkMetrics-BmsRu25F.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
