import{f as b,j as a,r as i}from"./iframe-DgoyKrMA.js";import{O as u}from"./object-table-BDJxGvfg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0nQfTcI.js";import"./Table-CXf24iHv.js";import"./index-AaUdncAY.js";import"./Dialog-BGiBKybc.js";import"./cross-DJcC46zn.js";import"./svgIconContainer-CjREsQum.js";import"./useBaseUiId-DuSsdC-V.js";import"./InternalBackdrop-CAgPM9rt.js";import"./composite-B2UAnxY_.js";import"./index-ClrSkKoK.js";import"./index-ivmBoQou.js";import"./index-C_TDW3lj.js";import"./useEventCallback-BPcrC7A7.js";import"./SkeletonBar-C7CmUyLZ.js";import"./LoadingCell-4jIfMe8M.js";import"./ColumnConfigDialog-BZd964CI.js";import"./DraggableList-Dlg3apg8.js";import"./search-DV7KFLuZ.js";import"./Input-BwILyUm2.js";import"./useControlled-Bf5Je3fS.js";import"./Button-CnrRhfIU.js";import"./small-cross-mRUAKOcb.js";import"./ActionButton-DUb0z2uJ.js";import"./Checkbox-CnGtQ0Yp.js";import"./minus-CI3B_Ta0.js";import"./tick-Be2gOV7a.js";import"./useValueChanged-DvcJooWB.js";import"./caret-down-DodzsHMt.js";import"./CollapsiblePanel-BkY_AT-k.js";import"./MultiColumnSortDialog-DNZgvh0T.js";import"./MenuTrigger-CGODXcVC.js";import"./CompositeItem-Cr2thBXg.js";import"./ToolbarRootContext-B2lXsL_Q.js";import"./getDisabledMountTransitionStyles-9w8FYi46.js";import"./getPseudoElementBounds-C8ZTNg2L.js";import"./chevron-down-DPt7J5eG.js";import"./index-BgnwFznl.js";import"./error-B4hvPJmm.js";import"./BaseCbacBanner-DnPAK7r3.js";import"./makeExternalStore-B2cgo-7D.js";import"./Tooltip-sUU9tFGQ.js";import"./PopoverPopup-BU1U6qD_.js";import"./toNumber-BWsXTX5n.js";import"./useOsdkClient-pfbNNRty.js";import"./DropdownField-Ii77R6H-.js";import"./withOsdkMetrics-JOv1iZ_z.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
