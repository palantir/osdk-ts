import{f as b,j as a,r as i}from"./iframe-BDDoLmha.js";import{O as u}from"./object-table-2yRUv6qF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-K0OfJO3R.js";import"./index-BC_PGuPP.js";import"./Dialog-gwuqGGaN.js";import"./cross-ClU8WQkB.js";import"./svgIconContainer-kcsw0qZe.js";import"./useBaseUiId-C1stYciJ.js";import"./InternalBackdrop-CWUREPli.js";import"./composite-WWEtFGhY.js";import"./index-CM61V-po.js";import"./index-CGMmpBla.js";import"./index-BbA7qa9Y.js";import"./useEventCallback-BtupRWq2.js";import"./SkeletonBar-NetKSX_e.js";import"./LoadingCell-CjPDh30i.js";import"./ColumnConfigDialog-1vAQl0VU.js";import"./DraggableList-CzG4oHkI.js";import"./search-uNkqFKpB.js";import"./Input-DyN46OQh.js";import"./useControlled-fTso5J1v.js";import"./isEqual-CErs2inq.js";import"./isObject-sZPGKgw1.js";import"./Button-B67G3YaJ.js";import"./ActionButton-NuwYmZnN.js";import"./Checkbox-BmWceX2x.js";import"./useValueChanged-CBq2J-5X.js";import"./CollapsiblePanel-Dxlx4FPs.js";import"./MultiColumnSortDialog-iT-SnFfx.js";import"./MenuTrigger-DYdDZozm.js";import"./CompositeItem-C_P6sqif.js";import"./ToolbarRootContext-D9qFS7IX.js";import"./getDisabledMountTransitionStyles-BNss76gt.js";import"./getPseudoElementBounds-BZu2QF5b.js";import"./chevron-down-WvOrsc4J.js";import"./index-TFGv77Bk.js";import"./error-j5R04zP-.js";import"./BaseCbacBanner-D2UDGy-N.js";import"./makeExternalStore-DH38KA5d.js";import"./Tooltip-C5sQiB80.js";import"./PopoverPopup-CduQ6_Jd.js";import"./toNumber-BEnQy_jU.js";import"./useOsdkClient-CoksKf5J.js";import"./tick-CQFhnFcH.js";import"./DropdownField-XKEdn78n.js";import"./withOsdkMetrics-Beir_CMD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
