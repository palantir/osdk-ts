import{f as b,j as a,r as i}from"./iframe-DqNwpodn.js";import{O as u}from"./object-table-CndYUbpU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cozt92uG.js";import"./Table-CXew3kSo.js";import"./index-CQGcEopW.js";import"./Dialog-DYBN3w-h.js";import"./cross-ZDjiMYg9.js";import"./svgIconContainer-C0i7IGlc.js";import"./useBaseUiId-D0IRY_xq.js";import"./InternalBackdrop-bq37mfFN.js";import"./composite-CSLCI2p4.js";import"./index-Bhsl5-6I.js";import"./index-Bhb5doz-.js";import"./index-Bj_LoOtk.js";import"./useEventCallback-ChBBAdDe.js";import"./SkeletonBar-CA3-8q0G.js";import"./LoadingCell-_NAbetJ9.js";import"./ColumnConfigDialog-C5283-BB.js";import"./DraggableList-7y4TwzOW.js";import"./search-iXI7_iDk.js";import"./Input-dxlaYnFR.js";import"./useControlled-5kZb40iP.js";import"./isEqual-DLP-WK2H.js";import"./isObject-BRUxE1BI.js";import"./Button-yW5WqrcK.js";import"./ActionButton-DZE22GuX.js";import"./Checkbox-BaCUu8TS.js";import"./useValueChanged-DH14YV6T.js";import"./CollapsiblePanel-1B--EGV-.js";import"./MultiColumnSortDialog-BK4Wy9qy.js";import"./MenuTrigger-DSRQj8Ru.js";import"./CompositeItem-DRCpZxZT.js";import"./ToolbarRootContext-DNu-sflf.js";import"./getDisabledMountTransitionStyles-VX6CDH_F.js";import"./getPseudoElementBounds-t8ALxim5.js";import"./chevron-down-CkHwZ2js.js";import"./index-Bd8jGuQf.js";import"./error-QvLeIger.js";import"./BaseCbacBanner-vtKG92ma.js";import"./makeExternalStore-Bbu0t-Pj.js";import"./Tooltip-BMr5xNxI.js";import"./PopoverPopup-XHTPxMzD.js";import"./toNumber-BQcG8fNf.js";import"./useOsdkClient-DJJkzB6p.js";import"./tick-DP_4Q22L.js";import"./DropdownField-GXJNahHs.js";import"./withOsdkMetrics-DueETg7y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
