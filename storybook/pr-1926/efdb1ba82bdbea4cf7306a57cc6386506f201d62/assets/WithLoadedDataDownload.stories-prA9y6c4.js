import{f as b,j as a,r as i}from"./iframe-sxtnZ__3.js";import{O as u}from"./object-table-4tt7hdOi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DN2WWHpq.js";import"./Table-BGPShlqn.js";import"./index-B43ZU6C6.js";import"./Dialog-CXmBI3Rr.js";import"./cross-59RLUben.js";import"./svgIconContainer-p2RMTI7a.js";import"./useBaseUiId-Ba5m3KpF.js";import"./InternalBackdrop-DRPW9LZb.js";import"./composite-C8kR_XfL.js";import"./index-BFg6-CgA.js";import"./index-CgOTndjm.js";import"./index-zNfO2gJL.js";import"./useEventCallback-D5KlyZoa.js";import"./SkeletonBar-CK-yRV8p.js";import"./LoadingCell-1ChU6nL2.js";import"./ColumnConfigDialog-DFBJLtnX.js";import"./DraggableList-D00Tg26d.js";import"./search-t4p9zjVy.js";import"./Input-BXAWaOKi.js";import"./useControlled-qu9E_ZvC.js";import"./Button-BMtY7X7F.js";import"./small-cross-ZSOiCyZ5.js";import"./ActionButton-D86xvSSL.js";import"./Checkbox-B-gPcLSG.js";import"./useValueChanged-C8cRSBzx.js";import"./CollapsiblePanel-BegV3C45.js";import"./MultiColumnSortDialog-RBoqswCG.js";import"./MenuTrigger-Ba6gU_CA.js";import"./CompositeItem-CQpfGOEN.js";import"./ToolbarRootContext-C88ng33h.js";import"./getDisabledMountTransitionStyles-BqiNfuke.js";import"./getPseudoElementBounds-BTObdfHz.js";import"./chevron-down-Dv8O8W9l.js";import"./index-DmmZjvsT.js";import"./error-B8i5ABXk.js";import"./BaseCbacBanner-CyF9HA0J.js";import"./makeExternalStore-zzt6bEAW.js";import"./Tooltip-ByAr14nR.js";import"./isObject-Bh9lnnOC.js";import"./debounce-th_H1hxT.js";import"./useOsdkClient-CFrWyuCF.js";import"./tick-Ogtike7m.js";import"./DropdownField-CtO5bKXX.js";import"./isEqual-C9IjsvIh.js";import"./_baseIsEqual-BHBxrEn3.js";import"./withOsdkMetrics-CQhdGkJo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
