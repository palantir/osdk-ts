import{f as b,j as a,r as i}from"./iframe-BbjXXJe8.js";import{O as u}from"./object-table-qIIe7KC5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dey0rnvM.js";import"./Table-CqQFObec.js";import"./index-T8M7MoCf.js";import"./Dialog-BKYZxddZ.js";import"./cross-Dp3ZYAZC.js";import"./svgIconContainer-CXj_KM32.js";import"./useBaseUiId-mbBdJtd6.js";import"./InternalBackdrop-_rPH4zEA.js";import"./composite-CkO02i_E.js";import"./index-GEyymHQJ.js";import"./index-CUAZugwU.js";import"./useEventCallback-X7nCdW-s.js";import"./SkeletonBar-u6tF3ULb.js";import"./LoadingCell-BQEmBLZY.js";import"./ColumnConfigDialog-CEktYxha.js";import"./DraggableList-B2uXj8r5.js";import"./search-DjptGMSz.js";import"./Input-DcHjunbi.js";import"./useControlled-bFhbJ_tP.js";import"./Button-BYNpk4v8.js";import"./small-cross-DBHZv8Q4.js";import"./ActionButton-Bl1GvY0Q.js";import"./Checkbox-Ce0Hl-Gw.js";import"./useValueChanged-BKhoHR0i.js";import"./CollapsiblePanel-BmSgtCoP.js";import"./MultiColumnSortDialog-CQS4VGRh.js";import"./MenuTrigger-DLhgGUEr.js";import"./CompositeItem-BvxDZQma.js";import"./ToolbarRootContext-DvWxWMIg.js";import"./getDisabledMountTransitionStyles-GlMe9-WZ.js";import"./getPseudoElementBounds-BMRxbPLa.js";import"./chevron-down-5PwEHI-v.js";import"./index-D95i56Mo.js";import"./error-B5EEo1NC.js";import"./BaseCbacBanner-BA_GTGz9.js";import"./makeExternalStore-BCfu_aRm.js";import"./Tooltip-D3vptghS.js";import"./PopoverPopup-DHqupTDU.js";import"./debounce-CmbjsLVd.js";import"./useOsdkClient-DsMfreJs.js";import"./tick-C8S8ITqk.js";import"./DropdownField-DrlUCotf.js";import"./isEqual-DzrTxp38.js";import"./withOsdkMetrics-Cy91uTto.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
