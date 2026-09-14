import{f as b,j as a,r as i}from"./iframe-2Mr1t1V8.js";import{O as u}from"./object-table-Dff2vKVF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C_t9encF.js";import"./Table-DFubCc9q.js";import"./index-4lXnLG4B.js";import"./Dialog-CvvM78Yd.js";import"./cross-BRuFKM6t.js";import"./svgIconContainer-tMp-Mvzu.js";import"./useBaseUiId-k8zppgsU.js";import"./InternalBackdrop-qRL7WfZ9.js";import"./composite-DgP8pe-I.js";import"./index-5aB3LLsM.js";import"./index-CkMbtK8j.js";import"./index-BLky91mi.js";import"./useEventCallback-CP27jd0B.js";import"./SkeletonBar-BChVdeQ9.js";import"./LoadingCell-BcFGvW2n.js";import"./ColumnConfigDialog-J50UmXTQ.js";import"./DraggableList-BMMwdptn.js";import"./search-ysbzXeyh.js";import"./Input-BAjujx0C.js";import"./useControlled-BcBqikwr.js";import"./Button-C2c9HqHX.js";import"./small-cross-KP2o4lIf.js";import"./ActionButton-C7GEwUg1.js";import"./Checkbox-BjD1qVP8.js";import"./useValueChanged-DDLB8duD.js";import"./CollapsiblePanel-B4xPmd-G.js";import"./MultiColumnSortDialog-DzFIzDAv.js";import"./MenuTrigger-CYPXcTFc.js";import"./CompositeItem-C0DzT1s7.js";import"./ToolbarRootContext-BbL0J01R.js";import"./getDisabledMountTransitionStyles-QB61HrKH.js";import"./getPseudoElementBounds-DgqbZcO_.js";import"./chevron-down-DjlK2aIq.js";import"./index-C4bdzjhC.js";import"./error-ppckuRwj.js";import"./BaseCbacBanner-GDqo53YU.js";import"./makeExternalStore-B8Qdlr-8.js";import"./Tooltip-DliQMsoz.js";import"./PopoverPopup-CBvVWdt_.js";import"./debounce-Bx6R5QNY.js";import"./useOsdkClient-C22dfEiD.js";import"./tick-raGklPjk.js";import"./DropdownField-BgK_Iadc.js";import"./isEqual-6F4w8SEB.js";import"./withOsdkMetrics-IIt9i7U1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
