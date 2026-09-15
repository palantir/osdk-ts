import{f as b,j as a,r as i}from"./iframe-CJIAHpsc.js";import{O as u}from"./object-table-CwUXi6yg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-6cWemOcr.js";import"./Table-D0rCsC0y.js";import"./index-BzlqDAfw.js";import"./Dialog-U3PPNzQj.js";import"./cross-D0IHJ6R4.js";import"./svgIconContainer-56SLvs0U.js";import"./useBaseUiId-DvojBwxI.js";import"./InternalBackdrop-C4MFPAsi.js";import"./composite-CFOr0BZu.js";import"./index-DiBt9TUI.js";import"./index-BzXh_3LE.js";import"./index-CFmt81Rk.js";import"./useEventCallback-B1gWvbDg.js";import"./SkeletonBar-Dbp-LEnb.js";import"./LoadingCell-DNRrniXH.js";import"./ColumnConfigDialog-CDMrr0h-.js";import"./DraggableList-D3tJ5a8G.js";import"./search-Bfm8FcWQ.js";import"./Input-icqzcMB1.js";import"./useControlled-OjeTa2_t.js";import"./Button-B7ufGNzS.js";import"./small-cross-oWzWfK8v.js";import"./ActionButton-DVvDY0Pz.js";import"./Checkbox-DUM-1O-m.js";import"./useValueChanged-uNOI8JzK.js";import"./CollapsiblePanel-Dili79wA.js";import"./MultiColumnSortDialog-CHzBTx0p.js";import"./MenuTrigger-zbtqCKoD.js";import"./CompositeItem-Czysbmcp.js";import"./ToolbarRootContext-CJh9ljWw.js";import"./getDisabledMountTransitionStyles-DKmwvZAI.js";import"./getPseudoElementBounds-DvGqkRSV.js";import"./chevron-down-TVEh7Z-q.js";import"./index-D7-FHl4f.js";import"./error-D5dqG5sm.js";import"./BaseCbacBanner-N61U2yaQ.js";import"./makeExternalStore-BCywNTfM.js";import"./Tooltip-CeGxYMTK.js";import"./PopoverPopup-DewRGdkh.js";import"./debounce-2inWENXP.js";import"./useOsdkClient-Cut5RvL3.js";import"./tick-hj5PgKj5.js";import"./DropdownField-CBRqM-61.js";import"./isEqual-glBRSill.js";import"./withOsdkMetrics-mHYGalWz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
