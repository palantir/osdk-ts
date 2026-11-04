import{f as b,j as a,r as i}from"./iframe-CNX9e2vb.js";import{O as u}from"./object-table-BldKdaED.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ZMNA8h9P.js";import"./Table-DDRIQJWd.js";import"./index-BIHn_wHI.js";import"./Dialog-D3BNf1DY.js";import"./cross-CoOqaEol.js";import"./svgIconContainer-nouhoaqF.js";import"./useBaseUiId-DVajJCtq.js";import"./InternalBackdrop-g7diMjlH.js";import"./composite-DPfaHyL7.js";import"./index-DLyOpAuF.js";import"./index-DzwDShI9.js";import"./index-D4wtEvwv.js";import"./useEventCallback-BHcK-HWT.js";import"./SkeletonBar-C4hnXkU8.js";import"./LoadingCell-DljGb_fq.js";import"./ColumnConfigDialog-DUiy6zFv.js";import"./DraggableList-CuUpn6fc.js";import"./search-PqF1ps1R.js";import"./Input-DsowkJey.js";import"./useControlled-CAgAp9qH.js";import"./Button-DqD_xK8o.js";import"./small-cross-BJExYpuG.js";import"./ActionButton-wZGD9rTp.js";import"./Checkbox-C9aBsH-7.js";import"./useValueChanged-DYtO7VQ0.js";import"./CollapsiblePanel-C7abhmgq.js";import"./MultiColumnSortDialog-DjjVtXUH.js";import"./MenuTrigger-C-b4TkP-.js";import"./CompositeItem-WdRO-_hy.js";import"./ToolbarRootContext-tIEjfpOU.js";import"./getDisabledMountTransitionStyles-2kFCtm_x.js";import"./getPseudoElementBounds-FCxgA3hM.js";import"./chevron-down-BjfbDPyK.js";import"./index-CAwx3j0M.js";import"./error-B93ABaLs.js";import"./BaseCbacBanner-CH3dXHtT.js";import"./makeExternalStore-DE_Ve778.js";import"./Tooltip-Dvuw96-K.js";import"./PopoverPopup-BcTNuNdl.js";import"./debounce-CgHfZ2yU.js";import"./useOsdkClient-ANeJgNR0.js";import"./tick-BqwzrLtf.js";import"./DropdownField-BFuGqXSY.js";import"./isEqual-DxCKwYiG.js";import"./withOsdkMetrics-DMNQhU4Q.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
