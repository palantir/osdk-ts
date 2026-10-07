import{f as b,j as a,r as i}from"./iframe-Bs9Zqqf-.js";import{O as u}from"./object-table-BDbBPExr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cp9usskF.js";import"./Table-WIGkIWeG.js";import"./index-BDMfxNxX.js";import"./Dialog-CGb3DT5F.js";import"./cross-BNRY-s17.js";import"./svgIconContainer-aOhTN_D5.js";import"./useBaseUiId-9IsGojkB.js";import"./InternalBackdrop-BGL8gebb.js";import"./composite-Cqp0rQwX.js";import"./index-Dblp0HKE.js";import"./index-EMOKDP2T.js";import"./index-Cfs5giYo.js";import"./useEventCallback-CPnYLf1v.js";import"./SkeletonBar-D3b4PSYB.js";import"./LoadingCell-CyJKjezy.js";import"./ColumnConfigDialog-BJEn9MZc.js";import"./DraggableList-SExvNz1P.js";import"./search-D6HT7gEm.js";import"./Input-DFM7xw9J.js";import"./useControlled-DkY88gS_.js";import"./Button-DE9Fucz0.js";import"./small-cross-DrXs_-qZ.js";import"./ActionButton-BgsU4BKW.js";import"./Checkbox-CyS5WU7M.js";import"./useValueChanged-9Rhs99cV.js";import"./CollapsiblePanel-Uvb76fMO.js";import"./MultiColumnSortDialog-DHqlE6PI.js";import"./MenuTrigger-JgHvRvS2.js";import"./CompositeItem-ctTapvtZ.js";import"./ToolbarRootContext-ZHsiNOiv.js";import"./getDisabledMountTransitionStyles-B4RdPd8-.js";import"./getPseudoElementBounds-DSR0VlQK.js";import"./chevron-down-Dg71DAa4.js";import"./index-D6h7Nvb3.js";import"./error-EzQ0dI5s.js";import"./BaseCbacBanner-BFkGOdbB.js";import"./makeExternalStore-CdBELGf5.js";import"./Tooltip-Bdagy_hn.js";import"./PopoverPopup-BcfSdZdq.js";import"./debounce-CqWMxEN-.js";import"./useOsdkClient-B6joKZOa.js";import"./tick-CXdTppsu.js";import"./DropdownField-D9LMnY0i.js";import"./isEqual-OcM3daqL.js";import"./withOsdkMetrics-DDUrYl-m.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
