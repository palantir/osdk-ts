import{f as b,j as a,r as i}from"./iframe-Dvvw4I1q.js";import{O as u}from"./object-table-DA5dn-b0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DCKjsCnY.js";import"./Table-C4SEmzII.js";import"./index-CcRKYtMA.js";import"./Dialog-Bmsj4cRm.js";import"./cross-DWppTOTY.js";import"./svgIconContainer-gsEkol3B.js";import"./useBaseUiId-BMt9jKSu.js";import"./InternalBackdrop-Deoo566R.js";import"./composite-BgyboUCE.js";import"./index-xNuGHOPM.js";import"./index-BuX2Af_P.js";import"./index-DX2A1KCX.js";import"./useEventCallback-DFvqG3p2.js";import"./SkeletonBar-C5qOS_tN.js";import"./LoadingCell-Dk5yhj2P.js";import"./ColumnConfigDialog-CwfwOYOT.js";import"./DraggableList-Bc-cadL2.js";import"./search-BSDyuuEt.js";import"./Input-BQ69AAqr.js";import"./useControlled-B94x4lv8.js";import"./isEqual-DWyezf-d.js";import"./isObject-J1Az8jaZ.js";import"./Button-E81dSXSm.js";import"./ActionButton-TG8YPeM3.js";import"./Checkbox-B-vpnnXS.js";import"./useValueChanged-D3V3UkpS.js";import"./CollapsiblePanel-BVxLKlBv.js";import"./MultiColumnSortDialog-CyuBhwb5.js";import"./MenuTrigger-DSIuTp-N.js";import"./CompositeItem-D2lVOo6X.js";import"./ToolbarRootContext-JCvgM6Mp.js";import"./getDisabledMountTransitionStyles-Dy_PX6T4.js";import"./getPseudoElementBounds-DxXNZ4R-.js";import"./chevron-down-TYpwe3O5.js";import"./index-BS778pXW.js";import"./error-CJRuy9Eq.js";import"./BaseCbacBanner-buppnQCi.js";import"./makeExternalStore-NaZQ5_sz.js";import"./Tooltip-X2ZFgy_f.js";import"./PopoverPopup-C99h-obr.js";import"./toNumber-DxTGzT3S.js";import"./useOsdkClient-DTkXPsfR.js";import"./tick-DOnm_b7O.js";import"./DropdownField-Dx9j_SNq.js";import"./withOsdkMetrics-UyO6uczm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
