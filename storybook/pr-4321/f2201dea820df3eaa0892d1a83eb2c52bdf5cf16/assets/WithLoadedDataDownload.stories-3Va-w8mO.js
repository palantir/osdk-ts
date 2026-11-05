import{f as b,j as a,r as i}from"./iframe-D7WyLq_R.js";import{O as u}from"./object-table-jRD1_Lko.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BqfBxCjy.js";import"./Table-BamzqaoI.js";import"./index-HyeIDcrc.js";import"./Dialog-Ccerh4bb.js";import"./cross-uvcs2Wcl.js";import"./svgIconContainer-B4x4BdHn.js";import"./useBaseUiId-CG-SGXYP.js";import"./InternalBackdrop-7rlgucId.js";import"./composite-D_DTOoGQ.js";import"./index-ufR6xdAx.js";import"./index-D2fZUIcR.js";import"./index-eSq-wOtL.js";import"./useEventCallback-BReO6q8q.js";import"./SkeletonBar-Be2VldqA.js";import"./LoadingCell-BsVuTR_T.js";import"./ColumnConfigDialog-Q7laFexQ.js";import"./DraggableList-Cay8cu3c.js";import"./search-s_J2wlUd.js";import"./Input-C4gz0NfF.js";import"./useControlled-Bb8KRWad.js";import"./Button-BE_yPzwR.js";import"./small-cross-B4qCwIBh.js";import"./ActionButton-BuFs1EiV.js";import"./Checkbox-DcJs6uB9.js";import"./useValueChanged-BSHUSrlL.js";import"./CollapsiblePanel-H-RuyrJq.js";import"./MultiColumnSortDialog-4e12ji_e.js";import"./MenuTrigger-Ca94hyEY.js";import"./CompositeItem-ZpmtOb_M.js";import"./ToolbarRootContext-Fnt7cK66.js";import"./getDisabledMountTransitionStyles-DFqI_LNP.js";import"./getPseudoElementBounds-OQu2StyZ.js";import"./chevron-down-CUo9ik68.js";import"./index-CJGKKiqL.js";import"./error-D2VV45CC.js";import"./BaseCbacBanner-D9RQiU4n.js";import"./makeExternalStore-DcukOp_j.js";import"./Tooltip-ColuuQlO.js";import"./isObject-CDlc3nuf.js";import"./debounce-CJeHPCAd.js";import"./useOsdkClient-Ci5CHzsk.js";import"./tick-Dc3ISC5j.js";import"./DropdownField-BcUtsHzO.js";import"./isEqual-Cog-R91C.js";import"./_baseIsEqual-DcLozDln.js";import"./withOsdkMetrics-BvKbLnrg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
