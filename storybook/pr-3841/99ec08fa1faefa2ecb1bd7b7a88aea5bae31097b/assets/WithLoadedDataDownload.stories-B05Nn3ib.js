import{f as b,j as a,r as i}from"./iframe-B9azDZlz.js";import{O as u}from"./object-table-QQXxCQbo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bm0hX83b.js";import"./Table-BcdhfCUI.js";import"./index-Gnn4IAPK.js";import"./Dialog-BL5Xt88J.js";import"./cross-DH7Phj5l.js";import"./svgIconContainer-BSqh8zzQ.js";import"./useBaseUiId-B5AQ3HFN.js";import"./InternalBackdrop-CVYwGey5.js";import"./composite-DG0rNHFY.js";import"./index-DG7p6B41.js";import"./index-D0fYYncd.js";import"./index-0NY8KgBX.js";import"./useEventCallback-CKNYTi7U.js";import"./SkeletonBar-QxJNYOQi.js";import"./LoadingCell-CkafHKo1.js";import"./ColumnConfigDialog-CmRx7Ibx.js";import"./DraggableList-Oqv7j_Rf.js";import"./search-D-Pd3u3n.js";import"./Input-6Xi2oRl5.js";import"./useControlled-CIIQ6AdN.js";import"./Button-ByY1VR_F.js";import"./small-cross-BErTRTeO.js";import"./ActionButton-CtxrjN50.js";import"./Checkbox-COQa-sEG.js";import"./useValueChanged-YxrolQP8.js";import"./CollapsiblePanel-BWH5sgwq.js";import"./MultiColumnSortDialog-d0_k3Eoy.js";import"./MenuTrigger-BAknza5f.js";import"./CompositeItem-23Xg-PrO.js";import"./ToolbarRootContext-H0Ylxwtf.js";import"./getDisabledMountTransitionStyles-D26pQLY4.js";import"./getPseudoElementBounds-DOsvVJTW.js";import"./chevron-down-CDhI7Cg9.js";import"./index-BqVQ5c0B.js";import"./error-B89KPxvz.js";import"./BaseCbacBanner-C61KBizI.js";import"./makeExternalStore-Sb074CVY.js";import"./Tooltip-BiRF5TgT.js";import"./PopoverPopup-BoIWrT_I.js";import"./debounce-B2RJoylZ.js";import"./useOsdkClient-DfxUO55U.js";import"./tick-BDEOlM-s.js";import"./DropdownField-B0WGKaAs.js";import"./isEqual-CcChNOPP.js";import"./withOsdkMetrics-BCygmhUI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
