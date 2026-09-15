import{f as b,j as a,r as i}from"./iframe-WliM3Ewa.js";import{O as u}from"./object-table-DRO0-XsV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DEyC4ekG.js";import"./Table-DoTOPMcE.js";import"./index-CnrTWWrO.js";import"./Dialog-C-9hMTPL.js";import"./cross-B523-3pv.js";import"./svgIconContainer-eh8pO9ol.js";import"./useBaseUiId-CUkyUtdd.js";import"./InternalBackdrop-C5-fjIik.js";import"./composite-ByE6f88x.js";import"./index-NRd0AnHS.js";import"./index-DLdNuuvj.js";import"./index-CwjXC2Es.js";import"./useEventCallback-DwV1lBpW.js";import"./SkeletonBar-BlIjEe9R.js";import"./LoadingCell-BVlRdgDo.js";import"./ColumnConfigDialog-4uaAyz0M.js";import"./DraggableList-8FBKbtBf.js";import"./search-DOR9iHB9.js";import"./Input-CQ-UP_L4.js";import"./useControlled-DNr35Z2-.js";import"./Button-Bajbsf8L.js";import"./small-cross-DoL3gn1_.js";import"./ActionButton-B0Mz96Sd.js";import"./Checkbox-BwdGH573.js";import"./useValueChanged-CdN1D_N7.js";import"./CollapsiblePanel-DEqR4YPk.js";import"./MultiColumnSortDialog-BY_tdxDU.js";import"./MenuTrigger-taMZMeQ0.js";import"./CompositeItem-PZY5TD1e.js";import"./ToolbarRootContext-CDiW3Jhi.js";import"./getDisabledMountTransitionStyles-4NaqFyh-.js";import"./getPseudoElementBounds-FBUEgUOa.js";import"./chevron-down-D3GW0vbF.js";import"./index-DZuQrbeK.js";import"./error-CRmqFCAs.js";import"./BaseCbacBanner-B3tDHTYq.js";import"./makeExternalStore-y3QUXpj7.js";import"./Tooltip-9h8kIB5N.js";import"./PopoverPopup-BfSQYfPj.js";import"./debounce-BmlTPhI1.js";import"./useOsdkClient-Ds9WknxH.js";import"./tick-B5-KzR1n.js";import"./DropdownField-Dh8xBr1M.js";import"./isEqual-CqLdlydg.js";import"./withOsdkMetrics-BMKdbhzI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
