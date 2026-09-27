import{f as b,j as a,r as i}from"./iframe-Ced8wIim.js";import{O as u}from"./object-table-CWR5TEG9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BvnlfMzD.js";import"./Table-C9hx4b9U.js";import"./index-DwlP8Kq2.js";import"./Dialog-Bdr_MjQD.js";import"./cross-C1ezeDDh.js";import"./svgIconContainer-_H4YWiIz.js";import"./useBaseUiId-ZzsV-V0Z.js";import"./InternalBackdrop-BEW1kLJE.js";import"./composite-gyhDmABu.js";import"./index-LDJzIvQD.js";import"./index-Cm78izMo.js";import"./index-tRtnayVT.js";import"./useEventCallback-nDEIaijr.js";import"./SkeletonBar-EYFzh_lb.js";import"./LoadingCell-DPDDugg3.js";import"./ColumnConfigDialog-k7B7ez-f.js";import"./DraggableList-BtLLHXzb.js";import"./search-QSUOXDqi.js";import"./Input-KnIMm_iE.js";import"./useControlled-Bx5lxC0c.js";import"./Button-D2RSl0IU.js";import"./small-cross-CL1fxAVq.js";import"./ActionButton-DrbHFVEC.js";import"./Checkbox-DjpZNu9Z.js";import"./useValueChanged-KRQENGkA.js";import"./CollapsiblePanel-CcL0_Of9.js";import"./MultiColumnSortDialog-DqBVCBrx.js";import"./MenuTrigger-CxCj0ZGe.js";import"./CompositeItem-CKE15s8h.js";import"./ToolbarRootContext-BjCMra_B.js";import"./getDisabledMountTransitionStyles-BYykhR9M.js";import"./getPseudoElementBounds-FBWwExr3.js";import"./chevron-down-DpwNucWD.js";import"./index-mKFRvtOv.js";import"./error-yQjggD5T.js";import"./BaseCbacBanner-CNisjaH5.js";import"./makeExternalStore-Cb-8iveq.js";import"./Tooltip-DT2igpMI.js";import"./PopoverPopup-D6vxVy5_.js";import"./debounce-DSdlDxeH.js";import"./useOsdkClient-DWRmKvFn.js";import"./tick-DgJ5ryvj.js";import"./DropdownField-jydwoQac.js";import"./isEqual-pwdPx3XZ.js";import"./withOsdkMetrics-DKNE68LV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
