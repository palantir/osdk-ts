import{f as b,j as a,r as i}from"./iframe-DmXsd3Hy.js";import{O as u}from"./object-table-BL5HvBSY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-FNg-Yap0.js";import"./Table-ClX1TeDa.js";import"./index-BcT1_xRU.js";import"./Dialog-DQArQXW0.js";import"./cross-DWZebUpD.js";import"./svgIconContainer-DChaNhbi.js";import"./useBaseUiId-IvYDDYe8.js";import"./InternalBackdrop-BtW8Za31.js";import"./composite-C7fLhrOp.js";import"./index-BTiZdA37.js";import"./index-L17C4Vht.js";import"./index-CpbEq2HZ.js";import"./useEventCallback-4I6hq5VR.js";import"./SkeletonBar-Ef7SSF2e.js";import"./LoadingCell-DF-ukrCN.js";import"./ColumnConfigDialog-BSwh9KKm.js";import"./DraggableList-BW-WOX0L.js";import"./search-DuP8Iaqo.js";import"./Input-b6E9FUto.js";import"./useControlled-CF4bRWRe.js";import"./Button-xwJUzizH.js";import"./small-cross-iMf19qPb.js";import"./ActionButton-C-h_C9vc.js";import"./Checkbox-CrBCZs5M.js";import"./minus-oMUCuRiH.js";import"./tick-BrsEhxF-.js";import"./useValueChanged-poj32B0G.js";import"./caret-down-BUIqC63v.js";import"./CollapsiblePanel-BIRHjn7A.js";import"./MultiColumnSortDialog-B5kIDf_s.js";import"./MenuTrigger-BuIpmkh0.js";import"./CompositeItem-BhQuDj8k.js";import"./ToolbarRootContext-CuP0sp6C.js";import"./getDisabledMountTransitionStyles-FA238Yft.js";import"./getPseudoElementBounds-BtSbhkax.js";import"./chevron-down-DXt9ZLno.js";import"./index-R6Tv6HZ9.js";import"./error-BRk3uUov.js";import"./BaseCbacBanner-C4HnJj3a.js";import"./makeExternalStore-XBJJThK7.js";import"./Tooltip-DFgaGTvM.js";import"./PopoverPopup-Do1fTpIZ.js";import"./toNumber-hCFj_9FW.js";import"./useOsdkClient-gOeO2O2i.js";import"./DropdownField-BqQNkOSo.js";import"./withOsdkMetrics-C8ZLawBP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
