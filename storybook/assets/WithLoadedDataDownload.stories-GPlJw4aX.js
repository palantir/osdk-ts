import{f as b,j as a,r as i}from"./iframe-Cksi0ItS.js";import{O as u}from"./object-table-DPjrGFZw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C-I2JgY0.js";import"./index-4Cg-nFaV.js";import"./Dialog-YMFk7ys3.js";import"./cross-KCH3fUDA.js";import"./svgIconContainer-ugyIC0ZV.js";import"./useBaseUiId-CkaYEHZt.js";import"./InternalBackdrop-ByMWLH71.js";import"./composite-9gDjU4W9.js";import"./index-BLXqe3dF.js";import"./index-BGUbSh7o.js";import"./index-tKuUA6h2.js";import"./useEventCallback-C2_CRwBw.js";import"./SkeletonBar-DyOQJPdt.js";import"./LoadingCell-BaYlmIk1.js";import"./ColumnConfigDialog-C4JpXNTA.js";import"./DraggableList-CPIGyWGR.js";import"./search-CAR5_cMX.js";import"./Input-B1lOZjYh.js";import"./useControlled-DgHn0JqS.js";import"./Button-tLjrLZry.js";import"./small-cross-C4_36oX6.js";import"./ActionButton-iRTMwXlM.js";import"./Checkbox-Qi4pYDt8.js";import"./useValueChanged-hC6f2ZRi.js";import"./CollapsiblePanel-D0cMChIV.js";import"./MultiColumnSortDialog-B9s9dsad.js";import"./MenuTrigger-5x48j7vr.js";import"./CompositeItem-DGPROoar.js";import"./ToolbarRootContext-Br_vAgTK.js";import"./getDisabledMountTransitionStyles-DiStWca4.js";import"./getPseudoElementBounds-6sobnSc7.js";import"./chevron-down-BSLIpQnp.js";import"./index-Cya7fJ6D.js";import"./error-C-0hAT3N.js";import"./BaseCbacBanner-iBguVLxX.js";import"./makeExternalStore-DUwh_7mZ.js";import"./Tooltip-Bo6HRsNU.js";import"./PopoverPopup-B7OLzkIb.js";import"./debounce-4VVcQrZU.js";import"./useOsdkClient-CILic4ch.js";import"./tick-yMG_ar3H.js";import"./DropdownField-6g5GKP5i.js";import"./isEqual-BOe8UnNZ.js";import"./withOsdkMetrics-tZacdIUn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
