import{f as b,j as a,r as i}from"./iframe-YaS06hyW.js";import{O as u}from"./object-table-NgK91Za2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CHXu7ylM.js";import"./Table-D0b8j1nn.js";import"./index-B-cO8d-Q.js";import"./Dialog-Dcm8USw5.js";import"./cross-AobcYagI.js";import"./svgIconContainer-DLa4OU0n.js";import"./useBaseUiId-CjvUa8cY.js";import"./InternalBackdrop-BO6eEqaF.js";import"./composite-BkFZzr2I.js";import"./index-DbqTfLlX.js";import"./index-DXr_DK2g.js";import"./index-De5BIU9t.js";import"./useEventCallback-Ddj36AAG.js";import"./SkeletonBar-DHk9E0H4.js";import"./LoadingCell-BoH9snOA.js";import"./ColumnConfigDialog-BZWPvfbS.js";import"./DraggableList-C8mYRZZv.js";import"./search-DaYARQRb.js";import"./Input-Dql0qM-e.js";import"./useControlled-Bm5M3oKq.js";import"./Button-BEru0DpJ.js";import"./small-cross-sr4-rTD5.js";import"./ActionButton-BLeOA9QJ.js";import"./Checkbox-D4nrSXTe.js";import"./useValueChanged-2sKWWR-R.js";import"./CollapsiblePanel-DoSREVMI.js";import"./MultiColumnSortDialog-BJjtuXpU.js";import"./MenuTrigger-DR1I2fHJ.js";import"./CompositeItem-ClG1U4EV.js";import"./ToolbarRootContext-D-k46Imi.js";import"./getDisabledMountTransitionStyles-DDMdB6wz.js";import"./getPseudoElementBounds-CWoE1MIM.js";import"./chevron-down-CxKB5IcW.js";import"./index-D6PE6Ffo.js";import"./error-irND_epE.js";import"./BaseCbacBanner-CBshacCO.js";import"./makeExternalStore-Cqyecvoe.js";import"./Tooltip-Dp5Fjj_b.js";import"./PopoverPopup-BOYvum7T.js";import"./debounce-B7ZPV7rx.js";import"./useOsdkClient-BQhZ6hRm.js";import"./tick-BJJckPUf.js";import"./DropdownField-Do5PO4eK.js";import"./isEqual-CRxLbnY5.js";import"./withOsdkMetrics-8M4HiVCC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
