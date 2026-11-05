import{f as b,j as a,r as i}from"./iframe-Cj5xKvLA.js";import{O as u}from"./object-table-CXvKUv2q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D1DDVoTO.js";import"./Table-DGGWQjwY.js";import"./index-BBh4Z0mE.js";import"./Dialog-DtCOhCpV.js";import"./cross-BPLfBPr7.js";import"./svgIconContainer-DZYGEA7n.js";import"./useBaseUiId-n2QF9Zar.js";import"./InternalBackdrop-CYszCwsc.js";import"./composite-925znV2G.js";import"./index-DKWCLtL5.js";import"./index-Cb9jn425.js";import"./index-C38bxeqR.js";import"./useEventCallback-ByjKqT98.js";import"./SkeletonBar-_qu8whIi.js";import"./LoadingCell-BjLHFRuH.js";import"./ColumnConfigDialog-Cl9Wb7Yv.js";import"./DraggableList-DirU_-P4.js";import"./search-BmtS1KCs.js";import"./Input-Bffgvop9.js";import"./useControlled-D5krREh9.js";import"./Button-Be388aOs.js";import"./small-cross-CADTU48B.js";import"./ActionButton-D9I3daR7.js";import"./Checkbox-CySyhzbG.js";import"./useValueChanged-owXuKPN-.js";import"./CollapsiblePanel-Ba92qoA8.js";import"./MultiColumnSortDialog-B6sg6gM1.js";import"./MenuTrigger-D-QWhFP0.js";import"./CompositeItem-Cu_iWJpi.js";import"./ToolbarRootContext-DFdsIL16.js";import"./getDisabledMountTransitionStyles-BgDH7Jb-.js";import"./getPseudoElementBounds-DXisblbi.js";import"./chevron-down-C93yiICa.js";import"./index-oe6lplKX.js";import"./error-Bd1ykK4E.js";import"./BaseCbacBanner-ChRzr7gJ.js";import"./makeExternalStore-BZjXkoXh.js";import"./Tooltip-D09713yr.js";import"./isObject-DuNnO_hx.js";import"./debounce-D6aQMZp0.js";import"./useOsdkClient-oka-dZbc.js";import"./tick-Cf_flWq8.js";import"./DropdownField-5C_sV8hr.js";import"./isEqual-BNgPn_sy.js";import"./_baseIsEqual-DNNLc-1V.js";import"./withOsdkMetrics-Dl0Rlheu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
