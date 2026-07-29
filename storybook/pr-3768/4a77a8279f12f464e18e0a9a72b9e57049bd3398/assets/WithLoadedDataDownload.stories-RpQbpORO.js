import{f as b,j as a,r as i}from"./iframe-BFrg0_G6.js";import{O as u}from"./object-table-BQFGNH6O.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DCHyxNf-.js";import"./Table-ClicbuUG.js";import"./index-BbTS_0ql.js";import"./Dialog-S3hdR67Z.js";import"./cross-C40Lh1kR.js";import"./svgIconContainer-C3A4Lnit.js";import"./useBaseUiId-E-s0fCKQ.js";import"./InternalBackdrop-CVpAxoCf.js";import"./composite-Bj_txaLg.js";import"./index-Dgz7cx6a.js";import"./index-Cqvom3Bd.js";import"./index-B3ZK8qnH.js";import"./useEventCallback-Y9RnUuzz.js";import"./SkeletonBar-BaoAoEVg.js";import"./LoadingCell-Cuq1qZhv.js";import"./ColumnConfigDialog-CPlCFIe0.js";import"./DraggableList-COxbKZaT.js";import"./search-PML7rR61.js";import"./Input-BW0b3JTl.js";import"./useControlled-BXk3f0MQ.js";import"./isEqual-CM9VzvJ7.js";import"./isObject-BnbKJ4JJ.js";import"./Button-DEq5-vBs.js";import"./ActionButton-qfhKDPFU.js";import"./Checkbox-CP146FOM.js";import"./useValueChanged-DnUQ4fbh.js";import"./CollapsiblePanel-i50tYBKz.js";import"./MultiColumnSortDialog-DdkoWIgs.js";import"./MenuTrigger-bYYHu19W.js";import"./CompositeItem-Duz7YqvH.js";import"./ToolbarRootContext-y5WYMk6Y.js";import"./getDisabledMountTransitionStyles-BlMi4syj.js";import"./getPseudoElementBounds-DVJQtV8T.js";import"./chevron-down-DdY7c1tH.js";import"./index-D3rKwtfg.js";import"./error-iK44Tvf9.js";import"./BaseCbacBanner-CWwx3Afm.js";import"./makeExternalStore-9ImN4-B2.js";import"./Tooltip-C_Qc6J3-.js";import"./PopoverPopup-Xyx0b8Pc.js";import"./toNumber-BpUY5ylB.js";import"./useOsdkClient-D7WwNihV.js";import"./tick-DqBG9l3K.js";import"./DropdownField-C4PWOhQL.js";import"./withOsdkMetrics-fB2lnNbV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
