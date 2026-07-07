import{f as b,j as a,r as i}from"./iframe-awsZ7j26.js";import{O as u}from"./object-table-BrFHZzen.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C31Oofbf.js";import"./Table-sRDJBXsw.js";import"./index-BDgD4bs2.js";import"./Dialog-B5Z7Dgzz.js";import"./cross-EBBS3MG8.js";import"./svgIconContainer-BAAbCsQC.js";import"./useBaseUiId-CgonoKnK.js";import"./InternalBackdrop-CLYaKWm3.js";import"./composite-CSiPE20u.js";import"./index-DEu9X8Hu.js";import"./index-ZCe7kmTE.js";import"./index-tXI39jOV.js";import"./useEventCallback-CpZxy_W7.js";import"./SkeletonBar-B5mlMqe7.js";import"./LoadingCell-D50gQGLi.js";import"./ColumnConfigDialog-CNxnzfPe.js";import"./DraggableList-DG27oqBV.js";import"./search-DChalUEi.js";import"./Input-_ntxGUu6.js";import"./useControlled-BI5xpB4b.js";import"./Button-UFiaVGXl.js";import"./small-cross-4Jcp1N9p.js";import"./ActionButton-DxTqG0FD.js";import"./Checkbox-Bm0WvgM2.js";import"./useValueChanged-CQARB578.js";import"./CollapsiblePanel-DCXArSEX.js";import"./MultiColumnSortDialog--yyoAUaq.js";import"./MenuTrigger-DUDdL3e5.js";import"./CompositeItem-BGM-5pfK.js";import"./ToolbarRootContext-CZvk9_-f.js";import"./getDisabledMountTransitionStyles-Dw0Ouyrt.js";import"./getPseudoElementBounds-CTvcPfB1.js";import"./chevron-down-Bh11S4NC.js";import"./index-C6uB2sma.js";import"./error-jay4KjIn.js";import"./BaseCbacBanner-kT-SWwmY.js";import"./makeExternalStore-CkHWFA6D.js";import"./Tooltip-DPiqKuLX.js";import"./PopoverPopup-CPHvamwt.js";import"./toNumber-BMd6CcYS.js";import"./useOsdkClient-UoaU_-fQ.js";import"./tick-QKQ6diQn.js";import"./DropdownField-CEnBUsg5.js";import"./withOsdkMetrics-EoQkqQF-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
