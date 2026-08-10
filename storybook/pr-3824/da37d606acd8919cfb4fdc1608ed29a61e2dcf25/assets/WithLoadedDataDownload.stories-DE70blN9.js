import{f as b,j as a,r as i}from"./iframe-B70S6Lmv.js";import{O as u}from"./object-table-BfTy7xib.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DvqZs_Ee.js";import"./Table-DiAKwS9Z.js";import"./index-DWnMAI4T.js";import"./Dialog-BI2LCIhj.js";import"./cross-RQeYgE-5.js";import"./svgIconContainer-DCrmifFa.js";import"./useBaseUiId-EwZnzvJa.js";import"./InternalBackdrop-swj0KUjw.js";import"./composite-DkMtiPjX.js";import"./index-CuOP0KH2.js";import"./index-BKhiojeG.js";import"./index-DjQQ9Ebf.js";import"./useEventCallback-BaRUcjQf.js";import"./SkeletonBar-XMBBLDKR.js";import"./LoadingCell-CJRIZTrX.js";import"./ColumnConfigDialog-bucvOWJ0.js";import"./DraggableList-yliEoYZI.js";import"./search-BA089tRt.js";import"./Input-aN0JqfYJ.js";import"./useControlled-BYkqALsw.js";import"./isEqual-Diwy372c.js";import"./isObject-Bau7kQmU.js";import"./Button-ChkfdyYN.js";import"./ActionButton-CmxK41cn.js";import"./Checkbox-Ldf5yhpW.js";import"./useValueChanged-C1efsP7L.js";import"./CollapsiblePanel-Df1NXogi.js";import"./MultiColumnSortDialog-Cpu5deyQ.js";import"./MenuTrigger-HI6uf4IZ.js";import"./CompositeItem-BVQtW5gx.js";import"./ToolbarRootContext-CMGSy6ZS.js";import"./getDisabledMountTransitionStyles-JyNwSVpS.js";import"./getPseudoElementBounds-Cqb5T_QV.js";import"./chevron-down-DGeK32yC.js";import"./index-BhkemeNm.js";import"./error-B37gQfOZ.js";import"./BaseCbacBanner-B0K-ZHth.js";import"./makeExternalStore-BEhTvj2Q.js";import"./Tooltip-JVwBppS1.js";import"./PopoverPopup-CsTcm8RG.js";import"./toNumber-wPLlggss.js";import"./useOsdkClient-e-zC0dYQ.js";import"./tick-DI3EVtTl.js";import"./DropdownField-X8THrraV.js";import"./withOsdkMetrics-DB3VOG4-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
