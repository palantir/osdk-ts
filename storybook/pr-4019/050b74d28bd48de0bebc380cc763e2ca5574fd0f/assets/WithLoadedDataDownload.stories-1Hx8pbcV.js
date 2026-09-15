import{f as b,j as a,r as i}from"./iframe-oQpn4zur.js";import{O as u}from"./object-table-rOPQcFMe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cmjd7BI4.js";import"./Table-DpinA8Jj.js";import"./index-D2rifVxK.js";import"./Dialog-Dr89oVDu.js";import"./cross-xvCB5p22.js";import"./svgIconContainer-CsxtAqM7.js";import"./useBaseUiId-pVATQNHL.js";import"./InternalBackdrop-BjzdZcIz.js";import"./composite-C_bfQ-PM.js";import"./index-BgH4UIQM.js";import"./index--_6_irpc.js";import"./index-wyLBv6ta.js";import"./useEventCallback-DBs_uy7k.js";import"./SkeletonBar-BNFrP5fb.js";import"./LoadingCell-B7rs415M.js";import"./ColumnConfigDialog-1H_3wJZg.js";import"./DraggableList-CkiAvO03.js";import"./search-CwzMMbdj.js";import"./Input-BTa_bWxE.js";import"./useControlled-DKwwdhXV.js";import"./Button-DcQk0Vz0.js";import"./small-cross-S_zs3rbw.js";import"./ActionButton-Dwc2giVA.js";import"./Checkbox-DvPIwl-U.js";import"./useValueChanged-fHbpa3Ve.js";import"./CollapsiblePanel-BprHq_-m.js";import"./MultiColumnSortDialog-BhA7iuO4.js";import"./MenuTrigger-Crnh6Nym.js";import"./CompositeItem-M0o16Fhw.js";import"./ToolbarRootContext-C0a0ALA7.js";import"./getDisabledMountTransitionStyles-BNE85OYQ.js";import"./getPseudoElementBounds-DpQWAe0p.js";import"./chevron-down-DhcH1mZx.js";import"./index-CP1r_S59.js";import"./error-G32g_aWE.js";import"./BaseCbacBanner-Cqjvid3G.js";import"./makeExternalStore-8N_JBzmB.js";import"./Tooltip-CnHU-6Zj.js";import"./PopoverPopup-ChSQAsi2.js";import"./debounce-DH6i8tLU.js";import"./useOsdkClient-Dge9q3q2.js";import"./tick-yvYbXRUk.js";import"./DropdownField-DosPwAAS.js";import"./isEqual-CF2VyX-K.js";import"./withOsdkMetrics-C1JB2Ffo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
