import{f as b,j as a,r as i}from"./iframe-DFNsoP3X.js";import{O as u}from"./object-table-BscY91rZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BnvOcoub.js";import"./Table-DU7dSv7N.js";import"./index-BAf1JHF8.js";import"./Dialog-Dsto6OEC.js";import"./cross-Bg80tPH2.js";import"./svgIconContainer-aDF4o5gq.js";import"./useBaseUiId-DV1E2N8q.js";import"./InternalBackdrop-CT8CEw0I.js";import"./composite-DbYvbJJQ.js";import"./index-H_W3OuJT.js";import"./index-B-idBXyv.js";import"./index-ChWfa6Xl.js";import"./useEventCallback-BmJCRIu_.js";import"./SkeletonBar-D7BHkMhh.js";import"./LoadingCell-D2J55tP4.js";import"./ColumnConfigDialog-BxImmEMm.js";import"./DraggableList-CYHhOu3B.js";import"./search-bneiCuCd.js";import"./Input-BtXsYgmE.js";import"./useControlled-B1rQefwr.js";import"./isEqual-DaiDjNZz.js";import"./isObject-Cp-DXwTu.js";import"./Button-sZvKHtmc.js";import"./ActionButton-Byu3Iqfd.js";import"./Checkbox-CxipCycs.js";import"./useValueChanged-B1hVUmbL.js";import"./CollapsiblePanel-DQmSOxbK.js";import"./MultiColumnSortDialog-39qpvVJW.js";import"./MenuTrigger-DDzvNKzw.js";import"./CompositeItem-HoQHK7Za.js";import"./ToolbarRootContext-Cq_OLprv.js";import"./getDisabledMountTransitionStyles-Dor7m0yW.js";import"./getPseudoElementBounds-CQuPF0Bs.js";import"./chevron-down-BOoKZVr9.js";import"./index-DUsvYWV3.js";import"./error-Cyul2rOd.js";import"./BaseCbacBanner-C1Hn5TEH.js";import"./makeExternalStore-oXaeTCyi.js";import"./Tooltip-CF-CWCiv.js";import"./PopoverPopup-B_VzRe0Z.js";import"./toNumber-DIwTcT3k.js";import"./useOsdkClient-D4rWAYEq.js";import"./tick-GGFWcR03.js";import"./DropdownField-B58gPKPs.js";import"./withOsdkMetrics-C2t_lHCG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
