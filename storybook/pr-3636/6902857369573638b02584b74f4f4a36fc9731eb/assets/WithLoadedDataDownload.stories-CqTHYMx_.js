import{f as b,j as a,r as i}from"./iframe-Cq8p12pn.js";import{O as u}from"./object-table-DO2Uj2OM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C6VrGVOb.js";import"./Table-CDLyogDd.js";import"./index-BoLNLxh1.js";import"./Dialog-C8SBakBg.js";import"./cross-D0SuZwgh.js";import"./svgIconContainer-C7H5M-bc.js";import"./useBaseUiId-DId-nqnK.js";import"./InternalBackdrop-CReHhQYk.js";import"./composite-50HOK_25.js";import"./index-Cv6ri_Mz.js";import"./index-CVs7jYhA.js";import"./index-BGvC_gN_.js";import"./useEventCallback-DeXMdc3M.js";import"./SkeletonBar-DxCq90yy.js";import"./LoadingCell-7hFF0C82.js";import"./ColumnConfigDialog-IcJaKkLr.js";import"./DraggableList-Cb2UE6f-.js";import"./search-BqZyb_hQ.js";import"./Input-CAyQf7LH.js";import"./useControlled-BH6TUeMo.js";import"./Button-C5Kr7PxJ.js";import"./small-cross-H7hfSaVs.js";import"./ActionButton-Cj_UmFBS.js";import"./Checkbox-DR_XJlk4.js";import"./useValueChanged-B85f1wl1.js";import"./CollapsiblePanel-C5j8-9sR.js";import"./MultiColumnSortDialog-B7rstUhX.js";import"./MenuTrigger-Yy0PGudD.js";import"./CompositeItem-Bp-emsOc.js";import"./ToolbarRootContext-CnCd_05O.js";import"./getDisabledMountTransitionStyles-Bhkccp50.js";import"./getPseudoElementBounds-CYcZtW05.js";import"./chevron-down-BO42q-Iu.js";import"./index-H2GARTa3.js";import"./error-C1ugyeBb.js";import"./BaseCbacBanner-DEf7PjOj.js";import"./makeExternalStore-Bz9iO7b2.js";import"./Tooltip-DyG7kgPa.js";import"./PopoverPopup-BKii08uR.js";import"./toNumber-2CP_wcnt.js";import"./useOsdkClient-D2uoJ5W6.js";import"./tick-CIEgz24q.js";import"./DropdownField-DOdiJuUL.js";import"./withOsdkMetrics-CH6gwfXz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
