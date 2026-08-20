import{f as b,j as a,r as i}from"./iframe-6HLyOHdg.js";import{O as u}from"./object-table-BqDhRQfd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-lnZu1Hku.js";import"./Table-DKP_0kc6.js";import"./index-DddEJcCL.js";import"./Dialog-ePQRy_Kd.js";import"./cross-D90aPG-h.js";import"./svgIconContainer-Cen0mKtu.js";import"./useBaseUiId-CIjMevu3.js";import"./InternalBackdrop-C2llqmWt.js";import"./composite-BM-mnNQY.js";import"./index-BeSpr_z9.js";import"./index-BfmI1DCD.js";import"./index-CMiXIGXs.js";import"./useEventCallback-CGyP_YXR.js";import"./SkeletonBar-BQe4W9P_.js";import"./LoadingCell-D8Pa0_Yo.js";import"./ColumnConfigDialog-Bmzsfr0o.js";import"./DraggableList-CnlM9Y2g.js";import"./search-B78YoXrH.js";import"./Input-D3asMaDe.js";import"./useControlled-CWJ6yU13.js";import"./Button-Mer8XKS3.js";import"./small-cross-Tosz4TC-.js";import"./ActionButton-Be9rA2WR.js";import"./Checkbox-_hF1W5ki.js";import"./useValueChanged-FStlX83F.js";import"./CollapsiblePanel-C6rkwz0D.js";import"./MultiColumnSortDialog-DAOghwQ8.js";import"./MenuTrigger-BVV9Quwn.js";import"./CompositeItem-CRehYzcR.js";import"./ToolbarRootContext-LDbs2zUX.js";import"./getDisabledMountTransitionStyles-DY_L7rbU.js";import"./getPseudoElementBounds-B1zH-3ZD.js";import"./chevron-down-CJW3cPUU.js";import"./index-CEc6v-Oz.js";import"./error-DLYWmfkx.js";import"./BaseCbacBanner-Bzz1Jbsh.js";import"./makeExternalStore-ySOpHfFQ.js";import"./Tooltip-BUvlQdJ2.js";import"./PopoverPopup-CxJqbIU3.js";import"./debounce-CLtGcTV5.js";import"./useOsdkClient-Cgy0juQI.js";import"./tick-CqjJQuuI.js";import"./DropdownField-DOg9JlAb.js";import"./isEqual-CUgvzXaH.js";import"./withOsdkMetrics-eihAybMP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
