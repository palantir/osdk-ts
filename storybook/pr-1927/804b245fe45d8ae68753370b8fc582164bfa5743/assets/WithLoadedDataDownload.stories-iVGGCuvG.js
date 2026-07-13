import{f as b,j as a,r as i}from"./iframe-CzmEyu7G.js";import{O as u}from"./object-table-C9qciGvi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DecrOcLq.js";import"./Table-Bn1_j4bK.js";import"./index-BbBaxdbV.js";import"./Dialog-DV_CNPOv.js";import"./cross-DrmyAQxN.js";import"./svgIconContainer-6eJu9o0G.js";import"./useBaseUiId-Bft1ngn8.js";import"./InternalBackdrop-DlfwudfQ.js";import"./composite-CcStSYJQ.js";import"./index-BkoNt8qx.js";import"./index-15j0Pfyt.js";import"./index-DXPeKfWw.js";import"./useEventCallback-xydu-k9-.js";import"./SkeletonBar-2eBGWBZU.js";import"./LoadingCell-Bb-4DO_g.js";import"./ColumnConfigDialog-BrNvVsuh.js";import"./DraggableList-C3LxvBcn.js";import"./search-B0DKZ6GP.js";import"./Input-1boXHLUv.js";import"./useControlled-CJz5npX-.js";import"./Button-BjdaHQGQ.js";import"./small-cross-DmdqHuHi.js";import"./ActionButton-DbA_ZTHg.js";import"./Checkbox-BgT5n_LP.js";import"./useValueChanged-BwdQVFl5.js";import"./CollapsiblePanel-Bt0ULZQm.js";import"./MultiColumnSortDialog-316mjarO.js";import"./MenuTrigger-DBpmBrAf.js";import"./CompositeItem-CHujYx5L.js";import"./ToolbarRootContext-ydnR1ibb.js";import"./getDisabledMountTransitionStyles-nG3ljsZy.js";import"./getPseudoElementBounds-Y6UPpOzg.js";import"./chevron-down-PphKRlo8.js";import"./index-CHsrx0Un.js";import"./error-B_jnp-Yv.js";import"./BaseCbacBanner-37TBICqp.js";import"./makeExternalStore-D4GI9pLL.js";import"./Tooltip-l9fscW_U.js";import"./PopoverPopup-BKI1af_U.js";import"./toNumber-ESmULOiQ.js";import"./useOsdkClient-6YoTrE10.js";import"./tick-7YfJf4Iu.js";import"./DropdownField-Bm22x0dC.js";import"./withOsdkMetrics-DqWt2DA4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
