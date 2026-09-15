import{f as b,j as a,r as i}from"./iframe-luQilSOF.js";import{O as u}from"./object-table-D_BqH1Hg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BKBqwCKh.js";import"./Table-BagWR1Ww.js";import"./index-Bz5LVora.js";import"./Dialog-Lv9F4OgU.js";import"./cross-dcAeg2cP.js";import"./svgIconContainer-Dg-z8JPf.js";import"./useBaseUiId-BIcPA1wg.js";import"./InternalBackdrop-CbMdhPVq.js";import"./composite-BqKU6h-l.js";import"./index-C2BPTamy.js";import"./index-CXosHwau.js";import"./index-BkNSozDa.js";import"./useEventCallback-Cac5EMzj.js";import"./SkeletonBar-DKdanr-N.js";import"./LoadingCell-DLmJphPR.js";import"./ColumnConfigDialog-CY95iwzL.js";import"./DraggableList-CF9NsHRJ.js";import"./search-B5llV8dS.js";import"./Input-BK5kzofZ.js";import"./useControlled-BcMtuVsI.js";import"./Button-CNpzMVry.js";import"./small-cross-DZFGtHrI.js";import"./ActionButton-BsMQ9zjV.js";import"./Checkbox-BZ25OhG5.js";import"./useValueChanged-sApPA-B_.js";import"./CollapsiblePanel-Dre8cIpY.js";import"./MultiColumnSortDialog-b-9uFQN3.js";import"./MenuTrigger-BjxfWAfx.js";import"./CompositeItem-5KLXQsnX.js";import"./ToolbarRootContext-iSsHGgjo.js";import"./getDisabledMountTransitionStyles-DuXtt4zv.js";import"./getPseudoElementBounds-DdBLUXDN.js";import"./chevron-down-DV7XSuWi.js";import"./index-BnFccNhI.js";import"./error-D7uvB3Tp.js";import"./BaseCbacBanner-BSCFDJYo.js";import"./makeExternalStore-D9PcNge9.js";import"./Tooltip-CDExLyRp.js";import"./PopoverPopup-B9ZyQpmI.js";import"./debounce-DhX6Egr1.js";import"./useOsdkClient-BsFMFNEo.js";import"./tick-D7ya3IWu.js";import"./DropdownField-CC2Dpk0A.js";import"./isEqual-DQb8zkzB.js";import"./withOsdkMetrics-CIz4zTAP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
