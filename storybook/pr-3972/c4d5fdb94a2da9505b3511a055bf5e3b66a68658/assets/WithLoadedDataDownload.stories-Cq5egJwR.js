import{f as b,j as a,r as i}from"./iframe-DZOL1fAY.js";import{O as u}from"./object-table-SSJOUKzl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-3H1iqF3g.js";import"./Table-B62G5e17.js";import"./index-Dn4isnDY.js";import"./Dialog-cPcGwNln.js";import"./cross-86m0rjnN.js";import"./svgIconContainer-B6vD6Ghc.js";import"./useBaseUiId-Cvxi0iS7.js";import"./InternalBackdrop-DYc2T3en.js";import"./composite-T0X3QkXF.js";import"./index-C11ji0i2.js";import"./index-DZ_Yay9Y.js";import"./index-DFd2jDKC.js";import"./useEventCallback-ItCAOyRH.js";import"./SkeletonBar-LYReqkUo.js";import"./LoadingCell-D05YBGhE.js";import"./ColumnConfigDialog-BKBMAzyi.js";import"./DraggableList-Dhhz3Grx.js";import"./search-B2NPYcqq.js";import"./Input-VXijC7GT.js";import"./useControlled-DRhy3GQv.js";import"./Button-DsiRqDn-.js";import"./small-cross-BoSvEJri.js";import"./ActionButton-BsaHD9YU.js";import"./Checkbox-D9uKkogi.js";import"./useValueChanged-DcZiCWMF.js";import"./CollapsiblePanel-fLJD7V0z.js";import"./MultiColumnSortDialog-BWc9Kkx2.js";import"./MenuTrigger-CsR5DxY2.js";import"./CompositeItem-BqTSWS-d.js";import"./ToolbarRootContext-BSvTmWDd.js";import"./getDisabledMountTransitionStyles-BhFC88vd.js";import"./getPseudoElementBounds-Ba8N0Q3i.js";import"./chevron-down-BzBCSFbA.js";import"./index-COxjItVW.js";import"./error-DjEgQQ85.js";import"./BaseCbacBanner-CRUr-lWy.js";import"./makeExternalStore-BS_yphcb.js";import"./Tooltip-DHwsWy8-.js";import"./PopoverPopup-ZYkmOrRT.js";import"./debounce-DZH3gqyd.js";import"./useOsdkClient-eW2Kmz8P.js";import"./tick-D-SuASFY.js";import"./DropdownField-Sc-mwTM2.js";import"./isEqual-DNKlfwvT.js";import"./withOsdkMetrics-2IcQnEf1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
