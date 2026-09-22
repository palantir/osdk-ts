import{f as b,j as a,r as i}from"./iframe-8DMGEq06.js";import{O as u}from"./object-table-BsZYmEG3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BjAl-lK2.js";import"./Table-DORoQaHE.js";import"./index-DRq4gjPq.js";import"./Dialog-CNRW78Mx.js";import"./cross-DYaZw4Am.js";import"./svgIconContainer-B8_9Y0Zn.js";import"./useBaseUiId-B2FWNhGQ.js";import"./InternalBackdrop-CWiPG24p.js";import"./composite-CY_QXMLo.js";import"./index-D4LKk0YB.js";import"./index-mbbVtxqA.js";import"./index-Dx7C8aHO.js";import"./useEventCallback-3GlyZw2_.js";import"./SkeletonBar-Dc166Tvt.js";import"./LoadingCell-5wJcQGJ6.js";import"./ColumnConfigDialog--uixhz1y.js";import"./DraggableList-BqW39Lky.js";import"./search-CvifUsIK.js";import"./Input-dydaNapo.js";import"./useControlled-Khc0ddfA.js";import"./Button-CraGbNXA.js";import"./small-cross-CfjvRjN5.js";import"./ActionButton-BmVKHj0Y.js";import"./Checkbox-B-2SdFMj.js";import"./useValueChanged-N306h0K2.js";import"./CollapsiblePanel-BE0AM26B.js";import"./MultiColumnSortDialog-D2g0nz-7.js";import"./MenuTrigger-Byl2G7nz.js";import"./CompositeItem-Bb2gn4Bj.js";import"./ToolbarRootContext-Bepk2A_H.js";import"./getDisabledMountTransitionStyles-Dw-8Jwwa.js";import"./getPseudoElementBounds-C27BHV4s.js";import"./chevron-down-F_95MoSJ.js";import"./index-CsyOcyyy.js";import"./error-CiLZ8SWq.js";import"./BaseCbacBanner-R0l1YhLX.js";import"./makeExternalStore-NZ3mh5Ti.js";import"./Tooltip-CJOrSGc2.js";import"./PopoverPopup-CRsLokny.js";import"./debounce-D_Y9TVaa.js";import"./useOsdkClient-C_eIZF2J.js";import"./tick-IbzJph_T.js";import"./DropdownField-Bu7UETX6.js";import"./isEqual-ChBZ-47I.js";import"./withOsdkMetrics-DCPVCTJZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
