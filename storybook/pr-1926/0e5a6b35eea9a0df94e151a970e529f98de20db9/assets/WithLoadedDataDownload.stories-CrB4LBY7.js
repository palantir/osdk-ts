import{f as b,j as a,r as i}from"./iframe-DfMJukgY.js";import{O as u}from"./object-table-BGVgMj3D.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-VM-F0jx2.js";import"./Table-DANrk4m7.js";import"./index-CPmt2jve.js";import"./Dialog-CqzlSyLJ.js";import"./cross-DYuJCEl9.js";import"./svgIconContainer-DOEgYA3V.js";import"./useBaseUiId-DEFBImN0.js";import"./InternalBackdrop-D4RPPLx_.js";import"./composite-CO4J4kUw.js";import"./index-D0ss7BNT.js";import"./index-CW41f0V0.js";import"./index-Db7WZf1E.js";import"./useEventCallback-CujKQvED.js";import"./SkeletonBar-BY4TD8HF.js";import"./LoadingCell-DpyN_r9D.js";import"./ColumnConfigDialog-BbQkq11f.js";import"./DraggableList-Cv-CVLCz.js";import"./search-sPR_XQ25.js";import"./Input-C8qN6Kyh.js";import"./useControlled-BaQpmrJ7.js";import"./isEqual-Bzy2vlTm.js";import"./isObject-Q-eHHqLR.js";import"./Button-BYYvi8LO.js";import"./ActionButton-Sl5oWaUu.js";import"./Checkbox-BSRaElv6.js";import"./useValueChanged-DhDTq9ye.js";import"./CollapsiblePanel-D_F8a2n7.js";import"./MultiColumnSortDialog-O0na_EYa.js";import"./MenuTrigger-E-bh9wZc.js";import"./CompositeItem-UgjKpAcn.js";import"./ToolbarRootContext-DxF5vhJk.js";import"./getDisabledMountTransitionStyles-DLVZIwtO.js";import"./getPseudoElementBounds-DR4xds7o.js";import"./chevron-down-aEfEfwVB.js";import"./index-CDG-_gWn.js";import"./error-D29g4pKw.js";import"./BaseCbacBanner-DcyNCAS7.js";import"./makeExternalStore-BxrSdo9F.js";import"./Tooltip-BS1jmae1.js";import"./PopoverPopup-DRGNXVKJ.js";import"./toNumber-B4Xju4pa.js";import"./useOsdkClient-Cf5OJdy4.js";import"./tick-S0-Nortf.js";import"./DropdownField-Dvb1-ruW.js";import"./withOsdkMetrics-D3FygStw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
