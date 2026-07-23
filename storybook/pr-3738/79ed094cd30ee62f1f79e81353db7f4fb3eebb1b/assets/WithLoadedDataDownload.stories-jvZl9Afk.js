import{f as b,j as a,r as i}from"./iframe-BxrPZaNO.js";import{O as u}from"./object-table-x_M-xICi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cx3YQJHu.js";import"./Table-BmoqWH96.js";import"./index-J6lGX-m2.js";import"./Dialog-RbvnsOmy.js";import"./cross-BmUQIuiH.js";import"./svgIconContainer-BEnRdrAB.js";import"./useBaseUiId-Di1mefXN.js";import"./InternalBackdrop-D4XZcSF_.js";import"./composite-DfF43hpZ.js";import"./index-D_nzKAep.js";import"./index-BCG6silL.js";import"./index-Ot472uRJ.js";import"./useEventCallback-CrPdpknM.js";import"./SkeletonBar-BUlCSkf0.js";import"./LoadingCell-C-YiETW-.js";import"./ColumnConfigDialog-VEP7O-ZA.js";import"./DraggableList-DVT8VoXV.js";import"./search-CfnXtNGj.js";import"./Input-BGI14JLq.js";import"./useControlled-BtpDwHUZ.js";import"./isEqual-DBEr3yIs.js";import"./isObject-ByG7RK6C.js";import"./Button-B7x6CZke.js";import"./ActionButton-BWhtJHeB.js";import"./Checkbox-CrjH7Efp.js";import"./useValueChanged-DCfT8qbt.js";import"./CollapsiblePanel-BFETjxaU.js";import"./MultiColumnSortDialog-B9G5hIec.js";import"./MenuTrigger-B5P8IXx7.js";import"./CompositeItem-DTxAmhYK.js";import"./ToolbarRootContext-Bqz8S5Yi.js";import"./getDisabledMountTransitionStyles-BjZgcrwj.js";import"./getPseudoElementBounds-Bbwc-RQ9.js";import"./chevron-down-Be0JtK3U.js";import"./index-Cp78tmdM.js";import"./error-ChOD6vLs.js";import"./BaseCbacBanner-CgoxDGzA.js";import"./makeExternalStore-9Fofboy5.js";import"./Tooltip-DNoJovMa.js";import"./PopoverPopup-Bg6BFVuU.js";import"./toNumber-CN-X1Wq4.js";import"./useOsdkClient-D4yGb6wb.js";import"./tick-CyYxxVPP.js";import"./DropdownField-Cqh4Clp4.js";import"./withOsdkMetrics-D9tI6rXs.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
