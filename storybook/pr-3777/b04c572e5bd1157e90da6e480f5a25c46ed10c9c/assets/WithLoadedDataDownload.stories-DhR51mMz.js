import{f as b,j as a,r as i}from"./iframe-B_IZKh8P.js";import{O as u}from"./object-table-BHBx1xhg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BSCxhMTJ.js";import"./Table-DWUB0BEu.js";import"./index-CnhyFb-r.js";import"./Dialog-Wm4jDDQn.js";import"./cross-hQMC7b3L.js";import"./svgIconContainer-Xsv1xEak.js";import"./useBaseUiId-Dr3xYZYx.js";import"./InternalBackdrop-CIvkvTEF.js";import"./composite-D9C4oNf8.js";import"./index-Cn6YA2O8.js";import"./index-CEu3xKdf.js";import"./index-Cz_FWict.js";import"./useEventCallback-psQhNNLf.js";import"./SkeletonBar-BOURZeYg.js";import"./LoadingCell-BsE1Vi6S.js";import"./ColumnConfigDialog-ByQeOPmB.js";import"./DraggableList-BkTfh7dw.js";import"./search-Bd9-hZh2.js";import"./Input-fcRS9Kmg.js";import"./useControlled-DNbx2H9c.js";import"./isEqual-CBO4YZX2.js";import"./isObject-BTbytGDT.js";import"./Button-BzbSQLjH.js";import"./ActionButton-DP2zPa-7.js";import"./Checkbox-hXQtnFKJ.js";import"./useValueChanged-DbQ39FoL.js";import"./CollapsiblePanel-BnA8neuU.js";import"./MultiColumnSortDialog-36rP3VXm.js";import"./MenuTrigger-5jncTReB.js";import"./CompositeItem-CFKw5_bq.js";import"./ToolbarRootContext-B8yBsSST.js";import"./getDisabledMountTransitionStyles-tSHMiDPJ.js";import"./getPseudoElementBounds-Bx5ztzSJ.js";import"./chevron-down-D7PGg54t.js";import"./index-C0Lj84kX.js";import"./error-SgZGkoCP.js";import"./BaseCbacBanner-CxEqfA_Y.js";import"./makeExternalStore-BAf1vw2Z.js";import"./Tooltip-Bepjyqd3.js";import"./PopoverPopup-BAI0fNYY.js";import"./toNumber-CZGRdJWc.js";import"./useOsdkClient-CKgeSwaI.js";import"./tick-B0vH2GvX.js";import"./DropdownField-DMPNyaBc.js";import"./withOsdkMetrics-Ch4rRkhY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
