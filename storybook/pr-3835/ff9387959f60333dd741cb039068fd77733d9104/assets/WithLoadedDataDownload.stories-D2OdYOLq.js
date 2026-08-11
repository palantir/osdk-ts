import{f as b,j as a,r as i}from"./iframe-tdx6Uf_P.js";import{O as u}from"./object-table-DHeWuMA8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B_he2lyp.js";import"./Table-BYXBBz9o.js";import"./index-4qw7cdU-.js";import"./Dialog-CUkV8qFD.js";import"./cross-DO9nY1S8.js";import"./svgIconContainer-CU1572n2.js";import"./useBaseUiId-9iypYP_V.js";import"./InternalBackdrop-CR1SvO8_.js";import"./composite-CabNVbdx.js";import"./index-CGb-0Bhb.js";import"./index-Bc3aW3nV.js";import"./index-BnKrk6WD.js";import"./useEventCallback-DoBhpKEA.js";import"./SkeletonBar-BZ1jBHo3.js";import"./LoadingCell-La2HjgyQ.js";import"./ColumnConfigDialog-bNRn2_O-.js";import"./DraggableList-BDUQEPvE.js";import"./search-CH-DUc6I.js";import"./Input-xHgbyYEO.js";import"./useControlled-xMZoIalt.js";import"./isEqual-BL3R25LQ.js";import"./isObject-DOPtMIte.js";import"./Button-CSckS2t3.js";import"./ActionButton-1geeM6m0.js";import"./Checkbox-t4d1GJa_.js";import"./useValueChanged-D499xU-W.js";import"./CollapsiblePanel-CmIpp0lz.js";import"./MultiColumnSortDialog-BXMkEVl7.js";import"./MenuTrigger-B8OWZr-x.js";import"./CompositeItem-CgbzO3VR.js";import"./ToolbarRootContext-DgAPui9g.js";import"./getDisabledMountTransitionStyles-CErxBYlz.js";import"./getPseudoElementBounds-C3DaOYsK.js";import"./chevron-down-BnN32e5h.js";import"./index-D33Cjobj.js";import"./error-Cf_wRazy.js";import"./BaseCbacBanner-DpC99ZeZ.js";import"./makeExternalStore-DGM9c3Eo.js";import"./Tooltip-CtEvZAbn.js";import"./PopoverPopup-CWjY2Em3.js";import"./toNumber-Cf7LvuoM.js";import"./useOsdkClient-BP4MbY_l.js";import"./tick-Hf6xU6HT.js";import"./DropdownField-D21OwRip.js";import"./withOsdkMetrics-ycYz0MI_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
