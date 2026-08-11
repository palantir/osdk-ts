import{f as b,j as a,r as i}from"./iframe-acbxn-f7.js";import{O as u}from"./object-table-CN5yha45.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fbPQYzet.js";import"./Table-BBFk4ims.js";import"./index-CVPAqU1b.js";import"./Dialog-CwejTPwi.js";import"./cross-BW0HBlIL.js";import"./svgIconContainer-DRdEcW3D.js";import"./useBaseUiId-CdtAIfTS.js";import"./InternalBackdrop-CiYWkt9x.js";import"./composite-CPBbATn-.js";import"./index-D440U2lf.js";import"./index-DqqbpueN.js";import"./index-DywtUTxm.js";import"./useEventCallback-C4hxqqtx.js";import"./SkeletonBar-DfTJMEGe.js";import"./LoadingCell-Cxki7mau.js";import"./ColumnConfigDialog-D5_Oyh5j.js";import"./DraggableList-L1L_4TYq.js";import"./search-DiYKFhHE.js";import"./Input-BjbaQoWk.js";import"./useControlled-GOo3Sud3.js";import"./isEqual-z9pnKAG9.js";import"./isObject-DSXN-3i3.js";import"./Button-1BzMXgMp.js";import"./ActionButton-D0AUONzO.js";import"./Checkbox-CAXj-zpQ.js";import"./useValueChanged-UVEJ5iFP.js";import"./CollapsiblePanel-DaXd5Eta.js";import"./MultiColumnSortDialog-DWFARLg5.js";import"./MenuTrigger-2GuiCSnN.js";import"./CompositeItem-C-TpVr46.js";import"./ToolbarRootContext-DhAyKrZU.js";import"./getDisabledMountTransitionStyles-CoXTLwP5.js";import"./getPseudoElementBounds-n0j8dayn.js";import"./chevron-down-fLJV3lSr.js";import"./index-7FxVYwUR.js";import"./error-RYjU87Ko.js";import"./BaseCbacBanner-DZaR4XFw.js";import"./makeExternalStore-B4WBQrGe.js";import"./Tooltip-Bielf6rk.js";import"./PopoverPopup-A73qwNSF.js";import"./toNumber-hUwX4eVc.js";import"./useOsdkClient-CqDg3tJw.js";import"./tick-BS44LqM1.js";import"./DropdownField-BsQvaeWW.js";import"./withOsdkMetrics-DopriMje.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
