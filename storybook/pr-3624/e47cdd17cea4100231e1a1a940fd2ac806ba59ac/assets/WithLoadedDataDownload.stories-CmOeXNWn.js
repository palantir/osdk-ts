import{f as b,j as a,r as i}from"./iframe-CsKDXWEO.js";import{O as u}from"./object-table-Lq1z8Mu0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CBPdY5UM.js";import"./Table-DlUIsLd7.js";import"./index-DZvekZfe.js";import"./Dialog-3Hij-yGl.js";import"./cross-Cizjf5nv.js";import"./svgIconContainer-CDnSXqhz.js";import"./useBaseUiId-C8rXvNXU.js";import"./InternalBackdrop-BbG2vM1-.js";import"./composite-DHZvyAu-.js";import"./index-C0UuoNxn.js";import"./index-DB8o02gJ.js";import"./index-Cej8j6kr.js";import"./useEventCallback-DLrk_Jxm.js";import"./SkeletonBar-B1tURlQo.js";import"./LoadingCell-DNSNQlha.js";import"./ColumnConfigDialog-CAQHlsYy.js";import"./DraggableList-BZ32jT6n.js";import"./search-CoMNvgfr.js";import"./Input-B7Me0RXp.js";import"./useControlled-3MQnQEky.js";import"./Button-CuTTrQDe.js";import"./small-cross-DoXNoere.js";import"./ActionButton-K-BAeJmb.js";import"./Checkbox-DuZWDtN7.js";import"./useValueChanged-BQTgWsrr.js";import"./CollapsiblePanel-Dpy8M8mw.js";import"./MultiColumnSortDialog-DPmi5PcT.js";import"./MenuTrigger-DAQyHzno.js";import"./CompositeItem-2ujK5FIL.js";import"./ToolbarRootContext-B5y904wS.js";import"./getDisabledMountTransitionStyles-Cn9I3Tqo.js";import"./getPseudoElementBounds-eBE2DcRk.js";import"./chevron-down-DJM_6rnf.js";import"./index-Dyh_7DuE.js";import"./error-xnvYS1XO.js";import"./BaseCbacBanner-C1Q0kUw6.js";import"./makeExternalStore-Csa2gVoe.js";import"./Tooltip-D_vmOIya.js";import"./PopoverPopup-04HeuIah.js";import"./toNumber-BoWd8EXB.js";import"./useOsdkClient-CCGHECRp.js";import"./tick-BlbDK4AY.js";import"./DropdownField-DCGGZdk0.js";import"./withOsdkMetrics-CtmiM-3o.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
