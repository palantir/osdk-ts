import{f as b,j as a,r as i}from"./iframe-JhP61fmQ.js";import{O as u}from"./object-table-BJFagCC_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dv4AHPyi.js";import"./Table-B7LI-gFh.js";import"./index-BSmeSe50.js";import"./Dialog-Cg45JvOL.js";import"./cross-Dsbhsz94.js";import"./svgIconContainer-DKp8J6V9.js";import"./useBaseUiId-CA99nDKM.js";import"./InternalBackdrop-C5yqQ4th.js";import"./composite-BB4dZRYR.js";import"./index-D3ENcNCA.js";import"./index-hdo2lGgd.js";import"./index-D7wU48Sj.js";import"./useEventCallback-DZNv6pry.js";import"./SkeletonBar-Dhm6G2dC.js";import"./LoadingCell-BGp_Bbyh.js";import"./ColumnConfigDialog-W0KM4Iuw.js";import"./DraggableList-BHKYfhCE.js";import"./search-CT7W-ise.js";import"./Input-CRfOnocM.js";import"./useControlled-CmxJ51VA.js";import"./Button-CndCZNKo.js";import"./small-cross-oBgym-zX.js";import"./ActionButton-qgx9p82l.js";import"./Checkbox-DPg92fgI.js";import"./useValueChanged-CkObsYLU.js";import"./CollapsiblePanel-AJl5CmxO.js";import"./MultiColumnSortDialog-CKF6fxNt.js";import"./MenuTrigger-8q4vQbZo.js";import"./CompositeItem-9QryHf4D.js";import"./ToolbarRootContext-D0sVvk8L.js";import"./getDisabledMountTransitionStyles-Ckk4q5Pv.js";import"./getPseudoElementBounds-B6I1n0Dl.js";import"./chevron-down-B0H-_dR_.js";import"./index-DkeojneP.js";import"./error-Cz6c6olR.js";import"./BaseCbacBanner-PkI4v1kZ.js";import"./makeExternalStore-CSQl7Sbm.js";import"./Tooltip-CmSYJPe_.js";import"./PopoverPopup-CA9gw9sj.js";import"./debounce-Bze7pKAd.js";import"./useOsdkClient-DvwuNmgk.js";import"./tick-CP7Ao593.js";import"./DropdownField-DhCekDmi.js";import"./isEqual-BookI4Nh.js";import"./withOsdkMetrics-BFR4d_uj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
