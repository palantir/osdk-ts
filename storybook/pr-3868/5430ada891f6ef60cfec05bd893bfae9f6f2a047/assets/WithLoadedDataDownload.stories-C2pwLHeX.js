import{f as b,j as a,r as i}from"./iframe-DqI30U40.js";import{O as u}from"./object-table-B1_8GYdb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-lMu0note.js";import"./Table-BDbaMdbF.js";import"./index-C4ZwlQTR.js";import"./Dialog-D4nBLPeY.js";import"./cross-kpf8tVcy.js";import"./svgIconContainer-C-3DfKaO.js";import"./useBaseUiId-C0PciSz-.js";import"./InternalBackdrop-D93Bx3v4.js";import"./composite-C615e4nX.js";import"./index-tM4--8t5.js";import"./index-CEfGdJuZ.js";import"./index-CGBGp2pr.js";import"./useEventCallback-C1xsdjHG.js";import"./SkeletonBar-DoxEvTvN.js";import"./LoadingCell-SVVQXaab.js";import"./ColumnConfigDialog-BdWgKRTk.js";import"./DraggableList-yUQgxfAN.js";import"./search-DDH0C-qs.js";import"./Input-DI7Qw37x.js";import"./useControlled-BwDcV046.js";import"./Button-Dn7tfqeo.js";import"./small-cross-Cp6l1H5C.js";import"./ActionButton-C5eAcEvp.js";import"./Checkbox-Ce3zhzUG.js";import"./useValueChanged-JZGlsFUC.js";import"./CollapsiblePanel-C6cWpr6n.js";import"./MultiColumnSortDialog-BNoo4NZX.js";import"./MenuTrigger-Bbyybeuq.js";import"./CompositeItem-BGXf_W0J.js";import"./ToolbarRootContext-1u8sCZzb.js";import"./getDisabledMountTransitionStyles-eoteFY6q.js";import"./getPseudoElementBounds-CWQ_40e-.js";import"./chevron-down-BZP6l7fc.js";import"./index-KjlsTGzF.js";import"./error-C07e4O30.js";import"./BaseCbacBanner-DA_zZ8Ib.js";import"./makeExternalStore-BVsnNdhZ.js";import"./Tooltip-CQrR_JUz.js";import"./PopoverPopup-3qjFyVCX.js";import"./debounce-B7eS6c4J.js";import"./useOsdkClient-DzUx0jrK.js";import"./tick-D1qxloEX.js";import"./DropdownField-DEIBuHuo.js";import"./isEqual-Wum-O1de.js";import"./withOsdkMetrics-vCc5CCLF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
