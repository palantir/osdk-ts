import{f as b,j as a,r as i}from"./iframe-C_YSZhmb.js";import{O as u}from"./object-table-BeWLesZt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BFkJCi6W.js";import"./Table-DjvOOOtR.js";import"./index-DyUa_hup.js";import"./Dialog-A6iJrta7.js";import"./cross-igOYObgS.js";import"./svgIconContainer-CTE7qjnM.js";import"./useBaseUiId-fgj3Ae6R.js";import"./InternalBackdrop-C8EYUF6T.js";import"./composite-Pk8fx26w.js";import"./index-C-7zdHTt.js";import"./index-CEhz685m.js";import"./index-wScR3t62.js";import"./useEventCallback-nia-KkEG.js";import"./SkeletonBar-DLMWhAvF.js";import"./LoadingCell-PN9afJgg.js";import"./ColumnConfigDialog-G2_UPtct.js";import"./DraggableList-CezoHNKn.js";import"./Input-DhsPy4wS.js";import"./useControlled-LPnAy1xv.js";import"./Button-DydXIbfr.js";import"./small-cross-CNyGDtDa.js";import"./ActionButton-D15-yhm6.js";import"./Checkbox-BJIIa-X5.js";import"./minus-CANF-wsy.js";import"./useValueChanged-CKFSWcrz.js";import"./caret-down-WHkMnona.js";import"./CollapsiblePanel-C1Uih0fA.js";import"./MultiColumnSortDialog-WLxeucfn.js";import"./MenuTrigger-DaUL0mX-.js";import"./CompositeItem-DC5HPmsk.js";import"./ToolbarRootContext-DEge2cAE.js";import"./getDisabledMountTransitionStyles-CXRPL9IR.js";import"./getPseudoElementBounds-q0CTFuZu.js";import"./chevron-down-Rf6vyGnV.js";import"./index-7c92J0jc.js";import"./error-CcvjpYUW.js";import"./BaseCbacBanner-jcFRMt8q.js";import"./makeExternalStore-NIpHvH3Y.js";import"./Tooltip-64kFfjAB.js";import"./PopoverPopup-mcOX50dp.js";import"./toNumber-DZw-GLfK.js";import"./useOsdkClient-BfYovfsT.js";import"./DropdownField-CYqCD6C4.js";import"./withOsdkMetrics-BxTDnvSv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
