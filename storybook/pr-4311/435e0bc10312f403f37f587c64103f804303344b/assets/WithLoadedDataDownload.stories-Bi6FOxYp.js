import{f as b,j as a,r as i}from"./iframe-CvsrxUF4.js";import{O as u}from"./object-table-BGRqFDk_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-uWi1ckbZ.js";import"./Table-FapocmMs.js";import"./index-DCyy6adA.js";import"./Dialog-BcIQF-0e.js";import"./cross-DtTtrll4.js";import"./svgIconContainer-DzgbD020.js";import"./useBaseUiId-B5t4I27A.js";import"./InternalBackdrop-Cugch1V3.js";import"./composite-B3OVmB-U.js";import"./index-DJNWwc48.js";import"./index-CEMwvdDY.js";import"./index-AdzqFMQC.js";import"./useEventCallback-CWso9AzW.js";import"./SkeletonBar-DNcYviI0.js";import"./LoadingCell-D4aa-3Yl.js";import"./ColumnConfigDialog-Gsmn_JKq.js";import"./DraggableList-Dt_y-hjj.js";import"./search-DUdimr2h.js";import"./Input-C5HOYdeG.js";import"./useControlled-m2VSv2nN.js";import"./Button-COOo6KA1.js";import"./small-cross-BdHCzf60.js";import"./ActionButton-BacuR1Ht.js";import"./Checkbox-Cu78tutu.js";import"./useValueChanged-DJNKhzCf.js";import"./CollapsiblePanel-C8Ffq7bK.js";import"./MultiColumnSortDialog-CFw1tWaG.js";import"./MenuTrigger-MhD22OcO.js";import"./CompositeItem-Df2qP5O_.js";import"./ToolbarRootContext-CSZctfrL.js";import"./getDisabledMountTransitionStyles-BqX912Sn.js";import"./getPseudoElementBounds-C85wL7-g.js";import"./chevron-down-eSVm9fha.js";import"./index-DWgnpQrU.js";import"./error-DR19w44a.js";import"./BaseCbacBanner-B4OTIvOe.js";import"./makeExternalStore-BsYlQUVX.js";import"./Tooltip-B-kgUKy-.js";import"./PopoverPopup-DNc4ifyx.js";import"./debounce-CNMotwK2.js";import"./useOsdkClient-7BSZc32P.js";import"./tick-NgklbaJL.js";import"./DropdownField-CdiCIvXD.js";import"./isEqual-CIWEuh_q.js";import"./withOsdkMetrics-DQZsQ0ny.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
