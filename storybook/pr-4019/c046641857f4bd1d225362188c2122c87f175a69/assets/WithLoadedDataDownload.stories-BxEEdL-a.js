import{f as b,j as a,r as i}from"./iframe-BTufhzDU.js";import{O as u}from"./object-table-CCtZX51e.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-18tKsGVi.js";import"./Table-BytxhvGb.js";import"./index-Bgh_kCmT.js";import"./Dialog-C9s3lFhW.js";import"./cross-CDJmthjs.js";import"./svgIconContainer-CIDYFOR4.js";import"./useBaseUiId-B_rOieJo.js";import"./InternalBackdrop-BOulsSWB.js";import"./composite-C_GDjy5Q.js";import"./index-COZLl5wP.js";import"./index-B-UiCFnv.js";import"./index-D_PI1Th3.js";import"./useEventCallback-D-COXZHZ.js";import"./SkeletonBar-ymkmzl6c.js";import"./LoadingCell-DYZ88Ngb.js";import"./ColumnConfigDialog-CMRAL8K2.js";import"./DraggableList-CSkdx2wi.js";import"./search-DSjsSTcq.js";import"./Input-GDvhao2V.js";import"./useControlled-B8odZqt5.js";import"./Button-C08Dl8zL.js";import"./small-cross-DeBGztGD.js";import"./ActionButton-CDYSucfC.js";import"./Checkbox-Byh7Dyfc.js";import"./useValueChanged-yHO5JJpr.js";import"./CollapsiblePanel-DnLCtJrZ.js";import"./MultiColumnSortDialog-DHZpgmw8.js";import"./MenuTrigger-C7Fb3nhC.js";import"./CompositeItem-C2mdT24u.js";import"./ToolbarRootContext-c-VxwH3T.js";import"./getDisabledMountTransitionStyles-CJ4mZ_K7.js";import"./getPseudoElementBounds-BRhWDMTt.js";import"./chevron-down-CqOeUkb7.js";import"./index-DEr9UFjH.js";import"./error-DOFx9qT5.js";import"./BaseCbacBanner-52v7dT8q.js";import"./makeExternalStore-CzdIOkHP.js";import"./Tooltip-CqNQQfxr.js";import"./PopoverPopup-vY6UzFEA.js";import"./debounce-BhoGA986.js";import"./useOsdkClient-tOUmwv_4.js";import"./tick-DEzBGa0_.js";import"./DropdownField-Y24yrVFb.js";import"./isEqual-jP6H4NT-.js";import"./withOsdkMetrics-BNGLvviV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
