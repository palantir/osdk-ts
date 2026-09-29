import{f as b,j as a,r as i}from"./iframe-l_8eBvr6.js";import{O as u}from"./object-table-CaxH4GVl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CWo-haOY.js";import"./Table-DoYXsy_p.js";import"./index-pTEOeQs1.js";import"./Dialog-D5uirT7r.js";import"./cross-AIldtqcf.js";import"./svgIconContainer-BE3MMvAi.js";import"./useBaseUiId-GR3xcgzw.js";import"./InternalBackdrop-BwRQmd5J.js";import"./composite-DKO9W0st.js";import"./index-rFITWboZ.js";import"./index-CsnFWtbo.js";import"./index-BbfTT1Q9.js";import"./useEventCallback-DAeskcdy.js";import"./SkeletonBar-CDf6uP_r.js";import"./LoadingCell-Dvw-Ylel.js";import"./ColumnConfigDialog-BxJ9KUuv.js";import"./DraggableList-C2YkM-if.js";import"./search-53j1pAYR.js";import"./Input-b3HEdj9w.js";import"./useControlled-_ZKeS4Zg.js";import"./Button-D_UBsIlq.js";import"./small-cross-eWReh8kV.js";import"./ActionButton-DyHiHAz9.js";import"./Checkbox-BA2kB2zz.js";import"./useValueChanged-Dh9MsvOa.js";import"./CollapsiblePanel-YVCjpYyB.js";import"./MultiColumnSortDialog-BiDCU8at.js";import"./MenuTrigger-Doj1fSEU.js";import"./CompositeItem-DVcnG8tP.js";import"./ToolbarRootContext-D8m03rR2.js";import"./getDisabledMountTransitionStyles-Bv0Oi4hK.js";import"./getPseudoElementBounds-C0cGWyvs.js";import"./chevron-down-Dr_zm-jW.js";import"./index-CTOamDEC.js";import"./error-BjQYuyH5.js";import"./BaseCbacBanner-B6hZVpGP.js";import"./makeExternalStore-DEwbFKap.js";import"./Tooltip-CyHw9hKc.js";import"./PopoverPopup-D63UO-5k.js";import"./debounce-DGMy8DlN.js";import"./useOsdkClient-k3QwwWy-.js";import"./tick-BfV32k5E.js";import"./DropdownField-BsI2YIfo.js";import"./isEqual-CQ3ooCqh.js";import"./withOsdkMetrics-C36UZcw9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
