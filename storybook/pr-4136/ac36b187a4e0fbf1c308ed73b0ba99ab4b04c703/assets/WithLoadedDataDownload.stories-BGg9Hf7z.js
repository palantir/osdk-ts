import{f as b,j as a,r as i}from"./iframe-i61RpjX7.js";import{O as u}from"./object-table-qScOeZBt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BXpoIj2B.js";import"./Table-DPaGzcaT.js";import"./index-DdznE6qG.js";import"./Dialog-n8hWaEri.js";import"./cross-BJRIAlLu.js";import"./svgIconContainer-BKu8iYZ4.js";import"./useBaseUiId-Dw1mKB5r.js";import"./InternalBackdrop-DQMAcjr6.js";import"./composite-q6o4xbG3.js";import"./index-B1Q3wqWk.js";import"./index-CFOl5jJr.js";import"./index-Clsp1HuI.js";import"./useEventCallback-Nm08Lt1H.js";import"./SkeletonBar-Cude-n-r.js";import"./LoadingCell-BdnUyRGB.js";import"./ColumnConfigDialog-CbRaWZqK.js";import"./DraggableList-CvhN3Aeo.js";import"./search-DcyXoMY2.js";import"./Input-BXW8qVNh.js";import"./useControlled-Bd2D0MOS.js";import"./Button-B7Ybnvxm.js";import"./small-cross-CIYzC3ci.js";import"./ActionButton-wKRTt0XG.js";import"./Checkbox-CHjLExp_.js";import"./useValueChanged-Cinp2v4c.js";import"./CollapsiblePanel-SYw_Fpkn.js";import"./MultiColumnSortDialog-CbME9xje.js";import"./MenuTrigger-DimCL05E.js";import"./CompositeItem-CfdrXiQ-.js";import"./ToolbarRootContext-BlDscewO.js";import"./getDisabledMountTransitionStyles-CVMvranO.js";import"./getPseudoElementBounds-CSfNVXL_.js";import"./chevron-down-BtDuC_bB.js";import"./index-DR7wvRAh.js";import"./error-DfGDPEBO.js";import"./BaseCbacBanner-D0JlEcok.js";import"./makeExternalStore-BnbaQL1F.js";import"./Tooltip-Wp77QFzG.js";import"./PopoverPopup-DWX144ju.js";import"./debounce-Du4i-gbv.js";import"./useOsdkClient-ABekNhIh.js";import"./tick-DDsYIRYo.js";import"./DropdownField-B2dzXe09.js";import"./isEqual-C0H2NPAK.js";import"./withOsdkMetrics-Cw5kaJur.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
