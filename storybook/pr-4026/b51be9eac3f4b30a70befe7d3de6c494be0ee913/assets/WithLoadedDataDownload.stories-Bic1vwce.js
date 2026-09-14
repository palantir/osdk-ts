import{f as b,j as a,r as i}from"./iframe-BFWJZaOo.js";import{O as u}from"./object-table-BrOjHsw0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BB-wZWHQ.js";import"./Table-CHxO4yLR.js";import"./index-XqSw18dv.js";import"./Dialog-B3g8_s7J.js";import"./cross-Bdxg6WL4.js";import"./svgIconContainer-D508kkfI.js";import"./useBaseUiId-D0TRwsGc.js";import"./InternalBackdrop-BAFY0J2d.js";import"./composite-BuqSO83P.js";import"./index-13lJ30rX.js";import"./index-CxTEg5iL.js";import"./index-BcEf8-4C.js";import"./useEventCallback-BPxPY2CN.js";import"./SkeletonBar-a1qesNFL.js";import"./LoadingCell-CY9OtzsA.js";import"./ColumnConfigDialog-B1HvDR0n.js";import"./DraggableList-6t1KEroR.js";import"./search-CoXqkvjq.js";import"./Input-CT8p6Er9.js";import"./useControlled-B54yZwri.js";import"./Button-BucLG5Fq.js";import"./small-cross-7Nm747z7.js";import"./ActionButton-BceFUcJP.js";import"./Checkbox-Bwid83ut.js";import"./useValueChanged-CUBMtNnf.js";import"./CollapsiblePanel-CgWuuhBS.js";import"./MultiColumnSortDialog-B_C0FqaD.js";import"./MenuTrigger-B2Wk1N1n.js";import"./CompositeItem-BYv_HkoB.js";import"./ToolbarRootContext-t3ZlqxTu.js";import"./getDisabledMountTransitionStyles-sSKvelZe.js";import"./getPseudoElementBounds-5meTCtdo.js";import"./chevron-down-jCzULGyN.js";import"./index-DhrvNfiG.js";import"./error-ov0Da29u.js";import"./BaseCbacBanner-Cw-h5evd.js";import"./makeExternalStore-BBLYkrLM.js";import"./Tooltip-sgBLHLbz.js";import"./PopoverPopup-anP8KZpL.js";import"./debounce-BVuWn6Kv.js";import"./useOsdkClient-BFoXoZmC.js";import"./tick-BwPdqsm5.js";import"./DropdownField-DUTW3bKH.js";import"./isEqual-C01EUI8T.js";import"./withOsdkMetrics-Dvr0Y_2G.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
