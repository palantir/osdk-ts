import{f as b,j as a,r as i}from"./iframe-2pngh1Rs.js";import{O as u}from"./object-table-gz3SHil4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CG8d724h.js";import"./Table-BMS_hbXf.js";import"./index-DoLrcSFS.js";import"./Dialog-DfBi7d-y.js";import"./cross-QeX5l1qW.js";import"./svgIconContainer-Dz9aGjPQ.js";import"./useBaseUiId-D2X0nhPh.js";import"./InternalBackdrop-Bmnln8PI.js";import"./composite-FrGOJff3.js";import"./index-B3lZ1DGZ.js";import"./index-BTbdItMS.js";import"./index-BNsTXB9r.js";import"./useEventCallback-tMTzd65f.js";import"./SkeletonBar-CsBN3sz7.js";import"./LoadingCell-BiDdDtTq.js";import"./ColumnConfigDialog-DgwCuib1.js";import"./DraggableList-fjYAB-t5.js";import"./search-D4EMTx6V.js";import"./Input-pzJCWXrM.js";import"./useControlled-DKX0vwB-.js";import"./Button-CHBFkWEg.js";import"./small-cross-D_c64zDF.js";import"./ActionButton-BHpFxdG_.js";import"./Checkbox-BaKG-YDL.js";import"./useValueChanged-nr19lKO4.js";import"./CollapsiblePanel-DComTiuQ.js";import"./MultiColumnSortDialog-DEXzhw-F.js";import"./MenuTrigger-sB_h_R9s.js";import"./CompositeItem-3UU-yOXx.js";import"./ToolbarRootContext-CBQFrsGy.js";import"./getDisabledMountTransitionStyles-Cqo9nENB.js";import"./getPseudoElementBounds-DCbiHDOP.js";import"./chevron-down-CZ7isOC9.js";import"./index-B1RupX0X.js";import"./error-DU4AEtX8.js";import"./BaseCbacBanner-BIEyclZD.js";import"./makeExternalStore-_p5KoIlo.js";import"./Tooltip-C6SwcLQ5.js";import"./PopoverPopup-Bv6XTuQt.js";import"./toNumber-CK6mvJ4-.js";import"./useOsdkClient-BQ6MkRkL.js";import"./tick-uLdbBl1o.js";import"./DropdownField-DK7yfko2.js";import"./withOsdkMetrics-BRYLmxO3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
