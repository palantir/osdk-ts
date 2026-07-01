import{f as b,j as a,r as i}from"./iframe-BBjxdfoH.js";import{O as u}from"./object-table-BWD-ICNt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-mCdvOkgg.js";import"./Table-BLYakq2D.js";import"./index-CXpfL-al.js";import"./Dialog-aOGCys_7.js";import"./cross-BpOK24Em.js";import"./svgIconContainer-Dl_6Ak-k.js";import"./useBaseUiId-CODNe0dC.js";import"./InternalBackdrop-COi04poT.js";import"./composite-Q-RZA8KT.js";import"./index-CktCWn9i.js";import"./index-GmPMBlgy.js";import"./index-B9n9mIA_.js";import"./useEventCallback-BumJ118x.js";import"./SkeletonBar-B_x223BN.js";import"./LoadingCell-94t37gwD.js";import"./ColumnConfigDialog-DRp4LgeI.js";import"./DraggableList-oUXBlL9u.js";import"./search-B9-C2B7m.js";import"./Input-slapFlw6.js";import"./useControlled-CWLh4UCS.js";import"./Button-CMQoOM5E.js";import"./small-cross-CSFuBdIK.js";import"./ActionButton-BLDpWw5V.js";import"./Checkbox-Dmy2rqbu.js";import"./minus-BeRbPymu.js";import"./tick-YpPEocQb.js";import"./useValueChanged-CeZGFBSw.js";import"./caret-down-Bg6Ma-df.js";import"./CollapsiblePanel-BMdBXdhN.js";import"./MultiColumnSortDialog-CTw9PRjN.js";import"./MenuTrigger-Cucf9fiM.js";import"./CompositeItem-F2YNVfIG.js";import"./ToolbarRootContext-vxBZ3l3m.js";import"./getDisabledMountTransitionStyles-CvBJvZzS.js";import"./getPseudoElementBounds-4wLic3W8.js";import"./chevron-down-BJj78C4_.js";import"./index-B96dIsgt.js";import"./error-D35UHXxk.js";import"./BaseCbacBanner-D8zJeVPA.js";import"./makeExternalStore-CL5NyPse.js";import"./Tooltip-BLMNRTXo.js";import"./PopoverPopup-BJpNBWEw.js";import"./toNumber-yEtr79zj.js";import"./useOsdkClient-DeRm3bRL.js";import"./DropdownField-D6DbAw6R.js";import"./withOsdkMetrics-Q-YLxusW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
