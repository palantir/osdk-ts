import{f as b,j as a,r as i}from"./iframe-DvwH42FA.js";import{O as u}from"./object-table-Jb6gGdnE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DEybsrDJ.js";import"./Table-DGDNG_pz.js";import"./index-J26QqFGl.js";import"./Dialog-DI_hpK08.js";import"./cross-BN0lcpY0.js";import"./svgIconContainer-BNUkj3Pd.js";import"./useBaseUiId-tOAOUQiJ.js";import"./InternalBackdrop-C9rZ6hh4.js";import"./composite-D2TyNObR.js";import"./index-BdNMK7Gf.js";import"./index-B7x2aIOS.js";import"./index-BMcLikr0.js";import"./useEventCallback-jKMhLcqs.js";import"./SkeletonBar-BmJJEjRs.js";import"./LoadingCell-Dy5tHWdn.js";import"./ColumnConfigDialog-Dwjj2Hie.js";import"./DraggableList-DOZz2szn.js";import"./search-Cl4hDVdp.js";import"./Input-CtJ7UKD6.js";import"./useControlled-BhMAv1ps.js";import"./Button-C8MB2pGs.js";import"./small-cross-DfjEbz9b.js";import"./ActionButton-BHPoqNul.js";import"./Checkbox-02j38gX7.js";import"./useValueChanged-BDGiJFuk.js";import"./CollapsiblePanel-gRNf6Seh.js";import"./MultiColumnSortDialog-BPtc_2lX.js";import"./MenuTrigger-D77A_xbF.js";import"./CompositeItem-DeFaZgPZ.js";import"./ToolbarRootContext-BV3Ciak4.js";import"./getDisabledMountTransitionStyles-QU60JeOn.js";import"./getPseudoElementBounds-Dr6gOvy1.js";import"./chevron-down-DclS5GqO.js";import"./index-BuEbl4ZZ.js";import"./error-yeSVRC55.js";import"./BaseCbacBanner-B_4eGMAs.js";import"./makeExternalStore-CKGyOq0N.js";import"./Tooltip-D2_zsHn4.js";import"./PopoverPopup-Dz8cYHRU.js";import"./debounce-Ca-_00LJ.js";import"./useOsdkClient-D8ctbvIl.js";import"./tick-BjZRSTbc.js";import"./DropdownField-B2W4HxFF.js";import"./isEqual-Dme2tnBF.js";import"./withOsdkMetrics-B8wi7VI0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
