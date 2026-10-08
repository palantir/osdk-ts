import{f as b,j as a,r as i}from"./iframe-CYRFLlEO.js";import{O as u}from"./object-table-DaNbMdac.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ChluBdBb.js";import"./Table-DeorVykX.js";import"./index-DgFaecLv.js";import"./Dialog-C6L85Dhc.js";import"./cross-DBpyyU9C.js";import"./svgIconContainer-DXkF8wrQ.js";import"./useBaseUiId-CT8xqfBr.js";import"./InternalBackdrop-CTPF33qa.js";import"./composite-DBnR4BVO.js";import"./index-C8sdjwtp.js";import"./index-BCjTJI3_.js";import"./index-C2MDVEGT.js";import"./useEventCallback-BJFvrRyb.js";import"./SkeletonBar-Bq3sXSF2.js";import"./LoadingCell-itgjIH8K.js";import"./ColumnConfigDialog-DbPbP15T.js";import"./DraggableList-BRGnhRIN.js";import"./search-gMbThLhN.js";import"./Input-CemPVcnY.js";import"./useControlled-D5UJw3Fq.js";import"./Button-CGEba4bS.js";import"./small-cross-BXgSEa8S.js";import"./ActionButton-D0Fx6r_2.js";import"./Checkbox-C5DJcaMm.js";import"./useValueChanged-CsL5tjte.js";import"./CollapsiblePanel-D8-L6clc.js";import"./MultiColumnSortDialog-CVgjOhqE.js";import"./MenuTrigger-B4oHyfVO.js";import"./CompositeItem-EG5A4Ctt.js";import"./ToolbarRootContext-DIul4zOr.js";import"./getDisabledMountTransitionStyles-DPyBQpoo.js";import"./getPseudoElementBounds-C_2zFZOn.js";import"./chevron-down-QtZPW63O.js";import"./index-BjdI_b09.js";import"./error-CvsmrG6o.js";import"./BaseCbacBanner-Dz0E0Sve.js";import"./makeExternalStore-B-fBg6wj.js";import"./Tooltip-Dib25ex8.js";import"./PopoverPopup-DotHPyVZ.js";import"./debounce-BWdTtlOi.js";import"./useOsdkClient-BJqJ3t0X.js";import"./tick-BxUNHTte.js";import"./DropdownField-wXZN_aVL.js";import"./isEqual-a93sYdb6.js";import"./withOsdkMetrics-Ihi9z85c.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
