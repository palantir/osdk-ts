import{f as b,j as a,r as i}from"./iframe-DNEXoeer.js";import{O as u}from"./object-table-DlrANLZs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Jn8sG95d.js";import"./Table-DjWNPthp.js";import"./index-BEofSLlc.js";import"./Dialog-CyIu53Qu.js";import"./cross-DXjHMq23.js";import"./svgIconContainer-D3j8o7X8.js";import"./useBaseUiId-KYMCvl8Q.js";import"./InternalBackdrop-BOJopDhG.js";import"./composite-DBM_-mux.js";import"./index-DHqw5lp6.js";import"./index-CbvGK0GC.js";import"./index-DRng74gs.js";import"./useEventCallback-DGUuNK2j.js";import"./SkeletonBar-BB_InBwH.js";import"./LoadingCell-JnVHlUXD.js";import"./ColumnConfigDialog-DlpupgEa.js";import"./DraggableList-7kazfaXe.js";import"./search-C6tTsP5I.js";import"./Input-C_rLILSM.js";import"./useControlled-CrZ8m48H.js";import"./Button-DbE8yzwJ.js";import"./small-cross-DD6j7egF.js";import"./ActionButton-SeJtVlHK.js";import"./Checkbox-DPwJBjOg.js";import"./minus-DZ9hqfUK.js";import"./tick-BrVY_ywf.js";import"./useValueChanged-CnP_pmLh.js";import"./caret-down-DSZKMFhv.js";import"./CollapsiblePanel-XMzYnZjh.js";import"./MultiColumnSortDialog-CFDJ4rgw.js";import"./MenuTrigger-C-n9LlVB.js";import"./CompositeItem-Ddc2UdGN.js";import"./ToolbarRootContext-C2EqUJvX.js";import"./getDisabledMountTransitionStyles-Cj7xudUZ.js";import"./getPseudoElementBounds-Oj_rVv4V.js";import"./chevron-down-BaCTdFdO.js";import"./index-Do1-DySI.js";import"./error-CxUo4vYl.js";import"./BaseCbacBanner-Cw9oE7K0.js";import"./makeExternalStore-JUOQRF9X.js";import"./Tooltip-B0O9YIot.js";import"./PopoverPopup-B_uapGyU.js";import"./toNumber-AJyOgagw.js";import"./useOsdkClient-BS8NCi32.js";import"./DropdownField-MbEpWA_S.js";import"./withOsdkMetrics-Cd3UTLRz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
