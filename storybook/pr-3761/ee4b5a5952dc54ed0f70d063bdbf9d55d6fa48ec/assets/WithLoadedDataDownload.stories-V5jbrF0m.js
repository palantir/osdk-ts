import{f as b,j as a,r as i}from"./iframe-CIbSoI7M.js";import{O as u}from"./object-table-CdpOGEYD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DmH6FFG8.js";import"./Table-CL0AHU_v.js";import"./index-APCVJEW3.js";import"./Dialog-BDcSUddr.js";import"./cross-B4Gn6Z-M.js";import"./svgIconContainer-DcLu3MTp.js";import"./useBaseUiId-Bmq7BhRQ.js";import"./InternalBackdrop-BjgtFig0.js";import"./composite-CpNiXj_M.js";import"./index-CboshYjZ.js";import"./index-B_6MzMjy.js";import"./index-C3xT3GfP.js";import"./useEventCallback-BffX7Oxm.js";import"./SkeletonBar-C4i3ReRr.js";import"./LoadingCell-BIds3c2z.js";import"./ColumnConfigDialog-SXzUSwu7.js";import"./DraggableList-BHXP4rV_.js";import"./search-BkI_TfyS.js";import"./Input-BML0uaTR.js";import"./useControlled-B_hgmZPj.js";import"./isEqual-qGRkFMs-.js";import"./isObject-CjXE3_P0.js";import"./Button-B5W8gulZ.js";import"./ActionButton-BJZ859-j.js";import"./Checkbox-DOaIFBWt.js";import"./useValueChanged-BIcWN65t.js";import"./CollapsiblePanel-DUJM-fFs.js";import"./MultiColumnSortDialog-B7lgY-v3.js";import"./MenuTrigger-vAioYqMC.js";import"./CompositeItem-DObahPUf.js";import"./ToolbarRootContext-CxR7GEiJ.js";import"./getDisabledMountTransitionStyles-DYmaRG6n.js";import"./getPseudoElementBounds-BWWJ6sub.js";import"./chevron-down-C9wqxvOA.js";import"./index-CmzWklHf.js";import"./error-BMaUhajR.js";import"./BaseCbacBanner-BZNb6prg.js";import"./makeExternalStore-Db2RDoef.js";import"./Tooltip-Bm5iAyY8.js";import"./PopoverPopup-CYc0fInH.js";import"./toNumber-ClgHQQIk.js";import"./useOsdkClient-fg_a0RqO.js";import"./tick-BQndWl-G.js";import"./DropdownField-DYYRN_9K.js";import"./withOsdkMetrics-CgEO4G4q.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
