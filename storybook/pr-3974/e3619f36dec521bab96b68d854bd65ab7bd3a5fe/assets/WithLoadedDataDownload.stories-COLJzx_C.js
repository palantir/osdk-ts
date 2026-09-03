import{f as b,j as a,r as i}from"./iframe-D3l12Tr-.js";import{O as u}from"./object-table-nod7Wt-p.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-PcHol1Ue.js";import"./Table-CyeovwFu.js";import"./index-BPiZlFJR.js";import"./Dialog-GF5Yno-p.js";import"./cross-C3J0WO3R.js";import"./svgIconContainer-CrW6rOVr.js";import"./useBaseUiId-BNJrpCWm.js";import"./InternalBackdrop-ziShhlZl.js";import"./composite-CuNBJcuu.js";import"./index-3OzYw8WP.js";import"./index-D9TP-Dik.js";import"./index-iaCxRYSZ.js";import"./useEventCallback-BeRbrn2J.js";import"./SkeletonBar-DjZej6tn.js";import"./LoadingCell-CjWQnUcs.js";import"./ColumnConfigDialog-DY6HW5pi.js";import"./DraggableList-ZYKcWFuZ.js";import"./search-CdpCaKTD.js";import"./Input-BOpnVUAt.js";import"./useControlled-DWcGrjw6.js";import"./Button-DSLUEzYm.js";import"./small-cross-BCEWKAxW.js";import"./ActionButton-DCUde49g.js";import"./Checkbox-Hfm8jSI2.js";import"./useValueChanged-CBUdNBJG.js";import"./CollapsiblePanel-Dm9vP2Y3.js";import"./MultiColumnSortDialog-B5g7AoHm.js";import"./MenuTrigger-DJMPc6Ab.js";import"./CompositeItem-BQJ1FDQm.js";import"./ToolbarRootContext-DbokOTWe.js";import"./getDisabledMountTransitionStyles-DsE80_5m.js";import"./getPseudoElementBounds-D46F0KDp.js";import"./chevron-down-C6Fq88S4.js";import"./index-ChSzKfO9.js";import"./error-CKivbg2c.js";import"./BaseCbacBanner-CP6kabxU.js";import"./makeExternalStore-CvkBuVLJ.js";import"./Tooltip-NvOXi5xg.js";import"./PopoverPopup-CkdVrScL.js";import"./debounce-BHUK5RQM.js";import"./useOsdkClient-0m55-sBo.js";import"./tick-Dx_ZSNZP.js";import"./DropdownField-CtgPUtSd.js";import"./isEqual-t_77Xxoc.js";import"./withOsdkMetrics-62C1cNRI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
