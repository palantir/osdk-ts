import{f as b,j as a,r as i}from"./iframe-BOL4lmQu.js";import{O as u}from"./object-table-CMQSXq2e.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CF5y6P51.js";import"./Table-C-Ja_1RN.js";import"./index-BlfYN_kO.js";import"./Dialog-C58LhjQg.js";import"./cross-C9_cN1cS.js";import"./svgIconContainer-FVhL1hCA.js";import"./useBaseUiId-BpGNe3Eg.js";import"./InternalBackdrop-LCz3M4jq.js";import"./composite-BV3ZD4mr.js";import"./index-CmApk3zh.js";import"./index-DP_XR25E.js";import"./index-DBaqiByX.js";import"./useEventCallback-ifDqPOAF.js";import"./SkeletonBar-BNX5gidE.js";import"./LoadingCell-C0eef9LR.js";import"./ColumnConfigDialog-BEJRup2O.js";import"./DraggableList-BHlopOab.js";import"./search-Cv260GLX.js";import"./Input-CujqDLfg.js";import"./useControlled-1K3KKLgI.js";import"./Button-BQpmuek9.js";import"./small-cross-B0XRPY8R.js";import"./ActionButton-BSJylTXK.js";import"./Checkbox-DbzFPQcL.js";import"./useValueChanged-D-6eFv97.js";import"./CollapsiblePanel-ClIQPlSc.js";import"./MultiColumnSortDialog-Cp5dcT-Y.js";import"./MenuTrigger-DECqK-MD.js";import"./CompositeItem-D7t72lc9.js";import"./ToolbarRootContext-DYZSmWFR.js";import"./getDisabledMountTransitionStyles-CMRhZxrC.js";import"./getPseudoElementBounds-Td3ZX14H.js";import"./chevron-down-wPhaZYI3.js";import"./index-DagXr3NH.js";import"./error-DWdKle1J.js";import"./BaseCbacBanner-DZWHxj7c.js";import"./makeExternalStore-BaKwuUE-.js";import"./Tooltip-ipzaDerj.js";import"./PopoverPopup-QDwqPc_0.js";import"./debounce-C7TgZToh.js";import"./useOsdkClient-CMRz05mU.js";import"./tick-C5Qp1iIQ.js";import"./DropdownField-B0yO1meX.js";import"./isEqual-D1nl7lv3.js";import"./withOsdkMetrics-D8Pyw_HQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
