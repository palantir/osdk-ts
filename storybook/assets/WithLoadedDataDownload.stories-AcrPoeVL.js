import{f as b,j as a,r as i}from"./iframe-8JOFoP6w.js";import{O as u}from"./object-table-Bpoz7acy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-De2QC20j.js";import"./index-DVXlafOG.js";import"./Dialog-CgZPGdtx.js";import"./cross-Ba_aocLO.js";import"./svgIconContainer-Bc52btQW.js";import"./useBaseUiId-DJOFV3yl.js";import"./InternalBackdrop-BC0u02pm.js";import"./composite-Dacbrp7D.js";import"./index-DABUx9II.js";import"./index-DIPLjPoi.js";import"./index-DydTQsmK.js";import"./useEventCallback-RYf_Rpw0.js";import"./SkeletonBar-DviTtz4R.js";import"./LoadingCell-BjoaI82Y.js";import"./ColumnConfigDialog-KJ4u-4ae.js";import"./DraggableList-BL0RmeUx.js";import"./search-ld6lzdhI.js";import"./Input-B80vLCMJ.js";import"./useControlled-EfqR38x7.js";import"./Button-BowFr5Gg.js";import"./small-cross-_0ChGPYI.js";import"./ActionButton-BBgXQWJV.js";import"./Checkbox-DKwxEkJA.js";import"./useValueChanged-6-LufgCy.js";import"./CollapsiblePanel-B36mIUJ8.js";import"./MultiColumnSortDialog-DXtYuqFl.js";import"./MenuTrigger-Cnbw05Jv.js";import"./CompositeItem-DOhO0oM7.js";import"./ToolbarRootContext-5xRdL1EJ.js";import"./getDisabledMountTransitionStyles-OPbP8IPW.js";import"./getPseudoElementBounds-CjsOipTW.js";import"./chevron-down-dUDP5SOr.js";import"./index-DTTaRHwW.js";import"./error-BLfUwIjQ.js";import"./BaseCbacBanner-ZBYP9bYo.js";import"./makeExternalStore-ZHAkzHUN.js";import"./Tooltip-o0yaOQGv.js";import"./PopoverPopup-fb6R-GhK.js";import"./debounce-CYBn2EID.js";import"./useOsdkClient-D2545i5_.js";import"./tick-C65V9PGT.js";import"./DropdownField-BGIt2m0K.js";import"./isEqual-CdgPAtY7.js";import"./withOsdkMetrics-DErVVM0k.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
