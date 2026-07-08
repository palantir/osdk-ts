import{f as b,j as a,r as i}from"./iframe-nzWsAB7h.js";import{O as u}from"./object-table-CscD9WH9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DK1sUJta.js";import"./index-C62Qnstq.js";import"./Dialog-D-lb7bZH.js";import"./cross-dfhKNnu6.js";import"./svgIconContainer-CDWAsZcw.js";import"./useBaseUiId-CjURCOWJ.js";import"./InternalBackdrop-Di1nErJx.js";import"./composite-1p3cab6M.js";import"./index-Wzzn5B3O.js";import"./index-ButhXHVJ.js";import"./index-BLx_ypIB.js";import"./useEventCallback-DknQVVsv.js";import"./SkeletonBar-CLy2lGHa.js";import"./LoadingCell-CY0gKWnW.js";import"./ColumnConfigDialog-BdqCrJWi.js";import"./DraggableList-R9k6zJYf.js";import"./search-D4mU7Zsy.js";import"./Input-DISJCG28.js";import"./useControlled-GpOQEggi.js";import"./Button-BZS_x_Dk.js";import"./small-cross-DnDYGeWh.js";import"./ActionButton-CF3OWL2p.js";import"./Checkbox-DVzjitBV.js";import"./useValueChanged-BD6_ls13.js";import"./CollapsiblePanel-D2mWeS3u.js";import"./MultiColumnSortDialog-DG8AF0X8.js";import"./MenuTrigger-vZu6KRpi.js";import"./CompositeItem-CSA9IZiB.js";import"./ToolbarRootContext-B9M-jVGp.js";import"./getDisabledMountTransitionStyles-5J4waycB.js";import"./getPseudoElementBounds-Dbv-vv6T.js";import"./chevron-down-DOio5weU.js";import"./index-CQECUmSh.js";import"./error-BpMsbtqe.js";import"./BaseCbacBanner-CnVG4Q1z.js";import"./makeExternalStore-B-xKD1vG.js";import"./Tooltip-Bx_1Z55f.js";import"./PopoverPopup-CgyFH_X8.js";import"./toNumber-DZDClaIv.js";import"./useOsdkClient-DbszVIqC.js";import"./tick-CPQlcOj9.js";import"./DropdownField-D_ld0fVa.js";import"./withOsdkMetrics-Ow8gWUYh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
