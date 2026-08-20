import{f as b,j as a,r as i}from"./iframe-BApgeGXl.js";import{O as u}from"./object-table-L9Ky81ED.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B5SDrfLX.js";import"./Table-CYUy2OZk.js";import"./index-D1DKxRCC.js";import"./Dialog-BUikXbV8.js";import"./cross-ZTt9cbvY.js";import"./svgIconContainer-DsyE7o9I.js";import"./useBaseUiId-HvC3sL6i.js";import"./InternalBackdrop--ZTWLfQl.js";import"./composite-CfLZxk0Y.js";import"./index-D6GjFiH-.js";import"./index-T-rcUtZ2.js";import"./index-BjC4jF9D.js";import"./useEventCallback-BnHXtP8m.js";import"./SkeletonBar-CFo_1ayu.js";import"./LoadingCell-BHTZiZSs.js";import"./ColumnConfigDialog-CxHOLgQs.js";import"./DraggableList-iPa5GZpO.js";import"./search-DA1A23L5.js";import"./Input-JtvTue8M.js";import"./useControlled-DwtdN-yM.js";import"./Button-C7YfkSI7.js";import"./small-cross-Vh49dVTG.js";import"./ActionButton-juathNjQ.js";import"./Checkbox-C7tXqNxh.js";import"./useValueChanged-e4ysBGYq.js";import"./CollapsiblePanel-B5H4huYa.js";import"./MultiColumnSortDialog-Ch07S50J.js";import"./MenuTrigger-DHzhysiY.js";import"./CompositeItem-Di2z5EXS.js";import"./ToolbarRootContext-BucTdyIl.js";import"./getDisabledMountTransitionStyles-B5BYpj3H.js";import"./getPseudoElementBounds-ATfKY2eH.js";import"./chevron-down-DFCusqRp.js";import"./index-BZG1se71.js";import"./error-D3Ew2_Fi.js";import"./BaseCbacBanner-Bee4-SeT.js";import"./makeExternalStore-DvSdjbOg.js";import"./Tooltip-Ca9hBF2Y.js";import"./PopoverPopup-DGPJk_zW.js";import"./debounce-BnXt5WXY.js";import"./useOsdkClient-UetNUWte.js";import"./tick-CxJ8OjsD.js";import"./DropdownField-CITGD--l.js";import"./isEqual-uxWSHrgG.js";import"./withOsdkMetrics-RpuKM6nt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
