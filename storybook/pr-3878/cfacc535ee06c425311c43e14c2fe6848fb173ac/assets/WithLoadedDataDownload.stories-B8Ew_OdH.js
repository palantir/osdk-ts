import{f as b,j as a,r as i}from"./iframe-DV_zKu2G.js";import{O as u}from"./object-table-By2q7_ys.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-NfN-SgeO.js";import"./Table-B31c6yHG.js";import"./index-Dg4pCXXs.js";import"./Dialog-CgYbS2_t.js";import"./cross-APJrfIvW.js";import"./svgIconContainer-kLwaY0s0.js";import"./useBaseUiId-B5XoADBe.js";import"./InternalBackdrop-Du_GPTcx.js";import"./composite-DcSj9RrZ.js";import"./index-Qh3Fcvsg.js";import"./index-CEG-DU55.js";import"./index-D_SsiIjb.js";import"./useEventCallback-BQBFJmB-.js";import"./SkeletonBar-quVsDzQk.js";import"./LoadingCell-DXEXK_0H.js";import"./ColumnConfigDialog-NVaQw0r8.js";import"./DraggableList-BMLxRLrQ.js";import"./search-DYE1hvQ2.js";import"./Input-DFXIqK_7.js";import"./useControlled-93X90FOH.js";import"./Button-BVbWdILw.js";import"./small-cross-DRu3YnII.js";import"./ActionButton-CSVekI6l.js";import"./Checkbox-C2cviow0.js";import"./useValueChanged-fRUG-rpo.js";import"./CollapsiblePanel-DqqKh1h2.js";import"./MultiColumnSortDialog-BJV9ndeu.js";import"./MenuTrigger-C6SNAPKX.js";import"./CompositeItem-CHs--B7N.js";import"./ToolbarRootContext-D3r4geEZ.js";import"./getDisabledMountTransitionStyles-AFz6B6Pn.js";import"./getPseudoElementBounds-jFSea8zF.js";import"./chevron-down-D7mWu-TA.js";import"./index-LNDJ7X8H.js";import"./error-DQ-loBpb.js";import"./BaseCbacBanner-B1BFj6EC.js";import"./makeExternalStore-CH15L2gT.js";import"./Tooltip-CqNia_Sj.js";import"./PopoverPopup-DRiAk7M2.js";import"./debounce-YrrW1v9C.js";import"./useOsdkClient-Tcdi_rac.js";import"./tick-DQhJP467.js";import"./DropdownField-BmgdesBZ.js";import"./isEqual-C8-mbT_W.js";import"./withOsdkMetrics-B6P3j5oP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
