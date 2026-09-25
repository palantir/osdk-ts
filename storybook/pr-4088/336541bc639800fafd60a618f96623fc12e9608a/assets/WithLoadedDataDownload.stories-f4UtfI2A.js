import{f as b,j as a,r as i}from"./iframe-CdF0Fq9c.js";import{O as u}from"./object-table-DCTB_jFv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ct1oZRJx.js";import"./Table-47tQQ2gN.js";import"./index-C157L91v.js";import"./Dialog-C2Um4hjO.js";import"./cross-DSYmSTiz.js";import"./svgIconContainer-B4dKEY9f.js";import"./useBaseUiId-ONWuAW-H.js";import"./InternalBackdrop-BmiLCT5S.js";import"./composite-CLj3gTzn.js";import"./index-1mFMxabl.js";import"./index-C1-F-JKF.js";import"./index-DoBn_sDd.js";import"./useEventCallback-CdebAKnn.js";import"./SkeletonBar-Txh1lAT2.js";import"./LoadingCell-DVLyiZTo.js";import"./ColumnConfigDialog-DV3GZ88c.js";import"./DraggableList-Cslini3j.js";import"./search-DhvEixTQ.js";import"./Input-DtrPcu15.js";import"./useControlled-B9w800yx.js";import"./Button-BBUQ2vzx.js";import"./small-cross-Bkhxrwyf.js";import"./ActionButton-B0D-C4ck.js";import"./Checkbox-9tfyC6al.js";import"./useValueChanged-Ddn72qJ7.js";import"./CollapsiblePanel-CkXKbl9a.js";import"./MultiColumnSortDialog-BMJy-M2V.js";import"./MenuTrigger-CzIoZhik.js";import"./CompositeItem-D7LuxCQJ.js";import"./ToolbarRootContext-B-5g_cXd.js";import"./getDisabledMountTransitionStyles-TKnsNZOB.js";import"./getPseudoElementBounds-DjlHjzw2.js";import"./chevron-down-duFxKh1l.js";import"./index-DcWJRYHo.js";import"./error-1hy_7Gr5.js";import"./BaseCbacBanner-BoHDJ-9K.js";import"./makeExternalStore-DXEmCGwz.js";import"./Tooltip-IWrVwCEs.js";import"./PopoverPopup-D5M-MmVN.js";import"./debounce-DPATjUqM.js";import"./useOsdkClient-B8BKhdw9.js";import"./tick-BqfEES5I.js";import"./DropdownField-DHwNGiCR.js";import"./isEqual-kk6H38Ns.js";import"./withOsdkMetrics-6s0IiMkQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
