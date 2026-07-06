import{f as b,j as a,r as i}from"./iframe-CQvYC2Mc.js";import{O as u}from"./object-table-N0doisAO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BEZ8lP16.js";import"./Table-BPV638E8.js";import"./index-B6R1qUpL.js";import"./Dialog-DI1bU_9I.js";import"./cross-CYqgq5AP.js";import"./svgIconContainer-8qZ8IlT_.js";import"./useBaseUiId-BWLHdD4g.js";import"./InternalBackdrop-DEeKo5uW.js";import"./composite-CXtq681A.js";import"./index-CGCWeSoa.js";import"./index-BE2KYGHn.js";import"./index-CgKgS2Li.js";import"./useEventCallback-CiQAd75S.js";import"./SkeletonBar-D5c2aln9.js";import"./LoadingCell-DrsZ29Kn.js";import"./ColumnConfigDialog-CvFkqCET.js";import"./DraggableList-cYkf8_G8.js";import"./search-CRHFewGf.js";import"./Input-CP66cyE8.js";import"./useControlled-DJFsLM5o.js";import"./Button-BrSSFbRf.js";import"./small-cross-BDLy6Csf.js";import"./ActionButton-CeGp-HNQ.js";import"./Checkbox-F3BbqqFs.js";import"./useValueChanged-DnZLNMPE.js";import"./CollapsiblePanel-Dm6n2yq3.js";import"./MultiColumnSortDialog-DZF_7F3z.js";import"./MenuTrigger-B3Rvnhlv.js";import"./CompositeItem-CLvBkps8.js";import"./ToolbarRootContext-CRXCF4gP.js";import"./getDisabledMountTransitionStyles-NsS34Kt7.js";import"./getPseudoElementBounds-DCA6s-zR.js";import"./chevron-down-DQmwVB0G.js";import"./index-Caz1Duo5.js";import"./error-CREILQKt.js";import"./BaseCbacBanner-MKpEgqQO.js";import"./makeExternalStore-BdIvN8Ho.js";import"./Tooltip-CstBRKWC.js";import"./PopoverPopup-MTnDQ-Bl.js";import"./toNumber-C6bCpIbI.js";import"./useOsdkClient-C37956GS.js";import"./tick-B7sulsAV.js";import"./DropdownField-Yzjjhihn.js";import"./withOsdkMetrics-Dpr0l7kl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
