import{f as b,j as a,r as i}from"./iframe-CbsILOX1.js";import{O as u}from"./object-table-DftV7Wgn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-KH2jXVqe.js";import"./Table-BX92vSe_.js";import"./index-mQCFUMVC.js";import"./Dialog-BYjOjZPm.js";import"./cross-WEN_kq-R.js";import"./svgIconContainer-CtABKPcK.js";import"./useBaseUiId-CkS0AEKj.js";import"./InternalBackdrop-DxN25aMt.js";import"./composite-CGEAG7vP.js";import"./index-CNGY0cN4.js";import"./index-BoeCby8s.js";import"./index-RCqGMEY5.js";import"./useEventCallback-BcH07WLK.js";import"./SkeletonBar-9qHOo_Vn.js";import"./LoadingCell-CtYGj7Cz.js";import"./ColumnConfigDialog-nTsPRzlq.js";import"./DraggableList-Ch2sFm4R.js";import"./search-rwF0nNiT.js";import"./Input-C5UdO1XA.js";import"./useControlled-CJ4srf6k.js";import"./isEqual-Dt0eqNdh.js";import"./isObject-BOLhYt4C.js";import"./Button-C5SAlHVZ.js";import"./ActionButton-jOH2gKcm.js";import"./Checkbox-Mlckpoab.js";import"./useValueChanged-1um15DdJ.js";import"./CollapsiblePanel-oU5O1RNe.js";import"./MultiColumnSortDialog-yUgV5pAe.js";import"./MenuTrigger-FIVRtQ4o.js";import"./CompositeItem-KKNWKktM.js";import"./ToolbarRootContext-JBI4exUW.js";import"./getDisabledMountTransitionStyles-DInEJNYv.js";import"./getPseudoElementBounds-YvMwYEaq.js";import"./chevron-down-CejGVoVr.js";import"./index-NMVopm4U.js";import"./error-BPCdK3mN.js";import"./BaseCbacBanner-B1EtMSYI.js";import"./makeExternalStore-BUQE3Sxe.js";import"./Tooltip-Dl10-d5v.js";import"./PopoverPopup-CTsruEAC.js";import"./toNumber-C5_gFke-.js";import"./useOsdkClient-DLA2_rEN.js";import"./tick-Cs_-qT1P.js";import"./DropdownField-Bq6CzzgJ.js";import"./withOsdkMetrics-BRd-n6f9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
