import{f as b,j as a,r as i}from"./iframe-BBEE1fcd.js";import{O as u}from"./object-table-CizW9k1k.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BxA6CJ-D.js";import"./Table-Cpsh9vSd.js";import"./index-BD-kAubo.js";import"./Dialog-ej2bxdDy.js";import"./cross-Di1f7Jtb.js";import"./svgIconContainer-CXhq7QF6.js";import"./useBaseUiId-DA_UWaVl.js";import"./InternalBackdrop-DcwfHm6T.js";import"./composite-aN5etqXc.js";import"./index-CqSSuO0g.js";import"./index-BgH3bF5f.js";import"./index-D_x-kXlz.js";import"./useEventCallback-DllGfArL.js";import"./SkeletonBar-0dsrYZxO.js";import"./LoadingCell-BH3B3g3p.js";import"./ColumnConfigDialog-B8QRS1ap.js";import"./DraggableList-CiRBEWSA.js";import"./search-CRkLehCt.js";import"./Input-DxM0pKmj.js";import"./useControlled-B-EIx2lA.js";import"./isEqual-B6nI0qZj.js";import"./isObject-DqDSXA2A.js";import"./Button-NXakGZes.js";import"./ActionButton-c4QHUsT7.js";import"./Checkbox-dobUxrMZ.js";import"./useValueChanged-DDjVOmRV.js";import"./CollapsiblePanel-QEwDQib-.js";import"./MultiColumnSortDialog-DZNl0gFJ.js";import"./MenuTrigger-DFOSWFfa.js";import"./CompositeItem-56QVPZAb.js";import"./ToolbarRootContext-BMnS3VWT.js";import"./getDisabledMountTransitionStyles-W-FCQJty.js";import"./getPseudoElementBounds-BOSpUzeO.js";import"./chevron-down-By7dAtgj.js";import"./index-Dj26UzNn.js";import"./error-rupeo4en.js";import"./BaseCbacBanner-CCtFuv6w.js";import"./makeExternalStore-DcP_Mz2E.js";import"./Tooltip-Phla1AWu.js";import"./PopoverPopup-CsmvOzIb.js";import"./toNumber-DGMU6B_l.js";import"./useOsdkClient-D2UUcxHQ.js";import"./tick-D-5cHhdL.js";import"./DropdownField-BsqxfHny.js";import"./withOsdkMetrics-BNDO0u89.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
