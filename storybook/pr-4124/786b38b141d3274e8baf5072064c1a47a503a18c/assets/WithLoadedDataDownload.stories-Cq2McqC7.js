import{f as b,j as a,r as i}from"./iframe-UxLT7lYy.js";import{O as u}from"./object-table-Cc_qfxoK.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CV6iJ-wL.js";import"./Table-BeinkaVZ.js";import"./index-CaLIOjRM.js";import"./Dialog-VrDMfQLV.js";import"./cross-gbTOR5Si.js";import"./svgIconContainer-HqUabHbJ.js";import"./useBaseUiId-DR0pgCNJ.js";import"./InternalBackdrop-uyTw1RdA.js";import"./composite-BYQddcpi.js";import"./index-5Zs5CZ2c.js";import"./index-C8h5tRSe.js";import"./index-_o97Q59k.js";import"./useEventCallback-DjbC_S6q.js";import"./SkeletonBar-B6QGYhFN.js";import"./LoadingCell-BHo-JVA1.js";import"./ColumnConfigDialog-C4pi-a3A.js";import"./DraggableList-B7mfCITH.js";import"./search-K5dECyKJ.js";import"./Input-DHvCRjgv.js";import"./useControlled-CDHE3Jck.js";import"./Button-DZCJ8vSD.js";import"./small-cross-Bw-OCkf4.js";import"./ActionButton-C661vjkS.js";import"./Checkbox-AE0u9S9J.js";import"./useValueChanged-CzG0v9jK.js";import"./CollapsiblePanel-BbBRdFzC.js";import"./MultiColumnSortDialog-fg3k3Klu.js";import"./MenuTrigger-ynnIwSop.js";import"./CompositeItem-Kvq0UPS2.js";import"./ToolbarRootContext-19oVc1QJ.js";import"./getDisabledMountTransitionStyles-CHMZ4_kz.js";import"./getPseudoElementBounds-x7euGpS2.js";import"./chevron-down-CNsNwb1i.js";import"./index-azpejN4Q.js";import"./error-CvnQXRAs.js";import"./BaseCbacBanner-CTHYjrUf.js";import"./makeExternalStore-D1qwl-gG.js";import"./Tooltip-7LzxkM7s.js";import"./PopoverPopup-D67Wkzxz.js";import"./debounce-BO8okfFM.js";import"./useOsdkClient-Da_K8BYI.js";import"./tick-BPmR5WxH.js";import"./DropdownField-D7GJRPWS.js";import"./isEqual-BhpxjI6o.js";import"./withOsdkMetrics-CgTr75Ie.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
