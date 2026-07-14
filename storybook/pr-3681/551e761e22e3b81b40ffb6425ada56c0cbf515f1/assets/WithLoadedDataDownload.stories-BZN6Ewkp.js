import{f as b,j as a,r as i}from"./iframe-BQv7n_vV.js";import{O as u}from"./object-table-DgeNqs5C.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DEVig5aK.js";import"./Table-swSxDHsx.js";import"./index-BcN-U8CC.js";import"./Dialog-DU2VXEh6.js";import"./cross-C1zSmiXC.js";import"./svgIconContainer-BBgMyLyq.js";import"./useBaseUiId-DPVfkf9G.js";import"./InternalBackdrop-aq-sUZ4V.js";import"./composite-CRej-fZo.js";import"./index-C7TmdYI1.js";import"./index-CQWwpl2a.js";import"./index-MggB6RF8.js";import"./useEventCallback-ClSw2lgj.js";import"./SkeletonBar-GzAjIr8x.js";import"./LoadingCell-lK-Um7T5.js";import"./ColumnConfigDialog-CwCXfARO.js";import"./DraggableList-DCGEnyP5.js";import"./search-CdAz0L_I.js";import"./Input-N3OSKqBO.js";import"./useControlled-Dar1laVH.js";import"./Button-DDAxgBEA.js";import"./small-cross-CsRRbIiW.js";import"./ActionButton-TR0dycsd.js";import"./Checkbox-DJiKy0Hy.js";import"./useValueChanged-TfV_fVpJ.js";import"./CollapsiblePanel-BV8Xl6V1.js";import"./MultiColumnSortDialog-DoKw-IN5.js";import"./MenuTrigger-nMmpDkYT.js";import"./CompositeItem-2NdUk1U5.js";import"./ToolbarRootContext-CjG6N3wE.js";import"./getDisabledMountTransitionStyles-DGZD2UYk.js";import"./getPseudoElementBounds-7ehiqtE7.js";import"./chevron-down-BsaukfyV.js";import"./index-D6idOZm7.js";import"./error-wI3sUvOo.js";import"./BaseCbacBanner-lRphsLyH.js";import"./makeExternalStore-DmjCbjCh.js";import"./Tooltip-DPaYtk06.js";import"./PopoverPopup-DP7V4iSE.js";import"./toNumber-BJe3MC1w.js";import"./useOsdkClient-dVYWFEob.js";import"./tick-zAsf_tSh.js";import"./DropdownField-DXO710QY.js";import"./withOsdkMetrics-C9EWKsra.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
