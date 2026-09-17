import{f as b,j as a,r as i}from"./iframe-CMm4N1y0.js";import{O as u}from"./object-table-_y8JQsVL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DPdS5gYT.js";import"./Table-B-jh3DiY.js";import"./index-mc6WZDuQ.js";import"./Dialog-7hbNYFd7.js";import"./cross-w0K8LNSt.js";import"./svgIconContainer-zPF7HvxF.js";import"./useBaseUiId-DSNrt-U2.js";import"./InternalBackdrop-C3wXessL.js";import"./composite-BoQ1iNnl.js";import"./index-DgJDHTvw.js";import"./index-ULPzqRga.js";import"./index-TDPUwOnJ.js";import"./useEventCallback-C1kO7wJe.js";import"./SkeletonBar-BX6mbipF.js";import"./LoadingCell-BLjl_Xzy.js";import"./ColumnConfigDialog-CNZf5IfJ.js";import"./DraggableList-DhyTCalD.js";import"./search-CiZI6CH-.js";import"./Input-WLnnNcib.js";import"./useControlled-BNALToTQ.js";import"./Button-RJLOnGs4.js";import"./small-cross-Bzj4KzKP.js";import"./ActionButton-C1HDW1tb.js";import"./Checkbox-y1Ue4XXM.js";import"./useValueChanged-BAb8DN1s.js";import"./CollapsiblePanel-CKo7WZyd.js";import"./MultiColumnSortDialog-BhbhduM7.js";import"./MenuTrigger-BgJpdaXh.js";import"./CompositeItem-BwL5uNEu.js";import"./ToolbarRootContext-Dy9xQ5C5.js";import"./getDisabledMountTransitionStyles-WnHy71z6.js";import"./getPseudoElementBounds-CbILzRJ8.js";import"./chevron-down-BWoDSlPa.js";import"./index-DdpoA6j8.js";import"./error-BNe6vl6a.js";import"./BaseCbacBanner-CR1fj-E0.js";import"./makeExternalStore-C-_FdC6k.js";import"./Tooltip-B56bZ38u.js";import"./PopoverPopup-COua6oiQ.js";import"./debounce-e_CiYFMe.js";import"./useOsdkClient-DhcRZ6oq.js";import"./tick-Blq7nSqP.js";import"./DropdownField-Dpg0H91Q.js";import"./isEqual-CGKBuTFm.js";import"./withOsdkMetrics-CWiHOjas.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
