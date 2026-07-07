import{f as b,j as a,r as i}from"./iframe-3TvHAs4c.js";import{O as u}from"./object-table-Dws1he6u.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DpyMUS3_.js";import"./Table-BYnkphee.js";import"./index-el2AxoGR.js";import"./Dialog-lLB35Van.js";import"./cross-Cuk-Fy3m.js";import"./svgIconContainer-BFDK97Ko.js";import"./useBaseUiId-BETBQmwg.js";import"./InternalBackdrop-DL_-f3eo.js";import"./composite-feS10yYs.js";import"./index-ByPKh7Yl.js";import"./index-B3J93Pkv.js";import"./index-OTRL6Tqi.js";import"./useEventCallback-BWpz69ZY.js";import"./SkeletonBar-CqBOPE6_.js";import"./LoadingCell-DYmcG9El.js";import"./ColumnConfigDialog-DXkguTuz.js";import"./DraggableList-CQ4bi_gV.js";import"./search-C3SJSWRH.js";import"./Input-DMbJE11S.js";import"./useControlled-C5N00eW4.js";import"./Button-plhH8piR.js";import"./small-cross-lUQdMtSs.js";import"./ActionButton-Bcxzb0LQ.js";import"./Checkbox-BHFYwiTR.js";import"./useValueChanged-DfCiCCsl.js";import"./CollapsiblePanel-DlwvbYQ4.js";import"./MultiColumnSortDialog-DddPAdXM.js";import"./MenuTrigger-BeXBNX6s.js";import"./CompositeItem-DJK2bU2c.js";import"./ToolbarRootContext-B8HhfBqU.js";import"./getDisabledMountTransitionStyles-tA24vcJ2.js";import"./getPseudoElementBounds-Bg2IEbXi.js";import"./chevron-down-BCuah4uX.js";import"./index-CigjtaUC.js";import"./error-CcYbNb79.js";import"./BaseCbacBanner-BWthU3zq.js";import"./makeExternalStore-zFIIfO9K.js";import"./Tooltip-Dp6LuyP1.js";import"./PopoverPopup-DF5xkk9w.js";import"./toNumber-CJ7d8lkQ.js";import"./useOsdkClient-D4RU1LK6.js";import"./tick-DI4HEy5Q.js";import"./DropdownField-B7EFQ1ZW.js";import"./withOsdkMetrics-CGOAGNGX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
