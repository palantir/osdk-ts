import{f as b,j as a,r as i}from"./iframe-Dl_Era9Y.js";import{O as u}from"./object-table-BtWfB_PX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BFag9Tuc.js";import"./Table-CMNbLLzj.js";import"./index-DbhcZp7Q.js";import"./Dialog-Dmy5gN8M.js";import"./cross-BbMIqlmP.js";import"./svgIconContainer-DDYnlTok.js";import"./useBaseUiId-B79jbFjv.js";import"./InternalBackdrop-mL3oUfij.js";import"./composite-B5phMGTi.js";import"./index-Oaf4c6Ke.js";import"./index-BCievmfl.js";import"./index-BDAC5z8h.js";import"./useEventCallback-OFKE9_lV.js";import"./SkeletonBar-CsSUC_R6.js";import"./LoadingCell-DhKeiwXJ.js";import"./ColumnConfigDialog-eC3tLRei.js";import"./DraggableList-BneIFr0t.js";import"./Input-DXxky4I0.js";import"./useControlled-BcjJHBpM.js";import"./Button-CJlVL-LQ.js";import"./small-cross-DijxL1lN.js";import"./ActionButton-VzKq9Zpe.js";import"./Checkbox-Cjmc7n-G.js";import"./minus-CFMtXMwW.js";import"./useValueChanged-DAfMukKi.js";import"./caret-down-D6Fx85fm.js";import"./CollapsiblePanel-DVmakH95.js";import"./MultiColumnSortDialog-Z0zUaK1y.js";import"./MenuTrigger-DBglCDmZ.js";import"./CompositeItem-BK2L1FWL.js";import"./ToolbarRootContext-AQ2vyB7e.js";import"./getDisabledMountTransitionStyles-CoAv8Ap4.js";import"./getPseudoElementBounds-BwCNryjL.js";import"./chevron-down-C0-uGq65.js";import"./index-B25BmfRI.js";import"./error-CbuI9xiD.js";import"./BaseCbacBanner-CmyV4z-Q.js";import"./makeExternalStore-AmrGIbbG.js";import"./Tooltip-CVuis2Te.js";import"./PopoverPopup-C4HGymI3.js";import"./toNumber-D4UGOe4M.js";import"./useOsdkClient-7KidlrYw.js";import"./DropdownField-BSDDBPRO.js";import"./withOsdkMetrics-CcnVRrh_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
