import{f as b,j as a,r as i}from"./iframe-CmxH_uLC.js";import{O as u}from"./object-table-CRFfPVal.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BeAOyUTZ.js";import"./Table-C9kra6ek.js";import"./index-DJsCZSKi.js";import"./Dialog-BNKYMGHo.js";import"./cross-CyX8lMkj.js";import"./svgIconContainer-B8tcX66C.js";import"./useBaseUiId-C0ZMCIGl.js";import"./InternalBackdrop-CSQj2QiU.js";import"./composite-XJfPxJ_X.js";import"./index-xj8oWt_u.js";import"./index-YuGlXnUZ.js";import"./index-DI_hkYt2.js";import"./useEventCallback-UxifOB0d.js";import"./SkeletonBar-C1mRvl1J.js";import"./LoadingCell-COrKfPuv.js";import"./ColumnConfigDialog-Chmm0uAt.js";import"./DraggableList-D_zWYVFa.js";import"./search-TlKrCqYm.js";import"./Input-BKp843TN.js";import"./useControlled-Cmxg5Gb3.js";import"./Button-LKCq4LKF.js";import"./small-cross-CkLXIhPX.js";import"./ActionButton-DCJnOZsI.js";import"./Checkbox-Bv4SuPoI.js";import"./useValueChanged-CwV0eJfz.js";import"./CollapsiblePanel--w9tIzOo.js";import"./MultiColumnSortDialog-BWgone-Q.js";import"./MenuTrigger-BIoi-XB2.js";import"./CompositeItem-tCxULoej.js";import"./ToolbarRootContext-D7pkAdai.js";import"./getDisabledMountTransitionStyles-CMPEQ-kf.js";import"./getPseudoElementBounds-lcY7pLtV.js";import"./chevron-down-CyKsjkJ5.js";import"./index-CT0RUWXc.js";import"./error-Dd4yTEqY.js";import"./BaseCbacBanner-DnGU3imV.js";import"./makeExternalStore-BlDQytTU.js";import"./Tooltip-Dgrr9UmS.js";import"./PopoverPopup-DJbVIXOK.js";import"./debounce-uG06-Bnl.js";import"./useOsdkClient-CKlsW0yh.js";import"./tick-BOd_PXKl.js";import"./DropdownField-FhNn2H0Y.js";import"./isEqual-uZqrEjav.js";import"./withOsdkMetrics-087Wob4c.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
