import{f as b,j as a,r as i}from"./iframe-Dosm-TT_.js";import{O as u}from"./object-table-D8j3oThO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVnMXwFk.js";import"./Table-WzK5ANvW.js";import"./index-D1y6s0O_.js";import"./Dialog-CkDIoo7h.js";import"./cross-DZYsf2bT.js";import"./svgIconContainer-gSM7aVB8.js";import"./useBaseUiId-B3O-t6Rg.js";import"./InternalBackdrop-CGK9odNO.js";import"./composite-DIDiEn7q.js";import"./index-qYnVUvvJ.js";import"./index-NaQYoD_T.js";import"./index-CmUW9b7Y.js";import"./useEventCallback-Dls59x5A.js";import"./SkeletonBar-HZsNj97d.js";import"./LoadingCell-VW2vCeHl.js";import"./ColumnConfigDialog-ChLGGxlq.js";import"./DraggableList-ExvBD8SO.js";import"./search-DqB70Fo6.js";import"./Input-JfDyytdY.js";import"./useControlled-Qqs1pXRD.js";import"./Button-_P8k0PT0.js";import"./small-cross-CS9el7-Q.js";import"./ActionButton-DG8_GL9X.js";import"./Checkbox-CudzEfTU.js";import"./useValueChanged-Dux4mLaT.js";import"./CollapsiblePanel-BNjIqZQw.js";import"./MultiColumnSortDialog-DKMNuS6-.js";import"./MenuTrigger-DcCaqBSp.js";import"./CompositeItem-DToeVY_R.js";import"./ToolbarRootContext-BWKyVrsh.js";import"./getDisabledMountTransitionStyles-CM4eAwpL.js";import"./getPseudoElementBounds-Cr6saa4b.js";import"./chevron-down-rsUTVL8g.js";import"./index-CPn0b97L.js";import"./error-CgCpmqrL.js";import"./BaseCbacBanner-BgB1dpbU.js";import"./makeExternalStore-Bbldta8w.js";import"./Tooltip-D7Ywl4JF.js";import"./PopoverPopup-DXDN-pPF.js";import"./toNumber-CsipesBt.js";import"./useOsdkClient-BY3dL-8o.js";import"./tick-DfY2drKb.js";import"./DropdownField-DqdqY7e9.js";import"./withOsdkMetrics-ClNJzRHn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
