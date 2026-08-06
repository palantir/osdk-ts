import{f as b,j as a,r as i}from"./iframe-DiX2626k.js";import{O as u}from"./object-table-D3gr3Mpc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CgOT8OGd.js";import"./Table-DtbOZWAd.js";import"./index-C_a3B7P8.js";import"./Dialog-D_br3pPB.js";import"./cross-ChthWFmt.js";import"./svgIconContainer-BHXjiRCE.js";import"./useBaseUiId-Dw9BhH-r.js";import"./InternalBackdrop-cTMtjssL.js";import"./composite-BiL7kwGo.js";import"./index-BU1sDqZl.js";import"./index-BN-4XXfM.js";import"./index-DPWlnP4D.js";import"./useEventCallback-CA_JVHJ1.js";import"./SkeletonBar-DSeMrJwC.js";import"./LoadingCell-Bh3S_WfL.js";import"./ColumnConfigDialog-CJtUG27g.js";import"./DraggableList-CZ1MIVA8.js";import"./search-Ch6GmwTu.js";import"./Input-0BqYVGVX.js";import"./useControlled-CxjPKzUJ.js";import"./isEqual-DEKGYxXe.js";import"./isObject-CXcvN3kl.js";import"./Button-DcxIJd10.js";import"./ActionButton-zWukBAep.js";import"./Checkbox-BXFMQuBS.js";import"./useValueChanged-BN-eh1-G.js";import"./CollapsiblePanel-CfY2wZ25.js";import"./MultiColumnSortDialog-CGkw4JOQ.js";import"./MenuTrigger-th41DMhC.js";import"./CompositeItem-ZBpRCkxX.js";import"./ToolbarRootContext-DHdMmgSm.js";import"./getDisabledMountTransitionStyles-DLljnWq6.js";import"./getPseudoElementBounds-BnlTiciN.js";import"./chevron-down-BU7zIy-t.js";import"./index-q-Uvoyav.js";import"./error-BCYvkDQZ.js";import"./BaseCbacBanner-BjACYSVj.js";import"./makeExternalStore-BnR4KHg7.js";import"./Tooltip-BiefMEZh.js";import"./PopoverPopup-B1Yhtsuj.js";import"./toNumber-iY1WLnn2.js";import"./useOsdkClient-5SwITSvW.js";import"./tick-BXKWEd6P.js";import"./DropdownField-7lSUVTV7.js";import"./withOsdkMetrics-D26ty9CF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
