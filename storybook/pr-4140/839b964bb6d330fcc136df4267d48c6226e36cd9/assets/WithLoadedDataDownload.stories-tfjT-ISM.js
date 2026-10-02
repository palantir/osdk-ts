import{f as b,j as a,r as i}from"./iframe-CjvYcpTc.js";import{O as u}from"./object-table-Cr4f5Dyz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CwAZ_RFp.js";import"./Table-OGDc2Vu9.js";import"./index-DuZ19wcn.js";import"./Dialog-AmWXXXAn.js";import"./cross-C7lWgdj2.js";import"./svgIconContainer-B4kwPvVG.js";import"./useBaseUiId-CZUJXt98.js";import"./InternalBackdrop-Cvpmom_D.js";import"./composite-Dv8ZzttY.js";import"./index-CEXd5f6A.js";import"./index-DNoEMSLE.js";import"./index-CMgAql6Y.js";import"./useEventCallback-ByweALPq.js";import"./SkeletonBar-CEUKT4EZ.js";import"./LoadingCell-BHA_MaqJ.js";import"./ColumnConfigDialog-k2ALTpny.js";import"./DraggableList-b_HqS-PO.js";import"./search-C9XpCEsC.js";import"./Input-B4ChrBJV.js";import"./useControlled-BgiktbGb.js";import"./Button-x48_kffx.js";import"./small-cross-DrNdp9td.js";import"./ActionButton-CNilsdeF.js";import"./Checkbox-C7J_efzv.js";import"./useValueChanged-jVldrQSp.js";import"./CollapsiblePanel-BOX1nR00.js";import"./MultiColumnSortDialog-RIUXj6qp.js";import"./MenuTrigger-C7JnYkRW.js";import"./CompositeItem-CrZyp1SA.js";import"./ToolbarRootContext-H5FrOgLL.js";import"./getDisabledMountTransitionStyles-D8pKVFxg.js";import"./getPseudoElementBounds-zCP0_jeb.js";import"./chevron-down-B6AkEAGC.js";import"./index-BaiLSRkn.js";import"./error-DdgUBnOy.js";import"./BaseCbacBanner-fTPjPnTf.js";import"./makeExternalStore-CTMnuTK_.js";import"./Tooltip-B-fFKI94.js";import"./PopoverPopup-DhrzdhL9.js";import"./debounce-d3qhgy8J.js";import"./useOsdkClient-DyGGfFqC.js";import"./tick-DHMwXqUI.js";import"./DropdownField-CSAcVewx.js";import"./isEqual-Bh14zo85.js";import"./withOsdkMetrics-c8up4Ye7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
