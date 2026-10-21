import{f as b,j as a,r as i}from"./iframe-D_14QzXp.js";import{O as u}from"./object-table-BtmbLVpt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-COqd9mn5.js";import"./Table-IAu-PnGJ.js";import"./index-dgvA8TZ9.js";import"./Dialog-BDUhGb5s.js";import"./cross-CugZ9ecx.js";import"./svgIconContainer-DLS8mbZw.js";import"./useBaseUiId-CG8eOpE9.js";import"./InternalBackdrop-BYhYbM2Q.js";import"./composite-DPicY4x_.js";import"./index-Df1oZaSN.js";import"./index-Ccw16ZEo.js";import"./index-DHYIK6M_.js";import"./useEventCallback-DVpXlI6n.js";import"./SkeletonBar-CWcGqnRh.js";import"./LoadingCell-DYsyGVFb.js";import"./ColumnConfigDialog-Cnvh6W73.js";import"./DraggableList-BJFxTU3e.js";import"./search-kgDQ-7P8.js";import"./Input-DorH3bhS.js";import"./useControlled-DcIpQ5so.js";import"./Button-emDgWZB-.js";import"./small-cross-65_SY4Sp.js";import"./ActionButton-sw6PFJQG.js";import"./Checkbox-B6c6b4Z_.js";import"./useValueChanged-CZIdWuf_.js";import"./CollapsiblePanel-Dti1PGZr.js";import"./MultiColumnSortDialog-BfsZdYZC.js";import"./MenuTrigger-BTjSaEik.js";import"./CompositeItem-CEQFfLmp.js";import"./ToolbarRootContext-q675nIs9.js";import"./getDisabledMountTransitionStyles-BCowyj6U.js";import"./getPseudoElementBounds-Cxr1AJsy.js";import"./chevron-down-0GDoiAFe.js";import"./index-DY8cgXE9.js";import"./error-3iJhsGJG.js";import"./BaseCbacBanner-CaUloZOx.js";import"./makeExternalStore-C2nXARRC.js";import"./Tooltip-BhEyvTdz.js";import"./PopoverPopup-Bl0qtEmP.js";import"./debounce-B9L9eTna.js";import"./useOsdkClient-8tDFdRkv.js";import"./tick-fofCPZ0i.js";import"./DropdownField-BNL5kW_g.js";import"./isEqual-Diit75gH.js";import"./withOsdkMetrics-CCrpbMke.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
