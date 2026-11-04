import{f as b,j as a,r as i}from"./iframe-C_XIQRaj.js";import{O as u}from"./object-table-BjgJV20o.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-yovbOiJH.js";import"./Table-pt3kJltT.js";import"./index-BeXNZw_x.js";import"./Dialog-UHsoLMa-.js";import"./cross-CUZU2tfy.js";import"./svgIconContainer-BNlRuGAK.js";import"./useBaseUiId-8inAF2n-.js";import"./InternalBackdrop-CVa7hO1U.js";import"./composite-DGI-ix3e.js";import"./index-BLFOZToo.js";import"./index-BLHmTRj_.js";import"./index-BBWBYdHe.js";import"./useEventCallback-DLCeib9r.js";import"./SkeletonBar-yWafqoD-.js";import"./LoadingCell-BAIKpw62.js";import"./ColumnConfigDialog-1AGcRHyc.js";import"./DraggableList-BC3BFZpg.js";import"./search-BE01uCTT.js";import"./Input-DAnQbmer.js";import"./useControlled-Ch9SndTb.js";import"./Button-dB7_sFTC.js";import"./small-cross-38kc_Q0Y.js";import"./ActionButton-D6EEbVJD.js";import"./Checkbox-Cefn8fFv.js";import"./useValueChanged-DzcQQ31i.js";import"./CollapsiblePanel-DHt-foUT.js";import"./MultiColumnSortDialog-Ck74_Wvq.js";import"./MenuTrigger-CsFi9KLa.js";import"./CompositeItem-BQROqFNc.js";import"./ToolbarRootContext-gbYyGpWk.js";import"./getDisabledMountTransitionStyles-BNbLHEBU.js";import"./getPseudoElementBounds-17tz2fhi.js";import"./chevron-down-9VTaJsMC.js";import"./index-DW1hnjgV.js";import"./error-B-SAi68c.js";import"./BaseCbacBanner-gyGh-cKU.js";import"./makeExternalStore-CTMv2DMh.js";import"./Tooltip-C9o7ip4U.js";import"./PopoverPopup-tjx05EUI.js";import"./debounce-C9ttcPrX.js";import"./useOsdkClient-DX8nswLQ.js";import"./tick-C4shc0EI.js";import"./DropdownField-oiVuVzvB.js";import"./isEqual-BXyydvGq.js";import"./withOsdkMetrics-CVYgQ3H4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
