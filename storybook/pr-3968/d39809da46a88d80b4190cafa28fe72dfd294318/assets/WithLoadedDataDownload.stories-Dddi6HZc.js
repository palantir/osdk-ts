import{f as b,j as a,r as i}from"./iframe-DTTRhbjz.js";import{O as u}from"./object-table-CSCzKFD6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DZ8L_H7u.js";import"./Table-CpecjfT5.js";import"./index-CUoqkEXP.js";import"./Dialog-BfK58nrJ.js";import"./cross-DxV9JdK2.js";import"./svgIconContainer-B_ocSrmO.js";import"./useBaseUiId-BmoDTCf9.js";import"./InternalBackdrop-rtSS2ycu.js";import"./composite-oJZ0BVll.js";import"./index-zn7h2p8a.js";import"./index-V6cd4RX1.js";import"./index-Dcu6sCXm.js";import"./useEventCallback-BtfkEBd9.js";import"./SkeletonBar-DXkSeF2t.js";import"./LoadingCell-y1Zb8CB1.js";import"./ColumnConfigDialog-FvnOSS5M.js";import"./DraggableList-DPKzfUhR.js";import"./search-B7jXOPcp.js";import"./Input-qArtebK8.js";import"./useControlled-hxzK8_TE.js";import"./Button-C9Wmar6u.js";import"./small-cross-DLGahr5f.js";import"./ActionButton-B-CndYNu.js";import"./Checkbox-Ci3x7wul.js";import"./useValueChanged-DtuqEhdD.js";import"./CollapsiblePanel-CUxqdNXN.js";import"./MultiColumnSortDialog-BiM6tuW7.js";import"./MenuTrigger-BNlJoVy-.js";import"./CompositeItem-CyxD93o0.js";import"./ToolbarRootContext-C0tIZT9m.js";import"./getDisabledMountTransitionStyles-B_CQ4ePe.js";import"./getPseudoElementBounds-CTJoaJ_q.js";import"./chevron-down-tY3lDuMM.js";import"./index-VjiLdOhj.js";import"./error-DVsJjH4l.js";import"./BaseCbacBanner-D6FC6U4k.js";import"./makeExternalStore-DSiAtSgU.js";import"./Tooltip-F2Jve4L0.js";import"./PopoverPopup-CYgRzRPM.js";import"./debounce-Cx_WnQAf.js";import"./useOsdkClient-DbJUAzjP.js";import"./tick-CM5fRMiT.js";import"./DropdownField-ZTNTLS3m.js";import"./isEqual-BSqo0_8f.js";import"./withOsdkMetrics-Bai-2IUn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
