import{f as b,j as a,r as i}from"./iframe-CSN8hPBK.js";import{O as u}from"./object-table-DbL69lyR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CgkWS9T4.js";import"./Table-DClyCIpE.js";import"./index-LA6eGdrx.js";import"./Dialog-FtEKHH1N.js";import"./cross-CLh64p0F.js";import"./svgIconContainer-COOyKoHH.js";import"./useBaseUiId-CST19_eI.js";import"./InternalBackdrop-CTXp7ef6.js";import"./composite-DSnE_YQk.js";import"./index-P9xxddcK.js";import"./index-DeMBNUsz.js";import"./index-BIKPmtBh.js";import"./useEventCallback-B81jpozq.js";import"./SkeletonBar-BGTpH663.js";import"./LoadingCell-A6O8gUu9.js";import"./ColumnConfigDialog-Cp-LNAQK.js";import"./DraggableList-BYRdoRfp.js";import"./search-By7vWzyC.js";import"./Input-BG0-cI5h.js";import"./useControlled-BD5V0Ccm.js";import"./Button-CTdUnl-9.js";import"./small-cross-DqRZZTHz.js";import"./ActionButton-iRrLnlXb.js";import"./Checkbox-B02p3FBc.js";import"./useValueChanged-DROKVxxL.js";import"./CollapsiblePanel-BxP2J2Dt.js";import"./MultiColumnSortDialog-mWaAjcZB.js";import"./MenuTrigger-5cpEf70X.js";import"./CompositeItem-BScttQtR.js";import"./ToolbarRootContext-CDg3nyHK.js";import"./getDisabledMountTransitionStyles-DhTy_FKz.js";import"./getPseudoElementBounds-CVxG5WR2.js";import"./chevron-down-BhdvQ1g6.js";import"./index-BuNpqgsl.js";import"./error-BtGej3op.js";import"./BaseCbacBanner-CJ7LF4Ac.js";import"./makeExternalStore-DS_EZCHg.js";import"./Tooltip-Bv17cXKg.js";import"./PopoverPopup-CQJhkZED.js";import"./debounce-ccFfTLWb.js";import"./useOsdkClient-B6qKL_vp.js";import"./tick-l3MhEpoD.js";import"./DropdownField-DUXRBZrT.js";import"./isEqual-CtNna9zA.js";import"./withOsdkMetrics-jlPvbe-f.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
