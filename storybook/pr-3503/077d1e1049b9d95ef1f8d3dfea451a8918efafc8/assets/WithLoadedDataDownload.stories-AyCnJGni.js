import{f as b,j as a,r as i}from"./iframe-DLyQaqpF.js";import{O as u}from"./object-table-CTL-bjOb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C-e9bxMY.js";import"./Table-IlmCorYQ.js";import"./index-7upvneg1.js";import"./Dialog-QIKP8tRU.js";import"./cross-D2gbBT1d.js";import"./svgIconContainer-DWDDdKTE.js";import"./useBaseUiId-UuMgtbSi.js";import"./InternalBackdrop-eT8qcf8n.js";import"./composite-CA2Ka0zc.js";import"./index-BqCwBdPB.js";import"./index-B9IWF8Og.js";import"./index-FHoX54VO.js";import"./useEventCallback-C7mS3DKi.js";import"./SkeletonBar-CCvryGJX.js";import"./LoadingCell-G9BH13tW.js";import"./ColumnConfigDialog-Di8S_sgK.js";import"./DraggableList-BlI4_FZF.js";import"./search-CQt5paG8.js";import"./Input-DIP4Tvvh.js";import"./useControlled-ZIKIXp5D.js";import"./Button-BQRCdod0.js";import"./small-cross-CwIKl9iB.js";import"./ActionButton-C00s-dCH.js";import"./Checkbox-BIN480y8.js";import"./minus-Baj_-Rxs.js";import"./tick-CZdCfrnF.js";import"./useValueChanged-vYXIxlHh.js";import"./caret-down-B7WRGSAE.js";import"./CollapsiblePanel-DxSU3gGY.js";import"./MultiColumnSortDialog-XlULzT-P.js";import"./MenuTrigger-D5Gw0d49.js";import"./CompositeItem-7PPYSQCL.js";import"./ToolbarRootContext-B2nN4Zah.js";import"./getDisabledMountTransitionStyles-CyUQV4jz.js";import"./getPseudoElementBounds-BZgj4mN5.js";import"./chevron-down-CkglZp0i.js";import"./index-DRPFHYZj.js";import"./error-DX7nP_6B.js";import"./BaseCbacBanner-3PA2ZimL.js";import"./makeExternalStore-B3q1dpq0.js";import"./Tooltip-Ce36bqpQ.js";import"./PopoverPopup-BdjA_EMn.js";import"./toNumber-PpyWuKWW.js";import"./useOsdkClient-BQ4OnmB6.js";import"./DropdownField-Ohlxx2XH.js";import"./withOsdkMetrics-CMPmtg6O.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
