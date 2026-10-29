import{f as b,j as a,r as i}from"./iframe-CXoxL7cT.js";import{O as u}from"./object-table-BWK6B_1N.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DMJKrzx6.js";import"./Table-CC3y0ZrT.js";import"./index-dBMA5UNn.js";import"./Dialog-CjrRU3bM.js";import"./cross-XQWmBmUb.js";import"./svgIconContainer-DtqPwXsL.js";import"./useBaseUiId-Izmi48hi.js";import"./InternalBackdrop-mxeqeXwO.js";import"./composite-DMCRZOOJ.js";import"./index-UsCrzJ_A.js";import"./index-DzDKHmnK.js";import"./index-BB4QshU1.js";import"./useEventCallback-QfRioJwU.js";import"./SkeletonBar-Du45-Qw4.js";import"./LoadingCell-DPa7KDCm.js";import"./ColumnConfigDialog-xmha4aKo.js";import"./DraggableList-BEXm3vsR.js";import"./search-D3KEpk03.js";import"./Input-DwAQ3sDB.js";import"./useControlled-CEwBj1Zp.js";import"./Button-Cr7M9AYk.js";import"./small-cross-CKzsSNgv.js";import"./ActionButton-DNc2uAWK.js";import"./Checkbox-CnSbiUC6.js";import"./useValueChanged-DZganrCm.js";import"./CollapsiblePanel-C2HOfB3-.js";import"./MultiColumnSortDialog-DgfnOU7e.js";import"./MenuTrigger-D1Ac7kyx.js";import"./CompositeItem-CWiiOpZY.js";import"./ToolbarRootContext-CoErepAo.js";import"./getDisabledMountTransitionStyles-LOCq1Tqm.js";import"./getPseudoElementBounds-DBTVlom9.js";import"./chevron-down-tGjjwMVx.js";import"./index-DaVoMYUf.js";import"./error-Bnpx40Rp.js";import"./BaseCbacBanner-CW7AFvJP.js";import"./makeExternalStore-CHMRsxiL.js";import"./Tooltip-Ccq41CCY.js";import"./PopoverPopup-BIW3lqxC.js";import"./debounce-BePSlKc6.js";import"./useOsdkClient-Cwyh3mgC.js";import"./tick-LyPFWekw.js";import"./DropdownField-wsN4GW5v.js";import"./isEqual-BXV1tAj-.js";import"./withOsdkMetrics-CqzyuRHa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
