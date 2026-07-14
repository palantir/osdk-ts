import{f as b,j as a,r as i}from"./iframe-IM5MKsNo.js";import{O as u}from"./object-table-BuC0x0Uv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DkOZHUYy.js";import"./Table-BEVGo6_L.js";import"./index-yiVv8N5R.js";import"./Dialog-CiaK0Xdu.js";import"./cross-C1wCax7T.js";import"./svgIconContainer-BZvVBooi.js";import"./useBaseUiId-BFRilBEC.js";import"./InternalBackdrop-BNELkcb6.js";import"./composite-CiTvp-Ft.js";import"./index-_kOz-9LW.js";import"./index-CXNLKzTV.js";import"./index-tLvtOeMs.js";import"./useEventCallback-faogPHKV.js";import"./SkeletonBar-Dnx4Q0AH.js";import"./LoadingCell-DVuLp-3q.js";import"./ColumnConfigDialog-CO49QkfG.js";import"./DraggableList-Dq0BuA1P.js";import"./search-BB-S2IIC.js";import"./Input-DbPZgDd-.js";import"./useControlled-DRL4ydof.js";import"./Button-CQtPSfFd.js";import"./small-cross-BuLFpNTy.js";import"./ActionButton-TuGAsCi4.js";import"./Checkbox-CY-bvp43.js";import"./useValueChanged-Z-NzdwpK.js";import"./CollapsiblePanel-DF0rTnEU.js";import"./MultiColumnSortDialog-DTEPZSMm.js";import"./MenuTrigger-U3D92DDS.js";import"./CompositeItem-BCynY363.js";import"./ToolbarRootContext-wNHw0rqX.js";import"./getDisabledMountTransitionStyles-Cr6-ZV8S.js";import"./getPseudoElementBounds-pet6iz4W.js";import"./chevron-down-BwAY1etc.js";import"./index-CuyH1L8L.js";import"./error-C-1VgRxM.js";import"./BaseCbacBanner-DLjpesIj.js";import"./makeExternalStore-DA9gjpUy.js";import"./Tooltip-CobiL-b-.js";import"./PopoverPopup-avjuB8R_.js";import"./toNumber-DZ3UKji5.js";import"./useOsdkClient-APXd2M-f.js";import"./tick-DsGRiVye.js";import"./DropdownField-CKdmMCGp.js";import"./withOsdkMetrics-DqzhxCRf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
