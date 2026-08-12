import{f as b,j as a,r as i}from"./iframe-Bw3x6lZJ.js";import{O as u}from"./object-table-KzIqbEB8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D6ImcOTa.js";import"./Table-Dn3rkKiX.js";import"./index-Qclu0QrF.js";import"./Dialog-Diba78Yn.js";import"./cross-m2G2dPiH.js";import"./svgIconContainer-BM9FUCfQ.js";import"./useBaseUiId-vJHidliA.js";import"./InternalBackdrop-BBU4IrWY.js";import"./composite-aqmH1tPf.js";import"./index-cks-ZHTj.js";import"./index-BCgpKXyP.js";import"./index-DAhYrebj.js";import"./useEventCallback-B3x6jacx.js";import"./SkeletonBar-CuoJzBkC.js";import"./LoadingCell-DiT3zFwT.js";import"./ColumnConfigDialog-CcIdW_Y_.js";import"./DraggableList-B4PR-Ql0.js";import"./search-D48t6EZV.js";import"./Input-DR8DiZ8k.js";import"./useControlled-oOeAgRpZ.js";import"./isEqual-Cj10nL2b.js";import"./isObject-POigzj9I.js";import"./Button-CFbUHaqb.js";import"./ActionButton-Bv98HW9B.js";import"./Checkbox-_PsJuHu0.js";import"./useValueChanged-CRiOWQUR.js";import"./CollapsiblePanel-DDt6cKZo.js";import"./MultiColumnSortDialog-CYroUACu.js";import"./MenuTrigger-CHrB0ZA9.js";import"./CompositeItem-f_kpd3CD.js";import"./ToolbarRootContext-4HkoDmNp.js";import"./getDisabledMountTransitionStyles-DASxAd7F.js";import"./getPseudoElementBounds-CcrwyNPG.js";import"./chevron-down-mYSDwVOj.js";import"./index-D9NWm6bI.js";import"./error-B-KtUvsa.js";import"./BaseCbacBanner-U4HxRxxX.js";import"./makeExternalStore-xbWe60kF.js";import"./Tooltip-QdSUHEnp.js";import"./PopoverPopup-Bjb7rB-u.js";import"./toNumber-D9ViIeEh.js";import"./useOsdkClient-BBzpp516.js";import"./tick-CqjIagJp.js";import"./DropdownField-ws6Kg5_D.js";import"./withOsdkMetrics-BzxdER45.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
