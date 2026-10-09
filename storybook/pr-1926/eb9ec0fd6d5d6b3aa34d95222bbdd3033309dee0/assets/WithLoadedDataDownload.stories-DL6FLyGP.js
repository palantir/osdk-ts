import{f as b,j as a,r as i}from"./iframe-1dJaCYlm.js";import{O as u}from"./object-table-DHPjy5yk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DxSOn4L7.js";import"./Table-CBTIAnhX.js";import"./index-B5nbKv82.js";import"./Dialog-DR5BuBZq.js";import"./cross-YjWLpu8J.js";import"./svgIconContainer-BHSx6W0Z.js";import"./useBaseUiId-C4uZnOHm.js";import"./InternalBackdrop-Dgfuakv5.js";import"./composite-L8QPO2DT.js";import"./index-BTsOhHh-.js";import"./index-DWMe-xRS.js";import"./index-C7xGCqhv.js";import"./useEventCallback-DUPF2gzl.js";import"./SkeletonBar-D250oLk_.js";import"./LoadingCell-CRn8uGI3.js";import"./ColumnConfigDialog-CjGlgYSo.js";import"./DraggableList-DWAuUQtO.js";import"./search-BkPLkzDr.js";import"./Input-CIfB9akU.js";import"./useControlled-CHSiaIM9.js";import"./Button-C4vq1MKj.js";import"./small-cross-BJKO5x2i.js";import"./ActionButton-CAA2JXXL.js";import"./Checkbox-CpxF8gm9.js";import"./useValueChanged-mwlCE8cl.js";import"./CollapsiblePanel-Co1-lWcX.js";import"./MultiColumnSortDialog-Ci0pmQFw.js";import"./MenuTrigger-B9qIjPTc.js";import"./CompositeItem-C0Th2oHB.js";import"./ToolbarRootContext-Ztq9_6cI.js";import"./getDisabledMountTransitionStyles-DWnTx_mX.js";import"./getPseudoElementBounds-wNHBeRCJ.js";import"./chevron-down-CFBQ0zoB.js";import"./index-DIXb6m2-.js";import"./error-BHBv4jub.js";import"./BaseCbacBanner-hVlrMvZb.js";import"./makeExternalStore-P9a4XRGC.js";import"./Tooltip-B8lT1fcQ.js";import"./PopoverPopup-jAP8Jjj3.js";import"./debounce-D-qHnft_.js";import"./useOsdkClient-DRXMsfLX.js";import"./tick-CIW2Y4rB.js";import"./DropdownField-DPzSkJ64.js";import"./isEqual-B31_2uq-.js";import"./withOsdkMetrics-H4WNoQWX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
