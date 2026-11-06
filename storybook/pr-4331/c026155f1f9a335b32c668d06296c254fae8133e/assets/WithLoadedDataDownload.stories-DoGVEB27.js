import{f as b,j as a,r as i}from"./iframe-Ck95bxu4.js";import{O as u}from"./object-table-yfo4r35p.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-KA9de6lE.js";import"./Table-BfpJ92cE.js";import"./index-Cif5jAEJ.js";import"./Dialog-CxNG9xUy.js";import"./cross-D4AVy5in.js";import"./svgIconContainer-CPHbIRji.js";import"./useBaseUiId-CWyLFOC8.js";import"./InternalBackdrop-BN5IDP0f.js";import"./composite-Yh1yynjC.js";import"./index-BhAq9v2h.js";import"./index-QaBJUBwA.js";import"./index-jkcmc-OQ.js";import"./useEventCallback-B4j9PWJ8.js";import"./SkeletonBar-8iEwSFxF.js";import"./LoadingCell-D9PdMFhW.js";import"./ColumnConfigDialog-M8P9_gve.js";import"./DraggableList-AYfFvqAw.js";import"./search-BS_g30el.js";import"./Input-s6yy9vkz.js";import"./useControlled-B8TEOr6k.js";import"./Button-PWPX_ks7.js";import"./small-cross-B8CohMqi.js";import"./ActionButton-r8oP0f9s.js";import"./Checkbox-D7ynqdrt.js";import"./useValueChanged-B4fSJG4I.js";import"./CollapsiblePanel-D4YJo7Ff.js";import"./MultiColumnSortDialog-CEzGqhr_.js";import"./MenuTrigger-BPdJ6fv_.js";import"./CompositeItem-B10VO3gZ.js";import"./ToolbarRootContext-BRWZ8sOA.js";import"./getDisabledMountTransitionStyles-D5C9DTmw.js";import"./getPseudoElementBounds-skEh5NHv.js";import"./chevron-down-bheQQ_PQ.js";import"./index-K_6WRtRx.js";import"./error-RnJ96IVH.js";import"./BaseCbacBanner-DjBChTmW.js";import"./makeExternalStore-BMm4gCLi.js";import"./Tooltip-rzDvG8SV.js";import"./isObject-1wBlTIbM.js";import"./debounce-xVAvVgAm.js";import"./useOsdkClient-BanL0364.js";import"./tick-CkjrrKLh.js";import"./DropdownField-nQt9qvfV.js";import"./isEqual-DPuwhVwN.js";import"./_baseIsEqual-TosI8jgs.js";import"./withOsdkMetrics-Dr6WHfBD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
