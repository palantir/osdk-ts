import{f as b,j as a,r as i}from"./iframe-BuOaXUBG.js";import{O as u}from"./object-table-BUlT7Q71.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Byc6zjGJ.js";import"./Table-Bv_bTFWo.js";import"./index-9gX-aKb8.js";import"./Dialog-B05aFGnW.js";import"./cross-BFOHUCmw.js";import"./svgIconContainer-C0AgpTQn.js";import"./useBaseUiId-gWvzXzJi.js";import"./InternalBackdrop-DfIGZEsu.js";import"./composite-DtcJsKmT.js";import"./index-j6_2wF34.js";import"./index-CIq_jtO8.js";import"./index-CynYRU0p.js";import"./useEventCallback-Btn01CTu.js";import"./SkeletonBar-Bxw9lSXE.js";import"./LoadingCell-C5Ix6gB8.js";import"./ColumnConfigDialog-DwBDOKYv.js";import"./DraggableList-DRaaHsfJ.js";import"./search-CXvYB15j.js";import"./Input-DjcXgolR.js";import"./useControlled-CeVnUSmU.js";import"./Button-BfCOyrcS.js";import"./small-cross-BSA0BI5r.js";import"./ActionButton-DHHy6PHj.js";import"./Checkbox-D-laqcrF.js";import"./useValueChanged-DY34WbUf.js";import"./CollapsiblePanel-yKp-M-_H.js";import"./MultiColumnSortDialog-BlpIWzvm.js";import"./MenuTrigger-BcarOHqp.js";import"./CompositeItem-Dn8s-lwK.js";import"./ToolbarRootContext-BufBD7j9.js";import"./getDisabledMountTransitionStyles-CF4UnRDj.js";import"./getPseudoElementBounds-Dz4w-ebU.js";import"./chevron-down-Cf0curwx.js";import"./index-DsbnjtVq.js";import"./error-C3camBiK.js";import"./BaseCbacBanner-BvNZXsp1.js";import"./makeExternalStore-BHbVl8Qy.js";import"./Tooltip-C1X83Fns.js";import"./PopoverPopup-DPS3RmeM.js";import"./toNumber-DM1rC8Zn.js";import"./useOsdkClient-DoOfzZOx.js";import"./tick-Dm7l2Lrj.js";import"./DropdownField-Cejjr8hi.js";import"./withOsdkMetrics-DYOj9Of0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
