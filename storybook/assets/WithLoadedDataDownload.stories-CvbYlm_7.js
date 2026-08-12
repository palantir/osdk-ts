import{f as b,j as a,r as i}from"./iframe-BgOcomY1.js";import{O as u}from"./object-table-BSL1_9Ix.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-1DPjstk8.js";import"./index-B4Fy05Hs.js";import"./Dialog-mTBoijVX.js";import"./cross-CM39ZxII.js";import"./svgIconContainer-B7ISeWKv.js";import"./useBaseUiId-2i3TXOih.js";import"./InternalBackdrop-B7iY7MCf.js";import"./composite-H1Wa0kFX.js";import"./index-hjJ69L9b.js";import"./index-BmB0MH-o.js";import"./index-lRPC6GOL.js";import"./useEventCallback-BPywqORe.js";import"./SkeletonBar-Cikw0j-e.js";import"./LoadingCell-B2VIXLEw.js";import"./ColumnConfigDialog-DGitpEMK.js";import"./DraggableList-DD5T7n-a.js";import"./search-K4mebQJh.js";import"./Input-BWBlcqWD.js";import"./useControlled-CDFL_iHK.js";import"./isEqual-Duw1SWO6.js";import"./isObject-DIP1i4oH.js";import"./Button-BlOVwK6T.js";import"./ActionButton-7iZ2WqXE.js";import"./Checkbox-DAaS9nsE.js";import"./useValueChanged-B3UFC0Ev.js";import"./CollapsiblePanel-BWcH6qMX.js";import"./MultiColumnSortDialog-Blz5asut.js";import"./MenuTrigger-CGXKYSlO.js";import"./CompositeItem-BSdcRnox.js";import"./ToolbarRootContext-BRjUsvcz.js";import"./getDisabledMountTransitionStyles-DwxMXkUD.js";import"./getPseudoElementBounds-DLyBRRBf.js";import"./chevron-down-DozmMeTK.js";import"./index-DDMgjQRv.js";import"./error-Dzz3V0Ob.js";import"./BaseCbacBanner-BZSDzsbU.js";import"./makeExternalStore-DsKVr37k.js";import"./Tooltip-BX6F7vhO.js";import"./PopoverPopup-Cp-RpADF.js";import"./toNumber-CQLSmLk0.js";import"./useOsdkClient-B5u6g0Ch.js";import"./tick-DY56p526.js";import"./DropdownField-C0HqIwfY.js";import"./withOsdkMetrics-B05mg-EK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
