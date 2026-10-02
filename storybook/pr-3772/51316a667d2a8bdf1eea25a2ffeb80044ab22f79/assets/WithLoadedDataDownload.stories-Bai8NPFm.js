import{f as b,j as a,r as i}from"./iframe-CdV0oMQK.js";import{O as u}from"./object-table-PUOn78Wk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DYnb1G2Z.js";import"./Table-PzGbpO_j.js";import"./index-CDOi726F.js";import"./Dialog-B0ebku9n.js";import"./cross-DjfMhKqA.js";import"./svgIconContainer-Db8D1oyf.js";import"./useBaseUiId-qoWBNaJE.js";import"./InternalBackdrop-BqcAGkPw.js";import"./composite-B01ubv1I.js";import"./index-DgVn8Y3N.js";import"./index-CtEXs2m1.js";import"./index-C40UMVEa.js";import"./useEventCallback-BZlczu6G.js";import"./SkeletonBar-CtDTL4xI.js";import"./LoadingCell-BXPO2_aI.js";import"./ColumnConfigDialog-LtsebjWK.js";import"./DraggableList-Cc6rUBn4.js";import"./search-KAXH_KdC.js";import"./Input-DcsAtJ_5.js";import"./useControlled-DmnLTdeY.js";import"./Button-PcrXfoGH.js";import"./small-cross-CO2wkq1Q.js";import"./ActionButton-B47enmWM.js";import"./Checkbox-xu6FUSrv.js";import"./useValueChanged-4-cIywSW.js";import"./CollapsiblePanel-BGdu-4zm.js";import"./MultiColumnSortDialog-CIn4vagO.js";import"./MenuTrigger-BymRryZB.js";import"./CompositeItem-BGsDUgBO.js";import"./ToolbarRootContext-sN3AAwIa.js";import"./getDisabledMountTransitionStyles-iAxy3nU0.js";import"./getPseudoElementBounds-DCYHN6OR.js";import"./chevron-down-CAimFdfR.js";import"./index-C2SvAwVc.js";import"./error-DatCfw_J.js";import"./BaseCbacBanner-CKCWA2nS.js";import"./makeExternalStore-Ble7iOu_.js";import"./Tooltip-CRHEL8Uo.js";import"./PopoverPopup-oZ9Rd77s.js";import"./debounce-C-fCXie1.js";import"./useOsdkClient-CxdzKQBX.js";import"./tick-Bi7vgB1Y.js";import"./DropdownField-DtCtfIum.js";import"./isEqual-C01czanu.js";import"./withOsdkMetrics-tj5br0ur.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
