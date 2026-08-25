import{f as b,j as a,r as i}from"./iframe-Bno8djo7.js";import{O as u}from"./object-table-nJ2m76fC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DoyMSojG.js";import"./Table-BjCnq7GD.js";import"./index-Bp1l5rWD.js";import"./Dialog-DAQFqKel.js";import"./cross-QI68TLXt.js";import"./svgIconContainer-BnD58swH.js";import"./useBaseUiId-CysbO9z2.js";import"./InternalBackdrop-Cn5KziF1.js";import"./composite-DfMqUtsP.js";import"./index-CTCxNRd0.js";import"./index-zlVZaIXm.js";import"./index-CNSLgLDR.js";import"./useEventCallback-YcQVIhsi.js";import"./SkeletonBar-aqALnIxM.js";import"./LoadingCell-DVWiWlTZ.js";import"./ColumnConfigDialog-CUZw6o28.js";import"./DraggableList-B5fYxue1.js";import"./search-Cwwb_s2u.js";import"./Input-DbgwKTdL.js";import"./useControlled-c3pzkWI7.js";import"./Button-C9PyxqvP.js";import"./small-cross-CBEoJXlf.js";import"./ActionButton-DLiePIQg.js";import"./Checkbox-Rj4xDxF3.js";import"./useValueChanged-uylpe4Ux.js";import"./CollapsiblePanel-BI8YmfWp.js";import"./MultiColumnSortDialog-BXYA9Uwj.js";import"./MenuTrigger-UmNPDpZR.js";import"./CompositeItem-4hPgfCxC.js";import"./ToolbarRootContext-Dql3SctO.js";import"./getDisabledMountTransitionStyles-q13OTEOP.js";import"./getPseudoElementBounds-DHmOFePC.js";import"./chevron-down-DPAZwO7T.js";import"./index-CyXtkMiX.js";import"./error-DdObSOoZ.js";import"./BaseCbacBanner-DWR6ArJJ.js";import"./makeExternalStore-BAXThE2g.js";import"./Tooltip-CE0qB4Lt.js";import"./PopoverPopup-Ctz89BjB.js";import"./debounce-BUYNR-N5.js";import"./useOsdkClient-DzQFMUb8.js";import"./tick-Bq0tsPSN.js";import"./DropdownField-IPHIVFRE.js";import"./isEqual-CkJTtiCd.js";import"./withOsdkMetrics-DvUN-3xf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
