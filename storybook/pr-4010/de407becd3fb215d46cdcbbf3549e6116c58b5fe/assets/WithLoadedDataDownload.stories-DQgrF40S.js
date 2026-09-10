import{f as b,j as a,r as i}from"./iframe-BlpejkzI.js";import{O as u}from"./object-table-ChJ31fZG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BA1cUfXb.js";import"./Table-PgtqjWX6.js";import"./index-CpPkHQnY.js";import"./Dialog-Doi--yEE.js";import"./cross-DiWsYg3r.js";import"./svgIconContainer-aKnF_69u.js";import"./useBaseUiId-BUVwvBQZ.js";import"./InternalBackdrop-DKB_eEnM.js";import"./composite-CdbN3ck3.js";import"./index-BdLU453s.js";import"./index-DVMy9f1T.js";import"./index-DOZcBLPY.js";import"./useEventCallback-BDK4Z8u2.js";import"./SkeletonBar-XgXRifQ0.js";import"./LoadingCell-BYMft5lE.js";import"./ColumnConfigDialog-mvsnwW1S.js";import"./DraggableList-v9pQbaC3.js";import"./search-IpDNvhGA.js";import"./Input-eoJV0GlP.js";import"./useControlled-CKCXNsan.js";import"./Button-DfGArVBU.js";import"./small-cross-CbD0uJgb.js";import"./ActionButton-mHtuKYOM.js";import"./Checkbox-DBxKcnus.js";import"./useValueChanged-CD7wCe1x.js";import"./CollapsiblePanel-Bxo4k_hM.js";import"./MultiColumnSortDialog-C5OH7rob.js";import"./MenuTrigger-DFA0EQYQ.js";import"./CompositeItem-D29vF932.js";import"./ToolbarRootContext-CBW-R_pU.js";import"./getDisabledMountTransitionStyles-Bq97lFh4.js";import"./getPseudoElementBounds-CclledTt.js";import"./chevron-down-DDoBjNkd.js";import"./index-CKx3u1TT.js";import"./error-CNoirV31.js";import"./BaseCbacBanner-BvjBpfm0.js";import"./makeExternalStore-CmmUlmnz.js";import"./Tooltip-B1OUttcu.js";import"./PopoverPopup-Bm6cnNyX.js";import"./debounce-7JU4VUDc.js";import"./useOsdkClient-CkQ9QpN3.js";import"./tick-_qvOZWIW.js";import"./DropdownField-BsA-cNSp.js";import"./isEqual-BKVrBEvt.js";import"./withOsdkMetrics-CHL30NBG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
