import{f as b,j as a,r as i}from"./iframe-BXNko62s.js";import{O as u}from"./object-table-BQNnLDn7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bj6UNjqi.js";import"./Table-D7LzyEaH.js";import"./index-BraeF99A.js";import"./Dialog-Ro4O5HA1.js";import"./cross-CxMC5EUY.js";import"./svgIconContainer-DY8ASQOr.js";import"./useBaseUiId-Ca98QWO9.js";import"./InternalBackdrop-BbBElhcW.js";import"./composite-C9CWzIa9.js";import"./index-BFgBDgmk.js";import"./index-CCQ5u4Ue.js";import"./index-BJy_f7fa.js";import"./useEventCallback-DgeT9ZNj.js";import"./SkeletonBar-D1qxCam4.js";import"./LoadingCell-B0CJVPiT.js";import"./ColumnConfigDialog-DNqQ-Oum.js";import"./DraggableList-IBkcEZag.js";import"./search-0j6eRv30.js";import"./Input-DXEo1WM0.js";import"./useControlled-B2FQFptp.js";import"./Button-Cb25ceXV.js";import"./small-cross-C8K6sWXT.js";import"./ActionButton-BE6hJp0R.js";import"./Checkbox-BIQR1PfE.js";import"./useValueChanged-BQ311yh_.js";import"./CollapsiblePanel-Cyvbu1GF.js";import"./MultiColumnSortDialog-CvcuatNu.js";import"./MenuTrigger-Dd2kzYgY.js";import"./CompositeItem-BnI6v8nN.js";import"./ToolbarRootContext-BpFYZMLv.js";import"./getDisabledMountTransitionStyles-DcJvx271.js";import"./getPseudoElementBounds-8XCyV84c.js";import"./chevron-down-Za9QV_62.js";import"./index-hSkBF6vZ.js";import"./error-CgTFtvP9.js";import"./BaseCbacBanner-3-2aKYTm.js";import"./makeExternalStore-BdN3LE2k.js";import"./Tooltip-Cy_tDvEN.js";import"./PopoverPopup-fmJe70Q9.js";import"./debounce-DTLh2Ef3.js";import"./useOsdkClient-Cn5D3g-o.js";import"./tick-qSbAdot2.js";import"./DropdownField--_gkEn_J.js";import"./isEqual-CEZhzjj7.js";import"./withOsdkMetrics-BmO3Nivv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
