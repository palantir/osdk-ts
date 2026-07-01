import{f as b,j as a,r as i}from"./iframe-MapTAMuV.js";import{O as u}from"./object-table-mLH2B3NU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bwxv4q3m.js";import"./Table-tkRYIo34.js";import"./index-BXlqY_Ht.js";import"./Dialog-CZrn6HWV.js";import"./cross-BGQM6uQp.js";import"./svgIconContainer-BAatIUVW.js";import"./useBaseUiId-DXqAgsNn.js";import"./InternalBackdrop-DDsL0RGl.js";import"./composite-DxCIcjcy.js";import"./index-Bv-lWn6b.js";import"./index-CyuMBXvJ.js";import"./index-D6LeoxYb.js";import"./useEventCallback-DCy74I4n.js";import"./SkeletonBar-BZapkKkZ.js";import"./LoadingCell-B0yQYIOV.js";import"./ColumnConfigDialog-Du409ffk.js";import"./DraggableList-nj67Jma1.js";import"./search-D9RyVW37.js";import"./Input-CaAgir6A.js";import"./useControlled-_7E5IBen.js";import"./Button-qOL4kZMj.js";import"./small-cross-D0asAAis.js";import"./ActionButton-DXVKncsA.js";import"./Checkbox-CuS-WKwT.js";import"./minus-BCN5kMmI.js";import"./tick-DbVKGr7x.js";import"./useValueChanged-z0lIX471.js";import"./caret-down-CSua1rBe.js";import"./CollapsiblePanel-jGjjCHJ-.js";import"./MultiColumnSortDialog-DpupnQS4.js";import"./MenuTrigger-5Y_q_j2d.js";import"./CompositeItem-9XoBCER3.js";import"./ToolbarRootContext-C6nWepe7.js";import"./getDisabledMountTransitionStyles-NFvtT7c8.js";import"./getPseudoElementBounds-2Zw0Nbru.js";import"./chevron-down-CO3DuifO.js";import"./index-CeCTWyl6.js";import"./error-wsU8fpMS.js";import"./BaseCbacBanner-CKsLIEsx.js";import"./makeExternalStore-jRsH3x__.js";import"./Tooltip-CPXziFKq.js";import"./PopoverPopup-BQVdaBhn.js";import"./toNumber-BOwZjpBg.js";import"./useOsdkClient-moNSAod6.js";import"./DropdownField-DhntZXIg.js";import"./withOsdkMetrics-BegQOGzW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
