import{f as b,j as a,r as i}from"./iframe-CKrQ01Tw.js";import{O as u}from"./object-table-BrklFnTe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ChvNP4Pl.js";import"./Table-CTe43hEg.js";import"./index-BIdRQM2S.js";import"./Dialog-CkUz6oIc.js";import"./cross-Bj1Rnssl.js";import"./svgIconContainer-BWrjI0N2.js";import"./useBaseUiId-B2KTelTM.js";import"./InternalBackdrop-DZCFtxK4.js";import"./composite-CgNTf1JJ.js";import"./index-xXO27wOh.js";import"./index-OkCRkK7-.js";import"./index-CIIKdpni.js";import"./useEventCallback-CgTz_qfp.js";import"./SkeletonBar-BoUHhX8q.js";import"./LoadingCell-CH7OlUFO.js";import"./ColumnConfigDialog-DmW2Vozj.js";import"./DraggableList-BU-lHS4a.js";import"./search-G6EfpRFi.js";import"./Input-Cq0Ol3YB.js";import"./useControlled-BlU5vlUe.js";import"./Button-Cq8nZ_ey.js";import"./small-cross-CZEI8mhu.js";import"./ActionButton-BCIDvNWh.js";import"./Checkbox-DOfZvhoo.js";import"./useValueChanged-I3JyBt64.js";import"./CollapsiblePanel-Chcrgg3J.js";import"./MultiColumnSortDialog-IfxNGyXy.js";import"./MenuTrigger-Dc4-fsw5.js";import"./CompositeItem-Bisu6D-H.js";import"./ToolbarRootContext-DNlCsrGQ.js";import"./getDisabledMountTransitionStyles-Cj27Wpwi.js";import"./getPseudoElementBounds-Bcz462pH.js";import"./chevron-down-BWfpQhPj.js";import"./index-BgdQNo10.js";import"./error-BeLhzW1q.js";import"./BaseCbacBanner-D-n0oCTz.js";import"./makeExternalStore-DmTWPGlO.js";import"./Tooltip-DNNmdmtX.js";import"./PopoverPopup-BoVZQgTK.js";import"./debounce-BBFO8SUe.js";import"./useOsdkClient-Cx-PCDzm.js";import"./tick-sRemk3LV.js";import"./DropdownField-CstOe1Ir.js";import"./isEqual-BEtTnJ8J.js";import"./withOsdkMetrics-5P2QGy1j.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
