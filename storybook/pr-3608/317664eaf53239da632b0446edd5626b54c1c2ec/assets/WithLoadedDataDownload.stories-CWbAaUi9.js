import{f as b,j as a,r as i}from"./iframe-C8FlscN3.js";import{O as u}from"./object-table-t0gR5FWm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-AjrhGxn2.js";import"./Table-5-xI4Viu.js";import"./index-D1M1f0NA.js";import"./Dialog-Bixag5u_.js";import"./cross-C1qizlEg.js";import"./svgIconContainer-_jt-7dFm.js";import"./useBaseUiId-CoJqg4jJ.js";import"./InternalBackdrop-CRRZGv1Y.js";import"./composite-DqI9PGDZ.js";import"./index-D1Fzsegy.js";import"./index-Bgw8c57h.js";import"./index-Z_PzySPK.js";import"./useEventCallback-CAdSqU-i.js";import"./SkeletonBar-DX66KYdq.js";import"./LoadingCell-3Y9yJMg2.js";import"./ColumnConfigDialog-BfyDDki0.js";import"./DraggableList-CLmC8oe2.js";import"./search-CSvH33j2.js";import"./Input-BjJhxMvH.js";import"./useControlled-DvhhfNTI.js";import"./Button-tMKbD7-C.js";import"./small-cross-Cfl9WMoS.js";import"./ActionButton-4KQtb_ir.js";import"./Checkbox-wWFVsNOd.js";import"./minus-Dm90foAo.js";import"./tick-BN96IK1k.js";import"./useValueChanged-DP53iHTC.js";import"./caret-down-TXj15ISK.js";import"./CollapsiblePanel-CYnjOU4d.js";import"./MultiColumnSortDialog-BInfLRyX.js";import"./MenuTrigger-BOsi5noG.js";import"./CompositeItem-BdWwpp5U.js";import"./ToolbarRootContext-DbrY3OHQ.js";import"./getDisabledMountTransitionStyles-DNOCEHho.js";import"./getPseudoElementBounds-CqiHNJME.js";import"./chevron-down-B9FRkYpS.js";import"./index-BAyuz10r.js";import"./error-KKZt0rwh.js";import"./BaseCbacBanner-UxeC2Te-.js";import"./makeExternalStore-Da98X94b.js";import"./Tooltip-LclsCRLy.js";import"./PopoverPopup-D1A3wdcv.js";import"./toNumber-BLVCTzYR.js";import"./useOsdkClient-BvsjTqnu.js";import"./DropdownField-CJ4aYqTL.js";import"./withOsdkMetrics-wrPqJq6J.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
