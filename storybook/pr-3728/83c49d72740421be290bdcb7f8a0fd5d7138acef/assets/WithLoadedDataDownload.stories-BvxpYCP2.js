import{f as b,j as a,r as i}from"./iframe-CefCqiaR.js";import{O as u}from"./object-table-gprT9RkQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BbZ5zaD4.js";import"./Table-C6gMDc6L.js";import"./index-CPwptoLW.js";import"./Dialog-C8mO20YV.js";import"./cross-DzRvqWD9.js";import"./svgIconContainer-BWT0TxKV.js";import"./useBaseUiId--cf_zvwI.js";import"./InternalBackdrop-CVbRe8ZL.js";import"./composite-CaFtD7Fw.js";import"./index-DxmvKgU9.js";import"./index-BmTM_Qdn.js";import"./index-BWoHkZsH.js";import"./useEventCallback-CS6IVnDj.js";import"./SkeletonBar-f8q5PgR6.js";import"./LoadingCell-BSttXPoD.js";import"./ColumnConfigDialog-BH2a-dky.js";import"./DraggableList-vt9LKe14.js";import"./search-B0y7ohsg.js";import"./Input-CnwwjYHv.js";import"./useControlled-CYAavFS_.js";import"./isEqual-nH68Z9vl.js";import"./isObject-DQTzxQp2.js";import"./Button-CqMZznRG.js";import"./ActionButton-BH0FOLIi.js";import"./Checkbox-BlC5LYyg.js";import"./useValueChanged-D4lFr8O4.js";import"./CollapsiblePanel-CU6t_mPq.js";import"./MultiColumnSortDialog-B2J-A3w9.js";import"./MenuTrigger-DN0OCTdw.js";import"./CompositeItem-BcGhlmFP.js";import"./ToolbarRootContext-6o4iFsuQ.js";import"./getDisabledMountTransitionStyles-DYizUzd4.js";import"./getPseudoElementBounds-CVyVO42X.js";import"./chevron-down-vR75fc7-.js";import"./index-iDkTeg2b.js";import"./error-CxYINkuo.js";import"./BaseCbacBanner-K6At_QPg.js";import"./makeExternalStore-B-ZoqTkF.js";import"./Tooltip-CMiaCw6h.js";import"./PopoverPopup-CeQgrykH.js";import"./toNumber-CtBQUMIY.js";import"./useOsdkClient-BR5vq1eS.js";import"./tick-CAlPZiiJ.js";import"./DropdownField-Bw_p9vrZ.js";import"./withOsdkMetrics-9UynMHiU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
