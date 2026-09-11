import{f as b,j as a,r as i}from"./iframe-BU8GFPxQ.js";import{O as u}from"./object-table-WiGfrNuV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BSSMxuAV.js";import"./Table-_iLj8Rwt.js";import"./index-Bj-f6_Qj.js";import"./Dialog-BRZ_Mhxt.js";import"./cross-DWZb8fnb.js";import"./svgIconContainer-TGaOK_qc.js";import"./useBaseUiId-BwjQR-o4.js";import"./InternalBackdrop-4G36EFVK.js";import"./composite-Boe3qmtr.js";import"./index-RL0-TRLi.js";import"./index-BXjwg4tu.js";import"./index-C_kynsOY.js";import"./useEventCallback-DG6Athm7.js";import"./SkeletonBar-CPA8YoA_.js";import"./LoadingCell-xe8P1haw.js";import"./ColumnConfigDialog-BFPCLBzz.js";import"./DraggableList-DseQHdl8.js";import"./search-BzzxBGZs.js";import"./Input-BKDA3F0b.js";import"./useControlled-D1XH3a1Z.js";import"./Button-BVSo85zW.js";import"./small-cross-ByWRQaND.js";import"./ActionButton-DwMdzrCh.js";import"./Checkbox-JGOrpztY.js";import"./useValueChanged-DEn3Bp16.js";import"./CollapsiblePanel-DvEibyNb.js";import"./MultiColumnSortDialog-D8RzlB43.js";import"./MenuTrigger-wpqOhd9z.js";import"./CompositeItem-CKxdCuih.js";import"./ToolbarRootContext-C_zt0aic.js";import"./getDisabledMountTransitionStyles-DdQ32HlV.js";import"./getPseudoElementBounds-CVkJL-hX.js";import"./chevron-down-Cmk3gaNN.js";import"./index-DzgdnyuN.js";import"./error-DmWc08dY.js";import"./BaseCbacBanner-DDbqCS2g.js";import"./makeExternalStore-BQ9uq3hP.js";import"./Tooltip-_KniFWIt.js";import"./PopoverPopup-DzgCN5FT.js";import"./debounce-CEAcWSfb.js";import"./useOsdkClient-CxUbeAk0.js";import"./tick-p7Xjilvh.js";import"./DropdownField-B8coeO1y.js";import"./isEqual-trZ89Cy7.js";import"./withOsdkMetrics-NEaJKOCO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
