import{f as b,j as a,r as i}from"./iframe-DI1xirK-.js";import{O as u}from"./object-table-ClKMFdSW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-0eB-iNFg.js";import"./Table-CCcvKe_7.js";import"./index-Qmumqc3o.js";import"./Dialog-DmhjMM6r.js";import"./cross-DXxFyqdT.js";import"./svgIconContainer-C-6LIlco.js";import"./useBaseUiId-1iq4OEpU.js";import"./InternalBackdrop-BkpCiodu.js";import"./composite-B5wTQSOr.js";import"./index-dswnejRd.js";import"./index-jUgqDaNo.js";import"./index-Cb7DbeDl.js";import"./useEventCallback-Celq3rTk.js";import"./SkeletonBar-BAHMsEeV.js";import"./LoadingCell-eSrea5ZP.js";import"./ColumnConfigDialog-66wvzjEI.js";import"./DraggableList-BDW0Kp0A.js";import"./search-DSBEfNMJ.js";import"./Input-MVTV0nl7.js";import"./useControlled-CKn_W9T5.js";import"./Button-Dx4mM2CM.js";import"./small-cross-9WJda0nd.js";import"./ActionButton-DjqErxed.js";import"./Checkbox-Cq0tNIpf.js";import"./minus-C0dG24D9.js";import"./tick-C08GmpGd.js";import"./useValueChanged-DRmBmslJ.js";import"./caret-down-Cy-5jtYw.js";import"./CollapsiblePanel-KMnZsSUD.js";import"./MultiColumnSortDialog-B9aKyir5.js";import"./MenuTrigger-D4RI06Pj.js";import"./CompositeItem-FUSl92sr.js";import"./ToolbarRootContext-uhnlLHPe.js";import"./getDisabledMountTransitionStyles-DsaO_UTk.js";import"./getPseudoElementBounds-CvjcgftE.js";import"./chevron-down-BwPFXf2e.js";import"./index-BVSdOdg1.js";import"./error-MoXsr2oV.js";import"./BaseCbacBanner-u4prWgFK.js";import"./makeExternalStore-DnxCicIx.js";import"./Tooltip-gutm5hpa.js";import"./PopoverPopup-DplJaSXa.js";import"./toNumber-CBfAPFUg.js";import"./useOsdkClient-CGu4CdPM.js";import"./DropdownField-D2y0mo05.js";import"./withOsdkMetrics-Bci0_mqP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
