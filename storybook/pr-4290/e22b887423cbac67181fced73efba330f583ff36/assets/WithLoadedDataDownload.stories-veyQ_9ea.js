import{f as b,j as a,r as i}from"./iframe-CWg4NKfU.js";import{O as u}from"./object-table-CUaJVOeo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CbUGxpFK.js";import"./Table-DGz9J2_I.js";import"./index-BqvDfMBr.js";import"./Dialog-C5eQeW5b.js";import"./cross-C4B5H0O1.js";import"./svgIconContainer-CfhV0gWc.js";import"./useBaseUiId-DspZ6BgH.js";import"./InternalBackdrop-DmUAlLlN.js";import"./composite-BZR9RT0J.js";import"./index-BwmCKmIG.js";import"./index-Dcq7c99I.js";import"./index-Du_LEjCQ.js";import"./useEventCallback-DypMXnSj.js";import"./SkeletonBar-CQQLBMCI.js";import"./LoadingCell-C225-QxH.js";import"./ColumnConfigDialog-DSdc2ZQ0.js";import"./DraggableList-B4wpIJV9.js";import"./search-Csa8UJRl.js";import"./Input-CkLJO43y.js";import"./useControlled-CxeE38RI.js";import"./Button-BMAG39_Z.js";import"./small-cross-BOD3G0f7.js";import"./ActionButton-B764oDl2.js";import"./Checkbox-DHMyW384.js";import"./useValueChanged-BTUZT3Bs.js";import"./CollapsiblePanel-BTrc7yy9.js";import"./MultiColumnSortDialog-Dx3bgxMC.js";import"./MenuTrigger-CxYsElt9.js";import"./CompositeItem-B-7NNP1P.js";import"./ToolbarRootContext-DB3lOv4Z.js";import"./getDisabledMountTransitionStyles-CEpea57p.js";import"./getPseudoElementBounds-gNG5aSRj.js";import"./chevron-down-GiI9wTRT.js";import"./index-BRlDD1gT.js";import"./error-DpR2m3gK.js";import"./BaseCbacBanner-Bqfi7D06.js";import"./makeExternalStore-PjLZ2rt4.js";import"./Tooltip-Dc8Bmckm.js";import"./PopoverPopup-DhNWwJ6-.js";import"./debounce-gYlsUq6V.js";import"./useOsdkClient-DkhSPEoO.js";import"./tick-CXe62fkm.js";import"./DropdownField-D5fuGTjd.js";import"./isEqual-Baxfuxdj.js";import"./withOsdkMetrics-Cl-t5p_W.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
