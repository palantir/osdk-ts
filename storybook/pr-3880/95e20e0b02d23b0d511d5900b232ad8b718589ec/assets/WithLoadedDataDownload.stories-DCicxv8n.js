import{f as b,j as a,r as i}from"./iframe-BiXi4-LQ.js";import{O as u}from"./object-table-BoM_3lLC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-yAegVG8x.js";import"./Table-BTrcdefb.js";import"./index-BrYb8iNp.js";import"./Dialog-CWqgEav3.js";import"./cross-D3R_Vc26.js";import"./svgIconContainer-DZPF1Vn6.js";import"./useBaseUiId-Ck_ISxlB.js";import"./InternalBackdrop-ChM2iaMT.js";import"./composite-CLFfo09d.js";import"./index-M3K30U7J.js";import"./index-DWweQBbd.js";import"./index-CSGf5OT9.js";import"./useEventCallback-CnLANeXS.js";import"./SkeletonBar-8k7TXRww.js";import"./LoadingCell-DydKhr1j.js";import"./ColumnConfigDialog-DL0dwxW0.js";import"./DraggableList-C9qm1CxU.js";import"./search-BptKOPUi.js";import"./Input-7j2qVm5H.js";import"./useControlled-c9kxJqxt.js";import"./Button-XL1kbTRa.js";import"./small-cross-DPmm3wJY.js";import"./ActionButton-BmQgn66c.js";import"./Checkbox-DoVKPerL.js";import"./useValueChanged-0cXF6J1G.js";import"./CollapsiblePanel-LOJt-gO8.js";import"./MultiColumnSortDialog-AmSNJAjI.js";import"./MenuTrigger-DA9yrfWI.js";import"./CompositeItem-BXqEZ6rt.js";import"./ToolbarRootContext-BQjlRsif.js";import"./getDisabledMountTransitionStyles-DJOTEwhN.js";import"./getPseudoElementBounds-CPcGbPee.js";import"./chevron-down-ClJPVsRO.js";import"./index-CCDXSv--.js";import"./error-D3sbkdzM.js";import"./BaseCbacBanner-AgCr4pEU.js";import"./makeExternalStore-DC5BX6mU.js";import"./Tooltip-BD26QkYH.js";import"./PopoverPopup-Duw-fJrv.js";import"./debounce-BmMSNYoi.js";import"./useOsdkClient-Bnu-sLDc.js";import"./tick-BDqjzO-F.js";import"./DropdownField-DOCpdzo4.js";import"./isEqual-D4gaMX9z.js";import"./withOsdkMetrics-DsR7pBBW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
