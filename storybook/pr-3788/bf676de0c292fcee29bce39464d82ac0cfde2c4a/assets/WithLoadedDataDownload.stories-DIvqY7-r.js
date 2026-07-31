import{f as b,j as a,r as i}from"./iframe-CIS7R8S0.js";import{O as u}from"./object-table-BRD1LaCv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CC0KEkYJ.js";import"./Table-vPXnTHDL.js";import"./index-BB05R3oj.js";import"./Dialog-jYt7TAkd.js";import"./cross-CypSL_mg.js";import"./svgIconContainer-DOCbxMNh.js";import"./useBaseUiId-Dx4TGSeb.js";import"./InternalBackdrop-B3HiLuVl.js";import"./composite-CQ8jq4un.js";import"./index-DM_wVMTu.js";import"./index-BKg_5Wuy.js";import"./index-Qbb5HOpD.js";import"./useEventCallback-DaJcuQ4l.js";import"./SkeletonBar-BdzAGyaZ.js";import"./LoadingCell-CGJ1Ce-Y.js";import"./ColumnConfigDialog-C15oeIig.js";import"./DraggableList-CySBtFi9.js";import"./search-CrRqmjmd.js";import"./Input-BbMczDPo.js";import"./useControlled-LRidnfkr.js";import"./isEqual-EKJAET8s.js";import"./isObject-CFesdK53.js";import"./Button-TVnROWVX.js";import"./ActionButton-CcVczjK6.js";import"./Checkbox-Wl3wBnfs.js";import"./useValueChanged-QRf8gN2r.js";import"./CollapsiblePanel-B5HdsVrp.js";import"./MultiColumnSortDialog-BWxk4_FC.js";import"./MenuTrigger-Bq45j4AP.js";import"./CompositeItem-DDPMwQ0l.js";import"./ToolbarRootContext-DAJLxMfM.js";import"./getDisabledMountTransitionStyles-hIgbxFBq.js";import"./getPseudoElementBounds-CmW25CrH.js";import"./chevron-down-BSAXsWfp.js";import"./index-DWJWtSQK.js";import"./error-dhKwelIe.js";import"./BaseCbacBanner-oSNgv8Qw.js";import"./makeExternalStore-RXScgX-m.js";import"./Tooltip-BJuu_c-9.js";import"./PopoverPopup-B7149Gul.js";import"./toNumber-OTthO2wW.js";import"./useOsdkClient-DkCUuQgu.js";import"./tick-BCb19KZc.js";import"./DropdownField-9gKqheEJ.js";import"./withOsdkMetrics-BwKjYpjZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
