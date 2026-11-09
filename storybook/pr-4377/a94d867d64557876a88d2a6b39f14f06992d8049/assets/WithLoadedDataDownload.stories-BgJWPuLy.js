import{f as b,j as a,r as i}from"./iframe-BwKzjaO_.js";import{O as u}from"./object-table-CtwO0Cb5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cw3PuEWm.js";import"./Table-D7NzkWze.js";import"./index-jEwj8y1B.js";import"./Dialog-DrkxivyJ.js";import"./cross-1lQqZabN.js";import"./svgIconContainer-BwQ9ehgu.js";import"./useBaseUiId-BGPb7m92.js";import"./InternalBackdrop-DCVAdZPe.js";import"./composite-Az3dyPdd.js";import"./index-Kp1RIk0o.js";import"./index-DSTqBN-p.js";import"./index-4q7PhTeO.js";import"./useEventCallback-DjZC-G9S.js";import"./SkeletonBar-LISMmzYx.js";import"./LoadingCell-1o51Z1Am.js";import"./ColumnConfigDialog-DX9yNz2p.js";import"./DraggableList-kpSIYOzv.js";import"./search-DdHvONrb.js";import"./Input-4hInwvvu.js";import"./useControlled-DYaNtfGY.js";import"./Button-Cz27x8wi.js";import"./small-cross-BWwYEXIu.js";import"./ActionButton-8eBbMlAk.js";import"./Checkbox-DLcp3PlG.js";import"./useValueChanged-m0H_6TBE.js";import"./CollapsiblePanel-D68KQNQi.js";import"./MultiColumnSortDialog-bs1kxzdX.js";import"./MenuTrigger-DMbbUQ5u.js";import"./CompositeItem-Cp7s4593.js";import"./ToolbarRootContext-BtpiBS9l.js";import"./getDisabledMountTransitionStyles-BdphTWCa.js";import"./getPseudoElementBounds-4gbF3_cn.js";import"./chevron-down-BTGBlQFb.js";import"./index-BV1P-O2s.js";import"./error-Nw58INx5.js";import"./BaseCbacBanner-DNDHOrYw.js";import"./makeExternalStore-GJQDziWf.js";import"./Tooltip-Dr8Setpm.js";import"./isObject-CfracQ9h.js";import"./debounce-F8ygRT2p.js";import"./useOsdkClient-DMp68QLo.js";import"./tick-D4wK5tyJ.js";import"./DropdownField-CfFskAQQ.js";import"./isEqual-qYCEMLNC.js";import"./_baseIsEqual-DP6XDtsT.js";import"./withOsdkMetrics-3WubJygy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
