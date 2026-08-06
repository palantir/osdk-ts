import{f as b,j as a,r as i}from"./iframe-BIPFZdnt.js";import{O as u}from"./object-table-C3Ew3ETh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DULsO4Op.js";import"./Table-CqgE67re.js";import"./index-6cFzeUf5.js";import"./Dialog-CDsBkrX4.js";import"./cross-B2RfYXui.js";import"./svgIconContainer-OcBsH039.js";import"./useBaseUiId-B393kpwA.js";import"./InternalBackdrop-PONnvURB.js";import"./composite-nxEx2m3K.js";import"./index-B2oB8T93.js";import"./index-WnBH7n6a.js";import"./index-Br3v5DWH.js";import"./useEventCallback-Dscbje0V.js";import"./SkeletonBar-DbVyxO5b.js";import"./LoadingCell-BksaunVj.js";import"./ColumnConfigDialog-AIUYrbfs.js";import"./DraggableList-CQbRnG-N.js";import"./search-BgTvK5dn.js";import"./Input-DY9incTR.js";import"./useControlled-dYV3UboW.js";import"./isEqual-B9hIYsbF.js";import"./isObject-DrwUnXlP.js";import"./Button-DvODXE55.js";import"./ActionButton-Dgq0eVpD.js";import"./Checkbox-gAl3Zh-r.js";import"./useValueChanged-BFUbQ0vt.js";import"./CollapsiblePanel-88atgMcL.js";import"./MultiColumnSortDialog-DYXxAhzI.js";import"./MenuTrigger-CF5lnnzD.js";import"./CompositeItem-C9VVNI4z.js";import"./ToolbarRootContext-QEEdrt7Q.js";import"./getDisabledMountTransitionStyles-CuTEhDyu.js";import"./getPseudoElementBounds-BnG6WxCG.js";import"./chevron-down-DgPtyBzm.js";import"./index-BfX4-kUd.js";import"./error-Fv9LpI3F.js";import"./BaseCbacBanner-CAXXbZKG.js";import"./makeExternalStore-DP3axzc1.js";import"./Tooltip-CP5eHo2R.js";import"./PopoverPopup-CeUFsCnB.js";import"./toNumber-DG2bVepK.js";import"./useOsdkClient-CE591Hai.js";import"./tick-DrAlrCM7.js";import"./DropdownField-P2KR5l-Z.js";import"./withOsdkMetrics-nVQK5dsv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
