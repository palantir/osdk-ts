import{f as b,j as a,r as i}from"./iframe-B9pmQzab.js";import{O as u}from"./object-table-DIS3LJrH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-8ApCze4z.js";import"./Table-9aII9MtG.js";import"./index-DJNcHwm8.js";import"./Dialog-Dhzuo-IK.js";import"./cross-8efItR-s.js";import"./svgIconContainer-CO7Z6-JZ.js";import"./useBaseUiId-CeFMmA-9.js";import"./InternalBackdrop-fe3G5tCE.js";import"./composite-C0QPd-_Y.js";import"./index-D1sJuveY.js";import"./index-C-ZM_VQS.js";import"./index-k2Kxocqf.js";import"./useEventCallback-Bzn1utS3.js";import"./SkeletonBar-rBovvZK_.js";import"./LoadingCell-BEdESDPv.js";import"./ColumnConfigDialog-DgmR5P5Z.js";import"./DraggableList-BjUMaye3.js";import"./search-DgrCLXVb.js";import"./Input-DpZPwerh.js";import"./useControlled-BWGqCRkH.js";import"./Button-Bv8-UnbE.js";import"./small-cross-CUlfqa1g.js";import"./ActionButton-BO9z-bgj.js";import"./Checkbox-BxlirDMV.js";import"./useValueChanged-Ed0oXYeG.js";import"./CollapsiblePanel-C6vhybKT.js";import"./MultiColumnSortDialog-fPXk4AO5.js";import"./MenuTrigger-C2qx_8CR.js";import"./CompositeItem-CxryFH5r.js";import"./ToolbarRootContext-ByReu0dc.js";import"./getDisabledMountTransitionStyles-GXQzPAtX.js";import"./getPseudoElementBounds-D3T2cPr4.js";import"./chevron-down-CZhOdlZa.js";import"./index-C31EnYzg.js";import"./error-RG5ruaVA.js";import"./BaseCbacBanner-B-KBfOAr.js";import"./makeExternalStore-BiGH-jDa.js";import"./Tooltip-K8ZFMTxf.js";import"./PopoverPopup-ISDHMIyJ.js";import"./debounce-IZroTv95.js";import"./useOsdkClient-DbItwRGL.js";import"./tick-CElM4Hds.js";import"./DropdownField-BCe2-iEP.js";import"./isEqual-B8Ml-uEA.js";import"./withOsdkMetrics-6gbwRZ-B.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
