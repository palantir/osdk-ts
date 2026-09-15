import{f as b,j as a,r as i}from"./iframe-DP2XT2Ax.js";import{O as u}from"./object-table-CWd3XKCa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-MSxHh9cg.js";import"./Table-oBozEYgN.js";import"./index-CZwfuIm2.js";import"./Dialog-D2jP7-9g.js";import"./cross-BST2eW_7.js";import"./svgIconContainer-CYYVNj4c.js";import"./useBaseUiId-FZoWw8m8.js";import"./InternalBackdrop-BhboBOxC.js";import"./composite-CmPQztny.js";import"./index-RJE3YwuO.js";import"./index-B2FT6Zn5.js";import"./index-DbIKPCqv.js";import"./useEventCallback-Dg6K2X_Q.js";import"./SkeletonBar-DH4NDkMn.js";import"./LoadingCell-ClVBOB9X.js";import"./ColumnConfigDialog-og7pKw1Q.js";import"./DraggableList-C1eYiUo8.js";import"./search-DHZrW8_w.js";import"./Input-1UPAFlWH.js";import"./useControlled-C4scXiay.js";import"./Button-BVtJyzoK.js";import"./small-cross-CtLGGmA4.js";import"./ActionButton-uv8s5IRm.js";import"./Checkbox-Beu4Oh0H.js";import"./useValueChanged-RoL-GB64.js";import"./CollapsiblePanel-DPIs0k4c.js";import"./MultiColumnSortDialog-xHpIpjzv.js";import"./MenuTrigger-CFNU6crv.js";import"./CompositeItem-AXDbFh92.js";import"./ToolbarRootContext-BZtQONnf.js";import"./getDisabledMountTransitionStyles-DDs7xAlw.js";import"./getPseudoElementBounds-QeoJL95h.js";import"./chevron-down-CzZnZ__S.js";import"./index-DTkzCssz.js";import"./error-BbJX9_-G.js";import"./BaseCbacBanner-pjzVuofY.js";import"./makeExternalStore-Db1GWq1p.js";import"./Tooltip-aqIVw1KW.js";import"./PopoverPopup-C_ncCoFL.js";import"./debounce-Dj81RInU.js";import"./useOsdkClient-CAkDS70D.js";import"./tick-C2-r-ZD3.js";import"./DropdownField-CtHib4R8.js";import"./isEqual-DLffGPnv.js";import"./withOsdkMetrics-l-VjWGrr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
