import{f as b,j as a,r as i}from"./iframe-DHfhGWcA.js";import{O as u}from"./object-table-OpoS1B5z.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D14EGrrK.js";import"./Table-BBNuKozg.js";import"./index-CCF9MEs2.js";import"./Dialog-C7_tmS0A.js";import"./cross-Dj-fC_ys.js";import"./svgIconContainer-BaEBe_Ou.js";import"./useBaseUiId-BATl1CQr.js";import"./InternalBackdrop-Cg_x7WdZ.js";import"./composite-DbTWPUQ9.js";import"./index-Blf5so-r.js";import"./index-C5pfUNxc.js";import"./index-C0hgrkVR.js";import"./useEventCallback-CxgY780e.js";import"./SkeletonBar-K08P4YrG.js";import"./LoadingCell-Cqx9pCQ0.js";import"./ColumnConfigDialog-BqPXpyZ-.js";import"./DraggableList-8UAXAnVw.js";import"./search-DWYoVV2s.js";import"./Input-zMxDvO-I.js";import"./useControlled-Bxerh3bt.js";import"./Button-Dj3Gc0R8.js";import"./small-cross-oBABr6h6.js";import"./ActionButton-w10zUXoM.js";import"./Checkbox-BH1RcZqr.js";import"./useValueChanged-Bsu0ebqY.js";import"./CollapsiblePanel-tIBbRKCQ.js";import"./MultiColumnSortDialog-C97PbmGP.js";import"./MenuTrigger-C81rcI3P.js";import"./CompositeItem-CLlZ6Yb0.js";import"./ToolbarRootContext-erU_8-54.js";import"./getDisabledMountTransitionStyles-C5UuzqSY.js";import"./getPseudoElementBounds-D6EOINUP.js";import"./chevron-down-DR6eEQC2.js";import"./index-DFvQFeWQ.js";import"./error-CAZmovtj.js";import"./BaseCbacBanner-BS60J-Cr.js";import"./makeExternalStore-C1Pxa9L5.js";import"./Tooltip-nGSUir4H.js";import"./PopoverPopup-CLeXoVr6.js";import"./debounce-Di14C5je.js";import"./useOsdkClient-C7hhAH6C.js";import"./tick-BOovpBqZ.js";import"./DropdownField-BwayLWA9.js";import"./isEqual-8UhBnCWP.js";import"./withOsdkMetrics-DU0hnwkS.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
