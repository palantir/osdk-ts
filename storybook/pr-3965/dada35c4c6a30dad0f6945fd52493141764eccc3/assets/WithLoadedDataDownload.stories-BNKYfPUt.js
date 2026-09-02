import{f as b,j as a,r as i}from"./iframe-gxyWVbj2.js";import{O as u}from"./object-table-BV9fTc-i.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DE7utxpQ.js";import"./Table-B_dwHuEn.js";import"./index-QxbQkIyi.js";import"./Dialog-C3P5MjZq.js";import"./cross-VeIfZqt8.js";import"./svgIconContainer-DKbE6d31.js";import"./useBaseUiId-DviQ__RH.js";import"./InternalBackdrop-DwvYd_J6.js";import"./composite-iqOIimru.js";import"./index-BTPrH0w0.js";import"./index-NWW1BWCJ.js";import"./index-CEVBBPUN.js";import"./useEventCallback-26YzMxUe.js";import"./SkeletonBar-B50ZyoLs.js";import"./LoadingCell-CFBUM8ue.js";import"./ColumnConfigDialog-C5deL7Ed.js";import"./DraggableList-BW-vGzIl.js";import"./search-CyP3n12E.js";import"./Input-DTxeHNru.js";import"./useControlled-BNWlhOxQ.js";import"./Button-B4AYvQgI.js";import"./small-cross-D8cOGc_K.js";import"./ActionButton-DZr01Jaf.js";import"./Checkbox-C9sVYdhx.js";import"./useValueChanged-KXUkRbwe.js";import"./CollapsiblePanel-o-2jp67C.js";import"./MultiColumnSortDialog-DSmITdKp.js";import"./MenuTrigger-DsM6mbXw.js";import"./CompositeItem-CfmR6sON.js";import"./ToolbarRootContext-BbmcYQfJ.js";import"./getDisabledMountTransitionStyles-rpYg7a2m.js";import"./getPseudoElementBounds-BU1znkpG.js";import"./chevron-down-D0C-5aC_.js";import"./index-m96J0xcz.js";import"./error-Dq3CHQs2.js";import"./BaseCbacBanner-BgNW9o-N.js";import"./makeExternalStore-CU05zhJ7.js";import"./Tooltip-Cxy0TAi_.js";import"./PopoverPopup--JzGS9uQ.js";import"./debounce-CCj_OJPJ.js";import"./useOsdkClient-CUfX5Tns.js";import"./tick-CzmTrzOp.js";import"./DropdownField-DBl_-PYC.js";import"./isEqual-DgFl3X9R.js";import"./withOsdkMetrics-DtZ9khmC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
