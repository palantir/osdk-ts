import{f as b,j as a,r as i}from"./iframe-CRZjd_wK.js";import{O as u}from"./object-table-BX0VFaB5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-g7EjKyGs.js";import"./Table-B_JHeGDa.js";import"./index-DIm3kFay.js";import"./Dialog-BjM805Xt.js";import"./cross-BmtPWYvy.js";import"./svgIconContainer-JVD8PsJ2.js";import"./useBaseUiId-DRDRKeIW.js";import"./InternalBackdrop-bYsLYojc.js";import"./composite-DPEAXIJl.js";import"./index-BQJ2olD1.js";import"./index-DLUJQgli.js";import"./index-Cn6z1dl5.js";import"./useEventCallback-1TQGWOiJ.js";import"./SkeletonBar-3hDLlTdS.js";import"./LoadingCell-DQDpqzvm.js";import"./ColumnConfigDialog-2u3KKTnY.js";import"./DraggableList-B0iEeev5.js";import"./search-Dk6PpOs4.js";import"./Input-DabpMDer.js";import"./useControlled-Diz88oBw.js";import"./Button-CoeT5dYf.js";import"./small-cross-Cdt6bMDh.js";import"./ActionButton-z0DOa-na.js";import"./Checkbox-z1LYKVIn.js";import"./minus-C8rYlcj-.js";import"./tick-CyzKu7cJ.js";import"./useValueChanged-D12rhLyT.js";import"./caret-down-BYeCOAJh.js";import"./CollapsiblePanel-DWou65QT.js";import"./MultiColumnSortDialog-Sd1g6Scg.js";import"./MenuTrigger-DuQIEYI1.js";import"./CompositeItem-81Vi6zKM.js";import"./ToolbarRootContext-K2YYrXnR.js";import"./getDisabledMountTransitionStyles-DRolBh5K.js";import"./getPseudoElementBounds-Dopvs4p_.js";import"./chevron-down-Cc92ou7D.js";import"./index-BVm8JfJv.js";import"./error-CXgL35Qb.js";import"./BaseCbacBanner-D8bQv1xY.js";import"./makeExternalStore-CjXQtrKi.js";import"./Tooltip-CkH3ttjO.js";import"./PopoverPopup-m-zP7m5_.js";import"./toNumber-jlqpaXJ6.js";import"./useOsdkClient-DeLwXY7y.js";import"./DropdownField-DlM30DHR.js";import"./withOsdkMetrics-CX-vMa76.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
