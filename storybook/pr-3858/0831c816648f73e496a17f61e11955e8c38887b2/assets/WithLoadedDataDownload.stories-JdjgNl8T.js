import{f as b,j as a,r as i}from"./iframe-KsjdEO7I.js";import{O as u}from"./object-table-CGHR2NCM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C0pJc9t5.js";import"./Table-DQtM9mY-.js";import"./index-BZRO3JpH.js";import"./Dialog-D41qlHqs.js";import"./cross-CWhIw0VB.js";import"./svgIconContainer-BGAWhN04.js";import"./useBaseUiId-C5JviLwb.js";import"./InternalBackdrop-CVGwHL6o.js";import"./composite-ByWaRsZl.js";import"./index-DvmmtGln.js";import"./index-C8vmqYWN.js";import"./index-Ba1VmSUV.js";import"./useEventCallback-Qxkrrdjq.js";import"./SkeletonBar-yHuYGeJF.js";import"./LoadingCell-9tKhkWXf.js";import"./ColumnConfigDialog-BexFVn6M.js";import"./DraggableList-BlcM5wlm.js";import"./search-DGehlEKr.js";import"./Input-C9qK0nTt.js";import"./useControlled-gVlU2BHL.js";import"./Button-ilD2Ywfa.js";import"./small-cross-BfS99eaU.js";import"./ActionButton-DeueSjTK.js";import"./Checkbox-C_aOxFYa.js";import"./useValueChanged-DsE0A3ks.js";import"./CollapsiblePanel-d3N9ZnYl.js";import"./MultiColumnSortDialog-BQ4SwnnC.js";import"./MenuTrigger-Bh1wIPnk.js";import"./CompositeItem-CmqFJQHv.js";import"./ToolbarRootContext-Dc9sSpUa.js";import"./getDisabledMountTransitionStyles-DYmcQNg5.js";import"./getPseudoElementBounds-CF4Nu5Z4.js";import"./chevron-down-CUpqK55l.js";import"./index-BhHreNeB.js";import"./error-s9sAxwq2.js";import"./BaseCbacBanner-DpbKijSV.js";import"./makeExternalStore-C8Usq2x_.js";import"./Tooltip-D437-ORi.js";import"./PopoverPopup-COwg5rea.js";import"./toNumber-sTi_usYo.js";import"./useOsdkClient-DI6J8JGK.js";import"./tick-BvcefncJ.js";import"./DropdownField-U-n8RG-x.js";import"./withOsdkMetrics-BAP0ApJK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
