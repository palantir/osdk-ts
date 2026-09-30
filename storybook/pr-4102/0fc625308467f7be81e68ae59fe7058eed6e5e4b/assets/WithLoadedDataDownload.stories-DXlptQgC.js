import{f as b,j as a,r as i}from"./iframe-DfWRDQYW.js";import{O as u}from"./object-table-0ELPGqBW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DztOS3mh.js";import"./Table-1X9IgMXG.js";import"./index-V0duYaOI.js";import"./Dialog-C4bIPlLo.js";import"./cross-MjnJnae7.js";import"./svgIconContainer-Djmd0i7i.js";import"./useBaseUiId-CnljwGyr.js";import"./InternalBackdrop-DoRzr-yp.js";import"./composite-BvmRb9Ju.js";import"./index-BhBX8uvN.js";import"./index-DMKrGJHK.js";import"./index-DYScCha7.js";import"./useEventCallback-CYayy9CC.js";import"./SkeletonBar-CySSdz1h.js";import"./LoadingCell-DAkz6DbJ.js";import"./ColumnConfigDialog-U4Rq4-2Y.js";import"./DraggableList-RGn9snj7.js";import"./search-Dxbg6ZmT.js";import"./Input-DIDbgdBf.js";import"./useControlled-DFU1H8fZ.js";import"./Button-OSZ8RwgD.js";import"./small-cross-njJyO2z5.js";import"./ActionButton-B83nj9fh.js";import"./Checkbox-YVP5nlwK.js";import"./useValueChanged-BHeWLU1X.js";import"./CollapsiblePanel-BDCG0rsw.js";import"./MultiColumnSortDialog-Bc2CB9nf.js";import"./MenuTrigger-Do_XoF9D.js";import"./CompositeItem-Bp9WguhV.js";import"./ToolbarRootContext-DK75y1Fb.js";import"./getDisabledMountTransitionStyles-C83yZKEJ.js";import"./getPseudoElementBounds-C114fu7w.js";import"./chevron-down-DTtuRFlq.js";import"./index-BPZ3Sv03.js";import"./error-D9hH3fxG.js";import"./BaseCbacBanner-BUUHlDXj.js";import"./makeExternalStore-CSrQpL3l.js";import"./Tooltip-DfRWn6Xg.js";import"./PopoverPopup-DdFaHp8R.js";import"./debounce-Ci0e7f6p.js";import"./useOsdkClient-ClcuriQB.js";import"./tick-BjABB7E4.js";import"./DropdownField-BWEIQf9x.js";import"./isEqual-C6a_kdYK.js";import"./withOsdkMetrics-BqT8ORay.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
