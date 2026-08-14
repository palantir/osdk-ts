import{f as b,j as a,r as i}from"./iframe-Bf5y3yuv.js";import{O as u}from"./object-table-o3fW6O_1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-M85ITnzL.js";import"./Table-CEgm66mY.js";import"./index-C4oFc8fT.js";import"./Dialog-qNiPAhSf.js";import"./cross-DxmUAvZu.js";import"./svgIconContainer-CVN7uHeY.js";import"./useBaseUiId-DRtCxjKI.js";import"./InternalBackdrop-CfpA2xj_.js";import"./composite-CgQiA1Oi.js";import"./index-7NakAMlJ.js";import"./index-BPFo9kvt.js";import"./index-BuryNxwZ.js";import"./useEventCallback-DSTs8mUv.js";import"./SkeletonBar-dr-6BVoY.js";import"./LoadingCell-D9U_T-mC.js";import"./ColumnConfigDialog-DPnBwTbo.js";import"./DraggableList-TUEm6KRa.js";import"./search-DTQlzK8C.js";import"./Input-Cld-FXxr.js";import"./useControlled-BhduwF_8.js";import"./Button-C7r4XXrU.js";import"./small-cross-C2Orfn7g.js";import"./ActionButton-BaQtH1dx.js";import"./Checkbox-DK7gyUqH.js";import"./useValueChanged-MJfmbFHj.js";import"./CollapsiblePanel-PwbspAK8.js";import"./MultiColumnSortDialog-CnwrRsPJ.js";import"./MenuTrigger-CK11EHjB.js";import"./CompositeItem-ComoR2X-.js";import"./ToolbarRootContext-C57pzsjm.js";import"./getDisabledMountTransitionStyles-DrojxNJY.js";import"./getPseudoElementBounds-DDEzy1Cb.js";import"./chevron-down-Ax9eqJiN.js";import"./index-CQQhRiBl.js";import"./error-CLHz_uFS.js";import"./BaseCbacBanner-DYAvFjdX.js";import"./makeExternalStore-ZObW_I0b.js";import"./Tooltip-ZHBJR7Og.js";import"./PopoverPopup-pwUuDPTa.js";import"./debounce-CC8UUzvo.js";import"./useOsdkClient-DjcJEL1f.js";import"./tick-C1fNgrEf.js";import"./DropdownField-CggY-cK5.js";import"./isEqual-DJatYdkR.js";import"./withOsdkMetrics-y8Y3XJDn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
