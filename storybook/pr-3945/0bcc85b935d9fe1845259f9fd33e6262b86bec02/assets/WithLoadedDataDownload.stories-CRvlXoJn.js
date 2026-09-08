import{f as b,j as a,r as i}from"./iframe-zJLPhxDK.js";import{O as u}from"./object-table-Cp_r17tu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-GdadUrm9.js";import"./Table-D8q83Fop.js";import"./index-vZmbqUi_.js";import"./Dialog-BJTpqgdP.js";import"./cross-CmuzwVFc.js";import"./svgIconContainer-17tBJAuz.js";import"./useBaseUiId-J532w0x8.js";import"./InternalBackdrop-DYym0q9C.js";import"./composite-CNMHWwCZ.js";import"./index-CDChpdVQ.js";import"./index-CPu2nGpB.js";import"./index-CjB3uV7l.js";import"./useEventCallback-CBonnidZ.js";import"./SkeletonBar-BB2sdYKt.js";import"./LoadingCell-BWSietrN.js";import"./ColumnConfigDialog-BMfkiHBt.js";import"./DraggableList-DkEAjvno.js";import"./search-Bw5FPkB2.js";import"./Input-DZwpfTHR.js";import"./useControlled-CczBvYjn.js";import"./Button-DBmBk1R0.js";import"./small-cross-CPIIsUu1.js";import"./ActionButton-DFDnceTv.js";import"./Checkbox-CsH-jZZw.js";import"./useValueChanged-C-tMKNKt.js";import"./CollapsiblePanel-8-MkrIjK.js";import"./MultiColumnSortDialog-D-a7nSC7.js";import"./MenuTrigger-C7PFgrEd.js";import"./CompositeItem-BJ5z2a5g.js";import"./ToolbarRootContext-BZVYMUxs.js";import"./getDisabledMountTransitionStyles-CLhsnKXl.js";import"./getPseudoElementBounds-B6OAxxYX.js";import"./chevron-down-Bpi62_qF.js";import"./index-C3FdRyLS.js";import"./error-CbniACzb.js";import"./BaseCbacBanner-BqucRKS0.js";import"./makeExternalStore-BwWr7KGq.js";import"./Tooltip-DPh4VI-S.js";import"./PopoverPopup-BppR1H6u.js";import"./debounce-mJk9aS5I.js";import"./useOsdkClient-C-E3sQun.js";import"./tick-BImD79hT.js";import"./DropdownField-C-INYeTI.js";import"./isEqual-CkRnhV_Y.js";import"./withOsdkMetrics-Bw_72zWT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
