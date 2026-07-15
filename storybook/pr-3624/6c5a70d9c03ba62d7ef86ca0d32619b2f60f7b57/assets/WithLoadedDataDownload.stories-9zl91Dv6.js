import{f as b,j as a,r as i}from"./iframe-VqOYBpiT.js";import{O as u}from"./object-table-ClEhNoqJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CatpkaTg.js";import"./Table-cpTlKEGL.js";import"./index-qCYDZjxA.js";import"./Dialog-DN6yKxFd.js";import"./cross-YMZyLxkb.js";import"./svgIconContainer-CzVf3Ft2.js";import"./useBaseUiId-DH1vvoHz.js";import"./InternalBackdrop-C4e4Qw66.js";import"./composite-387RyXo2.js";import"./index-DT_rKFyd.js";import"./index-74MgD2Pp.js";import"./index-BA1hQaiJ.js";import"./useEventCallback-DlRiXzvg.js";import"./SkeletonBar-Dp4CBUcX.js";import"./LoadingCell-BvDoLCPn.js";import"./ColumnConfigDialog-Dx_hvP8y.js";import"./DraggableList-BjoTfjAE.js";import"./search-DOIgsObl.js";import"./Input-Br3ESkJT.js";import"./useControlled-m_CDe32a.js";import"./Button-DjBK7AmD.js";import"./small-cross-Cl1ZW84O.js";import"./ActionButton-Dl8TpWwZ.js";import"./Checkbox-DRcxTIfZ.js";import"./useValueChanged-g8KEQeu_.js";import"./CollapsiblePanel-3c7uJaRV.js";import"./MultiColumnSortDialog-Chad4vJF.js";import"./MenuTrigger-C7OBOXU8.js";import"./CompositeItem-C719kOFT.js";import"./ToolbarRootContext-D4jJY08o.js";import"./getDisabledMountTransitionStyles-CIk8QCC4.js";import"./getPseudoElementBounds-DWITJKMj.js";import"./chevron-down-D7HIqLdr.js";import"./index-CAdcIpuX.js";import"./error-DFogRlMx.js";import"./BaseCbacBanner-BM_5fwhF.js";import"./makeExternalStore-DTyZ-BTP.js";import"./Tooltip-BZ5mMHHm.js";import"./PopoverPopup-hfo4qVvc.js";import"./toNumber-Dc6QqdlM.js";import"./useOsdkClient-sEFgjGs3.js";import"./tick-DobqsDNZ.js";import"./DropdownField-C40mhXX2.js";import"./withOsdkMetrics-fYlINsqq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
