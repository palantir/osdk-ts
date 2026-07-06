import{f as b,j as a,r as i}from"./iframe-CBxhM9az.js";import{O as u}from"./object-table-Dqc-yaY8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DW-KK_rZ.js";import"./Table-h9j7fqNs.js";import"./index-Cgf7pLo9.js";import"./Dialog-vDqqWy59.js";import"./cross-BDcYPaOo.js";import"./svgIconContainer-WdQ-lJI-.js";import"./useBaseUiId-9_EpMwZF.js";import"./InternalBackdrop-DFHVwMDy.js";import"./composite-Df1dJCMi.js";import"./index-CPiaO5lB.js";import"./index-CjaqmYPA.js";import"./index-BnHvkb-H.js";import"./useEventCallback-D0YTnVY1.js";import"./SkeletonBar-hKhSmt65.js";import"./LoadingCell-DYFx8LwX.js";import"./ColumnConfigDialog-_oNp4WYj.js";import"./DraggableList-BD3C8s30.js";import"./search-tBoCo39o.js";import"./Input-o8_LFGDR.js";import"./useControlled-B5r768gp.js";import"./Button-DOTPNZAD.js";import"./small-cross-BtqLy4Vr.js";import"./ActionButton-CeMk40mk.js";import"./Checkbox-CQqV4nx6.js";import"./useValueChanged-2h2EAomj.js";import"./CollapsiblePanel-cJDxiIST.js";import"./MultiColumnSortDialog-BfUv5TQQ.js";import"./MenuTrigger-B4-8S0Eq.js";import"./CompositeItem-DtegFXlt.js";import"./ToolbarRootContext-BeYMA7gL.js";import"./getDisabledMountTransitionStyles-C7U8KGpP.js";import"./getPseudoElementBounds-D2qAH0kG.js";import"./chevron-down-BXLYq3p8.js";import"./index-CYxWdSim.js";import"./error-B8LoRf1p.js";import"./BaseCbacBanner-CiwlVJdo.js";import"./makeExternalStore-CB_ai3M6.js";import"./Tooltip-0JLvYQYD.js";import"./PopoverPopup-DIw4j-98.js";import"./toNumber-BKA5rWdK.js";import"./useOsdkClient-BPZix_Hb.js";import"./tick-Bmc5daqv.js";import"./DropdownField-CD_fb-Uu.js";import"./withOsdkMetrics-DZvydXoo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
