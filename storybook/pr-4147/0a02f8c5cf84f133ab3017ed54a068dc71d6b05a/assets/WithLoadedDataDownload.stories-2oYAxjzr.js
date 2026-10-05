import{f as b,j as a,r as i}from"./iframe-BmTfPnlj.js";import{O as u}from"./object-table-DuwyKVEZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bt_1BQmW.js";import"./Table-BQzYY4p1.js";import"./index-Bm1AuuXK.js";import"./Dialog-CLdygFMh.js";import"./cross-1FUbPxXE.js";import"./svgIconContainer-B7k9FdbM.js";import"./useBaseUiId-CCBNiAGi.js";import"./InternalBackdrop-D1OaTL7l.js";import"./composite-EJeYuU8b.js";import"./index-CXPEIkSW.js";import"./index-SU5jaKKw.js";import"./index-CpTFd5F4.js";import"./useEventCallback-CthUr-8o.js";import"./SkeletonBar-xGbITfKH.js";import"./LoadingCell-im-jO5xv.js";import"./ColumnConfigDialog-DMDJcMq5.js";import"./DraggableList-B9SvoxHN.js";import"./search-CB8fQpSi.js";import"./Input-DCbUCzbU.js";import"./useControlled-DnL-NKvx.js";import"./Button-B5eSVAk7.js";import"./small-cross-C79mcn34.js";import"./ActionButton-cPylYcIf.js";import"./Checkbox-BWJ9MvvS.js";import"./useValueChanged-DFht__m8.js";import"./CollapsiblePanel-Gfd_BnuO.js";import"./MultiColumnSortDialog-BQzltBiA.js";import"./MenuTrigger-B34U6tOS.js";import"./CompositeItem-BMTpDb-Q.js";import"./ToolbarRootContext-BGVsEm7y.js";import"./getDisabledMountTransitionStyles-BN0kS-V3.js";import"./getPseudoElementBounds-DXAkgdW7.js";import"./chevron-down-BcbzO8DN.js";import"./index-CIA5CVhr.js";import"./error-DAivNTLD.js";import"./BaseCbacBanner-DpXuSF7U.js";import"./makeExternalStore-D35ZSxQs.js";import"./Tooltip-BF_5RxMC.js";import"./PopoverPopup-DP_BVDXy.js";import"./debounce-rwBGYxkZ.js";import"./useOsdkClient-Cv-kkUDW.js";import"./tick-BZF5qhIw.js";import"./DropdownField-CWmI2VfS.js";import"./isEqual-9M4q6ORL.js";import"./withOsdkMetrics-NcWgtcUH.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
