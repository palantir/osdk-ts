import{f as b,j as a,r as i}from"./iframe-RbWuU-Ny.js";import{O as u}from"./object-table-BjKSTkZR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BQSfTAnY.js";import"./Table-lpNEp0wE.js";import"./index-8mgYkofC.js";import"./Dialog-C5eOhz7f.js";import"./cross-DTfrm9mT.js";import"./svgIconContainer-BC8OZ-Bp.js";import"./useBaseUiId-B0-pnvFt.js";import"./InternalBackdrop-BGTH7_oB.js";import"./composite-Au_BPDO-.js";import"./index-DTt_JGmY.js";import"./index-BzXFP0Tm.js";import"./index-Bm0JC4IX.js";import"./useEventCallback-DdMw32SW.js";import"./SkeletonBar-D-dnhMPj.js";import"./LoadingCell-DJ92BbYM.js";import"./ColumnConfigDialog-LuzXgptC.js";import"./DraggableList-CkATbFoI.js";import"./Input-B0Z_XHiX.js";import"./useControlled-BahZzzVl.js";import"./Button-DDneG5w9.js";import"./small-cross-Dm9ubKG9.js";import"./ActionButton-CPeBEI7b.js";import"./Checkbox-B3QfaBHt.js";import"./minus-B9y747D7.js";import"./useValueChanged-DKBmPon8.js";import"./caret-down-Dh4V0ghq.js";import"./CollapsiblePanel-D-xnOiYj.js";import"./MultiColumnSortDialog-BYc4iLyG.js";import"./MenuTrigger-CNgmQGwc.js";import"./CompositeItem-Crgijm42.js";import"./ToolbarRootContext-DlZk8wxY.js";import"./getDisabledMountTransitionStyles-Cj6nY8Ls.js";import"./getPseudoElementBounds-ChRqN95h.js";import"./chevron-down-yVkdmnBr.js";import"./index-DZfkFBsM.js";import"./error-C7pQnthJ.js";import"./BaseCbacBanner-lWqLT5mh.js";import"./makeExternalStore-ZJephQQb.js";import"./Tooltip-Br9SrFqm.js";import"./PopoverPopup-B5vprKjF.js";import"./toNumber-CIHcbnfu.js";import"./useOsdkClient-RJ85swZw.js";import"./DropdownField-CSjw4c0K.js";import"./useShape-Dq3MT2tJ.js";import"./withOsdkMetrics-4DAfqP69.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
