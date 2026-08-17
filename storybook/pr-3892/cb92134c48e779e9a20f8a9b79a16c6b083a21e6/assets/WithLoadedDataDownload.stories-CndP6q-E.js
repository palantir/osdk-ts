import{f as b,j as a,r as i}from"./iframe-DRtOcaPG.js";import{O as u}from"./object-table-BCfwSR0a.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-9DgHanXn.js";import"./Table-D8C_QUcD.js";import"./index-Ce2dl65O.js";import"./Dialog-6XlLOHmL.js";import"./cross-BX3J5cVV.js";import"./svgIconContainer-DpZEtLv9.js";import"./useBaseUiId-BGBZ1HUg.js";import"./InternalBackdrop-DEWb66um.js";import"./composite-N79hpvK_.js";import"./index-DHqOpqOn.js";import"./index-D8e0XOwM.js";import"./index-B1juJX5y.js";import"./useEventCallback-KpeXCugf.js";import"./SkeletonBar-Bn8psVV6.js";import"./LoadingCell-TIEVW5Z1.js";import"./ColumnConfigDialog-BoPwK1_S.js";import"./DraggableList-BLdMLrLx.js";import"./search-Dtkc2Iz5.js";import"./Input-QNUGF4Iu.js";import"./useControlled-BcvbWefU.js";import"./Button-CK6d5OG4.js";import"./small-cross-DcKEL8t4.js";import"./ActionButton-D4k0Ykwf.js";import"./Checkbox-BIE_uDYH.js";import"./useValueChanged-BDN_9EGE.js";import"./CollapsiblePanel-Dny0UpIl.js";import"./MultiColumnSortDialog-tRhI4Szy.js";import"./MenuTrigger-cVWNdQTi.js";import"./CompositeItem-DWL2WPXo.js";import"./ToolbarRootContext-B6bPz9D9.js";import"./getDisabledMountTransitionStyles-BJl-4ZY_.js";import"./getPseudoElementBounds-Dwgu6l1I.js";import"./chevron-down-SYe_Fp71.js";import"./index-Bi5AS5V_.js";import"./error-BkqrjqGY.js";import"./BaseCbacBanner-CS1xI85h.js";import"./makeExternalStore-Ch0Jbi30.js";import"./Tooltip-xjkYLVuc.js";import"./PopoverPopup-CNH5KUV5.js";import"./debounce-1FOPDn_n.js";import"./useOsdkClient-DR_uLwOS.js";import"./tick-DoLa9jip.js";import"./DropdownField-BVBUpAg_.js";import"./isEqual-DydWlIf1.js";import"./withOsdkMetrics-DDwhyEqf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
