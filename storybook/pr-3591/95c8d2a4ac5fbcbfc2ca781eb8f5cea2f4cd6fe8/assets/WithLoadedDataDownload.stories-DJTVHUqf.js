import{f as b,j as a,r as i}from"./iframe-C9KukGcT.js";import{O as u}from"./object-table-i8JiZmY5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B5RKkod9.js";import"./Table-cao5fnBs.js";import"./index-DckjiwPg.js";import"./Dialog-CPWPQYar.js";import"./cross-v2Orz344.js";import"./svgIconContainer-DQNVzmGK.js";import"./useBaseUiId-BYPPXWEn.js";import"./InternalBackdrop-DXF0IfpD.js";import"./composite-CC0qdsOn.js";import"./index-CaS66MGw.js";import"./index-CtW_zaYy.js";import"./index-RzysaKKG.js";import"./useEventCallback-9--cS9GV.js";import"./SkeletonBar-BGF9v-ex.js";import"./LoadingCell-Bpyn2zl4.js";import"./ColumnConfigDialog-B6s7ElCo.js";import"./DraggableList-CXV22mk-.js";import"./search-B1su9-q6.js";import"./Input-BHuG8cS0.js";import"./useControlled-tBnUvvmj.js";import"./Button-CWiFTA_A.js";import"./small-cross-C2fkXenN.js";import"./ActionButton-CcuBXR07.js";import"./Checkbox-GCwqRK1R.js";import"./minus-CGUS0-7m.js";import"./tick-nKrxvkZu.js";import"./useValueChanged-B9p_8VXo.js";import"./caret-down-56pyq4E9.js";import"./CollapsiblePanel-BXvE43wS.js";import"./MultiColumnSortDialog-vk3hOaJU.js";import"./MenuTrigger-BlYPJKYw.js";import"./CompositeItem-CP7tqChf.js";import"./ToolbarRootContext-C0apraRP.js";import"./getDisabledMountTransitionStyles-DMpcUqSC.js";import"./getPseudoElementBounds-DfpC0Pt1.js";import"./chevron-down-DrEALlKG.js";import"./index-BhtC8O2w.js";import"./error-CN9Oe3Cl.js";import"./BaseCbacBanner-DOMsQNSo.js";import"./makeExternalStore-D6Xki7Fj.js";import"./Tooltip-CLpihoAH.js";import"./PopoverPopup-j4BrGDst.js";import"./toNumber-zCFqC9IV.js";import"./useOsdkClient-D-T2KEEL.js";import"./DropdownField-B6BNUNGI.js";import"./withOsdkMetrics-Dxk7tSfz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
