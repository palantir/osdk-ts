import{f as b,j as a,r as i}from"./iframe-B34J-v6h.js";import{O as u}from"./object-table-DTjiON6u.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DktNXW3g.js";import"./Table-Dfg77Bxb.js";import"./index-BszbKXdM.js";import"./Dialog-DqrZKH8L.js";import"./cross-pUUxARqk.js";import"./svgIconContainer-DmCHV_gw.js";import"./useBaseUiId-Do4jndxX.js";import"./InternalBackdrop-BhgSPtRS.js";import"./composite-DxIIqapU.js";import"./index-DAodypt3.js";import"./index-BqaRlPNX.js";import"./index-ClzzyEIK.js";import"./useEventCallback-DYWArs4W.js";import"./SkeletonBar-DgZTpj9n.js";import"./LoadingCell-KPodI4gW.js";import"./ColumnConfigDialog-B7uGR623.js";import"./DraggableList-DiF1ea2S.js";import"./search-CeKblNnA.js";import"./Input-C4Ex_DFO.js";import"./useControlled-Bg6sLlzu.js";import"./isEqual-Cx-kf-1u.js";import"./isObject-CnhZ3r5T.js";import"./Button-D_70nOKH.js";import"./ActionButton-DmUBsAeq.js";import"./Checkbox-VXc1ULhl.js";import"./useValueChanged-Dlm4ppkt.js";import"./CollapsiblePanel-nRmpIuct.js";import"./MultiColumnSortDialog-bwM4Ndeq.js";import"./MenuTrigger-CE0WI67H.js";import"./CompositeItem-ILlt-DFI.js";import"./ToolbarRootContext-CsJNA5yH.js";import"./getDisabledMountTransitionStyles-V0s781CD.js";import"./getPseudoElementBounds-CPaE4zmA.js";import"./chevron-down-ChHe2eij.js";import"./index-DFEBs7x6.js";import"./error-DhuwnDiJ.js";import"./BaseCbacBanner-ptnosBco.js";import"./makeExternalStore-DU96TFYm.js";import"./Tooltip-kFbAJLNY.js";import"./PopoverPopup-DlqTesz8.js";import"./toNumber-QrsZyUgq.js";import"./useOsdkClient-BWaZJhGH.js";import"./tick-CqgAuDLT.js";import"./DropdownField-BTqSbvCg.js";import"./withOsdkMetrics-CIjnlwhJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
