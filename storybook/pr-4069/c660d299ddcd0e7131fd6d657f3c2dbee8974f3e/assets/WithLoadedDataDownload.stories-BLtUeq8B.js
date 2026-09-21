import{f as b,j as a,r as i}from"./iframe-Cfzzxn_n.js";import{O as u}from"./object-table-pEqPj5J4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dg7pGUOS.js";import"./Table-D5T8uZzE.js";import"./index-CMN6-XKQ.js";import"./Dialog-DDMFP6hk.js";import"./cross-DQq_Xwh6.js";import"./svgIconContainer-BI8ujPzn.js";import"./useBaseUiId-jVad5k1_.js";import"./InternalBackdrop-DAR7W5Wj.js";import"./composite-CLlDBj0Z.js";import"./index-CBbyaHPU.js";import"./index-CPjSGEwp.js";import"./index-Cg0AkbTX.js";import"./useEventCallback-B7JsYCH4.js";import"./SkeletonBar-jkEtksym.js";import"./LoadingCell-B3AsKuLF.js";import"./ColumnConfigDialog-C9DfDGwe.js";import"./DraggableList-Dztt1KCX.js";import"./search-Dkia1gOi.js";import"./Input-CnQ0L5k0.js";import"./useControlled-CNmeQlt3.js";import"./Button-BI-1kn4u.js";import"./small-cross-DyTVyiiv.js";import"./ActionButton-AnBXq9dB.js";import"./Checkbox-CeKAFdf6.js";import"./useValueChanged-BMGXXoQd.js";import"./CollapsiblePanel-Cu4Eaeg8.js";import"./MultiColumnSortDialog-AlYAe39k.js";import"./MenuTrigger-CH7Ey5R9.js";import"./CompositeItem-CcHRWvUR.js";import"./ToolbarRootContext-D5srvXY8.js";import"./getDisabledMountTransitionStyles-Hk1XRehz.js";import"./getPseudoElementBounds-DUI2YNlh.js";import"./chevron-down-DEBizV0j.js";import"./index-BNc2t-yb.js";import"./error-Bx2UJ-jk.js";import"./BaseCbacBanner-BkPHcLSS.js";import"./makeExternalStore-D0DZxHLg.js";import"./Tooltip-D6tPQUhI.js";import"./PopoverPopup-DebGjI7p.js";import"./debounce-Do79F5Rt.js";import"./useOsdkClient-Ba_ITXqU.js";import"./tick-CRy55xU8.js";import"./DropdownField-DtNKMGKP.js";import"./isEqual-ZHneCzaK.js";import"./withOsdkMetrics-B7pLyp-k.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
