import{f as b,j as a,r as i}from"./iframe-TjZyb1bS.js";import{O as u}from"./object-table-BV4MS_q3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-6vf5keDo.js";import"./Table-BGNs9QD3.js";import"./index-DO-d5Nhw.js";import"./Dialog-23QYsuiV.js";import"./cross-CcY2Z_E0.js";import"./svgIconContainer-g1t1jdQ-.js";import"./useBaseUiId-Dy5x7CTr.js";import"./InternalBackdrop-CL0l71br.js";import"./composite-B6T__7Xq.js";import"./index-08ELxWRo.js";import"./index-7MMySw2W.js";import"./index-IX_ZzulM.js";import"./useEventCallback-B_jx4L8R.js";import"./SkeletonBar-BN1dFAOr.js";import"./LoadingCell-BAUyVAf6.js";import"./ColumnConfigDialog-x4FXt_HP.js";import"./DraggableList-BNTHvxrB.js";import"./search-EfOYLmyo.js";import"./Input-JrCXDO00.js";import"./useControlled-DPKnbe0H.js";import"./Button-D4RUqMFW.js";import"./small-cross-_-bOsCQr.js";import"./ActionButton-B1ZAyzPy.js";import"./Checkbox-C3YPr4s5.js";import"./useValueChanged-C4PO7ygq.js";import"./CollapsiblePanel-BaMD_OMq.js";import"./MultiColumnSortDialog-C5kaH62z.js";import"./MenuTrigger-DFd2Cz7b.js";import"./CompositeItem-BA7lzU2v.js";import"./ToolbarRootContext-DAXEwoS8.js";import"./getDisabledMountTransitionStyles-DjPnR7Pk.js";import"./getPseudoElementBounds-CK3999ou.js";import"./chevron-down-aFaMKH-b.js";import"./index-ntrV61BC.js";import"./error-Ch19zHJw.js";import"./BaseCbacBanner-TgOhY0Ii.js";import"./makeExternalStore-C8VFKLfw.js";import"./Tooltip-CXH0W3g_.js";import"./PopoverPopup-CFt2P9Dg.js";import"./debounce-C2sRTyHH.js";import"./useOsdkClient-DYOHCNMK.js";import"./tick-zIDdkd7l.js";import"./DropdownField-CBqw0p8h.js";import"./isEqual-DpAq6o8s.js";import"./withOsdkMetrics-C27aqxoK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
