import{f as b,j as a,r as i}from"./iframe-D4r_-dEc.js";import{O as u}from"./object-table-A7euv14f.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-6ZtcGGS6.js";import"./Table-XWns758I.js";import"./index-7caLYRtX.js";import"./Dialog-Dc1LT3hO.js";import"./cross-D7UvadIv.js";import"./svgIconContainer-Dh_c1Bbk.js";import"./useBaseUiId-Di53fTVw.js";import"./InternalBackdrop-CZm9G_S4.js";import"./composite-DCTx9hyK.js";import"./index-QrOM1WuB.js";import"./index-BMA4s8ZI.js";import"./index-CoFQrcih.js";import"./useEventCallback-DqALnZfq.js";import"./SkeletonBar-CvzkLxwM.js";import"./LoadingCell-CSLcXk57.js";import"./ColumnConfigDialog-B8OLPnjr.js";import"./DraggableList-BDTeK6ae.js";import"./search-DXq3JDJP.js";import"./Input-B2HDaQON.js";import"./useControlled-BmrimB4V.js";import"./Button-Bk2BCIeA.js";import"./small-cross-BkHUlaQn.js";import"./ActionButton-DP6StPqT.js";import"./Checkbox-CPRtZsV2.js";import"./useValueChanged-C-kvsFRL.js";import"./CollapsiblePanel-yRKwIWIq.js";import"./MultiColumnSortDialog-F4ahE3SX.js";import"./MenuTrigger-BlAB2oa9.js";import"./CompositeItem-Dyw9HZNd.js";import"./ToolbarRootContext-nt_JLtrz.js";import"./getDisabledMountTransitionStyles-BiBMpt_n.js";import"./getPseudoElementBounds-CEVXpGUD.js";import"./chevron-down-ToRQzCeL.js";import"./index-_HJbTBBE.js";import"./error-1vTQ2DTJ.js";import"./BaseCbacBanner-Cxz-7EBN.js";import"./makeExternalStore-6c6hwxKy.js";import"./Tooltip-C_exduk2.js";import"./PopoverPopup-fn5YEEDm.js";import"./debounce-DwQf9jej.js";import"./useOsdkClient-bldReknQ.js";import"./tick-D-AaSPeq.js";import"./DropdownField-H8Z-0aRQ.js";import"./isEqual-Ct3XBS6E.js";import"./withOsdkMetrics-CYIlN546.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
