import{f as b,j as a,r as i}from"./iframe-BmXghCn6.js";import{O as u}from"./object-table-D9UpOFZ4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DyEb50hU.js";import"./Table-BvFIt6FA.js";import"./index-CkP1S794.js";import"./Dialog-CcntKMNc.js";import"./cross-1G28DJ34.js";import"./svgIconContainer-CEabMecg.js";import"./useBaseUiId-BFdWkSa3.js";import"./InternalBackdrop-Bsr2VYjE.js";import"./composite-skjDbJuY.js";import"./index-XWjp_9x9.js";import"./index-C8vp91fy.js";import"./index-N47VdsYc.js";import"./useEventCallback-9K-ZHZHx.js";import"./SkeletonBar-BTg5UwSJ.js";import"./LoadingCell-BmVyf-pJ.js";import"./ColumnConfigDialog-cwJr_Bnc.js";import"./DraggableList-DToiNID5.js";import"./search-DYe5GpMI.js";import"./Input-D8XP268p.js";import"./useControlled-BKLzfLUK.js";import"./Button-Cs6CA2sl.js";import"./small-cross-CqK4fWdL.js";import"./ActionButton-CYwjsF9h.js";import"./Checkbox-BaarIBkE.js";import"./useValueChanged-DZMD6Hgy.js";import"./CollapsiblePanel-7FaH6Awn.js";import"./MultiColumnSortDialog-WSTGwkQu.js";import"./MenuTrigger-B5AdCMJX.js";import"./CompositeItem-Kpz015F9.js";import"./ToolbarRootContext-Bv4KJP5T.js";import"./getDisabledMountTransitionStyles-jOX9CoCu.js";import"./getPseudoElementBounds-BJaYajaT.js";import"./chevron-down-BKWNxeex.js";import"./index-Bl1gUBDd.js";import"./error-8I9DfYjI.js";import"./BaseCbacBanner-BjBp6vIF.js";import"./makeExternalStore-D8WVbSgH.js";import"./Tooltip-Dsq7FhXV.js";import"./PopoverPopup-MW8o7zfB.js";import"./debounce-3vdrVhMQ.js";import"./useOsdkClient-BSpvxK_2.js";import"./tick-DmjFFyYl.js";import"./DropdownField-BVMUqHL9.js";import"./isEqual-CoPM5EwX.js";import"./withOsdkMetrics-BALE--sz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
