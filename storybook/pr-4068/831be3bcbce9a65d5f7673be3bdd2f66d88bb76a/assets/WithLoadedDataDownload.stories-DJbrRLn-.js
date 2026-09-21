import{f as b,j as a,r as i}from"./iframe-ClmmZ3bm.js";import{O as u}from"./object-table-DsatPqbe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BZo60ewl.js";import"./Table-D1bwUrEg.js";import"./index-DIDi76XU.js";import"./Dialog-CIfkEYR7.js";import"./cross-BZIbyAfw.js";import"./svgIconContainer-CXmUB5_k.js";import"./useBaseUiId-WUEu06gE.js";import"./InternalBackdrop-3GGPa-k1.js";import"./composite-DFQP3WzO.js";import"./index-BVYmTNrb.js";import"./index-Bq9s53kA.js";import"./index-Z45XLqZB.js";import"./useEventCallback-BNKXZA_K.js";import"./SkeletonBar-zmrRzeWk.js";import"./LoadingCell-moQ8ecqY.js";import"./ColumnConfigDialog-CjawNvRx.js";import"./DraggableList-au3wpCID.js";import"./search-BSdPNEqM.js";import"./Input-prqFStI6.js";import"./useControlled-DgsYzmvX.js";import"./Button-BC65lBcv.js";import"./small-cross-Hnp_Cop5.js";import"./ActionButton-CmUSS7TV.js";import"./Checkbox-Bo232Iw9.js";import"./useValueChanged-BYcMVQkQ.js";import"./CollapsiblePanel-DLONQ99q.js";import"./MultiColumnSortDialog-Dvdstylu.js";import"./MenuTrigger-CQM2fZ-t.js";import"./CompositeItem-By3QnrLx.js";import"./ToolbarRootContext-BOxraJ6v.js";import"./getDisabledMountTransitionStyles-NPU84L0j.js";import"./getPseudoElementBounds-BgBAgWR8.js";import"./chevron-down-cWg0tuLd.js";import"./index-BYMK15VD.js";import"./error-joC9U9D6.js";import"./BaseCbacBanner-DvElSbKs.js";import"./makeExternalStore-BNsO-POR.js";import"./Tooltip-L4sylTo8.js";import"./PopoverPopup-DNr0L3gG.js";import"./debounce-XQlAyE-7.js";import"./useOsdkClient-CKzk92mD.js";import"./tick-CId6S-tg.js";import"./DropdownField-CnAzqUOi.js";import"./isEqual-DQPARruA.js";import"./withOsdkMetrics-3RKVNbyO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
