import{f as b,j as a,r as i}from"./iframe-B79O0zQM.js";import{O as u}from"./object-table-BKNRS19X.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CIltFqCT.js";import"./Table-fLBNb_BP.js";import"./index-C8kSIInM.js";import"./Dialog-o1jLEeIp.js";import"./cross-DYKMH4xO.js";import"./svgIconContainer-DFCRIRXc.js";import"./useBaseUiId-L1IQaSOP.js";import"./InternalBackdrop-CpkhdwJJ.js";import"./composite-GAmqbSry.js";import"./index-38KKGp5R.js";import"./index-8YydoI3z.js";import"./index-Df9A7Mki.js";import"./useEventCallback-GQnwBCIk.js";import"./SkeletonBar-CILrBBTD.js";import"./LoadingCell-DO8Qx1-H.js";import"./ColumnConfigDialog-CWtGk5R3.js";import"./DraggableList-IOynlALw.js";import"./search-C9Dzl56b.js";import"./Input-PA5UMAtE.js";import"./useControlled-CWgBrla5.js";import"./Button-GfazOTZQ.js";import"./small-cross-npbc2L4O.js";import"./ActionButton-B1JhaImu.js";import"./Checkbox-DB1cwaK7.js";import"./minus-Z-kdTU-R.js";import"./tick-rALId09J.js";import"./useValueChanged-Dk8tU2Zt.js";import"./caret-down-BCbo1qcr.js";import"./CollapsiblePanel-Cj5uI6BJ.js";import"./MultiColumnSortDialog-Ck-xla7X.js";import"./MenuTrigger-C0HyfFeu.js";import"./CompositeItem-C89j8GKI.js";import"./ToolbarRootContext-CkobNPuH.js";import"./getDisabledMountTransitionStyles-Bjhaxc0S.js";import"./getPseudoElementBounds-D8duLDqQ.js";import"./chevron-down-EZ8DL_uu.js";import"./index-ejK9oAwW.js";import"./error-CmvVGGaw.js";import"./BaseCbacBanner-DJ9ETbSi.js";import"./makeExternalStore-BOYhineC.js";import"./Tooltip-zQBJoOLd.js";import"./PopoverPopup-BrTMObmi.js";import"./toNumber-DYk5cYaG.js";import"./useOsdkClient-CzgSqcm0.js";import"./DropdownField-zZucnEaT.js";import"./withOsdkMetrics-CdyoixQI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
