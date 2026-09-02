import{f as b,j as a,r as i}from"./iframe-NaI848Pw.js";import{O as u}from"./object-table-DGgHE6S2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Da-cK7y6.js";import"./Table-B2aU0OJ_.js";import"./index-ByD4yBnp.js";import"./Dialog-ylH5D2Mp.js";import"./cross-DZQZ8aN4.js";import"./svgIconContainer-ByuHBSGQ.js";import"./useBaseUiId-1fZcoCV9.js";import"./InternalBackdrop-Cv3pqYz2.js";import"./composite-C-xyZ2AO.js";import"./index-DK-1aFjN.js";import"./index-uEx2XW2m.js";import"./index-DcFw2uH3.js";import"./useEventCallback-_nGrLZqG.js";import"./SkeletonBar-Bu2x3QDl.js";import"./LoadingCell-BUGk1zUZ.js";import"./ColumnConfigDialog-DPKcVM17.js";import"./DraggableList-DNjSWAxt.js";import"./search-BU5VoOWM.js";import"./Input-CiWsOGB4.js";import"./useControlled-DJRTNEAD.js";import"./Button-C5kZ5tdC.js";import"./small-cross-DMotjJBE.js";import"./ActionButton-3u2nKuiZ.js";import"./Checkbox-JyHzB6tA.js";import"./useValueChanged-D7TKryoJ.js";import"./CollapsiblePanel-tRloNykG.js";import"./MultiColumnSortDialog-3CJF9g3e.js";import"./MenuTrigger-CpUNPK5g.js";import"./CompositeItem-Ci20bb3i.js";import"./ToolbarRootContext-wPP71u3n.js";import"./getDisabledMountTransitionStyles-B4FRcemG.js";import"./getPseudoElementBounds-B9b_nORq.js";import"./chevron-down-Cd6DrKf8.js";import"./index-C7BYYXHx.js";import"./error-DzctpUji.js";import"./BaseCbacBanner-GlkTUOC4.js";import"./makeExternalStore-BKziC80i.js";import"./Tooltip-C9WwAWNN.js";import"./PopoverPopup-DTLzPYyL.js";import"./debounce-BGQuEffv.js";import"./useOsdkClient-56kdB1m-.js";import"./tick-zOXaxw1M.js";import"./DropdownField-BG_oDUOB.js";import"./isEqual-z-7Yb-t2.js";import"./withOsdkMetrics-Bsb41CEs.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
