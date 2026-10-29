import{f as b,j as a,r as i}from"./iframe-YB9hqlg8.js";import{O as u}from"./object-table-CD7SpME1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CTcVL9dw.js";import"./Table-DrHMf1Gd.js";import"./index-jQAJu0aU.js";import"./Dialog-DJHS4XZ-.js";import"./cross-CqHbx82J.js";import"./svgIconContainer-BewESC0Y.js";import"./useBaseUiId-BmL79WrH.js";import"./InternalBackdrop-BivpzZuB.js";import"./composite-DeqrZPcw.js";import"./index-BFeXeiP0.js";import"./index-Bs1x_wg2.js";import"./index-D3K0AaGz.js";import"./useEventCallback-CATv0rju.js";import"./SkeletonBar-jlasmcfA.js";import"./LoadingCell-VgJHmFvN.js";import"./ColumnConfigDialog-Cy0Jm0k3.js";import"./DraggableList-CBY145h4.js";import"./search-BY-8te7i.js";import"./Input-ZdgKVRhe.js";import"./useControlled-XI3b4Slf.js";import"./Button-BgGo20Fo.js";import"./small-cross-hcSISMg2.js";import"./ActionButton-XVSeG5b2.js";import"./Checkbox-L4D9I5_E.js";import"./useValueChanged-D9HByNMz.js";import"./CollapsiblePanel-g_xhSVun.js";import"./MultiColumnSortDialog-BrLJl6ZB.js";import"./MenuTrigger-Bhi0Gjm8.js";import"./CompositeItem-DRhQIZ9t.js";import"./ToolbarRootContext-DKnQVXJ0.js";import"./getDisabledMountTransitionStyles-CYvPsy0U.js";import"./getPseudoElementBounds-h_436N-i.js";import"./chevron-down-CLNGzp69.js";import"./index-BPsVLTCl.js";import"./error-C1jwt9uB.js";import"./BaseCbacBanner-BknyRiT5.js";import"./makeExternalStore-BXT9IRaw.js";import"./Tooltip-DZo35c7C.js";import"./PopoverPopup-DjR6kB2g.js";import"./debounce-CVTcs3d9.js";import"./useOsdkClient-ZayO5M1-.js";import"./tick-DcZMyZDK.js";import"./DropdownField-CxqUSWcN.js";import"./isEqual-Cv_n9nVu.js";import"./withOsdkMetrics-CyJ1msfC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
