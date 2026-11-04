import{f as b,j as a,r as i}from"./iframe-BGoY5mFC.js";import{O as u}from"./object-table-DfeUx1e5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DsvzwfCi.js";import"./Table-IYycR_yA.js";import"./index-DnfiKoHw.js";import"./Dialog-B4v_Dkac.js";import"./cross-BtqJOxEL.js";import"./svgIconContainer-BX-wZNF4.js";import"./useBaseUiId-CIYnZ7Oo.js";import"./InternalBackdrop-Cuwv9baZ.js";import"./composite-DKhm2DCj.js";import"./index-B6V6F-VV.js";import"./index-DYEd7rlA.js";import"./index-BdsorHI7.js";import"./useEventCallback-B7XLSD-1.js";import"./SkeletonBar-BJdY69_4.js";import"./LoadingCell-BhvmkPi_.js";import"./ColumnConfigDialog-Bo_2MhnH.js";import"./DraggableList-YOfpeBYu.js";import"./search-Du0qzm2Q.js";import"./Input-D9S9buqu.js";import"./useControlled-Cqb7ClaQ.js";import"./Button-CFNLbf5u.js";import"./small-cross-CAVitq02.js";import"./ActionButton-BYefn9m4.js";import"./Checkbox-gUrxRc_L.js";import"./useValueChanged-U8j9sHFt.js";import"./CollapsiblePanel-_2hoyG7n.js";import"./MultiColumnSortDialog-Ch8pRqdH.js";import"./MenuTrigger-Ds2ksrWo.js";import"./CompositeItem-2fAyt8Be.js";import"./ToolbarRootContext-DUxALj_T.js";import"./getDisabledMountTransitionStyles-C7fH5JXd.js";import"./getPseudoElementBounds-ALTzwxqv.js";import"./chevron-down-CCx6Nv0U.js";import"./index-B0vfjDqX.js";import"./error-Brajw6PY.js";import"./BaseCbacBanner-DY-2ccuc.js";import"./makeExternalStore-BltVU3hB.js";import"./Tooltip-CaSp1gFC.js";import"./PopoverPopup-SiLT4RMM.js";import"./debounce-COVFQzqA.js";import"./useOsdkClient-9nkt6SOH.js";import"./tick-DIaShr09.js";import"./DropdownField-nznVdv8m.js";import"./isEqual-BpvRW_ez.js";import"./withOsdkMetrics-DBjKwuY0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
