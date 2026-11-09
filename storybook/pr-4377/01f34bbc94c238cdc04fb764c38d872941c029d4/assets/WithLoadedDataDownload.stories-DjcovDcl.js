import{f as b,j as a,r as i}from"./iframe-DJkts_RL.js";import{O as u}from"./object-table-El6ZJtdS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DnSYvyfS.js";import"./Table-CkcyUqQ4.js";import"./index-AdNwtOlb.js";import"./Dialog-C5jCL8Mx.js";import"./cross-RIukJOv6.js";import"./svgIconContainer-C5-52KFN.js";import"./useBaseUiId-BOJH0vIf.js";import"./InternalBackdrop-D5KetDnt.js";import"./composite-DDvCjav2.js";import"./index-Ci2eYgLO.js";import"./index-BDcDuz1j.js";import"./index-CQxVkwph.js";import"./useEventCallback-lKoyoV4u.js";import"./SkeletonBar-BvqjdvM1.js";import"./LoadingCell-CjZbM9If.js";import"./ColumnConfigDialog-DAZT9Gdl.js";import"./DraggableList-CD_o0Imw.js";import"./search-_QUQf3i5.js";import"./Input-FCTts1k3.js";import"./useControlled-DasQvtmr.js";import"./Button-sRivSwhn.js";import"./small-cross-CVWWEP0y.js";import"./ActionButton-VwPGUJzv.js";import"./Checkbox-DYlpQOH7.js";import"./useValueChanged-CZGvPtYp.js";import"./CollapsiblePanel-iUKB7uZT.js";import"./MultiColumnSortDialog-Dp7hOvd-.js";import"./MenuTrigger-CjrvOlSn.js";import"./CompositeItem-LGAP8V9B.js";import"./ToolbarRootContext-DzjIN-OH.js";import"./getDisabledMountTransitionStyles-BYybRfax.js";import"./getPseudoElementBounds-CzOa17qB.js";import"./chevron-down-DB2rAp0-.js";import"./index-CUwadNBX.js";import"./error-BqILnzwq.js";import"./BaseCbacBanner-DO50Ydj3.js";import"./makeExternalStore-phk9_3eu.js";import"./Tooltip-C3bMyjLM.js";import"./isObject-pPVUn46w.js";import"./debounce-CsNmpAAZ.js";import"./useOsdkClient-CytKAX8u.js";import"./tick-Bn4wwjz-.js";import"./DropdownField-CG-CwPna.js";import"./isEqual-BRzVBIIh.js";import"./_baseIsEqual-BfrWjv7z.js";import"./withOsdkMetrics-BoDHZnfJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
