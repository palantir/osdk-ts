import{f as b,j as a,r as i}from"./iframe-B151MY39.js";import{O as u}from"./object-table-D-UIbvSk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DjBvu03A.js";import"./Table-D-DcHuFZ.js";import"./index-D4Ktja5K.js";import"./Dialog-D2WugUSb.js";import"./cross-DQu9BvYN.js";import"./svgIconContainer-BLEuJ5z1.js";import"./useBaseUiId-B-w6rIot.js";import"./InternalBackdrop-ClpqOn9m.js";import"./composite-DsqMStnD.js";import"./index-_YRtSbhr.js";import"./index-K9vP9MSb.js";import"./index-CbZBg5h_.js";import"./useEventCallback-D9a4k8dW.js";import"./SkeletonBar-B37BkS3P.js";import"./LoadingCell--7LMLSTL.js";import"./ColumnConfigDialog-CO7m2sfy.js";import"./DraggableList-BA9k7mIf.js";import"./search-Cy5Pb8DF.js";import"./Input-BdL2sxgE.js";import"./useControlled-hVx5IBvW.js";import"./Button-D77_sTH4.js";import"./small-cross-CYn2ZJWp.js";import"./ActionButton-zvOE960M.js";import"./Checkbox-aWwK5z9s.js";import"./useValueChanged-INCVVQ2-.js";import"./CollapsiblePanel-aefLeZnL.js";import"./MultiColumnSortDialog-BoLHGqKn.js";import"./MenuTrigger-kFRhnlDq.js";import"./CompositeItem-DsqHLl_J.js";import"./ToolbarRootContext-CRksDvpW.js";import"./getDisabledMountTransitionStyles-Cs8S1gEh.js";import"./getPseudoElementBounds-D90KllDw.js";import"./chevron-down-C7ZT7QCO.js";import"./index-BUZnamy4.js";import"./error-BXj6iPTB.js";import"./BaseCbacBanner-CKm3WU7I.js";import"./makeExternalStore-DSGfAMdD.js";import"./Tooltip-Dx4JilCx.js";import"./PopoverPopup-G017xcEQ.js";import"./debounce-BOhPi2_d.js";import"./useOsdkClient-O0WN_-TA.js";import"./tick-CyZYyki1.js";import"./DropdownField-CwwIu_a4.js";import"./isEqual-BErWEpbD.js";import"./withOsdkMetrics-Bw9JRCxa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
