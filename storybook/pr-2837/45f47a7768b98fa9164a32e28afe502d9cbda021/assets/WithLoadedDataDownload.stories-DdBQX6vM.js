import{f as b,j as a,r as i}from"./iframe-DA_4jhIo.js";import{O as u}from"./object-table-CSJ4txk9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D6F9FSIZ.js";import"./Table-DgmDnt-r.js";import"./index-BTHg_M1G.js";import"./Dialog-3XWYlTBy.js";import"./cross-CByxZKRa.js";import"./svgIconContainer-J_lvtdTR.js";import"./useBaseUiId-K0QFAQjB.js";import"./InternalBackdrop-DSb_Z3NR.js";import"./composite-xMjmZTG5.js";import"./index-DNtqp29a.js";import"./index-DqQol2AI.js";import"./index-B-FX1cz4.js";import"./useEventCallback-Bo6CXQIl.js";import"./SkeletonBar-Ce3WikFt.js";import"./LoadingCell-DpKVR0d4.js";import"./ColumnConfigDialog-CKsm1dYW.js";import"./DraggableList-D5OpgL-8.js";import"./Input-DrnqmiMh.js";import"./useControlled-BPddVxgx.js";import"./Button-g0YtIT_5.js";import"./small-cross-Dg47dwv9.js";import"./ActionButton-q5BTdw5V.js";import"./Checkbox-D3LJs9F2.js";import"./minus-Bk6KVfwv.js";import"./useValueChanged-CkaKxI-p.js";import"./caret-down-D3Azw1AT.js";import"./CollapsiblePanel-BHGRF96m.js";import"./MultiColumnSortDialog-YGN5yqjh.js";import"./MenuTrigger-CjsTMDqZ.js";import"./CompositeItem-B4sm-J4F.js";import"./ToolbarRootContext-B6v9w_Sz.js";import"./getDisabledMountTransitionStyles-DwT3PaUy.js";import"./getPseudoElementBounds-BFzVoM1n.js";import"./chevron-down-CB9njjnl.js";import"./index-H0_dl8P2.js";import"./error-pyqmCDE7.js";import"./BaseCbacBanner-BXM2ZEFb.js";import"./makeExternalStore-BeEa2RXQ.js";import"./Tooltip-lShFEXeU.js";import"./PopoverPopup-Djp6578F.js";import"./toNumber-BHoKg2sp.js";import"./useOsdkClient-DierMDfT.js";import"./DropdownField-Nd8VySRY.js";import"./useShape-CoK4tO7v.js";import"./withOsdkMetrics-DKMeLrAC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,we as __namedExportsOrder,ye as default};
