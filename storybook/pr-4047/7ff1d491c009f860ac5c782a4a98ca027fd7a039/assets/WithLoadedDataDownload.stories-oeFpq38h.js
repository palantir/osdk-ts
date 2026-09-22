import{f as b,j as a,r as i}from"./iframe-b99LbP9m.js";import{O as u}from"./object-table-pZnWuds5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVhK3iQp.js";import"./Table-BRLCpUgA.js";import"./index-lvCDhi6D.js";import"./Dialog-CbNqy00v.js";import"./cross-DIxLp0N9.js";import"./svgIconContainer-BihU0y1S.js";import"./useBaseUiId-6kqzncOU.js";import"./InternalBackdrop-COXnZoqL.js";import"./composite-CtvoA4ac.js";import"./index-DJmpNsh_.js";import"./index-CQtcp48q.js";import"./index-DPKFJAUb.js";import"./useEventCallback-BRh0F3Gc.js";import"./SkeletonBar-DiB2OCWt.js";import"./LoadingCell-lj19Zhoi.js";import"./ColumnConfigDialog-Cjx8ju9e.js";import"./DraggableList-Dw54j7lg.js";import"./search-CC467d8u.js";import"./Input-hdA3kWA3.js";import"./useControlled-ByvbEfpA.js";import"./Button-C5yqAo8p.js";import"./small-cross-CVBamzYp.js";import"./ActionButton-CgHWaoxM.js";import"./Checkbox-f37FVRU5.js";import"./useValueChanged-CqszMfOm.js";import"./CollapsiblePanel-Bq-rJ7Pf.js";import"./MultiColumnSortDialog-BBbGd2Rj.js";import"./MenuTrigger-BGm_gEHF.js";import"./CompositeItem-CKc0sSZR.js";import"./ToolbarRootContext-BgL_RAO8.js";import"./getDisabledMountTransitionStyles-4C3EEDb3.js";import"./getPseudoElementBounds-CP-KB6E2.js";import"./chevron-down-D4nxFd5U.js";import"./index-DLEC-1eU.js";import"./error-DAEmkM_5.js";import"./BaseCbacBanner-BF3-W7TS.js";import"./makeExternalStore-BPDPOT32.js";import"./Tooltip-GFqETB97.js";import"./PopoverPopup-CtpNbWOs.js";import"./debounce-BQ_I9Yzc.js";import"./useOsdkClient-B5OWGTmv.js";import"./tick-DHP_OEKV.js";import"./DropdownField-B091wn9X.js";import"./isEqual-DCogO1wH.js";import"./withOsdkMetrics-C6RLviWF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
