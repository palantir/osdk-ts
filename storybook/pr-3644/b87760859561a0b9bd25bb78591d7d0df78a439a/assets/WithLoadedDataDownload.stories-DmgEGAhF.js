import{f as b,j as a,r as i}from"./iframe-DjySQ7rG.js";import{O as u}from"./object-table-DTBFpCko.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CIgVa9We.js";import"./Table-ETcEc0NG.js";import"./index-Bd6DGpSd.js";import"./Dialog-CyspR6Mb.js";import"./cross-C_e6DyPY.js";import"./svgIconContainer-CT7d8rBE.js";import"./useBaseUiId-D6CaYaBf.js";import"./InternalBackdrop-BSx9VD1t.js";import"./composite-C5fuEr92.js";import"./index-6XzXhnTB.js";import"./index-Df20DDE5.js";import"./index-BD4jvkf9.js";import"./useEventCallback-CFOcauRI.js";import"./SkeletonBar-zUJ6x9rY.js";import"./LoadingCell-CpoHUb7z.js";import"./ColumnConfigDialog-DmH2deL0.js";import"./DraggableList-DQVnNIoS.js";import"./search-aBbNIVHX.js";import"./Input-MSfp4l71.js";import"./useControlled-BCsEanuS.js";import"./Button-BoUYQZGI.js";import"./small-cross-C7Ni-_pr.js";import"./ActionButton-CgA4xAah.js";import"./Checkbox-CLQdY7uA.js";import"./useValueChanged-DG0qp8vS.js";import"./CollapsiblePanel-gmC8YIba.js";import"./MultiColumnSortDialog-BlxeUGxc.js";import"./MenuTrigger-DCw53318.js";import"./CompositeItem-DYzR2KlF.js";import"./ToolbarRootContext-IMcRNGop.js";import"./getDisabledMountTransitionStyles-CIxV1KDH.js";import"./getPseudoElementBounds-Bzhbh-jt.js";import"./chevron-down-CcbPaUaB.js";import"./index-CSAsjnsn.js";import"./error-DEspa3T_.js";import"./BaseCbacBanner-Dln7eyJV.js";import"./makeExternalStore-CHUDZOYx.js";import"./Tooltip-ttxlMu5V.js";import"./PopoverPopup-DwdLeM_d.js";import"./toNumber-CzPZn80q.js";import"./useOsdkClient-RHuZekwh.js";import"./tick-Cet-PArU.js";import"./DropdownField-CB3KYSoR.js";import"./withOsdkMetrics-Cn3JpTCt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
