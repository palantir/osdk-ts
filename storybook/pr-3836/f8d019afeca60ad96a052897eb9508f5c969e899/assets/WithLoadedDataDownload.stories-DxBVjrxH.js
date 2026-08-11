import{f as b,j as a,r as i}from"./iframe-B5hHVZQu.js";import{O as u}from"./object-table-CRa7hXQr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DyqMQgY0.js";import"./Table-CbYifu0N.js";import"./index-DaYiiRu5.js";import"./Dialog-CUw2nEX3.js";import"./cross-CTSJrujW.js";import"./svgIconContainer-DXyLBKXl.js";import"./useBaseUiId-CRlCyX-w.js";import"./InternalBackdrop-B2AgvPjW.js";import"./composite-CK8SD67A.js";import"./index-Cu4Ah4up.js";import"./index-ylobHPnE.js";import"./index-fX2rnPUV.js";import"./useEventCallback-CaB44r3W.js";import"./SkeletonBar-BiRh_pBp.js";import"./LoadingCell-CFlyTKGM.js";import"./ColumnConfigDialog-D9Lf1Y0L.js";import"./DraggableList-BGP-kqw7.js";import"./search-CxznAXlW.js";import"./Input-b2ptVJAS.js";import"./useControlled-By0Ac4RD.js";import"./isEqual-8i0GB84A.js";import"./isObject-CbTSOvn8.js";import"./Button-C90dbigt.js";import"./ActionButton-CwK2Sti0.js";import"./Checkbox-AQ_tXtJE.js";import"./useValueChanged-BAHrQvHb.js";import"./CollapsiblePanel-D7gMr-Bp.js";import"./MultiColumnSortDialog-B5QCiZ6f.js";import"./MenuTrigger-DGJeoD7u.js";import"./CompositeItem-BtNP4ARS.js";import"./ToolbarRootContext-DJjlFlUm.js";import"./getDisabledMountTransitionStyles-CQxLvVA1.js";import"./getPseudoElementBounds-Ofapsbk-.js";import"./chevron-down-Cc8R_gLM.js";import"./index-CfwqnS6H.js";import"./error-DRrdgJam.js";import"./BaseCbacBanner-ByQuoR7a.js";import"./makeExternalStore-004jpP0-.js";import"./Tooltip-BsUgOztO.js";import"./PopoverPopup-DbUxnxE-.js";import"./toNumber-Ct448nRS.js";import"./useOsdkClient-nCYvOOHq.js";import"./tick-lV8tZ7Ef.js";import"./DropdownField-Iac_8gPN.js";import"./withOsdkMetrics-DvK36u8X.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
