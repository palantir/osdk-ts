import{f as b,j as a,r as i}from"./iframe-DfvwHsY4.js";import{O as u}from"./object-table-DsgGTtXM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B_za76P1.js";import"./Table-D9CBcPp7.js";import"./index-CQtOsoXK.js";import"./Dialog-DHH-JwJ9.js";import"./cross-fqG1RiYl.js";import"./svgIconContainer-B9JqQ2wt.js";import"./useBaseUiId-B0xqZb_O.js";import"./InternalBackdrop-CKWiJoCa.js";import"./composite-CSX6Mrkw.js";import"./index-DR_LgGEH.js";import"./index-DVBjGa5t.js";import"./index-CnrsCr2B.js";import"./useEventCallback-CHZTTgQU.js";import"./SkeletonBar-Dkqc5Z-q.js";import"./LoadingCell-BhCbvDmF.js";import"./ColumnConfigDialog-CNuDIn_d.js";import"./DraggableList-C12I1HeH.js";import"./search-CsmvFGw5.js";import"./Input-BPNZHdpC.js";import"./useControlled-BjeqQkUk.js";import"./Button-Ca04rN16.js";import"./small-cross-D42sc0mE.js";import"./ActionButton-D564RM3o.js";import"./Checkbox-e6WyMAnA.js";import"./useValueChanged-BBJPtzLX.js";import"./CollapsiblePanel-Bny2eGkF.js";import"./MultiColumnSortDialog-5oW-7TXc.js";import"./MenuTrigger-BmNzF-3q.js";import"./CompositeItem-DMwkjAkb.js";import"./ToolbarRootContext-rYStqux1.js";import"./getDisabledMountTransitionStyles-ClgRaisB.js";import"./getPseudoElementBounds-CWn3civw.js";import"./chevron-down-B-w_aZMu.js";import"./index-dC_pSdIW.js";import"./error-1veqZu6X.js";import"./BaseCbacBanner-BuuVYiPd.js";import"./makeExternalStore-B0EaqGDc.js";import"./Tooltip-DJljNE8z.js";import"./PopoverPopup-DGBwl_YH.js";import"./debounce-D2BrHLFh.js";import"./useOsdkClient-BtLJAOm0.js";import"./tick-CoDkmvvi.js";import"./DropdownField-CbJ9aycC.js";import"./isEqual-HlCgqCCT.js";import"./withOsdkMetrics-5OCT_Jru.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
