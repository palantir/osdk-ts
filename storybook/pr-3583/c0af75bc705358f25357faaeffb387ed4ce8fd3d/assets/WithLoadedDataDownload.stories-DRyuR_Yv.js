import{f as b,j as a,r as i}from"./iframe-B_sNEAoD.js";import{O as u}from"./object-table-JtqAozY5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D4w3BnHq.js";import"./Table-7sJ3b4k4.js";import"./index-Boi3yEsI.js";import"./Dialog-BOSXeufz.js";import"./cross-CNm-11LQ.js";import"./svgIconContainer-C33xHrgH.js";import"./useBaseUiId-sroOZ_HI.js";import"./InternalBackdrop-CDkKhgRm.js";import"./composite-CVNBfdPF.js";import"./index-D9sBx7SB.js";import"./index-SbkiAc5f.js";import"./index-eh1otGm1.js";import"./useEventCallback-BayWJCPD.js";import"./SkeletonBar-ztjOiJaC.js";import"./LoadingCell-Yqe4Nwgh.js";import"./ColumnConfigDialog-Dt3Dd90I.js";import"./DraggableList-CLd7JuXj.js";import"./search-DH6_rBgy.js";import"./Input-CXVnOTc2.js";import"./useControlled-DPIbQqn6.js";import"./Button-DcOn_dM0.js";import"./small-cross-BPdFfJ16.js";import"./ActionButton-BfDUNyJy.js";import"./Checkbox-DSMCczXO.js";import"./minus-Cuki4ueG.js";import"./tick-s8NLRhbg.js";import"./useValueChanged-DvckMFHu.js";import"./caret-down-BlO4iYKN.js";import"./CollapsiblePanel-Dl2v7Zaf.js";import"./MultiColumnSortDialog-GWO_PYIb.js";import"./MenuTrigger-WuyKFSEu.js";import"./CompositeItem-BeNd1EcZ.js";import"./ToolbarRootContext-C_Wh8Bm0.js";import"./getDisabledMountTransitionStyles-BiighB_e.js";import"./getPseudoElementBounds-BPyvZZ25.js";import"./chevron-down-De0mGeAX.js";import"./index-CSupOoj1.js";import"./error-B3EqSWGF.js";import"./BaseCbacBanner-DnxH874C.js";import"./makeExternalStore-DMHblOlq.js";import"./Tooltip-64eYTJZI.js";import"./PopoverPopup-DmafoOpZ.js";import"./toNumber-CNZwgXtt.js";import"./useOsdkClient-Bkgpx5aG.js";import"./DropdownField-oMuWeY6q.js";import"./withOsdkMetrics-BCikKbnS.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
