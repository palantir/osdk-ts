import{f as b,j as a,r as i}from"./iframe-BOWU70X1.js";import{O as u}from"./object-table-cgavINgx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DsrGzdLY.js";import"./Table-DOvh1xsn.js";import"./index-Dqy6Gfe7.js";import"./Dialog-B3WyzR5G.js";import"./cross-CVkoRI6N.js";import"./svgIconContainer-B9QIza-c.js";import"./useBaseUiId-8tGgV_0l.js";import"./InternalBackdrop-D2-B01xw.js";import"./composite-CSfG6ZaY.js";import"./index-BfjmLFxg.js";import"./index-DAEdDj8Q.js";import"./index-BSYQw0Uy.js";import"./useEventCallback-CoK8fJ8c.js";import"./SkeletonBar-xXHQ0iAC.js";import"./LoadingCell-CeE69STT.js";import"./ColumnConfigDialog-D3gFq4wl.js";import"./DraggableList-Dp5fZ28N.js";import"./search-Bm_8-FpL.js";import"./Input-Ba0NW75w.js";import"./useControlled-BdeVhzxt.js";import"./Button-BvbX1UI9.js";import"./small-cross-DKR3JJry.js";import"./ActionButton-CK7KXvFI.js";import"./Checkbox-pIrtE80l.js";import"./useValueChanged-Cko8QSI4.js";import"./CollapsiblePanel-IZqS99Hx.js";import"./MultiColumnSortDialog-C_pNjzkQ.js";import"./MenuTrigger-B1Guhxs6.js";import"./CompositeItem-CIAYfkGT.js";import"./ToolbarRootContext-CaVCFQJS.js";import"./getDisabledMountTransitionStyles-DisM1mEX.js";import"./getPseudoElementBounds-Beh_f-hj.js";import"./chevron-down-B1Z7ByUI.js";import"./index-utUHJIrZ.js";import"./error-BjTP1vhZ.js";import"./BaseCbacBanner-C_PYpr4S.js";import"./makeExternalStore-BS5Bz3Hp.js";import"./Tooltip-CWU8oDpl.js";import"./PopoverPopup-CZm5dGxt.js";import"./debounce-C0cDACkJ.js";import"./useOsdkClient-D5uHxQat.js";import"./tick-ByRVlpzT.js";import"./DropdownField-DmaOVCkJ.js";import"./isEqual-DMW34l0I.js";import"./withOsdkMetrics-Bjyc-H5X.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
