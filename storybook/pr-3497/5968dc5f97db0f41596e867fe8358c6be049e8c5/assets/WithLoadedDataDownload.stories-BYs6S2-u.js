import{f as b,j as a,r as i}from"./iframe-BnPm9-Gd.js";import{O as u}from"./object-table-9YPggX2F.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2q10Ncf.js";import"./Table-BhHnI49_.js";import"./index-C0XduHPg.js";import"./Dialog-BSNCF3JX.js";import"./cross-BbGenS0t.js";import"./svgIconContainer-sxMwXzPM.js";import"./useBaseUiId-BpbRJVfP.js";import"./InternalBackdrop-CJ9P_CwP.js";import"./composite-BTOpkBGU.js";import"./index-V93YaStg.js";import"./index-DOgEuVcV.js";import"./index-D6X-lUPI.js";import"./useEventCallback-gP4f0LNy.js";import"./SkeletonBar-BfphOXIE.js";import"./LoadingCell-B4usxFgt.js";import"./ColumnConfigDialog-B2LvBKsS.js";import"./DraggableList-Vr-MJJMt.js";import"./Input-BNViqxVq.js";import"./useControlled-r8Hxy60U.js";import"./Button-6aULWcpF.js";import"./small-cross-B1HFIKeW.js";import"./ActionButton-DIB2qPoL.js";import"./Checkbox-C5av-1-z.js";import"./minus-B4iqSxUI.js";import"./useValueChanged-DW53v8Fq.js";import"./caret-down-Clf6PcMw.js";import"./CollapsiblePanel-G50bgKUz.js";import"./MultiColumnSortDialog-D6C9n74u.js";import"./MenuTrigger-DNU25jly.js";import"./CompositeItem-DI9--lkY.js";import"./ToolbarRootContext-D6e1YCy8.js";import"./getDisabledMountTransitionStyles-Bd4Ux6T2.js";import"./getPseudoElementBounds-CnvXSFG7.js";import"./chevron-down-DWFWwlh2.js";import"./index-DO6QRDRK.js";import"./error-BejtHYXk.js";import"./BaseCbacBanner-DFl-fnWE.js";import"./makeExternalStore-CjqRv2MA.js";import"./Tooltip-GLqZOFZa.js";import"./PopoverPopup-70WHecQZ.js";import"./toNumber-CitvARP8.js";import"./useOsdkClient-BDzdDCAd.js";import"./DropdownField-BrhySjl7.js";import"./withOsdkMetrics-BYawk5Qf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
