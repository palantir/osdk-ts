import{f as b,j as a,r as i}from"./iframe-h3cXleGN.js";import{O as u}from"./object-table-BsSmMt3L.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BQEANbpx.js";import"./Table-BeSToCeZ.js";import"./index-BDLfEa8e.js";import"./Dialog-DeWPPo26.js";import"./cross-BpOPwjmQ.js";import"./svgIconContainer-Cgqw1YBP.js";import"./useBaseUiId-QnAE5tIH.js";import"./InternalBackdrop-BFG2CobT.js";import"./composite-C4e_-FyQ.js";import"./index-k1u2DroK.js";import"./index-vao6BJxf.js";import"./index-CZjWoi_r.js";import"./useEventCallback-BD84mdzL.js";import"./SkeletonBar-B7eIUlus.js";import"./LoadingCell-DNy4vmry.js";import"./ColumnConfigDialog-BeovBTtp.js";import"./DraggableList-BhKO-zfV.js";import"./search-PbFTowl6.js";import"./Input-DMjR7I_H.js";import"./useControlled-eLMBNmJx.js";import"./Button-DFiEOscG.js";import"./small-cross-DY1rLeT4.js";import"./ActionButton-1r00dirM.js";import"./Checkbox-JSGFEMe4.js";import"./useValueChanged-63uAN-SY.js";import"./CollapsiblePanel-Dm7jOilb.js";import"./MultiColumnSortDialog-wzESQhDR.js";import"./MenuTrigger-D8zx6dkR.js";import"./CompositeItem-C-ehMRsr.js";import"./ToolbarRootContext-C2Gw-DxP.js";import"./getDisabledMountTransitionStyles-Bd4mc9iO.js";import"./getPseudoElementBounds-rzVNYAZO.js";import"./chevron-down-rZqsJyY-.js";import"./index-CAJBKKlL.js";import"./error-DtPjeO-n.js";import"./BaseCbacBanner-DoqFMeng.js";import"./makeExternalStore-CiUy57je.js";import"./Tooltip-DrTaG1sU.js";import"./PopoverPopup-uL_4U54p.js";import"./debounce-D47KBTR0.js";import"./useOsdkClient-W_cf0x5J.js";import"./tick-Cy93K5D5.js";import"./DropdownField-ChJiaau3.js";import"./isEqual-BTkpVUie.js";import"./withOsdkMetrics-DXJIt81Q.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
