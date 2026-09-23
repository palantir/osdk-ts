import{f as b,j as a,r as i}from"./iframe-Cmp4Wz_P.js";import{O as u}from"./object-table-BPdeyYsH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Da0vPE9s.js";import"./Table-DNUmj-uA.js";import"./index-xjnGmoVb.js";import"./Dialog-DuVE7T5Z.js";import"./cross-Cpc_V52N.js";import"./svgIconContainer-Clw7VTOr.js";import"./useBaseUiId-BcNPDCTs.js";import"./InternalBackdrop-eb4yl9Hp.js";import"./composite-hwQ1nQqf.js";import"./index-DCv1fgBH.js";import"./index-C0uAgYnw.js";import"./index-CoENTDGw.js";import"./useEventCallback-DuquQoKZ.js";import"./SkeletonBar-DFEJB6KG.js";import"./LoadingCell-DRsdLwys.js";import"./ColumnConfigDialog-BnFADnlc.js";import"./DraggableList-YiYJFEtj.js";import"./search-DwQ9m9I4.js";import"./Input-Dxt6Zigl.js";import"./useControlled-CRN5n83g.js";import"./Button-CjafA2QB.js";import"./small-cross-DEp431Nj.js";import"./ActionButton-BC90jPtT.js";import"./Checkbox-CgFZ_Aad.js";import"./useValueChanged-DQAltEsb.js";import"./CollapsiblePanel-DSx0PiCY.js";import"./MultiColumnSortDialog-CJP6cm7P.js";import"./MenuTrigger--u72VZFy.js";import"./CompositeItem-CC2Ai5yy.js";import"./ToolbarRootContext-_b46dMtv.js";import"./getDisabledMountTransitionStyles-CSh_Lmpf.js";import"./getPseudoElementBounds-BZ5_UdIs.js";import"./chevron-down-DQjw3lMC.js";import"./index-DLqh48ip.js";import"./error-BUufFz3W.js";import"./BaseCbacBanner-BhaFZekH.js";import"./makeExternalStore-C1wNmiU_.js";import"./Tooltip-DCubWUo4.js";import"./PopoverPopup-qOkFvw8W.js";import"./debounce-eMFzGMlT.js";import"./useOsdkClient-fBoD-PC4.js";import"./tick-CevBPgG7.js";import"./DropdownField-dSwdlAau.js";import"./isEqual-Cb-GYmP-.js";import"./withOsdkMetrics-t52t2MsY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
