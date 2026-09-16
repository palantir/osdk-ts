import{f as b,j as a,r as i}from"./iframe-cfVHShSW.js";import{O as u}from"./object-table-h-pD-D9U.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DIuXOY3G.js";import"./Table-BkLnj2tw.js";import"./index-Dh0_pJy1.js";import"./Dialog-fvTgsksn.js";import"./cross-CQMpStFn.js";import"./svgIconContainer-shdj6Qbw.js";import"./useBaseUiId-Dx0z8IdG.js";import"./InternalBackdrop-D8f4nw96.js";import"./composite-DGFet_96.js";import"./index-DyU-H2ls.js";import"./index-B1nRcBho.js";import"./index-4e4CIFBu.js";import"./useEventCallback-BEjjrUNS.js";import"./SkeletonBar-B7tEemlu.js";import"./LoadingCell-BQwKQHLp.js";import"./ColumnConfigDialog-BxFvYZit.js";import"./DraggableList-B-boOlGO.js";import"./search-HP5frDaz.js";import"./Input-CRQW49QU.js";import"./useControlled-DRr_lzX9.js";import"./Button-2DUkL7w7.js";import"./small-cross-CMcRrXYz.js";import"./ActionButton-CQj94TDP.js";import"./Checkbox-B5DEItIX.js";import"./useValueChanged-B7R09HF5.js";import"./CollapsiblePanel-CHOxQQMz.js";import"./MultiColumnSortDialog-DoGW72Du.js";import"./MenuTrigger-DgHMNTY4.js";import"./CompositeItem-BNd8aIDX.js";import"./ToolbarRootContext-rTwoUfWD.js";import"./getDisabledMountTransitionStyles-Q1E4gOTQ.js";import"./getPseudoElementBounds-DNOwWkqq.js";import"./chevron-down-SG4gwSm2.js";import"./index-C9sGbhZ7.js";import"./error-DFzqEfiP.js";import"./BaseCbacBanner-CAItOWNI.js";import"./makeExternalStore-ClpC--FM.js";import"./Tooltip-dXIOIOnO.js";import"./PopoverPopup-Ra0J62dt.js";import"./debounce-l3cliQfv.js";import"./useOsdkClient-DhV-YBPx.js";import"./tick-Clw3DVoZ.js";import"./DropdownField-qj0jYiEp.js";import"./isEqual-C3ehgu6v.js";import"./withOsdkMetrics-C8YqvKiy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
