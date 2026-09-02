import{f as b,j as a,r as i}from"./iframe-CKQO8Vx8.js";import{O as u}from"./object-table-Bt2sUrtO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CwEBdSMT.js";import"./Table-DoriW8mu.js";import"./index-CdmnUnhF.js";import"./Dialog-D0q_Mvut.js";import"./cross-DO9NTRmS.js";import"./svgIconContainer-8H3QdML_.js";import"./useBaseUiId-q6qw1H5x.js";import"./InternalBackdrop-BTNC0mrs.js";import"./composite-DUJXG-6e.js";import"./index-C6tRhyNC.js";import"./index-DyVj7mZ2.js";import"./index-DJy3tnug.js";import"./useEventCallback-CVzmQKkJ.js";import"./SkeletonBar-Dib1lpxv.js";import"./LoadingCell-BduzxgCB.js";import"./ColumnConfigDialog-Ba_ITkEx.js";import"./DraggableList-hcihQCTE.js";import"./search-DzGwW1te.js";import"./Input-DbZHyI8w.js";import"./useControlled-BG6xoYyK.js";import"./Button-C_uhqqdD.js";import"./small-cross-own7Uqs-.js";import"./ActionButton-Dx5rVu5l.js";import"./Checkbox-BcPXCcHY.js";import"./useValueChanged-CawvCcvS.js";import"./CollapsiblePanel-1We0fcIM.js";import"./MultiColumnSortDialog-C4qm4gIr.js";import"./MenuTrigger-BPKmddmT.js";import"./CompositeItem-DNmbzFT9.js";import"./ToolbarRootContext-C-XgkwmF.js";import"./getDisabledMountTransitionStyles-BSB2dByu.js";import"./getPseudoElementBounds-Cv7bWoSP.js";import"./chevron-down-Di9IPq2H.js";import"./index-Bw61tY6z.js";import"./error-BJLkldHu.js";import"./BaseCbacBanner-CdeGiA8M.js";import"./makeExternalStore-BYH0sOuo.js";import"./Tooltip-DaqQjAiE.js";import"./PopoverPopup-CLOXW3BX.js";import"./debounce-ZS8_n_nj.js";import"./useOsdkClient-Dkk6CBBB.js";import"./tick-plzq2OIV.js";import"./DropdownField-CTCBlMF_.js";import"./isEqual-BCtSdQgS.js";import"./withOsdkMetrics-CV_1aUYl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
