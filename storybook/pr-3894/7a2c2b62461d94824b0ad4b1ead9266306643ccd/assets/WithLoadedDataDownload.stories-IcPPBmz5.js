import{f as b,j as a,r as i}from"./iframe-jUDVu-oB.js";import{O as u}from"./object-table-Cx9tm_Pd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CyYr8U1Q.js";import"./Table-CEAaeBiQ.js";import"./index-1Q0hWWGI.js";import"./Dialog-CmmS098x.js";import"./cross-B3EYIFf_.js";import"./svgIconContainer-ChyWwrvo.js";import"./useBaseUiId-C6WGvNek.js";import"./InternalBackdrop-Cv--M4Jq.js";import"./composite-Bu0UeckM.js";import"./index-DVDzZTIb.js";import"./index-C9oucRDg.js";import"./index-mIO2g3nC.js";import"./useEventCallback-w_ctU8j3.js";import"./SkeletonBar-BqIPwENF.js";import"./LoadingCell-MwY8x3Ok.js";import"./ColumnConfigDialog-BuQ4fhX6.js";import"./DraggableList-Cxf06e0j.js";import"./search-DqQGZnw2.js";import"./Input-BcTAE4rO.js";import"./useControlled-CjWxurNp.js";import"./Button-B3_hL6UU.js";import"./small-cross-3dACuLGo.js";import"./ActionButton-B73Vppck.js";import"./Checkbox-BxR9euFz.js";import"./useValueChanged-CsZ0uGxH.js";import"./CollapsiblePanel-DnM3o2Gi.js";import"./MultiColumnSortDialog-CPT8sh5J.js";import"./MenuTrigger-C8i0-fFA.js";import"./CompositeItem-DIufQebI.js";import"./ToolbarRootContext-DhXolmDg.js";import"./getDisabledMountTransitionStyles-3YgE9QJa.js";import"./getPseudoElementBounds-Gpw7pplD.js";import"./chevron-down-DSRlwyRr.js";import"./index-DTDaFG3C.js";import"./error-ekMkFCMM.js";import"./BaseCbacBanner-CP6xIIrj.js";import"./makeExternalStore-BbZ23pca.js";import"./Tooltip-CLOOUvQK.js";import"./PopoverPopup-BMShbDJ0.js";import"./debounce-C6jjJgFF.js";import"./useOsdkClient-BXvZlVT3.js";import"./tick-CgyCojcZ.js";import"./DropdownField-mH-K4cC2.js";import"./isEqual-CNT7U_na.js";import"./withOsdkMetrics-Cv-kz2_6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
