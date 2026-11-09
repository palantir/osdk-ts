import{f as b,j as a,r as i}from"./iframe-CwHoXHUu.js";import{O as u}from"./object-table-Cag_aHEb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B8BrjogO.js";import"./index-CZaeEK6I.js";import"./Dialog-De2OFsHH.js";import"./cross-CbSe3IA2.js";import"./svgIconContainer-CCqCSEPy.js";import"./useBaseUiId-BPVfLfjX.js";import"./InternalBackdrop-Dp6bA82H.js";import"./composite-DnjWTUQ2.js";import"./index-Cd6vbhvO.js";import"./index-CfA2Hd3H.js";import"./index-UD_bptXF.js";import"./useEventCallback-ANOYlLcV.js";import"./SkeletonBar-BPg1Fkjv.js";import"./LoadingCell-7w5ijp3b.js";import"./ColumnConfigDialog-BLb0xQT4.js";import"./DraggableList-B9JF565r.js";import"./search-DFG6yLeC.js";import"./Input-D4zseZIs.js";import"./useControlled-Hry_0x1f.js";import"./Button-h45Z6oL5.js";import"./small-cross-hTe5W9lf.js";import"./ActionButton-o9bSj-37.js";import"./Checkbox-DCQ1bTrr.js";import"./useValueChanged-Bts0Uq_N.js";import"./CollapsiblePanel-BF_hIS1Q.js";import"./MultiColumnSortDialog-DUaw27L5.js";import"./MenuTrigger-D9Ll9dQr.js";import"./CompositeItem-D5ZABXe5.js";import"./ToolbarRootContext-Dnc8VcDU.js";import"./getDisabledMountTransitionStyles-zi3Kz6H3.js";import"./getPseudoElementBounds-BZ16Xjo9.js";import"./chevron-down-CJ7ExT0D.js";import"./index-CI3G919h.js";import"./error-fdiT2-40.js";import"./BaseCbacBanner-syPdUMGq.js";import"./makeExternalStore-BVBAkPec.js";import"./Tooltip-CbRVkG8d.js";import"./isObject-7iDi-x5O.js";import"./debounce-BaLd07FW.js";import"./useOsdkClient-Cq22Qxjo.js";import"./tick-_yHnD8nP.js";import"./DropdownField-D6wICRIR.js";import"./isEqual-DPe1pfPj.js";import"./_baseIsEqual-5-KFDSiY.js";import"./withOsdkMetrics-D3UK9v4M.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
