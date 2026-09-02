import{f as b,j as a,r as i}from"./iframe-aaRaUaQA.js";import{O as u}from"./object-table-CVNLWWMk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DDdBuVC6.js";import"./Table-DtYjfP6r.js";import"./index-BFxdwZW8.js";import"./Dialog-B3xE5x_V.js";import"./cross-Civ52i0i.js";import"./svgIconContainer-DPD4yDJx.js";import"./useBaseUiId-OrvyFRjf.js";import"./InternalBackdrop-GC9m-3uE.js";import"./composite-Brai8k8L.js";import"./index-CjX3GsQ1.js";import"./index-B47dG2nh.js";import"./index-CtLyEqHu.js";import"./useEventCallback-C0cTpxYB.js";import"./SkeletonBar-D1kYfXgA.js";import"./LoadingCell-CfQ-CB4H.js";import"./ColumnConfigDialog-DVOPvFop.js";import"./DraggableList-D8c2iwKH.js";import"./search-rSQCSGrC.js";import"./Input-9MkH7huv.js";import"./useControlled-BxZDOjCN.js";import"./Button-_hqfl3rB.js";import"./small-cross-BM4HhB3q.js";import"./ActionButton-C5OMb6xb.js";import"./Checkbox-fVhFFENa.js";import"./useValueChanged-slNl2Col.js";import"./CollapsiblePanel-Y98hikc1.js";import"./MultiColumnSortDialog-DArSz3-b.js";import"./MenuTrigger-2BU8l6Er.js";import"./CompositeItem-ia1rPCPv.js";import"./ToolbarRootContext-CvLiSlR3.js";import"./getDisabledMountTransitionStyles-G0wd3Iab.js";import"./getPseudoElementBounds-BsimZP52.js";import"./chevron-down-DjMdYRFA.js";import"./index-BcetiFxi.js";import"./error-Bw88zVpy.js";import"./BaseCbacBanner-CB0Tsa2y.js";import"./makeExternalStore-DgrVSoVp.js";import"./Tooltip-BH5SwH9x.js";import"./PopoverPopup-DLGzdz9a.js";import"./debounce-DCNsezNJ.js";import"./useOsdkClient-GjkrZJXV.js";import"./tick-D1BoxD1y.js";import"./DropdownField-uGc5xnBi.js";import"./isEqual-DTb8ltKO.js";import"./withOsdkMetrics-BCIN_T8e.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
