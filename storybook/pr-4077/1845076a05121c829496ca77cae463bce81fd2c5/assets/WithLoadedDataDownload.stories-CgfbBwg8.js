import{f as b,j as a,r as i}from"./iframe-BcWEdWfB.js";import{O as u}from"./object-table-CcJJKdxt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CVa1rIJ3.js";import"./Table-DyBmPdC7.js";import"./index-CwkFMZjv.js";import"./Dialog-D2ZW1Zu6.js";import"./cross-BZ3hgBtX.js";import"./svgIconContainer-D3wylWJt.js";import"./useBaseUiId-DAACsJ_e.js";import"./InternalBackdrop-CE9SLGDS.js";import"./composite-C2TbRxj5.js";import"./index-oIyMgkgm.js";import"./index-cVAitoMW.js";import"./index-BtKdi8uW.js";import"./useEventCallback-ZJD0lbuw.js";import"./SkeletonBar-vf1eVt6J.js";import"./LoadingCell-BTx_PCC4.js";import"./ColumnConfigDialog-bpLpuO55.js";import"./DraggableList-aXFULAtF.js";import"./search-BS0hsyoc.js";import"./Input-BARy-z-s.js";import"./useControlled-BOuSIVI5.js";import"./Button-BuWDqgqc.js";import"./small-cross-BoP5SHxC.js";import"./ActionButton-BIm8wQj8.js";import"./Checkbox-DuWxrP3q.js";import"./useValueChanged-DOMZUlbB.js";import"./CollapsiblePanel-VV5j-F5g.js";import"./MultiColumnSortDialog-DfSAVFI7.js";import"./MenuTrigger-B3hzon_A.js";import"./CompositeItem-3OABFBu2.js";import"./ToolbarRootContext-C3UpIzPe.js";import"./getDisabledMountTransitionStyles-2lA8cPr-.js";import"./getPseudoElementBounds-ykQ7nCp3.js";import"./chevron-down-BTTnF4Fu.js";import"./index-CGjIfcSI.js";import"./error-Dx8WDHU2.js";import"./BaseCbacBanner-VrNUXLoJ.js";import"./makeExternalStore-DAxtPfWd.js";import"./Tooltip-BwYW0r-w.js";import"./PopoverPopup-C8yuAyjI.js";import"./debounce-B-M85eRT.js";import"./useOsdkClient-Cb16LKZK.js";import"./tick-DjnJsHe3.js";import"./DropdownField-B8TqC271.js";import"./isEqual-Bk9KFbCG.js";import"./withOsdkMetrics-YvSA4_Vm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
