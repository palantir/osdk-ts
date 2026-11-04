import{f as b,j as a,r as i}from"./iframe-Cm6Hi8JW.js";import{O as u}from"./object-table-CpajiRD3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BYxBeAAs.js";import"./Table-Ct_a1hW1.js";import"./index-CDpDzJRy.js";import"./Dialog-CdmQQCwI.js";import"./cross-CqZ8qeBD.js";import"./svgIconContainer-agsfS07p.js";import"./useBaseUiId-DhmqNEB-.js";import"./InternalBackdrop-CJZwU14-.js";import"./composite-F8udgwsX.js";import"./index-CESCzhSs.js";import"./index-C-Ww-yGF.js";import"./index-DJKRGaVd.js";import"./useEventCallback-C2xB0U8G.js";import"./SkeletonBar-DlBW95tE.js";import"./LoadingCell-DOkaa0iK.js";import"./ColumnConfigDialog-G4e5dztx.js";import"./DraggableList-BTFqvx5V.js";import"./search-9QnSKEDq.js";import"./Input-YqDpCJ5-.js";import"./useControlled-DQSuLFKk.js";import"./Button-Bc-QcRr6.js";import"./small-cross-B71BinCO.js";import"./ActionButton-CVOWP0Vj.js";import"./Checkbox-CHgUS3Dm.js";import"./useValueChanged-BgnUyWLY.js";import"./CollapsiblePanel-oFEh-cWN.js";import"./MultiColumnSortDialog-CYrgSMGk.js";import"./MenuTrigger-BBOOXY-p.js";import"./CompositeItem-BMwGHp9X.js";import"./ToolbarRootContext-C8WiK4oA.js";import"./getDisabledMountTransitionStyles-DwNKIeA1.js";import"./getPseudoElementBounds-7U3MdNEW.js";import"./chevron-down-yfyql6cd.js";import"./index-DID7t8gF.js";import"./error-Dmy_j7rB.js";import"./BaseCbacBanner-BDEZgR9M.js";import"./makeExternalStore-BMRo_idP.js";import"./Tooltip-YgKwei3V.js";import"./PopoverPopup-Al1KuNNN.js";import"./debounce-D0B2zS6f.js";import"./useOsdkClient-BlYAWhvy.js";import"./tick-4BXQbbZv.js";import"./DropdownField-CY7MjU_C.js";import"./isEqual-CCItJCpy.js";import"./withOsdkMetrics-BXiHxUU0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
