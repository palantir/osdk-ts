import{f as b,j as a,r as i}from"./iframe-5UDGUP80.js";import{O as u}from"./object-table-DT9yW_zW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C4oCDBip.js";import"./Table-Ch_fXbg9.js";import"./index-Bugktx71.js";import"./Dialog-eRa75sWc.js";import"./cross-CxetxkJH.js";import"./svgIconContainer-BQ_U4GID.js";import"./useBaseUiId-BJavFBRa.js";import"./InternalBackdrop-BDP5HkEg.js";import"./composite-BocxrVtD.js";import"./index-B43ppQJK.js";import"./index-CFmBTWdv.js";import"./index-BPg1wn6n.js";import"./useEventCallback-BBIFPkUx.js";import"./SkeletonBar-kb5Emx81.js";import"./LoadingCell-7txcW6zg.js";import"./ColumnConfigDialog-WvaYcGIP.js";import"./DraggableList-DrTVKaZD.js";import"./search-DXPDoI0I.js";import"./Input-Dk-R4cjA.js";import"./useControlled--GaTcUFv.js";import"./Button-_SyP2AI3.js";import"./small-cross-DJ3pxLUM.js";import"./ActionButton-BcauRl8O.js";import"./Checkbox-DZ7T1UOK.js";import"./useValueChanged-CIWK-Rio.js";import"./CollapsiblePanel-C1JLT-WA.js";import"./MultiColumnSortDialog-DSVS7wSF.js";import"./MenuTrigger-BEfXx9km.js";import"./CompositeItem-CF8sbYQc.js";import"./ToolbarRootContext-D-36hmPD.js";import"./getDisabledMountTransitionStyles-Dt1lgd6K.js";import"./getPseudoElementBounds-7jKiSX97.js";import"./chevron-down-D3oAKYgi.js";import"./index-Dok_ldqO.js";import"./error-BTC-cXwr.js";import"./BaseCbacBanner-C29IMPf2.js";import"./makeExternalStore-DwYufUqB.js";import"./Tooltip-BF8B5Q2Y.js";import"./PopoverPopup-uZRZUKrc.js";import"./debounce-BHw5pdhf.js";import"./useOsdkClient-Cry0QHXA.js";import"./tick-DHT-rrDO.js";import"./DropdownField-Do75zApJ.js";import"./isEqual-KV3yJUm_.js";import"./withOsdkMetrics-iD8vruam.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
