import{f as b,j as a,r as i}from"./iframe-CDYdpxWh.js";import{O as u}from"./object-table-BjnWrH01.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CkE461ve.js";import"./Table-CjJV4sLf.js";import"./index-BDIxaxLo.js";import"./Dialog-BCMaIp31.js";import"./cross-oT0hm_vb.js";import"./svgIconContainer-CHuNpbq1.js";import"./useBaseUiId-CUhIEzim.js";import"./InternalBackdrop-B3fYgT8p.js";import"./composite-rscbUgln.js";import"./index-Dh4Ma2cK.js";import"./index-DTjfrKc-.js";import"./index-BCnZqWBV.js";import"./useEventCallback-b289-p9H.js";import"./SkeletonBar-yRXBaiBE.js";import"./LoadingCell-BtByd-IS.js";import"./ColumnConfigDialog-CxQXLoNC.js";import"./DraggableList-D1f34AP8.js";import"./search-DOJNPKi3.js";import"./Input-BmXHCQaU.js";import"./useControlled-BZuuCA_k.js";import"./Button-B9zOHmCX.js";import"./small-cross-BEQ-ib7U.js";import"./ActionButton-Ck63C7O6.js";import"./Checkbox-BEImIYGg.js";import"./useValueChanged-rfKvsQCF.js";import"./CollapsiblePanel-DeVfDs5X.js";import"./MultiColumnSortDialog-DiVuI_tD.js";import"./MenuTrigger-DD5GtTNj.js";import"./CompositeItem-BTvB014k.js";import"./ToolbarRootContext-Cua-jDew.js";import"./getDisabledMountTransitionStyles-jtYZ-5fr.js";import"./getPseudoElementBounds-DkrZo1x4.js";import"./chevron-down--F9l2MVX.js";import"./index-DTpaMTKB.js";import"./error-BRoJe7F1.js";import"./BaseCbacBanner-D_Iu1OFt.js";import"./makeExternalStore-BpabXzBh.js";import"./Tooltip-Bcibbl9B.js";import"./PopoverPopup-B3plVJqJ.js";import"./debounce-DDBUoCd_.js";import"./useOsdkClient-992L-qjf.js";import"./tick-DYCePGsU.js";import"./DropdownField-cy05WkxS.js";import"./isEqual-IO0SWj-x.js";import"./withOsdkMetrics-_ioV7svt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
