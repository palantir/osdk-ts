import{f as b,j as a,r as i}from"./iframe-BpkgzCfc.js";import{O as u}from"./object-table-C1Z-ccOu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cqm3GHv6.js";import"./Table-uaVa5FNn.js";import"./index-BaNgrIWR.js";import"./Dialog-C1Q-SUqo.js";import"./cross-DcAJ_UsT.js";import"./svgIconContainer-DCGfkszH.js";import"./useBaseUiId-Bel2T9sH.js";import"./InternalBackdrop-5O-6_QKc.js";import"./composite-BYRdjqNf.js";import"./index-DUW9BvxD.js";import"./index-DxpCt63I.js";import"./index-CHMS5mxm.js";import"./useEventCallback-LAyONCjg.js";import"./SkeletonBar-ChZNWN60.js";import"./LoadingCell-DKZgM3UF.js";import"./ColumnConfigDialog-BKpmwDX3.js";import"./DraggableList-D94KU6vz.js";import"./search-Ct51ibPI.js";import"./Input-CsKIZdEL.js";import"./useControlled-DcPMMtt3.js";import"./isEqual-DEYDtDi9.js";import"./isObject-ApKxbA4p.js";import"./Button-CySInDHm.js";import"./ActionButton-DIuZIz2Z.js";import"./Checkbox-CxaKCMbC.js";import"./useValueChanged-CBLiCNHQ.js";import"./CollapsiblePanel-DxiMb1vS.js";import"./MultiColumnSortDialog-N9biHPZ3.js";import"./MenuTrigger-CFAMwJll.js";import"./CompositeItem-BB4wd3KB.js";import"./ToolbarRootContext-D12ftYYQ.js";import"./getDisabledMountTransitionStyles-CPDNpMoC.js";import"./getPseudoElementBounds-UNyxasqn.js";import"./chevron-down-D90rIeDb.js";import"./index-9JJ3q_YT.js";import"./error-BPGwzs_y.js";import"./BaseCbacBanner-CvFgBp_O.js";import"./makeExternalStore-BY7Bi3ZC.js";import"./Tooltip-CU8rKKB6.js";import"./PopoverPopup-CbQUEnW-.js";import"./toNumber-DKwz7U4E.js";import"./useOsdkClient-vEvQVfhh.js";import"./tick-C9esIUOv.js";import"./DropdownField-UV9CnX2Y.js";import"./withOsdkMetrics-jMVnEM0t.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
