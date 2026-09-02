import{f as b,j as a,r as i}from"./iframe-CtxcX-T2.js";import{O as u}from"./object-table-kvkm7oWa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-cYb1s-yj.js";import"./Table-BmEf-WHf.js";import"./index-B-TRiKN3.js";import"./Dialog-BuqAw-Am.js";import"./cross-CSOzfLob.js";import"./svgIconContainer-BdWsevkC.js";import"./useBaseUiId-BKQN5rZA.js";import"./InternalBackdrop-DcUKIKDf.js";import"./composite-Bg1E-ATT.js";import"./index-B31wHl9O.js";import"./index-Bx6oSTgH.js";import"./index-CQTEzx2i.js";import"./useEventCallback-CJSRmKCz.js";import"./SkeletonBar-DtSb_BRI.js";import"./LoadingCell-CEMsrPxC.js";import"./ColumnConfigDialog-BqMCCnNj.js";import"./DraggableList-BzQY0SAw.js";import"./search-CRmL15NB.js";import"./Input-Bv3vf0p7.js";import"./useControlled-KB7Tt3--.js";import"./Button-DtDTCbH_.js";import"./small-cross-Ba9dhW_V.js";import"./ActionButton-BaPZa1OF.js";import"./Checkbox-4p89Vpq6.js";import"./useValueChanged-CJyhwRpH.js";import"./CollapsiblePanel-CmD8octv.js";import"./MultiColumnSortDialog-DpfErL7k.js";import"./MenuTrigger-DFIUIXzr.js";import"./CompositeItem-BOSOz_c1.js";import"./ToolbarRootContext-TRfEDRwF.js";import"./getDisabledMountTransitionStyles-C0Z2RaMf.js";import"./getPseudoElementBounds-D7H1yTKx.js";import"./chevron-down-tzfqMRfe.js";import"./index-WzODq6Cd.js";import"./error-0r8auSif.js";import"./BaseCbacBanner-CeYCNyo5.js";import"./makeExternalStore-ycTRB21p.js";import"./Tooltip-etk01HFg.js";import"./PopoverPopup-C7Q6K1hN.js";import"./debounce-BdaueHY_.js";import"./useOsdkClient-B2tD5ZA9.js";import"./tick-C8bzjg5y.js";import"./DropdownField-51JHrmyh.js";import"./isEqual-BsD_zmUv.js";import"./withOsdkMetrics-CFtxLfFR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
