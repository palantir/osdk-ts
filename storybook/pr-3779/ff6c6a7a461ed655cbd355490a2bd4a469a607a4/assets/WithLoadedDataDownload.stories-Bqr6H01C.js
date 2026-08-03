import{f as b,j as a,r as i}from"./iframe-BDk1IBq0.js";import{O as u}from"./object-table-DjkcdMg4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BTKlFRVT.js";import"./Table-DE3ljT2V.js";import"./index-D7NXbx8O.js";import"./Dialog-cZAFZTwe.js";import"./cross-Yxj_6q4K.js";import"./svgIconContainer-DLmZ_O8B.js";import"./useBaseUiId-DMGSqHE1.js";import"./InternalBackdrop-C03lckkn.js";import"./composite-DMaSIPCu.js";import"./index-Cp3LCsCN.js";import"./index-Ck8z4N77.js";import"./index-DA9cjqaH.js";import"./useEventCallback-BEMfQixj.js";import"./SkeletonBar-Dw7U1fP3.js";import"./LoadingCell-CxrasSrx.js";import"./ColumnConfigDialog-Fs6CZohf.js";import"./DraggableList-BFFHsIkL.js";import"./search-T09tFGVD.js";import"./Input-PeixbVvf.js";import"./useControlled-DBk8iBgn.js";import"./isEqual-C9Q3zzlP.js";import"./isObject-w7NVVWuX.js";import"./Button-D-40IJBp.js";import"./ActionButton-DLjH0OdS.js";import"./Checkbox-CvcVswea.js";import"./useValueChanged-DaOmXYwX.js";import"./CollapsiblePanel-BF9AllQ8.js";import"./MultiColumnSortDialog-Bxdps7Tw.js";import"./MenuTrigger-FvGzwaZM.js";import"./CompositeItem-DqtdQCsE.js";import"./ToolbarRootContext-DIhUV_VV.js";import"./getDisabledMountTransitionStyles-C2C8eikI.js";import"./getPseudoElementBounds-B7o_2H9U.js";import"./chevron-down-ewV3babK.js";import"./index-DBlapOjg.js";import"./error-B4CqJvC_.js";import"./BaseCbacBanner-BSZQ4RtC.js";import"./makeExternalStore-1Ey3n_is.js";import"./Tooltip-B_ggEf85.js";import"./PopoverPopup-DOdenRZd.js";import"./toNumber-CNNoyzkY.js";import"./useOsdkClient-B4kJdbyd.js";import"./tick-CMR_boep.js";import"./DropdownField-59d9SWFp.js";import"./withOsdkMetrics-CfKSz8RV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
