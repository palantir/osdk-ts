import{f as b,j as a,r as i}from"./iframe-BcMMFnf6.js";import{O as u}from"./object-table-CxXVxX03.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bdi1tYmS.js";import"./Table-CVhdvPJG.js";import"./index-BMHtYDol.js";import"./Dialog-Bbv7wRiS.js";import"./cross-6YkLE3rk.js";import"./svgIconContainer-C05amAGf.js";import"./useBaseUiId-Dh5_vj5x.js";import"./InternalBackdrop-CFb38Fo8.js";import"./composite-B2X0dip5.js";import"./index-BnYXDYMU.js";import"./index-CPLAyU55.js";import"./index-CXDE3lu9.js";import"./useEventCallback-B-CAuCE6.js";import"./SkeletonBar-CwdmwRXI.js";import"./LoadingCell-Cyb6lws2.js";import"./ColumnConfigDialog-DPyT_nAD.js";import"./DraggableList-BUUnKG2Z.js";import"./search-2DDBXVlF.js";import"./Input-BrlK9Tqs.js";import"./useControlled-DFUxWacU.js";import"./Button-DEYF-M81.js";import"./small-cross-enohh6ER.js";import"./ActionButton-9uXzTSfY.js";import"./Checkbox-DTojGO_u.js";import"./useValueChanged-CFpnpCX0.js";import"./CollapsiblePanel-OHw4Wyuf.js";import"./MultiColumnSortDialog-DDvUa2YG.js";import"./MenuTrigger-DiZnaGKK.js";import"./CompositeItem-t1YG6a8m.js";import"./ToolbarRootContext-BPQo0iii.js";import"./getDisabledMountTransitionStyles-BDC06-FA.js";import"./getPseudoElementBounds-DxN6LO-t.js";import"./chevron-down-Co1TC95K.js";import"./index-BjuvBbw0.js";import"./error-DAhNXKes.js";import"./BaseCbacBanner-C2pCyY83.js";import"./makeExternalStore-DdbizQyP.js";import"./Tooltip-DTTbLAmt.js";import"./PopoverPopup-CokHJSIa.js";import"./debounce-BMh6x8y-.js";import"./useOsdkClient-CfZDOufs.js";import"./tick-D5j9FNYd.js";import"./DropdownField-CM1t1x7G.js";import"./isEqual-Cn-TZ48h.js";import"./withOsdkMetrics-BH4rg4j0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
