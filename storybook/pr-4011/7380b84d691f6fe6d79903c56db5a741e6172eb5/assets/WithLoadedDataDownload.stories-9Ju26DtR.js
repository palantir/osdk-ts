import{f as b,j as a,r as i}from"./iframe-Cd0WuP5s.js";import{O as u}from"./object-table-CGzT3aos.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BULq60Sg.js";import"./Table-LvXSiAc8.js";import"./index-Dn3UPUEv.js";import"./Dialog-CJbSm0vl.js";import"./cross-Cht5ZydL.js";import"./svgIconContainer-Zo359bK_.js";import"./useBaseUiId-DrebTsUj.js";import"./InternalBackdrop-dvLmHpE5.js";import"./composite-DOtbOOdR.js";import"./index-C-_orMox.js";import"./index-BgMZ2AWP.js";import"./index-BvG0L2NH.js";import"./useEventCallback-CqLXx_Ru.js";import"./SkeletonBar-I0-eDi0W.js";import"./LoadingCell-BQTecwW2.js";import"./ColumnConfigDialog-B6HbLu6_.js";import"./DraggableList-95n9OLxV.js";import"./search-j5X8koaR.js";import"./Input-Cxx4mnqf.js";import"./useControlled-BoZ7gbt2.js";import"./Button-DQgJQ0ys.js";import"./small-cross-HxFkmVGE.js";import"./ActionButton-F6IFdzY4.js";import"./Checkbox-VXPIk-kC.js";import"./useValueChanged-DCDDQwI0.js";import"./CollapsiblePanel-Bv729W8z.js";import"./MultiColumnSortDialog-UPrpWPay.js";import"./MenuTrigger-CwUzHJZB.js";import"./CompositeItem-CUY6v9CS.js";import"./ToolbarRootContext-zlKF7dlE.js";import"./getDisabledMountTransitionStyles-ClCEPtPS.js";import"./getPseudoElementBounds-DM3ex3Qr.js";import"./chevron-down-Dtgstolr.js";import"./index-8j_gMIpQ.js";import"./error-BXNrYt0u.js";import"./BaseCbacBanner-BNrNHneK.js";import"./makeExternalStore-j6ewfQ1j.js";import"./Tooltip-BpBW07pw.js";import"./PopoverPopup-ChYnmRaP.js";import"./debounce-DsJ8NhL-.js";import"./useOsdkClient-CpQ-3Z13.js";import"./tick-BO6WZzfT.js";import"./DropdownField-DNOcnaLD.js";import"./isEqual-BcXr0yMK.js";import"./withOsdkMetrics-DqISDKn-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
