import{f as b,j as a,r as i}from"./iframe-B_8Tdiwq.js";import{O as u}from"./object-table-BspOCb4d.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BOfrlXOZ.js";import"./Table-CT2rsR2p.js";import"./index-CTX6u9ZC.js";import"./Dialog-6rLu_0cK.js";import"./cross-L-54tVNU.js";import"./svgIconContainer-BAxZkWy9.js";import"./useBaseUiId-CQrfvGx0.js";import"./InternalBackdrop-BWAiJT6P.js";import"./composite-D5JAaSqe.js";import"./index-DhcNtvER.js";import"./index-DtiyW2Zd.js";import"./index-D1CQQTEk.js";import"./useEventCallback-DO1oXWYB.js";import"./SkeletonBar-BBnydTos.js";import"./LoadingCell-oWoSrE1Y.js";import"./ColumnConfigDialog-BbN84tgQ.js";import"./DraggableList-DSL08Tyf.js";import"./search-CvqqJReO.js";import"./Input-C-jAekTx.js";import"./useControlled-CQZQnwLO.js";import"./Button-mEt_ne7q.js";import"./small-cross-zIm_1DAH.js";import"./ActionButton-CT4KneOk.js";import"./Checkbox-CB6lyvyK.js";import"./useValueChanged-D9A1IT5H.js";import"./CollapsiblePanel-C0FCseTF.js";import"./MultiColumnSortDialog-DWYizqMq.js";import"./MenuTrigger-DfzcY-tj.js";import"./CompositeItem-DiZjPaJ2.js";import"./ToolbarRootContext-BO1IXY4-.js";import"./getDisabledMountTransitionStyles-3MzkyhZ8.js";import"./getPseudoElementBounds-B6av9XNp.js";import"./chevron-down-CEjIFaBz.js";import"./index-A2wA4OZ0.js";import"./error-D7rzQlXT.js";import"./BaseCbacBanner-Bo-7iRMk.js";import"./makeExternalStore-DX9rolj1.js";import"./Tooltip-DT09RXmv.js";import"./PopoverPopup-Bm-esaO9.js";import"./toNumber-ifC8lwC0.js";import"./useOsdkClient-CwfQDp3v.js";import"./tick-B9cDaran.js";import"./DropdownField-BuN3PcPe.js";import"./withOsdkMetrics-gXXjHvCf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
