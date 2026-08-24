import{f as b,j as a,r as i}from"./iframe-K2lL5yZa.js";import{O as u}from"./object-table-CS1bFxKA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-zTJR2VVu.js";import"./Table-OcecaMIa.js";import"./index-DG2QGQKO.js";import"./Dialog-_JApRq-4.js";import"./cross-BBzA-0FD.js";import"./svgIconContainer-LFdnXjkf.js";import"./useBaseUiId-6Oj8SlmF.js";import"./InternalBackdrop-CNYY8FxI.js";import"./composite-D2OvudN1.js";import"./index-DGaoMYYr.js";import"./index-DKnEAJke.js";import"./index-CRubwX-j.js";import"./useEventCallback-ChYCPbxs.js";import"./SkeletonBar-BK3M9MUf.js";import"./LoadingCell-CXbDE-rI.js";import"./ColumnConfigDialog-Bcg9LH1d.js";import"./DraggableList-DfG1W5nU.js";import"./search-uSNLpV_J.js";import"./Input-BCT2mqmz.js";import"./useControlled-BRKOM8iX.js";import"./Button-CMzjLHfg.js";import"./small-cross-DCCFeUk7.js";import"./ActionButton-C3BoQLQ_.js";import"./Checkbox-m7qFNS7J.js";import"./useValueChanged-Bv0S7zcp.js";import"./CollapsiblePanel-CcF9UvWu.js";import"./MultiColumnSortDialog-DsR5yjvH.js";import"./MenuTrigger-D5We7Y0z.js";import"./CompositeItem-QpacyHa1.js";import"./ToolbarRootContext-BNVauRMC.js";import"./getDisabledMountTransitionStyles-Bv2gYzkX.js";import"./getPseudoElementBounds-exFm21_L.js";import"./chevron-down-Ci68Jmqo.js";import"./index-CA4RuaSb.js";import"./error-CKG1y6S7.js";import"./BaseCbacBanner--6koxanl.js";import"./makeExternalStore-CHsvXMvU.js";import"./Tooltip-BG2GxZtn.js";import"./PopoverPopup-Bsp9DcIy.js";import"./debounce-BdkAtH3B.js";import"./useOsdkClient-rjGhEEeG.js";import"./tick-DbTSlkSl.js";import"./DropdownField-jrsNcXWF.js";import"./isEqual-CWNNtG3w.js";import"./withOsdkMetrics-BBCl75ZX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
