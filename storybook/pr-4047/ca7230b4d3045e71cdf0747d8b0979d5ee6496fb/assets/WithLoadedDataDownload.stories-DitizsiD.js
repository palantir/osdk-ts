import{f as b,j as a,r as i}from"./iframe-BLH-rzjX.js";import{O as u}from"./object-table-D-6ov8rd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Boseizqx.js";import"./Table-C-l9FtnV.js";import"./index-BshiJ0vb.js";import"./Dialog-BbzT8uGy.js";import"./cross-CjxN7NXy.js";import"./svgIconContainer-ClFD8O3h.js";import"./useBaseUiId-_L7E6isP.js";import"./InternalBackdrop-DJXpTlYo.js";import"./composite-CJF2SW-C.js";import"./index-CjzgRjXg.js";import"./index-1GWYtBv5.js";import"./index-DhrrZED7.js";import"./useEventCallback-CvA-dmQo.js";import"./SkeletonBar-2jCSSfIk.js";import"./LoadingCell-Dgx9nWzQ.js";import"./ColumnConfigDialog-CvYNYs5O.js";import"./DraggableList-CQlronkH.js";import"./search-Dcpgl82t.js";import"./Input-ChiRpiSd.js";import"./useControlled-DoMCNvxt.js";import"./Button-Cb7__wFY.js";import"./small-cross-CxW1zdvK.js";import"./ActionButton-CNmUd466.js";import"./Checkbox-CDybbOiX.js";import"./useValueChanged-BtzRyrp7.js";import"./CollapsiblePanel-D2wDAZ7-.js";import"./MultiColumnSortDialog-DtmEBHii.js";import"./MenuTrigger-C_w6gyFE.js";import"./CompositeItem-tv6DhAGC.js";import"./ToolbarRootContext-N5PisKcU.js";import"./getDisabledMountTransitionStyles-D801SK_0.js";import"./getPseudoElementBounds-DPi59aQg.js";import"./chevron-down-gdTU0sCy.js";import"./index-D07nHwth.js";import"./error-CxjKCqiV.js";import"./BaseCbacBanner-Bk_IZ-ld.js";import"./makeExternalStore-VNm4xFie.js";import"./Tooltip-CNF5wHNx.js";import"./PopoverPopup-C1mq6siy.js";import"./debounce-7gj880Zc.js";import"./useOsdkClient-B89sr5Rr.js";import"./tick-Do25CLpe.js";import"./DropdownField-DKQdUIUg.js";import"./isEqual-BYAPAqkH.js";import"./withOsdkMetrics-CNvw97j4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
