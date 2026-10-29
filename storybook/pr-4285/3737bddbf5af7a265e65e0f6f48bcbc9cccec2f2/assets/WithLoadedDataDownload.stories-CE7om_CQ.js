import{f as b,j as a,r as i}from"./iframe-CiSKHfyc.js";import{O as u}from"./object-table-BUWT5KBZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CWupNPgO.js";import"./Table-B_RCfvj3.js";import"./index-D3wSasD3.js";import"./Dialog-C7vJczax.js";import"./cross-DLLCkXVB.js";import"./svgIconContainer-BJUr7DHQ.js";import"./useBaseUiId-b_FN5CrC.js";import"./InternalBackdrop-D3k0KQi8.js";import"./composite-jZQCk-zR.js";import"./index-B_PLf88V.js";import"./index-EV91z822.js";import"./index-DiV7dZco.js";import"./useEventCallback-sqYZKM0w.js";import"./SkeletonBar-CPu9e21L.js";import"./LoadingCell-KaZWCKJ4.js";import"./ColumnConfigDialog-BRc4xEVX.js";import"./DraggableList-BfwLO2fI.js";import"./search-DZapC1lH.js";import"./Input-Cul32AIH.js";import"./useControlled-CiZcMD85.js";import"./Button-Cmyv-rnS.js";import"./small-cross-B8GBbM76.js";import"./ActionButton-BQXgRd_a.js";import"./Checkbox-DfjI4tvH.js";import"./useValueChanged-Cy7TI7KD.js";import"./CollapsiblePanel-CI66v9kn.js";import"./MultiColumnSortDialog-BXCUme4L.js";import"./MenuTrigger-BfJwIOVp.js";import"./CompositeItem-_hXBxygC.js";import"./ToolbarRootContext-D7bvCCy6.js";import"./getDisabledMountTransitionStyles-B0YJZ1gZ.js";import"./getPseudoElementBounds-CF1HuyZT.js";import"./chevron-down-D5jrtiFY.js";import"./index-CVFbikLp.js";import"./error-CDPXWVFZ.js";import"./BaseCbacBanner-0rqK7Jap.js";import"./makeExternalStore-BA-q_GW8.js";import"./Tooltip-DEc9D41A.js";import"./PopoverPopup-BFyTaDus.js";import"./debounce-C0MW0JLZ.js";import"./useOsdkClient-rmpyupkX.js";import"./tick-Dt1Daxrw.js";import"./DropdownField-CYqYbFgh.js";import"./isEqual-DBiPhKAB.js";import"./withOsdkMetrics-CWRpGlls.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
