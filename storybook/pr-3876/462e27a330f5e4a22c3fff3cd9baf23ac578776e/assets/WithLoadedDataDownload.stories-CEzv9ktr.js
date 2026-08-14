import{f as b,j as a,r as i}from"./iframe-C5plkjSh.js";import{O as u}from"./object-table-D-wd0Qcs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D2IaZEKn.js";import"./Table-D55pI679.js";import"./index-D9wyEakh.js";import"./Dialog-CPktwRC6.js";import"./cross-qTcD5Byv.js";import"./svgIconContainer-EWLL2EhA.js";import"./useBaseUiId-V6kg8ls-.js";import"./InternalBackdrop-C5tJkjz5.js";import"./composite-BxJrl2yy.js";import"./index-D5BdYI2w.js";import"./index-DGSE155D.js";import"./index-BJLKwKUI.js";import"./useEventCallback-BPOfe5xL.js";import"./SkeletonBar-D7VOiuiY.js";import"./LoadingCell-Cl0-ex6e.js";import"./ColumnConfigDialog-DwlPTvTA.js";import"./DraggableList-DIIzQe75.js";import"./search-DBXUIzFs.js";import"./Input-B8vRDl86.js";import"./useControlled-XDmIyGCI.js";import"./Button-D-euGQeq.js";import"./small-cross-JHfhKmWd.js";import"./ActionButton-UWnXYNQ1.js";import"./Checkbox-CcXa3FW0.js";import"./useValueChanged-CCEYZLFM.js";import"./CollapsiblePanel-DkWAAq2A.js";import"./MultiColumnSortDialog-C1xQBoGS.js";import"./MenuTrigger-sBycFOGP.js";import"./CompositeItem-C0Ixb4m4.js";import"./ToolbarRootContext-BWxTlH90.js";import"./getDisabledMountTransitionStyles-BIiy187H.js";import"./getPseudoElementBounds-DyRvmShW.js";import"./chevron-down-DJkRQn8M.js";import"./index-EcGiAU7n.js";import"./error-BgKA35zl.js";import"./BaseCbacBanner-BdNxAHfp.js";import"./makeExternalStore-BinvBmxp.js";import"./Tooltip-B6v5wWAV.js";import"./PopoverPopup-Dk2YnyhM.js";import"./debounce-B_060YLv.js";import"./useOsdkClient-DVJH9yA4.js";import"./tick-BkRHkH2Y.js";import"./DropdownField-D24t9xbi.js";import"./isEqual-DS72OK34.js";import"./withOsdkMetrics-CfCFI9Ho.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
