import{f as b,j as a,r as i}from"./iframe-BReQfzQE.js";import{O as u}from"./object-table-Llyt5ct5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DwO3UDy6.js";import"./Table-DxYiGBse.js";import"./index-B3RyB3sX.js";import"./Dialog-Q4sMQBsW.js";import"./cross-DDbnTE35.js";import"./svgIconContainer-DgKPfbC9.js";import"./useBaseUiId-D_yAhBoN.js";import"./InternalBackdrop-CjzdQm0F.js";import"./composite-Dn9idZig.js";import"./index-BrppgLJh.js";import"./index-DTGT-YJS.js";import"./index-D9OyI5Pf.js";import"./useEventCallback-TLRQ_prm.js";import"./SkeletonBar-LdqCfnuv.js";import"./LoadingCell-DpWzeTaI.js";import"./ColumnConfigDialog-DG5S9Pea.js";import"./DraggableList-CSj5XYRK.js";import"./search-BEdvkX_p.js";import"./Input-dIZevx3g.js";import"./useControlled-BVoaGLTD.js";import"./Button-RYYrZpZz.js";import"./small-cross-P4M5Ph-v.js";import"./ActionButton-Cj_HY9aU.js";import"./Checkbox-DfEYdPeG.js";import"./useValueChanged-Cy5NSSXI.js";import"./CollapsiblePanel-u_bjLVp9.js";import"./MultiColumnSortDialog-BkpMJrrD.js";import"./MenuTrigger-Citb6tQE.js";import"./CompositeItem-B36SUBTb.js";import"./ToolbarRootContext-DsTt3FLa.js";import"./getDisabledMountTransitionStyles-CuA4Fj8h.js";import"./getPseudoElementBounds-SgBQR5iC.js";import"./chevron-down-t6mVIC1n.js";import"./index-DyCd-4H3.js";import"./error-DVK7hCu-.js";import"./BaseCbacBanner-DyvQJ8v1.js";import"./makeExternalStore-Dc95XsCd.js";import"./Tooltip-CkRwn9tz.js";import"./PopoverPopup-Dh__Jz8n.js";import"./toNumber-CVMK1AF6.js";import"./useOsdkClient-SlEx7HZ5.js";import"./tick-CKKZXEHC.js";import"./DropdownField-BsLhARnD.js";import"./withOsdkMetrics-C6O0UZBB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
