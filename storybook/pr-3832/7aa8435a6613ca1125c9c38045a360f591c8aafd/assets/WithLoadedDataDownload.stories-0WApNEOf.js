import{f as b,j as a,r as i}from"./iframe-BxC0rnVf.js";import{O as u}from"./object-table-BtjJwEQU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CsqKNXT4.js";import"./Table-Cm_ZXCAG.js";import"./index-CB930e5x.js";import"./Dialog-CrdwlqVW.js";import"./cross-BpFLUEKb.js";import"./svgIconContainer-BuuNAr0U.js";import"./useBaseUiId-BRpjjaal.js";import"./InternalBackdrop-PILmt-GV.js";import"./composite-sAiFlK1Y.js";import"./index-Bdkgurn2.js";import"./index-FGHPo6lI.js";import"./index-D-NcnYmU.js";import"./useEventCallback-mLxVut11.js";import"./SkeletonBar-Bv-CCVUB.js";import"./LoadingCell-BKIjSPo4.js";import"./ColumnConfigDialog-CZ1m7UHv.js";import"./DraggableList-zdckpiAS.js";import"./search-BeNbtvpq.js";import"./Input-BynHcsMQ.js";import"./useControlled-DC01SbDU.js";import"./isEqual-lrapgCCQ.js";import"./isObject-ClysUrYf.js";import"./Button-BNu5fBU0.js";import"./ActionButton-Dd3qspII.js";import"./Checkbox-CbvmOXOW.js";import"./useValueChanged-hoJa7UO_.js";import"./CollapsiblePanel-BNDP3zSw.js";import"./MultiColumnSortDialog-DefXQB-g.js";import"./MenuTrigger-CRpAfNkz.js";import"./CompositeItem-DAic8xZX.js";import"./ToolbarRootContext-CX0irP5X.js";import"./getDisabledMountTransitionStyles-D4oIwPK9.js";import"./getPseudoElementBounds-DSBZWeu7.js";import"./chevron-down-BU_rocIF.js";import"./index-UDAhzYMP.js";import"./error-CKn6N_jF.js";import"./BaseCbacBanner-CtX7U5Ls.js";import"./makeExternalStore-DurDWx8y.js";import"./Tooltip-paEHixY4.js";import"./PopoverPopup-CfOUkERU.js";import"./toNumber-CqWtRKov.js";import"./useOsdkClient-DcDbgTWT.js";import"./tick-DFNHUkMm.js";import"./DropdownField-DIx8k6z5.js";import"./withOsdkMetrics-CS2XIluR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
