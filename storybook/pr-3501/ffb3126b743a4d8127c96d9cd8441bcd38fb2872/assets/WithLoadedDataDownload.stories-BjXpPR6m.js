import{f as b,j as a,r as i}from"./iframe-3BSrEohR.js";import{O as u}from"./object-table-DlToRIpB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DXeTsVjO.js";import"./Table-C2qMG08V.js";import"./index-7lGm88P6.js";import"./Dialog-CKs607hQ.js";import"./cross-CUEj2Qu9.js";import"./svgIconContainer-DbtnET_h.js";import"./useBaseUiId-BEozV7Vt.js";import"./InternalBackdrop-DYfKSP-W.js";import"./composite-C1x4OMd_.js";import"./index-CQwUyo8q.js";import"./index-hpi8KTY1.js";import"./index-xdDo8YXy.js";import"./useEventCallback-WwuFpiTo.js";import"./SkeletonBar-9q8Ftsbb.js";import"./LoadingCell-Bv5fe8ez.js";import"./ColumnConfigDialog-BALwlruF.js";import"./DraggableList-ClXpqpJp.js";import"./Input-Do5Ts7f3.js";import"./useControlled-D3Z3KMny.js";import"./Button-Ci_aH_Nl.js";import"./small-cross-D9nwNIVe.js";import"./ActionButton-aWL5wICa.js";import"./Checkbox-BmyjCCgg.js";import"./minus-3EYMuIPv.js";import"./useValueChanged-BJzzgK9p.js";import"./caret-down-B1LYPiAa.js";import"./CollapsiblePanel-2o81ebmp.js";import"./MultiColumnSortDialog-CplPapX3.js";import"./MenuTrigger-eZweDM-K.js";import"./CompositeItem-jbQLbkIS.js";import"./ToolbarRootContext-Euk146SV.js";import"./getDisabledMountTransitionStyles-DOcdAk1M.js";import"./getPseudoElementBounds-DxGZ3ugF.js";import"./chevron-down-D8xgu5Kz.js";import"./index-Dubu6YFI.js";import"./error-7gRBPED4.js";import"./BaseCbacBanner-blrfKTgg.js";import"./makeExternalStore-D5lp8aYA.js";import"./Tooltip-3TfJTQ_O.js";import"./PopoverPopup-Bj23N6Nd.js";import"./toNumber-DOT5VYRq.js";import"./useOsdkClient-CZ-Iix3R.js";import"./DropdownField-zvJ8NOGH.js";import"./useStableShapeDefinition-BFwp_P0I.js";import"./withOsdkMetrics-BZku-HG_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,we as __namedExportsOrder,ye as default};
