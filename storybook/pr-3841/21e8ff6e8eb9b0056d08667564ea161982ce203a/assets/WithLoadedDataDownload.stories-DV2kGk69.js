import{f as b,j as a,r as i}from"./iframe-CPDW-PQM.js";import{O as u}from"./object-table-DTqjU_D_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DLPPZvQy.js";import"./Table-BUuLX7nP.js";import"./index-BD9zYiqo.js";import"./Dialog-DDyKfg5y.js";import"./cross-DR7gxXwq.js";import"./svgIconContainer-C7wqaI1B.js";import"./useBaseUiId-B5I3_RDX.js";import"./InternalBackdrop-DdjQtzae.js";import"./composite-p-h0KAPd.js";import"./index-fIzLT5CY.js";import"./index-BTWFHyEC.js";import"./index-B7g8W8Zp.js";import"./useEventCallback-CD0AM3jl.js";import"./SkeletonBar-CXBL3BvT.js";import"./LoadingCell-CjHZr7dQ.js";import"./ColumnConfigDialog-BIYXL1ew.js";import"./DraggableList-ChfPDfFa.js";import"./search-BZvDdvYt.js";import"./Input-CD_gqaHO.js";import"./useControlled-i4DTbWgc.js";import"./Button-CRJqCk8i.js";import"./small-cross-CSCn7V4Z.js";import"./ActionButton-J4pZ9dww.js";import"./Checkbox-Cq2SeKPb.js";import"./useValueChanged-f6yxC0pT.js";import"./CollapsiblePanel-CoH06yjt.js";import"./MultiColumnSortDialog-BGYn-b00.js";import"./MenuTrigger-ChgVJvO_.js";import"./CompositeItem-BKuiG4wu.js";import"./ToolbarRootContext-OaLx1XI9.js";import"./getDisabledMountTransitionStyles-Dto8xlJk.js";import"./getPseudoElementBounds-Dfn0jdGk.js";import"./chevron-down-BhbuOWem.js";import"./index-DF93-j-r.js";import"./error-BojBsd96.js";import"./BaseCbacBanner-BvfEUDY_.js";import"./makeExternalStore-EbQWCuwR.js";import"./Tooltip-B-fohL4X.js";import"./PopoverPopup-BdxYHBaz.js";import"./debounce-XSxzF9O8.js";import"./useOsdkClient-i81o04a7.js";import"./tick-BD10YuUL.js";import"./DropdownField-DJ9z17_O.js";import"./isEqual-CousIfvQ.js";import"./withOsdkMetrics-BSyWaS_D.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
