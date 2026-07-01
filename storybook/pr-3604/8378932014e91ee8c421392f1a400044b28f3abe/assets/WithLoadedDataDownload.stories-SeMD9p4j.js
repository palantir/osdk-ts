import{f as b,j as a,r as i}from"./iframe-DJLCfr4f.js";import{O as u}from"./object-table-DWE0ewNP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DpagtCf2.js";import"./Table-BqRYEAnU.js";import"./index-D4IE3gNI.js";import"./Dialog-DqVFniHM.js";import"./cross-BxHgtQzu.js";import"./svgIconContainer-RYJm0FsG.js";import"./useBaseUiId-mPnrHgef.js";import"./InternalBackdrop-w6yJm_XK.js";import"./composite-WH4q331F.js";import"./index-Bi6UFZeo.js";import"./index-B9j4W-bs.js";import"./index-BkDZ3uou.js";import"./useEventCallback-CeiGPcLo.js";import"./SkeletonBar-XMLipmdc.js";import"./LoadingCell-tWumEk4H.js";import"./ColumnConfigDialog-C1n0Kil6.js";import"./DraggableList-CM1_kd8U.js";import"./search-Cuy61ubn.js";import"./Input-BGq0Lo3d.js";import"./useControlled-BYFtKtxD.js";import"./Button-C4cfPyjV.js";import"./small-cross-CPLgGFhr.js";import"./ActionButton-CsOf1rhz.js";import"./Checkbox-C3_3E7l4.js";import"./minus-rc1h5CgO.js";import"./tick-BPFArNJC.js";import"./useValueChanged-D-bvF7b5.js";import"./caret-down-63AqjceN.js";import"./CollapsiblePanel-CIts1qZB.js";import"./MultiColumnSortDialog-DOmVpXzF.js";import"./MenuTrigger-CER7BqoT.js";import"./CompositeItem-RoymjbRG.js";import"./ToolbarRootContext-Pl6BjqXh.js";import"./getDisabledMountTransitionStyles-DW6HEoz6.js";import"./getPseudoElementBounds-D3gr2No4.js";import"./chevron-down-BCTFTdUl.js";import"./index-IP7NxQqP.js";import"./error-Ci8d6I91.js";import"./BaseCbacBanner-B5NFfZtp.js";import"./makeExternalStore-5qNfikfb.js";import"./Tooltip-CRcpwnbh.js";import"./PopoverPopup-BYG9acpc.js";import"./toNumber-DQ5HVbip.js";import"./useOsdkClient-BKqb6fak.js";import"./DropdownField-DyK0KsbA.js";import"./withOsdkMetrics-D22DKovY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
