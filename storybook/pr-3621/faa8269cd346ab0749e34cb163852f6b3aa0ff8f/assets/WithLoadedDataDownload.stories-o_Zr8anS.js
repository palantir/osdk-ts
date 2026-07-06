import{f as b,j as a,r as i}from"./iframe-CSDQN0H7.js";import{O as u}from"./object-table-BuKVAusg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CogmwM7N.js";import"./Table-B0QwUsK4.js";import"./index-yl5IXyEv.js";import"./Dialog-BC3uc0Y8.js";import"./cross-Dnnue40e.js";import"./svgIconContainer-BawUlnx9.js";import"./useBaseUiId-CvMCsZtd.js";import"./InternalBackdrop-BdKO0-NW.js";import"./composite-CkHOUmoC.js";import"./index-D_3ES6Wr.js";import"./index-B79nei2k.js";import"./index-CeySp3aR.js";import"./useEventCallback-Bglv8EgK.js";import"./SkeletonBar-pIXAtDep.js";import"./LoadingCell-Bpr4varO.js";import"./ColumnConfigDialog-BtFf8mHH.js";import"./DraggableList-J1KBK6yb.js";import"./search-DhAPGoPJ.js";import"./Input-Dl_5uMeJ.js";import"./useControlled-D48I7YQp.js";import"./Button-VHpYDsB0.js";import"./small-cross-PM9uhvNu.js";import"./ActionButton-CwQ3ohbD.js";import"./Checkbox-BaMqHDrB.js";import"./useValueChanged-C8a7PXGc.js";import"./CollapsiblePanel-CsS7dO0N.js";import"./MultiColumnSortDialog-DFlDqGdD.js";import"./MenuTrigger-DUUzWWqH.js";import"./CompositeItem-BRUblGbs.js";import"./ToolbarRootContext-CYNYeNMx.js";import"./getDisabledMountTransitionStyles-DOrlSbAf.js";import"./getPseudoElementBounds-CKQpXPTX.js";import"./chevron-down-Canc_bc9.js";import"./index-7AcbBDGr.js";import"./error-C4QmCDiq.js";import"./BaseCbacBanner-oNR5RDuz.js";import"./makeExternalStore-DG4oGFRu.js";import"./Tooltip-XI26jfav.js";import"./PopoverPopup-6ejgW83z.js";import"./toNumber-DxW3sVjN.js";import"./useOsdkClient-Dma7C5oP.js";import"./tick-BFGTPPQw.js";import"./DropdownField-CyZ31NC-.js";import"./withOsdkMetrics-OPJnIEEa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
