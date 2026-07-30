import{f as b,j as a,r as i}from"./iframe-BKvHrTnY.js";import{O as u}from"./object-table-dfdTUyiR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CoRksuzd.js";import"./Table-B29hTlS5.js";import"./index-rUQDaSAn.js";import"./Dialog-DaOGCD4R.js";import"./cross-DA7ChnMu.js";import"./svgIconContainer-PUQwmYf6.js";import"./useBaseUiId-CGTe-Nun.js";import"./InternalBackdrop-BLVhnK9n.js";import"./composite-BbDh-O6T.js";import"./index-BpNIUQVs.js";import"./index-CLKVOUxl.js";import"./index-CsvxdTi2.js";import"./useEventCallback-CbBJop34.js";import"./SkeletonBar-DQP9L77w.js";import"./LoadingCell-DVEVD3_d.js";import"./ColumnConfigDialog-Ci6pu3Ub.js";import"./DraggableList-R5VUcA9e.js";import"./search-Dbb6-sbu.js";import"./Input-C4eLCz5A.js";import"./useControlled-DhbqroXM.js";import"./isEqual-CVAQsW_R.js";import"./isObject-C_dCxk37.js";import"./Button-DuFY6WZV.js";import"./ActionButton-82aC6zfA.js";import"./Checkbox-DbvC00Sj.js";import"./useValueChanged-D4XpUpxP.js";import"./CollapsiblePanel-CILetta1.js";import"./MultiColumnSortDialog-lF0MJJLu.js";import"./MenuTrigger-D49rl2_N.js";import"./CompositeItem-Duo2TAMh.js";import"./ToolbarRootContext-xvHuYAEc.js";import"./getDisabledMountTransitionStyles-DRF5LK-l.js";import"./getPseudoElementBounds-C1BxtwWY.js";import"./chevron-down-DabCumzI.js";import"./index-X0S4TuAp.js";import"./error-DTZ2scD_.js";import"./BaseCbacBanner-toUcHF7o.js";import"./makeExternalStore-Da6NdYn7.js";import"./Tooltip-yA1aXIF8.js";import"./PopoverPopup-CohrSeYM.js";import"./toNumber-Cpsxj1fj.js";import"./useOsdkClient-BChUCHjG.js";import"./tick-BPLLt8Qy.js";import"./DropdownField-BHO8l0-r.js";import"./withOsdkMetrics-4uldwMwY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
