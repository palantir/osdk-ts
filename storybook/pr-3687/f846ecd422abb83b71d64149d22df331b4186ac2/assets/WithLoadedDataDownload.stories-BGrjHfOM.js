import{f as b,j as a,r as i}from"./iframe-DfZokpto.js";import{O as u}from"./object-table-V3VexWSg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C2M6ZLWS.js";import"./Table-DmQjN-IN.js";import"./index-CZdez1wS.js";import"./Dialog-D3dNymo7.js";import"./cross-C5IIgdv9.js";import"./svgIconContainer-B-LBMc7s.js";import"./useBaseUiId-Di0vZy3F.js";import"./InternalBackdrop-CeVQN_3q.js";import"./composite-Cy57pfRY.js";import"./index-DNtNwFHE.js";import"./index-Cs-W3rSL.js";import"./index-CFMZHXjP.js";import"./useEventCallback-Cc4FHkGM.js";import"./SkeletonBar-CwI3mQn6.js";import"./LoadingCell-CID5TB3V.js";import"./ColumnConfigDialog-CNF9ZgL5.js";import"./DraggableList-7JC9InAe.js";import"./search-Dujdc83W.js";import"./Input-CpR273dJ.js";import"./useControlled-CXS_gvTL.js";import"./isEqual-B2TvGpie.js";import"./isObject-dIp0Njzc.js";import"./Button-Dg1lZxDi.js";import"./ActionButton-DmuWB4qK.js";import"./Checkbox-DS_XI3ar.js";import"./useValueChanged-DLnBX1Wo.js";import"./CollapsiblePanel-QtoGm9u9.js";import"./MultiColumnSortDialog-BoFK9eOC.js";import"./MenuTrigger-CPECWPxD.js";import"./CompositeItem-Ct4hC_ue.js";import"./ToolbarRootContext-wfEc9w32.js";import"./getDisabledMountTransitionStyles-CtM3qL7n.js";import"./getPseudoElementBounds-DzgbIZhk.js";import"./chevron-down-vYjuLkiO.js";import"./index-NjWXFk_F.js";import"./error-B8p3BRu-.js";import"./BaseCbacBanner-Dh3tbNJV.js";import"./makeExternalStore-CgQtrX57.js";import"./Tooltip-DBBX28U8.js";import"./PopoverPopup-VOz80U1m.js";import"./toNumber-HwY4CUAV.js";import"./useOsdkClient-B_HOphkI.js";import"./tick-CGfSVmXp.js";import"./DropdownField-BV1FHdU6.js";import"./withOsdkMetrics-BtNgh2_s.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
