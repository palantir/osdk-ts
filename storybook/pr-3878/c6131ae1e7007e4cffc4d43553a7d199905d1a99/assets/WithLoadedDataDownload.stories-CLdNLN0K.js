import{f as b,j as a,r as i}from"./iframe-i_9Nw0aL.js";import{O as u}from"./object-table-f3XuAxzL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B6z7q6ev.js";import"./Table-qqKMoyF4.js";import"./index-xy7OH4WM.js";import"./Dialog-CPeu6G82.js";import"./cross-QqYP1fee.js";import"./svgIconContainer-3Y9_T1l7.js";import"./useBaseUiId-BMuu8nEn.js";import"./InternalBackdrop-ChYWKohY.js";import"./composite-BEolDa-D.js";import"./index-DFV1oDTw.js";import"./index-DBCrB76S.js";import"./index-DLeoqhRa.js";import"./useEventCallback-BWVM_xBp.js";import"./SkeletonBar-m7_oqjy5.js";import"./LoadingCell-DYhARKcP.js";import"./ColumnConfigDialog-BNOyyc7J.js";import"./DraggableList-BFhFmyUR.js";import"./search-CEIky3LJ.js";import"./Input-DSjQkga5.js";import"./useControlled-gY6NMr8Z.js";import"./Button-Cqo_9NuU.js";import"./small-cross-D-oeOHZb.js";import"./ActionButton-DoCWbHlm.js";import"./Checkbox-BxiFWmok.js";import"./useValueChanged-DZGUtt_l.js";import"./CollapsiblePanel-uhXZweix.js";import"./MultiColumnSortDialog-DPUj4uDW.js";import"./MenuTrigger-DVCrlIYb.js";import"./CompositeItem-CcQI67Uz.js";import"./ToolbarRootContext-C05xSZ6f.js";import"./getDisabledMountTransitionStyles-DwmQAXX5.js";import"./getPseudoElementBounds-rsgn8lVn.js";import"./chevron-down-D5tyPu8s.js";import"./index-DABPjbUn.js";import"./error-BtW_-Bd0.js";import"./BaseCbacBanner-BcoWqc6a.js";import"./makeExternalStore-DV-2pdTM.js";import"./Tooltip-BXqI72Um.js";import"./PopoverPopup-COfAsOM5.js";import"./debounce-Dt-hlKAZ.js";import"./useOsdkClient-1TtZSZAh.js";import"./tick-qmWuhCdU.js";import"./DropdownField-BOme1HDF.js";import"./isEqual-G20i65-m.js";import"./withOsdkMetrics-Bn9NhK2D.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
