import{f as b,j as a,r as i}from"./iframe-BOYw5zy-.js";import{O as u}from"./object-table-D81tTWvf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-rlM1gbkG.js";import"./Table-DL2T0EZB.js";import"./index-BiLXe7b8.js";import"./Dialog-DIZILVPE.js";import"./cross-CsFY0Vd9.js";import"./svgIconContainer-DR1S8Glm.js";import"./useBaseUiId-BaQZ9H47.js";import"./InternalBackdrop-jHkma8F_.js";import"./composite-B4RYJvOx.js";import"./index-DJ2EryKw.js";import"./index-0lKohxv1.js";import"./index-iucmux4F.js";import"./useEventCallback-2k-8oajA.js";import"./SkeletonBar-CGMO35AQ.js";import"./LoadingCell-CmuJvP6e.js";import"./ColumnConfigDialog-BS8J0jq7.js";import"./DraggableList-DvXNu-Bu.js";import"./search-BTWV523N.js";import"./Input-D2kKGhXI.js";import"./useControlled-jWAlfo7U.js";import"./Button-WZTUEUss.js";import"./small-cross-Bl3dZfTj.js";import"./ActionButton-BqxdywPW.js";import"./Checkbox-CqZpR2LE.js";import"./useValueChanged-DibL0JTX.js";import"./CollapsiblePanel-C3WjnvDq.js";import"./MultiColumnSortDialog-BHScrzXj.js";import"./MenuTrigger-DTKkTg9R.js";import"./CompositeItem-CFBGvBu5.js";import"./ToolbarRootContext-po-fYSto.js";import"./getDisabledMountTransitionStyles-BgyDuN12.js";import"./getPseudoElementBounds-lvyQN2rY.js";import"./chevron-down-D_OtGuxk.js";import"./index-BKNNKL9I.js";import"./error-1JPgoJzQ.js";import"./BaseCbacBanner-CkMD_K2_.js";import"./makeExternalStore-BH853qpO.js";import"./Tooltip-D-uoAdky.js";import"./PopoverPopup-DO5EffCW.js";import"./debounce-DDF3v6y6.js";import"./useOsdkClient-r4YoKJoo.js";import"./tick-DAhMGnUy.js";import"./DropdownField-cmZfnDUJ.js";import"./isEqual-CU0W-K1Y.js";import"./withOsdkMetrics-BaHbUuYM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
