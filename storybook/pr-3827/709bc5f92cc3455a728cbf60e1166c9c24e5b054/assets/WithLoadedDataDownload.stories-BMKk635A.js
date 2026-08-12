import{f as b,j as a,r as i}from"./iframe-C5NFvgiE.js";import{O as u}from"./object-table-Cg7a57bf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BC8VBrum.js";import"./Table-CqajLfYx.js";import"./index-EtmTyaay.js";import"./Dialog-9uBVf05K.js";import"./cross-DLjyYdWF.js";import"./svgIconContainer-B_PFiYn8.js";import"./useBaseUiId-CJ9Huyf7.js";import"./InternalBackdrop-D4cRPaZh.js";import"./composite-DmGpycId.js";import"./index-sVGPqYhb.js";import"./index-882meA1k.js";import"./index-DjhrnFTk.js";import"./useEventCallback-Dc5URW6d.js";import"./SkeletonBar-D__uNuhL.js";import"./LoadingCell-BCt_KtF5.js";import"./ColumnConfigDialog-DZn8srL5.js";import"./DraggableList-DuxWmrwF.js";import"./search-7RMpjv9g.js";import"./Input-DaHV-cOW.js";import"./useControlled-Duv0di0B.js";import"./isEqual-IZ72ZoN5.js";import"./isObject-9m007JNC.js";import"./Button-CQssBVED.js";import"./ActionButton-CTNaJHR0.js";import"./Checkbox-bcwpqp2K.js";import"./useValueChanged-Dc6x029G.js";import"./CollapsiblePanel-D-SkO8jl.js";import"./MultiColumnSortDialog-mSj5H4Kw.js";import"./MenuTrigger-CW5x8DBX.js";import"./CompositeItem-Cf7M82EQ.js";import"./ToolbarRootContext-By2zkM1j.js";import"./getDisabledMountTransitionStyles-D0XUgT8Q.js";import"./getPseudoElementBounds-DGNrj8Lp.js";import"./chevron-down-9I0-3TkX.js";import"./index-2E7TPCj-.js";import"./error-DAH-eKl0.js";import"./BaseCbacBanner-BKgfll48.js";import"./makeExternalStore-CqR_y6G8.js";import"./Tooltip-aBmYTUan.js";import"./PopoverPopup-BTbYxYaC.js";import"./toNumber-Dtl6tkmX.js";import"./useOsdkClient-BJfh_Cmy.js";import"./tick-BQrydFrT.js";import"./DropdownField-BhtG85if.js";import"./withOsdkMetrics-V3Vr0ZXu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
