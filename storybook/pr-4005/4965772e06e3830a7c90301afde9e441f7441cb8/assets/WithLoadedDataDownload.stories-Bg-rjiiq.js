import{f as b,j as a,r as i}from"./iframe-BgIqeTr7.js";import{O as u}from"./object-table-BgPRUOdG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BbBE06U6.js";import"./Table-DRFmM6r6.js";import"./index-OeIAiwUu.js";import"./Dialog-BBAVymUP.js";import"./cross-Wbc8t1qS.js";import"./svgIconContainer-BtrJOEHF.js";import"./useBaseUiId-CgOsBxCj.js";import"./InternalBackdrop-DMG6Kgao.js";import"./composite-BF8O5dbv.js";import"./index-D9MNyfPv.js";import"./index-ef3bSd-w.js";import"./index-Zndx6d0R.js";import"./useEventCallback-NCRuje_c.js";import"./SkeletonBar-C2xca__T.js";import"./LoadingCell-Czld3W6q.js";import"./ColumnConfigDialog-juQqa1AG.js";import"./DraggableList-69AwVVwc.js";import"./search-BF7QrwO6.js";import"./Input-Ccm-R2od.js";import"./useControlled-DoFIiJ6c.js";import"./Button-WSqWRGZH.js";import"./small-cross-CIyGzgJb.js";import"./ActionButton-CAHKDpnU.js";import"./Checkbox-kISLw2AE.js";import"./useValueChanged-DLQjxulr.js";import"./CollapsiblePanel-CAigpV3T.js";import"./MultiColumnSortDialog-B4RUkkWy.js";import"./MenuTrigger-B4L1Oaqi.js";import"./CompositeItem-D2E5MTZ0.js";import"./ToolbarRootContext-XHaZZ7gx.js";import"./getDisabledMountTransitionStyles-DcXdOVhf.js";import"./getPseudoElementBounds-CACZ6uIC.js";import"./chevron-down-CZAmY7BW.js";import"./index-DA3CS0qW.js";import"./error-DvPLPT6J.js";import"./BaseCbacBanner-D_K-65aL.js";import"./makeExternalStore-_B_am4pH.js";import"./Tooltip-B4cDBo-J.js";import"./PopoverPopup-DNjj31SM.js";import"./debounce-l2WN3UdY.js";import"./useOsdkClient-DqUO6npy.js";import"./tick-BuwupeKW.js";import"./DropdownField-q8PA-aTt.js";import"./isEqual-XkXlL3kg.js";import"./withOsdkMetrics-D9CYPZjX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
