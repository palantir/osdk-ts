import{f as b,j as a,r as i}from"./iframe-CJUBUTub.js";import{O as u}from"./object-table-DwddERxx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CIaS7xmC.js";import"./Table-D6LAu_qp.js";import"./index-D6RKL9xW.js";import"./Dialog-tFwyZqn4.js";import"./cross-CLjLUeJo.js";import"./svgIconContainer-CXg-3J8w.js";import"./useBaseUiId-YnyDNtng.js";import"./InternalBackdrop-Rxhs1aJY.js";import"./composite-IgJfsXTy.js";import"./index-DmjIOSHs.js";import"./index-BfGfq02Q.js";import"./index-C5qONp6M.js";import"./useEventCallback-L7RTqL_n.js";import"./SkeletonBar-BdJVeNGK.js";import"./LoadingCell-BA54JClW.js";import"./ColumnConfigDialog-0w9-pAgF.js";import"./DraggableList-K0eBUk7L.js";import"./search-5t0wk0Gr.js";import"./Input-DfF7VsZQ.js";import"./useControlled-C4N2tr7p.js";import"./Button-DCqz38K7.js";import"./small-cross-BLph0oUA.js";import"./ActionButton-aE1Vn891.js";import"./Checkbox-C1_eXCF3.js";import"./useValueChanged-BhGo1cQZ.js";import"./CollapsiblePanel-BUDs43GM.js";import"./MultiColumnSortDialog-DqqkdhJm.js";import"./MenuTrigger-PEhyz_-A.js";import"./CompositeItem-CL-JcIqG.js";import"./ToolbarRootContext-BtuYN_1f.js";import"./getDisabledMountTransitionStyles-CpqTqMd3.js";import"./getPseudoElementBounds-BF4H2UwQ.js";import"./chevron-down-CuNdvUfz.js";import"./index-C3hSlA2p.js";import"./error--zLI5MtK.js";import"./BaseCbacBanner-CYib6Qd_.js";import"./makeExternalStore-DKQcCda3.js";import"./Tooltip-DIGJzMd5.js";import"./PopoverPopup-CRY5tVUJ.js";import"./debounce-DNVsdhoz.js";import"./useOsdkClient-B1B799x9.js";import"./tick-iXfhAnSu.js";import"./DropdownField-Colf05W8.js";import"./isEqual-X86jlpqw.js";import"./withOsdkMetrics-DJlQtgHI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
