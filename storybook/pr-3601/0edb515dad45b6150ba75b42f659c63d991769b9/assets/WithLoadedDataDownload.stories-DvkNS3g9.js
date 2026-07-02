import{f as b,j as a,r as i}from"./iframe-g5gKY9_O.js";import{O as u}from"./object-table-Cv0eExjX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-vD_ADXE0.js";import"./Table-Dup8Wuqu.js";import"./index-C40rUIxn.js";import"./Dialog-BVtHnaJo.js";import"./cross-D1KqNeKH.js";import"./svgIconContainer-CCJJt3RP.js";import"./useBaseUiId-Cu9W3twr.js";import"./InternalBackdrop-DNedxnEH.js";import"./composite-Du8KNnA7.js";import"./index-CvH9dz38.js";import"./index-DJ73cS3V.js";import"./index-DadRuR0G.js";import"./useRole-A63eqnir.js";import"./useEventCallback-BWIhuzkk.js";import"./SkeletonBar-CeIHcByV.js";import"./LoadingCell-CoTZnqsO.js";import"./ColumnConfigDialog-DL1Vst-T.js";import"./DraggableList-Ck5-8GdF.js";import"./Input-mkx3L3Pg.js";import"./useControlled-C8OguibT.js";import"./Button-BmSo5q-L.js";import"./small-cross-BWKgMqr5.js";import"./ActionButton-C1jidlz5.js";import"./Checkbox-DWlqoevB.js";import"./minus-DdlsLNy9.js";import"./useValueChanged-K2NEwIRi.js";import"./FieldItemContext-CofMgA_r.js";import"./caret-down-Bqs0Pmcj.js";import"./CollapsiblePanel-DFk-YE9W.js";import"./MultiColumnSortDialog-BPKVgG4j.js";import"./MenuTrigger-D9IBFJEa.js";import"./useCompositeListItem-BfgEgn4l.js";import"./ToolbarRootContext-BGBMNAEP.js";import"./getDisabledMountTransitionStyles-SjYBpT_j.js";import"./safePolygon-SiHk0P-C.js";import"./getPseudoElementBounds-B_ULom34.js";import"./CompositeItem-B8ZcJXf0.js";import"./chevron-down-CJwzE1wb.js";import"./index-BdFO9CbL.js";import"./error-6eOYL3Dm.js";import"./BaseCbacBanner-C5nx8zcl.js";import"./makeExternalStore-_BB3nsXJ.js";import"./Tooltip-CZGtBZAD.js";import"./PopoverPopup-CZ75TeZe.js";import"./toNumber-Dq45Lx_b.js";import"./useOsdkClient-DRcOrZXH.js";import"./Combobox-B1npoE69.js";import"./DropdownField-Q3dwOs-y.js";import"./useOsdkObjects-DPeKE1Nk.js";import"./withOsdkMetrics-DHCx2HxD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ge={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const je=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,je as __namedExportsOrder,ge as default};
