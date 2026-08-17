import{f as b,j as a,r as i}from"./iframe-B0nz0RxR.js";import{O as u}from"./object-table-CP0p9slM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CF-MyLPB.js";import"./Table-BrJDxDiJ.js";import"./index-DW-ZtONF.js";import"./Dialog-Cr2A3kQz.js";import"./cross-f1j6tGxU.js";import"./svgIconContainer-BcZsRKUx.js";import"./useBaseUiId-Ghzmj7pG.js";import"./InternalBackdrop-rSHqMVGe.js";import"./composite-BzNBSeWl.js";import"./index-BMFV8-ce.js";import"./index-DeqT0Eb7.js";import"./index-B7gxoaLi.js";import"./useEventCallback-B4vbSQLp.js";import"./SkeletonBar-B5jtfUel.js";import"./LoadingCell-Bug_BUuO.js";import"./ColumnConfigDialog-BWJ5IN2M.js";import"./DraggableList-DHM4mlSv.js";import"./search-TA_vispt.js";import"./Input-D4YoHp_x.js";import"./useControlled-DRdL5BBf.js";import"./Button-oaCKos6Q.js";import"./small-cross-Zw7wlfAE.js";import"./ActionButton-CkF9PQ4R.js";import"./Checkbox-CIoLBrmc.js";import"./useValueChanged-DgmYsZA0.js";import"./CollapsiblePanel-Crj0pcOH.js";import"./MultiColumnSortDialog-D3gwJIcd.js";import"./MenuTrigger-CwjJKmwj.js";import"./CompositeItem-gUbeOnNS.js";import"./ToolbarRootContext-C9pMoC1w.js";import"./getDisabledMountTransitionStyles-Bt_08xQS.js";import"./getPseudoElementBounds-Dyl6SLRJ.js";import"./chevron-down-CvQujDzB.js";import"./index-B5Cb_2HF.js";import"./error-mP_--TcG.js";import"./BaseCbacBanner-DHxGb0MF.js";import"./makeExternalStore-_fQcqJ1G.js";import"./Tooltip-DbVNHIKo.js";import"./PopoverPopup-DQ08RGHM.js";import"./debounce-DisvDzGy.js";import"./useOsdkClient-CPckGSeZ.js";import"./tick-CAF8Q4Se.js";import"./DropdownField-DsagADFX.js";import"./isEqual-DBj3OHQt.js";import"./withOsdkMetrics-loWoDH6-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
