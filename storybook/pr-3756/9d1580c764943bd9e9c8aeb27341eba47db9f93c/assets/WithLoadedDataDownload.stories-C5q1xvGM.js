import{f as b,j as a,r as i}from"./iframe-Tg2fnlVs.js";import{O as u}from"./object-table-s1e2Phdi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-xsLVBww1.js";import"./Table-D4vOxokt.js";import"./index-B3-1mb1K.js";import"./Dialog-z10bt9ml.js";import"./cross-BZrYWs_D.js";import"./svgIconContainer-Cp1mUGc0.js";import"./useBaseUiId-D6sRq2bB.js";import"./InternalBackdrop-BsP43oYC.js";import"./composite-DuLfcYDh.js";import"./index-o5uplDD7.js";import"./index-DPwCU7gB.js";import"./index-FXCVzM8A.js";import"./useEventCallback-Clt5HhZy.js";import"./SkeletonBar-BzHuBvLf.js";import"./LoadingCell-C6Z17YL3.js";import"./ColumnConfigDialog-Ck5OsDxx.js";import"./DraggableList-2-y-jsVB.js";import"./search-UK-OniDD.js";import"./Input-BPgms8bD.js";import"./useControlled-Dvm87Fn4.js";import"./isEqual-NkSmJgkK.js";import"./isObject-DmJxbbx1.js";import"./Button-CiYzxyPU.js";import"./ActionButton-1QC1UJFs.js";import"./Checkbox-HpCj16gy.js";import"./useValueChanged-seYnRZ38.js";import"./CollapsiblePanel-BNpWQkWl.js";import"./MultiColumnSortDialog-D2ob9v7y.js";import"./MenuTrigger-Dw2XlIXx.js";import"./CompositeItem-DEGMDptb.js";import"./ToolbarRootContext-BUY7sygA.js";import"./getDisabledMountTransitionStyles-cA1h6ws6.js";import"./getPseudoElementBounds-B0T37kvs.js";import"./chevron-down-Bj_a4fCt.js";import"./index-CL7wapu_.js";import"./error-9Ml166dJ.js";import"./BaseCbacBanner-D21Fu5a7.js";import"./makeExternalStore-Y3iyej0D.js";import"./Tooltip-2VCDdGRa.js";import"./PopoverPopup-Dp0lEAyY.js";import"./toNumber-B00qaJHM.js";import"./useOsdkClient-C_cOGEWG.js";import"./tick-dG2WuFpQ.js";import"./DropdownField-CBRsuUdv.js";import"./withOsdkMetrics-DGs0YjPU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
