import{f as b,j as a,r as i}from"./iframe-CiSnmsUY.js";import{O as u}from"./object-table-DI2vK7kf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DB05R4R8.js";import"./Table-D5XQxyos.js";import"./index-DtqJWAR1.js";import"./Dialog-B1l4PhW9.js";import"./cross-DqJ3usLj.js";import"./svgIconContainer-YAuGbdcX.js";import"./useBaseUiId-BgbryNLv.js";import"./InternalBackdrop-BP7YEs8y.js";import"./composite-C3rcy89N.js";import"./index-C3RlImgP.js";import"./index-MxmlqxL7.js";import"./index-BNNnVfG-.js";import"./useEventCallback-DqunfGDv.js";import"./SkeletonBar-DpUtUaVO.js";import"./LoadingCell-BmGY6OV1.js";import"./ColumnConfigDialog-B1LIhsIP.js";import"./DraggableList-DyQZfIr6.js";import"./search-BuUGV3qm.js";import"./Input-DIUphC8P.js";import"./useControlled-D6zDOA9R.js";import"./Button-zNL5TU8S.js";import"./small-cross-DoXZmpls.js";import"./ActionButton-CQ0ZQbLI.js";import"./Checkbox-DU95N0wx.js";import"./useValueChanged-hsux432g.js";import"./CollapsiblePanel-7EwtkYsj.js";import"./MultiColumnSortDialog-DRC-l6TU.js";import"./MenuTrigger-BqEoGnj9.js";import"./CompositeItem-CZisrTyk.js";import"./ToolbarRootContext-DiETc3Jn.js";import"./getDisabledMountTransitionStyles-KZsVWxev.js";import"./getPseudoElementBounds-CuJTK0LC.js";import"./chevron-down-NvsSukNZ.js";import"./index-Cyar7n9t.js";import"./error-D4igt9j_.js";import"./BaseCbacBanner-Cw3yM5Ky.js";import"./makeExternalStore-QQZ63Ao7.js";import"./Tooltip-Db4p9Oq_.js";import"./PopoverPopup-NTD0YB3Q.js";import"./debounce-BF_mGk1a.js";import"./useOsdkClient-CXCEo80y.js";import"./tick-BKrT4vVQ.js";import"./DropdownField-CjTR3tJv.js";import"./isEqual-Dj8Z5w_m.js";import"./withOsdkMetrics-B44dBrFm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
