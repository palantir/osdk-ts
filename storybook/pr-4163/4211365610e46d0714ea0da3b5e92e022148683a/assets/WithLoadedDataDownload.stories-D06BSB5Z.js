import{f as b,j as a,r as i}from"./iframe-DKjGRkFv.js";import{O as u}from"./object-table-P6HhlI8x.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C6rqf7Sg.js";import"./Table-BZ_fhjEt.js";import"./index-_KqllXCA.js";import"./Dialog-BUWkJvJD.js";import"./cross-Byw5v4Q_.js";import"./svgIconContainer-D-LkokGt.js";import"./useBaseUiId-jPX4s7al.js";import"./InternalBackdrop-BxtymM3X.js";import"./composite-Be6SAy6p.js";import"./index-BP_2hfUi.js";import"./index-Bcv2oXK6.js";import"./index-CQPVNm9V.js";import"./useEventCallback-BdnTh0Kq.js";import"./SkeletonBar-Eqz4moCH.js";import"./LoadingCell-CMdJ_9OA.js";import"./ColumnConfigDialog-z-zlKVrA.js";import"./DraggableList-DkY7Kz_a.js";import"./search-CvJrksrv.js";import"./Input-Cl-jE7Eu.js";import"./useControlled-BvxP1vnA.js";import"./Button-CT84oTMh.js";import"./small-cross-Cxklwva_.js";import"./ActionButton-DAdOrkYi.js";import"./Checkbox-DQBk6DW9.js";import"./useValueChanged-HwxNHl9M.js";import"./CollapsiblePanel-DC1OaWK6.js";import"./MultiColumnSortDialog-D9-ihbRr.js";import"./MenuTrigger-Dbm1l1kq.js";import"./CompositeItem-CdsaUFys.js";import"./ToolbarRootContext-VDTGiuqQ.js";import"./getDisabledMountTransitionStyles-DRdQhkzq.js";import"./getPseudoElementBounds-DHlxXCHC.js";import"./chevron-down-zDaWrCdE.js";import"./index-CVidFmw5.js";import"./error-CIT7Z9G8.js";import"./BaseCbacBanner-Bx7lFHvv.js";import"./makeExternalStore-BnEyfyYD.js";import"./Tooltip-KIWE0Mve.js";import"./PopoverPopup--8y4HuFf.js";import"./debounce-BuHDhe6S.js";import"./useOsdkClient-BBbCJZXc.js";import"./tick-jLPbNGml.js";import"./DropdownField-BHrdVt_T.js";import"./isEqual-Bo497v3Z.js";import"./withOsdkMetrics-e_OoMjHx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
