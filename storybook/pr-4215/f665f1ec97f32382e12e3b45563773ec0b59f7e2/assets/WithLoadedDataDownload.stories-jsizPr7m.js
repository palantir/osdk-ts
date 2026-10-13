import{f as b,j as a,r as i}from"./iframe-CzOy-JTY.js";import{O as u}from"./object-table-C0b1ubO2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CIQ1DaMN.js";import"./Table-C8bB-X5_.js";import"./index-Dumhhqmc.js";import"./Dialog-BMqGARaE.js";import"./cross-CWygvYLq.js";import"./svgIconContainer-DpIclYOT.js";import"./useBaseUiId-DnUPrOGO.js";import"./InternalBackdrop-gMia_oWL.js";import"./composite-BVn9jKX7.js";import"./index-CyYfj6ys.js";import"./index-C62E3V-C.js";import"./index-_QH05vrF.js";import"./useEventCallback-C_FMXfn2.js";import"./SkeletonBar-D4NOqT2L.js";import"./LoadingCell-BQfn9-eD.js";import"./ColumnConfigDialog-BcGxv01R.js";import"./DraggableList-DvpxxXIl.js";import"./search-BJ6lcKDX.js";import"./Input-MeFMWRbL.js";import"./useControlled-B2qS0FH4.js";import"./Button-emQM4kcG.js";import"./small-cross-BveryxDD.js";import"./ActionButton-Cda1a-qR.js";import"./Checkbox-B6T5uoCq.js";import"./useValueChanged-BXU_izG3.js";import"./CollapsiblePanel-BO5DGu80.js";import"./MultiColumnSortDialog-Bk31HQNT.js";import"./MenuTrigger-CzBE759j.js";import"./CompositeItem-BAmKL-U0.js";import"./ToolbarRootContext-BCdc83Ck.js";import"./getDisabledMountTransitionStyles-AvhfLujU.js";import"./getPseudoElementBounds-D6X318e6.js";import"./chevron-down-USLYqae_.js";import"./index-BLqBty1z.js";import"./error-Dy_Lr_qP.js";import"./BaseCbacBanner-epv2hjqx.js";import"./makeExternalStore-BilT8BO2.js";import"./Tooltip-BdClGodm.js";import"./PopoverPopup-qNr6ABeL.js";import"./debounce-B12Ng-j0.js";import"./useOsdkClient-D1vV9ihk.js";import"./tick-6hUQYeO9.js";import"./DropdownField-B6ALO_qp.js";import"./isEqual-ChbPr4N3.js";import"./withOsdkMetrics-0tSP_r9F.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
