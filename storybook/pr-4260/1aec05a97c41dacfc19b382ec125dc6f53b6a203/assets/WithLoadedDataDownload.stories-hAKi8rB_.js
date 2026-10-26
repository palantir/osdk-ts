import{f as b,j as a,r as i}from"./iframe-DQPhK9GU.js";import{O as u}from"./object-table-u1t353el.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BexD08qU.js";import"./Table-D0VrqxVa.js";import"./index-D7bWxKkV.js";import"./Dialog-DYMU0A_Q.js";import"./cross-Bz5ncAg7.js";import"./svgIconContainer-C-2S33jf.js";import"./useBaseUiId-BcnbbCrD.js";import"./InternalBackdrop-3e5_1pLw.js";import"./composite-D8rz_NRd.js";import"./index-COKR49Jt.js";import"./index-nU_uKQML.js";import"./index-BPuMxoe3.js";import"./useEventCallback-Ak9Y6Sg_.js";import"./SkeletonBar-BQMpvI0c.js";import"./LoadingCell-Q2SMPZFJ.js";import"./ColumnConfigDialog-BTMr9kD8.js";import"./DraggableList-D7WIyWaj.js";import"./search-DEKkH3rw.js";import"./Input-C-_mqWVh.js";import"./useControlled-wY0jaWl-.js";import"./Button-BMvHZDY9.js";import"./small-cross-DF-5DtWu.js";import"./ActionButton-DIbN-5yx.js";import"./Checkbox-DZ0ffxz9.js";import"./useValueChanged-D8JCzrrE.js";import"./CollapsiblePanel-CP7h0CHU.js";import"./MultiColumnSortDialog-C76o3UFs.js";import"./MenuTrigger-BD_E06dV.js";import"./CompositeItem-D17QBVCs.js";import"./ToolbarRootContext-DUYvPpGK.js";import"./getDisabledMountTransitionStyles-CPz_8zQf.js";import"./getPseudoElementBounds-DNc_fjpY.js";import"./chevron-down-CEtDqD55.js";import"./index-ueYSc4xO.js";import"./error-CMvmkLKQ.js";import"./BaseCbacBanner-BC4eJkdb.js";import"./makeExternalStore-BK4AXna6.js";import"./Tooltip-DCFHObTT.js";import"./PopoverPopup-BMwOXxZm.js";import"./debounce-BzHe_40F.js";import"./useOsdkClient-Ddu_dn5L.js";import"./tick-Dknq3fKL.js";import"./DropdownField-CW3rWXJa.js";import"./isEqual-BK6H-Cg9.js";import"./withOsdkMetrics-BToX27Ix.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
