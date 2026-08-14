import{f as b,j as a,r as i}from"./iframe-CMZM34Nm.js";import{O as u}from"./object-table-CQijRIaS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-T_55Ld-4.js";import"./Table-Bf19vEdW.js";import"./index-CPwwZizP.js";import"./Dialog-X0LnPdOw.js";import"./cross-EHESnZVq.js";import"./svgIconContainer-MNS-5CB_.js";import"./useBaseUiId-3LVIhb8Q.js";import"./InternalBackdrop-Dm4BJAYO.js";import"./composite-BLgd2D-S.js";import"./index-DseLBzy9.js";import"./index-DIXzfJRB.js";import"./index-Bzf0HlHB.js";import"./useEventCallback-INnShxMl.js";import"./SkeletonBar-BRFNRxpj.js";import"./LoadingCell-D4PFNC00.js";import"./ColumnConfigDialog-Xy5lhY4M.js";import"./DraggableList-DD2Z18xa.js";import"./search-oY9nbA70.js";import"./Input-CXcmcuOy.js";import"./useControlled-DrBMs-2h.js";import"./Button-ClIIGhQ-.js";import"./small-cross-DEmdrdiv.js";import"./ActionButton-B0HXO6GZ.js";import"./Checkbox-DrBze1bx.js";import"./useValueChanged-BYWxwfrd.js";import"./CollapsiblePanel-CRTElWuv.js";import"./MultiColumnSortDialog-C1j5u-CD.js";import"./MenuTrigger-CShjHQEP.js";import"./CompositeItem-CAkD41ki.js";import"./ToolbarRootContext-Q3-albnw.js";import"./getDisabledMountTransitionStyles-Bs5e3cwu.js";import"./getPseudoElementBounds-C6pmrRxY.js";import"./chevron-down-DGTOO9UD.js";import"./index-EiUiPvzp.js";import"./error-CWU2GFiR.js";import"./BaseCbacBanner-DoCqQT-M.js";import"./makeExternalStore-C8qTazFT.js";import"./Tooltip-Dx6503jt.js";import"./PopoverPopup-BNCKNnCL.js";import"./debounce-BX-4RUA6.js";import"./useOsdkClient-CXoHROa3.js";import"./tick-LLUOl_kc.js";import"./DropdownField-BnX8rzbA.js";import"./isEqual-B7m0Iy2G.js";import"./withOsdkMetrics-DRVxGjiO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
