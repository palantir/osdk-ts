import{f as b,j as a,r as i}from"./iframe-BsJOdbCL.js";import{O as u}from"./object-table-Dp1R9NCg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DxS_Velh.js";import"./Table-Daf9LopS.js";import"./index-BqujQTW3.js";import"./Dialog-BQfhl9fd.js";import"./cross-Bxqdiez_.js";import"./svgIconContainer-CrnbMK0b.js";import"./useBaseUiId-CB5lNuw3.js";import"./InternalBackdrop-B2GNz5hu.js";import"./composite-CaVgyQab.js";import"./index-CEwR0XXE.js";import"./index-rSFhfOaH.js";import"./index-D_l1l0Yv.js";import"./useEventCallback-BINgInB_.js";import"./SkeletonBar-CeSQZW6w.js";import"./LoadingCell-D9LiPaaJ.js";import"./ColumnConfigDialog-nFVX_AzW.js";import"./DraggableList-Bb6he5CK.js";import"./search-DGRADUpj.js";import"./Input-BYGlPWDj.js";import"./useControlled-7DT6e4WZ.js";import"./Button-CWQ0OGf8.js";import"./small-cross-D1GEAGXQ.js";import"./ActionButton-JWlqJiJ4.js";import"./Checkbox-HV55hq3D.js";import"./useValueChanged-T_IVy1TV.js";import"./CollapsiblePanel-DMdta-mT.js";import"./MultiColumnSortDialog-yapUVthL.js";import"./MenuTrigger-jQfAwnOD.js";import"./CompositeItem-BS607TGd.js";import"./ToolbarRootContext-DI-YguYW.js";import"./getDisabledMountTransitionStyles-DqSxt_J-.js";import"./getPseudoElementBounds-CXXR7gCg.js";import"./chevron-down-CLIxImQx.js";import"./index-BwHn30HN.js";import"./error-Btl7YeDY.js";import"./BaseCbacBanner-Mp7AFB5Z.js";import"./makeExternalStore-DWYVyprO.js";import"./Tooltip-cqHh73tY.js";import"./PopoverPopup-BGpU1k4a.js";import"./debounce-MidBPb8y.js";import"./useOsdkClient-CHvyPAtQ.js";import"./tick-DnQLWeom.js";import"./DropdownField-BBHxtCFQ.js";import"./isEqual-DEGlTRmV.js";import"./withOsdkMetrics-DV_LS9FP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
