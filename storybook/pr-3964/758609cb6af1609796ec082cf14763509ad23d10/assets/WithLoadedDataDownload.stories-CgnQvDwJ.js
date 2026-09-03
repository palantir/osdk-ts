import{f as b,j as a,r as i}from"./iframe-O11Zq4F1.js";import{O as u}from"./object-table-gqoQGdoV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DlwmVUfx.js";import"./Table-CPb-_s45.js";import"./index-JCX27zQ_.js";import"./Dialog-BThl-qtY.js";import"./cross-CgbZ2Lur.js";import"./svgIconContainer-niJASFYH.js";import"./useBaseUiId-Cu9t8yGo.js";import"./InternalBackdrop-Bmok97NN.js";import"./composite-CXM_4XfT.js";import"./index-D4Y1diP4.js";import"./index-CZs8bj4M.js";import"./index-BOHBCutb.js";import"./useEventCallback-BYLo8DjX.js";import"./SkeletonBar-Dbg84bcv.js";import"./LoadingCell-BKtbAGZ7.js";import"./ColumnConfigDialog-B6e2BpfX.js";import"./DraggableList-D4B0pU47.js";import"./search-Cj99250y.js";import"./Input-KS7sPzNw.js";import"./useControlled-B8YHL1ap.js";import"./Button-C08V9i3x.js";import"./small-cross-6TCOHgWS.js";import"./ActionButton-DwwC6gXd.js";import"./Checkbox-CxNgOj-_.js";import"./useValueChanged-D4OR8Hts.js";import"./CollapsiblePanel-DrNBsuTo.js";import"./MultiColumnSortDialog-aKqJlpMT.js";import"./MenuTrigger-BB0NeSp-.js";import"./CompositeItem-DLmG3BnZ.js";import"./ToolbarRootContext-tyPorBFs.js";import"./getDisabledMountTransitionStyles-BgcrLDKx.js";import"./getPseudoElementBounds-B3Xs9Miq.js";import"./chevron-down-vcyh2ihf.js";import"./index-BZM-lKSg.js";import"./error-Cg1niATE.js";import"./BaseCbacBanner-BSLN0WdA.js";import"./makeExternalStore-DxYkAphJ.js";import"./Tooltip-B3y41h0B.js";import"./PopoverPopup-DJWamGiS.js";import"./debounce-Dl6mTpZa.js";import"./useOsdkClient-BQdHiZjk.js";import"./tick-BEQDUDLL.js";import"./DropdownField-CiK_mq9u.js";import"./isEqual-BFwmF2pp.js";import"./withOsdkMetrics-5_bEfQA7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
