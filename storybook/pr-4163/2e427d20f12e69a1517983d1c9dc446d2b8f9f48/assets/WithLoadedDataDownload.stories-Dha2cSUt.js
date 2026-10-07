import{f as b,j as a,r as i}from"./iframe-DTvoIH2r.js";import{O as u}from"./object-table-DcBRKP2Z.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bl5BDaS_.js";import"./Table-B5BM-1ts.js";import"./index-Cm5sGWxJ.js";import"./Dialog-DOwUxWz4.js";import"./cross-dEikKBUB.js";import"./svgIconContainer-TNOoFETa.js";import"./useBaseUiId-DFuLIzAR.js";import"./InternalBackdrop-BtTRXxuq.js";import"./composite-u0e-F1rW.js";import"./index-BkNGnmPX.js";import"./index-huiBNFNy.js";import"./index-BJuMumhG.js";import"./useEventCallback-ClE8dN3c.js";import"./SkeletonBar-B_QvOAKR.js";import"./LoadingCell-Db0NAIaK.js";import"./ColumnConfigDialog-DFcvH2Ry.js";import"./DraggableList-BhFAB-0e.js";import"./search-CkOB4LMx.js";import"./Input-C-tth6vb.js";import"./useControlled-0uh_9m14.js";import"./Button-Eyz2dERQ.js";import"./small-cross-b1Gc4au3.js";import"./ActionButton-DvyFEALd.js";import"./Checkbox-DD7fo72m.js";import"./useValueChanged-C0F3L9Dh.js";import"./CollapsiblePanel-CmQJ5gXg.js";import"./MultiColumnSortDialog-C1nSqxJj.js";import"./MenuTrigger-BvK8OaRd.js";import"./CompositeItem-OtQFnxkB.js";import"./ToolbarRootContext-Bwl43FVk.js";import"./getDisabledMountTransitionStyles-jYzEuXLs.js";import"./getPseudoElementBounds-DP6PNIaO.js";import"./chevron-down-Kc2WAjaE.js";import"./index-C_BS0Bod.js";import"./error-CAqUL9Mb.js";import"./BaseCbacBanner-Dgtv0AkD.js";import"./makeExternalStore-B3yQfg4Y.js";import"./Tooltip-D8UVCGwD.js";import"./PopoverPopup-BTvzJrlx.js";import"./debounce-Kfo2TjOI.js";import"./useOsdkClient-DgEbhQnl.js";import"./tick-xV1uMXxC.js";import"./DropdownField-_nnCiIcu.js";import"./isEqual-osHTpoDt.js";import"./withOsdkMetrics-iCsj3SqR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
