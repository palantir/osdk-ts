import{f as b,j as a,r as i}from"./iframe-B3GwK4s3.js";import{O as u}from"./object-table-CqMZrAxw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DJ-YN-iG.js";import"./Table-Dm2GdYCJ.js";import"./index-Cz6EBUKe.js";import"./Dialog-D94UPfPg.js";import"./cross-DaQTNtqn.js";import"./svgIconContainer-11sW1-xS.js";import"./useBaseUiId-Boj-QUxa.js";import"./InternalBackdrop-DgczOFjl.js";import"./composite-PxQPegKz.js";import"./index-CliIsbDx.js";import"./index-B1tSWc_A.js";import"./index-DPQpupOU.js";import"./useEventCallback-qiaal7tY.js";import"./SkeletonBar-8YAbkJed.js";import"./LoadingCell-C50fSrmY.js";import"./ColumnConfigDialog-C-C3QQuN.js";import"./DraggableList-C0KREyCG.js";import"./search-k6RbeZC_.js";import"./Input-pJTRV29h.js";import"./useControlled-DDUO_V7t.js";import"./Button-jfTE2vPB.js";import"./small-cross-CvbZSduI.js";import"./ActionButton-4vZKcE6j.js";import"./Checkbox-BqwFp9dy.js";import"./useValueChanged-Cqlij2fS.js";import"./CollapsiblePanel-DqUvv6bf.js";import"./MultiColumnSortDialog-DY6Qe2-5.js";import"./MenuTrigger-BAS276W-.js";import"./CompositeItem-Cht7Ot0q.js";import"./ToolbarRootContext-CbqesPbi.js";import"./getDisabledMountTransitionStyles-Du3xy9HP.js";import"./getPseudoElementBounds-nxeKvjir.js";import"./chevron-down-D1x0iG-D.js";import"./index-BCQ5Sf7j.js";import"./error-CaJ_TOjb.js";import"./BaseCbacBanner-DnGnVSrn.js";import"./makeExternalStore-DvtS8XD8.js";import"./Tooltip-BDVpcUa4.js";import"./PopoverPopup-CyAan2V3.js";import"./debounce-BGH6TLhD.js";import"./useOsdkClient-D4VDr9Gn.js";import"./tick-CKHk03q2.js";import"./DropdownField-Cw6DGzxj.js";import"./isEqual-D9n9eSFb.js";import"./withOsdkMetrics-Dzvz1nJj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
