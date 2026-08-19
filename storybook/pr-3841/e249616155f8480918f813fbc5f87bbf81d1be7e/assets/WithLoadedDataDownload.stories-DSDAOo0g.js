import{f as b,j as a,r as i}from"./iframe-B6AkhtVd.js";import{O as u}from"./object-table-5ycu1SBj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DAEdGq6d.js";import"./Table-BlLk-jmR.js";import"./index-C91K9ps7.js";import"./Dialog-DY8gdZzF.js";import"./cross-m6qgDhvT.js";import"./svgIconContainer-BoSGc56J.js";import"./useBaseUiId-D6Pj3rgz.js";import"./InternalBackdrop-C36o_owR.js";import"./composite-BDhvysYg.js";import"./index-CveC20hk.js";import"./index-DS-1BAxQ.js";import"./index-BkcfJqel.js";import"./useEventCallback-BAkDWBWl.js";import"./SkeletonBar-B_sJhz87.js";import"./LoadingCell-CIFbvAcy.js";import"./ColumnConfigDialog-Bv3ie2QA.js";import"./DraggableList-BDAa16px.js";import"./search-CgNZ6jJc.js";import"./Input-DHV2JVjW.js";import"./useControlled-DvrLljgv.js";import"./Button-BWxAZ7YP.js";import"./small-cross-xxpfi0Bj.js";import"./ActionButton-BP9-0q8X.js";import"./Checkbox-Cy2DyjcR.js";import"./useValueChanged-9x7YgLOm.js";import"./CollapsiblePanel-DfmIfBjz.js";import"./MultiColumnSortDialog-C_vviL3T.js";import"./MenuTrigger-CzlQo5mG.js";import"./CompositeItem-BWKOk0A1.js";import"./ToolbarRootContext-DQVGsq2j.js";import"./getDisabledMountTransitionStyles-Cap-YFSs.js";import"./getPseudoElementBounds-CMFI7MrQ.js";import"./chevron-down-CEzkWe0K.js";import"./index-CAFFYM2J.js";import"./error-CIE68Eoj.js";import"./BaseCbacBanner-DzlGGx8L.js";import"./makeExternalStore-MefWcWhA.js";import"./Tooltip-DaBD8ywy.js";import"./PopoverPopup-DP1yRoK-.js";import"./debounce-DNhy8eaI.js";import"./useOsdkClient-DRkf_gGj.js";import"./tick-DyFFxs8l.js";import"./DropdownField-NIRLIRU1.js";import"./isEqual-B9AvV4Np.js";import"./withOsdkMetrics-D2EQ2PwQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
