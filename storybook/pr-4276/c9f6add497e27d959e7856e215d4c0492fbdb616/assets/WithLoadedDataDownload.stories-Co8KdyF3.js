import{f as b,j as a,r as i}from"./iframe-C26fIjAq.js";import{O as u}from"./object-table-CrghsGcJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CzokokTz.js";import"./Table-CL1bC3L9.js";import"./index-DSezQFnS.js";import"./Dialog-KIOCO7Ba.js";import"./cross-DwdPD-y-.js";import"./svgIconContainer-CKLh70Ds.js";import"./useBaseUiId-CZznSoWJ.js";import"./InternalBackdrop-33GFEnuK.js";import"./composite-B7Vf-7yN.js";import"./index-DKSyNOS5.js";import"./index-CvCOxJEM.js";import"./index-Cwq9J0os.js";import"./useEventCallback-DUQbs5oX.js";import"./SkeletonBar-DViOz3Wh.js";import"./LoadingCell-DcEh937u.js";import"./ColumnConfigDialog-DSla1ybE.js";import"./DraggableList-Bt-5589a.js";import"./search-CILTwpty.js";import"./Input-CWfYIH6c.js";import"./useControlled-C5NYvmTr.js";import"./Button-DUEO4ppB.js";import"./small-cross-CQktJtCa.js";import"./ActionButton-5TW8yVIZ.js";import"./Checkbox-SrFRulVK.js";import"./useValueChanged-BXDVDv9P.js";import"./CollapsiblePanel-bkJ3PYEK.js";import"./MultiColumnSortDialog-B4-hIcRf.js";import"./MenuTrigger-Dt9RoogJ.js";import"./CompositeItem-Upla8dz7.js";import"./ToolbarRootContext-BQbj6f0-.js";import"./getDisabledMountTransitionStyles-BbWUI2dB.js";import"./getPseudoElementBounds-DynJ88Gh.js";import"./chevron-down-jqoCvdNC.js";import"./index-BF0VER8K.js";import"./error-W1WiOcUb.js";import"./BaseCbacBanner-D62B0Zzd.js";import"./makeExternalStore-BbYA9c-K.js";import"./Tooltip-CwaJelEY.js";import"./isObject-Clle__At.js";import"./debounce-DStFzp8p.js";import"./useOsdkClient-D0uHWbqN.js";import"./tick-CJNoyutt.js";import"./DropdownField-D0Kss3Mm.js";import"./isEqual-Bx3yP7zp.js";import"./_baseIsEqual-Ckydw60z.js";import"./withOsdkMetrics-DlZr1eO5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
