import{f as b,j as a,r as i}from"./iframe-CF1mFmNd.js";import{O as u}from"./object-table-D6a7yUQA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dyo3vXi1.js";import"./Table-UrQ6rfo0.js";import"./index-ZkVEQI0k.js";import"./Dialog-BbnC_UOW.js";import"./cross-CtBf6gU9.js";import"./svgIconContainer-qtuz32ZC.js";import"./useBaseUiId-CctkM0s6.js";import"./InternalBackdrop-CWDnlMhR.js";import"./composite-BjvuVKLa.js";import"./index-C_wuWB2u.js";import"./index-D8AsGQtU.js";import"./index-Bd6zDUgP.js";import"./useEventCallback-cJBmfMKa.js";import"./SkeletonBar-C_GztJJo.js";import"./LoadingCell-CvdChOFj.js";import"./ColumnConfigDialog-pI9cUpPr.js";import"./DraggableList-CZRLrBZA.js";import"./search-CvhfRkSX.js";import"./Input-CLK5rEjn.js";import"./useControlled-BUwxHsDX.js";import"./Button-CioK_zkV.js";import"./small-cross-B8iRViR2.js";import"./ActionButton-CjA05fbS.js";import"./Checkbox-6IezW9EE.js";import"./useValueChanged-BtFANzzg.js";import"./CollapsiblePanel-DQ5s565r.js";import"./MultiColumnSortDialog-DeM44oR3.js";import"./MenuTrigger-CcICQuse.js";import"./CompositeItem-DTJQQn4D.js";import"./ToolbarRootContext-CGiG5EWj.js";import"./getDisabledMountTransitionStyles-DUsGfUw-.js";import"./getPseudoElementBounds-DApMjkjc.js";import"./chevron-down-D2V5biuP.js";import"./index-AerYtyxb.js";import"./error-CPPAckvZ.js";import"./BaseCbacBanner-MkGV5vLh.js";import"./makeExternalStore-1VKcLwLW.js";import"./Tooltip-6aIxizpx.js";import"./PopoverPopup-CI2bYVg_.js";import"./toNumber-CCmcu9u0.js";import"./useOsdkClient-ltkHzHTm.js";import"./tick-WIn6K3EW.js";import"./DropdownField-Dc9pzEmD.js";import"./withOsdkMetrics-C8Y8iavr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
