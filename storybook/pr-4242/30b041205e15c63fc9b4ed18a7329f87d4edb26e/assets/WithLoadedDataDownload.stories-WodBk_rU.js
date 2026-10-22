import{f as b,j as a,r as i}from"./iframe-CImoBJWj.js";import{O as u}from"./object-table-DL5c9H-I.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-IQX6vey9.js";import"./Table-CQfoTNXr.js";import"./index-Cup5tXcg.js";import"./Dialog-gzf1dTtp.js";import"./cross-BqnYY50C.js";import"./svgIconContainer-CDIM8d0X.js";import"./useBaseUiId-DK9CjSol.js";import"./InternalBackdrop-1dyRFkhN.js";import"./composite-wTqD7xb9.js";import"./index-Bp-sZfW0.js";import"./index-BO30NG2p.js";import"./index-B-OKDmMN.js";import"./useEventCallback-8HkFD2y4.js";import"./SkeletonBar-lAqm2yHw.js";import"./LoadingCell-CpuycdTi.js";import"./ColumnConfigDialog-BFF9Iipx.js";import"./DraggableList-C6WGiMx5.js";import"./search-C3EkrB74.js";import"./Input-Soc66haA.js";import"./useControlled-5ShBBeuE.js";import"./Button-DBcwhCWE.js";import"./small-cross-DUFIOJxP.js";import"./ActionButton-BVwRTNVr.js";import"./Checkbox-BeFewm7l.js";import"./useValueChanged-DU8FQ44D.js";import"./CollapsiblePanel-C80L8NQi.js";import"./MultiColumnSortDialog-BppAEswF.js";import"./MenuTrigger-Z2wUq8Et.js";import"./CompositeItem-wd-v0oiM.js";import"./ToolbarRootContext-UrwTEYWQ.js";import"./getDisabledMountTransitionStyles-CETjyBx5.js";import"./getPseudoElementBounds-BLg8_Dqh.js";import"./chevron-down-By6KsCFI.js";import"./index-CvP_uE7p.js";import"./error-BhWP_ezt.js";import"./BaseCbacBanner-CJB9uIFr.js";import"./makeExternalStore-DWGtL2cW.js";import"./Tooltip-C-UE3W8B.js";import"./PopoverPopup-B6cucSon.js";import"./debounce-CkFI5VMc.js";import"./useOsdkClient-DqZgonFV.js";import"./tick-B2SLTcTU.js";import"./DropdownField-BPXOmhtU.js";import"./isEqual-CLpA2JNp.js";import"./withOsdkMetrics-BzR5lmI7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
