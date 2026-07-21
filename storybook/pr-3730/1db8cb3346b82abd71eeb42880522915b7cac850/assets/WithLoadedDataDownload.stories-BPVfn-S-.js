import{f as b,j as a,r as i}from"./iframe-Ct-TSTf4.js";import{O as u}from"./object-table-CKO4uEhy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Chs-M_kI.js";import"./Table-fEVx4sp0.js";import"./index-DXx_LEB8.js";import"./Dialog-D_jjoHLU.js";import"./cross-ArjRnsTp.js";import"./svgIconContainer-GibNCSph.js";import"./useBaseUiId-BVv5au8X.js";import"./InternalBackdrop-3Nc3zghx.js";import"./composite-eQnjTMS2.js";import"./index-Ws6usDuy.js";import"./index-D6O9mxxz.js";import"./index-Bw3CnksW.js";import"./useEventCallback-CyxgvrNY.js";import"./SkeletonBar-B9dIBavu.js";import"./LoadingCell-tVpdDaXs.js";import"./ColumnConfigDialog--ujkXu6o.js";import"./DraggableList-BEROzXvS.js";import"./search-5rXyKs3l.js";import"./Input-BoNksdiP.js";import"./useControlled-BC0Cr05M.js";import"./isEqual-BweXjxk-.js";import"./isObject-BKiXl15z.js";import"./Button-CTfjkduN.js";import"./ActionButton-B7fd7LYs.js";import"./Checkbox-BdHx9Qh7.js";import"./useValueChanged-BFE-0OMW.js";import"./CollapsiblePanel-dy8Iw7Wa.js";import"./MultiColumnSortDialog-0s4S0nGt.js";import"./MenuTrigger-rlqDzUIY.js";import"./CompositeItem-DDUvXDtM.js";import"./ToolbarRootContext-CzJN9Tg9.js";import"./getDisabledMountTransitionStyles-BpiVaQ6w.js";import"./getPseudoElementBounds-D1be_EtB.js";import"./chevron-down-Cz6YTiug.js";import"./index-BXqUX4Di.js";import"./error-DwinDpqB.js";import"./BaseCbacBanner-DmBbPeWA.js";import"./makeExternalStore-BpaTocvK.js";import"./Tooltip-hmSN5PJZ.js";import"./PopoverPopup-CqDSKnEc.js";import"./toNumber-CaXcigO5.js";import"./useOsdkClient-DLX-UPhi.js";import"./tick-Blt2fc9_.js";import"./DropdownField-BZ6gIM4w.js";import"./withOsdkMetrics-D9KuKGm5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
