import{f as b,j as a,r as i}from"./iframe-BtrE9oAk.js";import{O as u}from"./object-table-D-m31t1G.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ck9jHBT4.js";import"./Table-BIBZ5jl8.js";import"./index-DTswWCN-.js";import"./Dialog-DKIHG2Ba.js";import"./cross-BpApkSFN.js";import"./svgIconContainer-CMgWIhhO.js";import"./useBaseUiId-DZ_AJh1G.js";import"./InternalBackdrop-DBd41QYf.js";import"./composite-DJfjq7Qz.js";import"./index-BiKdeyQ9.js";import"./index-DAqFPrmn.js";import"./index-B0IzT3xV.js";import"./useEventCallback-CRqKCUPu.js";import"./SkeletonBar-FkO2CaFD.js";import"./LoadingCell-b3e9No3V.js";import"./ColumnConfigDialog-D3psN8jr.js";import"./DraggableList-DHebKqrE.js";import"./search-DH4c7KHc.js";import"./Input-DP5nsCAr.js";import"./useControlled-BzxnQPZx.js";import"./Button-Dt_Nxhrh.js";import"./small-cross-BEsKiWDj.js";import"./ActionButton-D8YPh8JC.js";import"./Checkbox-CDub8AJh.js";import"./useValueChanged-BUerDF1m.js";import"./CollapsiblePanel-CVBxOGW4.js";import"./MultiColumnSortDialog-BK3bY81l.js";import"./MenuTrigger-n_2nDWz3.js";import"./CompositeItem-KY2ZDv1b.js";import"./ToolbarRootContext-CiVShHn0.js";import"./getDisabledMountTransitionStyles-BPDURfHU.js";import"./getPseudoElementBounds-DJUliXcW.js";import"./chevron-down-CGlt-RaH.js";import"./index-Bsvjejoj.js";import"./error-CWqhrvJ7.js";import"./BaseCbacBanner-BZjXIBV8.js";import"./makeExternalStore-iXyWkOaZ.js";import"./Tooltip-CLiO1emX.js";import"./isObject-BsxAo1Me.js";import"./debounce-nhdj0_a1.js";import"./useOsdkClient-Cng8MMf4.js";import"./tick-C2899HhT.js";import"./DropdownField-dLbZrCEg.js";import"./isEqual-Cq9_D6IN.js";import"./_baseIsEqual-jr9aZD60.js";import"./withOsdkMetrics-BliYF0M9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
