import{f as b,j as a,r as i}from"./iframe-Bw13kIxi.js";import{O as u}from"./object-table-kxZ9tU0A.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BzOLmTcY.js";import"./Table-C8yqct6T.js";import"./index-MMxGRtZu.js";import"./Dialog-DfHRROsO.js";import"./cross-Bot7O1S5.js";import"./svgIconContainer-CHQSAFNt.js";import"./useBaseUiId-BD7FpPox.js";import"./InternalBackdrop-A7BWoqb_.js";import"./composite-BFCFgZut.js";import"./index-CUU4Y7hn.js";import"./index-BqWGwO84.js";import"./index-BFk6o5Yc.js";import"./useEventCallback-DTY0kHsH.js";import"./SkeletonBar-CpAUSAEn.js";import"./LoadingCell-CanaaSrx.js";import"./ColumnConfigDialog-JQuoDAkJ.js";import"./DraggableList-BslGcgGG.js";import"./search-DC1ogqGn.js";import"./Input-2zOhGHVv.js";import"./useControlled-DefJa1NZ.js";import"./Button-CE0Z6ey5.js";import"./small-cross-jMKjsjhb.js";import"./ActionButton-DXMkOznn.js";import"./Checkbox-C5nrXeA-.js";import"./useValueChanged-qKqnNGu6.js";import"./CollapsiblePanel-C7c8Mi8e.js";import"./MultiColumnSortDialog-D0HB9zMf.js";import"./MenuTrigger-DrqgM8Ia.js";import"./CompositeItem-B4j9mPKG.js";import"./ToolbarRootContext-IHMHRzml.js";import"./getDisabledMountTransitionStyles-Dm6t4Qzi.js";import"./getPseudoElementBounds-BbQB3o-0.js";import"./chevron-down-hwQFkKEa.js";import"./index-Dtvh5Ts7.js";import"./error-CDpWRRdK.js";import"./BaseCbacBanner-C6nWB-Kz.js";import"./makeExternalStore-BPlb4pia.js";import"./Tooltip-C2VUAIPR.js";import"./PopoverPopup-Fr35LjTY.js";import"./debounce-BaVRg2vf.js";import"./useOsdkClient-ysIV4O88.js";import"./tick-vVehnAOz.js";import"./DropdownField-QqZNyAQs.js";import"./isEqual-DLZP89tE.js";import"./withOsdkMetrics-Bh3armvA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
