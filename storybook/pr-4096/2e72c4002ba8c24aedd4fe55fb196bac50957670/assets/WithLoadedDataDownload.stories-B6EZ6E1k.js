import{f as b,j as a,r as i}from"./iframe-CRRi8SgO.js";import{O as u}from"./object-table-DdWWXjnt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BwQis52u.js";import"./Table-gWpIhT1N.js";import"./index-2tg5-UQV.js";import"./Dialog-CIutlh9B.js";import"./cross-C1gwy4VO.js";import"./svgIconContainer-DTz_qMc2.js";import"./useBaseUiId-iEjqlsrm.js";import"./InternalBackdrop-D30RxIiy.js";import"./composite-AZXA_87F.js";import"./index-uVzecxAq.js";import"./index-BcwD145P.js";import"./index-DxRnE0pO.js";import"./useEventCallback-BIZVp9Yo.js";import"./SkeletonBar-CgBZhydk.js";import"./LoadingCell-h47xUmM7.js";import"./ColumnConfigDialog-DuWWlKqr.js";import"./DraggableList-CLZzdOnX.js";import"./search-BNshWxL3.js";import"./Input-DG2OkDHs.js";import"./useControlled-CowgUxzg.js";import"./Button-nDYaCN2P.js";import"./small-cross-5jUutM_4.js";import"./ActionButton-D6GTAbLZ.js";import"./Checkbox-CvFrAsxy.js";import"./useValueChanged-CjTliyXW.js";import"./CollapsiblePanel-BLx3NSxa.js";import"./MultiColumnSortDialog-BNasdP-v.js";import"./MenuTrigger-O7MVt_aS.js";import"./CompositeItem-Bioh8Trj.js";import"./ToolbarRootContext-D3Qkj0-s.js";import"./getDisabledMountTransitionStyles-CQJ8ore_.js";import"./getPseudoElementBounds-CWEIz1jB.js";import"./chevron-down-D4f-osYR.js";import"./index-B8kfer_a.js";import"./error-DJ0QJQKA.js";import"./BaseCbacBanner-Bu8cxWyQ.js";import"./makeExternalStore-7XhwS57f.js";import"./Tooltip-TYF1TzI8.js";import"./PopoverPopup-JUUuLGr6.js";import"./debounce-CUx7FQzR.js";import"./useOsdkClient-E5LrSb6S.js";import"./tick-DKaiCuS5.js";import"./DropdownField-K2ZSDodB.js";import"./isEqual-r311FMGD.js";import"./withOsdkMetrics-gAZiEnbR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
