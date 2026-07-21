import{f as b,j as a,r as i}from"./iframe-DnNKUWcg.js";import{O as u}from"./object-table-BsQWHquv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DQWKcrj2.js";import"./Table-BRaUvk9s.js";import"./index-GGLs1M5x.js";import"./Dialog-DnbSATsI.js";import"./cross-DpxJh_Rf.js";import"./svgIconContainer-B2CJaZ6n.js";import"./useBaseUiId-CKvMB-OE.js";import"./InternalBackdrop-cPAK-l8b.js";import"./composite-DTBZTdo5.js";import"./index-DoSif8t7.js";import"./index-CNrPxP1k.js";import"./index-DEeIND04.js";import"./useEventCallback-Bl1n9dXG.js";import"./SkeletonBar-CMr8yhKe.js";import"./LoadingCell-C7yIAwo-.js";import"./ColumnConfigDialog-B_0GBQ3g.js";import"./DraggableList-BNOPjEF7.js";import"./search-DLe85fa9.js";import"./Input-DtUtcfYN.js";import"./useControlled-DhCfBTTh.js";import"./Button-DHDhp2xt.js";import"./small-cross-DCXcLfEz.js";import"./ActionButton-B9YCCGPf.js";import"./Checkbox-YEeCPkVf.js";import"./useValueChanged-Dm02INJo.js";import"./CollapsiblePanel-CKiciOmf.js";import"./MultiColumnSortDialog-GQY1Z_Ct.js";import"./MenuTrigger-C7jriYKc.js";import"./CompositeItem-BaQsrHVB.js";import"./ToolbarRootContext-B0YLwdfY.js";import"./getDisabledMountTransitionStyles-Bz8sHGq1.js";import"./getPseudoElementBounds-DkksLvcd.js";import"./chevron-down-CZAj-qSf.js";import"./index-BiJvZYLB.js";import"./error-D2asl-Ti.js";import"./BaseCbacBanner-Bm4EpVSS.js";import"./makeExternalStore-BXOD0Kmg.js";import"./Tooltip-DX3QBsyx.js";import"./PopoverPopup-m03WX-mm.js";import"./toNumber-Cwu7D7ix.js";import"./useOsdkClient-BH9IEc8j.js";import"./tick-ClPMLU2O.js";import"./DropdownField-Bf-sp3Ya.js";import"./withOsdkMetrics-BWmd9N4i.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
