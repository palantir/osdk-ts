import{f as b,j as a,r as i}from"./iframe-D9n701Ys.js";import{O as u}from"./object-table-BizpJslV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BI_fxZPk.js";import"./Table-CutNVAQx.js";import"./index-CbEzyV1X.js";import"./Dialog-CXLFnIBC.js";import"./cross-BppzrARv.js";import"./svgIconContainer-Cfu6rTke.js";import"./useBaseUiId-C8QNh5qm.js";import"./InternalBackdrop-BwVtWjY3.js";import"./composite-CgbYFNDd.js";import"./index-Do729ms_.js";import"./index-CG4_exb9.js";import"./index-CCuh3nB8.js";import"./useEventCallback-c1E4yQgB.js";import"./SkeletonBar-CFeqcB6X.js";import"./LoadingCell-ClQ2LfUZ.js";import"./ColumnConfigDialog-CDoRnxye.js";import"./DraggableList-Cq1jnUvt.js";import"./search-R5UEkk1x.js";import"./Input-b-ZppXLs.js";import"./useControlled-C1GYaTFT.js";import"./Button-CangFNCI.js";import"./small-cross-CQ7WyUh5.js";import"./ActionButton-DlO2Ifvc.js";import"./Checkbox-CABhA5HZ.js";import"./minus-Dq4-qQQc.js";import"./tick-CTH94ksV.js";import"./useValueChanged-RemNEsBU.js";import"./caret-down-DrLBwqh3.js";import"./CollapsiblePanel-D0CIZbnp.js";import"./MultiColumnSortDialog-ByOYwv0t.js";import"./MenuTrigger-2IeO-3Ty.js";import"./CompositeItem-vO31IQr7.js";import"./ToolbarRootContext-C9daeDPO.js";import"./getDisabledMountTransitionStyles-CQaYc9AQ.js";import"./getPseudoElementBounds-BYR7zSsN.js";import"./chevron-down-DdjyVf3L.js";import"./index-BdxcJaYj.js";import"./error-9wk2xizV.js";import"./BaseCbacBanner-9X4EWrFr.js";import"./makeExternalStore-BZ2jZRf_.js";import"./Tooltip-Ci5C2OIY.js";import"./PopoverPopup-CGHGBGxb.js";import"./toNumber-Sqsr3EvX.js";import"./useOsdkClient-Ctpw2-C5.js";import"./DropdownField-OPL9AZr9.js";import"./withOsdkMetrics-Cunxg9x2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
