import{f as b,j as a,r as i}from"./iframe-C-Tx6HWi.js";import{O as u}from"./object-table-Cf5MFxaA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DGI0evEf.js";import"./Table-CZHeyD1o.js";import"./index-D83LHBrr.js";import"./Dialog-r1D42-Ux.js";import"./cross-1eBPB5o6.js";import"./svgIconContainer-B0ue0tIb.js";import"./useBaseUiId-DmObUJIN.js";import"./InternalBackdrop-BUrvlczT.js";import"./composite-Cc9l10TW.js";import"./index-Br_EbTHZ.js";import"./index-BZnuPb4P.js";import"./index-lRbbaMu8.js";import"./useEventCallback-Q-L5djZk.js";import"./SkeletonBar-DoUtLMSm.js";import"./LoadingCell-BCjONaSV.js";import"./ColumnConfigDialog-giesQaTM.js";import"./DraggableList-Dcmngyiz.js";import"./search-DE-tamAG.js";import"./Input-CIq38a5l.js";import"./useControlled-OhGlr_am.js";import"./Button-C5vL1jQD.js";import"./small-cross-BepHp4Xz.js";import"./ActionButton-D-i2pL5W.js";import"./Checkbox-anlJ1-A9.js";import"./useValueChanged-Bp_MYZXj.js";import"./CollapsiblePanel-B_JSdAcK.js";import"./MultiColumnSortDialog-C7J6eDlO.js";import"./MenuTrigger-BD2OxlOZ.js";import"./CompositeItem-CqPIIJ4M.js";import"./ToolbarRootContext-V5A_2QeJ.js";import"./getDisabledMountTransitionStyles-nsF5d56f.js";import"./getPseudoElementBounds-DT0mYvTC.js";import"./chevron-down-Co2dXPpt.js";import"./index-C9VJ4ZCw.js";import"./error-DRRLvBR9.js";import"./BaseCbacBanner-B9_VmhHF.js";import"./makeExternalStore-Cp2BBvmZ.js";import"./Tooltip-BjpU_Knk.js";import"./PopoverPopup-C0yBx_TL.js";import"./debounce-D71Y9sGY.js";import"./useOsdkClient-C2VOm62_.js";import"./tick-BvEUUXuE.js";import"./DropdownField-CSrtnpGB.js";import"./isEqual-CRRlnMab.js";import"./withOsdkMetrics-XUw2KNZ5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
