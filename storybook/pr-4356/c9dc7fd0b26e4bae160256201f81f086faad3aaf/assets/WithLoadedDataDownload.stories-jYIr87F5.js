import{f as b,j as a,r as i}from"./iframe-V97s0gAW.js";import{O as u}from"./object-table-BhMqDpxN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-3HSTeFHP.js";import"./Table-CP1pcPri.js";import"./index-DpgCkzdC.js";import"./Dialog-DDTOxf51.js";import"./cross-D1lQCJW7.js";import"./svgIconContainer-DcsfwCI6.js";import"./useBaseUiId-Bab3TUT0.js";import"./InternalBackdrop-DON14_Jh.js";import"./composite-CbcGiMzv.js";import"./index-mHMhPLDN.js";import"./index-D4Dl5EM_.js";import"./index-DiDYqxft.js";import"./useEventCallback-CdaXvWI6.js";import"./SkeletonBar-BJfs4zM-.js";import"./LoadingCell-DGMorCmc.js";import"./ColumnConfigDialog-CK7aMFL8.js";import"./DraggableList-DWoD67oE.js";import"./search-B7TbVw6W.js";import"./Input-C6RT56dE.js";import"./useControlled-CturneKY.js";import"./Button-BO5_Znwd.js";import"./small-cross-xW5wyF61.js";import"./ActionButton-B4eNZhjq.js";import"./Checkbox-DTzO9krD.js";import"./useValueChanged-7VQbrE2E.js";import"./CollapsiblePanel-DzQCvcLA.js";import"./MultiColumnSortDialog-5NywVi3s.js";import"./MenuTrigger-COgQ6_1D.js";import"./CompositeItem-Dp8TKMUS.js";import"./ToolbarRootContext-Cm4dkNA7.js";import"./getDisabledMountTransitionStyles-C0GpbwGk.js";import"./getPseudoElementBounds-BZTN0a4u.js";import"./chevron-down-D6e3j0_s.js";import"./index-DF7F2J8l.js";import"./error-3rN_CcIw.js";import"./BaseCbacBanner-JWXSeG4M.js";import"./makeExternalStore-CCWCHpFp.js";import"./Tooltip-pzXiOa2u.js";import"./PopoverPopup-DT3NfX8h.js";import"./debounce-BepasE64.js";import"./useOsdkClient-8pQnCGJ8.js";import"./tick-DuScy4TP.js";import"./DropdownField-Beas9bGg.js";import"./isEqual-Bi3Ylt0j.js";import"./withOsdkMetrics-OMK47pZ9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
