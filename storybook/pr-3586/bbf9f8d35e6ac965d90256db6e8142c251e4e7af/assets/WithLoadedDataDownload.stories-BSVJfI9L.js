import{f as b,j as a,r as i}from"./iframe-BTpszS53.js";import{O as u}from"./object-table-DQfpVLCz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CRTbrDhO.js";import"./Table-CwW1JFvr.js";import"./index-BIsE3t29.js";import"./Dialog-CpCL07MG.js";import"./cross-BQQjHalP.js";import"./svgIconContainer-DXWLnkhb.js";import"./useBaseUiId-BEw1-y8h.js";import"./InternalBackdrop-DCIgozmh.js";import"./composite-EBIrspWf.js";import"./index-BsYMxwKt.js";import"./index-CXoIhRzc.js";import"./index-BCJmm5Oi.js";import"./useEventCallback-nHnKbpFt.js";import"./SkeletonBar-CFyJz-4w.js";import"./LoadingCell-DCfCGFkr.js";import"./ColumnConfigDialog-BtKSJOsG.js";import"./DraggableList-BYoannka.js";import"./search-JvE6N6pf.js";import"./Input-XT6bJMFf.js";import"./useControlled-DJMITrum.js";import"./Button-yM41p_Kk.js";import"./small-cross-DvkK_wXO.js";import"./ActionButton-aqSvLYac.js";import"./Checkbox-D2pwoodQ.js";import"./minus-ZAZxSLvd.js";import"./tick-Co4R0HiQ.js";import"./useValueChanged-DCIOaG6b.js";import"./caret-down-CM2RPzlS.js";import"./CollapsiblePanel-gbYK33EM.js";import"./MultiColumnSortDialog-Cx_WG3MZ.js";import"./MenuTrigger-Ds9Vrphx.js";import"./CompositeItem-BzAu2XOR.js";import"./ToolbarRootContext-ZHVQx8pV.js";import"./getDisabledMountTransitionStyles-fmTrqLPo.js";import"./getPseudoElementBounds-d1g8lNrw.js";import"./chevron-down-Do4MMpyh.js";import"./index-CWbRLDGn.js";import"./error-DEpU8fF0.js";import"./BaseCbacBanner-CVfAO6Eh.js";import"./makeExternalStore-CuR10-39.js";import"./Tooltip-Dq0tboy7.js";import"./PopoverPopup-UIQCIWK4.js";import"./toNumber-CZUv9eKG.js";import"./useOsdkClient-BZ8eAnjD.js";import"./DropdownField-u1BxGBIi.js";import"./withOsdkMetrics-CtenB4I0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
