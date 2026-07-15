import{f as b,j as a,r as i}from"./iframe-X3f60bvr.js";import{O as u}from"./object-table-B1bTUEg-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BM2xafaU.js";import"./Table-BiGanK-j.js";import"./index-DRTRMMLL.js";import"./Dialog-CEyW0Xz_.js";import"./cross-DlsSWWII.js";import"./svgIconContainer-DFK0Cv_M.js";import"./useBaseUiId-BX0dL2u6.js";import"./InternalBackdrop-DB8KeoYK.js";import"./composite-Cb4jmYR3.js";import"./index-Dr4t6YVH.js";import"./index-CojZOBk9.js";import"./index-DbGTQrV-.js";import"./useEventCallback-Cs5nyCM9.js";import"./SkeletonBar-C5swJWSS.js";import"./LoadingCell-_6bBY6Q-.js";import"./ColumnConfigDialog-D-IW1Uk8.js";import"./DraggableList-DgjvpcxC.js";import"./search-LkiYhKHU.js";import"./Input-Cb8HwdrG.js";import"./useControlled-KSbcmYKr.js";import"./Button-Bj-PVnUC.js";import"./small-cross-t-fnYxNq.js";import"./ActionButton-MYdfDCqe.js";import"./Checkbox-CQsWrANU.js";import"./useValueChanged-CiQzzfE5.js";import"./CollapsiblePanel-BNuIbtPC.js";import"./MultiColumnSortDialog-C99vsgrq.js";import"./MenuTrigger-BZ4iU00T.js";import"./CompositeItem-DLoJyw1H.js";import"./ToolbarRootContext-B0R5guIp.js";import"./getDisabledMountTransitionStyles-B1mkkzyy.js";import"./getPseudoElementBounds-C1QqKtxa.js";import"./chevron-down-DchIwrTX.js";import"./index-CBMI0VRi.js";import"./error-Cb5UoREL.js";import"./BaseCbacBanner-XNJJAH8O.js";import"./makeExternalStore-DYoapTb2.js";import"./Tooltip-B4ll62gd.js";import"./PopoverPopup-BpU-jUzg.js";import"./toNumber-hROUx1Zm.js";import"./useOsdkClient-C1WMdY3n.js";import"./tick-M6mkAFLN.js";import"./DropdownField-C6iRl5ty.js";import"./withOsdkMetrics-DWHUQHjv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
