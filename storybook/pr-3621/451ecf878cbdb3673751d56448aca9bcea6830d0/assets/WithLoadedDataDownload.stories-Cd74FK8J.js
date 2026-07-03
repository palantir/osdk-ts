import{f as b,j as a,r as i}from"./iframe-uTXwVL4F.js";import{O as u}from"./object-table-DIOzTOxW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BL2Rlz3w.js";import"./Table-Duq8Hmw4.js";import"./index-CedNq3PH.js";import"./Dialog-CNE99CMV.js";import"./cross-BiHialsl.js";import"./svgIconContainer-Cygaw58B.js";import"./useBaseUiId-kneBe7Np.js";import"./InternalBackdrop-CXSedJtY.js";import"./composite-DGATLN9V.js";import"./index-HeZ0ZZML.js";import"./index-CKWuL0RK.js";import"./index-wbk6F8X-.js";import"./useEventCallback-CKwon-xu.js";import"./SkeletonBar-og5HTItT.js";import"./LoadingCell-CpzUzyqw.js";import"./ColumnConfigDialog-qWBheQUH.js";import"./DraggableList-CB2N_HsJ.js";import"./search-DACJTo3N.js";import"./Input-lAt0QBYx.js";import"./useControlled-C-sFKJDs.js";import"./Button-B7QYvEdy.js";import"./small-cross-R6H9P0zm.js";import"./ActionButton-BUuotsqZ.js";import"./Checkbox-CHE-Ihw7.js";import"./useValueChanged-DQd6cYmY.js";import"./CollapsiblePanel-BwWhdUOV.js";import"./MultiColumnSortDialog-DcabJEWv.js";import"./MenuTrigger-CGtmwGtr.js";import"./CompositeItem-CVK_sYIm.js";import"./ToolbarRootContext-CstOX0ey.js";import"./getDisabledMountTransitionStyles-B7MI1c3Y.js";import"./getPseudoElementBounds-BStDqau5.js";import"./chevron-down-dkj0UCKy.js";import"./index-CNJYjch8.js";import"./error-B6vwRxa-.js";import"./BaseCbacBanner-DfQdHEwb.js";import"./makeExternalStore-c8aY4eVN.js";import"./Tooltip-BTvyZa1d.js";import"./PopoverPopup-DrR5AD0B.js";import"./toNumber-Dg5nR7Lp.js";import"./useOsdkClient-DcJ176uE.js";import"./tick-A18DrOGJ.js";import"./DropdownField-VGeBPz4c.js";import"./withOsdkMetrics-C7DoBq42.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
