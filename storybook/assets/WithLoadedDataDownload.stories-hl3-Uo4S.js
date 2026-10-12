import{f as b,j as a,r as i}from"./iframe-DYtUFfpV.js";import{O as u}from"./object-table-CHj9aW6t.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C-exNfje.js";import"./index-B_B03ZgQ.js";import"./Dialog-sifnIZBJ.js";import"./cross-BnbnB9qW.js";import"./svgIconContainer-DFzm68WI.js";import"./useBaseUiId-DGMDSr1w.js";import"./InternalBackdrop-Cq3aXNy6.js";import"./composite-5PJSFBR3.js";import"./index-ByCETvNt.js";import"./index-DLk7paK9.js";import"./index-Dh6PcIHr.js";import"./useEventCallback-DGyohyoy.js";import"./SkeletonBar-tfS1beTf.js";import"./LoadingCell-BEHbwI_i.js";import"./ColumnConfigDialog-Zd1CPmCy.js";import"./DraggableList-ZaDVBZ2K.js";import"./search-DZ2fRThm.js";import"./Input-Rz5gB3-F.js";import"./useControlled-CTXIF64s.js";import"./Button-CBBF9I1J.js";import"./small-cross-DUMNP9nm.js";import"./ActionButton-gd9T6Q6m.js";import"./Checkbox-BgMpsQG8.js";import"./useValueChanged-BXTPeGrG.js";import"./CollapsiblePanel-DsmHbGwh.js";import"./MultiColumnSortDialog-DzoZtfQh.js";import"./MenuTrigger--IiolMwr.js";import"./CompositeItem-BjuvjbZw.js";import"./ToolbarRootContext-DcFxLx-B.js";import"./getDisabledMountTransitionStyles-BbPZ6Y-H.js";import"./getPseudoElementBounds-BIAPaGxa.js";import"./chevron-down-tphWLm1B.js";import"./index-DYE6Durp.js";import"./error-B2G3Ssl-.js";import"./BaseCbacBanner-cm8XduCf.js";import"./makeExternalStore-ByCDRZNg.js";import"./Tooltip-BlCaFm9g.js";import"./PopoverPopup-DZoDE-qB.js";import"./debounce-DoOyh8jW.js";import"./useOsdkClient-BdXrEp_e.js";import"./tick-C7X186oI.js";import"./DropdownField-0kxHenat.js";import"./isEqual-CGtQ-Eza.js";import"./withOsdkMetrics-CSoHl_un.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
