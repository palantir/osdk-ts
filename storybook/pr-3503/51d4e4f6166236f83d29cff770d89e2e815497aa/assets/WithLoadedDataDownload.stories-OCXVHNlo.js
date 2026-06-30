import{f as b,j as a,r as i}from"./iframe-iqkWJYwF.js";import{O as u}from"./object-table-fi3m28sF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CtBHv-Cy.js";import"./Table-DlRIFcu9.js";import"./index-CaL-aLRX.js";import"./Dialog-CI2vxGM-.js";import"./cross-BYy9TDry.js";import"./svgIconContainer-DaCpfDZQ.js";import"./useBaseUiId-SOU0bd8-.js";import"./InternalBackdrop-4Cuiv9KT.js";import"./composite-DDaHOh2A.js";import"./index-BnaarDrq.js";import"./index-p1WXFGiz.js";import"./index--GsIhUGq.js";import"./useEventCallback-yxjZ5TAV.js";import"./SkeletonBar-CyAhnrzw.js";import"./LoadingCell-JhYb_seP.js";import"./ColumnConfigDialog-Cg_I5AEE.js";import"./DraggableList-DNuy7nIO.js";import"./search-_uaTUom-.js";import"./Input-CZqAelu1.js";import"./useControlled-BJGQw5Ht.js";import"./Button-oSNe6ser.js";import"./small-cross-DcicBBo0.js";import"./ActionButton-DJ-TFCUk.js";import"./Checkbox-DuyRoj_l.js";import"./minus-WC9qC8HN.js";import"./tick-yxhu3_f1.js";import"./useValueChanged-D7qgYORu.js";import"./caret-down-BV9je2v6.js";import"./CollapsiblePanel-DSpqDwVE.js";import"./MultiColumnSortDialog-gP5iuHUw.js";import"./MenuTrigger-Dl-RvCy3.js";import"./CompositeItem-BFCbksjM.js";import"./ToolbarRootContext-Dza7JlJS.js";import"./getDisabledMountTransitionStyles-BouDf0Op.js";import"./getPseudoElementBounds-CNd01LVE.js";import"./chevron-down-DK3cLpoN.js";import"./index-DLdll3W-.js";import"./error-CefxAjtm.js";import"./BaseCbacBanner-BN4gmrCe.js";import"./makeExternalStore-Del5paUL.js";import"./Tooltip-BK3v-Yiv.js";import"./PopoverPopup-DFIIUqcP.js";import"./toNumber-FEGI5gjM.js";import"./useOsdkClient-EPDOMjRk.js";import"./DropdownField-DI5_waQl.js";import"./withOsdkMetrics-3rdUkBZO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
