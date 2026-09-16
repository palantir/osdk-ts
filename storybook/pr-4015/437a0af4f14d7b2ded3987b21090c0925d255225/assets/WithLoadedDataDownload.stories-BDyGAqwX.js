import{f as b,j as a,r as i}from"./iframe-I5kvh-Kw.js";import{O as u}from"./object-table-Cr0S9q82.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bdf318pV.js";import"./Table-TtSnZhQr.js";import"./index-HKnhZxyX.js";import"./Dialog-mqgafTiX.js";import"./cross-Yl6g30y6.js";import"./svgIconContainer-DDPN3ss8.js";import"./useBaseUiId-BejWRuZ2.js";import"./InternalBackdrop-AewAO-J_.js";import"./composite-DzvS9mVY.js";import"./index-BV_M3ZY7.js";import"./index-B3JolPJS.js";import"./index-Dc5Qye8S.js";import"./useEventCallback-pdwLNnur.js";import"./SkeletonBar-kcsCYLu4.js";import"./LoadingCell-DtTIvVBW.js";import"./ColumnConfigDialog-BCP5cr4v.js";import"./DraggableList-CcLt-lZ7.js";import"./search-C9rUiq_s.js";import"./Input-GvrpBokI.js";import"./useControlled-B-k81KQz.js";import"./Button-B2DkfEqk.js";import"./small-cross-Bt34L26C.js";import"./ActionButton-CqQaVHKu.js";import"./Checkbox-BciDkEMh.js";import"./useValueChanged-B0q3nMZ1.js";import"./CollapsiblePanel-e6KM6j36.js";import"./MultiColumnSortDialog-geU7VG77.js";import"./MenuTrigger--lameju1.js";import"./CompositeItem-Ck73puur.js";import"./ToolbarRootContext-BpC1haoE.js";import"./getDisabledMountTransitionStyles-BX75q4sb.js";import"./getPseudoElementBounds-Bc29vczI.js";import"./chevron-down-BWVLfJxG.js";import"./index-BYHjFf0T.js";import"./error-Dywin3-5.js";import"./BaseCbacBanner-MQh6F2xl.js";import"./makeExternalStore-CUhQIJ-n.js";import"./Tooltip-DU2yzwco.js";import"./PopoverPopup-C0f2Xvwy.js";import"./debounce-DwNlwyza.js";import"./useOsdkClient-CHvk60Or.js";import"./tick-CMqxctjO.js";import"./DropdownField-ceLSuDDZ.js";import"./isEqual-CvGgOlJg.js";import"./withOsdkMetrics-CldLsQ2u.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
