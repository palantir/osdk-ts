import{f as b,j as a,r as i}from"./iframe-zMSgvVTG.js";import{O as u}from"./object-table-C27fLFw5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CHmHvHs-.js";import"./Table-XbeVunr5.js";import"./index-xqKU_H0G.js";import"./Dialog-6hx-M78o.js";import"./cross-Cyx-yofV.js";import"./svgIconContainer-HpE8WRxf.js";import"./useBaseUiId-DC4igyPd.js";import"./InternalBackdrop-9qFL_zoA.js";import"./composite-B9H-VkW1.js";import"./index-BGgYI7-3.js";import"./index-Bm8Z36J8.js";import"./index-CYSAVLSr.js";import"./useEventCallback-BAHB6mo0.js";import"./SkeletonBar-BAvT96jt.js";import"./LoadingCell-VIt-botQ.js";import"./ColumnConfigDialog-Yj6w64Ha.js";import"./DraggableList-CDZh4wpr.js";import"./Input-F4oRMikg.js";import"./useControlled-Co5JUK6d.js";import"./Button-D5KttGWB.js";import"./small-cross-dwNhTgiZ.js";import"./ActionButton-B2yeVQIj.js";import"./Checkbox-1CkDRkw0.js";import"./minus-CL7pP9d0.js";import"./useValueChanged-DIFs6OvD.js";import"./caret-down-B_BmVBvP.js";import"./CollapsiblePanel-BntCMBP1.js";import"./MultiColumnSortDialog-CuTVfPTk.js";import"./MenuTrigger-pSQuhJpj.js";import"./CompositeItem-Dg9iP0H2.js";import"./ToolbarRootContext-BPU53F95.js";import"./getDisabledMountTransitionStyles-CAmmLEvG.js";import"./getPseudoElementBounds-CVHeSE6N.js";import"./chevron-down-CS8vsP9D.js";import"./index-TLgZxQeV.js";import"./error-DXd7zKHr.js";import"./BaseCbacBanner-BiY79lSh.js";import"./makeExternalStore-BouUAQTK.js";import"./Tooltip-wG3giV5B.js";import"./PopoverPopup-DSDK1Y_v.js";import"./toNumber-CU5fFCkM.js";import"./useOsdkClient-Dc0meCZj.js";import"./DropdownField-DA55-XvD.js";import"./withOsdkMetrics-BxoJONIr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
