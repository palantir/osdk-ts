import{f as b,j as a,r as i}from"./iframe-m2fxxn3a.js";import{O as u}from"./object-table-Co-Q6jHl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-wkPSwmAr.js";import"./Table-CJbVUNcD.js";import"./index-ByBw6x6u.js";import"./Dialog-CHI7KPwp.js";import"./cross-BjXIqjCw.js";import"./svgIconContainer-DSI33hOY.js";import"./useBaseUiId-DUlaUAbC.js";import"./InternalBackdrop-6ROzrmGv.js";import"./composite-BrA88D7Q.js";import"./index-DSw-eeDJ.js";import"./index-D_9lQBmv.js";import"./index-BNBfbysQ.js";import"./useEventCallback-B49kAxyt.js";import"./SkeletonBar-DSTs_14a.js";import"./LoadingCell-BZScBSiV.js";import"./ColumnConfigDialog-CaiccqAZ.js";import"./DraggableList-AYblD6NO.js";import"./search-CdVtB6NL.js";import"./Input-D0L01xSu.js";import"./useControlled-B65cfgNR.js";import"./Button-DeKiGiVH.js";import"./small-cross-BQdIyLz0.js";import"./ActionButton-Mjq4BYrm.js";import"./Checkbox-DicxMHcf.js";import"./useValueChanged-Bp4t2mo-.js";import"./CollapsiblePanel-BLUOZyAb.js";import"./MultiColumnSortDialog-DruHNqzX.js";import"./MenuTrigger-qcf8JcB3.js";import"./CompositeItem-CV8z8cEs.js";import"./ToolbarRootContext-CrhCu0KJ.js";import"./getDisabledMountTransitionStyles-qUK7fg53.js";import"./getPseudoElementBounds-CwvcssCs.js";import"./chevron-down-CsrzPGt_.js";import"./index-CyxliH8w.js";import"./error-E41DUfY_.js";import"./BaseCbacBanner-BK8GeR-x.js";import"./makeExternalStore-CtrMLH82.js";import"./Tooltip-DmuQYm1m.js";import"./PopoverPopup-wwpAfRbw.js";import"./debounce-D8Y2PRcP.js";import"./useOsdkClient-CVjbyjiN.js";import"./tick-Mt7tAvfN.js";import"./DropdownField-BsPjmbhu.js";import"./isEqual-BtYEUQSq.js";import"./withOsdkMetrics-6b_qk_af.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
