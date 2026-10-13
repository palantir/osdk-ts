import{f as b,j as a,r as i}from"./iframe-BLF6zRqG.js";import{O as u}from"./object-table-C0cdKhB3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BDaxV4R2.js";import"./Table-CeE5JrDd.js";import"./index-BLFrbzvg.js";import"./Dialog-n73yCmVX.js";import"./cross-BA9FjJ9G.js";import"./svgIconContainer-B1hh76l8.js";import"./useBaseUiId-Zjs0lNV0.js";import"./InternalBackdrop-CyIeJrcr.js";import"./composite-CcKV35Kr.js";import"./index-CLYhFphF.js";import"./index-ByFfno_8.js";import"./index-Bl_HIsRn.js";import"./useEventCallback-DH0i-Vx2.js";import"./SkeletonBar-C1CYbmJA.js";import"./LoadingCell-Cm0bxSxn.js";import"./ColumnConfigDialog-BTqcioDF.js";import"./DraggableList-CsjHVdfB.js";import"./search-9jU6Q1us.js";import"./Input-CCDmeNBI.js";import"./useControlled-CoQlBX4R.js";import"./Button-9qWiKKY-.js";import"./small-cross-BqECmGEj.js";import"./ActionButton-DbZE13mN.js";import"./Checkbox-Bu0FH9eh.js";import"./useValueChanged-BKw1I0EK.js";import"./CollapsiblePanel-Dda8YuQy.js";import"./MultiColumnSortDialog-C9HqTSZt.js";import"./MenuTrigger-XxylOScL.js";import"./CompositeItem-DtwY3yqS.js";import"./ToolbarRootContext-2-p_DBQP.js";import"./getDisabledMountTransitionStyles-ARetRnAA.js";import"./getPseudoElementBounds-4DmUh_rK.js";import"./chevron-down-D3B34KT6.js";import"./index-ccXt1NIS.js";import"./error-CBG8l0PN.js";import"./BaseCbacBanner-Bxx3iju9.js";import"./makeExternalStore-GX9DdVy4.js";import"./Tooltip-8Jei4W6Q.js";import"./PopoverPopup-B7UZBa1s.js";import"./debounce-B91OJyBP.js";import"./useOsdkClient-1axdfMxV.js";import"./tick-28tjcfUj.js";import"./DropdownField-D-l1iVFe.js";import"./isEqual-DXHdtgab.js";import"./withOsdkMetrics-CRvkKsTN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
