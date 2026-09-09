import{f as b,j as a,r as i}from"./iframe-JXLKLe4j.js";import{O as u}from"./object-table-BSBUtwZw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-KxhExJZe.js";import"./Table-qjFQ-LV4.js";import"./index-CxCVEUEK.js";import"./Dialog-BAHFhmeR.js";import"./cross-DOXYOKC7.js";import"./svgIconContainer-39ufch0k.js";import"./useBaseUiId-D2ECG8pj.js";import"./InternalBackdrop-BAhO0rZ6.js";import"./composite-B1xcP3KB.js";import"./index-CU7Uodcw.js";import"./index-KYXcc3Yr.js";import"./index-D0eNlerC.js";import"./useEventCallback-CwcpFxjU.js";import"./SkeletonBar-BO4kxP3D.js";import"./LoadingCell-BXQ-UV07.js";import"./ColumnConfigDialog-BPCYXCVh.js";import"./DraggableList-BPhMewNT.js";import"./search-3vsZ9AKM.js";import"./Input-Cp2KEsjw.js";import"./useControlled-BlJ0csd0.js";import"./Button-Cg6Es2oR.js";import"./small-cross-Bm-1zFL_.js";import"./ActionButton-DABDZfMp.js";import"./Checkbox-7tyUFDb-.js";import"./useValueChanged-76jQ3f4t.js";import"./CollapsiblePanel-BetHwBDr.js";import"./MultiColumnSortDialog-DOqOmKA9.js";import"./MenuTrigger-DPnFUnbb.js";import"./CompositeItem-CHr0cHjc.js";import"./ToolbarRootContext-Dtg0Oro0.js";import"./getDisabledMountTransitionStyles-rcpG9bQ-.js";import"./getPseudoElementBounds-Bnkuh_Gq.js";import"./chevron-down-OJuk8g-X.js";import"./index-DoaZjYqH.js";import"./error-CCMzsuJP.js";import"./BaseCbacBanner-D1xPrtuz.js";import"./makeExternalStore-CPv_2K4j.js";import"./Tooltip-DVRBwT79.js";import"./PopoverPopup-CvtiR2Lg.js";import"./debounce-CiOfWDDO.js";import"./useOsdkClient-Bd8Cmg0y.js";import"./tick-g-QdmJj0.js";import"./DropdownField-DgrKVFWZ.js";import"./isEqual-C9hHIdql.js";import"./withOsdkMetrics-OXe-gHpY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
