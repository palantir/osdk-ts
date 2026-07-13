import{f as b,j as a,r as i}from"./iframe-pvo5mNRI.js";import{O as u}from"./object-table-BNexrZvx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CUspSaqE.js";import"./Table-hb_lHma7.js";import"./index-qcIymPYI.js";import"./Dialog-CymeLvdJ.js";import"./cross-4FGUS6WK.js";import"./svgIconContainer-BxJfLChJ.js";import"./useBaseUiId-eF9vQNIb.js";import"./InternalBackdrop-DCDCacSU.js";import"./composite-DIc_-7tC.js";import"./index-cpl35BgU.js";import"./index-CinOj92A.js";import"./index-DuarChLa.js";import"./useEventCallback-DIaODPmf.js";import"./SkeletonBar-cIn9-LHa.js";import"./LoadingCell-BKTj3-EE.js";import"./ColumnConfigDialog-CPlqjtYO.js";import"./DraggableList-B7R87A5v.js";import"./search-Cu0ZfvZ2.js";import"./Input-D75p9GRe.js";import"./useControlled-PdT34XRG.js";import"./Button-Df62z_9f.js";import"./small-cross-IqcNSDR6.js";import"./ActionButton-DJFHn5aq.js";import"./Checkbox-78DV608f.js";import"./useValueChanged-C39KMRgc.js";import"./CollapsiblePanel-B5Kthy9Z.js";import"./MultiColumnSortDialog-DCI9_9YJ.js";import"./MenuTrigger-_Hv5703t.js";import"./CompositeItem-DGqjJsoS.js";import"./ToolbarRootContext-Dl9FxZ6i.js";import"./getDisabledMountTransitionStyles-CezgsNNq.js";import"./getPseudoElementBounds-Cmc5VraW.js";import"./chevron-down-BrEbPX66.js";import"./index-BbN4gMj-.js";import"./error-btC3ZvGx.js";import"./BaseCbacBanner-CU13u5J1.js";import"./makeExternalStore-6UMapRdl.js";import"./Tooltip-Dle0cage.js";import"./PopoverPopup-CZ-XHKfW.js";import"./toNumber-DnUiLlb4.js";import"./useOsdkClient-DL-yQIgQ.js";import"./tick-BlMtSqzz.js";import"./DropdownField-C_GBS5m4.js";import"./withOsdkMetrics-C01UvrpP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
