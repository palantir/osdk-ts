import{f as b,j as a,r as i}from"./iframe-D55M5wci.js";import{O as u}from"./object-table-CxEh1iqI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C18qDopu.js";import"./Table-B_XafodX.js";import"./index-5AuowcZ1.js";import"./Dialog-B0jlQiPG.js";import"./cross-GBYBmKJt.js";import"./svgIconContainer-B1N7UlgV.js";import"./useBaseUiId-Dqp7OPFO.js";import"./InternalBackdrop-BBj86GRX.js";import"./composite-BVZ68ZGS.js";import"./index-DL7HOTWE.js";import"./index-CXQfZiCl.js";import"./index-C4nan5U7.js";import"./useEventCallback-BvloLB_Z.js";import"./SkeletonBar-KK7ZFNRh.js";import"./LoadingCell-DWY0GQQG.js";import"./ColumnConfigDialog-BhhvDrV7.js";import"./DraggableList-BmmHq7Pw.js";import"./search-D5wvQIfI.js";import"./Input-pfVHnHW4.js";import"./useControlled-DK45zpKp.js";import"./Button-BL1B-X-6.js";import"./small-cross-htdWViEx.js";import"./ActionButton-pdY0b2q_.js";import"./Checkbox-BuW1icFv.js";import"./useValueChanged-CIMNYAxz.js";import"./CollapsiblePanel-DepV_pmd.js";import"./MultiColumnSortDialog-_bvPU7iC.js";import"./MenuTrigger-z_9dG_ji.js";import"./CompositeItem-BHvqg_WK.js";import"./ToolbarRootContext--3075s1k.js";import"./getDisabledMountTransitionStyles-DyUhMSPq.js";import"./getPseudoElementBounds-FNQGtSTP.js";import"./chevron-down-Dx2WazF2.js";import"./index-CdMghF7-.js";import"./error-MuIb47bq.js";import"./BaseCbacBanner-bM8n6vhV.js";import"./makeExternalStore-BDflhLO9.js";import"./Tooltip-NQvi7YyC.js";import"./PopoverPopup-EBKkzcQ2.js";import"./toNumber-cHXXE-Rm.js";import"./useOsdkClient-CMIt1WEZ.js";import"./tick-BSbHeHMA.js";import"./DropdownField-Lw-OYerM.js";import"./withOsdkMetrics-DaytlST7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
