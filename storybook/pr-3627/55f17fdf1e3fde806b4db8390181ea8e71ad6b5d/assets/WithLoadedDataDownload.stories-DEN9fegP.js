import{f as b,j as a,r as i}from"./iframe-CuK7zOMI.js";import{O as u}from"./object-table-BLzWJZjN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-P9V_DKNy.js";import"./Table-VF3FothX.js";import"./index-CnBZRbmI.js";import"./Dialog-C1BZYIHA.js";import"./cross-OS5Mk4Tx.js";import"./svgIconContainer-kSKNmQCk.js";import"./useBaseUiId-CXcuh5Mz.js";import"./InternalBackdrop-DGoM1UIh.js";import"./composite-Da-63znj.js";import"./index-DkYI9Dyb.js";import"./index-6dfOaeSG.js";import"./index-KUJAx-SL.js";import"./useEventCallback-Duych5DG.js";import"./SkeletonBar-ClVa462v.js";import"./LoadingCell-Cp65mqLp.js";import"./ColumnConfigDialog-BvIHS7o8.js";import"./DraggableList-D-b12pA0.js";import"./search-BrfJMiza.js";import"./Input-BaS-MecW.js";import"./useControlled-DBgWtr8v.js";import"./Button-DuZQUlnH.js";import"./small-cross-gtKzlEdY.js";import"./ActionButton-CeSTL8s7.js";import"./Checkbox-DTWC6Xy_.js";import"./useValueChanged-BQG6q7HJ.js";import"./CollapsiblePanel-1HNc67EX.js";import"./MultiColumnSortDialog-Bs5JPww7.js";import"./MenuTrigger-CaZJ74_J.js";import"./CompositeItem-D0mCMpid.js";import"./ToolbarRootContext-E8zMlUui.js";import"./getDisabledMountTransitionStyles-46BW6682.js";import"./getPseudoElementBounds-FtYloNUE.js";import"./chevron-down-BQEzPkWb.js";import"./index-TU3WdDzH.js";import"./error-I0gxPKgJ.js";import"./BaseCbacBanner-BGYOYjr3.js";import"./makeExternalStore-Dz28jKub.js";import"./Tooltip-C30OLI6K.js";import"./PopoverPopup-B8vHxKIz.js";import"./toNumber-DqlS6uOX.js";import"./useOsdkClient-ByBrlZIo.js";import"./tick-BycIOQYJ.js";import"./DropdownField-B7GzdHgx.js";import"./withOsdkMetrics-Dd2CKxXY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
