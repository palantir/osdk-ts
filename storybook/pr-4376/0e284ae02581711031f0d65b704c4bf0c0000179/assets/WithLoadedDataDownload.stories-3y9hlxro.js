import{f as b,j as a,r as i}from"./iframe-Chfnu1YD.js";import{O as u}from"./object-table-GXQqgEvs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-8IaaIvc6.js";import"./Table-BYiLzy7V.js";import"./index-vEtNoJy3.js";import"./Dialog-C0NkkaLW.js";import"./cross-DDh1oeg3.js";import"./svgIconContainer-Cemmf0nA.js";import"./useBaseUiId-1GAAVutu.js";import"./InternalBackdrop-DLHFnO4E.js";import"./composite-ptzmGyTW.js";import"./index-DvqaWTEs.js";import"./index-Bbt8955e.js";import"./index-C4q2PejQ.js";import"./useEventCallback-Dz5cwNMH.js";import"./SkeletonBar-ikqiEJT9.js";import"./LoadingCell-CvbYgRpj.js";import"./ColumnConfigDialog-nCGkIgug.js";import"./DraggableList-D5aJDVZs.js";import"./search-BNvr0C3M.js";import"./Input-DWPUbvhX.js";import"./useControlled-G2n_omSR.js";import"./Button-Ciq9JFcz.js";import"./small-cross-CA-g_M_D.js";import"./ActionButton-CBNCZv9P.js";import"./Checkbox-C2BsILr5.js";import"./useValueChanged-NA9qAH4Q.js";import"./CollapsiblePanel-C_TGf3AQ.js";import"./MultiColumnSortDialog-BQDGa9D6.js";import"./MenuTrigger-CH8gjYXg.js";import"./CompositeItem-B84_RNVq.js";import"./ToolbarRootContext-BC9rkGH_.js";import"./getDisabledMountTransitionStyles-BhZDCpH_.js";import"./getPseudoElementBounds-BJU_D_lr.js";import"./chevron-down-lrpzUfD-.js";import"./index-DvPbsGeG.js";import"./error-Dy9PQux-.js";import"./BaseCbacBanner-CmZapzw4.js";import"./makeExternalStore-CYR-IDnU.js";import"./Tooltip-D2XqF5oz.js";import"./isObject-BCq84zEs.js";import"./debounce-D2wam908.js";import"./useOsdkClient-v00nyVWz.js";import"./tick-DN0NnQtg.js";import"./DropdownField-BBRj5dwe.js";import"./isEqual-BQpI83mS.js";import"./_baseIsEqual-CmLtIxcO.js";import"./withOsdkMetrics-DRREQEVj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
