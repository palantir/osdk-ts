import{f as b,j as a,r as i}from"./iframe-CBNXxCfo.js";import{O as u}from"./object-table-1ghrAGJF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-hNq2x0aF.js";import"./Table-6i4ZZb3W.js";import"./index-tOjn3DuJ.js";import"./Dialog-BL1jlSUr.js";import"./cross-ByQeE0-e.js";import"./svgIconContainer-Aeg62PdB.js";import"./useBaseUiId-DYvTCLZM.js";import"./InternalBackdrop-BuFEQUHh.js";import"./composite-DK294pzn.js";import"./index-CWKiu_fE.js";import"./index-FTKj7eco.js";import"./index-Bt0LUvaM.js";import"./useEventCallback-DpIm7-am.js";import"./SkeletonBar-BRD_fo5h.js";import"./LoadingCell-BaNdw7xG.js";import"./ColumnConfigDialog-ZH6iVasg.js";import"./DraggableList-eM-ab83r.js";import"./search-DDNU23bi.js";import"./Input-B4HJdzdZ.js";import"./useControlled-C7MVIRPF.js";import"./Button-DGZpthjp.js";import"./small-cross-CKdL694I.js";import"./ActionButton-6ZtJVgb1.js";import"./Checkbox-AlqZzEFb.js";import"./useValueChanged-6a_WmB-v.js";import"./CollapsiblePanel-CNnQ_Tqx.js";import"./MultiColumnSortDialog-XP2QzbrU.js";import"./MenuTrigger-D0T3Cl6J.js";import"./CompositeItem-CMo1LSw0.js";import"./ToolbarRootContext-BkEzRPqI.js";import"./getDisabledMountTransitionStyles-DSnPBVQi.js";import"./getPseudoElementBounds-DWf_NHYE.js";import"./chevron-down-CDGLawXt.js";import"./index-D9bbJoJ6.js";import"./error-DX2juQ7l.js";import"./BaseCbacBanner-CaUxymz7.js";import"./makeExternalStore-Bv9y4KPm.js";import"./Tooltip-DtvJQRxc.js";import"./PopoverPopup-uHJwtGzf.js";import"./debounce-D69uVilQ.js";import"./useOsdkClient-B1CDiX_g.js";import"./tick-Bz4lVOau.js";import"./DropdownField-ANoM4Blt.js";import"./isEqual-C5wCnjIr.js";import"./withOsdkMetrics-DJhX3-qL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
