import{f as b,j as a,r as i}from"./iframe-CazyyGHD.js";import{O as u}from"./object-table-D2-bxDkP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-MgT8dc0X.js";import"./Table-DL3rssEZ.js";import"./index-Bwh0Qzuq.js";import"./Dialog-BF26qTkP.js";import"./cross-Cm-jIUuV.js";import"./svgIconContainer-D-fln-_9.js";import"./useBaseUiId-_VheOjS_.js";import"./InternalBackdrop-B4za0H0s.js";import"./composite-eyAHIZy6.js";import"./index-oHFfHIzb.js";import"./index-CtTCUyk6.js";import"./index-B5m19dzZ.js";import"./useEventCallback-UNd6PIzw.js";import"./SkeletonBar-B_xaQIaw.js";import"./LoadingCell-C0HWwQql.js";import"./ColumnConfigDialog-bVzUBl6y.js";import"./DraggableList-C9jWvyiI.js";import"./search-CwjMn8PH.js";import"./Input-BqWLM-qJ.js";import"./useControlled-W6MY3ceN.js";import"./Button-ByiOliQr.js";import"./small-cross-DG5C9V4j.js";import"./ActionButton-CY0CRft6.js";import"./Checkbox-CU_5eAW2.js";import"./useValueChanged-DBJ5aULu.js";import"./CollapsiblePanel-Di7CgTfu.js";import"./MultiColumnSortDialog--ev1RyHU.js";import"./MenuTrigger-Bv0F8YkX.js";import"./CompositeItem-rCpLyuDw.js";import"./ToolbarRootContext-Dv2tMkap.js";import"./getDisabledMountTransitionStyles-mlYUDhO6.js";import"./getPseudoElementBounds-9TC7yV4Y.js";import"./chevron-down-C2D_MUNL.js";import"./index-k2L1SHEL.js";import"./error-0vET3H6E.js";import"./BaseCbacBanner-C_L56GIo.js";import"./makeExternalStore-CoBf-2QX.js";import"./Tooltip-IDqRDs0x.js";import"./PopoverPopup-Ctcy6mDh.js";import"./debounce-C5wZ6LH3.js";import"./useOsdkClient-D82r7lVV.js";import"./tick-BlG7e-el.js";import"./DropdownField-C5gHzoJd.js";import"./isEqual-BrBpXSU5.js";import"./withOsdkMetrics-C07As7Qh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
