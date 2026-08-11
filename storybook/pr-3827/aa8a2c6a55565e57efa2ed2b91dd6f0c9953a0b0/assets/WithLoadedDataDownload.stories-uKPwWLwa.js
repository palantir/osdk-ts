import{f as b,j as a,r as i}from"./iframe-BB2E5Jix.js";import{O as u}from"./object-table-Cq8EQafa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-XstBZj0v.js";import"./Table-C_RaYKNB.js";import"./index-zGb1pbmH.js";import"./Dialog-Caobyqao.js";import"./cross-B8YgiCYl.js";import"./svgIconContainer-CXjFTKQc.js";import"./useBaseUiId-T8MHyWrJ.js";import"./InternalBackdrop-BU8oV8wN.js";import"./composite-DQwmFGUd.js";import"./index-Cft78AYh.js";import"./index-CLogktU3.js";import"./index-CDZCasWv.js";import"./useEventCallback-bXtnurx0.js";import"./SkeletonBar-DOM6sWKN.js";import"./LoadingCell-CEE6ECLC.js";import"./ColumnConfigDialog-i_CcXCPU.js";import"./DraggableList-B4O4-Uk4.js";import"./search-DPNy6EUf.js";import"./Input-vhcxgD7F.js";import"./useControlled-4jwl_yb5.js";import"./isEqual-DpkjvpyX.js";import"./isObject-cuWUV_SB.js";import"./Button-JlhJjdd0.js";import"./ActionButton-DzEBxPTA.js";import"./Checkbox-BQydhIvd.js";import"./useValueChanged-C37wvZ3p.js";import"./CollapsiblePanel-Dz0U_34e.js";import"./MultiColumnSortDialog-D_m8j8zj.js";import"./MenuTrigger-CS3ve4y6.js";import"./CompositeItem-Cc57-add.js";import"./ToolbarRootContext-VydJXhkq.js";import"./getDisabledMountTransitionStyles-TDufTSfj.js";import"./getPseudoElementBounds-ZgCYbSXN.js";import"./chevron-down-C_RItkCu.js";import"./index-D-e5E8TN.js";import"./error-DMB-1Uz3.js";import"./BaseCbacBanner-D-RccEMB.js";import"./makeExternalStore-D2tsWs0v.js";import"./Tooltip-DzUvJnVd.js";import"./PopoverPopup-CCnnPXu2.js";import"./toNumber-DxI2SU5x.js";import"./useOsdkClient-CtNTkVn8.js";import"./tick-vmRc4WsE.js";import"./DropdownField-5ckOa_G6.js";import"./withOsdkMetrics-D-4z6JPU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
