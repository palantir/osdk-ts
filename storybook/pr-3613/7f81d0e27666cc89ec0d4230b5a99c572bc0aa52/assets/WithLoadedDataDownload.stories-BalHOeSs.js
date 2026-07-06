import{f as b,j as a,r as i}from"./iframe-CaM4X99x.js";import{O as u}from"./object-table-CKzkSqlO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Sj4Ql0mN.js";import"./Table-DN3ZzjUk.js";import"./index-8qI_oH2N.js";import"./Dialog-CKrjHk4W.js";import"./cross-C0i3jESn.js";import"./svgIconContainer-C8BI_VUr.js";import"./useBaseUiId-Cz8ADNpo.js";import"./InternalBackdrop-1umvlOgQ.js";import"./composite-LVHrbq4b.js";import"./index-BeGk-dpa.js";import"./index-cegnn8q1.js";import"./index-DOj70wCW.js";import"./useEventCallback-BKfJLWUi.js";import"./SkeletonBar-CnHcIkTU.js";import"./LoadingCell-DlexT4Y1.js";import"./ColumnConfigDialog-DX3j7S15.js";import"./DraggableList-C7Jn2VKP.js";import"./search-CKrrrESz.js";import"./Input-D1n6OtUk.js";import"./useControlled-Cb7rjJua.js";import"./Button-C5-beAkC.js";import"./small-cross-BfPi0Bfy.js";import"./ActionButton-BM6zQLIo.js";import"./Checkbox-B2rvauNL.js";import"./useValueChanged-4Amcflk5.js";import"./CollapsiblePanel-BvCzc8Vd.js";import"./MultiColumnSortDialog-DygWN-qy.js";import"./MenuTrigger-Db6ZhiHq.js";import"./CompositeItem-B4dq8rqf.js";import"./ToolbarRootContext-B0dPoWux.js";import"./getDisabledMountTransitionStyles-CPt_7nzG.js";import"./getPseudoElementBounds-Bsy-t3N_.js";import"./chevron-down-CaS_fpTc.js";import"./index-BMCgbYm5.js";import"./error-Do1qNI0E.js";import"./BaseCbacBanner-CNAXYJFW.js";import"./makeExternalStore-D6Co5Hsj.js";import"./Tooltip-BgUM39Fq.js";import"./PopoverPopup-16j-rLfE.js";import"./toNumber-QYBJ2wDF.js";import"./useOsdkClient-C9CERFm4.js";import"./tick-DKL3z155.js";import"./DropdownField-C80xhOFN.js";import"./withOsdkMetrics-Dscuj-Zh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
