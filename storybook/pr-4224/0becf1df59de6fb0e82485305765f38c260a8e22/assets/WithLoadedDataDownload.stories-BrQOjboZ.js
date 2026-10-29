import{f as b,j as a,r as i}from"./iframe-civNld3i.js";import{O as u}from"./object-table-BkNygl9T.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DGob3pd3.js";import"./Table-D3QmnDSd.js";import"./index-Bkk9aIG7.js";import"./Dialog-Veq-I3ha.js";import"./cross-Bl6bAFo8.js";import"./svgIconContainer-Cbt7mtvH.js";import"./useBaseUiId-DfebwqrC.js";import"./InternalBackdrop-BDeg4tmF.js";import"./composite-C8tN05lQ.js";import"./index-BcfoxrgG.js";import"./index-C2RAlQU3.js";import"./index-BU14isbu.js";import"./useEventCallback-BbngQcPL.js";import"./SkeletonBar-ePOHNcXa.js";import"./LoadingCell-DBRxFXJW.js";import"./ColumnConfigDialog-B23L06qv.js";import"./DraggableList-Byy1kqEA.js";import"./search-ulrdH098.js";import"./Input-CzHf5EpN.js";import"./useControlled-DSRlTv1D.js";import"./Button-_66b78aL.js";import"./small-cross-DpA5lC9j.js";import"./ActionButton-D27VwrOt.js";import"./Checkbox-ONjswOP3.js";import"./useValueChanged-BjzJCsWw.js";import"./CollapsiblePanel--7f6zkon.js";import"./MultiColumnSortDialog-DB-aGVTk.js";import"./MenuTrigger-DsBkVnjM.js";import"./CompositeItem-CyFsxOTP.js";import"./ToolbarRootContext-CpIc7UTm.js";import"./getDisabledMountTransitionStyles-CoXeXbxe.js";import"./getPseudoElementBounds-BeYCQidE.js";import"./chevron-down-Cc8MdjVP.js";import"./index-Bz_nIjTo.js";import"./error-9MfXm3EE.js";import"./BaseCbacBanner-RPuZIvbI.js";import"./makeExternalStore-2tdSo-BF.js";import"./Tooltip-BBz15K44.js";import"./PopoverPopup-mFug3adh.js";import"./debounce-_kg4QHxF.js";import"./useOsdkClient-CDLe6B2D.js";import"./tick-wP3FdKpg.js";import"./DropdownField-C-J6dPze.js";import"./isEqual-CzH2I0wQ.js";import"./withOsdkMetrics-VkQ2PjHN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
