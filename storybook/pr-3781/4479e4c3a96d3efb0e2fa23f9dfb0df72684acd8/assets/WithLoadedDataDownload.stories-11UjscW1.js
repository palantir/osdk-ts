import{f as b,j as a,r as i}from"./iframe-DkjIhjOk.js";import{O as u}from"./object-table-DjhA7KTC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DUI5tsck.js";import"./Table-YRTYsQnk.js";import"./index-Ci1HsxQf.js";import"./Dialog-B-doa8PC.js";import"./cross-BOLu8mlC.js";import"./svgIconContainer-bvG5TW2Y.js";import"./useBaseUiId-Biend9O3.js";import"./InternalBackdrop-C_M3PWM9.js";import"./composite-DVDI3Vyc.js";import"./index-ey6hl2b8.js";import"./index--Nzol5yv.js";import"./index-C-30e07L.js";import"./useEventCallback-BcNnEe4O.js";import"./SkeletonBar-xPxJdYTs.js";import"./LoadingCell-RKWHNWRh.js";import"./ColumnConfigDialog-DcTSIA3i.js";import"./DraggableList-DelcAz5h.js";import"./search-BZ8v_096.js";import"./Input-D-eMrt1E.js";import"./useControlled-BTghw2bz.js";import"./Button-CwSvPgha.js";import"./small-cross-Bdoag7lD.js";import"./ActionButton-DnSGyXBp.js";import"./Checkbox-BUlFL2Ay.js";import"./useValueChanged-mGVslq15.js";import"./CollapsiblePanel-DeuzuEYY.js";import"./MultiColumnSortDialog-BW9H5Lbm.js";import"./MenuTrigger-JLOD6Cua.js";import"./CompositeItem-BNwAusbR.js";import"./ToolbarRootContext-6z2XExln.js";import"./getDisabledMountTransitionStyles-4RzuPJj6.js";import"./getPseudoElementBounds-Cjnm34tD.js";import"./chevron-down-DahpzRGw.js";import"./index-BSyqZrwB.js";import"./error-B5H2RzDH.js";import"./BaseCbacBanner-BRzJz9wR.js";import"./makeExternalStore-DV2VnHUE.js";import"./Tooltip-A5u3Ouiv.js";import"./PopoverPopup-D3VoNSFI.js";import"./debounce-JLt9Gzvl.js";import"./useOsdkClient-CXgoPmaj.js";import"./tick-PgSwRzNQ.js";import"./DropdownField-BL_jj1eH.js";import"./isEqual-BroWPddn.js";import"./withOsdkMetrics-CFjDkd46.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
