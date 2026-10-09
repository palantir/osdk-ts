import{f as b,j as a,r as i}from"./iframe-BJzVVo3C.js";import{O as u}from"./object-table-iloeXTiv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BGo6yCWR.js";import"./Table-Q7vMfUTJ.js";import"./index-jYeXRVJt.js";import"./Dialog-Cat5-d5T.js";import"./cross-BODoIHG7.js";import"./svgIconContainer-BafRnCSe.js";import"./useBaseUiId-aWvq-Ojy.js";import"./InternalBackdrop-LaTt__SN.js";import"./composite-DVXx00LN.js";import"./index-Cu3TSrS7.js";import"./index-DY-H4zuh.js";import"./index-CGlZ0CTP.js";import"./useEventCallback-CPVPsHDE.js";import"./SkeletonBar-CmmIOnV3.js";import"./LoadingCell-u13Tws5Z.js";import"./ColumnConfigDialog-DzZb_NDG.js";import"./DraggableList-BnBPKCgQ.js";import"./search-CNzRQSLi.js";import"./Input-D8VZz3qg.js";import"./useControlled-BU_ZAQ-v.js";import"./Button-CtA29Am0.js";import"./small-cross-CIrD0bDh.js";import"./ActionButton-DNcn8P02.js";import"./Checkbox-D7r-WuhL.js";import"./useValueChanged-CnANt21_.js";import"./CollapsiblePanel-BbVSWDIY.js";import"./MultiColumnSortDialog-bPERNjQE.js";import"./MenuTrigger-C0sRySoL.js";import"./CompositeItem-UocH3YCc.js";import"./ToolbarRootContext-BS8U1N_y.js";import"./getDisabledMountTransitionStyles-DruUCqOL.js";import"./getPseudoElementBounds-BuOaNQX4.js";import"./chevron-down-GN6eodao.js";import"./index-C038wilx.js";import"./error-B0Rx4D9Q.js";import"./BaseCbacBanner--Vy8vTm4.js";import"./makeExternalStore-c77j8ZZC.js";import"./Tooltip-DwG0NqTz.js";import"./PopoverPopup-CbiEHiO_.js";import"./debounce-DqxAIWi9.js";import"./useOsdkClient-C7mnWl4M.js";import"./tick-C1AZecKl.js";import"./DropdownField-C9P6RcpY.js";import"./isEqual-DffZPRyo.js";import"./withOsdkMetrics-BD3BFsPk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
