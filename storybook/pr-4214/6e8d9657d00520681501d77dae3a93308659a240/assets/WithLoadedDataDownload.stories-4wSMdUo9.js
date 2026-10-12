import{f as b,j as a,r as i}from"./iframe-C9SuZ1RJ.js";import{O as u}from"./object-table-B7ycQ6BE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DMSK6AnV.js";import"./Table-CF0LDgDy.js";import"./index-DT_ukoYl.js";import"./Dialog-D1IV12yc.js";import"./cross-Itynl6FX.js";import"./svgIconContainer-D69sxdT1.js";import"./useBaseUiId-7WRirspl.js";import"./InternalBackdrop-CMb1PVBv.js";import"./composite-CLRoo5Je.js";import"./index-DSlBaHfK.js";import"./index-BHS-eS1n.js";import"./index-CbbSTcJP.js";import"./useEventCallback-BATy1042.js";import"./SkeletonBar-B5kYBk_d.js";import"./LoadingCell-BCwvJEAw.js";import"./ColumnConfigDialog-CWF5ZNIo.js";import"./DraggableList-3rM2js5S.js";import"./search-N0RiDnX8.js";import"./Input-D0BDhaw_.js";import"./useControlled-DGoyddZA.js";import"./Button-DPVeNaPl.js";import"./small-cross-CVj6zxAy.js";import"./ActionButton-CFuC9l1R.js";import"./Checkbox-DlQe_mGI.js";import"./useValueChanged-DcttfwPd.js";import"./CollapsiblePanel-BYWPcYrr.js";import"./MultiColumnSortDialog-DaPBsJDS.js";import"./MenuTrigger-7tikn6Hn.js";import"./CompositeItem-y2AxCYkL.js";import"./ToolbarRootContext-IeBvAErZ.js";import"./getDisabledMountTransitionStyles-D61a-Amc.js";import"./getPseudoElementBounds-C0ASFWoG.js";import"./chevron-down-BSUO84z0.js";import"./index-tNEhjfv0.js";import"./error-JN7vVG19.js";import"./BaseCbacBanner-Bk40eYrU.js";import"./makeExternalStore-BkAl_UIS.js";import"./Tooltip-CDDNzZxm.js";import"./PopoverPopup-iUPwntF5.js";import"./debounce-Bhm2oAnY.js";import"./useOsdkClient-es3CZ3SD.js";import"./tick-Bfjhhadh.js";import"./DropdownField-Bh7g_Xnj.js";import"./isEqual-Bya2yiBi.js";import"./withOsdkMetrics-FfcvjHUd.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
