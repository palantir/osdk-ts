import{f as b,j as a,r as i}from"./iframe-rlv3mUdt.js";import{O as u}from"./object-table-COoiKLv3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C8E9pHov.js";import"./Table-C05mHoNZ.js";import"./index-BwKgkhoJ.js";import"./Dialog-B2IC515a.js";import"./cross-cAPyHYLw.js";import"./svgIconContainer-BR20IK9W.js";import"./useBaseUiId-Dp7FKVfu.js";import"./InternalBackdrop-BVk7F7mw.js";import"./composite-cntM3euM.js";import"./index-DJ9-JExy.js";import"./index-BUfObnx_.js";import"./index-D6BXegGx.js";import"./useEventCallback-BFMrrB-m.js";import"./SkeletonBar-CBQRqDjl.js";import"./LoadingCell-vM5EQXcf.js";import"./ColumnConfigDialog-BKrlOu4J.js";import"./DraggableList-DaCSV-rj.js";import"./search-B6WH-E2J.js";import"./Input-DPtkjq4w.js";import"./useControlled-CsmgIjgz.js";import"./Button-DOX6KGuK.js";import"./small-cross-DtUNssPx.js";import"./ActionButton-fANDhFNh.js";import"./Checkbox-D4z1W9S5.js";import"./useValueChanged-BVFeiYrm.js";import"./CollapsiblePanel-DvRmCPuz.js";import"./MultiColumnSortDialog-DJAQcPH0.js";import"./MenuTrigger-zjnZIaoC.js";import"./CompositeItem-BwBfuGb4.js";import"./ToolbarRootContext-Dj6pA1B5.js";import"./getDisabledMountTransitionStyles-CKZngXvA.js";import"./getPseudoElementBounds-DBZ1MDoi.js";import"./chevron-down-ByAn-ifv.js";import"./index-Bj0ChkFd.js";import"./error-D3VLZxq_.js";import"./BaseCbacBanner-Cy5SHU8y.js";import"./makeExternalStore-B2qXKEyL.js";import"./Tooltip-DF5SsG7G.js";import"./PopoverPopup-CZ1Ki-Oj.js";import"./debounce-H1Lzwb9c.js";import"./useOsdkClient-2HxN2tp2.js";import"./tick-D7E73dGL.js";import"./DropdownField-pYTN63rb.js";import"./isEqual-ua0Q190L.js";import"./withOsdkMetrics-Bay5Qfh_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
