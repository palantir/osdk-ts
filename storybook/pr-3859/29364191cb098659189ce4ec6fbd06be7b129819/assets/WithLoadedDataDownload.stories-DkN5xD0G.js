import{f as b,j as a,r as i}from"./iframe-ClxO4NjR.js";import{O as u}from"./object-table-B_1CuulK.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C0zwqbnX.js";import"./Table-CPN45vOi.js";import"./index-BWCYhOnm.js";import"./Dialog-BuPKBq1e.js";import"./cross-DXyr0bNz.js";import"./svgIconContainer-BvC_SFje.js";import"./useBaseUiId-mbHRa4ig.js";import"./InternalBackdrop-DGb5grRA.js";import"./composite-B__OAHDn.js";import"./index-BZg1jqES.js";import"./index-DE2Njq5W.js";import"./index-DpzXFkZR.js";import"./useEventCallback-Co3RDJvl.js";import"./SkeletonBar-bSEBZ09P.js";import"./LoadingCell-CXMRjvOm.js";import"./ColumnConfigDialog-CHDvFhNn.js";import"./DraggableList-BMsve3lG.js";import"./search-C0Wbe_TX.js";import"./Input-CDMrsEOr.js";import"./useControlled-CBuD11wc.js";import"./isEqual-zsjKM9aa.js";import"./isObject-Cm7OR2iz.js";import"./Button-CrUVT3U1.js";import"./ActionButton-BYrKQTuf.js";import"./Checkbox-BQ07bYzl.js";import"./useValueChanged-DH6dVKYy.js";import"./CollapsiblePanel-Cn58OeIc.js";import"./MultiColumnSortDialog-BuljqIUh.js";import"./MenuTrigger-DzzjAqeR.js";import"./CompositeItem-CIWFMAgC.js";import"./ToolbarRootContext-CCOvFsGt.js";import"./getDisabledMountTransitionStyles-tEdN7Og9.js";import"./getPseudoElementBounds-C05aLgmo.js";import"./chevron-down-BXi8nOG0.js";import"./index-D92ajlqI.js";import"./error-97F9Ilv7.js";import"./BaseCbacBanner-DoEUJfvC.js";import"./makeExternalStore-CFCzzqiP.js";import"./Tooltip-dtP77QJH.js";import"./PopoverPopup-BCBH3KD8.js";import"./toNumber-D2QUkYkC.js";import"./useOsdkClient-COh8E9Bx.js";import"./tick-C-J6268_.js";import"./DropdownField-BvThcx6q.js";import"./withOsdkMetrics-CfQvwroh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
