import{f as b,j as a,r as i}from"./iframe-C6yB_OA9.js";import{O as u}from"./object-table-HDfg_TTy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DRadfxZ3.js";import"./index-CYHovncI.js";import"./Dialog-B5ccMndt.js";import"./cross-CGEn_f8Q.js";import"./svgIconContainer-BHMXavE6.js";import"./useBaseUiId-rM_6hxp0.js";import"./InternalBackdrop-DtqyQDxL.js";import"./composite-pSUWUpBY.js";import"./index-CrGhjRoP.js";import"./index-CtIX1NAw.js";import"./index-BGZVb3vI.js";import"./useEventCallback-CB_wvjSH.js";import"./SkeletonBar-Crhiib3I.js";import"./LoadingCell-Dk7N-9vZ.js";import"./ColumnConfigDialog-2YulSkYL.js";import"./DraggableList-DR3zC2Zl.js";import"./search-Cs6gheVK.js";import"./Input-Cq3PGtjU.js";import"./useControlled-De9a2DUs.js";import"./Button-fD8qjLcS.js";import"./small-cross-BeJfHwu2.js";import"./ActionButton-Otj0HFao.js";import"./Checkbox-CtY2PwDF.js";import"./useValueChanged-DgXpI1nC.js";import"./CollapsiblePanel-Dq0dYvbH.js";import"./MultiColumnSortDialog-CWpcjsI4.js";import"./MenuTrigger-d7Oq0h18.js";import"./CompositeItem-BhFX388v.js";import"./ToolbarRootContext-l_NHV493.js";import"./getDisabledMountTransitionStyles-CjvM7Kt-.js";import"./getPseudoElementBounds-BxFMQaGu.js";import"./chevron-down-DYrrqtdW.js";import"./index-BjeOkhvx.js";import"./error-DvPL7YDk.js";import"./BaseCbacBanner-CiOoS4JT.js";import"./makeExternalStore-BcRZCs8p.js";import"./Tooltip-BZBvUMD1.js";import"./PopoverPopup-78FD9gys.js";import"./debounce-B5XLReag.js";import"./useOsdkClient-CUdML_iS.js";import"./tick-DGvKhXVA.js";import"./DropdownField-3xa1gpQG.js";import"./isEqual-fJtbK8b1.js";import"./withOsdkMetrics-CC4rYMg2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
