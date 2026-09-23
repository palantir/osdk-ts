import{f as b,j as a,r as i}from"./iframe-DkFy_hb4.js";import{O as u}from"./object-table-tqkgHWJN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BICWnFyb.js";import"./Table-Czo-rNx0.js";import"./index-CVhUa1cn.js";import"./Dialog-DFAX-dbI.js";import"./cross-BZRmfado.js";import"./svgIconContainer-Cc9-LdUz.js";import"./useBaseUiId-o_BwtbxA.js";import"./InternalBackdrop-BfAbsSH4.js";import"./composite-BGBfqcyM.js";import"./index-CYtpQu4o.js";import"./index-BKrHpELt.js";import"./index-D1Z2JBnZ.js";import"./useEventCallback-D8o005mn.js";import"./SkeletonBar-BavgYnmL.js";import"./LoadingCell-Cn0CPdwq.js";import"./ColumnConfigDialog-BaazBVOL.js";import"./DraggableList-DsgYclEh.js";import"./search-CLZw3WrP.js";import"./Input-NAoVb_RW.js";import"./useControlled-DzWKWqDT.js";import"./Button-CIX_sEiv.js";import"./small-cross-4XsWs7Rg.js";import"./ActionButton-DkdJBeiD.js";import"./Checkbox-F2U6phuX.js";import"./useValueChanged-DPBclZxi.js";import"./CollapsiblePanel-CRr1BQCY.js";import"./MultiColumnSortDialog-BVI-ddvy.js";import"./MenuTrigger-DBm0Zv4A.js";import"./CompositeItem-CdeIEk-d.js";import"./ToolbarRootContext-h2PUW2Ai.js";import"./getDisabledMountTransitionStyles-DcR5RtRw.js";import"./getPseudoElementBounds-D5PVShQs.js";import"./chevron-down-DpJL6cgz.js";import"./index-BdEt_Nen.js";import"./error-GJosWbv9.js";import"./BaseCbacBanner-Bhn381V6.js";import"./makeExternalStore-C1G5lVa7.js";import"./Tooltip-BVdzPxCH.js";import"./PopoverPopup-Bc8XtssV.js";import"./debounce-DrtMuAJj.js";import"./useOsdkClient-DL12bN9E.js";import"./tick-CIdK2AnH.js";import"./DropdownField-D35PrCn4.js";import"./isEqual-BCM93oB1.js";import"./withOsdkMetrics-BuzdoqQa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
