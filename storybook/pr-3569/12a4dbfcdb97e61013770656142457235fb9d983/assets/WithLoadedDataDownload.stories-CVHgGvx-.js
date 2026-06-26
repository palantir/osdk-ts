import{f as b,j as a,r as i}from"./iframe-wmk01Rda.js";import{O as u}from"./object-table-_VV92xW3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DanPxv3p.js";import"./Table-CUcnk_8_.js";import"./index-DrKf14Lc.js";import"./Dialog-BSrMlmkq.js";import"./cross-Dw4cREIp.js";import"./svgIconContainer-D2lCDHCe.js";import"./useBaseUiId-CkMH9yD-.js";import"./InternalBackdrop-jlHxzWMV.js";import"./composite-DonlcX2d.js";import"./index-CCIuVkDG.js";import"./index-ca_FFj-2.js";import"./index-BXHIN152.js";import"./useEventCallback-BwoaVtK6.js";import"./SkeletonBar-CAVn6vyu.js";import"./LoadingCell-CKP4jlPw.js";import"./ColumnConfigDialog-BYomLzbh.js";import"./DraggableList-B-3hgDQU.js";import"./Input-CMR8H54J.js";import"./useControlled-CdG4nnce.js";import"./Button-TCKvkXVo.js";import"./small-cross-GY4dRbsc.js";import"./ActionButton-CTgvRmS2.js";import"./Checkbox-DoEkeKgJ.js";import"./minus-DT6t_Ges.js";import"./useValueChanged-He6buwhc.js";import"./caret-down-DuxHbOHU.js";import"./CollapsiblePanel-DBE2cLGj.js";import"./MultiColumnSortDialog-CIbCKakc.js";import"./MenuTrigger-CgSuxCG-.js";import"./CompositeItem-Bmwr_LSB.js";import"./ToolbarRootContext-DoWLArfe.js";import"./getDisabledMountTransitionStyles-DstNhIPq.js";import"./getPseudoElementBounds-DLcI9TnV.js";import"./chevron-down-CFUZHjRb.js";import"./index-C6eraJGX.js";import"./error-Jj0KVLpV.js";import"./BaseCbacBanner-CeKkxLYI.js";import"./makeExternalStore-BwLBTQhL.js";import"./Tooltip-C4c8kUjt.js";import"./PopoverPopup-Rr3LRI2W.js";import"./toNumber-wEHqSwWX.js";import"./useOsdkClient-CB6Tnqyj.js";import"./DropdownField-BpHnvtr-.js";import"./withOsdkMetrics-Cym4Hvb1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
