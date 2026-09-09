import{f as b,j as a,r as i}from"./iframe-B8cnvOYh.js";import{O as u}from"./object-table-D-LWbXTb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-LnHSiiGM.js";import"./Table-BYjDr92W.js";import"./index-B3ykqjKt.js";import"./Dialog-DVh-Zb-K.js";import"./cross-CRSXtga6.js";import"./svgIconContainer-DXuXKKtJ.js";import"./useBaseUiId-BfhiVoPE.js";import"./InternalBackdrop-DBB8A_Xe.js";import"./composite-CpLfOjCv.js";import"./index-Br3P2ZZs.js";import"./index-Btox6Sl3.js";import"./index-BriJK3jE.js";import"./useEventCallback-CWz421aU.js";import"./SkeletonBar-DpIUlSQd.js";import"./LoadingCell-BCv072HP.js";import"./ColumnConfigDialog-DnBpPcxy.js";import"./DraggableList-BoTdqZSG.js";import"./search-Dy-VZ8UW.js";import"./Input-DjBLxYPn.js";import"./useControlled-Bd_oVfJe.js";import"./Button-BXcD7GGd.js";import"./small-cross-CAHXVf7A.js";import"./ActionButton-B9jE2LPd.js";import"./Checkbox-DidiGCmH.js";import"./useValueChanged-W50UaXFT.js";import"./CollapsiblePanel-DYmS8znM.js";import"./MultiColumnSortDialog-CnZm94rC.js";import"./MenuTrigger-BDTwbkqs.js";import"./CompositeItem-BZ4KTjXl.js";import"./ToolbarRootContext-GOwsslzm.js";import"./getDisabledMountTransitionStyles-BS_53I9A.js";import"./getPseudoElementBounds-nJ_aPL17.js";import"./chevron-down-CKQT8552.js";import"./index-BDYln6VT.js";import"./error-Bttrd0IT.js";import"./BaseCbacBanner-HEWQu21Z.js";import"./makeExternalStore-D8SbLzm4.js";import"./Tooltip-C7t2fm4N.js";import"./PopoverPopup-ZEHuNINK.js";import"./debounce-C4M36uj5.js";import"./useOsdkClient-CNX5cvgx.js";import"./tick-C0_exER5.js";import"./DropdownField-kPr-3fnd.js";import"./isEqual-D-yBf61h.js";import"./withOsdkMetrics-Dc0ezLCb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
