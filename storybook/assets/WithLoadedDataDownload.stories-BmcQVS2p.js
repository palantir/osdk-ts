import{f as b,j as a,r as i}from"./iframe-CPLN-ZbK.js";import{O as u}from"./object-table-DKcSgb8t.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cut80g1D.js";import"./index-Cjge5u51.js";import"./Dialog-hcu_H2b0.js";import"./cross-DkzWzcR0.js";import"./svgIconContainer-DJorehzp.js";import"./useBaseUiId-BCid-a8z.js";import"./InternalBackdrop-H5MHz81r.js";import"./composite-DajkLm6o.js";import"./index-CcftVgrB.js";import"./index-CTI5qcoR.js";import"./index-8miuT5ZT.js";import"./useEventCallback-CwloqOs8.js";import"./SkeletonBar-BsNNEfxd.js";import"./LoadingCell-CUCPZmF_.js";import"./ColumnConfigDialog-CQjmuqWg.js";import"./DraggableList-DXMqTDes.js";import"./search-vlNNCCei.js";import"./Input-DTYOcpRg.js";import"./useControlled-CjsGTJEt.js";import"./Button-CwRu4Y7L.js";import"./small-cross-vfsVsU9u.js";import"./ActionButton-DQdOoyph.js";import"./Checkbox-C_skPkNa.js";import"./useValueChanged-D-cfwHFM.js";import"./CollapsiblePanel-D7FGbcZd.js";import"./MultiColumnSortDialog-6_vgxtTp.js";import"./MenuTrigger-DJI3OVra.js";import"./CompositeItem-2xQpagLs.js";import"./ToolbarRootContext-Bf2tT3Hj.js";import"./getDisabledMountTransitionStyles-BAd08XlN.js";import"./getPseudoElementBounds-CVyFvNKv.js";import"./chevron-down-jQvrZLIb.js";import"./index-C_Kl0KC7.js";import"./error-CfVtgGYX.js";import"./BaseCbacBanner-C0Cuvy9a.js";import"./makeExternalStore-GKMGQTfP.js";import"./Tooltip-D82cN-2b.js";import"./PopoverPopup-B1UMbbjh.js";import"./debounce-BHYl5DP-.js";import"./useOsdkClient-DQiZ2tYF.js";import"./tick-COEqwA56.js";import"./DropdownField-BZy0Vjfn.js";import"./isEqual-Jd-qeLdg.js";import"./withOsdkMetrics-DxyXNPGX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
