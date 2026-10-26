import{f as b,j as a,r as i}from"./iframe-B41lgdKN.js";import{O as u}from"./object-table-CmxWLL0B.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DI5m88JW.js";import"./Table-Co7hecY_.js";import"./index-C2q613GL.js";import"./Dialog-CWeVqIwm.js";import"./cross-C9BOtq1y.js";import"./svgIconContainer-D7Eue1ZZ.js";import"./useBaseUiId-BgB3Fx_y.js";import"./InternalBackdrop-BILEvSbn.js";import"./composite-B54UYmeO.js";import"./index-D_IcPDjf.js";import"./index-Cujrcm2-.js";import"./index-DdsQXbay.js";import"./useEventCallback-xWqpVog3.js";import"./SkeletonBar-CGdxBAF7.js";import"./LoadingCell-jbi8AJ8l.js";import"./ColumnConfigDialog-CL5y9Q7l.js";import"./DraggableList-D9UwDPNT.js";import"./search-D5xcli0X.js";import"./Input-C5V0yZmk.js";import"./useControlled-COiD_eR7.js";import"./Button-CLPb2Ul9.js";import"./small-cross-BiIUW-iP.js";import"./ActionButton-BUTqoq-Q.js";import"./Checkbox-B4SrzSIC.js";import"./useValueChanged-uNqrEDBx.js";import"./CollapsiblePanel-m4kdZM0i.js";import"./MultiColumnSortDialog-BGl8Ae1h.js";import"./MenuTrigger-0SMi1Bkm.js";import"./CompositeItem-DKeB6UbW.js";import"./ToolbarRootContext-DaqyENip.js";import"./getDisabledMountTransitionStyles-vQmeQXHd.js";import"./getPseudoElementBounds-S244zxdS.js";import"./chevron-down-DPEakPZ3.js";import"./index-B5Wpr3Nx.js";import"./error-DxQUrNdP.js";import"./BaseCbacBanner-CYN7YaF7.js";import"./makeExternalStore-BkjE2Bfi.js";import"./Tooltip-9yKLS0Jj.js";import"./PopoverPopup-DAEUfrcq.js";import"./debounce-UdAL_ybq.js";import"./useOsdkClient-D00y5DQT.js";import"./tick-jRfkJ3jM.js";import"./DropdownField-BKkvVjBl.js";import"./isEqual-BoLhe-YY.js";import"./withOsdkMetrics-BJYPVZ1i.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
