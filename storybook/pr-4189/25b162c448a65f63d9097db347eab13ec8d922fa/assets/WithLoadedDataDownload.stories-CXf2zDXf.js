import{f as b,j as a,r as i}from"./iframe-DLMfgjtf.js";import{O as u}from"./object-table-Dsni6D6F.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-FISTic5h.js";import"./Table-4ZhIsqXW.js";import"./index-C1uNoD_P.js";import"./Dialog-De8W04Wb.js";import"./cross-DEP3bJaL.js";import"./svgIconContainer-D9kLSjbx.js";import"./useBaseUiId-CGPqK7A_.js";import"./InternalBackdrop-C7q6nAny.js";import"./composite-Bh8RLzcK.js";import"./index-DvE967r1.js";import"./index-DhmZxaNJ.js";import"./index-CFnzh0go.js";import"./useEventCallback-OFhWUTIn.js";import"./SkeletonBar-Bp5lMfT1.js";import"./LoadingCell-7N2-ipff.js";import"./ColumnConfigDialog-LmX_I7cA.js";import"./DraggableList-BP48mDgf.js";import"./search-DB3dPpwY.js";import"./Input-CGlQdmV9.js";import"./useControlled-Ez2RzIi9.js";import"./Button-BcB4SrWe.js";import"./small-cross-7o4IoMCW.js";import"./ActionButton-CcYUwrwa.js";import"./Checkbox-4Z9hiu_A.js";import"./useValueChanged-Bv09lgLM.js";import"./CollapsiblePanel-CvB7QNB1.js";import"./MultiColumnSortDialog-D6yrXySv.js";import"./MenuTrigger-CWBl4LeS.js";import"./CompositeItem-BPE6MZwc.js";import"./ToolbarRootContext-CaevGzPm.js";import"./getDisabledMountTransitionStyles-_aaTD8lp.js";import"./getPseudoElementBounds-DkTsw7BA.js";import"./chevron-down-Cl75LzTR.js";import"./index-CCyxZzXK.js";import"./error-CgJf6mJC.js";import"./BaseCbacBanner-C1NzFhgF.js";import"./makeExternalStore-Cjl19IuZ.js";import"./Tooltip-C08-8DFh.js";import"./PopoverPopup-klUplfQO.js";import"./debounce-BYUquqzk.js";import"./useOsdkClient-D7npx1Qd.js";import"./tick-CGKINZ-e.js";import"./DropdownField-B8372XYt.js";import"./isEqual-CYCRDCH8.js";import"./withOsdkMetrics-C4pScUTY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
