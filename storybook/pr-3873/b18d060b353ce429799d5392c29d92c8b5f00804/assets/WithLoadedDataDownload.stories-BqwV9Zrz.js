import{f as b,j as a,r as i}from"./iframe-Tb86ZRmF.js";import{O as u}from"./object-table-BV4hXuTI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DfbZGOZ6.js";import"./Table-BC91fjfJ.js";import"./index-Dnqd7J8g.js";import"./Dialog-C670hlwL.js";import"./cross-CCAZO53q.js";import"./svgIconContainer-DJKDb-5p.js";import"./useBaseUiId-DEBuPtLc.js";import"./InternalBackdrop-Bhys3WAZ.js";import"./composite-DV_gLhz3.js";import"./index-sYybngkU.js";import"./index-CmiZFNOU.js";import"./index-DzMh4JUH.js";import"./useEventCallback-44hTJD3Z.js";import"./SkeletonBar-C9jEOxoG.js";import"./LoadingCell-BGS5yipP.js";import"./ColumnConfigDialog-Dojt5IjM.js";import"./DraggableList-DkwoEc61.js";import"./search-L-ymspTn.js";import"./Input-Khmtvi3_.js";import"./useControlled-B1TwbK1C.js";import"./Button-CLo15qID.js";import"./small-cross-3q1WModJ.js";import"./ActionButton-BMukdQVj.js";import"./Checkbox-BojkLLsG.js";import"./useValueChanged-BgcKIQxd.js";import"./CollapsiblePanel-DmSY5GnO.js";import"./MultiColumnSortDialog-CkRkKP_G.js";import"./MenuTrigger-BM1y1Qj7.js";import"./CompositeItem-m28j8eMj.js";import"./ToolbarRootContext-BZOu2fTP.js";import"./getDisabledMountTransitionStyles-DO_qV-fs.js";import"./getPseudoElementBounds-DnJUwswI.js";import"./chevron-down-Cc6F0Nf0.js";import"./index-BU-9JmZp.js";import"./error-Bv1qHWgX.js";import"./BaseCbacBanner-Cxj2gyfs.js";import"./makeExternalStore-BlPRehW9.js";import"./Tooltip-DJRSuFpF.js";import"./PopoverPopup-BsjOHC5X.js";import"./debounce-BPiUJ-4q.js";import"./useOsdkClient-DkM13ykF.js";import"./tick-UdFgVdYE.js";import"./DropdownField-BqvRNL9c.js";import"./isEqual-bqxSBOhE.js";import"./withOsdkMetrics-C3T6RJD2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
