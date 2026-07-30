import{f as b,j as a,r as i}from"./iframe-DuxpSVeu.js";import{O as u}from"./object-table-C939L43N.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CVqn3HQv.js";import"./Table-DjLwXHQc.js";import"./index-Dbf3XMP5.js";import"./Dialog-DfrL6k9H.js";import"./cross-ByskZVKs.js";import"./svgIconContainer-D81CTfk3.js";import"./useBaseUiId-CFJYUser.js";import"./InternalBackdrop-C0KpYaZu.js";import"./composite-Bv0d7hMq.js";import"./index-B7GSl1cF.js";import"./index-Db0VOaPK.js";import"./index-BJdDgk1_.js";import"./useEventCallback-DDUzUWfE.js";import"./SkeletonBar-DsJHAsa6.js";import"./LoadingCell-CjuoF-Gl.js";import"./ColumnConfigDialog-BCMc9_F6.js";import"./DraggableList-D3b9eCh7.js";import"./search-C3puoylr.js";import"./Input-BRm5VqU-.js";import"./useControlled-CUzvhz2W.js";import"./isEqual-CcLD5HAO.js";import"./isObject-0ofookEW.js";import"./Button-LWb_6Tdn.js";import"./ActionButton-1_m7nH98.js";import"./Checkbox-CIand9sc.js";import"./useValueChanged-BdU0Smwa.js";import"./CollapsiblePanel-Cd7daTfo.js";import"./MultiColumnSortDialog-r93u9dFu.js";import"./MenuTrigger-yO33KpiI.js";import"./CompositeItem-DVPpXfkZ.js";import"./ToolbarRootContext-D_pMZLcD.js";import"./getDisabledMountTransitionStyles-DkCuaO2I.js";import"./getPseudoElementBounds-ZVlk_Kim.js";import"./chevron-down-BLjWGzzL.js";import"./index-DxCyc1SX.js";import"./error-BqVc61FN.js";import"./BaseCbacBanner-B_-o7ENS.js";import"./makeExternalStore-CVmgvRee.js";import"./Tooltip-C1_rLlVZ.js";import"./PopoverPopup-D8uDacjF.js";import"./toNumber-BIjSEtt0.js";import"./useOsdkClient-Dp8UoSK2.js";import"./tick-D7pRbUig.js";import"./DropdownField-BoJ4CmTZ.js";import"./withOsdkMetrics-uRRxlu8C.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
