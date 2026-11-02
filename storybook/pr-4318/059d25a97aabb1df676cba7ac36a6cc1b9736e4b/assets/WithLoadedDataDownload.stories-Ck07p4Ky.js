import{f as b,j as a,r as i}from"./iframe-gwjWh6aP.js";import{O as u}from"./object-table-DG0XU0Qa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-bIyT3R7b.js";import"./Table-CqQWX-38.js";import"./index-B2e6YLgb.js";import"./Dialog-B752LhdZ.js";import"./cross-CxSJV-iM.js";import"./svgIconContainer-uf6Xe766.js";import"./useBaseUiId-MuGd9EbB.js";import"./InternalBackdrop-Be_icURP.js";import"./composite-XNngWcyG.js";import"./index-C2Xm0Ig8.js";import"./index-CctUI8eo.js";import"./index-DqPPge5H.js";import"./useEventCallback-g73YrOE1.js";import"./SkeletonBar-MPFiyDqC.js";import"./LoadingCell-CSktdyFh.js";import"./ColumnConfigDialog-BiRQ2H7x.js";import"./DraggableList-BSD24ZFv.js";import"./search-77UZhWyC.js";import"./Input-B14JiyW9.js";import"./useControlled-BRAT0rWw.js";import"./Button-DYsrDr-V.js";import"./small-cross-DFJo2BXV.js";import"./ActionButton-DUFTPwmt.js";import"./Checkbox-BGGgt2SZ.js";import"./useValueChanged-Cq6kIfvu.js";import"./CollapsiblePanel-zc_GBnu-.js";import"./MultiColumnSortDialog-DB-NI1_-.js";import"./MenuTrigger-J5s3L2h9.js";import"./CompositeItem-B632hz3W.js";import"./ToolbarRootContext-eiDeLXye.js";import"./getDisabledMountTransitionStyles-CdwEI3h2.js";import"./getPseudoElementBounds-Cors6fEL.js";import"./chevron-down-Bpsf2br_.js";import"./index-BjKGneLm.js";import"./error-CG0c4OaM.js";import"./BaseCbacBanner-BwibHyrW.js";import"./makeExternalStore-DOMUefpT.js";import"./Tooltip-a4Yw_fKw.js";import"./PopoverPopup-gtrR7YRy.js";import"./debounce-nVQqP8JB.js";import"./useOsdkClient-DKJIj3oZ.js";import"./tick-mEiPhkv2.js";import"./DropdownField-Du154yBU.js";import"./isEqual-B4RlLHXD.js";import"./withOsdkMetrics-CT1e8NKK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
