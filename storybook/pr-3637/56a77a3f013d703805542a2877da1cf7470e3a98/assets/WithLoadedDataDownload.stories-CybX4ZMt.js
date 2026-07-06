import{f as b,j as a,r as i}from"./iframe-DLj-u7sS.js";import{O as u}from"./object-table-B9TgTuL1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-bRsnZhqF.js";import"./Table-rgqxuWEr.js";import"./index-h5XaJsyy.js";import"./Dialog-RTh4oRWI.js";import"./cross-DW3w3_M4.js";import"./svgIconContainer-CkWeyV4d.js";import"./useBaseUiId-DJZ_QMRI.js";import"./InternalBackdrop-oiDdlGPm.js";import"./composite-8LaW7Fnq.js";import"./index-B6RSVgXo.js";import"./index-D_X9WQ-2.js";import"./index-B9ew3cMv.js";import"./useEventCallback-CQCCyP0N.js";import"./SkeletonBar-C78eZmb7.js";import"./LoadingCell-B5GPsouT.js";import"./ColumnConfigDialog-C2xolMsC.js";import"./DraggableList-BFiaGnPW.js";import"./search-CiN923r4.js";import"./Input-pFDM4UYb.js";import"./useControlled-Czn7Kpxn.js";import"./Button-CNjMzJ-P.js";import"./small-cross-jz53Ep-f.js";import"./ActionButton-CSlu1CrX.js";import"./Checkbox-BxzMY6WF.js";import"./useValueChanged-BJtDQmKV.js";import"./CollapsiblePanel-BudI77hX.js";import"./MultiColumnSortDialog-ClnA_AD6.js";import"./MenuTrigger-DR46uuVl.js";import"./CompositeItem-DyWvApu6.js";import"./ToolbarRootContext-C9gB3nbw.js";import"./getDisabledMountTransitionStyles-DdiroEam.js";import"./getPseudoElementBounds-DF2mnP4q.js";import"./chevron-down-B5fRmw-q.js";import"./index-BdAV1eXI.js";import"./error-DnltI_RQ.js";import"./BaseCbacBanner-p4VaYALf.js";import"./makeExternalStore-DPSBsFoK.js";import"./Tooltip-BBAmWwAm.js";import"./PopoverPopup-8mjkHoUg.js";import"./toNumber-CnC2nuvW.js";import"./useOsdkClient-DYYHN8co.js";import"./tick-I1D_hQ2M.js";import"./DropdownField-BgEt6js2.js";import"./withOsdkMetrics-BJfe6jhM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
