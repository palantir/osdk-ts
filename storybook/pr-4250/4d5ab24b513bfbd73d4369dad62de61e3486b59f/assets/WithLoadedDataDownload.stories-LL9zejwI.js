import{f as b,j as a,r as i}from"./iframe-COVETwhx.js";import{O as u}from"./object-table-COuU105Y.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B-xfSmD6.js";import"./Table-pwM_a1S-.js";import"./index-bOxlMW9W.js";import"./Dialog-DUCt0N-S.js";import"./cross-CCyLZ_a3.js";import"./svgIconContainer-gsbuNadi.js";import"./useBaseUiId-2z9ajXTy.js";import"./InternalBackdrop-BaZjvCUN.js";import"./composite-kZubSwMs.js";import"./index-SM4cV6TD.js";import"./index-BadFZGVY.js";import"./index-Dtx0mzcz.js";import"./useEventCallback-XIafyipZ.js";import"./SkeletonBar-CdNxN4hg.js";import"./LoadingCell-CyraqzVp.js";import"./ColumnConfigDialog-C42ZPsPz.js";import"./DraggableList-B2TOzbeH.js";import"./search-2wDgAEqi.js";import"./Input-DDxMXv2L.js";import"./useControlled-eVeEVm0U.js";import"./Button-D7hgHtqc.js";import"./small-cross-BfZtJMTE.js";import"./ActionButton-CWVjt9h4.js";import"./Checkbox-rFGnVT6O.js";import"./useValueChanged-D9aAEcAT.js";import"./CollapsiblePanel-DqoXoaOR.js";import"./MultiColumnSortDialog-CCxOq-4J.js";import"./MenuTrigger-D-v-XyV6.js";import"./CompositeItem-Dg_iEtAz.js";import"./ToolbarRootContext-ra_8dAxJ.js";import"./getDisabledMountTransitionStyles-Czfivuu1.js";import"./getPseudoElementBounds-DSG6kIql.js";import"./chevron-down-Kndiv9KN.js";import"./index-Qpmu02z_.js";import"./error-Dso-ncgj.js";import"./BaseCbacBanner-BdmB5LbT.js";import"./makeExternalStore-BjWwL6YG.js";import"./Tooltip-BPacsOBo.js";import"./PopoverPopup-DUufvOMw.js";import"./debounce-Dc_lQPIE.js";import"./useOsdkClient-DUa_DGnQ.js";import"./tick-C-EouHxY.js";import"./DropdownField-CgcUEzHA.js";import"./isEqual-dfhg-x8x.js";import"./withOsdkMetrics-DVwyRo2Q.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
