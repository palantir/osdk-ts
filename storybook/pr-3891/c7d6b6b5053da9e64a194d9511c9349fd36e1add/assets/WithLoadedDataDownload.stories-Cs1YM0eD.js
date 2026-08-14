import{f as b,j as a,r as i}from"./iframe-Ct96tLEP.js";import{O as u}from"./object-table-BVb4YUri.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BzXm-lWo.js";import"./Table-BLTNEoRk.js";import"./index-BrLV5Brk.js";import"./Dialog-CdgpJYdr.js";import"./cross-njCgeQQ_.js";import"./svgIconContainer-YyohibIC.js";import"./useBaseUiId-DlPo7HoM.js";import"./InternalBackdrop-CBhLfZ10.js";import"./composite-ClWDPy_Z.js";import"./index-n7zQzqGm.js";import"./index-CFGgbOOg.js";import"./index-DvkK9vYJ.js";import"./useEventCallback-NT9uVSN-.js";import"./SkeletonBar-CHy9ImdP.js";import"./LoadingCell-CBjpGz6p.js";import"./ColumnConfigDialog-DeNfn3-2.js";import"./DraggableList-CdCzNXll.js";import"./search-gcuSrwrj.js";import"./Input-BjRTRl1y.js";import"./useControlled-BrUHVbre.js";import"./Button--zxmfjhO.js";import"./small-cross-CdOMJomB.js";import"./ActionButton-mBYFJsFl.js";import"./Checkbox-DCpFl39i.js";import"./useValueChanged-5fXKuMKH.js";import"./CollapsiblePanel-Zda4NkR-.js";import"./MultiColumnSortDialog-LxJNdhr2.js";import"./MenuTrigger-DDhJo6rx.js";import"./CompositeItem-ofC_tm6k.js";import"./ToolbarRootContext-COQSoUvI.js";import"./getDisabledMountTransitionStyles-CosExIO_.js";import"./getPseudoElementBounds-C54av8yB.js";import"./chevron-down-3x8blo3k.js";import"./index-BQUZFKJ4.js";import"./error-9UY90i-J.js";import"./BaseCbacBanner-CClJZgLo.js";import"./makeExternalStore-DsptzOqM.js";import"./Tooltip-COO2pN_0.js";import"./PopoverPopup-Bp-cbf8K.js";import"./debounce-qlqazifV.js";import"./useOsdkClient-CNbvIXrl.js";import"./tick-BTw5BL4P.js";import"./DropdownField-ipyk94KE.js";import"./isEqual-OrluLmcb.js";import"./withOsdkMetrics-BTh75wtd.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
