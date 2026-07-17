import{f as b,j as a,r as i}from"./iframe-DYnAafHC.js";import{O as u}from"./object-table-Di1JEOrz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DxzTJo3W.js";import"./Table-D9coRyNK.js";import"./index-BVBrlxI_.js";import"./Dialog-BuOEnKCb.js";import"./cross-wz_XfbtT.js";import"./svgIconContainer-B6xn5S7Z.js";import"./useBaseUiId-C30UVm3u.js";import"./InternalBackdrop-_jCpyAQQ.js";import"./composite-DvSsc2iv.js";import"./index-DRLt0VWN.js";import"./index-Bg-fPd7k.js";import"./index-CurmKf7E.js";import"./useEventCallback-BB-iFnZ7.js";import"./SkeletonBar-DG9xpAVj.js";import"./LoadingCell-CC9AvzKG.js";import"./ColumnConfigDialog-4dRT1Ljv.js";import"./DraggableList-giVtIujx.js";import"./search-DYOcRf0h.js";import"./Input-p8qmxPVX.js";import"./useControlled-D5p76dJm.js";import"./Button-ChSbeVDk.js";import"./small-cross-IC35-HcE.js";import"./ActionButton-BKunTr0_.js";import"./Checkbox-BhdN81HQ.js";import"./useValueChanged-BZ0OTvnQ.js";import"./CollapsiblePanel-BivIIKlJ.js";import"./MultiColumnSortDialog-D556NEeD.js";import"./MenuTrigger-CWvDOQk6.js";import"./CompositeItem-C15RAxHz.js";import"./ToolbarRootContext-1tPnZKjL.js";import"./getDisabledMountTransitionStyles-BV8MTAqu.js";import"./getPseudoElementBounds-vjqlx92n.js";import"./chevron-down-DaZ61-db.js";import"./index-BgaFvTkb.js";import"./error-B1scN5MD.js";import"./BaseCbacBanner-C3GBbYTn.js";import"./makeExternalStore-DRaP3Ol2.js";import"./Tooltip-hXN1CV7X.js";import"./PopoverPopup-BLg6IJl7.js";import"./toNumber-C_36ykUr.js";import"./useOsdkClient-C8tudZEX.js";import"./tick-Bd-53SJj.js";import"./DropdownField-Bwg4ozql.js";import"./withOsdkMetrics-CYwW5Ya9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
