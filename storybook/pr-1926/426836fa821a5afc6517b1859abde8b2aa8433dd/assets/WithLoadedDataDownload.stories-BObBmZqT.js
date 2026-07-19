import{f as b,j as a,r as i}from"./iframe-aQAIw_3-.js";import{O as u}from"./object-table-DcHtnvGe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ZDTqDVO_.js";import"./Table-Dl5LPL1a.js";import"./index-DaWd5O5v.js";import"./Dialog-Bl4c3FQp.js";import"./cross-BXTno_VG.js";import"./svgIconContainer-CePYB0_T.js";import"./useBaseUiId-CWIhd6Nv.js";import"./InternalBackdrop-LVF9Ssvv.js";import"./composite-DbUcyt93.js";import"./index-DdH8CnPR.js";import"./index-ClZezG6o.js";import"./index-CWai-6aj.js";import"./useEventCallback-DOrtOegb.js";import"./SkeletonBar-D1dEKUj7.js";import"./LoadingCell-Chsjw17C.js";import"./ColumnConfigDialog-CWAECfPd.js";import"./DraggableList-mWEfjWBN.js";import"./search-CdQNNz22.js";import"./Input-DEN1u1P9.js";import"./useControlled-BlKxZEkk.js";import"./isEqual-CnXFHm7Z.js";import"./isObject-BZOswVC5.js";import"./Button-BtxgosDP.js";import"./ActionButton-DhyE-LOc.js";import"./Checkbox-D3pnOmpY.js";import"./useValueChanged-DBm4naRE.js";import"./CollapsiblePanel-DEKQ99su.js";import"./MultiColumnSortDialog-BV6HxBns.js";import"./MenuTrigger-D9kHzECt.js";import"./CompositeItem-Ddo_55VS.js";import"./ToolbarRootContext-Cflj_kFN.js";import"./getDisabledMountTransitionStyles-BJTD6HWT.js";import"./getPseudoElementBounds-6XUoHijT.js";import"./chevron-down-CzxinWJb.js";import"./index-CWJETYPl.js";import"./error-RXslMkWs.js";import"./BaseCbacBanner-D7Eu0qgO.js";import"./makeExternalStore-Behu0ErP.js";import"./Tooltip-_QtNXbR8.js";import"./PopoverPopup-Bcj1bqLs.js";import"./toNumber-BcNXX6T4.js";import"./useOsdkClient-CpmzF59v.js";import"./tick-DjBy5-HU.js";import"./DropdownField-CQsdnz5O.js";import"./withOsdkMetrics-DDGPYtIX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
