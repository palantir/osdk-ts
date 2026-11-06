import{f as b,j as a,r as i}from"./iframe-BTbJEw_E.js";import{O as u}from"./object-table-dQhHxSap.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-aCGplSKY.js";import"./Table-D8IIQ0uD.js";import"./index-DWkrnykr.js";import"./Dialog-CCqAz4sd.js";import"./cross-AwvJd_Ud.js";import"./svgIconContainer-DggOleom.js";import"./useBaseUiId-lBVa_0WJ.js";import"./InternalBackdrop-Ckm1dtBk.js";import"./composite-B7RMGscZ.js";import"./index-DdrvFQuO.js";import"./index-18NAXc1Y.js";import"./index-AGrLxoIE.js";import"./useEventCallback-C5SBM2zO.js";import"./SkeletonBar-CvQ0kAkc.js";import"./LoadingCell-BeHh6Q1T.js";import"./ColumnConfigDialog-t8KafiPd.js";import"./DraggableList-CtRf-2Cd.js";import"./search-DBgBL-mB.js";import"./Input-C3RqpoyV.js";import"./useControlled-B9izrDgZ.js";import"./Button-vTo8rp-4.js";import"./small-cross-DGcKzG3K.js";import"./ActionButton-BWBnELV1.js";import"./Checkbox-BGoGAkIi.js";import"./useValueChanged-BSAVVzsI.js";import"./CollapsiblePanel-Cweq_HxM.js";import"./MultiColumnSortDialog-CsM2lET6.js";import"./MenuTrigger-D-L8fP0j.js";import"./CompositeItem-BnF_A8n_.js";import"./ToolbarRootContext-BJqUIRif.js";import"./getDisabledMountTransitionStyles-xzPhtnb4.js";import"./getPseudoElementBounds-BFGsCRAr.js";import"./chevron-down-CXkrXU2j.js";import"./index-YcO7uA7L.js";import"./error-wWqS_WOM.js";import"./BaseCbacBanner-DiwiC2U6.js";import"./makeExternalStore-Cj_xL18b.js";import"./Tooltip-CZNUyLi_.js";import"./isObject-1bmMeuQz.js";import"./debounce-B6qaA1VO.js";import"./useOsdkClient-CpDEON-O.js";import"./tick-iJfDowrv.js";import"./DropdownField-BGUtXP7T.js";import"./isEqual-Dg8F-44E.js";import"./_baseIsEqual-C5YFc0w8.js";import"./withOsdkMetrics-eBRijj-i.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
