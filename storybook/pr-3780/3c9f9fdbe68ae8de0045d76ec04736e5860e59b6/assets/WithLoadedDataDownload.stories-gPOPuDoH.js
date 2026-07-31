import{f as b,j as a,r as i}from"./iframe-8l4VgzvN.js";import{O as u}from"./object-table-BYDCS3dp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BWMgMhg-.js";import"./Table-BtXRikvm.js";import"./index-CENhKLHr.js";import"./Dialog-7UDuPlvQ.js";import"./cross-B2bEUPP4.js";import"./svgIconContainer-BQL_tfkb.js";import"./useBaseUiId-DUa6Gl7o.js";import"./InternalBackdrop-BYDChCJ5.js";import"./composite-a8JqXKoE.js";import"./index-e67zZ8CW.js";import"./index-ue3NKf6y.js";import"./index-CGcIjaZR.js";import"./useEventCallback-BBSO6LkX.js";import"./SkeletonBar-Cb6FypxV.js";import"./LoadingCell-Cb2SpVHN.js";import"./ColumnConfigDialog-7R66Lh7L.js";import"./DraggableList-BXrBLydx.js";import"./search-Bd8us1xK.js";import"./Input-CdaK_hcH.js";import"./useControlled-D-2KZgoS.js";import"./isEqual-Di3NOZUo.js";import"./isObject-Bswa1wAC.js";import"./Button-aIlHQ8yg.js";import"./ActionButton-C_uBNnQ3.js";import"./Checkbox-CjIu4B-7.js";import"./useValueChanged-Zk553mpV.js";import"./CollapsiblePanel-DqyaDfuX.js";import"./MultiColumnSortDialog-BTeLTlUO.js";import"./MenuTrigger-CsMLDPFG.js";import"./CompositeItem-Db4Osd20.js";import"./ToolbarRootContext-DpqGT7Lo.js";import"./getDisabledMountTransitionStyles-C2NmiCwZ.js";import"./getPseudoElementBounds-CJwQ3ni7.js";import"./chevron-down-DTdeumy4.js";import"./index-CqpjD42R.js";import"./error-B0b_D1P0.js";import"./BaseCbacBanner-uVAZLnwX.js";import"./makeExternalStore-vb2YzOlo.js";import"./Tooltip-DHWPRF-j.js";import"./PopoverPopup-pIzCYtCt.js";import"./toNumber-DKpENdrk.js";import"./useOsdkClient-_FMDwwtZ.js";import"./tick-rt-IJVvT.js";import"./DropdownField-PUakMDKl.js";import"./withOsdkMetrics-BlRozGsn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
