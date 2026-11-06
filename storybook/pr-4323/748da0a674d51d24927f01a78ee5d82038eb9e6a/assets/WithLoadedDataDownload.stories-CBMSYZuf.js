import{f as b,j as a,r as i}from"./iframe-C3HFz_5t.js";import{O as u}from"./object-table-D4nnc4fH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Lu-1fXSQ.js";import"./Table-YAoAfofb.js";import"./index-C294enkt.js";import"./Dialog-DEYwtx14.js";import"./cross-VDE-QV8Y.js";import"./svgIconContainer-Dx7Oqsa5.js";import"./useBaseUiId-Bldx0Hal.js";import"./InternalBackdrop-DJRSYLek.js";import"./composite-D03Np3Q8.js";import"./index-jlzeR6Al.js";import"./index-YNwbQPnW.js";import"./index-B7jmGBVS.js";import"./useEventCallback-C-PGdIYD.js";import"./SkeletonBar-DGKfF2S7.js";import"./LoadingCell-C1WN3_o-.js";import"./ColumnConfigDialog-BjGJy6Dt.js";import"./DraggableList-BI-9U1zg.js";import"./search-DicQa5iZ.js";import"./Input-C6djVFfS.js";import"./useControlled-CO4tNWxM.js";import"./Button-BCjPDU8B.js";import"./small-cross-BXZDNcqg.js";import"./ActionButton-BTKeHAqS.js";import"./Checkbox-D0DLF897.js";import"./useValueChanged-BRuQsI8Y.js";import"./CollapsiblePanel-BsUoXH1E.js";import"./MultiColumnSortDialog-D-LKE5Gr.js";import"./MenuTrigger-dLKf57bk.js";import"./CompositeItem-Ljl_SfE6.js";import"./ToolbarRootContext-QkATP4Zh.js";import"./getDisabledMountTransitionStyles-AZ8EU8I1.js";import"./getPseudoElementBounds-aWxumBMj.js";import"./chevron-down-DKXpMnZC.js";import"./index-o5L_LgpC.js";import"./error-NlvFbJx8.js";import"./BaseCbacBanner-CZYijgNC.js";import"./makeExternalStore-CTKXCo5y.js";import"./Tooltip-BAxfPrcD.js";import"./PopoverPopup-B4HM-lxB.js";import"./debounce-IhEbnEYZ.js";import"./useOsdkClient-B9v2FimT.js";import"./tick-BQmvO2-Z.js";import"./DropdownField-Bq0jfkKU.js";import"./isEqual--r9Zetx6.js";import"./withOsdkMetrics-CwJ1jB1x.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
