import{f as b,j as a,r as i}from"./iframe-CIXJ1U8N.js";import{O as u}from"./object-table-DtBNFrGy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CgAbFwMM.js";import"./Table-ujY_3q3Y.js";import"./index-2fupTi2T.js";import"./Dialog-CtKlx1EH.js";import"./cross-C_OpOp6J.js";import"./svgIconContainer-Huhb1Vpv.js";import"./useBaseUiId-CSHKQrix.js";import"./InternalBackdrop-BB_NyzKQ.js";import"./composite-CkH4ezLi.js";import"./index-Cj3EoK94.js";import"./index-BD3Sluvn.js";import"./index-CMU6jwvj.js";import"./useEventCallback-BAb1tGXb.js";import"./SkeletonBar-DWlwxS8c.js";import"./LoadingCell-RhYunsw8.js";import"./ColumnConfigDialog-CA_BQylr.js";import"./DraggableList-QR-30KqF.js";import"./search-C5_KVz48.js";import"./Input-BNqEEzus.js";import"./useControlled-Bxgh_fPL.js";import"./Button-B0yxaPGE.js";import"./small-cross-DqpTtCsd.js";import"./ActionButton-P6WNwUke.js";import"./Checkbox-DdW4Dgwk.js";import"./useValueChanged-9P5wqA7j.js";import"./CollapsiblePanel-BvJiT584.js";import"./MultiColumnSortDialog-njBKOwpR.js";import"./MenuTrigger-DL4uNTPf.js";import"./CompositeItem-lWchzb2t.js";import"./ToolbarRootContext-R5s0J2Ul.js";import"./getDisabledMountTransitionStyles-Bdjcrdfd.js";import"./getPseudoElementBounds-BIDolQ8Z.js";import"./chevron-down-7pDp1Oma.js";import"./index-Cy-OTb6Y.js";import"./error-DmS7Y91z.js";import"./BaseCbacBanner-CdsEDBi4.js";import"./makeExternalStore-Dq-OkEYB.js";import"./Tooltip-IZXR1Hew.js";import"./PopoverPopup-SRPRdtkN.js";import"./debounce--Eb71UVP.js";import"./useOsdkClient-hryzPEYC.js";import"./tick-CbF9d7YO.js";import"./DropdownField-BjlvHhR7.js";import"./isEqual-D-5hfkVh.js";import"./withOsdkMetrics-D0zzaBUz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
