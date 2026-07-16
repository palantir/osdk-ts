import{f as b,j as a,r as i}from"./iframe-anW6-Kv1.js";import{O as u}from"./object-table-CUtQoBdN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C7Pf2-ue.js";import"./Table-BOq_PJL4.js";import"./index-DZWEciFV.js";import"./Dialog-BgtN7ogu.js";import"./cross-95il3B-S.js";import"./svgIconContainer-CQ9JVNE9.js";import"./useBaseUiId-BskUv227.js";import"./InternalBackdrop-TKdi5D4Y.js";import"./composite-tY0gZ9xf.js";import"./index-aYDmKqlu.js";import"./index-xdzVTZ5K.js";import"./index-CkFva0ao.js";import"./useEventCallback-Bn8Clzat.js";import"./SkeletonBar-Cm3CxD8c.js";import"./LoadingCell-Cfwz5bhg.js";import"./ColumnConfigDialog-DWNfznNw.js";import"./DraggableList-CC65JMcd.js";import"./search-CwkqZKHt.js";import"./Input-pNBQT4IM.js";import"./useControlled-DYLDqUrt.js";import"./Button-BMtVMS_U.js";import"./small-cross-D-ENVNM1.js";import"./ActionButton-B0CesgT4.js";import"./Checkbox-BPAJ35O1.js";import"./useValueChanged-KxBkER4h.js";import"./CollapsiblePanel-C5wRSO9A.js";import"./MultiColumnSortDialog-CBMmjXd8.js";import"./MenuTrigger-QO5X0uON.js";import"./CompositeItem-DenTfmjz.js";import"./ToolbarRootContext-Cfe5oDAE.js";import"./getDisabledMountTransitionStyles-BQr_RpWB.js";import"./getPseudoElementBounds-Ckkk1DhU.js";import"./chevron-down-DVhXO3Vu.js";import"./index-V2ILH22Z.js";import"./error-us3TzVgj.js";import"./BaseCbacBanner-D4F_X7LO.js";import"./makeExternalStore-8xOz0-jk.js";import"./Tooltip-DCf7Gqgo.js";import"./PopoverPopup-B54rNnr0.js";import"./toNumber-CKSeUkHE.js";import"./useOsdkClient-DzdC1FMH.js";import"./tick-BeepcaAK.js";import"./DropdownField-3n4VbPYb.js";import"./withOsdkMetrics-A7ayThPn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
