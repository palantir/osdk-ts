import{f as b,j as a,r as i}from"./iframe-CTtKpuPX.js";import{O as u}from"./object-table-BIXe4J1r.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D6hSPOmN.js";import"./Table-k8qyL3Jx.js";import"./index-Cyj4Ffpi.js";import"./Dialog-C-sXaxV2.js";import"./cross-BoqqpAr8.js";import"./svgIconContainer-DoDhPV94.js";import"./useBaseUiId-D1J9vYIJ.js";import"./InternalBackdrop-DF_dpEIw.js";import"./composite-C9mmOUFU.js";import"./index-Drl0RHSH.js";import"./index-YN6uwMna.js";import"./index-D2lFCtLu.js";import"./useEventCallback-BqbDxq1F.js";import"./SkeletonBar-C33oyVZZ.js";import"./LoadingCell-B3KYC1sj.js";import"./ColumnConfigDialog-BUTeKvu-.js";import"./DraggableList-OHE20B7W.js";import"./Input-58Z_MEuh.js";import"./useControlled-0bvtoG4K.js";import"./Button-CP-xYD7T.js";import"./small-cross-D7OT641J.js";import"./ActionButton-DzmwX5SM.js";import"./Checkbox-pQXewEiI.js";import"./minus-BRS7K1mA.js";import"./useValueChanged-Cypak-Cg.js";import"./caret-down-CnfRvl-P.js";import"./CollapsiblePanel-Mm5ZP4Kk.js";import"./MultiColumnSortDialog-Cu_kayiK.js";import"./MenuTrigger-mQZmMEDC.js";import"./CompositeItem-CA2UNOYQ.js";import"./ToolbarRootContext-CK-kAq8R.js";import"./getDisabledMountTransitionStyles-r5G5hKif.js";import"./getPseudoElementBounds-CKvt87_B.js";import"./chevron-down-DisEtop0.js";import"./index-BDXDgZqI.js";import"./error-gl_tyZw4.js";import"./BaseCbacBanner-Zd0__7zm.js";import"./makeExternalStore-eTbS9FM_.js";import"./Tooltip-D3FGGowJ.js";import"./PopoverPopup-DIozXyVU.js";import"./toNumber-CvlL-ztq.js";import"./useOsdkClient-Cvm4tIwe.js";import"./DropdownField-B6U_2dcW.js";import"./withOsdkMetrics-OYxvwukt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
