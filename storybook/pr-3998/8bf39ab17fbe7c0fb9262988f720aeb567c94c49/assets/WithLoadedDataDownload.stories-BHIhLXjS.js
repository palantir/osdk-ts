import{f as b,j as a,r as i}from"./iframe-CCEjzOPC.js";import{O as u}from"./object-table-DZQs2MZ-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DImdHWFo.js";import"./Table-B3s4tqwg.js";import"./index-DgoUsAmK.js";import"./Dialog-iEMF0ksL.js";import"./cross-BGMsRd6B.js";import"./svgIconContainer-Coaz20-Z.js";import"./useBaseUiId-j3ufExoT.js";import"./InternalBackdrop-D3oUcg0G.js";import"./composite-C0q05pny.js";import"./index-BilPMlQA.js";import"./index-D9nMHWCp.js";import"./index-DFR7OMHV.js";import"./useEventCallback-C24S9g8A.js";import"./SkeletonBar-IG_FwzYT.js";import"./LoadingCell-CroxuggV.js";import"./ColumnConfigDialog-VHlRkSQk.js";import"./DraggableList-BwMCWSzT.js";import"./search-BPL1vhq_.js";import"./Input-CGqEOpN_.js";import"./useControlled-D5RejEGV.js";import"./Button-2G_ar31r.js";import"./small-cross-47kwWW4U.js";import"./ActionButton-iW7h5mCg.js";import"./Checkbox-DolXhSfQ.js";import"./useValueChanged-BqfQCkU5.js";import"./CollapsiblePanel-VY2LOFCf.js";import"./MultiColumnSortDialog-CrToGM7C.js";import"./MenuTrigger-8_vJ3anI.js";import"./CompositeItem-vBJlJ_jv.js";import"./ToolbarRootContext-CugNg6qm.js";import"./getDisabledMountTransitionStyles-CeC0WSMX.js";import"./getPseudoElementBounds-C4El7Kw5.js";import"./chevron-down-D9MyH17B.js";import"./index-D3oslL3x.js";import"./error-8gbxpDNd.js";import"./BaseCbacBanner-DMeAXQ6o.js";import"./makeExternalStore-CccFVbAZ.js";import"./Tooltip-_l0C6K9V.js";import"./PopoverPopup-BkHPuubJ.js";import"./debounce-pZlXkjc8.js";import"./useOsdkClient-CYh5mGXm.js";import"./tick-CfFnANAV.js";import"./DropdownField-BbmelQYl.js";import"./isEqual-BvaSJKFT.js";import"./withOsdkMetrics-D3mK_z9G.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
