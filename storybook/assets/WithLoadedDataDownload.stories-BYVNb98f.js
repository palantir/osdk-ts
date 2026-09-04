import{f as b,j as a,r as i}from"./iframe-sCC61k92.js";import{O as u}from"./object-table-Mdjlx4Ke.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DcSmCGEJ.js";import"./index-COwL7OJ8.js";import"./Dialog-MQVy5lzB.js";import"./cross-DRK3VtDX.js";import"./svgIconContainer-hqfoTYTd.js";import"./useBaseUiId-BliaD1O6.js";import"./InternalBackdrop-B3dfpWNK.js";import"./composite-CISHKC9x.js";import"./index-BO4p12nE.js";import"./index-BPgVurxA.js";import"./index-BPupFXYK.js";import"./useEventCallback-Ce-cRsvG.js";import"./SkeletonBar-CwQdqdMR.js";import"./LoadingCell-tO7EVVGR.js";import"./ColumnConfigDialog-D0_f0eWX.js";import"./DraggableList-C7RmjcDp.js";import"./search-BCt11QUz.js";import"./Input-oPnlo5ZK.js";import"./useControlled-QNZ0QZkj.js";import"./Button-CuqFP7rB.js";import"./small-cross-DuGAeEln.js";import"./ActionButton-KMvLy2U-.js";import"./Checkbox-CZTc9Hct.js";import"./useValueChanged-ClT-kz_1.js";import"./CollapsiblePanel-nEea4UtK.js";import"./MultiColumnSortDialog-WfN_XSl-.js";import"./MenuTrigger-DwEmv81m.js";import"./CompositeItem-DoarEqny.js";import"./ToolbarRootContext-C2ojXHeq.js";import"./getDisabledMountTransitionStyles-a-o7jZ9k.js";import"./getPseudoElementBounds-DMHhNAb7.js";import"./chevron-down-5SB1wRqG.js";import"./index-B-SSDTy4.js";import"./error-DG5J3I3H.js";import"./BaseCbacBanner-CFeBxzk8.js";import"./makeExternalStore-BHhNjBOZ.js";import"./Tooltip-tKWANxvR.js";import"./PopoverPopup-DWR0jCHo.js";import"./debounce-DfOnU9UJ.js";import"./useOsdkClient-C8WGuLkk.js";import"./tick-DkGxN_Ch.js";import"./DropdownField-BAeW6QRw.js";import"./isEqual-DfRx8L9e.js";import"./withOsdkMetrics-B8lVQvrV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
