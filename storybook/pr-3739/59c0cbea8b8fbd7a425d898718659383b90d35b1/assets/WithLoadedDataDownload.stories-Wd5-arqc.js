import{f as b,j as a,r as i}from"./iframe-D_9TmTWV.js";import{O as u}from"./object-table-BH56hF0K.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DJH2govB.js";import"./Table-B68MTNrC.js";import"./index-CZmlMw1G.js";import"./Dialog-ovUcxfde.js";import"./cross-LTJbD_sI.js";import"./svgIconContainer-e2zn3xKA.js";import"./useBaseUiId-BDKr1Znm.js";import"./InternalBackdrop-CXbB8HCu.js";import"./composite-DvHiPVn1.js";import"./index-ilaZ_cq1.js";import"./index-Z3aTWHLe.js";import"./index-XIDOmxkt.js";import"./useEventCallback-CA02TTP5.js";import"./SkeletonBar-Kv4R8Wuu.js";import"./LoadingCell-C5sCVBRd.js";import"./ColumnConfigDialog-DU8PisTj.js";import"./DraggableList-dh32i-E0.js";import"./search-BiwpNc5U.js";import"./Input-BAv6Vl12.js";import"./useControlled-DS9eNVze.js";import"./isEqual-AkuwC8U-.js";import"./isObject-KAt_jdB7.js";import"./Button-Dubu6PwJ.js";import"./ActionButton-BI9cbJew.js";import"./Checkbox-DhaX5QKg.js";import"./useValueChanged-B6cvE1x9.js";import"./CollapsiblePanel-D9CQ9Mvu.js";import"./MultiColumnSortDialog-CrnJvSH7.js";import"./MenuTrigger-Bic_hcSB.js";import"./CompositeItem-CcExbvwI.js";import"./ToolbarRootContext-CNcIlT0m.js";import"./getDisabledMountTransitionStyles-Dbdb4VgA.js";import"./getPseudoElementBounds-9E9W5mWV.js";import"./chevron-down-BZXSDnra.js";import"./index-boWbyro0.js";import"./error-BMNLqSay.js";import"./BaseCbacBanner-Wf7NqT0e.js";import"./makeExternalStore-CnxWgFmk.js";import"./Tooltip-vrZDtlVf.js";import"./PopoverPopup-SCuH-Pti.js";import"./toNumber-C8lcaAqG.js";import"./useOsdkClient-DXp2jXVT.js";import"./tick-CUayK5we.js";import"./DropdownField-CU-01fvu.js";import"./withOsdkMetrics-DhbE-ALn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
