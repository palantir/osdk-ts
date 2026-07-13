import{f as b,j as a,r as i}from"./iframe-BI2BvdSn.js";import{O as u}from"./object-table-5UFs14ib.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp7OlpU-.js";import"./Table-Cvo8_PGV.js";import"./index-BIWK-oDl.js";import"./Dialog-bUBcUYkq.js";import"./cross-C6K3Vij4.js";import"./svgIconContainer-Dv0B_rwA.js";import"./useBaseUiId-cKcVT06J.js";import"./InternalBackdrop-Dx4__PEN.js";import"./composite-CEeOlS1-.js";import"./index-B8RX0TAT.js";import"./index-BTjFp-Bp.js";import"./index-CZt6g497.js";import"./useEventCallback-PtWEDgxW.js";import"./SkeletonBar-B2G3ijUw.js";import"./LoadingCell-DP2jkdWt.js";import"./ColumnConfigDialog-DDfGeoEP.js";import"./DraggableList-zTTv8vxK.js";import"./search-DLNQ0f47.js";import"./Input-DoP09scN.js";import"./useControlled-FtZVcRbK.js";import"./Button-BeEEXMwF.js";import"./small-cross-CMN8Wugs.js";import"./ActionButton-CkU0dUKS.js";import"./Checkbox-BZuC3KUc.js";import"./useValueChanged-DkllqS6w.js";import"./CollapsiblePanel-BP1wEsk5.js";import"./MultiColumnSortDialog-CPT0UGkM.js";import"./MenuTrigger-DSLkwEax.js";import"./CompositeItem-B8IS25xa.js";import"./ToolbarRootContext-B7EklFh7.js";import"./getDisabledMountTransitionStyles-DMe9itzl.js";import"./getPseudoElementBounds-DHKivReb.js";import"./chevron-down-CgnTIL0S.js";import"./index-CMvDzfLR.js";import"./error-CmZ7CLV6.js";import"./BaseCbacBanner-BbFbM-VG.js";import"./makeExternalStore-DLVI6Pro.js";import"./Tooltip-BsvfDB8I.js";import"./PopoverPopup-DMqdRfaa.js";import"./toNumber-DLK6PeXz.js";import"./useOsdkClient-8ElrZ5ZV.js";import"./tick-DmvogLOo.js";import"./DropdownField-BEyXsPMf.js";import"./withOsdkMetrics-D9EoHykR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
