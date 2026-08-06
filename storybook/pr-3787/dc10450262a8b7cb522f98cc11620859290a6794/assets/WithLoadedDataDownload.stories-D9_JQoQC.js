import{f as b,j as a,r as i}from"./iframe-BG7t1Vmm.js";import{O as u}from"./object-table-DFpXDM8M.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CP3oW2I4.js";import"./Table--GLSXPLI.js";import"./index-DNP-skbR.js";import"./Dialog-DTrAedIt.js";import"./cross-BgA3bxZe.js";import"./svgIconContainer-DoguVSwu.js";import"./useBaseUiId-wOo7_51r.js";import"./InternalBackdrop-BiHDr4V5.js";import"./composite-DjXoYun8.js";import"./index-D5aAagqo.js";import"./index-LP8SaJdm.js";import"./index-A9LJMqxv.js";import"./useEventCallback-Ch6qzy9f.js";import"./SkeletonBar-D0Pxt7og.js";import"./LoadingCell-Bbt2qYmw.js";import"./ColumnConfigDialog-Cv66BDCK.js";import"./DraggableList-BjjXT586.js";import"./search-DYV4c-c-.js";import"./Input-BtDQA_93.js";import"./useControlled-cqUbBSR9.js";import"./isEqual-wNmYYaDL.js";import"./isObject-CJDIddOi.js";import"./Button-BpJLAHN7.js";import"./ActionButton-Dw8p_eY5.js";import"./Checkbox-CNimbRhQ.js";import"./useValueChanged-C_YCjO-X.js";import"./CollapsiblePanel-FNzStr2Q.js";import"./MultiColumnSortDialog--I9uRdb-.js";import"./MenuTrigger-DfrtwaAO.js";import"./CompositeItem-BOvhxDt7.js";import"./ToolbarRootContext-DHIMXwmc.js";import"./getDisabledMountTransitionStyles-BTLZi8_p.js";import"./getPseudoElementBounds-Dut9ouvk.js";import"./chevron-down-Dlge6__9.js";import"./index-QQ1acmH5.js";import"./error-CU6tir3a.js";import"./BaseCbacBanner-CWaSrEh7.js";import"./makeExternalStore-DKKDnTU0.js";import"./Tooltip-Blfk8emT.js";import"./PopoverPopup-GnZ1840G.js";import"./toNumber-CAT65hVE.js";import"./useOsdkClient-B_eLt-9e.js";import"./tick-By8u8Fyi.js";import"./DropdownField-Bj1ah8mC.js";import"./withOsdkMetrics-DPDNp8Fq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
