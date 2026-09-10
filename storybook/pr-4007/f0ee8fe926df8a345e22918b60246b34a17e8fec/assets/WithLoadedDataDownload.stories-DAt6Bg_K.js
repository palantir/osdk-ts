import{f as b,j as a,r as i}from"./iframe-BXr8Xp2f.js";import{O as u}from"./object-table-BMJGovFs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-QMSJ2T2z.js";import"./Table-DAHfr45h.js";import"./index-Di1QXXOB.js";import"./Dialog-DNbVrmuy.js";import"./cross-BWStps-6.js";import"./svgIconContainer-DI5sy3Bm.js";import"./useBaseUiId-BnWXJnJX.js";import"./InternalBackdrop-BC2Mb0IP.js";import"./composite-DX-jTCFh.js";import"./index-B1TvT34D.js";import"./index-Bxr4aZil.js";import"./index-DklSHYVg.js";import"./useEventCallback-D_2naMiZ.js";import"./SkeletonBar-BerAdX9-.js";import"./LoadingCell-CnTJTekb.js";import"./ColumnConfigDialog-BxWiOWRh.js";import"./DraggableList-0ExabIJF.js";import"./search-zzPZfnCA.js";import"./Input-C5ZRCR8-.js";import"./useControlled-B8QMfPVX.js";import"./Button-C-QbecBZ.js";import"./small-cross-Bd1moWk7.js";import"./ActionButton-BUgkVL_1.js";import"./Checkbox-CBxZQIwt.js";import"./useValueChanged-91n4n7Az.js";import"./CollapsiblePanel-BcVKiAEP.js";import"./MultiColumnSortDialog-BnlhM_7b.js";import"./MenuTrigger-d7QkVKvu.js";import"./CompositeItem-4cSdCb7D.js";import"./ToolbarRootContext-CF3RFtFR.js";import"./getDisabledMountTransitionStyles-BMa-7_u5.js";import"./getPseudoElementBounds-x4SpAFDI.js";import"./chevron-down-IAwnATnI.js";import"./index-BratHID5.js";import"./error-CCe_KGjt.js";import"./BaseCbacBanner-BX2BB173.js";import"./makeExternalStore-BWoLV1uK.js";import"./Tooltip-CR0agNo_.js";import"./PopoverPopup-6Xu4OLUV.js";import"./debounce-C89iykon.js";import"./useOsdkClient-B7TJU7Dn.js";import"./tick-DbVcYKyy.js";import"./DropdownField-DdBf8ANg.js";import"./isEqual-Bov8yTSB.js";import"./withOsdkMetrics-D8QddkhH.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
