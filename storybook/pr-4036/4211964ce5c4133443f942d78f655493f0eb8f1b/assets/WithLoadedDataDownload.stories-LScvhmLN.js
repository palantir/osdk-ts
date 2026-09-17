import{f as b,j as a,r as i}from"./iframe-BtGRzxci.js";import{O as u}from"./object-table-DvJWCPho.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CyrDjGUQ.js";import"./Table-hzixPhpe.js";import"./index-tVIozFN1.js";import"./Dialog-UXl6_OEU.js";import"./cross-7jkwYPrY.js";import"./svgIconContainer-CN6dxZIp.js";import"./useBaseUiId-XRf534_a.js";import"./InternalBackdrop-BfGRu2JH.js";import"./composite-Btju52rS.js";import"./index-Dv2SWeyR.js";import"./index-BV7_z1j7.js";import"./index-Nbrbbk2B.js";import"./useEventCallback-BiNkxLXV.js";import"./SkeletonBar-DUe5rZ6s.js";import"./LoadingCell-C0-SnIgS.js";import"./ColumnConfigDialog-Iho4vn5M.js";import"./DraggableList-DnLFn3Lu.js";import"./search-BPr2MDER.js";import"./Input-DGQhm6BR.js";import"./useControlled-rccl1Nao.js";import"./Button-CmbUXSv3.js";import"./small-cross-CkeumqgW.js";import"./ActionButton-5xGca2at.js";import"./Checkbox-D--Pvna1.js";import"./useValueChanged-CjbtTYfl.js";import"./CollapsiblePanel-BaiGGDJy.js";import"./MultiColumnSortDialog-DYusjWQp.js";import"./MenuTrigger-IMl7rvKJ.js";import"./CompositeItem-CG89Nl1U.js";import"./ToolbarRootContext-D3OhDsHo.js";import"./getDisabledMountTransitionStyles-CJvQQmV9.js";import"./getPseudoElementBounds-Wk9KfacK.js";import"./chevron-down-C1HWTq_e.js";import"./index-DLTZ7l6I.js";import"./error-swCJC4aW.js";import"./BaseCbacBanner-BFDB5_A0.js";import"./makeExternalStore-DP55EZzE.js";import"./Tooltip-vzjWcP7C.js";import"./PopoverPopup-Ckm-Ve__.js";import"./debounce-YXq4O7nI.js";import"./useOsdkClient-DvX2DAiH.js";import"./tick-ac30L8P3.js";import"./DropdownField-DhAab1KW.js";import"./isEqual-DiCfN5tv.js";import"./withOsdkMetrics-7PiZwI5Y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
