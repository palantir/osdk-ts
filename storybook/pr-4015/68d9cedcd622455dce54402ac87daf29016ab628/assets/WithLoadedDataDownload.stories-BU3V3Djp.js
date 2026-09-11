import{f as b,j as a,r as i}from"./iframe-CgX-XfZe.js";import{O as u}from"./object-table-BfAW9lRl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B7xu4jFf.js";import"./Table-tTPFVIKa.js";import"./index-BcViD_AJ.js";import"./Dialog-BaFW1Zjw.js";import"./cross-Nv8Io3xy.js";import"./svgIconContainer-CXZEPhaW.js";import"./useBaseUiId-BXQE2Tij.js";import"./InternalBackdrop-CvIKv91P.js";import"./composite-CuhqFDst.js";import"./index-a2F2ZKsn.js";import"./index-BmNCbeoV.js";import"./index-DrrGWtE8.js";import"./useEventCallback-CJOkzsfk.js";import"./SkeletonBar-rtQtEYsd.js";import"./LoadingCell-wXQ9cx3W.js";import"./ColumnConfigDialog-D9BeChM7.js";import"./DraggableList-D1MymrnJ.js";import"./search-DTGDsddM.js";import"./Input-yuy0l2cX.js";import"./useControlled-CVDZAttb.js";import"./Button-BRRWL_gG.js";import"./small-cross-CldOek9E.js";import"./ActionButton-eETZToHJ.js";import"./Checkbox-OMZwBT2q.js";import"./useValueChanged-CJQsRnGQ.js";import"./CollapsiblePanel-ztAj1qzb.js";import"./MultiColumnSortDialog-CbBSNnI_.js";import"./MenuTrigger-CvwlMuvL.js";import"./CompositeItem-Cosvl6JF.js";import"./ToolbarRootContext-auY9xRTT.js";import"./getDisabledMountTransitionStyles-CY7m0Re-.js";import"./getPseudoElementBounds-Cb9yX_CQ.js";import"./chevron-down-QOEZh7s4.js";import"./index-Dj-xdEDu.js";import"./error-ByGGXW3h.js";import"./BaseCbacBanner-vW1LjLLW.js";import"./makeExternalStore-CRMwT7Da.js";import"./Tooltip-C7b0j1Nz.js";import"./PopoverPopup-AplR6RR1.js";import"./debounce-542eBR78.js";import"./useOsdkClient-CGTaZpCt.js";import"./tick-8a_8sCFa.js";import"./DropdownField-D1OnXseu.js";import"./isEqual-Dv3NJm4i.js";import"./withOsdkMetrics-N-qC9xyD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
