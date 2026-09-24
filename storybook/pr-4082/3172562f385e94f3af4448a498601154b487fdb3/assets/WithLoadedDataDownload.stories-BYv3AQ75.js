import{f as b,j as a,r as i}from"./iframe-CuaBTThM.js";import{O as u}from"./object-table-CdsNOXNH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BgQMGQD9.js";import"./Table-CrGwcl_q.js";import"./index-GgZf0ymo.js";import"./Dialog-BcQj24m7.js";import"./cross-CR1o8CWA.js";import"./svgIconContainer-CzPEr09G.js";import"./useBaseUiId-BS0XPI08.js";import"./InternalBackdrop-Clzk9XeE.js";import"./composite-CR2xOePv.js";import"./index-oUfyUaR2.js";import"./index-CpY0VuZR.js";import"./index-M-I7sgYK.js";import"./useEventCallback-m_NUBECY.js";import"./SkeletonBar-DSN2gcPw.js";import"./LoadingCell-Qolnhcmm.js";import"./ColumnConfigDialog-yePfITsL.js";import"./DraggableList-TOCZNNp5.js";import"./search-D87DQ5KE.js";import"./Input-CPr8OQD6.js";import"./useControlled-BV5LNAXf.js";import"./Button-CkWuBE5W.js";import"./small-cross-BK9Py7ht.js";import"./ActionButton-m1-HZ51Y.js";import"./Checkbox-BijzNCd1.js";import"./useValueChanged-CFw9gLVH.js";import"./CollapsiblePanel-XiNOh9Gj.js";import"./MultiColumnSortDialog-CSlAmV1e.js";import"./MenuTrigger-DLa-uREd.js";import"./CompositeItem-BGC4JuuI.js";import"./ToolbarRootContext-ChhVj2PO.js";import"./getDisabledMountTransitionStyles-CDB_t-dK.js";import"./getPseudoElementBounds-ChIjHzI9.js";import"./chevron-down-Bk4mo7mA.js";import"./index-BsMXAZnQ.js";import"./error-B4mawlQh.js";import"./BaseCbacBanner-DIzV_hl8.js";import"./makeExternalStore-pp23vOCb.js";import"./Tooltip-HTpDMf45.js";import"./PopoverPopup-DCxI2WDv.js";import"./debounce-C6OjGsRu.js";import"./useOsdkClient-jDqaMA4t.js";import"./tick-Dm48v928.js";import"./DropdownField-Es7JKCIb.js";import"./isEqual-B0V4Ry29.js";import"./withOsdkMetrics-DEQltQtw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
