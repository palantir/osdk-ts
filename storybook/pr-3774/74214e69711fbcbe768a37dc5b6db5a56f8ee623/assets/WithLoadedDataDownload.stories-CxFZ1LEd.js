import{f as b,j as a,r as i}from"./iframe-Bu7Ix1IE.js";import{O as u}from"./object-table-C2v13Dut.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C_vXKrgq.js";import"./Table-CcR4BHeD.js";import"./index-CmoSOYw8.js";import"./Dialog-Dy0YakXX.js";import"./cross-DiEWLOow.js";import"./svgIconContainer-DDLtCJpL.js";import"./useBaseUiId-tZcBrbc_.js";import"./InternalBackdrop-D5mqE5uP.js";import"./composite-BYJH93ZN.js";import"./index-BsZCU_gd.js";import"./index-CnmTy_hK.js";import"./index-DQe5Ojpb.js";import"./useEventCallback-D_HhPe5k.js";import"./SkeletonBar-Bzadz-8K.js";import"./LoadingCell-B4MuRYNG.js";import"./ColumnConfigDialog-Ce7H_S2D.js";import"./DraggableList-wBDL6lMx.js";import"./search-DhFNg-wi.js";import"./Input-DLkChbeP.js";import"./useControlled-CGmTThd6.js";import"./isEqual-B0gVi_sG.js";import"./isObject-7o2nEXaI.js";import"./Button-B5h8R3TJ.js";import"./ActionButton-C8nAJG1U.js";import"./Checkbox-D_38qnSN.js";import"./useValueChanged-CNPgNlg_.js";import"./CollapsiblePanel-Bx_iS3iX.js";import"./MultiColumnSortDialog-B1SSBGHa.js";import"./MenuTrigger-BrJ6GrvV.js";import"./CompositeItem-DcF65dQq.js";import"./ToolbarRootContext-DN0znCaz.js";import"./getDisabledMountTransitionStyles-COhOTcSm.js";import"./getPseudoElementBounds-Bc5cMMf-.js";import"./chevron-down-RSnAhjTK.js";import"./index-Bw1Omk53.js";import"./error-Di4qsqoF.js";import"./BaseCbacBanner-DwgH9AvM.js";import"./makeExternalStore-sh41R9y9.js";import"./Tooltip-BqT0KNO0.js";import"./PopoverPopup-DOjZfFhK.js";import"./toNumber-Cjvgkh0x.js";import"./useOsdkClient-wINRGPqb.js";import"./tick-C7sDGere.js";import"./DropdownField-BryjSbxh.js";import"./withOsdkMetrics-BhBd8sSO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
