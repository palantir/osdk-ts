import{f as b,j as a,r as i}from"./iframe-C_zjGY3J.js";import{O as u}from"./object-table-D_a_bNrF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CxQirRCn.js";import"./Table-BmZ3cbF4.js";import"./index-DKxF60He.js";import"./Dialog-BlUCTEGI.js";import"./cross-CQU2s8jh.js";import"./svgIconContainer-D5MQxCYm.js";import"./useBaseUiId-B_8kV6Oo.js";import"./InternalBackdrop-uWsHH71n.js";import"./composite-Cr4kgIEQ.js";import"./index-9SuB44sP.js";import"./index-DHjZHyf_.js";import"./index-DI66YYCT.js";import"./useEventCallback-BQXY3ym0.js";import"./SkeletonBar-Cy9nbF32.js";import"./LoadingCell-ClHyyMra.js";import"./ColumnConfigDialog-CphJnc9v.js";import"./DraggableList-C-oqobil.js";import"./search-BzCll0d5.js";import"./Input-DcJi9KF0.js";import"./useControlled-Cax61rbp.js";import"./Button-CKW0-13G.js";import"./small-cross-CGjWQ0oG.js";import"./ActionButton-C5vJNt5z.js";import"./Checkbox-DfWzx-fE.js";import"./useValueChanged-BYMJHvk0.js";import"./CollapsiblePanel-BDYGizlk.js";import"./MultiColumnSortDialog-B9lziHSh.js";import"./MenuTrigger-CqjyYUeG.js";import"./CompositeItem-LZfgl15E.js";import"./ToolbarRootContext-CDpaEjw6.js";import"./getDisabledMountTransitionStyles-XdJXtecO.js";import"./getPseudoElementBounds-BkxLwt0A.js";import"./chevron-down-DXGDx1Zu.js";import"./index-B0AlpjVO.js";import"./error-D5GOl81y.js";import"./BaseCbacBanner-D9ha1EV-.js";import"./makeExternalStore-UmBMWTEb.js";import"./Tooltip-DApHIikG.js";import"./PopoverPopup-BzhSaZz_.js";import"./debounce-h7EBhWzB.js";import"./useOsdkClient-Y2kyMsP0.js";import"./tick-CL77rkJb.js";import"./DropdownField-CyGzvNY6.js";import"./isEqual-iv7yWJ2R.js";import"./withOsdkMetrics-BNDJqEzp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
