import{f as b,j as a,r as i}from"./iframe-DpLKkykb.js";import{O as u}from"./object-table-CCQRTpV6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B-LnzVrM.js";import"./Table-BWUlCOMb.js";import"./index-CGUYPJOd.js";import"./Dialog-DzkUvi49.js";import"./cross-CXiMlBtd.js";import"./svgIconContainer-CZQsWSbp.js";import"./useBaseUiId-exgAqZMu.js";import"./InternalBackdrop-DcJ6yFxi.js";import"./composite-B2s1GcRp.js";import"./index-M0qwvu5p.js";import"./index-gBz-IH4J.js";import"./index-4T6xY16C.js";import"./useEventCallback-Vl5Y4MSh.js";import"./SkeletonBar-Dy4BjWyK.js";import"./LoadingCell-lYNsC5b7.js";import"./ColumnConfigDialog-Dzuli4nh.js";import"./DraggableList-DtrhgtKM.js";import"./search-DHqp7hab.js";import"./Input-BRg86MD8.js";import"./useControlled-DGS0wgFX.js";import"./Button-CWQ4920K.js";import"./small-cross-CtsQGPXk.js";import"./ActionButton-SnW7FFWH.js";import"./Checkbox-D_THPq5z.js";import"./useValueChanged-Bq5vV2O3.js";import"./CollapsiblePanel-iZ3dIyoM.js";import"./MultiColumnSortDialog-DtOySDqq.js";import"./MenuTrigger-C0vIePhh.js";import"./CompositeItem-iDk6P1qU.js";import"./ToolbarRootContext-9nybivRl.js";import"./getDisabledMountTransitionStyles-C2Wnkcdr.js";import"./getPseudoElementBounds-CEgSfOsV.js";import"./chevron-down-C95_Fq08.js";import"./index-CLl-8Y0S.js";import"./error-B4GY5Ke1.js";import"./BaseCbacBanner-DZbBMzdd.js";import"./makeExternalStore-CIehlGBq.js";import"./Tooltip-B8_rEhlp.js";import"./isObject-DIeIJOdU.js";import"./debounce-C-RRrtJp.js";import"./useOsdkClient-DOvJ8crf.js";import"./tick-BzN4aODk.js";import"./DropdownField-CLNenIwJ.js";import"./isEqual-Ce49QXZx.js";import"./_baseIsEqual-BzRnqrWM.js";import"./withOsdkMetrics-DU1BWRzI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
