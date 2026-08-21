import{f as b,j as a,r as i}from"./iframe-BbGTTDAj.js";import{O as u}from"./object-table-BDL8CTE7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BnxT1wyu.js";import"./index-IgulouNK.js";import"./Dialog-nlhw3diw.js";import"./cross-DhMDfvf2.js";import"./svgIconContainer-CVfAB6vd.js";import"./useBaseUiId-CQunNH1M.js";import"./InternalBackdrop-Hm20khzg.js";import"./composite-CR123KzM.js";import"./index-C8Uf5ELJ.js";import"./index-Df7q0QUE.js";import"./index-BUXx6su9.js";import"./useEventCallback-B2gRlxXx.js";import"./SkeletonBar-Ds_YvgAw.js";import"./LoadingCell-kYVMT4tS.js";import"./ColumnConfigDialog-CtClxv69.js";import"./DraggableList-DNiVSkcY.js";import"./search-CnT_vxoB.js";import"./Input-DnyVFM7E.js";import"./useControlled-BHPRGL2o.js";import"./Button-CN3p9mDI.js";import"./small-cross-Drx8-h4e.js";import"./ActionButton-DyvnNkxo.js";import"./Checkbox-BdyDWm05.js";import"./useValueChanged-CBTjuxmu.js";import"./CollapsiblePanel-Dga8aJEk.js";import"./MultiColumnSortDialog-D2nXUlx0.js";import"./MenuTrigger-DrbldR93.js";import"./CompositeItem-DyOo-XaB.js";import"./ToolbarRootContext-YNljF2Js.js";import"./getDisabledMountTransitionStyles-eCx2DT2T.js";import"./getPseudoElementBounds-CqmJdcHl.js";import"./chevron-down-wz6-g0K-.js";import"./index-Bjc-9Q8Y.js";import"./error-BllpxWel.js";import"./BaseCbacBanner-C7sNo_hZ.js";import"./makeExternalStore-B_7bdAjg.js";import"./Tooltip-CUzSWWIO.js";import"./PopoverPopup-x705-9aP.js";import"./debounce-DgBX7KpR.js";import"./useOsdkClient-B319hJFg.js";import"./tick-bTbyimze.js";import"./DropdownField-C5jrXGNu.js";import"./isEqual-BirJE5rZ.js";import"./withOsdkMetrics-CwndHWS3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
