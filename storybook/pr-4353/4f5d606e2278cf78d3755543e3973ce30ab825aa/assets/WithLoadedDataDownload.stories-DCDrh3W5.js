import{f as b,j as a,r as i}from"./iframe-DpQxl-G6.js";import{O as u}from"./object-table-BroIEPvU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-mRXziM39.js";import"./Table-Bpr2S1M2.js";import"./index-Cujp3sVp.js";import"./Dialog-BAHkjLoo.js";import"./cross-dB1xiAz0.js";import"./svgIconContainer-DamXBWaI.js";import"./useBaseUiId-Cl9-toeq.js";import"./InternalBackdrop-UGKYLNqj.js";import"./composite-wCOpmCUF.js";import"./index-CrIwRE1J.js";import"./index-BGKSJQgI.js";import"./index-LqhCF_-F.js";import"./useEventCallback-7bghjhj3.js";import"./SkeletonBar-BlfHbAVT.js";import"./LoadingCell-Cebj5wsq.js";import"./ColumnConfigDialog-CqwuMV7d.js";import"./DraggableList-CcpFjV0I.js";import"./search-n4OQKLJh.js";import"./Input-D2U-2W4H.js";import"./useControlled-TG9q_V2m.js";import"./Button-BpP7RQEd.js";import"./small-cross-C1Iw8DgY.js";import"./ActionButton-fbLg4xtm.js";import"./Checkbox-uYPQv9Df.js";import"./useValueChanged-CwTmp6si.js";import"./CollapsiblePanel-CWN4zyln.js";import"./MultiColumnSortDialog-CTML89JK.js";import"./MenuTrigger-B_XNeRPS.js";import"./CompositeItem-DSQrNM-7.js";import"./ToolbarRootContext-D4KBNeKS.js";import"./getDisabledMountTransitionStyles-BUxjZvDR.js";import"./getPseudoElementBounds-11Yqxgjp.js";import"./chevron-down-D-RM0tZ4.js";import"./index-DttXp8FH.js";import"./error-DzvIefMA.js";import"./BaseCbacBanner-BPjZ85cS.js";import"./makeExternalStore-BUiRNREx.js";import"./Tooltip-DE5PnA7D.js";import"./PopoverPopup-DzI_buys.js";import"./debounce-CJywBWC4.js";import"./useOsdkClient-0Dxy99AS.js";import"./tick-bXhfM5-a.js";import"./DropdownField-BRSWnnTy.js";import"./isEqual-DHjK3ILE.js";import"./withOsdkMetrics-C9oeFlqw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
