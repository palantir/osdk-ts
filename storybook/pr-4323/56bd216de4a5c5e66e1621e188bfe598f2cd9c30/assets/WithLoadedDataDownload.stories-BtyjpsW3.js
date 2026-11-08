import{f as b,j as a,r as i}from"./iframe-xO7-cFQE.js";import{O as u}from"./object-table-DPPomAoY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CjE4C0sP.js";import"./Table-DkXla0eu.js";import"./index-BOQrkF-F.js";import"./Dialog-C8Or7tBX.js";import"./cross-D5U-IDeN.js";import"./svgIconContainer-Bxzx9KVi.js";import"./useBaseUiId-DvKVHufz.js";import"./InternalBackdrop-C9ZmsvjR.js";import"./composite-CWWmbaS7.js";import"./index-BJwULR6g.js";import"./index-CXPZCOfE.js";import"./index-1a1U9ieG.js";import"./useEventCallback-fopAPD8Y.js";import"./SkeletonBar-f3m0sjLr.js";import"./LoadingCell-0MQBRXiw.js";import"./ColumnConfigDialog-CKmlFPhZ.js";import"./DraggableList-D_G4MIOq.js";import"./search-Bazo2FVF.js";import"./Input-99mwA4VF.js";import"./useControlled-Wgq9Q75K.js";import"./Button-BCHzki1U.js";import"./small-cross-BYaqaz9R.js";import"./ActionButton-DJcroEAc.js";import"./Checkbox-B89KfeZF.js";import"./useValueChanged-Dgs0e82c.js";import"./CollapsiblePanel-CGLiej8s.js";import"./MultiColumnSortDialog-wtHUP_vi.js";import"./MenuTrigger-u1xB01Kq.js";import"./CompositeItem-BPvfL8qH.js";import"./ToolbarRootContext-D7XQqVeD.js";import"./getDisabledMountTransitionStyles-aVxKVFQR.js";import"./getPseudoElementBounds-C2y6c8Y1.js";import"./chevron-down-hptZ4LWp.js";import"./index-DDxyKWUj.js";import"./error-n609TGyv.js";import"./BaseCbacBanner-cN_njO3E.js";import"./makeExternalStore-Czx_Amad.js";import"./Tooltip-DPJAxssW.js";import"./PopoverPopup-hp660gJk.js";import"./debounce-GWee0BQR.js";import"./useOsdkClient-CDqxUxHE.js";import"./tick-C49IxArq.js";import"./DropdownField-ScPov9Rd.js";import"./isEqual-DQYCwzyu.js";import"./withOsdkMetrics-BDGk6jsR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
