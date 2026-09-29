import{f as b,j as a,r as i}from"./iframe-B2Hbgk_7.js";import{O as u}from"./object-table-TTmYKvxF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BIOghnjg.js";import"./Table-BobHU4WV.js";import"./index-DrosstMD.js";import"./Dialog-nRqw2oyt.js";import"./cross-CMOlEEKU.js";import"./svgIconContainer-kTH1S9JE.js";import"./useBaseUiId-El1KPGB5.js";import"./InternalBackdrop-ZJrbhxPy.js";import"./composite-C00UUeG4.js";import"./index-BElQuRwB.js";import"./index-y9S8xmis.js";import"./index-DRG_YeJ3.js";import"./useEventCallback-DLOU8qGC.js";import"./SkeletonBar-gVSZNwCd.js";import"./LoadingCell-NcPon7Hr.js";import"./ColumnConfigDialog-DZJPchLf.js";import"./DraggableList-C_pfPm07.js";import"./search-Dge6vq_P.js";import"./Input-C7VTBgbc.js";import"./useControlled-Y-hNBLuR.js";import"./Button-ChD0uv2M.js";import"./small-cross-vAFwZtSV.js";import"./ActionButton-DLmadiS3.js";import"./Checkbox-D_5Ownj5.js";import"./useValueChanged-Dpnjqk8r.js";import"./CollapsiblePanel-pfoTWKHp.js";import"./MultiColumnSortDialog-P02OhBBe.js";import"./MenuTrigger-DQPx8r-g.js";import"./CompositeItem-CUZ4C8IA.js";import"./ToolbarRootContext-deiGRCW1.js";import"./getDisabledMountTransitionStyles-DrqZTZzZ.js";import"./getPseudoElementBounds-BgsAZpVp.js";import"./chevron-down-BIdOqTL3.js";import"./index-BZMUxiku.js";import"./error-CG38qSaD.js";import"./BaseCbacBanner-5led0h6U.js";import"./makeExternalStore-BIZDH2fs.js";import"./Tooltip-COASp5Bq.js";import"./PopoverPopup-Cp5uUE9r.js";import"./debounce-Xb7mC0HA.js";import"./useOsdkClient--TStUSqZ.js";import"./tick-7D0Lucc7.js";import"./DropdownField-DIFmpXyB.js";import"./isEqual-CbYfRPeI.js";import"./withOsdkMetrics-Cum7Zc0o.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
