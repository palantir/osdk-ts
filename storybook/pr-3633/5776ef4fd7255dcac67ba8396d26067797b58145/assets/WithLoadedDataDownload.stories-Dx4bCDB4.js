import{f as b,j as a,r as i}from"./iframe-C-iT7w4k.js";import{O as u}from"./object-table-CifUTwSZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-vg_g2PU1.js";import"./Table-gxsXXOW-.js";import"./index-BcvTpDLz.js";import"./Dialog-CoPp1So9.js";import"./cross-CU94BJkZ.js";import"./svgIconContainer-CgP6IBxf.js";import"./useBaseUiId-BJ-1OMTm.js";import"./InternalBackdrop-DDmIqenr.js";import"./composite-C0bwRDPE.js";import"./index-BS4XLLOI.js";import"./index-DvUCCHGa.js";import"./index-BUooQTQy.js";import"./useEventCallback-Ctp4yFV7.js";import"./SkeletonBar-C0-gh77H.js";import"./LoadingCell-k7WV97_C.js";import"./ColumnConfigDialog-h8edLgsd.js";import"./DraggableList-JTAKNvlq.js";import"./search-Bo_0IVHL.js";import"./Input-QB8cqiXh.js";import"./useControlled-DIdw599V.js";import"./Button-Dax5y9Ey.js";import"./small-cross-BlPqBlAg.js";import"./ActionButton-CoV1W0v9.js";import"./Checkbox-BsWatnhu.js";import"./useValueChanged-CXqvlNrj.js";import"./CollapsiblePanel-D6euTUSc.js";import"./MultiColumnSortDialog-CkON1h0F.js";import"./MenuTrigger-DPM6XSsK.js";import"./CompositeItem-Vq_k8cXg.js";import"./ToolbarRootContext-CIPU4Dcj.js";import"./getDisabledMountTransitionStyles-CWEdxEfk.js";import"./getPseudoElementBounds-Be7SwITG.js";import"./chevron-down-By4uoNUN.js";import"./index-CDjPIzPn.js";import"./error-BlpxqpIu.js";import"./BaseCbacBanner-DzQfCrSj.js";import"./makeExternalStore-Do5c9HL5.js";import"./Tooltip-DzoqEvpy.js";import"./PopoverPopup-DPnKPhZA.js";import"./toNumber-m3ovtPpD.js";import"./useOsdkClient-A0nyStHJ.js";import"./tick-BKcS9CGI.js";import"./DropdownField-BfE9J_nD.js";import"./withOsdkMetrics-uEINst_o.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
