import{f as b,j as a,r as i}from"./iframe-CHFOhFuc.js";import{O as u}from"./object-table-BEAVPppC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B-1rSRgY.js";import"./Table-BHXrFrp1.js";import"./index-BpX6hENj.js";import"./Dialog-DavrQYlA.js";import"./cross-CLtam5MT.js";import"./svgIconContainer-zzwTq_t7.js";import"./useBaseUiId-CpuSZ-O9.js";import"./InternalBackdrop-D25Nk_lQ.js";import"./composite-C909Fk53.js";import"./index-DQOrZvkv.js";import"./index-BvRLFMPY.js";import"./index-DjQ198rg.js";import"./useEventCallback-7PhX1npr.js";import"./SkeletonBar-Ptzyivem.js";import"./LoadingCell-vyjlReTb.js";import"./ColumnConfigDialog-Dtl1NBcg.js";import"./DraggableList-CpD9hN98.js";import"./search-Ct1jR5-1.js";import"./Input-D8YBib2L.js";import"./useControlled-Cnl8z_DZ.js";import"./Button-DHQU-3rC.js";import"./small-cross-Bo2NjBLu.js";import"./ActionButton-DCWXOHbb.js";import"./Checkbox-5_fa2xH5.js";import"./useValueChanged-B0fjg5Tm.js";import"./CollapsiblePanel-qGGyMRYk.js";import"./MultiColumnSortDialog-0LmFuPWU.js";import"./MenuTrigger-C96UvIX6.js";import"./CompositeItem-V52V_N8R.js";import"./ToolbarRootContext-D3CnJ-Kn.js";import"./getDisabledMountTransitionStyles-cR1rxtQJ.js";import"./getPseudoElementBounds-FCd8iOYs.js";import"./chevron-down-DDx-Wnyx.js";import"./index-ClhHXn3z.js";import"./error-2828ta47.js";import"./BaseCbacBanner-AWNQAETM.js";import"./makeExternalStore-CXAxXc_Y.js";import"./Tooltip-tSbifett.js";import"./PopoverPopup-DHn0uRpX.js";import"./debounce-BuVF__lb.js";import"./useOsdkClient-Ct6LLa9L.js";import"./tick-CVF34xif.js";import"./DropdownField-CwxAz57O.js";import"./isEqual-JWCoBpvi.js";import"./withOsdkMetrics-BHwUIoHR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
