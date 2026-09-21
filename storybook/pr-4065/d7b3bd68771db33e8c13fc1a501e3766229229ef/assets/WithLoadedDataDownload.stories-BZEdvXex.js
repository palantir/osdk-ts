import{f as b,j as a,r as i}from"./iframe-BkN_38ur.js";import{O as u}from"./object-table-BxK2SFkH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BysSMJyv.js";import"./Table-CHYRgWFW.js";import"./index-VCNAMxPB.js";import"./Dialog-CU_R9RQd.js";import"./cross-QuNtfWNx.js";import"./svgIconContainer-CleM6Ots.js";import"./useBaseUiId-DDXpceTn.js";import"./InternalBackdrop-2b4i1OXO.js";import"./composite-DTpp6U8p.js";import"./index-B8WRO5V1.js";import"./index-B4VzS2Ja.js";import"./index-PtHv8Npb.js";import"./useEventCallback-CfnnU2xW.js";import"./SkeletonBar-BLri9E0k.js";import"./LoadingCell-D8UndlJ7.js";import"./ColumnConfigDialog-BRCStEaP.js";import"./DraggableList-CBM_kRa4.js";import"./search-DLVM4UyR.js";import"./Input-BB5NVTdl.js";import"./useControlled-Cl0okxKJ.js";import"./Button-Bz7lNxsT.js";import"./small-cross-Bq-afI8J.js";import"./ActionButton-BEokvpGB.js";import"./Checkbox-B2Ex9sZd.js";import"./useValueChanged-sVrHRRrg.js";import"./CollapsiblePanel-o_jOyFnm.js";import"./MultiColumnSortDialog-DJ3dPbhu.js";import"./MenuTrigger-Baz3vKii.js";import"./CompositeItem-DeZdbGTL.js";import"./ToolbarRootContext-DsnyQOq9.js";import"./getDisabledMountTransitionStyles-B4uk2RCK.js";import"./getPseudoElementBounds-DqBsVHMm.js";import"./chevron-down-DQ_KkOEg.js";import"./index-tJ30rsuQ.js";import"./error-B2ZdHohT.js";import"./BaseCbacBanner-B7QoD-f1.js";import"./makeExternalStore-BQFFGO0N.js";import"./Tooltip-DB2l-4XV.js";import"./PopoverPopup-BGPwoB7x.js";import"./debounce-BH4zeBLy.js";import"./useOsdkClient-C7M0gZ9G.js";import"./tick-Ja0-lS9C.js";import"./DropdownField-DMG193d-.js";import"./isEqual-DV7eM8kA.js";import"./withOsdkMetrics-Bgcs-XTD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
