import{f as b,j as a,r as i}from"./iframe-D8GtPwc8.js";import{O as u}from"./object-table-CudRMjsB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DM7AYsRe.js";import"./Table-Dnd_Z03K.js";import"./index-BHvqAHvK.js";import"./Dialog-BQAfoqXB.js";import"./cross-DB6ZQcJi.js";import"./svgIconContainer-DlryWN-T.js";import"./useBaseUiId-cPjFtQbW.js";import"./InternalBackdrop-BnVhbZ_p.js";import"./composite-C3gA3n5a.js";import"./index-BFpMtvXB.js";import"./index-hBVFoSAx.js";import"./index--mveQ4GA.js";import"./useEventCallback-JoMVAP4J.js";import"./SkeletonBar-DhDYamN9.js";import"./LoadingCell-CpxY2g9E.js";import"./ColumnConfigDialog-CgqnQaBc.js";import"./DraggableList-H11g_daa.js";import"./search-1VHOmlrx.js";import"./Input-BQZ4zqRI.js";import"./useControlled-BGR8D7jw.js";import"./Button-BY4p0q88.js";import"./small-cross-AU0AwZv4.js";import"./ActionButton-COwhhG-g.js";import"./Checkbox-CYnr5sf0.js";import"./useValueChanged-Bvcq1JkK.js";import"./CollapsiblePanel-DRmMBXX1.js";import"./MultiColumnSortDialog-w5gbJQoX.js";import"./MenuTrigger-CQvmaUV7.js";import"./CompositeItem-DiLTW9IV.js";import"./ToolbarRootContext-BqDTk1g9.js";import"./getDisabledMountTransitionStyles-OSessTJH.js";import"./getPseudoElementBounds-DAdIAfjY.js";import"./chevron-down-7LsT1DrB.js";import"./index-BZjshZ5O.js";import"./error-DXFVtY0P.js";import"./BaseCbacBanner-DJmT2hTZ.js";import"./makeExternalStore-ByNN_qQg.js";import"./Tooltip-CWkY425s.js";import"./PopoverPopup-DnmZzlUY.js";import"./debounce-4ipI9nx9.js";import"./useOsdkClient-D4kcyEkr.js";import"./tick-DbzPDmMF.js";import"./DropdownField-DIakJXQh.js";import"./isEqual-DcZVMsbL.js";import"./withOsdkMetrics-BajG3tch.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
