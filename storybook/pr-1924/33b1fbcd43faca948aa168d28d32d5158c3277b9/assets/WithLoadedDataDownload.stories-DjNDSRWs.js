import{f as b,j as a,r as i}from"./iframe-CiXN6Rb7.js";import{O as u}from"./object-table-CIKb1wBd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C-ku1ssL.js";import"./Table-4fBcPoVC.js";import"./index-BOVQhHfc.js";import"./Dialog-DRaTLPku.js";import"./cross-B2R0Y7pu.js";import"./svgIconContainer-BNoMSL-q.js";import"./useBaseUiId-DhqbF7uF.js";import"./InternalBackdrop-DhtV_RvY.js";import"./composite-DvNZ1Icc.js";import"./index-C8266igj.js";import"./index-Dn6kMd0t.js";import"./index-BtZ0neqB.js";import"./useEventCallback-B7PXFVIe.js";import"./SkeletonBar-jsjVj0Sb.js";import"./LoadingCell-uMxOxmsi.js";import"./ColumnConfigDialog-DZbq2yvA.js";import"./DraggableList-Dt_pZtsG.js";import"./search-STEKGZkh.js";import"./Input-Csin5kfK.js";import"./useControlled-BHUaQP_N.js";import"./Button-D1eyqhD7.js";import"./small-cross-BJozEvQa.js";import"./ActionButton-BLNh1UHK.js";import"./Checkbox-DKBWe89z.js";import"./useValueChanged-CL6biBVq.js";import"./CollapsiblePanel-Cmeh3RAf.js";import"./MultiColumnSortDialog-5sGF0iy7.js";import"./MenuTrigger-D4dJlN_S.js";import"./CompositeItem-NTnAxNX4.js";import"./ToolbarRootContext-Rzd-Bgfk.js";import"./getDisabledMountTransitionStyles-BEG6R9mY.js";import"./getPseudoElementBounds-s6RCO5nJ.js";import"./chevron-down-Cl2mbEtn.js";import"./index-DalgX7dU.js";import"./error-DeGXzC9x.js";import"./BaseCbacBanner-D-E1Grr4.js";import"./makeExternalStore-BTybznxs.js";import"./Tooltip-DeHMLUsU.js";import"./PopoverPopup-B2ttA1Hn.js";import"./toNumber-BydbR1Tu.js";import"./useOsdkClient-Bkr3HBLn.js";import"./tick-CgF6etzp.js";import"./DropdownField-DRub4K-3.js";import"./withOsdkMetrics-BeQoUM0s.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
