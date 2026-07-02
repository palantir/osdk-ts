import{f as b,j as a,r as i}from"./iframe-Bqb8e56z.js";import{O as u}from"./object-table-C1LdXzxs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DArR5i0j.js";import"./index-CReoR6Ri.js";import"./Dialog-DI-WC-dD.js";import"./cross-Fw1aZ42r.js";import"./svgIconContainer-F71y2enf.js";import"./useBaseUiId-DZTItZ6G.js";import"./InternalBackdrop-gfV2EQPd.js";import"./composite-CS1pQ03C.js";import"./index-w_SXVmWn.js";import"./index-DQNPZVpa.js";import"./index-CpMCSrrr.js";import"./useEventCallback-C3cEtpyq.js";import"./SkeletonBar-eij-WKih.js";import"./LoadingCell-BSCq5h0M.js";import"./ColumnConfigDialog-C2q0kqGR.js";import"./DraggableList-C4avHE14.js";import"./search-D_zrQfhi.js";import"./Input-BSsr1nM6.js";import"./useControlled-D2VuLNB-.js";import"./Button-SSzBwglZ.js";import"./small-cross-BMiZIc4s.js";import"./ActionButton-Dygl7oUl.js";import"./Checkbox-0SRGW7dY.js";import"./minus-BmgnG-lu.js";import"./tick-DJTXnkYs.js";import"./useValueChanged-iryy0nsC.js";import"./caret-down-Dn5cXcBi.js";import"./CollapsiblePanel-CZbaOoN1.js";import"./MultiColumnSortDialog-D5VUTZjs.js";import"./MenuTrigger-DTr_qzlC.js";import"./CompositeItem-Be_PCj3i.js";import"./ToolbarRootContext-mnk_5yNn.js";import"./getDisabledMountTransitionStyles-cbQgbD10.js";import"./getPseudoElementBounds-Dj0ya8GA.js";import"./chevron-down-BYuW85L0.js";import"./index-0XcjW038.js";import"./error-BdOjo0Xa.js";import"./BaseCbacBanner-Dxh9GFeJ.js";import"./makeExternalStore-D3mizy5p.js";import"./Tooltip-Cd52InoG.js";import"./PopoverPopup-BTp2y4R0.js";import"./toNumber-B6Z3pcO8.js";import"./useOsdkClient-DhbaFHWJ.js";import"./DropdownField-CayIRrXU.js";import"./withOsdkMetrics-rvBRyKke.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
