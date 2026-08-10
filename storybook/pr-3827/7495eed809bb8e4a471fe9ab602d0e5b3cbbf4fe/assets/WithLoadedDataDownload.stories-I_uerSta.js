import{f as b,j as a,r as i}from"./iframe-_z3jDROO.js";import{O as u}from"./object-table-DgJqHMWn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cp-TKz0z.js";import"./Table-BQ2ymhm1.js";import"./index-Q8EEyY0v.js";import"./Dialog-C2fl4M1v.js";import"./cross-D6Si-XhJ.js";import"./svgIconContainer-B7vtt4qG.js";import"./useBaseUiId-kiHD9n4O.js";import"./InternalBackdrop-CTq-483m.js";import"./composite-C0nd1t90.js";import"./index-DD50tvSO.js";import"./index-BunQhVyv.js";import"./index-Df7tufwq.js";import"./useEventCallback-B6QkgUyp.js";import"./SkeletonBar-CaokAZBs.js";import"./LoadingCell-Cac1cdLc.js";import"./ColumnConfigDialog-B6F30hN8.js";import"./DraggableList-DilBMzIC.js";import"./search-BaaSJoub.js";import"./Input-dTB1h5Gz.js";import"./useControlled-jrF362GW.js";import"./isEqual-Dys6_89E.js";import"./isObject-DECzZNaF.js";import"./Button-BM6D-CE6.js";import"./ActionButton-BFy74EOV.js";import"./Checkbox-Bw0S4q5H.js";import"./useValueChanged-CVJcad2L.js";import"./CollapsiblePanel-CCr6fiwE.js";import"./MultiColumnSortDialog-B7Gfn13C.js";import"./MenuTrigger-BCOBhzIQ.js";import"./CompositeItem-C1yClhJ6.js";import"./ToolbarRootContext-ClX35K5_.js";import"./getDisabledMountTransitionStyles-i99itILM.js";import"./getPseudoElementBounds-PgK5udBn.js";import"./chevron-down-DKrfrKEw.js";import"./index-B39ZDa_b.js";import"./error-CHbuT9qj.js";import"./BaseCbacBanner-w5DUGluQ.js";import"./makeExternalStore-Zu8KmZY0.js";import"./Tooltip-BZZ1ZjWO.js";import"./PopoverPopup-CN4czWCI.js";import"./toNumber-BsV4f3nC.js";import"./useOsdkClient-Di9178CQ.js";import"./tick-D1SNio7c.js";import"./DropdownField-DhaGXRA9.js";import"./withOsdkMetrics-BH6dSoSr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
