import{f as b,j as a,r as i}from"./iframe-C_ahFnte.js";import{O as u}from"./object-table-BtMR_OnT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BHb0Injz.js";import"./Table-DLXPhATj.js";import"./index-CMAfnGax.js";import"./Dialog-CbOtsyj-.js";import"./cross-BAtZIK6I.js";import"./svgIconContainer-5iqtE3GT.js";import"./useBaseUiId-DyEK8-wC.js";import"./InternalBackdrop-oaroN_vT.js";import"./composite-6kxzU8nP.js";import"./index-40HiEJ_t.js";import"./index-CQRjwZPk.js";import"./index-BwjPeIMJ.js";import"./useEventCallback-DtB3C9nL.js";import"./SkeletonBar-CBTex6KK.js";import"./LoadingCell-MG_jMP8H.js";import"./ColumnConfigDialog-D8xKAy6h.js";import"./DraggableList-D3KfR8iu.js";import"./search-WeJq5Jbj.js";import"./Input-BOmt55ak.js";import"./useControlled-D2HRL4Vd.js";import"./Button-BF0zOcPV.js";import"./small-cross-CFiAlSxT.js";import"./ActionButton-BoswvknW.js";import"./Checkbox-BkoC8qnP.js";import"./useValueChanged-C2ULmJoA.js";import"./CollapsiblePanel-whWth_0-.js";import"./MultiColumnSortDialog-B-LrIHxe.js";import"./MenuTrigger-DfEjjsNm.js";import"./CompositeItem-DebMdAlI.js";import"./ToolbarRootContext-QybI75uQ.js";import"./getDisabledMountTransitionStyles-C6IdF26M.js";import"./getPseudoElementBounds-C7DtJwGW.js";import"./chevron-down-Dzt44ETV.js";import"./index-CcstwSD9.js";import"./error-DNwhr4rb.js";import"./BaseCbacBanner-DMfapRkh.js";import"./makeExternalStore-lErXhsir.js";import"./Tooltip-BTsS5oFd.js";import"./PopoverPopup-Ccomk73C.js";import"./debounce-WVnpB66O.js";import"./useOsdkClient-k2RdEafw.js";import"./tick-R__fCdWc.js";import"./DropdownField-vAKtIAD0.js";import"./isEqual-7xNdLAzs.js";import"./withOsdkMetrics-CSpFQCY6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
