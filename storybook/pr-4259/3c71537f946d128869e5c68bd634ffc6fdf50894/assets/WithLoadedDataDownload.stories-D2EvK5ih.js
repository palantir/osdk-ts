import{f as b,j as a,r as i}from"./iframe-C_udlJU4.js";import{O as u}from"./object-table-D8btKdtG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D7A5VPqB.js";import"./Table-BxZ4FlUB.js";import"./index-D5Td05wZ.js";import"./Dialog-B-7Y63ma.js";import"./cross-aLVt525v.js";import"./svgIconContainer-YTE10dOj.js";import"./useBaseUiId-D9eSz4SE.js";import"./InternalBackdrop-wUvFwLWj.js";import"./composite-0__3ht0j.js";import"./index-kFWYrntg.js";import"./index-BIYZQ0cF.js";import"./index-Bt6VxweC.js";import"./useEventCallback-DZ1nXXaM.js";import"./SkeletonBar-DVvww04b.js";import"./LoadingCell-BArURkSy.js";import"./ColumnConfigDialog-BGmnqW1G.js";import"./DraggableList-D9SeTSjx.js";import"./search-BeZJ_QRn.js";import"./Input-DnhGyrNk.js";import"./useControlled-BScpaCoT.js";import"./Button-DMGSDF9f.js";import"./small-cross-bAfYX1bR.js";import"./ActionButton-CCV1Er0F.js";import"./Checkbox-Drxv5VPv.js";import"./useValueChanged-D5Daoi2-.js";import"./CollapsiblePanel-ZDu1kmyl.js";import"./MultiColumnSortDialog-D7FKiF7W.js";import"./MenuTrigger-ThxxugOw.js";import"./CompositeItem-D9nRDYX0.js";import"./ToolbarRootContext-Cypj8NdZ.js";import"./getDisabledMountTransitionStyles-D8uTEEjX.js";import"./getPseudoElementBounds-ADoHBIxL.js";import"./chevron-down-BaUNK2Yk.js";import"./index-CzIBiuyR.js";import"./error-DvqmoNGN.js";import"./BaseCbacBanner-BsFmMMHy.js";import"./makeExternalStore-DSU-MzRu.js";import"./Tooltip-B_PTRmKi.js";import"./PopoverPopup-InrtXQrT.js";import"./debounce-SX_bnHC2.js";import"./useOsdkClient-DEmnm4QT.js";import"./tick-LuoIBRv5.js";import"./DropdownField-zTIV4KYc.js";import"./isEqual-Bsc5Qs3H.js";import"./withOsdkMetrics-Bs3JzGD4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
