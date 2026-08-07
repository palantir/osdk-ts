import{f as b,j as a,r as i}from"./iframe-BN9OJAgN.js";import{O as u}from"./object-table-BtXg9Jt9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DTgW9lTk.js";import"./Table-Bm6ShkKY.js";import"./index-L-2VxvDT.js";import"./Dialog-BX2TIW55.js";import"./cross-ByA-dAnm.js";import"./svgIconContainer-hHjG4XJm.js";import"./useBaseUiId-CFnH6spW.js";import"./InternalBackdrop-C4trdGf5.js";import"./composite-B_FYTcr6.js";import"./index-XU0FUMPK.js";import"./index-BVudBLeJ.js";import"./index-CEvXZPz0.js";import"./useEventCallback--6m9_KS5.js";import"./SkeletonBar-C4QQNdI-.js";import"./LoadingCell-CCeFVwer.js";import"./ColumnConfigDialog-CjJ-0VBU.js";import"./DraggableList-616ntRZ-.js";import"./search-BpHAJh9z.js";import"./Input-BRu8vzsZ.js";import"./useControlled-CD4tqtci.js";import"./isEqual-DBlDHhPX.js";import"./isObject-BcXP8hna.js";import"./Button-DF2G5VEF.js";import"./ActionButton-ChDdKwqd.js";import"./Checkbox-tcCMRhRc.js";import"./useValueChanged-B2FQR58s.js";import"./CollapsiblePanel-DPsWFXth.js";import"./MultiColumnSortDialog-Bxpec3cA.js";import"./MenuTrigger-DyQXTKfV.js";import"./CompositeItem-3je88er8.js";import"./ToolbarRootContext-D9x68E4s.js";import"./getDisabledMountTransitionStyles-7a1Vlybt.js";import"./getPseudoElementBounds-DZodAcaj.js";import"./chevron-down-DEEy7cZJ.js";import"./index-BIb_aCOQ.js";import"./error-ViRMI7b4.js";import"./BaseCbacBanner-DkAgQMFT.js";import"./makeExternalStore-DH_VyjIn.js";import"./Tooltip-DNViEkQt.js";import"./PopoverPopup-DZCedgbo.js";import"./toNumber-4vsy98Eg.js";import"./useOsdkClient-DYpWW1q8.js";import"./tick-D_c2nCc1.js";import"./DropdownField-BEVlwcvm.js";import"./withOsdkMetrics-D2gdZo_l.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
