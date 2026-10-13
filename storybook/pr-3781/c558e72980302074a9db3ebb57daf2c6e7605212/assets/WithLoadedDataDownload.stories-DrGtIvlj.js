import{f as b,j as a,r as i}from"./iframe-DQyXgQjF.js";import{O as u}from"./object-table-Buiz7_zN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BwATEbbW.js";import"./Table-B59PSWJQ.js";import"./index-zxLoORa7.js";import"./Dialog-Brve9XOD.js";import"./cross-DYm99n8j.js";import"./svgIconContainer-CWf268Wa.js";import"./useBaseUiId-3phzK7j-.js";import"./InternalBackdrop-verxdvs1.js";import"./composite-CU43rjMu.js";import"./index-YSBI5FA8.js";import"./index-L_6XzX0S.js";import"./index-CwpcqqAQ.js";import"./useEventCallback-DNyqnppz.js";import"./SkeletonBar-BBzp9902.js";import"./LoadingCell-CZ0qhRs8.js";import"./ColumnConfigDialog-AVcPD8Jq.js";import"./DraggableList-DUjLA_JY.js";import"./search-BmUdzc_y.js";import"./Input-DiCaaolk.js";import"./useControlled-D7uKPK_J.js";import"./Button-7Yv-s8d8.js";import"./small-cross-DsIT7tGr.js";import"./ActionButton-zXa_t6ga.js";import"./Checkbox-Z99gldXK.js";import"./useValueChanged-DVlVg2nV.js";import"./CollapsiblePanel-j1dwugrc.js";import"./MultiColumnSortDialog-2u3dK1Q7.js";import"./MenuTrigger-BxAwaBm5.js";import"./CompositeItem-RFl7h3zH.js";import"./ToolbarRootContext-BfCsQAap.js";import"./getDisabledMountTransitionStyles-D0wMZ4Z4.js";import"./getPseudoElementBounds-CJlWZBwf.js";import"./chevron-down-B7bppAwZ.js";import"./index-Dvo2_Daj.js";import"./error-F90l69c5.js";import"./BaseCbacBanner-DRohbIbG.js";import"./makeExternalStore-CjiqYirX.js";import"./Tooltip-DMcknpxT.js";import"./PopoverPopup-Lw5BvCW6.js";import"./debounce-kj3B_jEO.js";import"./useOsdkClient-BCI3PIPJ.js";import"./tick-DeKMMXtG.js";import"./DropdownField-B1cH9VTb.js";import"./isEqual-g9VSMI7E.js";import"./withOsdkMetrics-o51FJnXF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
