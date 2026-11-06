import{f as b,j as a,r as i}from"./iframe-BL-M0CJv.js";import{O as u}from"./object-table-DyjahA3Z.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C0zkmkXS.js";import"./Table-CwPyldrC.js";import"./index-Db0LO39w.js";import"./Dialog-X47xU8WG.js";import"./cross-x8jhhqfq.js";import"./svgIconContainer-BX2v_cR0.js";import"./useBaseUiId-TPr_qZ_1.js";import"./InternalBackdrop-DQF7Nf_d.js";import"./composite-Dx0NSDUH.js";import"./index-Bt9OIo2s.js";import"./index-DIwpmFcE.js";import"./index-H5T9X240.js";import"./useEventCallback-ClZrDBfO.js";import"./SkeletonBar-D3gneFRh.js";import"./LoadingCell-CIZRZJiV.js";import"./ColumnConfigDialog-CrhkzJOT.js";import"./DraggableList-DJESFfbU.js";import"./search-BiWkoGJW.js";import"./Input-EsCXPtCp.js";import"./useControlled-CKiiitZS.js";import"./Button-CC9Ubwa3.js";import"./small-cross-BM9iFkVs.js";import"./ActionButton-bQlrAOg4.js";import"./Checkbox-B2PO8JSa.js";import"./useValueChanged-DM3_Gsn0.js";import"./CollapsiblePanel-nIuDIxIE.js";import"./MultiColumnSortDialog-_iw8uLQh.js";import"./MenuTrigger-DKUx42mN.js";import"./CompositeItem-XRZQ4yN6.js";import"./ToolbarRootContext-D7bnZbhq.js";import"./getDisabledMountTransitionStyles-D6fdD7kD.js";import"./getPseudoElementBounds-KY_ZlW1R.js";import"./chevron-down-5PA4SDET.js";import"./index-BFvrjhEh.js";import"./error-BIo7wVIV.js";import"./BaseCbacBanner-CMUORDC1.js";import"./makeExternalStore-DG0rmoX7.js";import"./Tooltip-CZJO9zR4.js";import"./PopoverPopup-B1aR8zHS.js";import"./debounce-zXiB5GmY.js";import"./useOsdkClient-Dx2Qs5xK.js";import"./tick-Ba6iW8gF.js";import"./DropdownField-CYb_vMw7.js";import"./isEqual-CJqL8oc3.js";import"./withOsdkMetrics-BYapBjuA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
