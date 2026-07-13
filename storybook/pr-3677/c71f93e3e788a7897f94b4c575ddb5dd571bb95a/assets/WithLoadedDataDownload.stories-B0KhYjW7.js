import{f as b,j as a,r as i}from"./iframe-Ct5U6xeR.js";import{O as u}from"./object-table-C4CEy73m.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CdzdMHdl.js";import"./Table-DtpjcUKZ.js";import"./index-Dgl4nJuA.js";import"./Dialog-BpPNk_K9.js";import"./cross-CFO-dET5.js";import"./svgIconContainer-CTihE-cS.js";import"./useBaseUiId-nrauk7OM.js";import"./InternalBackdrop-CqYa4Zj9.js";import"./composite-ecDtriP6.js";import"./index-lLm2r21o.js";import"./index-mpVEuWzZ.js";import"./index-Buf32kd_.js";import"./useEventCallback-Cup2dSua.js";import"./SkeletonBar-DPNeUMO8.js";import"./LoadingCell-CEReogQ7.js";import"./ColumnConfigDialog-DdQjHdYv.js";import"./DraggableList-DLV9PqKm.js";import"./search-BvDZFYef.js";import"./Input-COl4G5TA.js";import"./useControlled-BAy3aki5.js";import"./Button-BTJJpdUb.js";import"./small-cross-BvyhBHw6.js";import"./ActionButton-g7HnpD2H.js";import"./Checkbox-CyTuxGX4.js";import"./useValueChanged-D1Qk2ZAB.js";import"./CollapsiblePanel-CZ1_7kXB.js";import"./MultiColumnSortDialog-BBZ2dCO2.js";import"./MenuTrigger-_GODd1Wl.js";import"./CompositeItem-BLgRRv78.js";import"./ToolbarRootContext-DWeXieT0.js";import"./getDisabledMountTransitionStyles-DZ35bsiT.js";import"./getPseudoElementBounds-8obCYOc_.js";import"./chevron-down-CRq_s3Fv.js";import"./index-BFmQGs5j.js";import"./error-u64wl0pz.js";import"./BaseCbacBanner-Dcz4VIIS.js";import"./makeExternalStore-CYKQyVfe.js";import"./Tooltip-DFzAB9dF.js";import"./PopoverPopup-6LcS2ubE.js";import"./toNumber-DaJf37vJ.js";import"./useOsdkClient-7RI6nSNr.js";import"./tick-CJqm_UsH.js";import"./DropdownField-D15cf4CJ.js";import"./withOsdkMetrics-B7UuXrPe.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
