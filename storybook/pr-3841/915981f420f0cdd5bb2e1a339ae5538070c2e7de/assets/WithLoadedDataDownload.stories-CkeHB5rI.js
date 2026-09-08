import{f as b,j as a,r as i}from"./iframe-BOmrqFPc.js";import{O as u}from"./object-table-CgTZhKfv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DHdkCmlX.js";import"./Table-BJpB3MpQ.js";import"./index-CsuBd3Ct.js";import"./Dialog-KCVIqPJc.js";import"./cross-C3JW1YVW.js";import"./svgIconContainer-BIv09OFd.js";import"./useBaseUiId-BbxoKReU.js";import"./InternalBackdrop-Bi_UxEim.js";import"./composite-DD_Mh2Hz.js";import"./index-CwZfU70k.js";import"./index-CmDTuj0A.js";import"./index-OMceiRFh.js";import"./useEventCallback-BCbidy2u.js";import"./SkeletonBar-CCtYn663.js";import"./LoadingCell-D20rDd7b.js";import"./ColumnConfigDialog-CMwN6Z58.js";import"./DraggableList-CvUF4ah5.js";import"./search-BDQnen_f.js";import"./Input-DztT7-KE.js";import"./useControlled-fJQSQ2l_.js";import"./Button-CzVdVKcN.js";import"./small-cross-DJnfj9QP.js";import"./ActionButton-BDtYk-kf.js";import"./Checkbox-zixLd25m.js";import"./useValueChanged-Dhmmb8Eg.js";import"./CollapsiblePanel-gIOqhaYB.js";import"./MultiColumnSortDialog-mZBPlG9r.js";import"./MenuTrigger-tX7EZ8Yt.js";import"./CompositeItem-BQhn1KAi.js";import"./ToolbarRootContext-CZljBiwl.js";import"./getDisabledMountTransitionStyles-BpRjKf3X.js";import"./getPseudoElementBounds-BxchgAnl.js";import"./chevron-down-CjR8Mc2-.js";import"./index-7ewfs4s5.js";import"./error-lpzYnACL.js";import"./BaseCbacBanner-CKztZQf-.js";import"./makeExternalStore-CIMBrNRu.js";import"./Tooltip-Cf3Cg01o.js";import"./PopoverPopup-CvmU8NRY.js";import"./debounce-CRQ5iXC9.js";import"./useOsdkClient-BKdn_EkF.js";import"./tick-DWpFBI3S.js";import"./DropdownField-Dbo12qhB.js";import"./isEqual-DZa_3meK.js";import"./withOsdkMetrics-CHgAtXdu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
