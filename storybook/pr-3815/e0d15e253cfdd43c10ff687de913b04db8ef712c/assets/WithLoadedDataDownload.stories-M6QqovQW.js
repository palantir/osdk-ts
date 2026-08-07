import{f as b,j as a,r as i}from"./iframe-DUMMG66q.js";import{O as u}from"./object-table-y-ty5vb6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BFk0oZbE.js";import"./Table-DuC5XDhz.js";import"./index-Cs1y_uJV.js";import"./Dialog-BXqIRIEd.js";import"./cross-elCH4-ly.js";import"./svgIconContainer-4zJcw9JU.js";import"./useBaseUiId-5XWzXM4h.js";import"./InternalBackdrop-Cv0tbTTj.js";import"./composite-DIXGEIwe.js";import"./index-CWiUghgz.js";import"./index-P2xopAr5.js";import"./index-ClgWwO2h.js";import"./useEventCallback-DA-m43ZO.js";import"./SkeletonBar-C_PQdqyM.js";import"./LoadingCell-Ca4K5CJF.js";import"./ColumnConfigDialog-DC4TYUk-.js";import"./DraggableList-D7Zzslrv.js";import"./search-DFdLmLH_.js";import"./Input-BfayLVf4.js";import"./useControlled-Dai2soRW.js";import"./small-cross-D_FPHoDU.js";import"./Button--52y3PBE.js";import"./ActionButton-C0v0p_2K.js";import"./Checkbox-eTZtLuFA.js";import"./useValueChanged-DnY0PIHv.js";import"./CollapsiblePanel-BNzZ-MW5.js";import"./MultiColumnSortDialog-DZm-4-ET.js";import"./MenuTrigger-BrrECu0v.js";import"./CompositeItem-B_iG35wZ.js";import"./ToolbarRootContext-Ct53oQXX.js";import"./getDisabledMountTransitionStyles-SVn-J0rv.js";import"./getPseudoElementBounds-CJ0xpki3.js";import"./chevron-down-B8MX778T.js";import"./index-DwYNByYI.js";import"./error-FWwnFt00.js";import"./BaseCbacBanner-OMOUzt76.js";import"./makeExternalStore-BhIGJmu2.js";import"./Tooltip-CYOxlVMl.js";import"./PopoverPopup-D3jRIBKO.js";import"./Combobox-Bh_PWN3v.js";import"./useOsdkClient-Jw6g4ObF.js";import"./tick-CWsnKL-h.js";import"./DropdownField-sxfK_NXI.js";import"./withOsdkMetrics-CoOA1jkj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
