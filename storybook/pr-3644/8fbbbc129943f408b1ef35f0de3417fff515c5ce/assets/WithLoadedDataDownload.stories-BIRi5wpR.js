import{f as b,j as a,r as i}from"./iframe-ByDoaX8C.js";import{O as u}from"./object-table-B4s1UFGC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BvaD9OZJ.js";import"./Table-DtzJcIyu.js";import"./index-GlKsUbbN.js";import"./Dialog-WnfpOUhI.js";import"./cross-Ci6Jj7x1.js";import"./svgIconContainer-D6ZV2OEK.js";import"./useBaseUiId-Dg_IP9k7.js";import"./InternalBackdrop-DyvSIoaM.js";import"./composite-DgARTLK0.js";import"./index-C6mHMKVD.js";import"./index-Q91mkqBj.js";import"./index-Cfk96ae3.js";import"./useEventCallback-z-4VOS-y.js";import"./SkeletonBar-CAKqy4Iy.js";import"./LoadingCell-Dyhq0AEz.js";import"./ColumnConfigDialog-yY-P5Usw.js";import"./DraggableList-Bx8kyLAi.js";import"./search-CAxEEjAo.js";import"./Input-r_6ftysT.js";import"./useControlled-61dg8lwC.js";import"./Button-CKKva8Mx.js";import"./small-cross-BN-OtsFI.js";import"./ActionButton-CzO_Ooaq.js";import"./Checkbox-CKt3XeTh.js";import"./useValueChanged-DEqCFRJS.js";import"./CollapsiblePanel-DL72uGeG.js";import"./MultiColumnSortDialog-CJIcA-mR.js";import"./MenuTrigger-DK1eGV3Y.js";import"./CompositeItem-5O_RuQIb.js";import"./ToolbarRootContext-BjgxX-Yn.js";import"./getDisabledMountTransitionStyles-C0f87Td7.js";import"./getPseudoElementBounds-BWRU3yF6.js";import"./chevron-down-CHlnzCkk.js";import"./index-BFHbPmzA.js";import"./error-De-72miU.js";import"./BaseCbacBanner-WS0hGwkD.js";import"./makeExternalStore-Bk6gHyl4.js";import"./Tooltip-ChZlEBJK.js";import"./PopoverPopup-ME3HcHE8.js";import"./toNumber-CyzCGxIs.js";import"./useOsdkClient-D_suE_xa.js";import"./tick-BgKJSYQZ.js";import"./DropdownField-B4oL-lyo.js";import"./withOsdkMetrics-BN9BRjTK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
