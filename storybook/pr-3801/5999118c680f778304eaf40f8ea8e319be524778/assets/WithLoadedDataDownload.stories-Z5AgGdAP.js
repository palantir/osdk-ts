import{f as b,j as a,r as i}from"./iframe-DlsSxhci.js";import{O as u}from"./object-table-CRAh95MC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C-s1U77H.js";import"./Table-Bj0YMStq.js";import"./index-cP9eqqta.js";import"./Dialog-C5U6ZShk.js";import"./cross-C60t9tFZ.js";import"./svgIconContainer-DPjUtDUg.js";import"./useBaseUiId-C02HFIUM.js";import"./InternalBackdrop-DBknUb6w.js";import"./composite-H8SSz-ne.js";import"./index-cF6qZyvr.js";import"./index-DNVt94aI.js";import"./index-DpBvQz_i.js";import"./useEventCallback-B2uIvmto.js";import"./SkeletonBar-B0jE-NJT.js";import"./LoadingCell-C7YLxKY7.js";import"./ColumnConfigDialog-CWIAK8ug.js";import"./DraggableList-Cq1gBryW.js";import"./search-BqsY1PeE.js";import"./Input-Ci6C2hr-.js";import"./useControlled-Z7ZWa5VR.js";import"./isEqual-B8XloMG1.js";import"./isObject-BTVuOy-v.js";import"./Button-CxITngjL.js";import"./ActionButton-BWBcKq3A.js";import"./Checkbox-CQJt_NNw.js";import"./useValueChanged-B3zPCOA0.js";import"./CollapsiblePanel-B5uHCo3M.js";import"./MultiColumnSortDialog-BhSvpKv1.js";import"./MenuTrigger-BwFK0x6i.js";import"./CompositeItem-drMwpLA_.js";import"./ToolbarRootContext-vkAvhQwM.js";import"./getDisabledMountTransitionStyles-DMANXZME.js";import"./getPseudoElementBounds-CMsfWS6D.js";import"./chevron-down-DonJjnvl.js";import"./index-CBkUqlyA.js";import"./error-IK-rXp7z.js";import"./BaseCbacBanner-DhSKbTPU.js";import"./makeExternalStore-CH2NQdic.js";import"./Tooltip-DKzdlOiN.js";import"./PopoverPopup-NPYSC6zj.js";import"./toNumber-Co3sADDP.js";import"./useOsdkClient-Bz2RwTNu.js";import"./tick-2uq__bbs.js";import"./DropdownField-Bsph783u.js";import"./withOsdkMetrics-Bw6076Jo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
