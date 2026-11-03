import{f as b,j as a,r as i}from"./iframe-C_eR_-FB.js";import{O as u}from"./object-table-RihnLn09.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D-iMj1JN.js";import"./Table-C8AAoGWT.js";import"./index-B5oDC2JQ.js";import"./Dialog-DSHxwALU.js";import"./cross-6THvcyRY.js";import"./svgIconContainer-CBJV4Tnn.js";import"./useBaseUiId-DHfbjF6K.js";import"./InternalBackdrop-CtVeclCs.js";import"./composite-CRpQuKDa.js";import"./index-JDCvzA9U.js";import"./index-C5Q3HutH.js";import"./index-C-Ct-Q1O.js";import"./useEventCallback-BSdQRjPY.js";import"./SkeletonBar-Dfyf_j8b.js";import"./LoadingCell-Dzl-OGae.js";import"./ColumnConfigDialog-UAE2sEv4.js";import"./DraggableList-VCR2ruyb.js";import"./search-BSm0Tn1z.js";import"./Input-DTI33c7U.js";import"./useControlled-BEI1fcJ3.js";import"./Button-D3eF3jJ4.js";import"./small-cross-CwIjWKJl.js";import"./ActionButton-C4NITY81.js";import"./Checkbox-DEDdXE32.js";import"./useValueChanged-D_PYMBeT.js";import"./CollapsiblePanel-5toXnu5d.js";import"./MultiColumnSortDialog-DRtR-Qs7.js";import"./MenuTrigger-kVlqUuN-.js";import"./CompositeItem-DORzwzYw.js";import"./ToolbarRootContext-MiWSvMtv.js";import"./getDisabledMountTransitionStyles-DyVQfBpM.js";import"./getPseudoElementBounds-DFY51yDa.js";import"./chevron-down-CYhIscH3.js";import"./index-DsvrxdPz.js";import"./error-BIKnaXwT.js";import"./BaseCbacBanner-PTKqEeHs.js";import"./makeExternalStore-DsUjsZj2.js";import"./Tooltip-BO3iXvgP.js";import"./PopoverPopup-BaCYp8dE.js";import"./debounce-BNBceRVR.js";import"./useOsdkClient-UY9KdTa_.js";import"./tick-C_kX7tnK.js";import"./DropdownField-BuvpvRO7.js";import"./isEqual-CGCncotN.js";import"./withOsdkMetrics-D4cys7NY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
