import{f as b,j as a,r as i}from"./iframe-IE85mU0C.js";import{O as u}from"./object-table-VIQdSIiM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BOAVNMzj.js";import"./Table-BUUulN0Y.js";import"./index-Cb-uWra3.js";import"./Dialog-CZVPdwGB.js";import"./cross-B7J67M4-.js";import"./svgIconContainer-DstMKe-n.js";import"./useBaseUiId-ChrCSMbI.js";import"./InternalBackdrop-BJ4sp-TV.js";import"./composite-mlo2KNAb.js";import"./index-CBYXm5R5.js";import"./index-6Itdkxzy.js";import"./index-BsUZ9W2f.js";import"./useEventCallback-BDUXB78A.js";import"./SkeletonBar-DPNqEMQ-.js";import"./LoadingCell-d80XHTZ_.js";import"./ColumnConfigDialog-DMOAQiEJ.js";import"./DraggableList-CdhbZ45T.js";import"./search-OX4J1wJ3.js";import"./Input-BPNEbKHH.js";import"./useControlled-BXrD1fp6.js";import"./Button-B-X3VNkp.js";import"./small-cross-FEZjqabC.js";import"./ActionButton-Bmb7hpam.js";import"./Checkbox-DfUuehp8.js";import"./useValueChanged--7cQqyYE.js";import"./CollapsiblePanel-CbdW_t08.js";import"./MultiColumnSortDialog-DYFh7fse.js";import"./MenuTrigger-CfqEz4nM.js";import"./CompositeItem-DZQ4wuX3.js";import"./ToolbarRootContext-Bkab47o6.js";import"./getDisabledMountTransitionStyles-D2JDsEiR.js";import"./getPseudoElementBounds-CsgiHNji.js";import"./chevron-down-DF5Twgp3.js";import"./index-BNUcpvM4.js";import"./error-C3z-yM5U.js";import"./BaseCbacBanner-DCvcYvuq.js";import"./makeExternalStore-B2AoPMSj.js";import"./Tooltip-BwBdjepj.js";import"./PopoverPopup-DEA0O1h4.js";import"./debounce-DBEu6yXI.js";import"./useOsdkClient-C_Z8b3Qp.js";import"./tick-DXtXHPPs.js";import"./DropdownField-wEalnpiM.js";import"./isEqual-B5lM3oF_.js";import"./withOsdkMetrics-BRxVuFD2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
