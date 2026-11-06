import{f as b,j as a,r as i}from"./iframe-Dy3pbGVl.js";import{O as u}from"./object-table-kTEr-sWF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CpAlczou.js";import"./Table-VOHC5N06.js";import"./index-BGynA5Ey.js";import"./Dialog-zWcA6cDC.js";import"./cross-_ffwL7On.js";import"./svgIconContainer-DwcpIzbz.js";import"./useBaseUiId-1GhcXjBj.js";import"./InternalBackdrop-DMIRmadR.js";import"./composite-DD7PMic6.js";import"./index-rQvGOKiy.js";import"./index-B3hOY3C5.js";import"./index-Dl_Buekn.js";import"./useEventCallback-C3LX0_mu.js";import"./SkeletonBar-DSCrW__O.js";import"./LoadingCell-DfPkft0q.js";import"./ColumnConfigDialog-BbLQ2JxQ.js";import"./DraggableList-C-d_nAEh.js";import"./search-CRVUm7gt.js";import"./Input-Ddh63PuK.js";import"./useControlled-CHjpObPc.js";import"./Button-ByPi26fD.js";import"./small-cross-DjIzegN_.js";import"./ActionButton-DFCeFCb6.js";import"./Checkbox-DDOz7-wX.js";import"./useValueChanged-DpMeL3s2.js";import"./CollapsiblePanel-CBe89pMe.js";import"./MultiColumnSortDialog-CZFWzHwI.js";import"./MenuTrigger-CZSjGNYF.js";import"./CompositeItem-BeUctUoU.js";import"./ToolbarRootContext-B0Ul7YuG.js";import"./getDisabledMountTransitionStyles-eVKTLrRf.js";import"./getPseudoElementBounds-gTzTtYPO.js";import"./chevron-down-8plcDTLG.js";import"./index-TQ3K22OR.js";import"./error-C7pYFxix.js";import"./BaseCbacBanner-C2pkLlLs.js";import"./makeExternalStore-WrhHs9Vh.js";import"./Tooltip-BSjRKIbt.js";import"./PopoverPopup-DrFWXbYx.js";import"./debounce-CXNS7Ik8.js";import"./useOsdkClient-B6m6pKrS.js";import"./tick-CBR4s6ZO.js";import"./DropdownField-CzivYSGB.js";import"./isEqual-Z9n-lDZW.js";import"./withOsdkMetrics-DtiZVH3G.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
