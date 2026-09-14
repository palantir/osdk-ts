import{f as b,j as a,r as i}from"./iframe-D3x4g0gw.js";import{O as u}from"./object-table-BJWR7mZ5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DpKiFXQE.js";import"./Table-gtzT0OA8.js";import"./index-DmJVhxkC.js";import"./Dialog-BL0eiG9o.js";import"./cross-noZD8yCQ.js";import"./svgIconContainer-Ch07AZiN.js";import"./useBaseUiId-Cza7NB65.js";import"./InternalBackdrop-DRfabTHE.js";import"./composite-CbVzOtkL.js";import"./index-BFwtMTR7.js";import"./index-CHX_y3YQ.js";import"./index-BM_v9pt3.js";import"./useEventCallback-DKxR4GSB.js";import"./SkeletonBar-BBCGvtlx.js";import"./LoadingCell-BkcsG2ev.js";import"./ColumnConfigDialog-CIdTSppo.js";import"./DraggableList-B2z6Jhre.js";import"./search-Vpq8vYa6.js";import"./Input-D7XVlSnc.js";import"./useControlled-u8Kd9MbQ.js";import"./Button-waIQuOK_.js";import"./small-cross-DojPJSHV.js";import"./ActionButton-D4pNdjo7.js";import"./Checkbox-SAzgd6A3.js";import"./useValueChanged-Cm3ghXGz.js";import"./CollapsiblePanel-MtWIBxII.js";import"./MultiColumnSortDialog-CX94El7z.js";import"./MenuTrigger-D4FrUD7q.js";import"./CompositeItem-C81j0gfv.js";import"./ToolbarRootContext-D-JTlGY6.js";import"./getDisabledMountTransitionStyles-BDg7WwLA.js";import"./getPseudoElementBounds-m4kZMHaS.js";import"./chevron-down-F1u7ETIP.js";import"./index-CdtIJVqT.js";import"./error-EOjqK743.js";import"./BaseCbacBanner-CAxpfmC5.js";import"./makeExternalStore-B-EBN1-5.js";import"./Tooltip-Cny1QPUK.js";import"./PopoverPopup-BJayu4w5.js";import"./debounce-Dgw7wFze.js";import"./useOsdkClient-CcBCF4jU.js";import"./tick-E3YA_PC9.js";import"./DropdownField-BTbdugIo.js";import"./isEqual-DdD0roBe.js";import"./withOsdkMetrics-q2ysVhnq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
