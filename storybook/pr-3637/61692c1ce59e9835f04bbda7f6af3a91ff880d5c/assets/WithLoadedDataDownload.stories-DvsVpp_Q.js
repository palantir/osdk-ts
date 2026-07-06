import{f as b,j as a,r as i}from"./iframe-BD1MEMRl.js";import{O as u}from"./object-table-C4DJI72D.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DFouLAkd.js";import"./Table-CnG4GV8W.js";import"./index-sFVy8NqN.js";import"./Dialog-Dd-hVv8T.js";import"./cross-C_Zco2FN.js";import"./svgIconContainer-Dbg64RB4.js";import"./useBaseUiId-C6VUj_Wo.js";import"./InternalBackdrop-CFzcYmsX.js";import"./composite-DAwmvh4E.js";import"./index-Bi_O5ToU.js";import"./index-DJRVJ4qh.js";import"./index-BFtmC4i8.js";import"./useEventCallback-lUu7SJ_f.js";import"./SkeletonBar-DTUF0wxB.js";import"./LoadingCell-ByTDUvLw.js";import"./ColumnConfigDialog-tjsJmrum.js";import"./DraggableList-xex0V4x2.js";import"./search-pFjymYek.js";import"./Input-DtFEVn4t.js";import"./useControlled-Beqkb8BT.js";import"./Button-C-_7Zup6.js";import"./small-cross-3SKSquHU.js";import"./ActionButton-CqWep9X8.js";import"./Checkbox-CtA1kWtm.js";import"./useValueChanged-D9QM6SwH.js";import"./CollapsiblePanel-DoLDuFqo.js";import"./MultiColumnSortDialog-Cwaazm8H.js";import"./MenuTrigger-BxFUcpWU.js";import"./CompositeItem-CNoQbRW6.js";import"./ToolbarRootContext-hpi9LUbr.js";import"./getDisabledMountTransitionStyles-BTxM3LtW.js";import"./getPseudoElementBounds-Btg4Yep0.js";import"./chevron-down-p-OqQdTE.js";import"./index-Bhql2vLt.js";import"./error-Bkh3cooZ.js";import"./BaseCbacBanner-B175XRUY.js";import"./makeExternalStore-R6DoBrXa.js";import"./Tooltip-CQZQT9ZR.js";import"./PopoverPopup-D2zdM8Xj.js";import"./toNumber-skGbjp9v.js";import"./useOsdkClient-DPR92EKT.js";import"./tick-D6R-JvNg.js";import"./DropdownField-BXlZiCoN.js";import"./withOsdkMetrics-D-wPyKJ2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
