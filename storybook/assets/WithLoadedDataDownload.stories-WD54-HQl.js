import{f as b,j as a,r as i}from"./iframe-u9hOX5tX.js";import{O as u}from"./object-table-BJHX7Vyh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BzgweOE7.js";import"./index-DxD8FM_1.js";import"./Dialog-DVGdVo-X.js";import"./cross-DrLAndSC.js";import"./svgIconContainer-BhCzJfro.js";import"./useBaseUiId-NreGDPh5.js";import"./InternalBackdrop-P_7OvP9a.js";import"./composite-B0ATBYyt.js";import"./index-CiR2ByAS.js";import"./index-Bn7Z55t6.js";import"./index-CFOUBP5K.js";import"./useEventCallback-CHykcO5e.js";import"./SkeletonBar-DoUbz6Ni.js";import"./LoadingCell-CQ6s98i_.js";import"./ColumnConfigDialog-Bz70j5Ne.js";import"./DraggableList-DVHeZQF9.js";import"./search-D3Zuzx7q.js";import"./Input-DUgdjwsc.js";import"./useControlled-Bfp9z5LY.js";import"./Button-DIQR92sZ.js";import"./small-cross-Dlcf9okf.js";import"./ActionButton-C0VbMkfx.js";import"./Checkbox-tT1GQ2wN.js";import"./useValueChanged-ZtLxRCub.js";import"./CollapsiblePanel-CWP0NHJq.js";import"./MultiColumnSortDialog-USQ-f1i6.js";import"./MenuTrigger-DC5MUKls.js";import"./CompositeItem-mIZsnJNz.js";import"./ToolbarRootContext-C-NXaLDf.js";import"./getDisabledMountTransitionStyles-CtlgkIoY.js";import"./getPseudoElementBounds-C7nlu7dc.js";import"./chevron-down-DJMNDdHU.js";import"./index-DBgJDRZ-.js";import"./error-BYByE55v.js";import"./BaseCbacBanner-COgIJB5W.js";import"./makeExternalStore-j84EUnMN.js";import"./Tooltip-uYEwdezG.js";import"./PopoverPopup-D5EtTsUF.js";import"./debounce-DDOmq6Bw.js";import"./useOsdkClient-hhbELhlD.js";import"./tick-ChqeFAL5.js";import"./DropdownField-C8giUWCR.js";import"./isEqual-QkICyt9V.js";import"./withOsdkMetrics-DZo9ZLyt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
