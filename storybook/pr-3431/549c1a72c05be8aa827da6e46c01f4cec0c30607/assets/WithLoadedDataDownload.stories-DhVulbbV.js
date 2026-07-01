import{f as b,j as a,r as i}from"./iframe-DeFq8xVt.js";import{O as u}from"./object-table-BjKxXunm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-qE7M0Jph.js";import"./Table-U4q4MMPB.js";import"./index-CxNk4N3G.js";import"./Dialog-Bh07qdaz.js";import"./cross-U8KTamE2.js";import"./svgIconContainer-NOs2N9t1.js";import"./useBaseUiId-BDFv1AMj.js";import"./InternalBackdrop-C2F8oLbD.js";import"./composite-ppkh12Xh.js";import"./index--NZB9FY9.js";import"./index-qG_NBeKa.js";import"./index-BSsnlKpl.js";import"./useEventCallback-BwYvblpt.js";import"./SkeletonBar-DLsDfCIU.js";import"./LoadingCell-BNaCGNvO.js";import"./ColumnConfigDialog-2Fv_Fm3Z.js";import"./DraggableList-BUG3jT7E.js";import"./search-may_KwwY.js";import"./Input-4EtxsvK1.js";import"./useControlled-D4KpmZuV.js";import"./Button-04vppXE8.js";import"./small-cross-Sqaz4rZa.js";import"./ActionButton-DcK2WxCS.js";import"./Checkbox-Cs0c3_Hs.js";import"./minus-BoPEy0v7.js";import"./tick-C5ap2FTU.js";import"./useValueChanged-BVD9epe_.js";import"./caret-down-Bv4RNKFW.js";import"./CollapsiblePanel-BK2RejY-.js";import"./MultiColumnSortDialog-iGRfPq_0.js";import"./MenuTrigger-DrBVa2sy.js";import"./CompositeItem-BI0A4Jwy.js";import"./ToolbarRootContext-f6GbPpr4.js";import"./getDisabledMountTransitionStyles-C_r0GNbH.js";import"./getPseudoElementBounds-CfxOTngJ.js";import"./chevron-down-ELF_b8CA.js";import"./index-BXP9TVeZ.js";import"./error-CYpFXaDV.js";import"./BaseCbacBanner-CM64zra1.js";import"./makeExternalStore-D5nWCiLU.js";import"./Tooltip-DuUSL_Z3.js";import"./PopoverPopup-Dg0c0FiI.js";import"./toNumber-BlaQaKb7.js";import"./useOsdkClient-qIDXaSfc.js";import"./DropdownField-4JmmbWk1.js";import"./withOsdkMetrics-rjMIBJ3W.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
