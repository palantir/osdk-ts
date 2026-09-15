import{f as b,j as a,r as i}from"./iframe-BYyS3cG-.js";import{O as u}from"./object-table-BdAQglbf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BXbEnpda.js";import"./Table-DdldgeZT.js";import"./index-BXxvc4Z_.js";import"./Dialog-DSUrjl3E.js";import"./cross-K2cagqs8.js";import"./svgIconContainer-Dk59z4vq.js";import"./useBaseUiId-CGKSvxjI.js";import"./InternalBackdrop-80Nj_94O.js";import"./composite-ZjlJlMFO.js";import"./index-D2gKK-6z.js";import"./index-DvCEvxA7.js";import"./index-2l1FSn_M.js";import"./useEventCallback-CVm-QX4M.js";import"./SkeletonBar-BaIiRjVZ.js";import"./LoadingCell-DnoRe_V7.js";import"./ColumnConfigDialog-DbGm1Quk.js";import"./DraggableList-DPCdR4Np.js";import"./search-Can7HIrw.js";import"./Input-C27Z_igv.js";import"./useControlled-Br7xWf3M.js";import"./Button-DO8jDkqh.js";import"./small-cross-j0KzCO-W.js";import"./ActionButton-DudpqNmL.js";import"./Checkbox-Cw0OjqdD.js";import"./useValueChanged-R62FXs_N.js";import"./CollapsiblePanel-74GeumXY.js";import"./MultiColumnSortDialog--YgHyIyy.js";import"./MenuTrigger-gGiqxUYZ.js";import"./CompositeItem-GKFr0mZp.js";import"./ToolbarRootContext-dI5H3gst.js";import"./getDisabledMountTransitionStyles-Dqbr5jIl.js";import"./getPseudoElementBounds-Do85zsEf.js";import"./chevron-down-QowdN_dJ.js";import"./index-Bi1g2iim.js";import"./error-BijATQGq.js";import"./BaseCbacBanner-VgUAaZoc.js";import"./makeExternalStore-DxNQWYP7.js";import"./Tooltip-BB4biWHU.js";import"./PopoverPopup-Zw1VqF60.js";import"./debounce-BSTm8Z6M.js";import"./useOsdkClient-CZiykm71.js";import"./tick-D6fAtfPQ.js";import"./DropdownField-DMszTIIw.js";import"./isEqual-CPsrx-FY.js";import"./withOsdkMetrics-DhZ_7yXB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
