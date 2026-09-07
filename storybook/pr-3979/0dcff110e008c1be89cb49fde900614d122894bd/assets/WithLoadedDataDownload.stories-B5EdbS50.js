import{f as b,j as a,r as i}from"./iframe-vkoUEtx2.js";import{O as u}from"./object-table-D9bcFwrc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CY67mq_z.js";import"./Table-srNtWwan.js";import"./index-CnABB2cx.js";import"./Dialog-CFGI2PWi.js";import"./cross-DTB4NCzU.js";import"./svgIconContainer-CTvbg6Kf.js";import"./useBaseUiId-Cn9qEQr-.js";import"./InternalBackdrop-DvtCmbub.js";import"./composite-CNJa8zsy.js";import"./index-Cg_Ca4SJ.js";import"./index-CTa-81VF.js";import"./index-BzU6qHej.js";import"./useEventCallback-CxBnJXYy.js";import"./SkeletonBar-r9iUkffY.js";import"./LoadingCell-B6F1Eu1_.js";import"./ColumnConfigDialog-DTtwDBeO.js";import"./DraggableList-CvZhWeAl.js";import"./search-BJuRvFPW.js";import"./Input-DILwrgB_.js";import"./useControlled-BjJao8Of.js";import"./Button-yBKPIwwM.js";import"./small-cross-CEVVBQcQ.js";import"./ActionButton-DC04mOud.js";import"./Checkbox-C_r46pP6.js";import"./useValueChanged-BU9oYbVe.js";import"./CollapsiblePanel-DCq2pf_O.js";import"./MultiColumnSortDialog-BBluglFz.js";import"./MenuTrigger-CnwTa3Dw.js";import"./CompositeItem-B2YXnViz.js";import"./ToolbarRootContext-DG-oSyQ3.js";import"./getDisabledMountTransitionStyles-t_o23Sl1.js";import"./getPseudoElementBounds-DQfoju0G.js";import"./chevron-down-B0GhQ5QL.js";import"./index-CkB6dCmi.js";import"./error-WzD0MOfh.js";import"./BaseCbacBanner-DTwYXkXJ.js";import"./makeExternalStore-BZrOFzyq.js";import"./Tooltip-BP2G_ScW.js";import"./PopoverPopup-DmfHqgAT.js";import"./debounce-B3rNx3B-.js";import"./useOsdkClient-1czjWT3K.js";import"./tick-OUtJmbiv.js";import"./DropdownField-B5znI0v8.js";import"./isEqual-Ca1oPQqE.js";import"./withOsdkMetrics-1oalfrhO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
