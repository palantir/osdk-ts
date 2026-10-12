import{f as b,j as a,r as i}from"./iframe-De0JvUDI.js";import{O as u}from"./object-table-QpxGEIzu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DW0Viam7.js";import"./Table-DA5xr5v4.js";import"./index-D2ucVBaK.js";import"./Dialog-bdLZ2FJb.js";import"./cross-D3NokT3S.js";import"./svgIconContainer-C40TH68P.js";import"./useBaseUiId-ClfRKfDN.js";import"./InternalBackdrop-BdrWkdLQ.js";import"./composite-Un7w28gc.js";import"./index-DSWLkZGL.js";import"./index-DRUMpWwL.js";import"./index-DPn3VSK_.js";import"./useEventCallback-CU5U5yco.js";import"./SkeletonBar-CWa0WbiQ.js";import"./LoadingCell-Cxk8ytcA.js";import"./ColumnConfigDialog-DW7uPPVa.js";import"./DraggableList-Bo93aEiY.js";import"./search-MoU8b7Yy.js";import"./Input-C_CGkTkl.js";import"./useControlled-CRrAgDjk.js";import"./Button-Bn-SxZv6.js";import"./small-cross--9BOpqr2.js";import"./ActionButton-DqBp-oot.js";import"./Checkbox-B-C0PSHq.js";import"./useValueChanged-B_zks5LA.js";import"./CollapsiblePanel-TSUxngdh.js";import"./MultiColumnSortDialog-B0i_cXtV.js";import"./MenuTrigger-Ckk1btDP.js";import"./CompositeItem-w6RFopZN.js";import"./ToolbarRootContext-Bxy7ajQD.js";import"./getDisabledMountTransitionStyles-BkAZ14rI.js";import"./getPseudoElementBounds-6gBn4IJF.js";import"./chevron-down-Yz9bQ-ge.js";import"./index-POBaPims.js";import"./error-D8UWFeng.js";import"./BaseCbacBanner-D6AKgLpj.js";import"./makeExternalStore-CvSmdJRq.js";import"./Tooltip-DXEGgoGu.js";import"./PopoverPopup-DNrWS3x8.js";import"./debounce-C6Uj-jcf.js";import"./useOsdkClient-DKAeWvuz.js";import"./tick-CabygoeH.js";import"./DropdownField-Bkm-lwWx.js";import"./isEqual-B1nIHKd3.js";import"./withOsdkMetrics-DlBld6qB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
