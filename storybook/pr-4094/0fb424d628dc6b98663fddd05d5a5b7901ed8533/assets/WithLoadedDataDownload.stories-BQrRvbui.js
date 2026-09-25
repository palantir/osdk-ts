import{f as b,j as a,r as i}from"./iframe-DvmPM8XM.js";import{O as u}from"./object-table-CkUPVJKK.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CWXBbGOK.js";import"./Table-BLHlsaeM.js";import"./index-Ckyxf5ES.js";import"./Dialog-D0BD0rSH.js";import"./cross-CWK_3iX0.js";import"./svgIconContainer-CKvBglfs.js";import"./useBaseUiId-BK6rm_vX.js";import"./InternalBackdrop-CDbm9lnE.js";import"./composite-BtMZy7bH.js";import"./index-DxRIPJNB.js";import"./index-DFwggDQF.js";import"./index-CiLgD-FQ.js";import"./useEventCallback-BHLH-nqa.js";import"./SkeletonBar-CK3zDoai.js";import"./LoadingCell-qfi7oMtY.js";import"./ColumnConfigDialog-CJjI4U8O.js";import"./DraggableList-DbOnBNdn.js";import"./search-TBI5J1QZ.js";import"./Input-DAJjBhoV.js";import"./useControlled-BlFMc0zn.js";import"./Button-CdgEMVNK.js";import"./small-cross-COHScf5C.js";import"./ActionButton-B0jn8mYL.js";import"./Checkbox-D5VxKTgt.js";import"./useValueChanged-B2Byj99o.js";import"./CollapsiblePanel-Bu8C3hKI.js";import"./MultiColumnSortDialog-Dmb1Dgf0.js";import"./MenuTrigger-CcHInNCV.js";import"./CompositeItem-kRLneeY3.js";import"./ToolbarRootContext-E7hSXQbh.js";import"./getDisabledMountTransitionStyles--bG59vx_.js";import"./getPseudoElementBounds-DIk-7fYl.js";import"./chevron-down-BE3Vkzfj.js";import"./index-DPz56gTU.js";import"./error-C_RDaNST.js";import"./BaseCbacBanner-DioKTDKG.js";import"./makeExternalStore-DPCzTg_N.js";import"./Tooltip-3Oq2VbSf.js";import"./PopoverPopup-BSlx7FSn.js";import"./debounce-B_vGr92p.js";import"./useOsdkClient-DYbXS0Lf.js";import"./tick-BBkj7T5w.js";import"./DropdownField-siiIARW9.js";import"./isEqual-1s0ixZs9.js";import"./withOsdkMetrics-C3HZbqv9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
