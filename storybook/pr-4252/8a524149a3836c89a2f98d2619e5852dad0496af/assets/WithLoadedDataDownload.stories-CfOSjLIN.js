import{f as b,j as a,r as i}from"./iframe-CzgnuvEu.js";import{O as u}from"./object-table-DZE1yhi9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BOIiyEUV.js";import"./Table-C0r4YIFX.js";import"./index-DzE9qOqD.js";import"./Dialog-C6gIzk-X.js";import"./cross-BZ8qiqH7.js";import"./svgIconContainer-CqjF4WdJ.js";import"./useBaseUiId-BVmKyOEj.js";import"./InternalBackdrop-DI2I7eRR.js";import"./composite-DYp9sm2c.js";import"./index-CK7PizA2.js";import"./index-8D7uARHg.js";import"./index-pus3Iuu0.js";import"./useEventCallback-DP5etoNb.js";import"./SkeletonBar-tfdRWGle.js";import"./LoadingCell-BVnynEjd.js";import"./ColumnConfigDialog-CyH8mLNb.js";import"./DraggableList-DqCHPyso.js";import"./search-Cwa3Up2s.js";import"./Input-ZYnWFBEZ.js";import"./useControlled-C5aZuSIZ.js";import"./Button-NdiRMwUB.js";import"./small-cross-DSTYA1K8.js";import"./ActionButton-C6BBrtRh.js";import"./Checkbox-C0KN_mwH.js";import"./useValueChanged-CqEHKFBa.js";import"./CollapsiblePanel-O0DPlNmM.js";import"./MultiColumnSortDialog-B3d2ZrNN.js";import"./MenuTrigger-CT9JPRp9.js";import"./CompositeItem-D17OeXfK.js";import"./ToolbarRootContext-DRsejA9Q.js";import"./getDisabledMountTransitionStyles-DxBJ1NRq.js";import"./getPseudoElementBounds-Dyuhd565.js";import"./chevron-down-CcjtSJSE.js";import"./index-D4tXRR6m.js";import"./error-Dn-b8Fhc.js";import"./BaseCbacBanner-COsXYVNU.js";import"./makeExternalStore-b-3Eu4Hx.js";import"./Tooltip-B2E5uvSu.js";import"./PopoverPopup-Cftbj8pR.js";import"./debounce-DvL0klkp.js";import"./useOsdkClient-BHaXbtia.js";import"./tick-DwhgM6ss.js";import"./DropdownField-Bkj49_ok.js";import"./isEqual-BuQ-7_wX.js";import"./withOsdkMetrics-4RonxvLU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
