import{f as b,j as a,r as i}from"./iframe-DFY8VJiA.js";import{O as u}from"./object-table-DekiBxP9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DYQPoB0a.js";import"./Table-DTiKugCT.js";import"./index-Cyh0BAGo.js";import"./Dialog-C6OT_PSR.js";import"./cross-DhwePusw.js";import"./svgIconContainer-BC0JvcAN.js";import"./useBaseUiId-munBw4hb.js";import"./InternalBackdrop-CDbJypH3.js";import"./composite-DERqHqf8.js";import"./index-CFOVWCD1.js";import"./index-DkOv0cie.js";import"./index-1rFIUwlz.js";import"./useEventCallback-rvfsLwbm.js";import"./SkeletonBar-S-OgC9v2.js";import"./LoadingCell-CuGBYebr.js";import"./ColumnConfigDialog-CAp0azVM.js";import"./DraggableList-ZJaTW-ku.js";import"./search-DmLazW2P.js";import"./Input-ZKaLnGto.js";import"./useControlled-DlDk3rjW.js";import"./Button-Dd-6Wm_t.js";import"./small-cross-9So2KQCe.js";import"./ActionButton-CIEBqQXT.js";import"./Checkbox-CyjU-GZo.js";import"./useValueChanged-BzxLxRS9.js";import"./CollapsiblePanel-DTjhJsLZ.js";import"./MultiColumnSortDialog-0VWQENmH.js";import"./MenuTrigger-Cp__wkNW.js";import"./CompositeItem-DHHY_NUU.js";import"./ToolbarRootContext-C-PsSYTx.js";import"./getDisabledMountTransitionStyles-DDDCI_7I.js";import"./getPseudoElementBounds-jNlhs2VS.js";import"./chevron-down-C0e9hGKt.js";import"./index-CO5nCbUA.js";import"./error-RuEwtCs3.js";import"./BaseCbacBanner-Dfw7Ww54.js";import"./makeExternalStore-Beeee7G7.js";import"./Tooltip-CDkwFccO.js";import"./PopoverPopup-CR5gUu4I.js";import"./debounce-UmgWFeKf.js";import"./useOsdkClient-BM_GsjtL.js";import"./tick-CbAy2oWE.js";import"./DropdownField-C-2cnHee.js";import"./isEqual-DjzJwDRd.js";import"./withOsdkMetrics-US1iMNLV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
