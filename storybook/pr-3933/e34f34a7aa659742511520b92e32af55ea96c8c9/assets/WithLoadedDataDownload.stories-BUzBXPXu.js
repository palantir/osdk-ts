import{f as b,j as a,r as i}from"./iframe-Cd_V4KpW.js";import{O as u}from"./object-table-C4lb6IjE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BvId2qNX.js";import"./Table-DTcTPhVX.js";import"./index-CKbN7xoE.js";import"./Dialog-Cnzzznkv.js";import"./cross-8_7TK-gx.js";import"./svgIconContainer-OdpcSH6M.js";import"./useBaseUiId-Cg6vBntQ.js";import"./InternalBackdrop-B-QnZGQH.js";import"./composite-BRFYp8ys.js";import"./index-B7pcEyRI.js";import"./index-fbmKYReH.js";import"./index-CRzlT-la.js";import"./useEventCallback-CY_99pR_.js";import"./SkeletonBar-D2_Y9R07.js";import"./LoadingCell-DF-kunBe.js";import"./ColumnConfigDialog-DTOgZZhJ.js";import"./DraggableList-uvVZOkam.js";import"./search-kv1GPHwR.js";import"./Input-BnvXsjz5.js";import"./useControlled-CHek0QKa.js";import"./Button-B2mzAnjv.js";import"./small-cross-D66utcYW.js";import"./ActionButton-eat6g3bK.js";import"./Checkbox-DC42b3iB.js";import"./useValueChanged-CPJhnvXb.js";import"./CollapsiblePanel-CvaPBsH3.js";import"./MultiColumnSortDialog-D3BD3vVQ.js";import"./MenuTrigger-CqdD1k-X.js";import"./CompositeItem-DZc7qyRg.js";import"./ToolbarRootContext-BLj_5vvK.js";import"./getDisabledMountTransitionStyles-BEVZ6IMz.js";import"./getPseudoElementBounds-CBW_NZlb.js";import"./chevron-down-DksiwaSO.js";import"./index-Paj9WnhS.js";import"./error-DeuwQWwL.js";import"./BaseCbacBanner-j4qkw37Y.js";import"./makeExternalStore-iWOM0D5L.js";import"./Tooltip-5gkTsU1u.js";import"./PopoverPopup-BnHPOSxW.js";import"./debounce-DCv4P7fq.js";import"./useOsdkClient-BUMyGwPD.js";import"./tick-eJRABlUb.js";import"./DropdownField-MmnLozo5.js";import"./isEqual-B-I72i7y.js";import"./withOsdkMetrics-i_JOH502.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
