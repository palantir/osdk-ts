import{f as b,j as a,r as i}from"./iframe-DjWEGpk8.js";import{O as u}from"./object-table-CK0r24am.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BAHRqZH1.js";import"./Table-CcCpU1C3.js";import"./index-B0J2oloL.js";import"./Dialog-B_ZVAzFm.js";import"./cross-1GRRH7fD.js";import"./svgIconContainer-ChJBE8wb.js";import"./useBaseUiId-C6DI0XE1.js";import"./InternalBackdrop-TPQ4DYdg.js";import"./composite-BULlram9.js";import"./index-CTG58gzT.js";import"./index-BujzDHnP.js";import"./index-B2JfD5Eq.js";import"./useEventCallback-DG5SLZly.js";import"./SkeletonBar-Bwir2c9H.js";import"./LoadingCell-DhPSYJzJ.js";import"./ColumnConfigDialog-P5O6Uu9P.js";import"./DraggableList-tLLCQD4h.js";import"./search-BkB5KxBe.js";import"./Input-NTx547BW.js";import"./useControlled-KCs2l9tZ.js";import"./Button-27VpsVpI.js";import"./small-cross-BxE8T7aC.js";import"./ActionButton-Wri30LzD.js";import"./Checkbox-DMUOoXPY.js";import"./useValueChanged-DWt7NM8O.js";import"./CollapsiblePanel-NxLV9Exc.js";import"./MultiColumnSortDialog-CCcWZfI_.js";import"./MenuTrigger-_OyWXqrS.js";import"./CompositeItem-B4cf-cNw.js";import"./ToolbarRootContext-DxpLqVDl.js";import"./getDisabledMountTransitionStyles-BDophGwk.js";import"./getPseudoElementBounds-DrzygsE5.js";import"./chevron-down-Cd8NUspS.js";import"./index-D_5VaQZ7.js";import"./error-w3xuhRXw.js";import"./BaseCbacBanner-CQbE029y.js";import"./makeExternalStore-4k5CuekG.js";import"./Tooltip-D5UJ_UDX.js";import"./PopoverPopup-DM98L0VJ.js";import"./toNumber-DclsDTen.js";import"./useOsdkClient-Bfqcc5ue.js";import"./tick-ByhdScPl.js";import"./DropdownField-CEwgpgOK.js";import"./withOsdkMetrics-B5E9_Z7n.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
