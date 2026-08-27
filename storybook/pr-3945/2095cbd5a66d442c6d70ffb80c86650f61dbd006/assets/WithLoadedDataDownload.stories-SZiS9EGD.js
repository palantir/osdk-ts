import{f as b,j as a,r as i}from"./iframe-CymrrUap.js";import{O as u}from"./object-table-DsD5lCxR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ehSUgiiL.js";import"./Table-BwyEzzA3.js";import"./index-DA-oUp9z.js";import"./Dialog-CXf9IXsT.js";import"./cross-D80OmHTw.js";import"./svgIconContainer-DmC2tGob.js";import"./useBaseUiId-DBVrwlNg.js";import"./InternalBackdrop-DptHKqPi.js";import"./composite-CPmOeLm-.js";import"./index-CkbGSZqd.js";import"./index-BMFjKR_h.js";import"./index-D-TCxA9c.js";import"./useEventCallback-Ca0PZb-I.js";import"./SkeletonBar-Cy3aWI1h.js";import"./LoadingCell-DrGS4_GQ.js";import"./ColumnConfigDialog-DXZYQVA8.js";import"./DraggableList-C5fTPmAd.js";import"./search-D73uP9Os.js";import"./Input-BVeDMVsS.js";import"./useControlled-F4dJPm4K.js";import"./Button-ZWSn3dX-.js";import"./small-cross-BXC0Eg3O.js";import"./ActionButton-CkEPzh79.js";import"./Checkbox-BKGwXbsb.js";import"./useValueChanged-CfWffDr4.js";import"./CollapsiblePanel-BjlGtYv0.js";import"./MultiColumnSortDialog-NMs-Rt6h.js";import"./MenuTrigger-DnF-czQE.js";import"./CompositeItem-Dj6qYNKV.js";import"./ToolbarRootContext-BsZ0cva1.js";import"./getDisabledMountTransitionStyles-Cqy5xLfF.js";import"./getPseudoElementBounds-Cwm_P-oB.js";import"./chevron-down-DOWVkS2T.js";import"./index-BNNz_fAv.js";import"./error-xVwU37JI.js";import"./BaseCbacBanner-BA1752Gq.js";import"./makeExternalStore-3pbdXedN.js";import"./Tooltip-DmacMCn7.js";import"./PopoverPopup-9VCLlEje.js";import"./debounce-D89nRWoA.js";import"./useOsdkClient-Cu-liJH6.js";import"./tick-HZRn0iiz.js";import"./DropdownField-D7TDTmE3.js";import"./isEqual-B-zNnBk1.js";import"./withOsdkMetrics-CA9bgf-6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
