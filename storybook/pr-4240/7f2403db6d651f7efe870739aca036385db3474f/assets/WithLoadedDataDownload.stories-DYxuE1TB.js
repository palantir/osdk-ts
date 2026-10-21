import{f as b,j as a,r as i}from"./iframe-Crrq_V9a.js";import{O as u}from"./object-table-B8hROw69.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0KSNMSf.js";import"./Table-C-XUy--Q.js";import"./index-BUK6uge5.js";import"./Dialog-DtUfF62j.js";import"./cross-BfUth1rr.js";import"./svgIconContainer-CBsIZ9u2.js";import"./useBaseUiId-G0RhfiSE.js";import"./InternalBackdrop-Cb-39vNM.js";import"./composite-DFN7AbeA.js";import"./index-LdB11F_t.js";import"./index-BhOk5BKE.js";import"./index-dPrJwc88.js";import"./useEventCallback-DZL9KXuR.js";import"./SkeletonBar-B0oezpwK.js";import"./LoadingCell-47RrJ7Ze.js";import"./ColumnConfigDialog-wR9Noxr_.js";import"./DraggableList-BKs_pyIm.js";import"./search-UIxXkiNx.js";import"./Input-BB-wuDqG.js";import"./useControlled-7_WCnHC_.js";import"./Button-rjMzAizh.js";import"./small-cross-2Itdgd_Q.js";import"./ActionButton-B7zHu77T.js";import"./Checkbox-D8a0dNg0.js";import"./useValueChanged-Mq4YQWWw.js";import"./CollapsiblePanel-DMABQszi.js";import"./MultiColumnSortDialog-D0s8qdtH.js";import"./MenuTrigger-rBTOT85u.js";import"./CompositeItem-COkq6uGE.js";import"./ToolbarRootContext-UM565H_l.js";import"./getDisabledMountTransitionStyles-DsVgkYmN.js";import"./getPseudoElementBounds-BJj-LpqP.js";import"./chevron-down-33yPdK7L.js";import"./index-iPpy1sZ4.js";import"./error-FZelDdZI.js";import"./BaseCbacBanner-BWeKp-nV.js";import"./makeExternalStore-DqEHGNcf.js";import"./Tooltip-CmGtxQmE.js";import"./PopoverPopup-CBuM0R4V.js";import"./debounce-BqrQQHrt.js";import"./useOsdkClient-CQzSF8cZ.js";import"./tick-C-BN17pt.js";import"./DropdownField-CvoKEn-m.js";import"./isEqual-BdNG0-Zn.js";import"./withOsdkMetrics-BUiVXfiJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
