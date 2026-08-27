import{f as b,j as a,r as i}from"./iframe-DdqVegxu.js";import{O as u}from"./object-table-ByrsOXeP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D6PJo6GD.js";import"./Table-CgTbvs4M.js";import"./index-pXTincUQ.js";import"./Dialog-CyxbIt19.js";import"./cross-B_5ujI29.js";import"./svgIconContainer-WPgp7GKE.js";import"./useBaseUiId-nCd4gP0F.js";import"./InternalBackdrop-B-inBp_t.js";import"./composite-AP0Q5qKl.js";import"./index-BpvYjPJl.js";import"./index-C7-w2U00.js";import"./index-C36gOkf2.js";import"./useEventCallback-CrzheMxe.js";import"./SkeletonBar-Di7FNKag.js";import"./LoadingCell-L-0-8OAL.js";import"./ColumnConfigDialog-B9d4YciP.js";import"./DraggableList-Da4Zbqzs.js";import"./search-BpB8-h7O.js";import"./Input-D24cu4rP.js";import"./useControlled-CUMQFHQ2.js";import"./Button-DGqa4Bnz.js";import"./small-cross-D4sMWlZd.js";import"./ActionButton-SJRFLles.js";import"./Checkbox-5VwSnA_u.js";import"./useValueChanged-DW_NIpw4.js";import"./CollapsiblePanel-CQXX8d_1.js";import"./MultiColumnSortDialog-0Ur2pLlV.js";import"./MenuTrigger-DTMnqI0G.js";import"./CompositeItem-C9XS2Nyq.js";import"./ToolbarRootContext-EhBdlP5C.js";import"./getDisabledMountTransitionStyles-BTw2Gvj1.js";import"./getPseudoElementBounds-CVNxXAaM.js";import"./chevron-down-BaLH6Ox7.js";import"./index-BDDtSzfk.js";import"./error-N9h2ra1P.js";import"./BaseCbacBanner-DafmbqRO.js";import"./makeExternalStore-CP1AfhtS.js";import"./Tooltip-Bjqp_CkB.js";import"./PopoverPopup-Duy39WhW.js";import"./debounce-Q9FbtPmz.js";import"./useOsdkClient-D6cuZrW5.js";import"./tick-Bf7wDZUJ.js";import"./DropdownField-DW9h28gH.js";import"./isEqual-DgkvNOsS.js";import"./withOsdkMetrics-CPLPuXNu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
