import{f as b,j as a,r as i}from"./iframe-BX2djs1n.js";import{O as u}from"./object-table-D9E48Bl7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-hVm1bQeY.js";import"./Table-Di1QA_LY.js";import"./index-B9jmPLST.js";import"./Dialog-Cu8Q7yUP.js";import"./cross-CW7i9eUS.js";import"./svgIconContainer-DQabYsmJ.js";import"./useBaseUiId-BWPkie-N.js";import"./InternalBackdrop-CClJArh8.js";import"./composite-DyJ2axhs.js";import"./index-Veb86PcG.js";import"./index-BjGEWd6s.js";import"./index-DK3OLPU0.js";import"./useEventCallback-Br_DPj0e.js";import"./SkeletonBar-CCTQ8t8m.js";import"./LoadingCell-BZzn-Lhe.js";import"./ColumnConfigDialog-CD6IjvD3.js";import"./DraggableList-DxAhuj6U.js";import"./search-XN3WBCJt.js";import"./Input-5JT_Fa9T.js";import"./useControlled-BSC0C-xX.js";import"./Button-CHDLG2_C.js";import"./small-cross-4WH95PZm.js";import"./ActionButton-CFjW8YMs.js";import"./Checkbox-BrI5HDqK.js";import"./useValueChanged-cpr9LWfI.js";import"./CollapsiblePanel-CgUW_La_.js";import"./MultiColumnSortDialog-CcyLyp4K.js";import"./MenuTrigger-B1ibprGJ.js";import"./CompositeItem-DgYN0Pe2.js";import"./ToolbarRootContext-ntjKxxJl.js";import"./getDisabledMountTransitionStyles-CdiiF55E.js";import"./getPseudoElementBounds-4AftQeRM.js";import"./chevron-down-B5T3s_bk.js";import"./index-B-r10tKF.js";import"./error-A3g6IGlp.js";import"./BaseCbacBanner-CQXz5kun.js";import"./makeExternalStore-C-3siswC.js";import"./Tooltip-Cd8ot6bh.js";import"./PopoverPopup-NOBKhAHC.js";import"./toNumber-BVi18079.js";import"./useOsdkClient-Dok-Kz_s.js";import"./tick-DKrL_lYR.js";import"./DropdownField-po0UMaym.js";import"./withOsdkMetrics-DLJus_Y-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
