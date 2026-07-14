import{f as b,j as a,r as i}from"./iframe-BNyrhVdW.js";import{O as u}from"./object-table-Ca2axy2d.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-FRiRKs-L.js";import"./Table-BMd5B4t4.js";import"./index-DkBAUnWa.js";import"./Dialog-DkoHgwBj.js";import"./cross-Wb1iDlKc.js";import"./svgIconContainer-MA1JfUXV.js";import"./useBaseUiId-KzHqaaf1.js";import"./InternalBackdrop-CZVVm7To.js";import"./composite-BKmOyerC.js";import"./index-DJNWyFnw.js";import"./index-ooXVSDT_.js";import"./index-FIHYLr8p.js";import"./useEventCallback-BGTVJHKH.js";import"./SkeletonBar-pLMq4URT.js";import"./LoadingCell-Dxv8W3G7.js";import"./ColumnConfigDialog-CsCSWPKE.js";import"./DraggableList-D4UcL9nt.js";import"./search-BgwVfiju.js";import"./Input-Cd2-5o9b.js";import"./useControlled-DCvpdeEr.js";import"./Button-Df4W_3CD.js";import"./small-cross-D5CiSboP.js";import"./ActionButton-Iht_SOL1.js";import"./Checkbox-Bnam-HED.js";import"./useValueChanged-GfcMSebZ.js";import"./CollapsiblePanel-RDDfKzvg.js";import"./MultiColumnSortDialog-DNTsOnTb.js";import"./MenuTrigger-CeHaKOvj.js";import"./CompositeItem-Caz_ZeZt.js";import"./ToolbarRootContext-BWerFr-k.js";import"./getDisabledMountTransitionStyles-yZhHF7zJ.js";import"./getPseudoElementBounds-CzivCr0R.js";import"./chevron-down-Bqs5YN-g.js";import"./index-CujYUlk8.js";import"./error-Ad3vot64.js";import"./BaseCbacBanner-DM9h8wph.js";import"./makeExternalStore-CD_BskCq.js";import"./Tooltip-CgWitfVY.js";import"./PopoverPopup-DJtFM2EN.js";import"./toNumber-Bai0gA1f.js";import"./useOsdkClient-w73E4XS-.js";import"./tick-Byys0MXE.js";import"./DropdownField-CKes_566.js";import"./withOsdkMetrics-XGcTdurw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
