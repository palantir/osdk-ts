import{f as b,j as a,r as i}from"./iframe-B9IeBNGg.js";import{O as u}from"./object-table-B-OlF3Bh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ClkC783W.js";import"./Table-BhJp9i_V.js";import"./index-DybWhixB.js";import"./Dialog-DLLScnHi.js";import"./cross-BHBvGy8S.js";import"./svgIconContainer-BmjXdC_z.js";import"./useBaseUiId-CH6EGP3F.js";import"./InternalBackdrop-gCLjnSXP.js";import"./composite-boJAotvg.js";import"./index-CnuXrNj3.js";import"./index-CJqGIAUW.js";import"./index-B4YI5UQN.js";import"./useEventCallback-DbN_DqZs.js";import"./SkeletonBar-C48ZenHQ.js";import"./LoadingCell-CkzG3KX2.js";import"./ColumnConfigDialog-CGw8n6lE.js";import"./DraggableList-BGcE6c7Y.js";import"./search-Deq1gtA1.js";import"./Input-Iq2bz4Jn.js";import"./useControlled-DKviyNQT.js";import"./Button-CoXfleKP.js";import"./small-cross-DIgXmNYJ.js";import"./ActionButton-f-P6g5hs.js";import"./Checkbox-CNcu3hUs.js";import"./useValueChanged-DEPR-2Hx.js";import"./CollapsiblePanel-B5ry5wH_.js";import"./MultiColumnSortDialog-D7NcH3DD.js";import"./MenuTrigger-pRjMlzuQ.js";import"./CompositeItem-c0dv1mNX.js";import"./ToolbarRootContext-B71dHQV4.js";import"./getDisabledMountTransitionStyles-DCV7TnnH.js";import"./getPseudoElementBounds-DpZ43xVJ.js";import"./chevron-down-CKtjlwoI.js";import"./index-DD1785H2.js";import"./error-Cg3e0-pZ.js";import"./BaseCbacBanner-DrIp1n_M.js";import"./makeExternalStore-B8vFN8aQ.js";import"./Tooltip-BogKNoc8.js";import"./PopoverPopup-Cyw_X9pn.js";import"./debounce-DavaxxZS.js";import"./useOsdkClient-CSJF8avV.js";import"./tick-Dbw2_oO_.js";import"./DropdownField-DXf__6c2.js";import"./isEqual-BGhR7l0w.js";import"./withOsdkMetrics-C0Di3XLY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
