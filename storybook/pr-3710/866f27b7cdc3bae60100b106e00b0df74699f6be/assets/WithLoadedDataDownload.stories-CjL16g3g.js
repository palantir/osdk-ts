import{f as b,j as a,r as i}from"./iframe-CO2vUFJD.js";import{O as u}from"./object-table-Ds0u1eY3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DpsnsEBy.js";import"./Table-Xs4hisSQ.js";import"./index-D4apVlTJ.js";import"./Dialog-C0MhshUa.js";import"./cross-CUeY1CjO.js";import"./svgIconContainer-DxakRBie.js";import"./useBaseUiId-DznybjsG.js";import"./InternalBackdrop-KBw-k9Vt.js";import"./composite-B8pYOTPV.js";import"./index-BgWdqboy.js";import"./index-BU4qgIJ_.js";import"./index-DQagJ0rJ.js";import"./useEventCallback-doBSO7ig.js";import"./SkeletonBar-nIsaUVmE.js";import"./LoadingCell-p0B9Wyq9.js";import"./ColumnConfigDialog-B7hiMn7Q.js";import"./DraggableList-xwjQWdpJ.js";import"./search-Drn2Bd1c.js";import"./Input-CuNl26f2.js";import"./useControlled-C1K7tXFP.js";import"./isEqual-BJsDSRo4.js";import"./isObject-Bm6LhXAR.js";import"./Button-DG5H8nKs.js";import"./ActionButton-BxBTvNLP.js";import"./Checkbox-gZ5ioWVR.js";import"./useValueChanged-6dXva1cI.js";import"./CollapsiblePanel-BStJw1to.js";import"./MultiColumnSortDialog-LC_2ec53.js";import"./MenuTrigger-B-BuRJtQ.js";import"./CompositeItem-DbfOLwvO.js";import"./ToolbarRootContext-BkyJSAiT.js";import"./getDisabledMountTransitionStyles-DhOAgz9K.js";import"./getPseudoElementBounds-kHqtrGtd.js";import"./chevron-down-Du10suNj.js";import"./index-CpfOOGos.js";import"./error-Ce2q8rJl.js";import"./BaseCbacBanner-DYdAn-vz.js";import"./makeExternalStore-ChIGs1GC.js";import"./Tooltip-DRIOmPe0.js";import"./PopoverPopup-SZIvrmwM.js";import"./toNumber-C8u6QsaL.js";import"./useOsdkClient-Bl3DVZNi.js";import"./tick-DVK-EIjv.js";import"./DropdownField-GM2MACnt.js";import"./withOsdkMetrics-D4cF1XVz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
