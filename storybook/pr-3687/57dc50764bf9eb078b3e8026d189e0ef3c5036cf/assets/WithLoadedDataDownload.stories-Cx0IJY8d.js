import{f as b,j as a,r as i}from"./iframe-dM1Kh9EX.js";import{O as u}from"./object-table-B82lnkIi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-7FMWkzZS.js";import"./Table-cVdne5An.js";import"./index-B_KvKlce.js";import"./Dialog-C3Ce6gza.js";import"./cross-7AVQJru9.js";import"./svgIconContainer-Cx6Roc0W.js";import"./useBaseUiId-CVUY4bty.js";import"./InternalBackdrop-B3bGPZLn.js";import"./composite-DO-bqvDw.js";import"./index-g4kvI24p.js";import"./index-hjB_ZAfP.js";import"./index-DH2exy3-.js";import"./useEventCallback-BBUrZycY.js";import"./SkeletonBar-BQF9paXw.js";import"./LoadingCell-BUSMGpl6.js";import"./ColumnConfigDialog-BgVRpnqk.js";import"./DraggableList-BfVzgoon.js";import"./search-Bnfq5zPQ.js";import"./Input-DMcuRq9E.js";import"./useControlled-BZAbwJqP.js";import"./isEqual-C7V40YS0.js";import"./isObject-BXAfFXGd.js";import"./Button-CVLs3bjY.js";import"./ActionButton-GuuVk3P2.js";import"./Checkbox-BL7ZZXUO.js";import"./useValueChanged-BgGhZbIM.js";import"./CollapsiblePanel-D8g0BU6l.js";import"./MultiColumnSortDialog-CMVBp_G-.js";import"./MenuTrigger-oHfgy5O4.js";import"./CompositeItem-DEsFuTA4.js";import"./ToolbarRootContext-Dz7Y7U5D.js";import"./getDisabledMountTransitionStyles-DPoRLJtk.js";import"./getPseudoElementBounds-DCRW1Npc.js";import"./chevron-down-VABUlAmo.js";import"./index-C0EtQevH.js";import"./error-ByQ05fhN.js";import"./BaseCbacBanner-BKxtNFe3.js";import"./makeExternalStore-DOsKi0Pr.js";import"./Tooltip-CKSdaNNW.js";import"./PopoverPopup-CnuU0M4Z.js";import"./toNumber-CH9rsK5h.js";import"./useOsdkClient-BaeD6vgQ.js";import"./tick-o2hA1na9.js";import"./DropdownField-D9613Ml5.js";import"./withOsdkMetrics-CXmu9d_h.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
