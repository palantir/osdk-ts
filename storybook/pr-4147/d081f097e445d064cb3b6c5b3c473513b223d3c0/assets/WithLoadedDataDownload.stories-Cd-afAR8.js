import{f as b,j as a,r as i}from"./iframe-DYAom9bR.js";import{O as u}from"./object-table-Dc6CFDmu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-wH_b8k-5.js";import"./Table-26gDJzq2.js";import"./index-BDzI0DMF.js";import"./Dialog-CipKDG2b.js";import"./cross-C34zCmWz.js";import"./svgIconContainer-DlXjEWqk.js";import"./useBaseUiId-CEx3sHln.js";import"./InternalBackdrop-oAf4IP9a.js";import"./composite-BeIl570u.js";import"./index-6FSLs8PI.js";import"./index-CrUWvWSh.js";import"./index-CZVh1_T-.js";import"./useEventCallback-BU8ZD1u4.js";import"./SkeletonBar-wGn5kuO-.js";import"./LoadingCell-B0xvYzrR.js";import"./ColumnConfigDialog-BKNhCeCG.js";import"./DraggableList-la_3EMaN.js";import"./search-V7G9cPkI.js";import"./Input-OPGRVn8-.js";import"./useControlled-BCisCwEt.js";import"./Button-B95fuG8U.js";import"./small-cross-04PkP_DP.js";import"./ActionButton-Bf-Y4ACZ.js";import"./Checkbox-Di9zOXok.js";import"./useValueChanged-xixZlyWk.js";import"./CollapsiblePanel-D42XvXp9.js";import"./MultiColumnSortDialog-C3q2uSOk.js";import"./MenuTrigger-USgYIamM.js";import"./CompositeItem-fVngu3j_.js";import"./ToolbarRootContext-a__5SMe8.js";import"./getDisabledMountTransitionStyles-BrF1CFns.js";import"./getPseudoElementBounds-DoxjXqlD.js";import"./chevron-down-QO6dVwDP.js";import"./index-PnC5M3uF.js";import"./error-CX6Detdp.js";import"./BaseCbacBanner-uJgtnHA4.js";import"./makeExternalStore-CS6veLxB.js";import"./Tooltip-CXruGX6E.js";import"./PopoverPopup-DKy48gOt.js";import"./debounce-BiwqmQhi.js";import"./useOsdkClient-7x4bV1DV.js";import"./tick-Be40iFM6.js";import"./DropdownField-C1ueVugc.js";import"./isEqual-xgW26ERh.js";import"./withOsdkMetrics-BPYPoSmq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
