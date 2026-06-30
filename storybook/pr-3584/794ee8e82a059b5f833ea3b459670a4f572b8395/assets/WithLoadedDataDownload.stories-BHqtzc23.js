import{f as b,j as a,r as i}from"./iframe-CJBaWBDv.js";import{O as u}from"./object-table-Dtr8ntrf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BWI1AJ3q.js";import"./Table-zpFTbFuH.js";import"./index-CMledsxy.js";import"./Dialog-DBKcyCmd.js";import"./cross-49LfIgF0.js";import"./svgIconContainer-BLorCNBT.js";import"./useBaseUiId-CoBsL_SE.js";import"./InternalBackdrop-BNacSiOS.js";import"./composite-BADN5REh.js";import"./index-C5e1qggc.js";import"./index-mtO4_tCj.js";import"./index-DNeP-dq5.js";import"./useEventCallback-BBcddvBe.js";import"./SkeletonBar-CZdmbEO1.js";import"./LoadingCell-RV7Z45DX.js";import"./ColumnConfigDialog-CknWk8Dl.js";import"./DraggableList-C6ZXpamz.js";import"./search-DjRbLZYR.js";import"./Input-hgK_yrrQ.js";import"./useControlled-OTZ1QGTe.js";import"./Button-C4T61Ci8.js";import"./small-cross-D9V9xmZD.js";import"./ActionButton-Bb_1E8iC.js";import"./Checkbox-B8GMsrtn.js";import"./minus-jEQVeEYW.js";import"./tick-B0cU4U32.js";import"./useValueChanged-DNx_b-Bs.js";import"./caret-down-Dxz7FsQm.js";import"./CollapsiblePanel-Civ_92E5.js";import"./MultiColumnSortDialog-CUBabrBs.js";import"./MenuTrigger-CZQ7sq_e.js";import"./CompositeItem-Ce5546Sm.js";import"./ToolbarRootContext-CaePn4Tj.js";import"./getDisabledMountTransitionStyles-BUI8zp0j.js";import"./getPseudoElementBounds-Cg2Feh6b.js";import"./chevron-down-RgggEZkL.js";import"./index-BSLfY8jl.js";import"./error-DSt-zVpr.js";import"./BaseCbacBanner-_A7EQZRm.js";import"./makeExternalStore-BOZIxHKI.js";import"./Tooltip-DfOMkdna.js";import"./PopoverPopup-BunQNOZr.js";import"./toNumber-D64YTzpk.js";import"./useOsdkClient-DJslRNmH.js";import"./DropdownField-ZpJBfFov.js";import"./withOsdkMetrics-C-E-7zTk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
