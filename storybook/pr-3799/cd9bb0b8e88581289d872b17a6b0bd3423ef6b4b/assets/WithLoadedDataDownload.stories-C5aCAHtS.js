import{f as b,j as a,r as i}from"./iframe-Zg3agjVA.js";import{O as u}from"./object-table-DtBRANjR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BXRBmtzA.js";import"./Table-VcSvCLah.js";import"./index-COc2doys.js";import"./Dialog-DuCup1y3.js";import"./cross-3gwJUULA.js";import"./svgIconContainer-7JSyjSbU.js";import"./useBaseUiId-DRojaVbZ.js";import"./InternalBackdrop-CZBhsVYW.js";import"./composite-CY6EnEDk.js";import"./index-Do1Ejht1.js";import"./index-B1LfTOb2.js";import"./index-DFK3Dggy.js";import"./useEventCallback-B2Brsdpx.js";import"./SkeletonBar-CVhsy3f2.js";import"./LoadingCell-HojjnEqU.js";import"./ColumnConfigDialog-CGSl72f8.js";import"./DraggableList-CoIZMdOK.js";import"./search-i7uPZuYO.js";import"./Input-qYz4RN-U.js";import"./useControlled-CcIGpRzc.js";import"./isEqual-z3tOTpca.js";import"./isObject-C474tTtd.js";import"./Button-BYrujQNz.js";import"./ActionButton-DNbpkLMa.js";import"./Checkbox-CYAdMWyQ.js";import"./useValueChanged-C2Y4VRkm.js";import"./CollapsiblePanel-BajRWGm5.js";import"./MultiColumnSortDialog-BI0weRQX.js";import"./MenuTrigger-C0TksCSi.js";import"./CompositeItem-sHUrGE0o.js";import"./ToolbarRootContext-uC1AZv1t.js";import"./getDisabledMountTransitionStyles-CfZ2kbpR.js";import"./getPseudoElementBounds-CIZC6rE6.js";import"./chevron-down-CtGcJNNE.js";import"./index-BBvO76wk.js";import"./error-BbQ-Z9B4.js";import"./BaseCbacBanner-kvdalyTA.js";import"./makeExternalStore-DLtPHmhK.js";import"./Tooltip-DONLb8VO.js";import"./PopoverPopup-CeLvjh4_.js";import"./toNumber-izRZfRwO.js";import"./useOsdkClient-D3I85USr.js";import"./tick-D3Fn1KVO.js";import"./DropdownField-DIFQ3lkL.js";import"./withOsdkMetrics-Dl0gKApc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
