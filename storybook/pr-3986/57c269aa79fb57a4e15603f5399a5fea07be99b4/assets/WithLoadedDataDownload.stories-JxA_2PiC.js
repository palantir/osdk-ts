import{f as b,j as a,r as i}from"./iframe-CyooYLyM.js";import{O as u}from"./object-table-D2vNArqQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bngm7-ol.js";import"./Table-z9goVWNW.js";import"./index-CIHNhV_V.js";import"./Dialog-EepA0i_O.js";import"./cross-ECBcZMsc.js";import"./svgIconContainer-BUB4CTcl.js";import"./useBaseUiId-B6QldWDF.js";import"./InternalBackdrop-CdJ1CYip.js";import"./composite-Ct2KL6gZ.js";import"./index-CeYxTKYZ.js";import"./index-CYfla4gt.js";import"./index-DJrmSdlL.js";import"./useEventCallback-BoCra72q.js";import"./SkeletonBar-DOUvjjDK.js";import"./LoadingCell-LsIhRtPF.js";import"./ColumnConfigDialog-CLqK_x10.js";import"./DraggableList-DPEz_ect.js";import"./search-B3kqtI7c.js";import"./Input-COiGAk6z.js";import"./useControlled-i1Ezl6Tl.js";import"./Button-BmMB6JHM.js";import"./small-cross-BC6HSGjl.js";import"./ActionButton-DMpxTXkE.js";import"./Checkbox-DPeuERNM.js";import"./useValueChanged-DMjW1Np8.js";import"./CollapsiblePanel-D8wSVDSv.js";import"./MultiColumnSortDialog-OC_EtbbE.js";import"./MenuTrigger-Tft-1JTt.js";import"./CompositeItem-Bl-YA0xX.js";import"./ToolbarRootContext-D7fAF7oZ.js";import"./getDisabledMountTransitionStyles-CtwlLgnw.js";import"./getPseudoElementBounds-BmACaDew.js";import"./chevron-down-B96rYcxD.js";import"./index-LrFKMTxg.js";import"./error-CQMuKd3b.js";import"./BaseCbacBanner-COsBoy9s.js";import"./makeExternalStore-DQfo9etd.js";import"./Tooltip-C4Nyw1my.js";import"./PopoverPopup-BV24RTcO.js";import"./debounce-BAPzRuvt.js";import"./useOsdkClient-DaN5XCxO.js";import"./tick-BvxF-FNa.js";import"./DropdownField-BNmEjlHT.js";import"./isEqual-CD-9D1bD.js";import"./withOsdkMetrics-D__EiDJX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
