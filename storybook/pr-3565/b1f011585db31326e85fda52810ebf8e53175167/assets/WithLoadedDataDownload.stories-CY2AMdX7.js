import{f as b,j as a,r as i}from"./iframe-Bv5r9rLr.js";import{O as u}from"./object-table-DucZScZ5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DDCW8K5k.js";import"./Table-D1NVf6uj.js";import"./index-JNh3QgoF.js";import"./Dialog-zUNONGvk.js";import"./cross-DMVhXqWl.js";import"./svgIconContainer-DHhUGoMR.js";import"./useBaseUiId-CJpolwEo.js";import"./InternalBackdrop-UpbQNFdT.js";import"./composite-o6L-Ahbi.js";import"./index-DnraKvOI.js";import"./index-D_S_MII7.js";import"./index-D2lyK-Xx.js";import"./useEventCallback-B8I_cvKq.js";import"./SkeletonBar-_Fbivt9f.js";import"./LoadingCell-C0TVxK_T.js";import"./ColumnConfigDialog-CuK02Wb_.js";import"./DraggableList-dar0KyKU.js";import"./Input-D93OIh33.js";import"./useControlled-Bi6-J1Gs.js";import"./Button-DHS_w5Yw.js";import"./small-cross-DLf8ewEl.js";import"./ActionButton-BWhuL6t-.js";import"./Checkbox-Dl5zo747.js";import"./minus-CLzzWU-0.js";import"./useValueChanged-Cdwx92Rs.js";import"./caret-down-BDBEyKxv.js";import"./CollapsiblePanel-Bu-G890m.js";import"./MultiColumnSortDialog-DdeAMiL2.js";import"./MenuTrigger-D66RzB2L.js";import"./CompositeItem-B3gaU_YE.js";import"./ToolbarRootContext-Dx5TQc3l.js";import"./getDisabledMountTransitionStyles-BiMeu4u0.js";import"./getPseudoElementBounds-BFb_035t.js";import"./chevron-down-CObDGJK0.js";import"./index-DdnH95hg.js";import"./error-B4qmv8RY.js";import"./BaseCbacBanner-BUrOb6v6.js";import"./makeExternalStore-BK49hpUy.js";import"./Tooltip-zh4DwUZR.js";import"./PopoverPopup-DZ07P1F1.js";import"./toNumber-m03PtBIn.js";import"./useOsdkClient-es8EVs08.js";import"./DropdownField-BVHUypRk.js";import"./withOsdkMetrics-CHM8Yj4G.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
