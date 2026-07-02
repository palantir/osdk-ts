import{f as b,j as a,r as i}from"./iframe-Dd-K4pwY.js";import{O as u}from"./object-table-Do2evtaN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fhwpa5Ho.js";import"./Table-DsvAGFEa.js";import"./index-BpEnXjPU.js";import"./Dialog-D9d1IjWf.js";import"./cross-L46FX1Ei.js";import"./svgIconContainer-JffADWRI.js";import"./useBaseUiId-DaQVicju.js";import"./InternalBackdrop-BoyeL_hV.js";import"./composite-BmhWX_Sm.js";import"./index-C7MMIJPy.js";import"./index-D1Y6rR7L.js";import"./index-jmJKBKgl.js";import"./useEventCallback-DJmiJXKz.js";import"./SkeletonBar-Dpfux73x.js";import"./LoadingCell-CZGDj_pt.js";import"./ColumnConfigDialog-CVDlMxtX.js";import"./DraggableList-DejeY7XZ.js";import"./search-CfZxHBL7.js";import"./Input-Cbx3IDEJ.js";import"./useControlled-C6qH-o74.js";import"./Button-B9H9p6U9.js";import"./small-cross-CO0f8Jka.js";import"./ActionButton-CYM0MTNy.js";import"./Checkbox-DGED6Cgh.js";import"./minus-RYPZaA1m.js";import"./tick-CYR2-bQN.js";import"./useValueChanged-DuaV1TOn.js";import"./caret-down-DkjOD5YB.js";import"./CollapsiblePanel-msXccf2x.js";import"./MultiColumnSortDialog-C75BIxZ4.js";import"./MenuTrigger-DuM7jfug.js";import"./CompositeItem-DNlDnFzk.js";import"./ToolbarRootContext-Iy7UTqWM.js";import"./getDisabledMountTransitionStyles-w5EBkQHP.js";import"./getPseudoElementBounds-mja79wJ6.js";import"./chevron-down-Hq26_DTF.js";import"./index-BNhYMObG.js";import"./error-D9HAyCVO.js";import"./BaseCbacBanner-C82ze3j6.js";import"./makeExternalStore-DFSIRYxq.js";import"./Tooltip-DLztDdPl.js";import"./PopoverPopup-C1Ab2xFC.js";import"./toNumber-BaX8lKZ_.js";import"./useOsdkClient-BVHZyr7q.js";import"./DropdownField-C_8P48xv.js";import"./withOsdkMetrics-CmoSxlM0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
