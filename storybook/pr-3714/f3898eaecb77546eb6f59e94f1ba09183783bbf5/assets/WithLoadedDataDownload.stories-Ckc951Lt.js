import{f as b,j as a,r as i}from"./iframe-CS16Wym9.js";import{O as u}from"./object-table-kqqmXTUk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DC9DeVBh.js";import"./Table-BgfxVV5X.js";import"./index-DhEpXO1A.js";import"./Dialog-CzVSYxmz.js";import"./cross-BWFjaYun.js";import"./svgIconContainer-CfFnFwML.js";import"./useBaseUiId-B-TyoTc3.js";import"./InternalBackdrop-CYoDkOja.js";import"./composite-B3nn8Wmd.js";import"./index-C35-im3I.js";import"./index-BPUQ9eYC.js";import"./index-CsvZoLsW.js";import"./useEventCallback-D-EHtfGa.js";import"./SkeletonBar-CBZRVWy7.js";import"./LoadingCell-YcVaGeUZ.js";import"./ColumnConfigDialog-C0I05drG.js";import"./DraggableList-CKhIAT7H.js";import"./search-DT-wqB-g.js";import"./Input-BpmoD1sO.js";import"./useControlled-aL-XGVGO.js";import"./isEqual-C44uMUsY.js";import"./isObject-VcFuhq9k.js";import"./Button-BhBWCaXR.js";import"./ActionButton-DUnsrqic.js";import"./Checkbox-B_fMFtTW.js";import"./useValueChanged-I988YqbZ.js";import"./CollapsiblePanel-DKc2NjAe.js";import"./MultiColumnSortDialog-9ilQth99.js";import"./MenuTrigger-B9hqQ2Fg.js";import"./CompositeItem-DPrQDkCn.js";import"./ToolbarRootContext-BkTHv0Zm.js";import"./getDisabledMountTransitionStyles-SBIz8E21.js";import"./getPseudoElementBounds-TWu6-xzu.js";import"./chevron-down-DgWoPbKX.js";import"./index-DUlIu8bO.js";import"./error-CvaWQpvx.js";import"./BaseCbacBanner-DrS9jSpa.js";import"./makeExternalStore-BmbO7NbA.js";import"./Tooltip-Ahq-aAPS.js";import"./PopoverPopup-DJ5D-s44.js";import"./toNumber-BHRlnP2P.js";import"./useOsdkClient-B-cAsZXi.js";import"./tick-DB_Qub35.js";import"./DropdownField-D7cICWTM.js";import"./withOsdkMetrics-DMkQ6592.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
