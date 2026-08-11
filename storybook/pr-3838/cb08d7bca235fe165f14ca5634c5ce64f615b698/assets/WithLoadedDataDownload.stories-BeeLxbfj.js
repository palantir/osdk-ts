import{f as b,j as a,r as i}from"./iframe-PKQ9ibCT.js";import{O as u}from"./object-table--_rmj4Gv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BH7VrshK.js";import"./Table-BJvAxL9J.js";import"./index-ukVfuTjT.js";import"./Dialog-CHWnBS4i.js";import"./cross-DOJWIjq5.js";import"./svgIconContainer-YhegbL54.js";import"./useBaseUiId-DQlvSzSU.js";import"./InternalBackdrop-Cbkxpzju.js";import"./composite-tTdBmFM9.js";import"./index-BW8rGv1i.js";import"./index-DZmTL9O1.js";import"./index-DXRERb0v.js";import"./useEventCallback-TWSuTLFf.js";import"./SkeletonBar-BF2BXcUQ.js";import"./LoadingCell-BVRDgM_6.js";import"./ColumnConfigDialog-BWy13dE9.js";import"./DraggableList-NBRwcHk8.js";import"./search-DepRLaUT.js";import"./Input-D53UkdCo.js";import"./useControlled-CfOLBN9x.js";import"./isEqual-iwtzR--9.js";import"./isObject-Cj31Npi1.js";import"./Button-BRBjJXY9.js";import"./ActionButton-Dl0Sk01f.js";import"./Checkbox-D5gIBGDH.js";import"./useValueChanged-BMw49Xi8.js";import"./CollapsiblePanel-BttWpDAT.js";import"./MultiColumnSortDialog-ecqwI8o-.js";import"./MenuTrigger-CNRwb14Q.js";import"./CompositeItem-UPE06Smm.js";import"./ToolbarRootContext-B_pApPm-.js";import"./getDisabledMountTransitionStyles-BMnba74s.js";import"./getPseudoElementBounds-B-OF6H-7.js";import"./chevron-down-DK_Kvmib.js";import"./index-9HCV6PI6.js";import"./error-65-LfMMs.js";import"./BaseCbacBanner-BbayeaCd.js";import"./makeExternalStore-DsmTBrFd.js";import"./Tooltip-PkTE7Sf1.js";import"./PopoverPopup-Cj0NKnZI.js";import"./toNumber-D7LIoV4L.js";import"./useOsdkClient-C4aV9s_N.js";import"./tick-Df1xv9KR.js";import"./DropdownField-Tne5HCqs.js";import"./withOsdkMetrics-CcQyqJG6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
