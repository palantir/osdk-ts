import{f as b,j as a,r as i}from"./iframe-Dl62X5ic.js";import{O as u}from"./object-table-DzRA7Mxo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-9xagDZWN.js";import"./Table-D9MrzOm8.js";import"./index-r58F3SRz.js";import"./Dialog-CJTpl5lb.js";import"./cross-Dz9bobDU.js";import"./svgIconContainer-CDF0MBN3.js";import"./useBaseUiId-BZmuLScT.js";import"./InternalBackdrop-CUbDm0mk.js";import"./composite-5K-iGM63.js";import"./index-CnSx04IC.js";import"./index-VVu8Dx_K.js";import"./index-C43hAumx.js";import"./useEventCallback-C6wmA8fg.js";import"./SkeletonBar-tl3J6Agl.js";import"./LoadingCell-2Wi9jC-f.js";import"./ColumnConfigDialog-Ctz3fxGV.js";import"./DraggableList-D_k5i4OI.js";import"./search-C2kc8148.js";import"./Input-D7jaCKwy.js";import"./useControlled-DXjG9kLU.js";import"./Button-ChSQqWTn.js";import"./small-cross-XscPhA7b.js";import"./ActionButton-Clvxcs8u.js";import"./Checkbox-Dq_mlxsJ.js";import"./useValueChanged-BDnmFJ1P.js";import"./CollapsiblePanel-6wlgdqmH.js";import"./MultiColumnSortDialog-CsS0qCMr.js";import"./MenuTrigger-E2gBZa0U.js";import"./CompositeItem-9M5fDXNa.js";import"./ToolbarRootContext-Bw5Q4Aok.js";import"./getDisabledMountTransitionStyles-fFVklT7J.js";import"./getPseudoElementBounds-TACN8Mem.js";import"./chevron-down-B-xg4ZpH.js";import"./index-KYGZGSHD.js";import"./error-Bdp21cmx.js";import"./BaseCbacBanner-Bl-_XnGR.js";import"./makeExternalStore-BL6KvBj8.js";import"./Tooltip-Batd7piz.js";import"./PopoverPopup-C0r9zNTS.js";import"./toNumber-CN-GuG5F.js";import"./useOsdkClient-CIHFFW4f.js";import"./tick-BamqF3vZ.js";import"./DropdownField-BN8T2Zfa.js";import"./withOsdkMetrics-Ycu2Npgr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
