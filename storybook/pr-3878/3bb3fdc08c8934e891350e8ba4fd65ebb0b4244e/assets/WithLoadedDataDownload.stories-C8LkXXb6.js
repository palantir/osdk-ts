import{f as b,j as a,r as i}from"./iframe-Q3lyvqpT.js";import{O as u}from"./object-table-DjUxPUAU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C1UOXpSy.js";import"./Table-v4htO3pV.js";import"./index-DeVeQfvD.js";import"./Dialog-C8KqO5c3.js";import"./cross-0utMfnpw.js";import"./svgIconContainer-_aeVyyfk.js";import"./useBaseUiId-TlHWJ25V.js";import"./InternalBackdrop-CRj-pdnm.js";import"./composite-BRlBDXOv.js";import"./index-BgSh7jc2.js";import"./index-Bkfj5pmT.js";import"./index-Bl6Opt5R.js";import"./useEventCallback-DnvC_ML6.js";import"./SkeletonBar-QK5le0jY.js";import"./LoadingCell-BAiUfDTv.js";import"./ColumnConfigDialog-BRjbHqVx.js";import"./DraggableList-ji0QiaRd.js";import"./search-DRlPV6Yf.js";import"./Input-DsdhnLi8.js";import"./useControlled-D3J0OrAn.js";import"./Button-7q-Awilo.js";import"./small-cross-BEYL-4rR.js";import"./ActionButton-OcicrXmk.js";import"./Checkbox-C4u4wGQ6.js";import"./useValueChanged-BQwBfP0w.js";import"./CollapsiblePanel-CFtMnobt.js";import"./MultiColumnSortDialog-iq_y_xkS.js";import"./MenuTrigger-CaBal1-u.js";import"./CompositeItem-BdfVH036.js";import"./ToolbarRootContext-bI52zd0O.js";import"./getDisabledMountTransitionStyles-CX6UYYQ4.js";import"./getPseudoElementBounds-Bb-Q1nBa.js";import"./chevron-down-CyTKzqpr.js";import"./index-CCtIAxk4.js";import"./error-CMb3oavi.js";import"./BaseCbacBanner-BhMHFvMV.js";import"./makeExternalStore-DEfXnagi.js";import"./Tooltip-C59Dncbu.js";import"./PopoverPopup-BMgvSen-.js";import"./debounce-Bsm6DEnd.js";import"./useOsdkClient-DfbTHzVZ.js";import"./tick-CuCRS-A9.js";import"./DropdownField-D-IHjSdp.js";import"./isEqual-vx51G8vk.js";import"./withOsdkMetrics-PcCF_U4s.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
