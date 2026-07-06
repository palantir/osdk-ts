import{f as b,j as a,r as i}from"./iframe-DFoPknXU.js";import{O as u}from"./object-table-ai6TQJGr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-P8RJdbRd.js";import"./Table-DLGsj4Q7.js";import"./index-Crav-2Ze.js";import"./Dialog-CLUcmM2Q.js";import"./cross-C5mIiswO.js";import"./svgIconContainer-DL62bZwE.js";import"./useBaseUiId-B5Di5_ER.js";import"./InternalBackdrop-lkKHC9zA.js";import"./composite-DfVs64wC.js";import"./index-vFeHJhls.js";import"./index-B4kgFmW1.js";import"./index-DRSYIdAe.js";import"./useEventCallback-CJmzA_Od.js";import"./SkeletonBar-C_pSBXQO.js";import"./LoadingCell-B5C9rVww.js";import"./ColumnConfigDialog-CM3iRc0f.js";import"./DraggableList-DocTinej.js";import"./search-CH77HEFC.js";import"./Input-Ddmrj3iK.js";import"./useControlled-DXLhnqRG.js";import"./Button-VEekTMI-.js";import"./small-cross-zqscrqd_.js";import"./ActionButton-DI9hgj8v.js";import"./Checkbox-DrDh1A7Y.js";import"./useValueChanged-BVgasBEh.js";import"./CollapsiblePanel-BrLAmJnl.js";import"./MultiColumnSortDialog-ziQgpwF9.js";import"./MenuTrigger-wrdq-s_8.js";import"./CompositeItem-DotHPe8U.js";import"./ToolbarRootContext-MwQIDNFU.js";import"./getDisabledMountTransitionStyles-BHt6PBZ-.js";import"./getPseudoElementBounds-DxDIeaM-.js";import"./chevron-down-Hrsc9QPw.js";import"./index-BxUBQmT5.js";import"./error-BcnnJbxY.js";import"./BaseCbacBanner-USAwFeKU.js";import"./makeExternalStore-fJE6jgN0.js";import"./Tooltip-n4LfOcqM.js";import"./PopoverPopup-DutMb8Vn.js";import"./toNumber-DNRDPBrb.js";import"./useOsdkClient-CdVk3ABv.js";import"./tick-Bkbc1rwx.js";import"./DropdownField-DSGBwtKN.js";import"./withOsdkMetrics-CLGKFGT7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
