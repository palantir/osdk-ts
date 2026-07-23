import{f as b,j as a,r as i}from"./iframe-NQaBDcT-.js";import{O as u}from"./object-table-Z5doSwbg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C4FqHzWe.js";import"./Table-COXuqNBh.js";import"./index-CLkxnMKD.js";import"./Dialog-BjhlK-2w.js";import"./cross-DcxhLvUw.js";import"./svgIconContainer-DQO0w72t.js";import"./useBaseUiId-CWfAhtPJ.js";import"./InternalBackdrop-BAhTmnaR.js";import"./composite-CoANlsJZ.js";import"./index-Bi0qSrUM.js";import"./index-B3idfxCC.js";import"./index-A2uxy8p8.js";import"./useEventCallback-tk2lndgh.js";import"./SkeletonBar-CzzaEuIi.js";import"./LoadingCell-DBDm4hZD.js";import"./ColumnConfigDialog-CYMzmocP.js";import"./DraggableList-B4bDwMrD.js";import"./search--uA81GPQ.js";import"./Input-B3gMQo3k.js";import"./useControlled-B0nGvhOb.js";import"./isEqual-RgKOcXbb.js";import"./isObject-C9NXGwv9.js";import"./Button-DR9fgxtU.js";import"./ActionButton-DLrP6ZI2.js";import"./Checkbox-C_mH_BYn.js";import"./useValueChanged-D-tK78Xr.js";import"./CollapsiblePanel-DPi0jPt7.js";import"./MultiColumnSortDialog-ThZjXe_9.js";import"./MenuTrigger-jO4hp_Ng.js";import"./CompositeItem-Heg_SISl.js";import"./ToolbarRootContext-KFSz4O2O.js";import"./getDisabledMountTransitionStyles-CQZ7k50D.js";import"./getPseudoElementBounds-loX8GLnh.js";import"./chevron-down-Bpm8zG3w.js";import"./index-BV-zBTfb.js";import"./error-MJdHYbKs.js";import"./BaseCbacBanner-LoqLe0FT.js";import"./makeExternalStore-BaZgJLoC.js";import"./Tooltip-xbgbHOR2.js";import"./PopoverPopup-JanM2U3_.js";import"./toNumber-CdSANx5n.js";import"./useOsdkClient-BHzNSi7b.js";import"./tick-CRkn8y_B.js";import"./DropdownField-DfQZb3dt.js";import"./withOsdkMetrics-CPJMr57z.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
