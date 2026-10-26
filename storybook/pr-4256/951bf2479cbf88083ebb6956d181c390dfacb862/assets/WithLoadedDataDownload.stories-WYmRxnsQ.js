import{f as b,j as a,r as i}from"./iframe-BBSo5ZCd.js";import{O as u}from"./object-table-Br8U4lum.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dzi5mX41.js";import"./Table-7KyAWf7L.js";import"./index-B8ZS8eSl.js";import"./Dialog-B9q0YpDn.js";import"./cross-CS1ZE-4d.js";import"./svgIconContainer-BoEF3o2r.js";import"./useBaseUiId-OTe5-im2.js";import"./InternalBackdrop-BPj_TBK1.js";import"./composite-B78RY0fg.js";import"./index-B2iIKgXF.js";import"./index-BBPJ8Eu5.js";import"./index-BUB8f-4u.js";import"./useEventCallback-CoqlHeZD.js";import"./SkeletonBar-BGWBNq_c.js";import"./LoadingCell-C7hny8Vq.js";import"./ColumnConfigDialog-BkYWJ2uE.js";import"./DraggableList-C0Zv9f2L.js";import"./search-D9IvXS9T.js";import"./Input-CdlLpAfh.js";import"./useControlled-B7b0Wh0w.js";import"./Button-Dlb0le5d.js";import"./small-cross-BIkOoKCV.js";import"./ActionButton-CLNjgvvR.js";import"./Checkbox-B7wtTxsv.js";import"./useValueChanged-DcBO1Vf5.js";import"./CollapsiblePanel-CTr3LnIy.js";import"./MultiColumnSortDialog-ChiIWlqj.js";import"./MenuTrigger-DppHTV_i.js";import"./CompositeItem-Bl0A6RCo.js";import"./ToolbarRootContext-CROAvwzr.js";import"./getDisabledMountTransitionStyles-CLcMIQgP.js";import"./getPseudoElementBounds-CFV9xEQW.js";import"./chevron-down-CTZm-1e2.js";import"./index-DKyvBMeQ.js";import"./error-DlnosDW0.js";import"./BaseCbacBanner-BxoBY9ee.js";import"./makeExternalStore-CncG39Al.js";import"./Tooltip-B33Nx4ET.js";import"./PopoverPopup-DGYqwH-3.js";import"./debounce-BT0ZhofM.js";import"./useOsdkClient-BFKwqTbg.js";import"./tick-D66Od4kk.js";import"./DropdownField-BiBKyvt-.js";import"./isEqual-DpXT7La4.js";import"./withOsdkMetrics-_cs1V2V6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
