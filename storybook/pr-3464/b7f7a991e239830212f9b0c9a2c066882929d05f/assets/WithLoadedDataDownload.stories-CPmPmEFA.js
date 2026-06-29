import{f as b,j as a,r as i}from"./iframe-Bg2tdbhw.js";import{O as u}from"./object-table-DMeAr9IO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BJ2h9Z3P.js";import"./Table-DS1NG64h.js";import"./index-DKCNWX5P.js";import"./Dialog-Yun62dDl.js";import"./cross-CSAJ6NGt.js";import"./svgIconContainer-BKy6MW2l.js";import"./useBaseUiId-CmShBS4E.js";import"./InternalBackdrop-C7j63BIo.js";import"./composite-WuBsguEZ.js";import"./index-BqzwnnAx.js";import"./index-BGzQ98DL.js";import"./index-ApiaoFLR.js";import"./useEventCallback-B09psOqr.js";import"./SkeletonBar-BFs_EbHH.js";import"./LoadingCell-gQy7zYPb.js";import"./ColumnConfigDialog-DHFMP1aX.js";import"./DraggableList-B7wBREqh.js";import"./search-D2VSB8NA.js";import"./Input-BJ_M4j-9.js";import"./useControlled-CABvNtdU.js";import"./Button-B-5c89Rn.js";import"./small-cross-3LC1Qq0-.js";import"./ActionButton-rO6xL848.js";import"./Checkbox-CkEKuPGn.js";import"./minus-DiSzlybj.js";import"./tick-Gp7bJI6t.js";import"./useValueChanged-BFdww-yd.js";import"./caret-down-DroK-1s1.js";import"./CollapsiblePanel-Cb1WmNCy.js";import"./MultiColumnSortDialog-DupyQcO4.js";import"./MenuTrigger-JygfyG9G.js";import"./CompositeItem-BOkTSBHI.js";import"./ToolbarRootContext-CjlXcYih.js";import"./getDisabledMountTransitionStyles-CokUKgrd.js";import"./getPseudoElementBounds-jbG1O4CA.js";import"./chevron-down-BsJmxCP1.js";import"./index-D5BHG7ss.js";import"./error-B9bcZORz.js";import"./BaseCbacBanner-CjUVCXAF.js";import"./makeExternalStore-DKBlb9J_.js";import"./Tooltip-DdZm173y.js";import"./PopoverPopup-CiCfzqLE.js";import"./toNumber-BWpEGEDf.js";import"./useOsdkClient-CdktJojs.js";import"./DropdownField-Cck41Ynp.js";import"./withOsdkMetrics-BQEHtTjv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
