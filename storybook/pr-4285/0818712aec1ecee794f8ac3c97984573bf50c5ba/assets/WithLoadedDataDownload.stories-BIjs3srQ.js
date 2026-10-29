import{f as b,j as a,r as i}from"./iframe-DzAVrHJ1.js";import{O as u}from"./object-table-Bnf64FoN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ty-K3PMW.js";import"./Table-Z8p84qki.js";import"./index-C292Gvtl.js";import"./Dialog-DlW-Iivu.js";import"./cross-CwuqZdL9.js";import"./svgIconContainer-Cjn3QLE6.js";import"./useBaseUiId-C1k_ZcgS.js";import"./InternalBackdrop-BDeEY7y8.js";import"./composite-CMwdngwB.js";import"./index-Bz0mU_jm.js";import"./index-eBdvYF3H.js";import"./index-BITESRA3.js";import"./useEventCallback-ClRDKuB_.js";import"./SkeletonBar-CCisd-VN.js";import"./LoadingCell-Bz4DD9uV.js";import"./ColumnConfigDialog-65KeMPvb.js";import"./DraggableList-B-KFUbtk.js";import"./search-Bq5r2eJD.js";import"./Input-BlhxiPuo.js";import"./useControlled-P8ZVsLoA.js";import"./Button-G6bICRGy.js";import"./small-cross-BSn3VnZ1.js";import"./ActionButton-OV3tGcjp.js";import"./Checkbox-CQxEUilD.js";import"./useValueChanged-DsB7tdZ5.js";import"./CollapsiblePanel-DZRV367u.js";import"./MultiColumnSortDialog-DVENVKDl.js";import"./MenuTrigger-CbBXGgjg.js";import"./CompositeItem-DvTwYr0k.js";import"./ToolbarRootContext-mfvQj9MT.js";import"./getDisabledMountTransitionStyles-BvYKup6L.js";import"./getPseudoElementBounds-BHcHYgUs.js";import"./chevron-down-BLhnWXgc.js";import"./index-GsoBtsBJ.js";import"./error-BRilv6DJ.js";import"./BaseCbacBanner-DiXmyfjJ.js";import"./makeExternalStore-DMxEFrb0.js";import"./Tooltip-QlEg8iZs.js";import"./PopoverPopup-BfNxXbJo.js";import"./debounce-BdQCzqPM.js";import"./useOsdkClient-CMKwPtVZ.js";import"./tick-kpTktDfZ.js";import"./DropdownField-DPtluWvH.js";import"./isEqual-Bj__1TVq.js";import"./withOsdkMetrics-C01mqZCt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
