import{f as b,j as a,r as i}from"./iframe-zteb0Xyj.js";import{O as u}from"./object-table-B-s3dnDh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CnLc9qFN.js";import"./Table-DFBCVy3t.js";import"./index-dSjsE8RW.js";import"./Dialog-C0sZ1kmM.js";import"./cross-D1yyTTFq.js";import"./svgIconContainer-J10G18tu.js";import"./useBaseUiId-DlSM7y6E.js";import"./InternalBackdrop-yk22S0bW.js";import"./composite-B96iUAZi.js";import"./index-d7u9CeiR.js";import"./index-DDFyyXsy.js";import"./index-DNsswrem.js";import"./useEventCallback-CWHMd5ZO.js";import"./SkeletonBar-BluwBrg2.js";import"./LoadingCell-BNSOIrks.js";import"./ColumnConfigDialog-BzMQe6Hk.js";import"./DraggableList-tKOE2dJe.js";import"./Input-g3v5n7GW.js";import"./useControlled-BEA61zL3.js";import"./Button-BLu70Vo5.js";import"./small-cross-BKMb4d64.js";import"./ActionButton-CXdgvyeI.js";import"./Checkbox-Dd2II8YR.js";import"./minus-2kKXYvCz.js";import"./useValueChanged-Bl1vx3FC.js";import"./caret-down-CWgevMN4.js";import"./CollapsiblePanel-YluHbTR5.js";import"./MultiColumnSortDialog-BPnNBxfF.js";import"./MenuTrigger-BVgjtksF.js";import"./CompositeItem-C1poiRt6.js";import"./ToolbarRootContext-Bvbv37Tp.js";import"./getDisabledMountTransitionStyles-Clw85uYd.js";import"./getPseudoElementBounds-DKDEhIXf.js";import"./chevron-down-0GMk4d7M.js";import"./index-CNpyvC6R.js";import"./error-C4fzOD38.js";import"./BaseCbacBanner-BBIKTAES.js";import"./makeExternalStore-CZtlm_Df.js";import"./Tooltip-CO_lm3Gv.js";import"./PopoverPopup-9_PriITS.js";import"./toNumber-nM7NBtWX.js";import"./useOsdkClient-B8rgPq6Z.js";import"./DropdownField-CMmh8hB0.js";import"./withOsdkMetrics-CwI3g_U6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
