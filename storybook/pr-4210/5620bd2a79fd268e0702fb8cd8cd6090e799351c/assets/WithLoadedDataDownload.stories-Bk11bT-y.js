import{f as b,j as a,r as i}from"./iframe-BONzVWWn.js";import{O as u}from"./object-table-BTps78ps.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-7aKcYg0W.js";import"./Table-BeFnIxMR.js";import"./index-CKzfCYwc.js";import"./Dialog-DauGg3hj.js";import"./cross-OaYSvrNf.js";import"./svgIconContainer-BsJGio94.js";import"./useBaseUiId-BJIDGoJB.js";import"./InternalBackdrop-BUyQj1vs.js";import"./composite-B6XHh7WQ.js";import"./index-BbYgoHFg.js";import"./index-D15FDZn2.js";import"./index-CYtGwXdQ.js";import"./useEventCallback-CoaVLJ5c.js";import"./SkeletonBar-BkSCBaCu.js";import"./LoadingCell-B-hF3TTr.js";import"./ColumnConfigDialog-Dsa3CjA5.js";import"./DraggableList-_ALp2hGB.js";import"./search-C37N2Xt5.js";import"./Input-XtFGCQpB.js";import"./useControlled-DfXv_ef9.js";import"./Button-BME0vzML.js";import"./small-cross-CGUVEOIr.js";import"./ActionButton-CC0XggjE.js";import"./Checkbox-HXoEtCq-.js";import"./useValueChanged-RFSTNB7h.js";import"./CollapsiblePanel-B6meFyIF.js";import"./MultiColumnSortDialog-CXRzSZdt.js";import"./MenuTrigger-Dob2KNO7.js";import"./CompositeItem-DSj43NsN.js";import"./ToolbarRootContext-BfDhsqcy.js";import"./getDisabledMountTransitionStyles-Csp7Nrn2.js";import"./getPseudoElementBounds-d8wmr9di.js";import"./chevron-down-BlXmNLUg.js";import"./index-oXf2-ktg.js";import"./error-DyHZRqpD.js";import"./BaseCbacBanner-BTLMeZE3.js";import"./makeExternalStore-B5wjJeG4.js";import"./Tooltip-CCQAgWFm.js";import"./PopoverPopup-B9VmNlSc.js";import"./debounce-CL8B4SFR.js";import"./useOsdkClient-BG5uKO_5.js";import"./tick-5KckzmGr.js";import"./DropdownField-Y6pZ3TyF.js";import"./isEqual-CNNu8GwX.js";import"./withOsdkMetrics-CJnYGCPE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
