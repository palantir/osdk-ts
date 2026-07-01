import{f as b,j as a,r as i}from"./iframe-ByebNF9G.js";import{O as u}from"./object-table-DkY5Eam7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BLJ5nm8q.js";import"./Table-CzupOnnl.js";import"./index-DrYCJTcF.js";import"./Dialog-DjgGOx1l.js";import"./cross-B9Ul-EiI.js";import"./svgIconContainer-CyQgdri1.js";import"./useBaseUiId-BSJ3fRaN.js";import"./InternalBackdrop-DklVG8lc.js";import"./composite-D85XRieF.js";import"./index-gnCQ8zpE.js";import"./index-n0aiGAK9.js";import"./index-D7fCb9_B.js";import"./useEventCallback-gTx1a_be.js";import"./SkeletonBar-CRh_ESKK.js";import"./LoadingCell-DBpSkPqE.js";import"./ColumnConfigDialog-CF_rP4wu.js";import"./DraggableList-DE05-CQ-.js";import"./search-C7zAZ54L.js";import"./Input-C5LuyW3N.js";import"./useControlled-oOiLPaN4.js";import"./Button-CZzSrRkZ.js";import"./small-cross-q31CaUCX.js";import"./ActionButton-CcqVTL0u.js";import"./Checkbox-B5a0FXxR.js";import"./minus-DxmSfAi7.js";import"./tick-D4g9sOY0.js";import"./useValueChanged-Dwl_cdjL.js";import"./caret-down-DfDUhgIs.js";import"./CollapsiblePanel-B4GQo-hS.js";import"./MultiColumnSortDialog-Cba0Gj5Z.js";import"./MenuTrigger-BIT1Eune.js";import"./CompositeItem-Df4No_Tk.js";import"./ToolbarRootContext-C9vRlfBp.js";import"./getDisabledMountTransitionStyles-DiXGk51e.js";import"./getPseudoElementBounds-OAjD6b0x.js";import"./chevron-down-DsIawkVT.js";import"./index-D7xtWs7d.js";import"./error-6QLkq3Wr.js";import"./BaseCbacBanner-BRHYH2cM.js";import"./makeExternalStore--YX2KV2I.js";import"./Tooltip-Dc7FX3ej.js";import"./PopoverPopup-DUNpZx8b.js";import"./toNumber-CTpi8Q5A.js";import"./useOsdkClient-CNngy1Vb.js";import"./DropdownField-BB_0Nrdl.js";import"./withOsdkMetrics-bYymsQI_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
