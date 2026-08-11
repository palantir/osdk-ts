import{f as b,j as a,r as i}from"./iframe-YvYOR2wq.js";import{O as u}from"./object-table-DFp50YJS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CzbLUeKx.js";import"./Table-DgmuGDrA.js";import"./index-Dg2Ua59f.js";import"./Dialog-BOksrRjX.js";import"./cross-DN6PKsRx.js";import"./svgIconContainer-BkbpeeEh.js";import"./useBaseUiId-DIa8CEVr.js";import"./InternalBackdrop-C1_8LOV1.js";import"./composite-BRTo3g9o.js";import"./index-w--EL4PT.js";import"./index-DS0htV8G.js";import"./index-Coel4Jgz.js";import"./useEventCallback-C3JYfwwo.js";import"./SkeletonBar-CMZ34MM-.js";import"./LoadingCell-DRNmp-08.js";import"./ColumnConfigDialog-YczIbXzh.js";import"./DraggableList-kcEMvLS0.js";import"./search-C6slhSf_.js";import"./Input-Au_NktxX.js";import"./useControlled-BaKiUohk.js";import"./isEqual-BT4XKmjn.js";import"./isObject-CGKerAkV.js";import"./Button-yaRm4n4E.js";import"./ActionButton-D3qEnWxR.js";import"./Checkbox-C7KgpzBK.js";import"./useValueChanged-BzhpnMSP.js";import"./CollapsiblePanel-DIz_ZpXy.js";import"./MultiColumnSortDialog-DC7hRVhI.js";import"./MenuTrigger-kYteRUU6.js";import"./CompositeItem-Tos5QYfq.js";import"./ToolbarRootContext-DvVNq82_.js";import"./getDisabledMountTransitionStyles-Bt7RtkHz.js";import"./getPseudoElementBounds-DEObypw2.js";import"./chevron-down-DjeSf-LC.js";import"./index-tjquBYxZ.js";import"./error-BN9FB_kM.js";import"./BaseCbacBanner-pHLTCldx.js";import"./makeExternalStore-Bf2AXbqX.js";import"./Tooltip-DBvEwoA0.js";import"./PopoverPopup-C4rnnz4U.js";import"./toNumber-BlqZmOuH.js";import"./useOsdkClient-DpDEjnV-.js";import"./tick-Df1dDSk-.js";import"./DropdownField-Bty5TdGt.js";import"./withOsdkMetrics-BC7VO-wU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
