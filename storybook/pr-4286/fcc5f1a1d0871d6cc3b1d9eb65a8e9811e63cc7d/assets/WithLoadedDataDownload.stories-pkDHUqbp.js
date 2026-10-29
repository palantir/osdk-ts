import{f as b,j as a,r as i}from"./iframe-zGIsJMpT.js";import{O as u}from"./object-table-B1Dbw53n.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CC38SpOi.js";import"./Table-DMmh1PI5.js";import"./index-8YhFnXQQ.js";import"./Dialog-BtP0mUqh.js";import"./cross-DktHdIAg.js";import"./svgIconContainer-CP5MNfZh.js";import"./useBaseUiId-ci9SHEVb.js";import"./InternalBackdrop-CEY2WdL1.js";import"./composite-DMfXOji_.js";import"./index-B-FTFFET.js";import"./index-_YOXVANG.js";import"./index-bkG5Vg2p.js";import"./useEventCallback-BN5eCmSs.js";import"./SkeletonBar-DgAc_BEV.js";import"./LoadingCell-ByZjwpJ-.js";import"./ColumnConfigDialog-BEb8bZc1.js";import"./DraggableList-DcPGpTvx.js";import"./search-Dz1VIdGa.js";import"./Input-DUh3JuNM.js";import"./useControlled-BkrEcqk8.js";import"./Button-DgFOPBJa.js";import"./small-cross-BQATEOZM.js";import"./ActionButton-B5uCJtLq.js";import"./Checkbox-C6TjD974.js";import"./useValueChanged-B7A_hdZG.js";import"./CollapsiblePanel-haGA10pC.js";import"./MultiColumnSortDialog-B8zAHeEP.js";import"./MenuTrigger-BjbpFbGw.js";import"./CompositeItem-BoSufc_A.js";import"./ToolbarRootContext-Cb-1rKtx.js";import"./getDisabledMountTransitionStyles-BWzH01Nw.js";import"./getPseudoElementBounds-DuWCXYaK.js";import"./chevron-down-Du5I5wVW.js";import"./index-CF-IYV_p.js";import"./error-o2dkV_Rh.js";import"./BaseCbacBanner-CG6wm0ym.js";import"./makeExternalStore-BEcMJ506.js";import"./Tooltip-YhP-Fwkb.js";import"./PopoverPopup-CJZk_qZX.js";import"./debounce-CuU6v30l.js";import"./useOsdkClient-CBICPDeO.js";import"./tick-C2Jds8i8.js";import"./DropdownField-DuI_YZPs.js";import"./isEqual-BWBJWNbI.js";import"./withOsdkMetrics-CjW6J-ki.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
