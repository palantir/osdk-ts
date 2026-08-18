import{f as b,j as a,r as i}from"./iframe-BgvLvKva.js";import{O as u}from"./object-table-C5L2lUHh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B1HwKvYQ.js";import"./Table-BlCx7eH_.js";import"./index-C5UyF6W2.js";import"./Dialog-BEorr5lF.js";import"./cross-WN3vBfZU.js";import"./svgIconContainer-CcU0b5d6.js";import"./useBaseUiId-ctMKwW6N.js";import"./InternalBackdrop-BYbSa1OD.js";import"./composite-BYxHSO5E.js";import"./index-DHe1MgcY.js";import"./index-DIEiR9vc.js";import"./index-CZvid9ZQ.js";import"./useEventCallback-BeycNYXS.js";import"./SkeletonBar-Dy9e3NIH.js";import"./LoadingCell-Dwc76lDi.js";import"./ColumnConfigDialog-sp5VdiZD.js";import"./DraggableList-J22w-pzX.js";import"./search-BC3w2ZRf.js";import"./Input-BRpNUPT7.js";import"./useControlled-DJVt1nAj.js";import"./Button-CT3oLFOf.js";import"./small-cross-w8o8YAZK.js";import"./ActionButton-BW77J7ec.js";import"./Checkbox-f__wunET.js";import"./useValueChanged-DomNCZ4R.js";import"./CollapsiblePanel-B9nGBeF-.js";import"./MultiColumnSortDialog-BesTIq8C.js";import"./MenuTrigger-jvhRJjZJ.js";import"./CompositeItem-BIOBD7ED.js";import"./ToolbarRootContext-1Zs9_aIX.js";import"./getDisabledMountTransitionStyles-DDd2v21E.js";import"./getPseudoElementBounds-DZzp9gig.js";import"./chevron-down-Dsbl3RB_.js";import"./index-Dsqet5kS.js";import"./error-MS4gG1j8.js";import"./BaseCbacBanner-B4v3W_qt.js";import"./makeExternalStore-C6g-u5rg.js";import"./Tooltip-CdSKpuHY.js";import"./PopoverPopup-Cs96luoA.js";import"./debounce-DDxQirrc.js";import"./useOsdkClient-CMrBc-CL.js";import"./tick-BQ9Lr4SE.js";import"./DropdownField-CpbgYUlt.js";import"./isEqual-BAMquniX.js";import"./withOsdkMetrics-Ccq9KWbZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
