import{f as b,j as a,r as i}from"./iframe-DJFzVHUY.js";import{O as u}from"./object-table-DZ1ElxZ0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-2WGoxQfc.js";import"./Table-DLA0ay-U.js";import"./index-C8WJuqok.js";import"./Dialog-CAHAZJON.js";import"./cross-DNlGV5O4.js";import"./svgIconContainer-DHr-sOOW.js";import"./useBaseUiId-CGrSWTyF.js";import"./InternalBackdrop-B8XgOXJ8.js";import"./composite-CnhtXZjf.js";import"./index-DTSqGPNo.js";import"./index-DWlt5OtE.js";import"./index-Dq8k5apt.js";import"./useEventCallback-Ci1tWv_-.js";import"./SkeletonBar-46sSVcFY.js";import"./LoadingCell-BfoJJmHR.js";import"./ColumnConfigDialog-DWa2QIa2.js";import"./DraggableList-BatBu2Wo.js";import"./search-CWhFAg8g.js";import"./Input-D3nPOBMY.js";import"./useControlled-B01s-9H8.js";import"./isEqual-BsgyJ2f-.js";import"./isObject-9ANvhOR1.js";import"./Button-BDBMJl_t.js";import"./ActionButton-BY6r5N3V.js";import"./Checkbox-EiJFw0o_.js";import"./useValueChanged-Pst2Fxoc.js";import"./CollapsiblePanel-D5sFaQ_2.js";import"./MultiColumnSortDialog-D79W9Fza.js";import"./MenuTrigger-BManj4QB.js";import"./CompositeItem-tYIQGoUN.js";import"./ToolbarRootContext-ZgWiotCD.js";import"./getDisabledMountTransitionStyles-DeI9-n_T.js";import"./getPseudoElementBounds-Cx-1Ks2h.js";import"./chevron-down-boODY68H.js";import"./index-dZ139dm-.js";import"./error-DIyK6hbL.js";import"./BaseCbacBanner-BkuCMRW4.js";import"./makeExternalStore-Dlph1PzJ.js";import"./Tooltip-DKt55s1B.js";import"./PopoverPopup-vJBslg_h.js";import"./toNumber-BuE48Tud.js";import"./useOsdkClient-MqvBzpue.js";import"./tick-B68tua9r.js";import"./DropdownField-DeThirSU.js";import"./withOsdkMetrics-sbsVHgwY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
