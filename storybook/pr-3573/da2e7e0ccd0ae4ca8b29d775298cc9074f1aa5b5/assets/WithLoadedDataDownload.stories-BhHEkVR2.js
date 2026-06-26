import{f as b,j as a,r as i}from"./iframe-C_1Lo6vx.js";import{O as u}from"./object-table-D6QjISsQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BJeu9M3_.js";import"./Table-LMIbvqp5.js";import"./index-CiIER5WL.js";import"./Dialog-COl4OOdw.js";import"./cross-BgQvhrmk.js";import"./svgIconContainer-Dx58van2.js";import"./useBaseUiId-DNGH9vxz.js";import"./InternalBackdrop-q-Nlysil.js";import"./composite-Dd8NyeIp.js";import"./index-DFn5EXXq.js";import"./index-ySNa2Pv6.js";import"./index-enARCyiw.js";import"./useEventCallback-DI7Le9j2.js";import"./SkeletonBar-DNUmjhYc.js";import"./LoadingCell-RSewebfU.js";import"./ColumnConfigDialog-CMxs-niW.js";import"./DraggableList-mKcAQWfW.js";import"./search-K4efN6Zt.js";import"./Input-CdvyZo2L.js";import"./useControlled-BSDavnra.js";import"./Button-B2neH2r7.js";import"./small-cross-DNr9EVfw.js";import"./ActionButton-hNoTiocM.js";import"./Checkbox-CrI-dS_-.js";import"./minus-BoD3E1-B.js";import"./tick-WP4J0Ov_.js";import"./useValueChanged-BtNlftbq.js";import"./caret-down-BiTy7nvM.js";import"./CollapsiblePanel-CRJLTk7L.js";import"./MultiColumnSortDialog-DJaKwyp6.js";import"./MenuTrigger-C2de-8o3.js";import"./CompositeItem-DQ-k6_Qh.js";import"./ToolbarRootContext-DbBADNWY.js";import"./getDisabledMountTransitionStyles-CZNvlzQk.js";import"./getPseudoElementBounds-BlzbHmSb.js";import"./chevron-down-De4ww-L7.js";import"./index-CMeVHhZD.js";import"./error-CWqG0RB_.js";import"./BaseCbacBanner-CFzL73DG.js";import"./makeExternalStore-B7Os3AUy.js";import"./Tooltip-r72caGq6.js";import"./PopoverPopup-CmGKZUUy.js";import"./toNumber-CvyZePBs.js";import"./useOsdkClient-ZpbQPJmM.js";import"./DropdownField-BONjIu88.js";import"./withOsdkMetrics-CgaJOJjb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
