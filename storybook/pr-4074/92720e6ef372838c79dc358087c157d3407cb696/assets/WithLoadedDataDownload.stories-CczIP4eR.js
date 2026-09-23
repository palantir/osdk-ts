import{f as b,j as a,r as i}from"./iframe-Cav9-PmA.js";import{O as u}from"./object-table-FfWcaoHB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C5qWD71s.js";import"./Table-Df9qMKmC.js";import"./index-CL4yhLt9.js";import"./Dialog-DrrXMeVl.js";import"./cross-Clu4CbjC.js";import"./svgIconContainer-DLGQs5zG.js";import"./useBaseUiId-FJrmMdaq.js";import"./InternalBackdrop-B6mZpXks.js";import"./composite-BhU6OEFZ.js";import"./index-B3WsbxUl.js";import"./index-CB0DImnr.js";import"./index-BK2mdNIa.js";import"./useEventCallback-DzYDdyjP.js";import"./SkeletonBar-DYSwTtQ7.js";import"./LoadingCell-DU86OTGa.js";import"./ColumnConfigDialog-B-Y2u4gB.js";import"./DraggableList-Cg_3j8gI.js";import"./search-LZGc9ZDj.js";import"./Input-BztqfZ4v.js";import"./useControlled-D_WTTjhN.js";import"./Button-lsqLjeDU.js";import"./small-cross-CLC5iKl2.js";import"./ActionButton-DmiOjJKj.js";import"./Checkbox-D_fY4w-O.js";import"./useValueChanged-LKsB26MY.js";import"./CollapsiblePanel-BlEs5D1u.js";import"./MultiColumnSortDialog-DDkUkQLe.js";import"./MenuTrigger-A8bLi2al.js";import"./CompositeItem-COO8IGaX.js";import"./ToolbarRootContext-BTcyHQC1.js";import"./getDisabledMountTransitionStyles-BN7EVmAM.js";import"./getPseudoElementBounds-Dlr5-0YW.js";import"./chevron-down-8Euui_dn.js";import"./index-CGDltp0P.js";import"./error-DdLyc_Py.js";import"./BaseCbacBanner-BtRv0qqS.js";import"./makeExternalStore-ZoA1Ll7J.js";import"./Tooltip-DXJLfO__.js";import"./PopoverPopup-Z0-leGqd.js";import"./debounce-Cq7GTWpW.js";import"./useOsdkClient-CyrMft84.js";import"./tick-UiUEGSqj.js";import"./DropdownField-B1NLU9Rd.js";import"./isEqual-D3uVPOsR.js";import"./withOsdkMetrics-Bmf3O0C1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
