import{f as b,j as a,r as i}from"./iframe-BY5-9hkg.js";import{O as u}from"./object-table-DePHrbOF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CINHPaVZ.js";import"./Table-BqwwU75e.js";import"./index-CJzTTX3u.js";import"./Dialog-nnpGERIy.js";import"./cross-Drh6FKLn.js";import"./svgIconContainer-E55wUvGa.js";import"./useBaseUiId-C_DkBiwm.js";import"./InternalBackdrop-Q_Jy3pX2.js";import"./composite-DqcSZiEj.js";import"./index-BKgkCnpw.js";import"./index-HRSX2Zy8.js";import"./index-thT9pKNG.js";import"./useEventCallback-vFVupt26.js";import"./SkeletonBar-C_3jzWrH.js";import"./LoadingCell-DZQHwCEk.js";import"./ColumnConfigDialog-FvTIjFMR.js";import"./DraggableList-BnQKlxz8.js";import"./search-B7RMBj9o.js";import"./Input-060Zz7KP.js";import"./useControlled-DObQOvvV.js";import"./Button-DOCEB8h2.js";import"./small-cross-B3fTw98-.js";import"./ActionButton-BgVIJ9co.js";import"./Checkbox-BsBgqk_0.js";import"./useValueChanged-DWao_sKU.js";import"./CollapsiblePanel-_jFFo0Op.js";import"./MultiColumnSortDialog-3SHvSutw.js";import"./MenuTrigger-C8Qio5CB.js";import"./CompositeItem-BCPCbCzR.js";import"./ToolbarRootContext-USuO0_Rk.js";import"./getDisabledMountTransitionStyles-Bw3BAoiY.js";import"./getPseudoElementBounds-qbX8SirN.js";import"./chevron-down-3bvaVHxC.js";import"./index-DP1DnTlM.js";import"./error-CDvOmrJi.js";import"./BaseCbacBanner-DbQpKXHm.js";import"./makeExternalStore-BGx7tVqv.js";import"./Tooltip-CzYyii6j.js";import"./PopoverPopup-DfqeQwKm.js";import"./toNumber-HuvsXFBv.js";import"./useOsdkClient-C6BGRcm-.js";import"./tick-CjO7L_37.js";import"./DropdownField-DF8H3vVN.js";import"./withOsdkMetrics-DZo8JWK3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
