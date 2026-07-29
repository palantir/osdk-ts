import{f as b,j as a,r as i}from"./iframe-D-iWThNV.js";import{O as u}from"./object-table-DC2tFwcQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CZXj2uM0.js";import"./Table-DU9JKxMC.js";import"./index-gGbSxhwF.js";import"./Dialog-DtunR9QN.js";import"./cross-CFDHK57O.js";import"./svgIconContainer-V5szaWK6.js";import"./useBaseUiId-CZhkWLWA.js";import"./InternalBackdrop-BnvuD4yk.js";import"./composite-DnSBOCeb.js";import"./index-C4cr2ngO.js";import"./index-CUPx_mOY.js";import"./index-B0pZkpRL.js";import"./useEventCallback-h9nHADCG.js";import"./SkeletonBar-Bk41b8zs.js";import"./LoadingCell-DslhFSYl.js";import"./ColumnConfigDialog-D_V-64W1.js";import"./DraggableList-BV5FDXU9.js";import"./Input-B4f6vWS9.js";import"./useControlled-eUnggN9S.js";import"./Button-CVoWvLM8.js";import"./small-cross-C3RtIQAo.js";import"./ActionButton-B0EPWfBf.js";import"./Checkbox-CCDp3UTN.js";import"./minus-C8xbbM4J.js";import"./useValueChanged-hdpvUcH-.js";import"./caret-down-DlvW5ya8.js";import"./CollapsiblePanel-DS2BZf-X.js";import"./MultiColumnSortDialog-BIXvIgQG.js";import"./MenuTrigger-B4-iJtfk.js";import"./CompositeItem-8PmyqGXy.js";import"./ToolbarRootContext-BNtYaxn_.js";import"./getDisabledMountTransitionStyles-DG5K1GCm.js";import"./getPseudoElementBounds-D_6Im5Yi.js";import"./chevron-down-aMrdXvTd.js";import"./index-Cjm1kFt1.js";import"./error-jH37spc-.js";import"./BaseCbacBanner-DqPsNK0T.js";import"./makeExternalStore-CeT6cdoW.js";import"./Tooltip-BnvVhONU.js";import"./PopoverPopup-x-YW2keb.js";import"./toNumber-DdWOMVl4.js";import"./useOsdkClient-cprLdjbo.js";import"./DropdownField-Bh0oAJ7b.js";import"./withOsdkMetrics-wtEBZo76.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
