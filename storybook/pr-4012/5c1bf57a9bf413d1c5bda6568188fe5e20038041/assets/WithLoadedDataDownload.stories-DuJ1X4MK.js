import{f as b,j as a,r as i}from"./iframe-Szo9Zkn-.js";import{O as u}from"./object-table-Bh1a0-L6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dhbsewg0.js";import"./Table-BMDXccGN.js";import"./index-w7MyO4j0.js";import"./Dialog-CsnVpAjB.js";import"./cross-Bg9KGljm.js";import"./svgIconContainer-CC53kbHO.js";import"./useBaseUiId-sDWiAP1v.js";import"./InternalBackdrop--YqpQigY.js";import"./composite-BNkcDv4u.js";import"./index-BaSJaIuK.js";import"./index-BZZ6jb1f.js";import"./index-BObVAdZh.js";import"./useEventCallback-CnaPuMH4.js";import"./SkeletonBar-BgMTxHDr.js";import"./LoadingCell-B6jIfShi.js";import"./ColumnConfigDialog-CbqfWi2T.js";import"./DraggableList-H8Oanmu1.js";import"./search-BfldJRDn.js";import"./Input-CZ0TTU7d.js";import"./useControlled-eHJHqQYa.js";import"./Button-CEu9_vPj.js";import"./small-cross-BHZFoiT4.js";import"./ActionButton-2gMpYRX6.js";import"./Checkbox-a8XH5_91.js";import"./useValueChanged-DGZyaree.js";import"./CollapsiblePanel-BGMdvSg-.js";import"./MultiColumnSortDialog-C8flbRMI.js";import"./MenuTrigger-B0E9sOUu.js";import"./CompositeItem-BHJmqDb8.js";import"./ToolbarRootContext-Bfqc1Rf4.js";import"./getDisabledMountTransitionStyles-BdfTLDtY.js";import"./getPseudoElementBounds-CTJEQtrc.js";import"./chevron-down-B2_IYtaL.js";import"./index-CtOtUzNQ.js";import"./error-3jlDe3tK.js";import"./BaseCbacBanner-CMALqZmQ.js";import"./makeExternalStore-C62oCblT.js";import"./Tooltip-_z1tCu5W.js";import"./PopoverPopup-DkhCYwO7.js";import"./debounce-Dy82AU_7.js";import"./useOsdkClient-BATbP90A.js";import"./tick-DFIcijiQ.js";import"./DropdownField-DLes8wgB.js";import"./isEqual-CXpRJzVN.js";import"./withOsdkMetrics-DNdzNBP7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
