import{f as b,j as a,r as i}from"./iframe-XrofcpbD.js";import{O as u}from"./object-table-CQUtluaU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-4aKSNE4Z.js";import"./Table-PyHbwIL1.js";import"./index-BpIQk31K.js";import"./Dialog-CK0ThOMi.js";import"./cross-xvFBNCq9.js";import"./svgIconContainer-BRYxzENj.js";import"./useBaseUiId-Pjnp1WCR.js";import"./InternalBackdrop-CS9GDJ0k.js";import"./composite-CVP2vWQr.js";import"./index-YIz0O6eI.js";import"./index-BiB6mgaY.js";import"./index-COS5oq6K.js";import"./useEventCallback-D-w8hKF8.js";import"./SkeletonBar-wEBtoQJI.js";import"./LoadingCell-7gmLP_EL.js";import"./ColumnConfigDialog-CLkIWZFy.js";import"./DraggableList-2ENQuMLR.js";import"./search-CpQHwDsV.js";import"./Input-DP0HZuep.js";import"./useControlled-DZJgL9vi.js";import"./Button-D93TIJdR.js";import"./small-cross-D5AmJrUy.js";import"./ActionButton-CvgtCG2W.js";import"./Checkbox-KLRIxs55.js";import"./useValueChanged-DMuoZqzV.js";import"./CollapsiblePanel-CrlLnisy.js";import"./MultiColumnSortDialog-BTDzGz_3.js";import"./MenuTrigger-B-_LgIM3.js";import"./CompositeItem-BEvI0D6E.js";import"./ToolbarRootContext-AhwQqi4V.js";import"./getDisabledMountTransitionStyles-BIi-_6hn.js";import"./getPseudoElementBounds-CMVTFGwo.js";import"./chevron-down-CD2YsHKM.js";import"./index-UBL3yvSp.js";import"./error-CCJEPyJx.js";import"./BaseCbacBanner-DLUQs4q_.js";import"./makeExternalStore-YYVkatD5.js";import"./Tooltip-Co0onlWy.js";import"./PopoverPopup-BlCB73eB.js";import"./debounce-DZml1LHx.js";import"./useOsdkClient-BWNNp0nW.js";import"./tick-CT2U49RP.js";import"./DropdownField-6GQjb6-H.js";import"./isEqual-ByMEfs2L.js";import"./withOsdkMetrics-BHkoZ0sq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
