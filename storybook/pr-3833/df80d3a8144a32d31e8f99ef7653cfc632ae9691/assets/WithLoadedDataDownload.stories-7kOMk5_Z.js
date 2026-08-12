import{f as b,j as a,r as i}from"./iframe-Ccflwbci.js";import{O as u}from"./object-table-1GBHejr9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-wr7_iP2o.js";import"./Table-NaYHmXqg.js";import"./index-CpsvpGUe.js";import"./Dialog-02ZWIh_l.js";import"./cross-CMgZFgZF.js";import"./svgIconContainer-Cepk_4ly.js";import"./useBaseUiId-WPl9OK4D.js";import"./InternalBackdrop-BDdhHd1v.js";import"./composite-C9Rp5H4o.js";import"./index-DnQt8rFF.js";import"./index-Ch-qdtZV.js";import"./index-BpTZx_xG.js";import"./useEventCallback-H5sQEvRk.js";import"./SkeletonBar-DuIHYxXR.js";import"./LoadingCell-CM40Krc5.js";import"./ColumnConfigDialog-DDvxuMYz.js";import"./DraggableList-CrxjXnyI.js";import"./search-xzH4WAuR.js";import"./Input-DL3wG5cx.js";import"./useControlled-CPTTGrVV.js";import"./isEqual-Co-8GGGH.js";import"./isObject-C9un3BSS.js";import"./Button-CTcQr_p3.js";import"./ActionButton-CUUK9wbz.js";import"./Checkbox-Dkt7HrQ9.js";import"./useValueChanged-BrNvQ_6w.js";import"./CollapsiblePanel-By2OUVWo.js";import"./MultiColumnSortDialog-C6Z4oQR3.js";import"./MenuTrigger-BemlYMAx.js";import"./CompositeItem-cdsIBR5_.js";import"./ToolbarRootContext-D_-uFHqt.js";import"./getDisabledMountTransitionStyles-DsF9pAEs.js";import"./getPseudoElementBounds-CkiI2b_9.js";import"./chevron-down-DOhdBcS5.js";import"./index-qYGSMIpd.js";import"./error-F0UcLgfA.js";import"./BaseCbacBanner-fukVi_hJ.js";import"./makeExternalStore-B9YW9e1O.js";import"./Tooltip-CHeal-fF.js";import"./PopoverPopup-KX6urh2m.js";import"./toNumber-BVGNT-Nz.js";import"./useOsdkClient-DSEN7giB.js";import"./tick-2IsKUyMz.js";import"./DropdownField-pC7bQq9H.js";import"./withOsdkMetrics-gAWdhCc4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
