import{f as b,j as a,r as i}from"./iframe-QL9jjgtT.js";import{O as u}from"./object-table-CoBjn76Y.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BNL5tg_R.js";import"./Table-BgmV8nHI.js";import"./index-C7yMPf9I.js";import"./Dialog-HEz90GT_.js";import"./cross-D9J_OWJu.js";import"./svgIconContainer-Cq56KS1n.js";import"./useBaseUiId-CS5_kO7T.js";import"./InternalBackdrop-dMCOSWZN.js";import"./composite-TMeVl6ts.js";import"./index-CyfCophj.js";import"./index-B5jORrz6.js";import"./index-Bp7Secbs.js";import"./useEventCallback-BAGaJExi.js";import"./SkeletonBar-o4YrDjze.js";import"./LoadingCell-B1FdUSkv.js";import"./ColumnConfigDialog-D0TZEq0p.js";import"./DraggableList--727y8ri.js";import"./search-Bzm9Q_D2.js";import"./Input-BxbdEwYe.js";import"./useControlled-jF4Qz43A.js";import"./Button-BrIIDNdE.js";import"./small-cross-BlwMF1mi.js";import"./ActionButton-_emLHmrN.js";import"./Checkbox-BtpzFLPf.js";import"./useValueChanged-sHyrOuAt.js";import"./CollapsiblePanel-CrPCsQIn.js";import"./MultiColumnSortDialog-DV8E_opP.js";import"./MenuTrigger-D-gw6xFK.js";import"./CompositeItem-Uw6eZL9e.js";import"./ToolbarRootContext-CwQjdto9.js";import"./getDisabledMountTransitionStyles-DOsFMt1y.js";import"./getPseudoElementBounds-DzdN-phT.js";import"./chevron-down-DBVO4jIp.js";import"./index-CcNAU_ui.js";import"./error-H-jfmF3B.js";import"./BaseCbacBanner-BfSBwlX8.js";import"./makeExternalStore-DJkBOpRI.js";import"./Tooltip-8lmuVpJT.js";import"./PopoverPopup-CR9e5ueR.js";import"./toNumber-DlRBEMAk.js";import"./useOsdkClient-1wnjy4kN.js";import"./tick-BfKYHNPN.js";import"./DropdownField-Cx6elCj5.js";import"./withOsdkMetrics-Dst5838R.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
