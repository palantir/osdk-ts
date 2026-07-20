import{f as b,j as a,r as i}from"./iframe-D7bSx1w3.js";import{O as u}from"./object-table-DqICFLjE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DHr4zl8o.js";import"./Table-KoqKWVdN.js";import"./index-BI7KOdly.js";import"./Dialog-DOXmE4qa.js";import"./cross-CNlF_jOJ.js";import"./svgIconContainer-CAHUqnfQ.js";import"./useBaseUiId-yYF_6EDW.js";import"./InternalBackdrop-C6I4o6gP.js";import"./composite-r3XDsHCK.js";import"./index-DDyehI4Z.js";import"./index-B4GTaVPj.js";import"./index-CHsZxX2p.js";import"./useEventCallback-p2F34cEU.js";import"./SkeletonBar-C0qNPab8.js";import"./LoadingCell-BM5nq3uo.js";import"./ColumnConfigDialog-otbHULTp.js";import"./DraggableList-Cymls1Ir.js";import"./search-_6MuPeFe.js";import"./Input-JNc6RNAw.js";import"./useControlled-6GhvlMfJ.js";import"./isEqual-C0B6gTfY.js";import"./isObject-DIIL_PaG.js";import"./Button-40Z03f6l.js";import"./ActionButton-B_fth2WG.js";import"./Checkbox-DI_FqN4w.js";import"./useValueChanged-CDDjzra1.js";import"./CollapsiblePanel-BDUv_qdU.js";import"./MultiColumnSortDialog-DdJfPqh_.js";import"./MenuTrigger-OxAeKMJE.js";import"./CompositeItem-DzV-M2cS.js";import"./ToolbarRootContext-mjTJrSyq.js";import"./getDisabledMountTransitionStyles-DXY2hqOt.js";import"./getPseudoElementBounds-CB2UGVyl.js";import"./chevron-down-BhX4T9Cq.js";import"./index-45b5ykal.js";import"./error-BZHPiTFs.js";import"./BaseCbacBanner-B-KiyM_w.js";import"./makeExternalStore-CoZYgsR6.js";import"./Tooltip-Bi2WxPQk.js";import"./PopoverPopup-DzxvPmnw.js";import"./toNumber-Bqu8RqRs.js";import"./useOsdkClient-DaMcauA-.js";import"./tick-CtNRaUJm.js";import"./DropdownField-cEcIXYpu.js";import"./withOsdkMetrics-BDmWFpPl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
