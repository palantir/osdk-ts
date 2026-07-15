import{f as b,j as a,r as i}from"./iframe-D0J7mvwf.js";import{O as u}from"./object-table-Cau0N0z-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bl-ArobV.js";import"./Table-CyoAegy9.js";import"./index-JCCSuvRf.js";import"./Dialog-CxT4Ps6v.js";import"./cross-5za6xxk1.js";import"./svgIconContainer-EWzEFUVq.js";import"./useBaseUiId-uSeeHaZq.js";import"./InternalBackdrop-BSnAN3hN.js";import"./composite-04wTDi4A.js";import"./index-BUvLHK9q.js";import"./index-B_PUeEtr.js";import"./index-B_ZYQs5I.js";import"./useEventCallback-ZW5Ma2la.js";import"./SkeletonBar-CBROfOAC.js";import"./LoadingCell-CR8vpB0L.js";import"./ColumnConfigDialog-DNEYjoPu.js";import"./DraggableList-CtU9YbWB.js";import"./search-CW-V3zmM.js";import"./Input-TtJujKT2.js";import"./useControlled-Dha8GtVW.js";import"./Button-6l-XGgCt.js";import"./small-cross-DY7MkSNI.js";import"./ActionButton-CW2ScApZ.js";import"./Checkbox-CqAy6ZKP.js";import"./useValueChanged-BwKQgtnf.js";import"./CollapsiblePanel-DEal_KXG.js";import"./MultiColumnSortDialog-DjgzzzXG.js";import"./MenuTrigger-CqlfWa41.js";import"./CompositeItem-BBxqubBV.js";import"./ToolbarRootContext-BEOjFBql.js";import"./getDisabledMountTransitionStyles-zcpZxIbS.js";import"./getPseudoElementBounds-DQ-V3GiK.js";import"./chevron-down-DhY6CzD7.js";import"./index-BVt2qsnI.js";import"./error-TSq0w6FZ.js";import"./BaseCbacBanner-DJ7PNbh-.js";import"./makeExternalStore-BWTJsXcH.js";import"./Tooltip--LL81Yir.js";import"./PopoverPopup-BtFJG_sK.js";import"./toNumber-BxpT86pB.js";import"./useOsdkClient-Cu2eyhWM.js";import"./tick-M7-Osp8C.js";import"./DropdownField-D_VKJ-UW.js";import"./withOsdkMetrics-bp6FdzRh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
