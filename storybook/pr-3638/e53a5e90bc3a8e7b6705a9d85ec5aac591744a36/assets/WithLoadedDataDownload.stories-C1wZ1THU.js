import{f as b,j as a,r as i}from"./iframe-D3GVN_xa.js";import{O as u}from"./object-table-Bol73k5v.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-hn1q1Oc_.js";import"./Table-6_4pVzMb.js";import"./index-Du2n5QFe.js";import"./Dialog-Beh83bn1.js";import"./cross-TBdfKQjD.js";import"./svgIconContainer-CTACS-sh.js";import"./useBaseUiId-BPfzsPcC.js";import"./InternalBackdrop-DRkNEvum.js";import"./composite-BhDt9Oq3.js";import"./index-Dgu5oJ6_.js";import"./index-BGu-opW5.js";import"./index-DlJ37ujC.js";import"./useEventCallback-CXoSUrtf.js";import"./SkeletonBar-BDkfHXue.js";import"./LoadingCell-BrIvQXm4.js";import"./ColumnConfigDialog-B4ZBvlb9.js";import"./DraggableList-CbZX-FOY.js";import"./search-BKNRRqyz.js";import"./Input-DzfXYv_n.js";import"./useControlled-xCemqxSk.js";import"./Button-Bq15im3B.js";import"./small-cross-Diy4Xxbm.js";import"./ActionButton-DQHtMRH9.js";import"./Checkbox-ueshpuip.js";import"./useValueChanged-B8nuWkLV.js";import"./CollapsiblePanel-C1efFxcA.js";import"./MultiColumnSortDialog-Cx8K2C93.js";import"./MenuTrigger-BvqEYF7G.js";import"./CompositeItem-COql2-Hh.js";import"./ToolbarRootContext-BEk3VuK8.js";import"./getDisabledMountTransitionStyles-vURRj64J.js";import"./getPseudoElementBounds-Bd_TvEbw.js";import"./chevron-down-BCeJV8GF.js";import"./index-DAmtkWaU.js";import"./error-DC9uaIIx.js";import"./BaseCbacBanner-DzgYTqUC.js";import"./makeExternalStore-CGt4Tg8e.js";import"./Tooltip-CE1boCJg.js";import"./PopoverPopup-BWKi0GS9.js";import"./toNumber-sgJz6d61.js";import"./useOsdkClient-xObGp8vp.js";import"./tick-DZtpx84s.js";import"./DropdownField-BTzQmaMN.js";import"./withOsdkMetrics-D3VcJmau.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
