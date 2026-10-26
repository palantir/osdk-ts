import{f as b,j as a,r as i}from"./iframe-CvDCAeDH.js";import{O as u}from"./object-table-CWKnsu2q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CySF3uCO.js";import"./Table-x81VeKaQ.js";import"./index-nRFzHzzN.js";import"./Dialog-4_Yq37_s.js";import"./cross-EFfC56XR.js";import"./svgIconContainer-BhfMRbBd.js";import"./useBaseUiId-CERu-Mmn.js";import"./InternalBackdrop-Dnld41P_.js";import"./composite-DRBh063u.js";import"./index-RY0nU7lO.js";import"./index-DUHiZ1To.js";import"./index-C6zuoPb0.js";import"./useEventCallback-Dvnc1qQ_.js";import"./SkeletonBar-BPwyQ3k9.js";import"./LoadingCell-OTRkEekm.js";import"./ColumnConfigDialog-B8mQRaVc.js";import"./DraggableList-BS8jzmor.js";import"./search-dKzEJt7B.js";import"./Input-ALhJpCPl.js";import"./useControlled-C_KfRsXv.js";import"./Button-DisPssKu.js";import"./small-cross-DlN3ZgDX.js";import"./ActionButton-DRoq9FTP.js";import"./Checkbox-C53gscSo.js";import"./useValueChanged-BoHTJvSv.js";import"./CollapsiblePanel-BoKAurlF.js";import"./MultiColumnSortDialog-CDMb6CRp.js";import"./MenuTrigger-rb9WeGbt.js";import"./CompositeItem-DMUlrRz3.js";import"./ToolbarRootContext-DAFODDmt.js";import"./getDisabledMountTransitionStyles-Bsgl2E4D.js";import"./getPseudoElementBounds-qWUecOLW.js";import"./chevron-down-ZDn0-ls9.js";import"./index-YLVpcBQe.js";import"./error-DzLL_NpE.js";import"./BaseCbacBanner-D2iLEvm5.js";import"./makeExternalStore-feC-GRyZ.js";import"./Tooltip-B3z3Udmz.js";import"./PopoverPopup-D23pQWc3.js";import"./debounce-zyyUUcoC.js";import"./useOsdkClient-CeLUd2a8.js";import"./tick-DR6qavIZ.js";import"./DropdownField-C8RlYBV5.js";import"./isEqual-DuPT9max.js";import"./withOsdkMetrics-Ck_CFDG4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
