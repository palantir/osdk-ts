import{f as b,j as a,r as i}from"./iframe-CwfFVXYm.js";import{O as u}from"./object-table-3hjC1a4Q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0i1Ccv8.js";import"./Table-CiqC9yT2.js";import"./index-12mUJC8n.js";import"./Dialog-BToK1dJZ.js";import"./cross-vHANk4GA.js";import"./svgIconContainer-CGFZMhJS.js";import"./useBaseUiId-D7i-0lUl.js";import"./InternalBackdrop-DOJpSrKf.js";import"./composite-B35ndqHm.js";import"./index-DNXZoFIr.js";import"./index-D2z71Qsm.js";import"./index-Crk-izdP.js";import"./useEventCallback-YTEY1SDl.js";import"./SkeletonBar-BTELcMSt.js";import"./LoadingCell-oWGhXH5n.js";import"./ColumnConfigDialog-_KnKOWel.js";import"./DraggableList-V2JUX2Gf.js";import"./search-CXyOr2KE.js";import"./Input-B3BLVjbw.js";import"./useControlled-CBv31JWZ.js";import"./Button-BEoayh3H.js";import"./small-cross-Kn0-K05A.js";import"./ActionButton-B9_iyqEc.js";import"./Checkbox-DUi2IRjx.js";import"./useValueChanged-DnLqpX89.js";import"./CollapsiblePanel-shOVr1N_.js";import"./MultiColumnSortDialog-OCs0OixQ.js";import"./MenuTrigger-CDYnPChJ.js";import"./CompositeItem-BPiFovJv.js";import"./ToolbarRootContext-mV67Z_2Q.js";import"./getDisabledMountTransitionStyles-C_Pdyoj5.js";import"./getPseudoElementBounds-nE2iYe28.js";import"./chevron-down-CYWunexi.js";import"./index-DTmUBa4U.js";import"./error-BbOajjO4.js";import"./BaseCbacBanner-CaF6WltH.js";import"./makeExternalStore-D75zw0dv.js";import"./Tooltip-ChZSMVBv.js";import"./PopoverPopup-C1H_pV3d.js";import"./debounce-T3lrOezK.js";import"./useOsdkClient-D4ODTHFx.js";import"./tick-CBvk4wqY.js";import"./DropdownField-B644qOm6.js";import"./isEqual-DxZ23_bo.js";import"./withOsdkMetrics-Ojccrccx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
