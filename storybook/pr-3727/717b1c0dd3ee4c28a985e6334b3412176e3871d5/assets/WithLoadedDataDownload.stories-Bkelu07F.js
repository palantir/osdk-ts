import{f as b,j as a,r as i}from"./iframe-uQf2Y6HY.js";import{O as u}from"./object-table-DQt5yxaU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Du3gRcYm.js";import"./Table-9AQeJSh6.js";import"./index-BN2fncHn.js";import"./Dialog-B9EecI1R.js";import"./cross-D7UO5IDe.js";import"./svgIconContainer-BjU-0ep4.js";import"./useBaseUiId-BLcC56e1.js";import"./InternalBackdrop-C6HlheEM.js";import"./composite-BVu4qhAZ.js";import"./index-B12iX9a-.js";import"./index-Dk4BWPdu.js";import"./index-M5181JLA.js";import"./useEventCallback-CO_z638G.js";import"./SkeletonBar-Bq_s3uM9.js";import"./LoadingCell-BkNbQrIJ.js";import"./ColumnConfigDialog-Cf32CT1u.js";import"./DraggableList-I_Ro7yVS.js";import"./search-v_cg4ZhI.js";import"./Input-CiZhYTqy.js";import"./useControlled-CkzW_hrg.js";import"./isEqual-DFG5pq8M.js";import"./isObject-CcVU54Jt.js";import"./Button-D7tsmr_Z.js";import"./ActionButton-zKss17dg.js";import"./Checkbox-D6X628fx.js";import"./useValueChanged-CSdyG5P4.js";import"./CollapsiblePanel-BfCQh_J2.js";import"./MultiColumnSortDialog-BAt8hFm9.js";import"./MenuTrigger-BK-NYu4h.js";import"./CompositeItem-xMHAt2fI.js";import"./ToolbarRootContext-BiNbQSPr.js";import"./getDisabledMountTransitionStyles-BSoK7Im8.js";import"./getPseudoElementBounds-8g8R3PQv.js";import"./chevron-down-DgfzreOC.js";import"./index-CSLzCzGV.js";import"./error-59MnhwpW.js";import"./BaseCbacBanner-CcymD6OY.js";import"./makeExternalStore-BtLnKhO1.js";import"./Tooltip-BPmIrGMo.js";import"./PopoverPopup-Dhn9i3v0.js";import"./toNumber-B_Nph6Sy.js";import"./useOsdkClient-CkIwKmuM.js";import"./tick-CqBlLImE.js";import"./DropdownField-D8k8v8mo.js";import"./withOsdkMetrics-_IPiFb8m.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
