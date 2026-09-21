import{f as b,j as a,r as i}from"./iframe-8LpzfSDn.js";import{O as u}from"./object-table--A9nr_D6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DtRM003F.js";import"./Table-CoO7Txsa.js";import"./index-BUf0-n6f.js";import"./Dialog-DOQ8osnu.js";import"./cross-CCb0fI9c.js";import"./svgIconContainer-BKZgIvjb.js";import"./useBaseUiId-4wN8rdaw.js";import"./InternalBackdrop-S-BNADSf.js";import"./composite-2A5pk4b0.js";import"./index-RVyoUJfW.js";import"./index-BjrAvEhr.js";import"./index-CCORHeEv.js";import"./useEventCallback-D7bgDq2J.js";import"./SkeletonBar-C1CeiyuW.js";import"./LoadingCell-BHuaTwQ0.js";import"./ColumnConfigDialog-DqOLvEq8.js";import"./DraggableList-C9tzjVp6.js";import"./search-zhneh-KF.js";import"./Input-Dv-by0TU.js";import"./useControlled-CoRLjGHB.js";import"./Button-BApq-zP_.js";import"./small-cross-Cd-SXCdz.js";import"./ActionButton-Bxy-NTOO.js";import"./Checkbox-D-mCQp5x.js";import"./useValueChanged-BozjWAfd.js";import"./CollapsiblePanel-DTSInNYa.js";import"./MultiColumnSortDialog-DI3n5Vct.js";import"./MenuTrigger-PruXJXos.js";import"./CompositeItem-CnGxkne-.js";import"./ToolbarRootContext-40dyuA6p.js";import"./getDisabledMountTransitionStyles-Mf_ToGG9.js";import"./getPseudoElementBounds-DU8qDaFN.js";import"./chevron-down-DsREyE6f.js";import"./index-BPBF2E68.js";import"./error-B-6NO-zU.js";import"./BaseCbacBanner-_Gsb0Wun.js";import"./makeExternalStore-DEN8pBF9.js";import"./Tooltip-hbbCevp2.js";import"./PopoverPopup-2AhTF_FP.js";import"./debounce-IDNd93md.js";import"./useOsdkClient-CNaHcQUk.js";import"./tick-C-vIWgEC.js";import"./DropdownField-64H1OXM1.js";import"./isEqual-B3eItCfo.js";import"./withOsdkMetrics-eiA9ax16.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
