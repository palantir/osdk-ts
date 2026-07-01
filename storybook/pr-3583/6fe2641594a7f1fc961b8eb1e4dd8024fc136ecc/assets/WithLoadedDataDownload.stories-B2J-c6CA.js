import{f as b,j as a,r as i}from"./iframe-dVXbPfbW.js";import{O as u}from"./object-table-2AxJs4rn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BFr4GPrV.js";import"./Table-BPMEnoqV.js";import"./index-CymBcBUO.js";import"./Dialog-k8pRThzw.js";import"./cross-C_K1F1KB.js";import"./svgIconContainer-DxPEc-Dh.js";import"./useBaseUiId-DkQRwknn.js";import"./InternalBackdrop-BUP4VQDn.js";import"./composite-BS0mYAk9.js";import"./index-CRqtUjTy.js";import"./index-D32At8WP.js";import"./index-DrTNwIQU.js";import"./useEventCallback-G-ePriq4.js";import"./SkeletonBar-BvZQEOhk.js";import"./LoadingCell-D6C_pCCm.js";import"./ColumnConfigDialog-BZNYnqv1.js";import"./DraggableList-RNpoh2B-.js";import"./search-CmnGJ3RM.js";import"./Input-Cg6B84SQ.js";import"./useControlled-B7zIb9rJ.js";import"./Button-Bed55EGq.js";import"./small-cross-CVh1xk-w.js";import"./ActionButton-OrDxCUNF.js";import"./Checkbox-DY2QmYx0.js";import"./minus-D2NQo-N5.js";import"./tick-B6eDNuK7.js";import"./useValueChanged-_w5HUlRo.js";import"./caret-down-DYmu-l7O.js";import"./CollapsiblePanel-D4cpHA4o.js";import"./MultiColumnSortDialog-B_HVE1Py.js";import"./MenuTrigger-CH0SMjgZ.js";import"./CompositeItem-Bb0_tKq-.js";import"./ToolbarRootContext-CLmrqA3G.js";import"./getDisabledMountTransitionStyles-fwloP6uZ.js";import"./getPseudoElementBounds-D7LpqCgB.js";import"./chevron-down-CKo19cp9.js";import"./index-BrJlT82Q.js";import"./error-DHRbgXf-.js";import"./BaseCbacBanner-CTv7S2hA.js";import"./makeExternalStore-D1P93TRJ.js";import"./Tooltip-C2nGCsCl.js";import"./PopoverPopup-Bzf_cc-I.js";import"./toNumber-DB_j65_d.js";import"./useOsdkClient--3-qrhhS.js";import"./DropdownField-BqSrdHxA.js";import"./withOsdkMetrics-D6DNbUwT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
