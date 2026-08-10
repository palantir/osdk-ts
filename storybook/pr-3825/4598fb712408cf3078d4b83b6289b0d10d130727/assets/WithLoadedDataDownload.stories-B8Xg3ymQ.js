import{f as b,j as a,r as i}from"./iframe-CC79wy_g.js";import{O as u}from"./object-table-CkXFhR3k.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-z3GLkGAP.js";import"./Table-C_k6UNCH.js";import"./index-C33jCrCz.js";import"./Dialog-B4UEOGBl.js";import"./cross-ipWBqB8R.js";import"./svgIconContainer-BP6BFAr1.js";import"./useBaseUiId-DAg5RdyV.js";import"./InternalBackdrop-COWpBHnV.js";import"./composite-C0Vu5t_m.js";import"./index-BlLuABy0.js";import"./index-D3F-m5eM.js";import"./index-a8jLhQEi.js";import"./useEventCallback-DRddk0cy.js";import"./SkeletonBar-D7y69zaB.js";import"./LoadingCell-DTyZ0HHf.js";import"./ColumnConfigDialog-BJ-BrdIG.js";import"./DraggableList-DTV1vgC0.js";import"./search-C23-bZ6_.js";import"./Input-rDYGL68X.js";import"./useControlled-B01nKra1.js";import"./isEqual-7wD5lyOB.js";import"./isObject-CdHfoVRL.js";import"./Button-DuivO10i.js";import"./ActionButton-CNWw_rBN.js";import"./Checkbox-CsyxZdv8.js";import"./useValueChanged-CZBR_R6j.js";import"./CollapsiblePanel-DeEVZt2f.js";import"./MultiColumnSortDialog-Cne529o4.js";import"./MenuTrigger-D2yJRNIb.js";import"./CompositeItem-DFHw5T7g.js";import"./ToolbarRootContext-DHil5fps.js";import"./getDisabledMountTransitionStyles-Bvyp7A2k.js";import"./getPseudoElementBounds-BlO2I0zb.js";import"./chevron-down-v3_iAZgR.js";import"./index-HMtgFW0K.js";import"./error-wnTyEN9d.js";import"./BaseCbacBanner-B_HqEQWu.js";import"./makeExternalStore-CkX2v-LN.js";import"./Tooltip-qaomFd3j.js";import"./PopoverPopup-CcmMhYNQ.js";import"./toNumber-BhxvyPk1.js";import"./useOsdkClient-DVLj6L8G.js";import"./tick-Ctls74RV.js";import"./DropdownField-IS4psDxI.js";import"./withOsdkMetrics-EoR7xkLR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
