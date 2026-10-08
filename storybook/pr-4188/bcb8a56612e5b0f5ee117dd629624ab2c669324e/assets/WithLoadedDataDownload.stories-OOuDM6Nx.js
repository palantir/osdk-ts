import{f as b,j as a,r as i}from"./iframe-BpcZw0Qh.js";import{O as u}from"./object-table-DUmT7cvP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-bs_ZWCVp.js";import"./Table-s-iRKnNU.js";import"./index-RyqdaqZt.js";import"./Dialog-C1FgKXrl.js";import"./cross-BQZa2Kkg.js";import"./svgIconContainer-B6eNnREq.js";import"./useBaseUiId-BsFMaRmq.js";import"./InternalBackdrop-CephDmCg.js";import"./composite-b_Vir_Qy.js";import"./index-j_Bq1Wxb.js";import"./index-hOxH3DWt.js";import"./index-9jDzRHbg.js";import"./useEventCallback-Dyo7s63d.js";import"./SkeletonBar-CFFQOHPZ.js";import"./LoadingCell-D1RU1IJM.js";import"./ColumnConfigDialog-BR1gNZ0z.js";import"./DraggableList-DwApawfg.js";import"./search-C5aLdI-z.js";import"./Input-B-pxSN65.js";import"./useControlled-BaPgI88u.js";import"./Button-xX1VEK25.js";import"./small-cross-B0G2BYVi.js";import"./ActionButton-CSQPpyYl.js";import"./Checkbox-D3OGLlT9.js";import"./useValueChanged-DyTrIZ4q.js";import"./CollapsiblePanel-BGTJ0O0p.js";import"./MultiColumnSortDialog-Cl67X5Ew.js";import"./MenuTrigger-toVLb17l.js";import"./CompositeItem-CiXh4i5Q.js";import"./ToolbarRootContext-Bafsun3r.js";import"./getDisabledMountTransitionStyles-DAuYWGeR.js";import"./getPseudoElementBounds-CMoxeRLZ.js";import"./chevron-down-0qsj7SKJ.js";import"./index-BvmVuSqJ.js";import"./error-DJy30QKE.js";import"./BaseCbacBanner-BbbKJkgD.js";import"./makeExternalStore-vOLbyGHJ.js";import"./Tooltip-CrVqygHA.js";import"./PopoverPopup-CiGvhW0c.js";import"./debounce-BUHFTaie.js";import"./useOsdkClient-BPiM2Ufk.js";import"./tick-BLie4KaX.js";import"./DropdownField-BY-KWr1H.js";import"./isEqual-B9mRJgu4.js";import"./withOsdkMetrics-OlYBoQiq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
