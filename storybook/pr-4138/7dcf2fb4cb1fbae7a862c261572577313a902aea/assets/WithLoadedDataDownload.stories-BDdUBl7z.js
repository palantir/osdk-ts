import{f as b,j as a,r as i}from"./iframe-E4YUsTVF.js";import{O as u}from"./object-table-DWM0-L5g.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DS93hH50.js";import"./Table-5CsWYwnt.js";import"./index-33WajHAP.js";import"./Dialog-Cl3CkdMS.js";import"./cross-B0teiHtj.js";import"./svgIconContainer-BpDOXtMt.js";import"./useBaseUiId-Cmr5xOLR.js";import"./InternalBackdrop-6uJFTnu9.js";import"./composite-BPb4GIr2.js";import"./index-BD5alyvs.js";import"./index-C6lnPhSr.js";import"./index-BOSZpFJm.js";import"./useEventCallback-s63RPRIc.js";import"./SkeletonBar-COMgymc7.js";import"./LoadingCell-Bn9Rt80S.js";import"./ColumnConfigDialog-C1-Mg0Dr.js";import"./DraggableList-BBZ0k5a3.js";import"./search-C6TyODke.js";import"./Input-DzBskEWR.js";import"./useControlled-DcS_dYjp.js";import"./Button-D8Hq8qlo.js";import"./small-cross-DNql_UiE.js";import"./ActionButton-BNsdbYhX.js";import"./Checkbox-B1QYVWe8.js";import"./useValueChanged-_zlf4vQL.js";import"./CollapsiblePanel-CG_xY-4r.js";import"./MultiColumnSortDialog-DslMmcvG.js";import"./MenuTrigger-Bq0YGNRA.js";import"./CompositeItem-Dy6HQ5ii.js";import"./ToolbarRootContext-Z5Mk8e8P.js";import"./getDisabledMountTransitionStyles-nCIeRxS6.js";import"./getPseudoElementBounds-BB4Ow9wc.js";import"./chevron-down-BXAN807d.js";import"./index-C0oG0k9r.js";import"./error-C7OFda1X.js";import"./BaseCbacBanner-qUBT9zEy.js";import"./makeExternalStore-BPwvobNb.js";import"./Tooltip-FSxkyrOa.js";import"./PopoverPopup-Dp3SH3RM.js";import"./debounce-Dxqh-VtF.js";import"./useOsdkClient-COGErPcP.js";import"./tick-CpUkHDlc.js";import"./DropdownField-F9-Dgqve.js";import"./isEqual-DuvhWdoj.js";import"./withOsdkMetrics-BjBJAZAm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
