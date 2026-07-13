import{f as b,j as a,r as i}from"./iframe-B-D95LRj.js";import{O as u}from"./object-table-vgTxKEUH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BoEJDNF1.js";import"./Table-CHjsojUw.js";import"./index-CZmdfbMD.js";import"./Dialog-BDmubPjU.js";import"./cross-CDoBuNMo.js";import"./svgIconContainer-DSIDTLuJ.js";import"./useBaseUiId-CyUKqdii.js";import"./InternalBackdrop-Cwyyxe_9.js";import"./composite-CNZxyVvo.js";import"./index-Caiqsi6O.js";import"./index-B6t0VlCk.js";import"./index-QuBFmrZv.js";import"./useEventCallback-X27FQCjr.js";import"./SkeletonBar-DQLDCJHk.js";import"./LoadingCell-CWLDA0uQ.js";import"./ColumnConfigDialog-BqNpiBhN.js";import"./DraggableList-C0KRP2vA.js";import"./search-mc9mHvRi.js";import"./Input-DFuPwYjW.js";import"./useControlled-DCqqZ002.js";import"./Button-NjnlIlL7.js";import"./small-cross-DoE0_MqA.js";import"./ActionButton-Buu4UKk2.js";import"./Checkbox-Ba-AwDrk.js";import"./useValueChanged-D0CLMOdE.js";import"./CollapsiblePanel-bP-rEUM8.js";import"./MultiColumnSortDialog-CQkDWIgx.js";import"./MenuTrigger-BIBZkMjs.js";import"./CompositeItem-DfaEvMdb.js";import"./ToolbarRootContext-BZ-d1uKy.js";import"./getDisabledMountTransitionStyles-BiHTCELV.js";import"./getPseudoElementBounds-BxhHc1xi.js";import"./chevron-down-BPh3aBWY.js";import"./index-CWRJWss2.js";import"./error-DHWiYCtJ.js";import"./BaseCbacBanner-w2U4cE-d.js";import"./makeExternalStore-CzDg85gr.js";import"./Tooltip-DZwiqtTt.js";import"./PopoverPopup-C0acQRSQ.js";import"./toNumber-BwfRh5Pd.js";import"./useOsdkClient-DzpfH5tF.js";import"./tick-CgV5gKMw.js";import"./DropdownField-BBhX19Pf.js";import"./withOsdkMetrics-Bq0B2bvT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
