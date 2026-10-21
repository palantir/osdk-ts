import{f as b,j as a,r as i}from"./iframe-Z5B59nHv.js";import{O as u}from"./object-table-OfsX1fbr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B3LVR9LX.js";import"./Table-Bzx7BvY8.js";import"./index-cU0AVaQf.js";import"./Dialog-Bj0impzk.js";import"./cross-Cwrmhou9.js";import"./svgIconContainer-B_Sf7Uoj.js";import"./useBaseUiId-DN7B2pea.js";import"./InternalBackdrop-CT8QE5xx.js";import"./composite-Dna_oWev.js";import"./index-Csf5-H5s.js";import"./index-CwXTPSTU.js";import"./index-D5bko_OX.js";import"./useEventCallback-BOlmFfw4.js";import"./SkeletonBar-CDx-ZXnH.js";import"./LoadingCell-DJfiyKpX.js";import"./ColumnConfigDialog-Be0hyoWQ.js";import"./DraggableList-CRkefje3.js";import"./search-CH0ng29D.js";import"./Input-Bu230jB_.js";import"./useControlled-BQV59h-A.js";import"./Button-C8Wmmv8l.js";import"./small-cross-CTkkul48.js";import"./ActionButton-CQFbOgwD.js";import"./Checkbox-0LwzsijX.js";import"./useValueChanged-CM_W6cBg.js";import"./CollapsiblePanel-CkovPae2.js";import"./MultiColumnSortDialog-BQJBi4i8.js";import"./MenuTrigger-ec0LmwbP.js";import"./CompositeItem-jpYgtvmQ.js";import"./ToolbarRootContext-Bs124fL_.js";import"./getDisabledMountTransitionStyles-Ca4we0Dc.js";import"./getPseudoElementBounds-CnpaCKEL.js";import"./chevron-down-nfT9szK9.js";import"./index-DMp4QYwj.js";import"./error-DocjYaCq.js";import"./BaseCbacBanner-4T2a86qp.js";import"./makeExternalStore-rak7eNYQ.js";import"./Tooltip-Cs-Vtp60.js";import"./PopoverPopup-CC0rhnhV.js";import"./debounce-D-eTCzZU.js";import"./useOsdkClient-XgUCld_F.js";import"./tick-C0PU8pW9.js";import"./DropdownField-CZiGi09a.js";import"./isEqual-C2OAKHDP.js";import"./withOsdkMetrics-DB3Tu-8Y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
