import{f as b,j as a,r as i}from"./iframe-Dsxw0GBU.js";import{O as u}from"./object-table-CcO61CxZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BnwWVRsr.js";import"./Table-DQbKGgMf.js";import"./index-DPoeuhvQ.js";import"./Dialog-BSx1KBGf.js";import"./cross-CIuUI1ag.js";import"./svgIconContainer-iLTT7Lnw.js";import"./useBaseUiId-Dn2RBhnq.js";import"./InternalBackdrop-BOaLeWv3.js";import"./composite-DOVvnto0.js";import"./index-BD0WDeZd.js";import"./index-CKGM5C8i.js";import"./index-jgi4n0Kg.js";import"./useEventCallback-CRN5p95i.js";import"./SkeletonBar-CeWkzQbU.js";import"./LoadingCell-r6ySHJlG.js";import"./ColumnConfigDialog-BIgczoQz.js";import"./DraggableList-B7NmzgFR.js";import"./search-g4Lu9O_Q.js";import"./Input-CttQmBnh.js";import"./useControlled-G8iNDU9Z.js";import"./Button-DQbdnJ3J.js";import"./small-cross-CuEZW0Dl.js";import"./ActionButton-DIKbnZZn.js";import"./Checkbox-BNZJKx2C.js";import"./useValueChanged-Dxr1wea1.js";import"./CollapsiblePanel-BWY8NHt3.js";import"./MultiColumnSortDialog-sa36swr0.js";import"./MenuTrigger-Ck-5Ifrf.js";import"./CompositeItem-0WcUmr8Z.js";import"./ToolbarRootContext-Dspty5lB.js";import"./getDisabledMountTransitionStyles-Ba8WnLZ8.js";import"./getPseudoElementBounds-DPFsuFuL.js";import"./chevron-down-C7k0uR2B.js";import"./index-CFvaYR46.js";import"./error-DFm0ZNQQ.js";import"./BaseCbacBanner-D6JmbmZY.js";import"./makeExternalStore-X9ZU_bQ2.js";import"./Tooltip-DSCsXlF7.js";import"./PopoverPopup-CsDr2xlC.js";import"./toNumber-D92cPJ9q.js";import"./useOsdkClient-CQY-VXwT.js";import"./tick-BHTYU4cy.js";import"./DropdownField-IOUi76KJ.js";import"./withOsdkMetrics-B4qbEFAW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
