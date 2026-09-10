import{f as b,j as a,r as i}from"./iframe-DF9DX5mw.js";import{O as u}from"./object-table-BzUD3kyS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVnQ6duR.js";import"./Table-CqUFWu1r.js";import"./index-BmuLmEaC.js";import"./Dialog-SP-0ETNd.js";import"./cross-CNVJX-R0.js";import"./svgIconContainer-BnUXZNAT.js";import"./useBaseUiId-Z5YEKe02.js";import"./InternalBackdrop-B5Fo5nQu.js";import"./composite-DOTEZs57.js";import"./index-C_Rqkv-M.js";import"./index-BougzNP_.js";import"./index-BKVwN-RR.js";import"./useEventCallback-DEaFjfc0.js";import"./SkeletonBar-C4llJUuv.js";import"./LoadingCell-em3D0YaF.js";import"./ColumnConfigDialog-BItewFiF.js";import"./DraggableList-BBYYJp7a.js";import"./search-C_UKWj2f.js";import"./Input-XPtGFq-8.js";import"./useControlled-CD5ggXKk.js";import"./Button-fzptvapi.js";import"./small-cross-CMbApKIR.js";import"./ActionButton-DYftQUfX.js";import"./Checkbox-BsszOfzQ.js";import"./useValueChanged-COxiaf3w.js";import"./CollapsiblePanel-BlNEuHSO.js";import"./MultiColumnSortDialog-DDr43etj.js";import"./MenuTrigger-SPoWOsQx.js";import"./CompositeItem-MLQ_GRVe.js";import"./ToolbarRootContext-Cv5YqZmZ.js";import"./getDisabledMountTransitionStyles-et_-f1AH.js";import"./getPseudoElementBounds-D8S0eQR8.js";import"./chevron-down-YPHBShAj.js";import"./index-CME9wlOT.js";import"./error-CX7q-MIV.js";import"./BaseCbacBanner-BSlunzxb.js";import"./makeExternalStore-DZe_6606.js";import"./Tooltip-D9EgpZ1u.js";import"./PopoverPopup-3Jbs0f7w.js";import"./debounce-q3UzP_fO.js";import"./useOsdkClient-B5Lb5Fy6.js";import"./tick-BqC-lfvb.js";import"./DropdownField-BmYXknbz.js";import"./isEqual-RK-x2tFX.js";import"./withOsdkMetrics-YJ6vrnTW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
