import{f as b,j as a,r as i}from"./iframe-HkADxMgA.js";import{O as u}from"./object-table-BPD1qlMS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DTtqGHxT.js";import"./Table-BBDxoEZg.js";import"./index-DUW8wRrQ.js";import"./Dialog-C1cC5oO0.js";import"./cross-BJLKHlwA.js";import"./svgIconContainer-uqcLMh9h.js";import"./useBaseUiId-B28qMeqB.js";import"./InternalBackdrop-KSJdc-Eh.js";import"./composite-Bshgoqdb.js";import"./index-_47i1T5T.js";import"./index-CCQw_l8A.js";import"./index-D4OnPD6V.js";import"./useEventCallback-BT13A2s8.js";import"./SkeletonBar-BR_z_H5s.js";import"./LoadingCell-CXRScZCO.js";import"./ColumnConfigDialog-CIM34A1V.js";import"./DraggableList-BFgNNJKw.js";import"./search-oee3a-xy.js";import"./Input-CdSqdp7n.js";import"./useControlled-0FKUHHKR.js";import"./Button-DXksPsq1.js";import"./small-cross-DtnBRH_a.js";import"./ActionButton-DFp4Eahm.js";import"./Checkbox-CdSHxSSr.js";import"./useValueChanged-CLKZqZ1n.js";import"./CollapsiblePanel-yZRRBOeb.js";import"./MultiColumnSortDialog-DrYKmP3m.js";import"./MenuTrigger-B0q9NtM8.js";import"./CompositeItem-DIBhAm7K.js";import"./ToolbarRootContext-B2D7jBHZ.js";import"./getDisabledMountTransitionStyles-D_z8sWSZ.js";import"./getPseudoElementBounds-CV6q-bAI.js";import"./chevron-down-7aN-gdcZ.js";import"./index-AGvrmZqA.js";import"./error-WFtpCqwH.js";import"./BaseCbacBanner-MiPOlZwj.js";import"./makeExternalStore-XFQAED1_.js";import"./Tooltip-6u6XECjM.js";import"./PopoverPopup-C8dD0wlV.js";import"./toNumber-CFUI-sBy.js";import"./useOsdkClient-BUObA5LC.js";import"./tick-zwZIIcdN.js";import"./DropdownField-DV-Des1S.js";import"./withOsdkMetrics-CS878clc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
