import{f as b,j as a,r as i}from"./iframe-CaEl2eka.js";import{O as u}from"./object-table-DKAkJsj7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CKJhYclM.js";import"./Table-DdN_Fh96.js";import"./index-Dao3z4xN.js";import"./Dialog-CFabIcPb.js";import"./cross-w8xD3Kul.js";import"./svgIconContainer-BZS1llvH.js";import"./useBaseUiId-C6NCgBGS.js";import"./InternalBackdrop-y5HdDMK5.js";import"./composite-CDJBgnca.js";import"./index-B-jhfDuh.js";import"./index-BWzb8A31.js";import"./index-DpjF6j4z.js";import"./useEventCallback-DVl-nCUK.js";import"./SkeletonBar-Dqjmo54-.js";import"./LoadingCell-DeviUxoR.js";import"./ColumnConfigDialog-CWGHF6UC.js";import"./DraggableList-Cybt2ylu.js";import"./search-00eTLW-R.js";import"./Input-Dxv9-Vzq.js";import"./useControlled-DCzWHf0h.js";import"./Button-Bv8tSuuM.js";import"./small-cross-BccHwN_d.js";import"./ActionButton-DRREP_I-.js";import"./Checkbox-BkeEhxkZ.js";import"./useValueChanged-DVOjBH36.js";import"./CollapsiblePanel-bnEHpgLY.js";import"./MultiColumnSortDialog-aAuNMXh8.js";import"./MenuTrigger-CjdtjAZl.js";import"./CompositeItem-_nl0E7_8.js";import"./ToolbarRootContext--ihq9xQk.js";import"./getDisabledMountTransitionStyles-DV07XhqX.js";import"./getPseudoElementBounds-qU76zSTh.js";import"./chevron-down-CoZ1s0t9.js";import"./index-DaKhz2zi.js";import"./error-Zn5rVwYN.js";import"./BaseCbacBanner-DUtgprEg.js";import"./makeExternalStore-CmUF4kPq.js";import"./Tooltip-D6YR40Tf.js";import"./PopoverPopup-5RMFkOP8.js";import"./debounce-DgOaRStr.js";import"./useOsdkClient-aeU6oKDe.js";import"./tick-91iRYN-3.js";import"./DropdownField-C01HlXsj.js";import"./isEqual-RjQDL3k6.js";import"./withOsdkMetrics-B62KTojI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
