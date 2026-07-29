import{f as b,j as a,r as i}from"./iframe-gNe9ReqN.js";import{O as u}from"./object-table-CLGrOJn7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BWzPsQJa.js";import"./Table-DbNydAJH.js";import"./index-DEY9Rjmf.js";import"./Dialog-DFaOMfz7.js";import"./cross-CjeCVve4.js";import"./svgIconContainer-QgcOta_8.js";import"./useBaseUiId-BAIfk5kV.js";import"./InternalBackdrop-CAZWagDR.js";import"./composite-DMVB6Olt.js";import"./index-BFRTdDwg.js";import"./index-DmajPU2-.js";import"./index-CYEQrn89.js";import"./useEventCallback-B0HM2CXq.js";import"./SkeletonBar-CYewB1Rd.js";import"./LoadingCell-D01HyjNA.js";import"./ColumnConfigDialog-DFIuCx3e.js";import"./DraggableList-Kpd_DNHJ.js";import"./search-mXj_8Ppd.js";import"./Input-CiGjYClw.js";import"./useControlled-B2IaLJKX.js";import"./Button-CHvqhQPU.js";import"./small-cross-BM9PWxzD.js";import"./ActionButton-Bb2hxfNj.js";import"./Checkbox-DzcQhc-0.js";import"./minus-DzeLGnSh.js";import"./tick-VVxW-4zS.js";import"./useValueChanged-C4UFJLNJ.js";import"./caret-down-CQkem9FY.js";import"./CollapsiblePanel-C0nUuJvJ.js";import"./MultiColumnSortDialog-B1WKnpTi.js";import"./MenuTrigger-DDdcEjzN.js";import"./CompositeItem-Cqp-Y5zN.js";import"./ToolbarRootContext-C7KD-nph.js";import"./getDisabledMountTransitionStyles-BCht8du3.js";import"./getPseudoElementBounds-B4vZvIIJ.js";import"./chevron-down-DwWur41J.js";import"./index-twtYLQD-.js";import"./error-Tk0QOVDp.js";import"./BaseCbacBanner-DhCf-Z8c.js";import"./makeExternalStore-DWmdl9O1.js";import"./Tooltip-BgQD0rV6.js";import"./PopoverPopup-CRAUo5cx.js";import"./toNumber-BeadpN6X.js";import"./useOsdkClient-DPUNkdKy.js";import"./DropdownField-w3TliArO.js";import"./withOsdkMetrics-D-wp4kSJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
