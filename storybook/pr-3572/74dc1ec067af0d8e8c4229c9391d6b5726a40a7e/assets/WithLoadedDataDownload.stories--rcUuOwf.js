import{f as b,j as a,r as i}from"./iframe-kUcMDyOZ.js";import{O as u}from"./object-table-DEedDzqb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CS9s2vCa.js";import"./Table-DuTbRZNq.js";import"./index-FJ2youpc.js";import"./Dialog-Cu3il9AY.js";import"./cross-c4mj_P3J.js";import"./svgIconContainer-DzW5WdoJ.js";import"./useBaseUiId-DbVM3FPi.js";import"./InternalBackdrop-CeeRh4uO.js";import"./composite-D-QjwseR.js";import"./index-gAu7uQu6.js";import"./index-CIYAzXV_.js";import"./index-ak_yUTTm.js";import"./useEventCallback-C6GoxdcN.js";import"./SkeletonBar-cpHP5C5h.js";import"./LoadingCell-CWdFqm6e.js";import"./ColumnConfigDialog-DqmcGRZd.js";import"./DraggableList-_T6FBHs3.js";import"./search-CBpLo0-0.js";import"./Input-wK11acrz.js";import"./useControlled-NxEk_Brs.js";import"./Button-OM-mrDhp.js";import"./small-cross-uYE6vBrQ.js";import"./ActionButton-BKNsesPs.js";import"./Checkbox-DMcMukQI.js";import"./minus-CyGnRTFD.js";import"./tick-lOBqDaBW.js";import"./useValueChanged-olHN-cir.js";import"./caret-down-CcvPjreq.js";import"./CollapsiblePanel-IDPkCLEg.js";import"./MultiColumnSortDialog-1VXlZguN.js";import"./MenuTrigger-Di-NNhl5.js";import"./CompositeItem-Cj7qBh42.js";import"./ToolbarRootContext-RfLbxc0B.js";import"./getDisabledMountTransitionStyles-DdSblPWY.js";import"./getPseudoElementBounds-CuK5ubqo.js";import"./chevron-down-DzpiwSS8.js";import"./index-Nv01jUcM.js";import"./error-DO_gsA18.js";import"./BaseCbacBanner-CO3yHk0y.js";import"./makeExternalStore-B0Wxt013.js";import"./Tooltip-BgGALbXJ.js";import"./PopoverPopup-VFIs8jUI.js";import"./toNumber-CceV8pQE.js";import"./useOsdkClient-CwyBStJL.js";import"./DropdownField-DIfl5x2S.js";import"./withOsdkMetrics-DNRIXYGs.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
