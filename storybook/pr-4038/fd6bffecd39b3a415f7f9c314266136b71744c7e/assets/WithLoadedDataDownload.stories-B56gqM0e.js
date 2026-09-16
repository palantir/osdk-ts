import{f as b,j as a,r as i}from"./iframe-voMwDu9I.js";import{O as u}from"./object-table-OMRvFpLe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-YavkZJGd.js";import"./Table-HID_wtcK.js";import"./index-C1wISBvp.js";import"./Dialog-DGl--fRl.js";import"./cross-Dtmq2APj.js";import"./svgIconContainer-BNVNdA9N.js";import"./useBaseUiId-h_zaYehG.js";import"./InternalBackdrop-Bg2Pn1be.js";import"./composite-DmYT7ddW.js";import"./index-Y79_UCBN.js";import"./index-T2NqJhn0.js";import"./index-FmnW_XGx.js";import"./useEventCallback-Bimyknxr.js";import"./SkeletonBar-BfD5j53C.js";import"./LoadingCell-nTTc6Rbq.js";import"./ColumnConfigDialog-DTW2qmKN.js";import"./DraggableList-47qY9eDY.js";import"./search-C1v65Y4n.js";import"./Input-fxz47iVN.js";import"./useControlled-DQz2j8QF.js";import"./Button-BuGgzmKH.js";import"./small-cross-CkCJfZA3.js";import"./ActionButton-h7gq_W3b.js";import"./Checkbox-DIaxw-mP.js";import"./useValueChanged-B51ZhceZ.js";import"./CollapsiblePanel-DTchAleF.js";import"./MultiColumnSortDialog-CFkANgFh.js";import"./MenuTrigger-BFiK90mT.js";import"./CompositeItem-DkKn9mJ-.js";import"./ToolbarRootContext-D3Zw5lJf.js";import"./getDisabledMountTransitionStyles-O0gDbVYL.js";import"./getPseudoElementBounds-BGhK9mLg.js";import"./chevron-down-C58xTrh7.js";import"./index-BRox0REU.js";import"./error-Dh0kRUzk.js";import"./BaseCbacBanner-jRpkz4dK.js";import"./makeExternalStore-D4KyXXBP.js";import"./Tooltip-DdvT815d.js";import"./PopoverPopup-B7NNXEVs.js";import"./debounce-CLoU_st_.js";import"./useOsdkClient-DI51Lvg2.js";import"./tick-CQYdHD5k.js";import"./DropdownField-HtDR-_bI.js";import"./isEqual-DCso8IO6.js";import"./withOsdkMetrics-DiALcgCI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
