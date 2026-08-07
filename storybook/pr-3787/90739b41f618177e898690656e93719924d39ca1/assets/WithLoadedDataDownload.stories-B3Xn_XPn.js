import{f as b,j as a,r as i}from"./iframe-BzWIB64s.js";import{O as u}from"./object-table-DhfCjMZa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-rFyywtxe.js";import"./Table-4uZ9_6Ne.js";import"./index-DfNwDZkB.js";import"./Dialog-DWNafTlc.js";import"./cross-Ckuh3sxL.js";import"./svgIconContainer-CqmqwQ_y.js";import"./useBaseUiId-CxW8wnCT.js";import"./InternalBackdrop-DGQzj-kD.js";import"./composite-CAPd73HO.js";import"./index-OSq7gO3K.js";import"./index-CSOQLHLc.js";import"./index-CicY2RuE.js";import"./useEventCallback-P1ZgnZOE.js";import"./SkeletonBar-bYTd4rJZ.js";import"./LoadingCell-Dq6XtdVW.js";import"./ColumnConfigDialog-Dme3oykV.js";import"./DraggableList-CZAZg46n.js";import"./search-BwW8B6vN.js";import"./Input-jzz_WLdV.js";import"./useControlled-BurtOwE_.js";import"./isEqual-CI8dWNwP.js";import"./isObject-Cqjoz7ZR.js";import"./Button-D-HHsrb0.js";import"./ActionButton-BOXurmj1.js";import"./Checkbox-DlkLdICv.js";import"./useValueChanged-BExBI2qc.js";import"./CollapsiblePanel-C_abRnbI.js";import"./MultiColumnSortDialog-Ci4Tj2Gu.js";import"./MenuTrigger-BUuYNFK-.js";import"./CompositeItem-Cko4FjAL.js";import"./ToolbarRootContext-BvYqQjl4.js";import"./getDisabledMountTransitionStyles-n0VH86Np.js";import"./getPseudoElementBounds-CycmnbqW.js";import"./chevron-down-OVbf4Oys.js";import"./index-hj2OXCFm.js";import"./error-BOU7Ocpj.js";import"./BaseCbacBanner-Q96kxK1u.js";import"./makeExternalStore-CND2K_mN.js";import"./Tooltip-Cx8rylOT.js";import"./PopoverPopup-B11pUap8.js";import"./toNumber-CNhbAXun.js";import"./useOsdkClient-PaKg2no4.js";import"./tick-CB79yduw.js";import"./DropdownField-Dd008IEL.js";import"./withOsdkMetrics-DLIsJJkp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
