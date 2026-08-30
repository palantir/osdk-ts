import{f as b,j as a,r as i}from"./iframe-CpMx7Aup.js";import{O as u}from"./object-table-CQ9NHIze.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CoTSq2F1.js";import"./Table-D070iMiq.js";import"./index-CxmY32cc.js";import"./Dialog-CKQoeaGr.js";import"./cross-TTsfy-0d.js";import"./svgIconContainer-CuSLG6cZ.js";import"./useBaseUiId-BekKaTSH.js";import"./InternalBackdrop-BxzT_GXx.js";import"./composite-BGRmFTC1.js";import"./index-CwBRzy5n.js";import"./index-DLO22dOn.js";import"./index-Bo6mI2yo.js";import"./useEventCallback-BONFFk7M.js";import"./SkeletonBar-CHgFWFkJ.js";import"./LoadingCell-Ba5LJYpB.js";import"./ColumnConfigDialog-Dj6kTDTV.js";import"./DraggableList-CJSICoS0.js";import"./search-DT0Xyteo.js";import"./Input-DsbvGidK.js";import"./useControlled-wTvX_DQ4.js";import"./Button-BDW79Pmx.js";import"./small-cross-Cu-Pzvda.js";import"./ActionButton-hedLhO3x.js";import"./Checkbox-BxJY3Vfd.js";import"./useValueChanged-KVTl21Rk.js";import"./CollapsiblePanel-DYNCNbyF.js";import"./MultiColumnSortDialog-5fG9yuAQ.js";import"./MenuTrigger-BMZyb9jf.js";import"./CompositeItem-Bh3v2N_o.js";import"./ToolbarRootContext-BxbNKn3r.js";import"./getDisabledMountTransitionStyles-CuE4vLcj.js";import"./getPseudoElementBounds-C2W2CV61.js";import"./chevron-down-Dvd8o3b0.js";import"./index-B9i6lMRF.js";import"./error-Cj7z7_gc.js";import"./BaseCbacBanner-DgjfwfFe.js";import"./makeExternalStore-BjX6ObK7.js";import"./Tooltip-BbITICOb.js";import"./PopoverPopup-B8EGxqrk.js";import"./debounce-DD2I4-Hh.js";import"./useOsdkClient-B61ahtGb.js";import"./tick-B27PtLKc.js";import"./DropdownField-ZSaIODjv.js";import"./isEqual-BekYRNr0.js";import"./withOsdkMetrics-DmITN5ju.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
