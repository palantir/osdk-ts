import{f as b,j as a,r as i}from"./iframe-_5wDdiP0.js";import{O as u}from"./object-table-JyMH3_tQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-8h1P6xYu.js";import"./index-C4e07EIP.js";import"./Dialog-BaArQrPR.js";import"./cross-CDvtm7wa.js";import"./svgIconContainer-Ds5mhaKt.js";import"./useBaseUiId-Cestzn_A.js";import"./InternalBackdrop-DDcBCCvq.js";import"./composite-vLU-bk1f.js";import"./index-CLA2ZEob.js";import"./index-8QRTyP0W.js";import"./index-Conl1gt5.js";import"./useEventCallback-BX-lASpz.js";import"./SkeletonBar-D1W6393k.js";import"./LoadingCell-D8gaeupQ.js";import"./ColumnConfigDialog-C3HERuXb.js";import"./DraggableList-BTLRcmWz.js";import"./search-C54mWapc.js";import"./Input-CZd-DQop.js";import"./useControlled-X_H_3l5l.js";import"./Button-DqnMjAXS.js";import"./small-cross-BnlOd_fW.js";import"./ActionButton-DJNASACQ.js";import"./Checkbox-B7zFY4-d.js";import"./minus-BHfqhxqL.js";import"./tick-dPsMid-0.js";import"./useValueChanged-CqVFETBn.js";import"./caret-down-CSPmrDKn.js";import"./CollapsiblePanel-Bta0t43s.js";import"./MultiColumnSortDialog-CCaA9kGq.js";import"./MenuTrigger-CuVdZyZ9.js";import"./CompositeItem-DlynxLru.js";import"./ToolbarRootContext-DJn2a6mf.js";import"./getDisabledMountTransitionStyles-Dp4V2P0x.js";import"./getPseudoElementBounds-CJZnyMx2.js";import"./chevron-down-DLT-272G.js";import"./index-DNJ8IDrW.js";import"./error-CzOPN5aE.js";import"./BaseCbacBanner-DfitNFHf.js";import"./makeExternalStore-BBIrWIAB.js";import"./Tooltip-Dpaqd64W.js";import"./PopoverPopup-Bf3Ny9re.js";import"./toNumber-BTiXR98a.js";import"./useOsdkClient-DgInDypn.js";import"./DropdownField-mue2BKTf.js";import"./withOsdkMetrics-ZZ7U2DXl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
