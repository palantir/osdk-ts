import{f as b,j as a,r as i}from"./iframe-BXMaRU6d.js";import{O as u}from"./object-table-DZwAmuc0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-m1fl9yzx.js";import"./Table-hCJx8EAj.js";import"./index-D34UCeFi.js";import"./Dialog-DyZjmmlP.js";import"./cross-MZH7NFlC.js";import"./svgIconContainer-M8lsqLmU.js";import"./useBaseUiId-CnVJ9pTQ.js";import"./InternalBackdrop-Cr2zqXSQ.js";import"./composite-CTlCsHkl.js";import"./index-C36yrfOW.js";import"./index-BtCN2h1R.js";import"./index-Cy-78AF4.js";import"./useEventCallback-Rp-dYNNH.js";import"./SkeletonBar-Bq1t_P3v.js";import"./LoadingCell-4BCksriU.js";import"./ColumnConfigDialog-B6uFBm9n.js";import"./DraggableList-NCX9u6Mi.js";import"./search-B6DdGciv.js";import"./Input-B62f65LS.js";import"./useControlled-CqKbYNY-.js";import"./Button-DtbuXO0-.js";import"./small-cross-DKwt6Bqu.js";import"./ActionButton-CE9KfMfn.js";import"./Checkbox-B0Dt0FcT.js";import"./useValueChanged-CcVyEc1Q.js";import"./CollapsiblePanel-D3ddVpva.js";import"./MultiColumnSortDialog-DdD2HwOZ.js";import"./MenuTrigger-D0vPsvrL.js";import"./CompositeItem-CxCbcCcw.js";import"./ToolbarRootContext-01ULS3om.js";import"./getDisabledMountTransitionStyles-BvsTv5-I.js";import"./getPseudoElementBounds-ChoJiaDP.js";import"./chevron-down-ByBb-_AI.js";import"./index-CLYhKnEi.js";import"./error-DqaLhFsi.js";import"./BaseCbacBanner-f48-IYcu.js";import"./makeExternalStore-DZLA8zoV.js";import"./Tooltip-Bn2GpGak.js";import"./PopoverPopup-mvEM4RXX.js";import"./debounce-Cu2khlmU.js";import"./useOsdkClient-D2KP4OFp.js";import"./tick-D0-iauHd.js";import"./DropdownField-lw-NWBQn.js";import"./isEqual-BvAueMPn.js";import"./withOsdkMetrics-DErkFYVR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
