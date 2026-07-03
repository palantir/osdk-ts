import{f as b,j as a,r as i}from"./iframe-CTpEiklg.js";import{O as u}from"./object-table-CxmhzVh8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-HjgRIjnU.js";import"./Table-sXFfqMbq.js";import"./index-DATAnOu4.js";import"./Dialog-BF0Fq70F.js";import"./cross-BxFgownq.js";import"./svgIconContainer-CJyYhQD8.js";import"./useBaseUiId-BcsqHrcW.js";import"./InternalBackdrop-DCiH6aF7.js";import"./composite-CZSd3WEH.js";import"./index-BnSLvptt.js";import"./index-m0dcwGiE.js";import"./index-Dz6GGSoO.js";import"./useEventCallback-C9arXyxs.js";import"./SkeletonBar-zqoqru-J.js";import"./LoadingCell-Bz8iduPM.js";import"./ColumnConfigDialog-CKA_BlFI.js";import"./DraggableList-CNeBz9S1.js";import"./search-BpimWbbi.js";import"./Input-L37JoD2W.js";import"./useControlled-sCDcn-eS.js";import"./Button-Bs7RHCAx.js";import"./small-cross-uvbbrgQ_.js";import"./ActionButton-D4Qfwb5P.js";import"./Checkbox-CyNW4B03.js";import"./useValueChanged-BSaYvssY.js";import"./CollapsiblePanel-CtamZTRJ.js";import"./MultiColumnSortDialog-DnLs3blt.js";import"./MenuTrigger-BT6Dv8ZX.js";import"./CompositeItem-Cv93BoTy.js";import"./ToolbarRootContext-DGQzkc9X.js";import"./getDisabledMountTransitionStyles-BVMquvev.js";import"./getPseudoElementBounds-CMNL_FYm.js";import"./chevron-down-D0wNoYA6.js";import"./index-BuetERLU.js";import"./error-RWgNzzUN.js";import"./BaseCbacBanner-ChGKA2Cs.js";import"./makeExternalStore-l9Y-9YjF.js";import"./Tooltip-C3jNMgAY.js";import"./PopoverPopup-DbnC6u7q.js";import"./toNumber-Xy9wgEqL.js";import"./useOsdkClient-LDDbIm_C.js";import"./tick-CXMYKt-0.js";import"./DropdownField-BVBQNtLK.js";import"./withOsdkMetrics-ArOoGBh3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
