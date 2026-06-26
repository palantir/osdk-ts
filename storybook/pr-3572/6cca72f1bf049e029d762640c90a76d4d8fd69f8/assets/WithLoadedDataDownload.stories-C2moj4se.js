import{f as b,j as a,r as i}from"./iframe-D5-_jy09.js";import{O as u}from"./object-table-DC4BzyvF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CgvIWr_I.js";import"./Table-WTwKWCX_.js";import"./index-CLREQx8T.js";import"./Dialog-CCjh6x82.js";import"./cross-B1lOTmXy.js";import"./svgIconContainer-CwIkbtev.js";import"./useBaseUiId-BGyHAtoE.js";import"./InternalBackdrop-ZurCKQUO.js";import"./composite-Boyez49U.js";import"./index-D3tS8aAn.js";import"./index-8XF68AT5.js";import"./index-BNgD58P-.js";import"./useEventCallback-DWqCHkzZ.js";import"./SkeletonBar-B9s5sRXH.js";import"./LoadingCell-Ct8SuL4U.js";import"./ColumnConfigDialog-y2j8YCQg.js";import"./DraggableList-DEWv_3rv.js";import"./Input-pnnIeEBQ.js";import"./useControlled-C-I-tgrJ.js";import"./Button-BnKHRSu3.js";import"./small-cross-BFQssioR.js";import"./ActionButton-C0wSlG3l.js";import"./Checkbox-Da-KHtvX.js";import"./minus-D7YTXURx.js";import"./useValueChanged-DLx0_Fi5.js";import"./caret-down-C5aVhO_4.js";import"./CollapsiblePanel-CZWt383m.js";import"./MultiColumnSortDialog-CQgWGzme.js";import"./MenuTrigger-DVj5irWX.js";import"./CompositeItem-CAERi6bY.js";import"./ToolbarRootContext-Bj02rPEG.js";import"./getDisabledMountTransitionStyles-1kw5ObaN.js";import"./getPseudoElementBounds-6FH5bFCx.js";import"./chevron-down-0uSgH4pO.js";import"./index-D3NB0frZ.js";import"./error-Df9xot2l.js";import"./BaseCbacBanner-AHf4PCIN.js";import"./makeExternalStore-DoIGosWd.js";import"./Tooltip-Bg1ARYik.js";import"./PopoverPopup-DM6VY-Ke.js";import"./toNumber-CcjTYIph.js";import"./useOsdkClient-B3kcJ7B7.js";import"./DropdownField-CuH323m0.js";import"./withOsdkMetrics-BSLSWIkG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
