import{f as b,j as a,r as i}from"./iframe-Ch4YG9zO.js";import{O as u}from"./object-table-DwAUiwcL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2FbqY3N.js";import"./Table-BLltzhIi.js";import"./index-Tj0gjODi.js";import"./Dialog-BNJ1i_u1.js";import"./cross-BsOxLVVI.js";import"./svgIconContainer-Cn1U1N9z.js";import"./useBaseUiId-n1xJoDj4.js";import"./InternalBackdrop-Buu-6QXj.js";import"./composite-Bj5YxLBn.js";import"./index-C9z0_KHF.js";import"./index-B1Pg27bT.js";import"./index-DQmnZDrR.js";import"./useEventCallback-1xds4HE8.js";import"./SkeletonBar-DC1PVcIm.js";import"./LoadingCell-D637ZThr.js";import"./ColumnConfigDialog-CIXD4mum.js";import"./DraggableList-BZENnRUa.js";import"./search-Dl_XkKU0.js";import"./Input-BqjoA6Wr.js";import"./useControlled-DDKlVuXM.js";import"./isEqual-BZeBOh-G.js";import"./isObject-BdykLpCq.js";import"./Button-BwCFldKH.js";import"./ActionButton-CTyZ0DCW.js";import"./Checkbox-CYouGi2t.js";import"./useValueChanged-D2NB_sbf.js";import"./CollapsiblePanel-26O5LN4W.js";import"./MultiColumnSortDialog-BEI-x7RL.js";import"./MenuTrigger-CCNiVl3M.js";import"./CompositeItem-D7zxms0O.js";import"./ToolbarRootContext-DFHW9hl5.js";import"./getDisabledMountTransitionStyles-Ceyf3F0l.js";import"./getPseudoElementBounds-ClJsMx2c.js";import"./chevron-down-BNKmlKfx.js";import"./index-DmkOCqw0.js";import"./error-KSQFRnjc.js";import"./BaseCbacBanner-B3WI1t1e.js";import"./makeExternalStore-Bqt01k7N.js";import"./Tooltip-BjX1cDFv.js";import"./PopoverPopup-C1JJDSzg.js";import"./toNumber-Dxpg4zZN.js";import"./useOsdkClient-DspnLF5w.js";import"./tick-BL75HJvL.js";import"./DropdownField-C-VLwocU.js";import"./withOsdkMetrics-DjmuwpSc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
