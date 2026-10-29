import{f as b,j as a,r as i}from"./iframe-wwmAnZJB.js";import{O as u}from"./object-table-WfEdAcTL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-OhSO-U7q.js";import"./Table-B47-qmGE.js";import"./index-CR7mf95j.js";import"./Dialog-Djubn6b-.js";import"./cross-8dD8CYIw.js";import"./svgIconContainer-BudxXKul.js";import"./useBaseUiId-BR51eynY.js";import"./InternalBackdrop-B07avgPb.js";import"./composite-DgNImKCX.js";import"./index-DnWxg9AP.js";import"./index-ChdMXjiA.js";import"./index-Ba8v5_Il.js";import"./useEventCallback-myO5jREQ.js";import"./SkeletonBar-C3Finl3J.js";import"./LoadingCell-CrDm8CF6.js";import"./ColumnConfigDialog-CI23r34i.js";import"./DraggableList-CVGgGi5S.js";import"./search-C8QAasXE.js";import"./Input-dfiNY8gr.js";import"./useControlled-BhrECPzc.js";import"./Button-EDCPExC6.js";import"./small-cross-CEF3WehI.js";import"./ActionButton-DLTjDWPY.js";import"./Checkbox-B7tHH0Ao.js";import"./useValueChanged-CiAOff-4.js";import"./CollapsiblePanel-D75kMcbo.js";import"./MultiColumnSortDialog-B3bdcqBk.js";import"./MenuTrigger-CI2iR_lA.js";import"./CompositeItem-CH57RHZb.js";import"./ToolbarRootContext-Cy5wkqrQ.js";import"./getDisabledMountTransitionStyles-BeoyF_jW.js";import"./getPseudoElementBounds-DVACdGGF.js";import"./chevron-down-wdzezIea.js";import"./index-DSCiiu0M.js";import"./error--BpoQgxv.js";import"./BaseCbacBanner-D-nKi_wL.js";import"./makeExternalStore-CkSN1CwB.js";import"./Tooltip-BPfOgsTX.js";import"./PopoverPopup-BazkAXod.js";import"./debounce-B-Pm_7Wq.js";import"./useOsdkClient-Dcf70dRQ.js";import"./tick-DenPhxuH.js";import"./DropdownField-z1o6ULkj.js";import"./isEqual-DW_EGqna.js";import"./withOsdkMetrics-C4BCCJj2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
