import{f as b,j as a,r as i}from"./iframe-BBbz1AL9.js";import{O as u}from"./object-table-CnZxylfN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-LktJP5uP.js";import"./Table-BEK0Bl35.js";import"./index-BOgOZGVm.js";import"./Dialog-Bka1mwMg.js";import"./cross-D2ow8c2-.js";import"./svgIconContainer-DFesH5dO.js";import"./useBaseUiId-D4UJyJ9J.js";import"./InternalBackdrop-CJ0Y8Kog.js";import"./composite-MiODqQmu.js";import"./index-CA8g9ho5.js";import"./index-Db4moevd.js";import"./index-D3NdQmE7.js";import"./useEventCallback-H5LWbmVP.js";import"./SkeletonBar-EV7-VIf-.js";import"./LoadingCell-Bs3kbv_6.js";import"./ColumnConfigDialog-udmBc1UO.js";import"./DraggableList-DOKJgB3l.js";import"./search-DnvQFbf5.js";import"./Input-DMWAeir1.js";import"./useControlled-BAncaeLN.js";import"./Button-DI71fvab.js";import"./small-cross-JgZQe-XJ.js";import"./ActionButton-eGdQnCQC.js";import"./Checkbox-Cw_WX90u.js";import"./useValueChanged-CwyCbx99.js";import"./CollapsiblePanel-Dr5UHTv0.js";import"./MultiColumnSortDialog-CSl4ZM_a.js";import"./MenuTrigger-Bycf4s8k.js";import"./CompositeItem-DV0DAQDv.js";import"./ToolbarRootContext-CDIUf1p8.js";import"./getDisabledMountTransitionStyles-Md2PJyBx.js";import"./getPseudoElementBounds-OF4rLga5.js";import"./chevron-down-DxqKQR7L.js";import"./index-DXllweDc.js";import"./error-BG3KjKN_.js";import"./BaseCbacBanner-bnHVqfrz.js";import"./makeExternalStore-D3rO5u3I.js";import"./Tooltip-VoV22dJs.js";import"./PopoverPopup-dMiMS_iS.js";import"./debounce-BrRPn5q2.js";import"./useOsdkClient-CWYpxt6E.js";import"./tick-DzipYJGn.js";import"./DropdownField-ye8n36Ni.js";import"./isEqual-DUuKJX2r.js";import"./withOsdkMetrics-tTo2SGpZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
