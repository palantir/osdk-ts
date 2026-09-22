import{f as b,j as a,r as i}from"./iframe-DAMQ0kJi.js";import{O as u}from"./object-table-BoCVYoye.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B_MKI7VB.js";import"./Table-BeIR0nLw.js";import"./index-Bp0gXdhg.js";import"./Dialog-Bh1BSDP_.js";import"./cross-DxIbIlzH.js";import"./svgIconContainer-CVBLUyxF.js";import"./useBaseUiId-CZjCaxZv.js";import"./InternalBackdrop-CKMU2rkm.js";import"./composite-BYBlPAgy.js";import"./index-8-mAEuet.js";import"./index-D8IRtIy_.js";import"./index-C9gl1QHm.js";import"./useEventCallback-ghRGpfyt.js";import"./SkeletonBar-BxVkW2-h.js";import"./LoadingCell-CF8ye8h8.js";import"./ColumnConfigDialog-BEWA1CMP.js";import"./DraggableList-C_TNi5vD.js";import"./search-AYrmuoce.js";import"./Input-CyyvCwcw.js";import"./useControlled-DC6nW2lc.js";import"./Button-5SDZ05K4.js";import"./small-cross-Cq43VNdb.js";import"./ActionButton-CDelunAe.js";import"./Checkbox-KoJLRf2Y.js";import"./useValueChanged-DjExxn5b.js";import"./CollapsiblePanel-0-xMKkM2.js";import"./MultiColumnSortDialog-B_5NUOMJ.js";import"./MenuTrigger-DBLFLpoD.js";import"./CompositeItem-BDbWSvwq.js";import"./ToolbarRootContext-DNW6tFJb.js";import"./getDisabledMountTransitionStyles-1cZ4ebyu.js";import"./getPseudoElementBounds-COCrN9V9.js";import"./chevron-down-CXmtiTux.js";import"./index-DPV2fpq5.js";import"./error-COQAffC4.js";import"./BaseCbacBanner-PHPKD-SZ.js";import"./makeExternalStore-BpUsTfEq.js";import"./Tooltip-DHasjvAh.js";import"./PopoverPopup-DEz0V8jj.js";import"./debounce-CTk30Vh4.js";import"./useOsdkClient-rfrnBJy_.js";import"./tick-Cy96E2pR.js";import"./DropdownField-DNoVk62f.js";import"./isEqual-SHSvvOQ6.js";import"./withOsdkMetrics-D6W1KI3Y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
