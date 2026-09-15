import{f as b,j as a,r as i}from"./iframe-DxvN0M7K.js";import{O as u}from"./object-table-tqCZagOx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-xzue2qXM.js";import"./Table-Cdw-5bp-.js";import"./index-DH5yemLr.js";import"./Dialog-Dv18KT1A.js";import"./cross-Jl3VvOEN.js";import"./svgIconContainer-C1vr-TwX.js";import"./useBaseUiId-6JQrMuoN.js";import"./InternalBackdrop-DQMzxTt2.js";import"./composite-BeC4x7c_.js";import"./index-D6YwkaJN.js";import"./index-CGz3Zj9V.js";import"./index-Je9DGe3Q.js";import"./useEventCallback-BarKJY3w.js";import"./SkeletonBar-CSNEJW0Z.js";import"./LoadingCell-CL-i8o3K.js";import"./ColumnConfigDialog-CRLVMU6N.js";import"./DraggableList-CAVKVRtK.js";import"./search-CWcacXbv.js";import"./Input-B5Cdt3Jn.js";import"./useControlled-BsKyqVLJ.js";import"./Button-DeN2HtXI.js";import"./small-cross-loFzvmde.js";import"./ActionButton-DJcBANww.js";import"./Checkbox-CwFAjL8W.js";import"./useValueChanged-znjzpbIG.js";import"./CollapsiblePanel-DcmIoP-V.js";import"./MultiColumnSortDialog-vlUBa-ho.js";import"./MenuTrigger-BYErkqlu.js";import"./CompositeItem-BM5p6vye.js";import"./ToolbarRootContext-8cNXmzWC.js";import"./getDisabledMountTransitionStyles-CQnjWCro.js";import"./getPseudoElementBounds-1Yq4M1ZX.js";import"./chevron-down-B07rpeLd.js";import"./index-CiwVfYV4.js";import"./error-Cr5iHDkF.js";import"./BaseCbacBanner-Cc8KfJds.js";import"./makeExternalStore-BQakVy-m.js";import"./Tooltip-3Unl917J.js";import"./PopoverPopup-D_lg3L_T.js";import"./debounce-HGjeRSVo.js";import"./useOsdkClient-BrNoGZi-.js";import"./tick-C0cXmT53.js";import"./DropdownField-CkxYhY96.js";import"./isEqual--3ZKqA7b.js";import"./withOsdkMetrics-BeV-dE9b.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
