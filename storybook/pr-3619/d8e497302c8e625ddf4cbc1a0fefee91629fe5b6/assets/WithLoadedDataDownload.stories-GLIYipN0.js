import{f as b,j as a,r as i}from"./iframe-CcCf_wKO.js";import{O as u}from"./object-table-D-UOMoTc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B3Lqtz2W.js";import"./Table-BqIfJMJJ.js";import"./index-CxR8oD69.js";import"./Dialog-BMjN9cJ0.js";import"./cross-B3pT6_uV.js";import"./svgIconContainer-B-gYQYPR.js";import"./useBaseUiId-Dgwp8Euj.js";import"./InternalBackdrop-Cp7-m9eb.js";import"./composite-BFPvVuIt.js";import"./index-ZU0gYkdk.js";import"./index-DHmwyqoP.js";import"./index-DClU7-3g.js";import"./useEventCallback-DvMB_nLu.js";import"./SkeletonBar-DUYp2iwo.js";import"./LoadingCell-jC9yOoHk.js";import"./ColumnConfigDialog-Bp4M_zFO.js";import"./DraggableList-D4scTJXW.js";import"./search-rcT4YYai.js";import"./Input-CMcFL7wW.js";import"./useControlled-2omoOCnz.js";import"./Button-DjvOhLp5.js";import"./small-cross-Cz6lQP2o.js";import"./ActionButton-CotI2LC3.js";import"./Checkbox-BKJrIzcx.js";import"./useValueChanged-DAyStsyg.js";import"./CollapsiblePanel-JYDO9LuS.js";import"./MultiColumnSortDialog-DrqZ7b4y.js";import"./MenuTrigger-B9YxGt5v.js";import"./CompositeItem-BMz51-mh.js";import"./ToolbarRootContext-BaxbK6xh.js";import"./getDisabledMountTransitionStyles-hPvpc5cL.js";import"./getPseudoElementBounds-DJ2nR5x9.js";import"./chevron-down-34yZBxnl.js";import"./index-BAjOAchP.js";import"./error-B3ug_ULp.js";import"./BaseCbacBanner-Bl0f4Nxf.js";import"./makeExternalStore-B8YzKIqE.js";import"./Tooltip-CqdSfWQ2.js";import"./PopoverPopup--PKDnL30.js";import"./toNumber-cYum0i0C.js";import"./useOsdkClient-DZHA5AWe.js";import"./tick-r0KBDd3G.js";import"./DropdownField-BJ3NhRHw.js";import"./withOsdkMetrics-MsbOjnAt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
