import{f as b,j as a,r as i}from"./iframe-C7GOuxD1.js";import{O as u}from"./object-table-dWlD71lL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-cLq0tmXV.js";import"./Table-L0bmwFCN.js";import"./index-DBBBWmqo.js";import"./Dialog-BDIg23NE.js";import"./cross-CeilH9rC.js";import"./svgIconContainer-C5oTgJel.js";import"./useBaseUiId-BenimXYg.js";import"./InternalBackdrop-BVf0vh6D.js";import"./composite-Cgb7pd84.js";import"./index-CQ4MzVYN.js";import"./index-DuOry3-s.js";import"./index-CS8Y0uId.js";import"./useEventCallback-BjL9jj3Y.js";import"./SkeletonBar-T4H5mM_R.js";import"./LoadingCell-BjFAbchK.js";import"./ColumnConfigDialog-I-C9Eoid.js";import"./DraggableList-D5qaZpJa.js";import"./search-B3SFcxMO.js";import"./Input-D4NdRTVJ.js";import"./useControlled-B_f3t71o.js";import"./Button-BUb3i5ek.js";import"./small-cross-DxtvnSNv.js";import"./ActionButton-nA6tqUpX.js";import"./Checkbox-Cz1MnAyf.js";import"./useValueChanged-BrLcnIBL.js";import"./CollapsiblePanel-C8GrEU9w.js";import"./MultiColumnSortDialog-DZH5EtZC.js";import"./MenuTrigger-h0mNM3q6.js";import"./CompositeItem-CyvxmxVc.js";import"./ToolbarRootContext-BdzdDLJF.js";import"./getDisabledMountTransitionStyles-9hFn6TYo.js";import"./getPseudoElementBounds-DmIzNuzx.js";import"./chevron-down-D0zt0lGj.js";import"./index-DJdnGM3o.js";import"./error-Gwb1RVKo.js";import"./BaseCbacBanner-DnINnSdh.js";import"./makeExternalStore-Bn6Cuzy6.js";import"./Tooltip-CPPwKixL.js";import"./PopoverPopup-CXEQhiRY.js";import"./debounce-Bny3E4j5.js";import"./useOsdkClient-DfGQp-uN.js";import"./tick-CQmS5E0-.js";import"./DropdownField-hrh1cG0I.js";import"./isEqual-ic_Rm2u_.js";import"./withOsdkMetrics-BaeX4vAH.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
