import{f as b,j as a,r as i}from"./iframe-Eth4DscF.js";import{O as u}from"./object-table-Cbv16qZw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D5DT8Gvv.js";import"./Table-BsZxvL7o.js";import"./index-CaJ3mqr2.js";import"./Dialog-BnNgj-DK.js";import"./cross-BwB0DXiU.js";import"./svgIconContainer-CoGRC72I.js";import"./useBaseUiId-B7RIhr15.js";import"./InternalBackdrop-CLNMJjbi.js";import"./composite-qIMfmfrB.js";import"./index-Cfo3ydBu.js";import"./index-B8aJ10lX.js";import"./index-DxmuItap.js";import"./useEventCallback-CCdM5L8S.js";import"./SkeletonBar-DiGFHRwx.js";import"./LoadingCell-DzayPawF.js";import"./ColumnConfigDialog-DtmA5b3f.js";import"./DraggableList-DSB2Ts9s.js";import"./search-CJHLYodH.js";import"./Input-4EN0R4Wx.js";import"./useControlled-E-2hYUgD.js";import"./Button-DxVY95w9.js";import"./small-cross-CJlA-_gF.js";import"./ActionButton-C6R1Vics.js";import"./Checkbox-nUwQbfWm.js";import"./useValueChanged-BesFItDX.js";import"./CollapsiblePanel-yBgFB804.js";import"./MultiColumnSortDialog-S4UpD3Tj.js";import"./MenuTrigger-CizIxwTs.js";import"./CompositeItem-DlxbA5eX.js";import"./ToolbarRootContext-DZvBkO8Q.js";import"./getDisabledMountTransitionStyles-B5ZEbLKX.js";import"./getPseudoElementBounds-BtlXh7MV.js";import"./chevron-down-CqqSfn04.js";import"./index-Daf7mDrl.js";import"./error-BXTM1REk.js";import"./BaseCbacBanner-Dz7j698m.js";import"./makeExternalStore-2rYtWHIa.js";import"./Tooltip-drCTzUWh.js";import"./PopoverPopup-C3fOznkb.js";import"./debounce-Cu_1wwlT.js";import"./useOsdkClient--sVmWpOM.js";import"./tick-BmqhilVd.js";import"./DropdownField-BY08YoHL.js";import"./isEqual-DOeG1NN5.js";import"./withOsdkMetrics-HAEG8t0o.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
