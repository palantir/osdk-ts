import{f as b,j as a,r as i}from"./iframe-CYWi8529.js";import{O as u}from"./object-table-q3lC3v3R.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CnVGLtiW.js";import"./Table-CEl6cLCw.js";import"./index-Boz0HyVi.js";import"./Dialog-ClGq_gCI.js";import"./cross-Qkz6a47_.js";import"./svgIconContainer-2BpJRjLB.js";import"./useBaseUiId-OjXTId7w.js";import"./InternalBackdrop-BgwUJwLH.js";import"./composite-zxSbM7jj.js";import"./index-DXeq8Ruf.js";import"./index-DRUMM71a.js";import"./index-CRziKqtw.js";import"./useEventCallback-pXrRpkMU.js";import"./SkeletonBar-B2p0K3kO.js";import"./LoadingCell-CgmLqrVH.js";import"./ColumnConfigDialog-Cm0yyhtU.js";import"./DraggableList-DNEES7hw.js";import"./search-GsWk45Z7.js";import"./Input-wMXy-EBj.js";import"./useControlled-svv9BGfV.js";import"./Button-Bp2GEtN5.js";import"./small-cross-CJm59QlJ.js";import"./ActionButton-DCS1uxt3.js";import"./Checkbox-8gyYxKup.js";import"./useValueChanged-D010i_jJ.js";import"./CollapsiblePanel-SYLJL_rB.js";import"./MultiColumnSortDialog-DPvNER1A.js";import"./MenuTrigger-BHVzsU77.js";import"./CompositeItem-DfhDrK4I.js";import"./ToolbarRootContext-CLHdEoxs.js";import"./getDisabledMountTransitionStyles-DwEz26t0.js";import"./getPseudoElementBounds-C_c7jfrP.js";import"./chevron-down-HCWc7zXS.js";import"./index-7zhNQOzu.js";import"./error-BLwzgwyq.js";import"./BaseCbacBanner-2T4BqL2e.js";import"./makeExternalStore-DHI2g7Fp.js";import"./Tooltip-C_F6s6f6.js";import"./PopoverPopup-DTbuWzuz.js";import"./toNumber-BhWFSzjF.js";import"./useOsdkClient-BtnWy8nv.js";import"./tick-CIUN0mxL.js";import"./DropdownField-CZwYfcs5.js";import"./withOsdkMetrics-CEol_Vfs.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
