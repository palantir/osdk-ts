import{f as b,j as a,r as i}from"./iframe-DSDYvTEX.js";import{O as u}from"./object-table-BnOmDcq-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dr6u7rGJ.js";import"./Table-BBKBsQ4e.js";import"./index-CKBHXcQb.js";import"./Dialog-BFkwReCX.js";import"./cross-BHX4p4QC.js";import"./svgIconContainer-CaL_zwWx.js";import"./useBaseUiId-DgVrhwJn.js";import"./InternalBackdrop-DsUSwo6z.js";import"./composite-Cns0lU92.js";import"./index-CkZ5yLcI.js";import"./index-Dp3mJjdf.js";import"./index-CbVih8Xc.js";import"./useEventCallback-Do7-MM-C.js";import"./SkeletonBar-Dn2iyACH.js";import"./LoadingCell-Cgq1Qha7.js";import"./ColumnConfigDialog-BwuIH7Xk.js";import"./DraggableList-BuPM5nmb.js";import"./search-BFWUu_nA.js";import"./Input-Bmt5Hqa7.js";import"./useControlled-ChBRLApg.js";import"./Button-DF7htwnw.js";import"./small-cross-CNu6ifc6.js";import"./ActionButton-B2lFEozr.js";import"./Checkbox-CjABcjG5.js";import"./useValueChanged-hyo9I-Tu.js";import"./CollapsiblePanel-ChFN48eA.js";import"./MultiColumnSortDialog-CQcjuZQe.js";import"./MenuTrigger-BVBmjPCL.js";import"./CompositeItem-CPTPSi2t.js";import"./ToolbarRootContext-qq8GKlHZ.js";import"./getDisabledMountTransitionStyles-yZFG9QuB.js";import"./getPseudoElementBounds-C3Y6BrcR.js";import"./chevron-down-GVx5IIZz.js";import"./index-DpFZVn8R.js";import"./error-BFJ5FkdZ.js";import"./BaseCbacBanner-DRmsws5V.js";import"./makeExternalStore-C15fAnYJ.js";import"./Tooltip-B5FiPEuP.js";import"./PopoverPopup-CgxRKoHm.js";import"./toNumber-C_VYNVcM.js";import"./useOsdkClient-BJFOClZL.js";import"./tick-Bi-S_VeZ.js";import"./DropdownField-BLxC9rnj.js";import"./withOsdkMetrics-B6_36Jqy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
