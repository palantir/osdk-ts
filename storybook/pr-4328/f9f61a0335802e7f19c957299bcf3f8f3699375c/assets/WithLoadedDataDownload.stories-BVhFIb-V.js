import{f as b,j as a,r as i}from"./iframe-BWanzCtz.js";import{O as u}from"./object-table-CwNOXM7e.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DAi-P9Ju.js";import"./Table-BV5-Gg4n.js";import"./index-Cay7iVqb.js";import"./Dialog-BLyGAnT7.js";import"./cross-BVvC7Zca.js";import"./svgIconContainer-DSaD-I6F.js";import"./useBaseUiId-C5dN58Q0.js";import"./InternalBackdrop-TV8p7nHD.js";import"./composite-BafjzlJM.js";import"./index-ChQ5JBSj.js";import"./index-Dt-Mk7jk.js";import"./index-D9z2WP2p.js";import"./useEventCallback-BWB9gGvg.js";import"./SkeletonBar-CYNtPgHh.js";import"./LoadingCell-CuqD0XAT.js";import"./ColumnConfigDialog-DzAHMAUr.js";import"./DraggableList-D1yn9G39.js";import"./search-DRygowk4.js";import"./Input-Bt15IjV-.js";import"./useControlled-OnnNsrqI.js";import"./Button-BAzXvXXK.js";import"./small-cross-CVFLscZG.js";import"./ActionButton-BVuwYTIs.js";import"./Checkbox-ZZCzmUtb.js";import"./useValueChanged-KxYyG3ZS.js";import"./CollapsiblePanel-BgKRL3mk.js";import"./MultiColumnSortDialog-5nGqdLgE.js";import"./MenuTrigger-SRJmVwA-.js";import"./CompositeItem-BcxNHfQK.js";import"./ToolbarRootContext-De0bccAd.js";import"./getDisabledMountTransitionStyles-CvKZ4Y_-.js";import"./getPseudoElementBounds-O3K5JmaN.js";import"./chevron-down-BeOHwgJN.js";import"./index-CqrxIVAp.js";import"./error-CdqtE7bq.js";import"./BaseCbacBanner-B4VASqii.js";import"./makeExternalStore-_zqsQAA7.js";import"./Tooltip-DLH2JBkg.js";import"./PopoverPopup-DgQdAKzP.js";import"./debounce-ChP0u6Gi.js";import"./useOsdkClient-CY0unRSX.js";import"./tick-BXFsjeh2.js";import"./DropdownField-ScfJ-83O.js";import"./isEqual-Dz8uBPxJ.js";import"./withOsdkMetrics-d8l__l47.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
