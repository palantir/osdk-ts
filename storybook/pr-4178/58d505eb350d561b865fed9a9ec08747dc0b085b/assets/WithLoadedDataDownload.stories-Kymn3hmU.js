import{f as b,j as a,r as i}from"./iframe-YBx9KFiE.js";import{O as u}from"./object-table-Dq03DkDp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-L6jHOpxv.js";import"./Table-opPxxMf4.js";import"./index-CgtaO5QM.js";import"./Dialog-C1I1G7vK.js";import"./cross-C3v-dhLA.js";import"./svgIconContainer-D6iAjNhU.js";import"./useBaseUiId-DlhJsTYI.js";import"./InternalBackdrop-D3r8VljM.js";import"./composite-BJEKXzZu.js";import"./index-B01ATWUm.js";import"./index-CLwqcVa2.js";import"./index-B6YErJ_s.js";import"./useEventCallback-BF1IxF5d.js";import"./SkeletonBar-SWKUARU8.js";import"./LoadingCell-B4A0sPuf.js";import"./ColumnConfigDialog-CAtn3lYZ.js";import"./DraggableList-B4bNW7cQ.js";import"./search-CuFB4Okz.js";import"./Input-YDKKpO0z.js";import"./useControlled-CH_x4H3X.js";import"./Button-CIORHkhd.js";import"./small-cross-DiaL-97l.js";import"./ActionButton-Dr3JNs2L.js";import"./Checkbox-Ck1vqVZ2.js";import"./useValueChanged-BFvWMPKM.js";import"./CollapsiblePanel-BqouLg2L.js";import"./MultiColumnSortDialog-X-RxjhTv.js";import"./MenuTrigger-LUfi-S7s.js";import"./CompositeItem-C9bwnjwV.js";import"./ToolbarRootContext-C-_578ut.js";import"./getDisabledMountTransitionStyles-BSZVA_yI.js";import"./getPseudoElementBounds-CLbdnn0u.js";import"./chevron-down-DfhavGPs.js";import"./index-N3lE_PbF.js";import"./error-CI50fd9w.js";import"./BaseCbacBanner-CjAm35ae.js";import"./makeExternalStore-Bp5v93FT.js";import"./Tooltip-C_t3RzXT.js";import"./PopoverPopup-BLviECMH.js";import"./debounce-B6PzjAEI.js";import"./useOsdkClient-DDS_VkM8.js";import"./tick-o0shge2a.js";import"./DropdownField-BmpXUboA.js";import"./isEqual-BHpWUGWR.js";import"./withOsdkMetrics-BU_fIGZP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
