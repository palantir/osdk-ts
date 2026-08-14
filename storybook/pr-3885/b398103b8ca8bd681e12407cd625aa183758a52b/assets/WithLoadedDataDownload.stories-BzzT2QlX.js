import{f as b,j as a,r as i}from"./iframe-DfZGSEnK.js";import{O as u}from"./object-table-BhFBxuuq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-JSyPDtRL.js";import"./Table-DCHQ9DIl.js";import"./index-BtmgN424.js";import"./Dialog-BQK0uf89.js";import"./cross-Beh92vlp.js";import"./svgIconContainer-Df807jxI.js";import"./useBaseUiId-DywIzSMt.js";import"./InternalBackdrop-BrU3GtDz.js";import"./composite-CaYLCY3w.js";import"./index-DCIaOmvZ.js";import"./index-Bgh8wCNB.js";import"./index-BrCUh-Ra.js";import"./useEventCallback-ByrMJoxA.js";import"./SkeletonBar-C-t_-bWa.js";import"./LoadingCell-DVdW8-R0.js";import"./ColumnConfigDialog-fET7wgaA.js";import"./DraggableList-DwhS7pi1.js";import"./search-BwusOqn1.js";import"./Input-DFmCPLco.js";import"./useControlled-CIgmgNK9.js";import"./Button-B1pKZshi.js";import"./small-cross-Bc1839it.js";import"./ActionButton-BFRD3DcD.js";import"./Checkbox-CwNHEUFs.js";import"./useValueChanged-BoS3X9CQ.js";import"./CollapsiblePanel-CkOQ0TcF.js";import"./MultiColumnSortDialog-BTPWsaqG.js";import"./MenuTrigger-BV7h9uJl.js";import"./CompositeItem-BdMjAmQ6.js";import"./ToolbarRootContext-C7WEHba5.js";import"./getDisabledMountTransitionStyles-DJCiV1E5.js";import"./getPseudoElementBounds-B5f8znMc.js";import"./chevron-down-qE8TvtrC.js";import"./index-CgBWG5tj.js";import"./error-C02d4v5E.js";import"./BaseCbacBanner-DOZyeA5C.js";import"./makeExternalStore-BNurq7kY.js";import"./Tooltip-BHkZYyMQ.js";import"./PopoverPopup-BvvL2cGT.js";import"./debounce-CuIu4aks.js";import"./useOsdkClient-COnSdOcv.js";import"./tick-B2x0tHQ4.js";import"./DropdownField-BXW94eU-.js";import"./isEqual-BLC8r3fK.js";import"./withOsdkMetrics-BVC9GIYX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
