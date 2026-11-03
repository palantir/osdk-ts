import{f as b,j as a,r as i}from"./iframe-CvtnXpWI.js";import{O as u}from"./object-table-BL_5837Q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CRqjKMTV.js";import"./Table-CmUVnd3U.js";import"./index-jeLRGmVS.js";import"./Dialog-DCRDnXqO.js";import"./cross-CaW9jTLZ.js";import"./svgIconContainer-C107_u4J.js";import"./useBaseUiId-Dw1uN2EV.js";import"./InternalBackdrop-BoC-Z1Bo.js";import"./composite-E-ohJHTb.js";import"./index-BtiKNh2b.js";import"./index-D-06_23q.js";import"./index-CqGesz-z.js";import"./useEventCallback-CTWgCbj5.js";import"./SkeletonBar-BFsAtTQ9.js";import"./LoadingCell-BgUBUq2n.js";import"./ColumnConfigDialog-CmtAzB6p.js";import"./DraggableList-Cv5c3GqV.js";import"./search-BIqi2et5.js";import"./Input-zhgReKbn.js";import"./useControlled-D1NesXJk.js";import"./Button-UnInDvPq.js";import"./small-cross-Db9ebHG-.js";import"./ActionButton-CafTjkNJ.js";import"./Checkbox-C9BLbFtD.js";import"./useValueChanged-CoEu5z_v.js";import"./CollapsiblePanel-DbP5aWCf.js";import"./MultiColumnSortDialog-CK365kWV.js";import"./MenuTrigger-BZ_YHWTN.js";import"./CompositeItem-C6nFI7h_.js";import"./ToolbarRootContext-ChZi5vEo.js";import"./getDisabledMountTransitionStyles-6caJPnGT.js";import"./getPseudoElementBounds-Cv8mXtVl.js";import"./chevron-down-C3-hEeSa.js";import"./index-skLFeqF3.js";import"./error-BIezve7k.js";import"./BaseCbacBanner-D0TruWAx.js";import"./makeExternalStore-DHDRqvun.js";import"./Tooltip-BazKam0z.js";import"./isObject-CrBKpQd0.js";import"./debounce-BFHp0zYR.js";import"./useOsdkClient-DVkylxA-.js";import"./tick-B7O-16gu.js";import"./DropdownField-BsbKwjfj.js";import"./isEqual-DFrG572d.js";import"./_baseIsEqual-DjC_Kex7.js";import"./withOsdkMetrics-CRjxXxf-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
