import{f as b,j as a,r as i}from"./iframe-00do0GFe.js";import{O as u}from"./object-table-DiR-FaNs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BybtXQP0.js";import"./Table-BKn5_CcO.js";import"./index-BGd643c2.js";import"./Dialog-DZpgZl9y.js";import"./cross-nwDujSFV.js";import"./svgIconContainer-CFcIosnA.js";import"./useBaseUiId-C50NdykD.js";import"./InternalBackdrop-XKvPUnKv.js";import"./composite-CGwb3jqo.js";import"./index-DK-iGYU_.js";import"./index-ClkWJhJu.js";import"./index-BF61uIwD.js";import"./useEventCallback-CGFFFkW3.js";import"./SkeletonBar-DOhvYthq.js";import"./LoadingCell-BhVc_Ot-.js";import"./ColumnConfigDialog-CBPh_sEx.js";import"./DraggableList-BRKzpJry.js";import"./search-DAKi-R5m.js";import"./Input-CRsXFG3m.js";import"./useControlled-DE2hx_aJ.js";import"./Button-yWAqZOyg.js";import"./small-cross-kY3MxGtM.js";import"./ActionButton-CJdA5_XP.js";import"./Checkbox-Bjy1d07i.js";import"./useValueChanged-FfQ9ockF.js";import"./CollapsiblePanel-Dp6K32AY.js";import"./MultiColumnSortDialog-DGIUavBa.js";import"./MenuTrigger-lziekmwX.js";import"./CompositeItem-Ds6yjvWK.js";import"./ToolbarRootContext-Ck2kYzW4.js";import"./getDisabledMountTransitionStyles-B8mp5Bgl.js";import"./getPseudoElementBounds-DbGLAZdP.js";import"./chevron-down-CuokWr8C.js";import"./index-zNKGDfNB.js";import"./error-7ouMyDWT.js";import"./BaseCbacBanner-DvOVDYvy.js";import"./makeExternalStore-DtGkD75o.js";import"./Tooltip-9gQx4epj.js";import"./PopoverPopup-CgcJU5ml.js";import"./debounce-CxsjR9Qp.js";import"./useOsdkClient-0rxWFgg-.js";import"./tick-ClP-zKk3.js";import"./DropdownField-f3ouS_Ve.js";import"./isEqual-PkqQWSMC.js";import"./withOsdkMetrics-D58QOMrM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
