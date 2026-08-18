import{f as b,j as a,r as i}from"./iframe-ACqoCsP1.js";import{O as u}from"./object-table-DdvQEzYW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0NytkGS.js";import"./Table-B1oQKcqo.js";import"./index-CH3f4Y4v.js";import"./Dialog-dEbmcWd8.js";import"./cross-CuuQ7UQ8.js";import"./svgIconContainer-DQJmdZ4w.js";import"./useBaseUiId-YELf5DtT.js";import"./InternalBackdrop-CFf_S_SZ.js";import"./composite-ClfvqsWa.js";import"./index-1_maJEvl.js";import"./index-BC4L-KC_.js";import"./index-Dt03mN6M.js";import"./useEventCallback-DT0fpXdJ.js";import"./SkeletonBar-D6sGXdTt.js";import"./LoadingCell-Iu2hiB_z.js";import"./ColumnConfigDialog-DKHcAQDe.js";import"./DraggableList-DBc_xvqf.js";import"./search-CbRnBR_C.js";import"./Input-BoLPhHvH.js";import"./useControlled-Ei_xM4pt.js";import"./Button-D8yf6tNW.js";import"./small-cross-BZDZI6nZ.js";import"./ActionButton-D2spBXFL.js";import"./Checkbox-CLCuVmRM.js";import"./useValueChanged-Bk99V8J2.js";import"./CollapsiblePanel-D1183vDo.js";import"./MultiColumnSortDialog-CEZ5oLIK.js";import"./MenuTrigger-BYXipR9p.js";import"./CompositeItem-CHURugJM.js";import"./ToolbarRootContext-CBorp6LJ.js";import"./getDisabledMountTransitionStyles-BmsT5-21.js";import"./getPseudoElementBounds-DyYkfxLq.js";import"./chevron-down-DSctgGN2.js";import"./index-BI6hNs5F.js";import"./error-CNcF2Rns.js";import"./BaseCbacBanner-o43Y7e9X.js";import"./makeExternalStore-nQn9uS75.js";import"./Tooltip-CiBM08K9.js";import"./PopoverPopup-zwuBMy7m.js";import"./debounce-Brqa7gZb.js";import"./useOsdkClient-B14HLFEC.js";import"./tick-BAuBus17.js";import"./DropdownField-DadyUtow.js";import"./isEqual-CgrJ4P2S.js";import"./withOsdkMetrics-Du2c38Bn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
