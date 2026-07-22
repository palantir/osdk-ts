import{f as b,j as a,r as i}from"./iframe-CI_HynUY.js";import{O as u}from"./object-table-BKiuEgSl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CIV_stCl.js";import"./Table-Bdxi8Ji2.js";import"./index-0kQGtEwV.js";import"./Dialog-DmIoMb6K.js";import"./cross-BfUKNbpN.js";import"./svgIconContainer-CBJHfw9Y.js";import"./useBaseUiId-CLhtbhfw.js";import"./InternalBackdrop-2mD5okmV.js";import"./composite-ChmQoEk2.js";import"./index-DyCxF_Yp.js";import"./index-BkBZKr2_.js";import"./index-CuvLYwNQ.js";import"./useEventCallback-LvVc03lO.js";import"./SkeletonBar-BqtbT4_L.js";import"./LoadingCell-BR6Jc_kG.js";import"./ColumnConfigDialog-VArGH5Un.js";import"./DraggableList-DNw4NfZ0.js";import"./search-DA24byco.js";import"./Input-Cb1k9hUL.js";import"./useControlled-CEg8frKf.js";import"./isEqual-njDV2lTg.js";import"./isObject-y8UFtvsy.js";import"./Button-BHVlE6--.js";import"./ActionButton-DBOJ-o3j.js";import"./Checkbox-ClCwaXFv.js";import"./useValueChanged-CbXoGVGF.js";import"./CollapsiblePanel-BNbnAlQH.js";import"./MultiColumnSortDialog-DbgN10xZ.js";import"./MenuTrigger-DtKC9G_6.js";import"./CompositeItem-D6h7EiM2.js";import"./ToolbarRootContext-Bg59D_CY.js";import"./getDisabledMountTransitionStyles-BgQ6Y6en.js";import"./getPseudoElementBounds-Djlx0q2A.js";import"./chevron-down-BLW-Pg3l.js";import"./index-BdlH6Nzm.js";import"./error-C7hCYMbm.js";import"./BaseCbacBanner-DRPBT1G1.js";import"./makeExternalStore-DhTdoCR8.js";import"./Tooltip-Baji5KPr.js";import"./PopoverPopup-CBR7iU58.js";import"./toNumber-Q3gPj6MM.js";import"./useOsdkClient-Cz_MMEOS.js";import"./tick-BDXCYJjJ.js";import"./DropdownField-BnBpVV6_.js";import"./withOsdkMetrics-CWUy-TNv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
