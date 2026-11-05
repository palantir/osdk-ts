import{f as b,j as a,r as i}from"./iframe-RocwcLA1.js";import{O as u}from"./object-table-BrowN1D4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bi11_lQh.js";import"./Table-BeLYz7uY.js";import"./index-CPYhK6Tm.js";import"./Dialog-CuZ5OQb1.js";import"./cross-BgyJlmiP.js";import"./svgIconContainer-DLWtp0BU.js";import"./useBaseUiId-CBnRLDYk.js";import"./InternalBackdrop-DmC9pE0x.js";import"./composite-CcO-1qH0.js";import"./index-BnYAAGls.js";import"./index-CYrtNoCb.js";import"./index-CqKREmsT.js";import"./useEventCallback-CTQI-oGY.js";import"./SkeletonBar-DsYTpZqP.js";import"./LoadingCell-ObbDg5k5.js";import"./ColumnConfigDialog-B_Lr4FBf.js";import"./DraggableList-Ddkm9W7N.js";import"./search-vjT1hCHx.js";import"./Input-CcAG7gXy.js";import"./useControlled-Bbowgw5B.js";import"./Button-BNn-NlyQ.js";import"./small-cross-Dl_P2df6.js";import"./ActionButton-BCQKfrqp.js";import"./Checkbox-Ck2XR2UN.js";import"./useValueChanged-BedL59h3.js";import"./CollapsiblePanel-CmwuXWb4.js";import"./MultiColumnSortDialog-DLBjnobr.js";import"./MenuTrigger-CkSTpP0b.js";import"./CompositeItem-CRCvuWR7.js";import"./ToolbarRootContext-Cn6bmXqK.js";import"./getDisabledMountTransitionStyles-Cz_F6_AI.js";import"./getPseudoElementBounds-Dgc6Xv0e.js";import"./chevron-down-C7FnpsrF.js";import"./index-DmXTiMr0.js";import"./error-DACjt9aW.js";import"./BaseCbacBanner-DURaiKed.js";import"./makeExternalStore-B-sos_Fc.js";import"./Tooltip-CaSy6w0D.js";import"./PopoverPopup-CewEisyu.js";import"./debounce-V1uFoEkK.js";import"./useOsdkClient-6Q8tx1W_.js";import"./tick-ZxNKxEMa.js";import"./DropdownField-i887lUmw.js";import"./isEqual-DMqshNMZ.js";import"./withOsdkMetrics-D9G4bz54.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
