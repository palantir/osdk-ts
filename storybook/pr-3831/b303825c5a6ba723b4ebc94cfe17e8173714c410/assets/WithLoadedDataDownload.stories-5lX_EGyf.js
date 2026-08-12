import{f as b,j as a,r as i}from"./iframe-B3k6St_T.js";import{O as u}from"./object-table-Bu29mECu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bz3dVFdp.js";import"./Table-CDEsrxx0.js";import"./index-BvHXh5hH.js";import"./Dialog-BiHio090.js";import"./cross-DkN_e3qa.js";import"./svgIconContainer-CiJvVYR1.js";import"./useBaseUiId-CN4YGlgk.js";import"./InternalBackdrop-gL33YKiY.js";import"./composite-C_maXQ4a.js";import"./index-BOMAFt6Z.js";import"./index-DvV5NBUk.js";import"./index-CKFcz2T_.js";import"./useEventCallback-Yxia1zkB.js";import"./SkeletonBar-j7PuH9FN.js";import"./LoadingCell-RKZROzvJ.js";import"./ColumnConfigDialog-ddmYKID-.js";import"./DraggableList-8nnHB_Zu.js";import"./search-D1gWWYJX.js";import"./Input-CGzs6Mm3.js";import"./useControlled-DKV39VDG.js";import"./isEqual-w8i72UAZ.js";import"./isObject-Bl_L4n1V.js";import"./Button-CvyOEKt-.js";import"./ActionButton-1wJ96VeD.js";import"./Checkbox-BftSaVwY.js";import"./useValueChanged-DtsWOZvK.js";import"./CollapsiblePanel-DwSMhEAw.js";import"./MultiColumnSortDialog-IyVD_CMO.js";import"./MenuTrigger-Oyo3PTXg.js";import"./CompositeItem-C1S6KcsA.js";import"./ToolbarRootContext-C9TgeQ7l.js";import"./getDisabledMountTransitionStyles-DCt7ntxf.js";import"./getPseudoElementBounds-8Fl7H_Sb.js";import"./chevron-down-C7A59tL6.js";import"./index-D6Y2Irns.js";import"./error-D0JClcHo.js";import"./BaseCbacBanner-B6-usOnF.js";import"./makeExternalStore-CH1rZ3vr.js";import"./Tooltip-8qMs2j0L.js";import"./PopoverPopup-DnNn1J9U.js";import"./toNumber-wPhy8-WE.js";import"./useOsdkClient-Bmmq2OWY.js";import"./tick-qtTLf652.js";import"./DropdownField-CRNhBggS.js";import"./withOsdkMetrics-Da-HTJgY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
