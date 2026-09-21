import{f as b,j as a,r as i}from"./iframe-BMrwWMZ2.js";import{O as u}from"./object-table-XEkvxBmh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DoFjuVNT.js";import"./Table-CRbvCevp.js";import"./index-B-70XFhu.js";import"./Dialog-BvuaZoDt.js";import"./cross-xNU9IbBp.js";import"./svgIconContainer-kz6kEcEQ.js";import"./useBaseUiId-CWfKm3xo.js";import"./InternalBackdrop-DBtObWvw.js";import"./composite-BaT2Rrgm.js";import"./index-CSBMmUL0.js";import"./index-p-n9-sXg.js";import"./index-BRQVA_3N.js";import"./useEventCallback-BSd1E5Q2.js";import"./SkeletonBar-C0kfolP9.js";import"./LoadingCell-BkA0PgxK.js";import"./ColumnConfigDialog-DRHnAQpP.js";import"./DraggableList-DgMFDC-A.js";import"./search-BhHSPRHE.js";import"./Input-BMTygJUG.js";import"./useControlled-D483ZYKr.js";import"./Button-WcPNJQ9X.js";import"./small-cross-BrwfsXlZ.js";import"./ActionButton-eMUnEcf2.js";import"./Checkbox-CFXTKEnV.js";import"./useValueChanged-BW2KTtVu.js";import"./CollapsiblePanel-oxSGc6n5.js";import"./MultiColumnSortDialog-BsmgrK-w.js";import"./MenuTrigger-CRUUqyTc.js";import"./CompositeItem-Cr7Wo-Nu.js";import"./ToolbarRootContext-yILvKIp4.js";import"./getDisabledMountTransitionStyles-XH-VCXpg.js";import"./getPseudoElementBounds-Bfv7yUkE.js";import"./chevron-down-Cm6BVMO0.js";import"./index-CE_tjB-k.js";import"./error-ZGBsqwOl.js";import"./BaseCbacBanner-Cf-BajoY.js";import"./makeExternalStore-CVWgtyr5.js";import"./Tooltip-DglXCpHI.js";import"./PopoverPopup-Cs8tAGg3.js";import"./debounce-CcyW07a2.js";import"./useOsdkClient-DG-loGVw.js";import"./tick-B5oTJlX2.js";import"./DropdownField-Bk7MJDj2.js";import"./isEqual-CXrRfqJW.js";import"./withOsdkMetrics-fvKzM9Fz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
