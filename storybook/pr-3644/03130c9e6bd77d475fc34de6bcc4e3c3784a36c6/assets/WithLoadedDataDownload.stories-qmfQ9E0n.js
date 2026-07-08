import{f as b,j as a,r as i}from"./iframe-CiJvhlhG.js";import{O as u}from"./object-table-DjSFe4WO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DK17mGgM.js";import"./Table-DYDZ4-sI.js";import"./index-RjixPHr_.js";import"./Dialog-CLExdB4_.js";import"./cross-NCh7tpSo.js";import"./svgIconContainer-BNXd1gaL.js";import"./useBaseUiId-B2KcvHa2.js";import"./InternalBackdrop-OO-w_VM2.js";import"./composite-BTQPOs72.js";import"./index-C4epKkDO.js";import"./index-CxzxdhNR.js";import"./index-CEKORZa5.js";import"./useEventCallback-CH-Ltu1h.js";import"./SkeletonBar-DoodPwQC.js";import"./LoadingCell-BzqG1NRn.js";import"./ColumnConfigDialog-DRGwD9Dm.js";import"./DraggableList-CeY62dF2.js";import"./search-DBGT9m4H.js";import"./Input-Aw_J2heG.js";import"./useControlled-cOv0fQIu.js";import"./Button-e0gPLSr0.js";import"./small-cross-BM6CQS56.js";import"./ActionButton-J9kPteYf.js";import"./Checkbox-oxoIS36a.js";import"./useValueChanged-Cl5VLp1f.js";import"./CollapsiblePanel-C4kdGcSA.js";import"./MultiColumnSortDialog-BP288Im4.js";import"./MenuTrigger-B-66VZ3M.js";import"./CompositeItem-DqJih94e.js";import"./ToolbarRootContext-BfL_p7mI.js";import"./getDisabledMountTransitionStyles-BMysfTcm.js";import"./getPseudoElementBounds-Draalqvp.js";import"./chevron-down-BKNhjhGB.js";import"./index-BrcCQyJc.js";import"./error-CVhpmH-E.js";import"./BaseCbacBanner-BpxLGHb6.js";import"./makeExternalStore-DxzVB76A.js";import"./Tooltip-CYrBhYub.js";import"./PopoverPopup-DWoLO15S.js";import"./toNumber-DGy3-eir.js";import"./useOsdkClient-CdAIbxew.js";import"./tick-3edY387H.js";import"./DropdownField-d2Rj1067.js";import"./withOsdkMetrics-DwxB9ODW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
