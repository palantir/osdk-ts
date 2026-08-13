import{f as b,j as a,r as i}from"./iframe-CbVdry27.js";import{O as u}from"./object-table-BHKLVqxj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-tfmV0fps.js";import"./Table-BDNwiQrh.js";import"./index-To_tBHh-.js";import"./Dialog-DeQIruMM.js";import"./cross-DITFSMmT.js";import"./svgIconContainer-BE-Q5NLe.js";import"./useBaseUiId-COEKHJ4V.js";import"./InternalBackdrop-DzVUNVwc.js";import"./composite-D1RCmFrB.js";import"./index-CxQzO9vT.js";import"./index-CWuwxy99.js";import"./index-DI-JxeEE.js";import"./useEventCallback-CB-snxQm.js";import"./SkeletonBar-VQk2FTMC.js";import"./LoadingCell-B9Hm7MHR.js";import"./ColumnConfigDialog-sHevPC2C.js";import"./DraggableList-oyI6be4x.js";import"./search-CAyyPjGK.js";import"./Input-9Z_p8AjW.js";import"./useControlled-O5_ibcww.js";import"./Button-CXv2Sbo7.js";import"./small-cross-DsN_jioI.js";import"./ActionButton-CEgoaKzv.js";import"./Checkbox-BWqnsoev.js";import"./useValueChanged-DxXNbX15.js";import"./CollapsiblePanel-DXtTBiZC.js";import"./MultiColumnSortDialog-C87bRuLF.js";import"./MenuTrigger-CzVk5AZS.js";import"./CompositeItem-C6kwzUcw.js";import"./ToolbarRootContext-CkFGLvLN.js";import"./getDisabledMountTransitionStyles-CivHSC6Y.js";import"./getPseudoElementBounds-DEFhov4L.js";import"./chevron-down-DXTT43su.js";import"./index-DD2XUJOf.js";import"./error-DofjuNB7.js";import"./BaseCbacBanner-YASPMYkx.js";import"./makeExternalStore-BnMLaNWe.js";import"./Tooltip-DpkIEOMr.js";import"./PopoverPopup-BEEkZmVP.js";import"./toNumber-CDHVRjp-.js";import"./useOsdkClient-DpGyv36v.js";import"./tick-C6DVbt_F.js";import"./DropdownField-BZb13ucB.js";import"./withOsdkMetrics-CBasv5wc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
