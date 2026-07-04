import{f as b,j as a,r as i}from"./iframe-Cbvz--ap.js";import{O as u}from"./object-table-CnMFYuu0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-FkStB5Zs.js";import"./Table-DA2qUa9y.js";import"./index-CvbvMARM.js";import"./Dialog-5pJsw2QK.js";import"./cross-CBeCnkf0.js";import"./svgIconContainer-DyoXLVNM.js";import"./useBaseUiId-Df_vl-3Z.js";import"./InternalBackdrop-D7R4kN7a.js";import"./composite-Bcrw3nO4.js";import"./index-QV0aMfVF.js";import"./index-CP3ZTFUy.js";import"./index-Dd0Wv14X.js";import"./useEventCallback-CTQCIkgL.js";import"./SkeletonBar-Bma0FLFX.js";import"./LoadingCell-BeIEhqD1.js";import"./ColumnConfigDialog-DvdHquRM.js";import"./DraggableList-TEoMhKot.js";import"./search-CE0tvX4w.js";import"./Input-D2cwtccY.js";import"./useControlled--RTYo_QZ.js";import"./Button-CG_Kv4Or.js";import"./small-cross-Bw61aFea.js";import"./ActionButton-Crm7nPLN.js";import"./Checkbox-BMQ79okI.js";import"./useValueChanged-4m0Pgfqe.js";import"./CollapsiblePanel-kNIZ0C5I.js";import"./MultiColumnSortDialog-CH_zI2gJ.js";import"./MenuTrigger-C0k_YFE8.js";import"./CompositeItem-DPkyiQny.js";import"./ToolbarRootContext-ISXILCdO.js";import"./getDisabledMountTransitionStyles-BSw9YK5_.js";import"./getPseudoElementBounds-5xBcV3Rf.js";import"./chevron-down-DcPxx9A3.js";import"./index-DnwSP-ip.js";import"./error-DxlZumZ3.js";import"./BaseCbacBanner-jf9M9t-z.js";import"./makeExternalStore-C3eOyFVJ.js";import"./Tooltip-CNXREI4u.js";import"./PopoverPopup-C80TxVJP.js";import"./toNumber-C-6iLVei.js";import"./useOsdkClient-CwL5Wg_L.js";import"./tick-D5czJg9q.js";import"./DropdownField-CppfQ4J5.js";import"./withOsdkMetrics-CgzEmCLz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
