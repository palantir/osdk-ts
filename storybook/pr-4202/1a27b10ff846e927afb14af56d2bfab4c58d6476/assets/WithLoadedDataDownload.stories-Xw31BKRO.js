import{f as b,j as a,r as i}from"./iframe-DnOey83C.js";import{O as u}from"./object-table-n0NLcbmZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CEV440E1.js";import"./Table-CwquJVMG.js";import"./index-BIJ6fYvk.js";import"./Dialog-C_Rwtlem.js";import"./cross-B4zEOr1u.js";import"./svgIconContainer-BX0rooyi.js";import"./useBaseUiId-DYH1wxfF.js";import"./InternalBackdrop-Cg_GZXCO.js";import"./composite-uM8HrJm1.js";import"./index-gVUj6237.js";import"./index-DPxA-l2q.js";import"./index-Bhk79zz8.js";import"./useEventCallback-Bfvx_x8s.js";import"./SkeletonBar-DjGBiB-_.js";import"./LoadingCell-DXN749lM.js";import"./ColumnConfigDialog-B-ujE7Qd.js";import"./DraggableList-DLIg-SyJ.js";import"./search-CqHVyKly.js";import"./Input-C3af8CQ0.js";import"./useControlled-CV8__y_P.js";import"./Button-CQihg8uV.js";import"./small-cross-IwpXYFe-.js";import"./ActionButton-C4u-6-5W.js";import"./Checkbox-BAX4065-.js";import"./useValueChanged-CgfaezFM.js";import"./CollapsiblePanel-DkmUI4kJ.js";import"./MultiColumnSortDialog-syXb2cTA.js";import"./MenuTrigger-DIo57WHc.js";import"./CompositeItem-3RLloUvB.js";import"./ToolbarRootContext-BHnzj6Hz.js";import"./getDisabledMountTransitionStyles-BiGSYddH.js";import"./getPseudoElementBounds-GW5dp8q2.js";import"./chevron-down-D_dDeZyS.js";import"./index-CuODewOH.js";import"./error-2pL8Nqzq.js";import"./BaseCbacBanner-BX2R6LPY.js";import"./makeExternalStore-DlRIBm2d.js";import"./Tooltip-DddAZoZH.js";import"./PopoverPopup-BmAbMe-q.js";import"./debounce-D0CZLrXI.js";import"./useOsdkClient-B3Gk2B3w.js";import"./tick-Bj7rJCFA.js";import"./DropdownField-DvwvHNKL.js";import"./isEqual-sLynspCG.js";import"./withOsdkMetrics-DLqBodbC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
