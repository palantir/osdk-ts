import{f as b,j as a,r as i}from"./iframe-d2ViTWmA.js";import{O as u}from"./object-table-Cap9F0iX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-1PWcWiMd.js";import"./Table-DtmKej-A.js";import"./index-BsvVWl42.js";import"./Dialog-DtKMtcWD.js";import"./cross-CqB-COsD.js";import"./svgIconContainer-Ca_axEBY.js";import"./useBaseUiId-s9GkMrfx.js";import"./InternalBackdrop-4Ho1oo--.js";import"./composite-DwUHzh1U.js";import"./index-DCClUVMF.js";import"./index-CblGNSh8.js";import"./index-D6gFPdT9.js";import"./useEventCallback-DLBStIYH.js";import"./SkeletonBar-C5aMgStD.js";import"./LoadingCell-Qr-Mbruo.js";import"./ColumnConfigDialog-DHSHtEVx.js";import"./DraggableList-CTtA1mHA.js";import"./search-BPaGFRW6.js";import"./Input-WAgGL-in.js";import"./useControlled-DP-_xKMv.js";import"./Button-3wSnBm2K.js";import"./small-cross-BLKRlFyB.js";import"./ActionButton-CdWqVp-r.js";import"./Checkbox-CXw8_fcD.js";import"./useValueChanged-DHzymmJR.js";import"./CollapsiblePanel-DWHwz1Yh.js";import"./MultiColumnSortDialog-DfOpQ5yp.js";import"./MenuTrigger-BRqiTcHq.js";import"./CompositeItem-LXwnIylm.js";import"./ToolbarRootContext-jdhYQx8W.js";import"./getDisabledMountTransitionStyles-BYEvH3Nx.js";import"./getPseudoElementBounds-bYqDMoYN.js";import"./chevron-down-Byfe-kDK.js";import"./index-B5VTl4Up.js";import"./error-BLkrxYqH.js";import"./BaseCbacBanner-BpvHmtbf.js";import"./makeExternalStore-B9z0_w0q.js";import"./Tooltip-Bj1r5GOv.js";import"./PopoverPopup-D_0YnbxI.js";import"./toNumber-C6WXr97i.js";import"./useOsdkClient-04YEAEMh.js";import"./tick-DOT0FqHr.js";import"./DropdownField-CXuFVpGn.js";import"./withOsdkMetrics-gYMfRBGI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
