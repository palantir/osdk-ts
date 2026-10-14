import{f as b,j as a,r as i}from"./iframe-C4UMSUV8.js";import{O as u}from"./object-table-Q8UrgRqd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BqsIy_YL.js";import"./Table-CctLNSxZ.js";import"./index-Dlv7asCS.js";import"./Dialog-DfvM1sIK.js";import"./cross-DzO2_pjl.js";import"./svgIconContainer-AOO7GD-s.js";import"./useBaseUiId-BfnaHgsG.js";import"./InternalBackdrop-_W1XqsYG.js";import"./composite-BaqTaPKU.js";import"./index-Dm12TBSV.js";import"./index-DMrzx1Mz.js";import"./index-C9vtPXO1.js";import"./useEventCallback-DafiBAM-.js";import"./SkeletonBar-BlB5K85_.js";import"./LoadingCell-BQ1ZcdLP.js";import"./ColumnConfigDialog-Bij9Mv3S.js";import"./DraggableList-DTr2Rc6q.js";import"./search-D1rWsfme.js";import"./Input-Dd7hmS3r.js";import"./useControlled-DaMNSDAG.js";import"./Button-3fs9_LlW.js";import"./small-cross-CbMP9reg.js";import"./ActionButton-DPjqFZOR.js";import"./Checkbox-AayFk0MD.js";import"./useValueChanged-GkMCatyW.js";import"./CollapsiblePanel-CT-3U1A3.js";import"./MultiColumnSortDialog-DsWc4H6V.js";import"./MenuTrigger-KLM0HTCA.js";import"./CompositeItem-DdxiUYfL.js";import"./ToolbarRootContext-DVOP2BC1.js";import"./getDisabledMountTransitionStyles-CQ_yz0-6.js";import"./getPseudoElementBounds-CvXSJ4vT.js";import"./chevron-down-OaulZx0F.js";import"./index-BlMVnv-1.js";import"./error-Dz-jjHSU.js";import"./BaseCbacBanner-CpMpxxo1.js";import"./makeExternalStore-CmEuGlMk.js";import"./Tooltip-DEV4zdHe.js";import"./PopoverPopup-N5V--xdD.js";import"./debounce-CZlA4PRB.js";import"./useOsdkClient-C3bf-TDO.js";import"./tick-BvTPrsR3.js";import"./DropdownField-CdX1mzab.js";import"./isEqual-B4AyH633.js";import"./withOsdkMetrics-DT43r1D8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
