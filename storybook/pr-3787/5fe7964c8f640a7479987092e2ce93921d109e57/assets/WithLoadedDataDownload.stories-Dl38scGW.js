import{f as b,j as a,r as i}from"./iframe-B2WEvdAW.js";import{O as u}from"./object-table-D56pvC1L.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DhU0XYWM.js";import"./Table-EuDoghZt.js";import"./index-CPTV9ACa.js";import"./Dialog-Bs9shMGW.js";import"./cross-Dp_5_chm.js";import"./svgIconContainer-2zRkClSo.js";import"./useBaseUiId-DCdD9_76.js";import"./InternalBackdrop-CFws66aH.js";import"./composite-BREofBqz.js";import"./index-BdLXJsG_.js";import"./index-CbAjSkqf.js";import"./index-BLoo5gPv.js";import"./useEventCallback-C_gsVITF.js";import"./SkeletonBar-5dGv93nQ.js";import"./LoadingCell-ChbduxuV.js";import"./ColumnConfigDialog-Bj3PLmMs.js";import"./DraggableList-CfxOorci.js";import"./search--8DzG11U.js";import"./Input-Df2u9clw.js";import"./useControlled-C-Bb8qdR.js";import"./isEqual-D5fyckHN.js";import"./isObject-ScWPTohZ.js";import"./Button-CfOMVE39.js";import"./ActionButton-BNwYJDXK.js";import"./Checkbox-hQgO7BXg.js";import"./useValueChanged-DcSkF3ku.js";import"./CollapsiblePanel-DKsUEBPA.js";import"./MultiColumnSortDialog-CtzHHpxn.js";import"./MenuTrigger-CQi3yp30.js";import"./CompositeItem-DV2f_o_-.js";import"./ToolbarRootContext-Cl65jw6L.js";import"./getDisabledMountTransitionStyles-DVeUHiRy.js";import"./getPseudoElementBounds-_iSTNHhH.js";import"./chevron-down-CDva5__V.js";import"./index-Bt45A8jP.js";import"./error-DA0fUKLV.js";import"./BaseCbacBanner-CYNzCrjS.js";import"./makeExternalStore-PS0hgXnz.js";import"./Tooltip-C1X-0Hb3.js";import"./PopoverPopup-BjirBSSn.js";import"./toNumber-x-yUogQr.js";import"./useOsdkClient-DVo9clTL.js";import"./tick-CL3asYDB.js";import"./DropdownField-s2aUsSbs.js";import"./withOsdkMetrics-BQALV_bt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
