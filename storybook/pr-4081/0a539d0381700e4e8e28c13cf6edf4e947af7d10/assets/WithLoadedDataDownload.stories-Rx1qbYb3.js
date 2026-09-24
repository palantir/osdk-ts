import{f as b,j as a,r as i}from"./iframe-n8xc1zmR.js";import{O as u}from"./object-table-CiBALKRZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bmsyery-.js";import"./Table-B4GdGFKt.js";import"./index-BAcQGlbN.js";import"./Dialog-DMtSaZZF.js";import"./cross-CxpUurAd.js";import"./svgIconContainer-Cfmf2PdM.js";import"./useBaseUiId-eETnIy-K.js";import"./InternalBackdrop-CCcuqGEC.js";import"./composite-DIEyOfVG.js";import"./index-MqtyKuec.js";import"./index-DV7yKC3H.js";import"./index-Cv8iH0sa.js";import"./useEventCallback-kGheuRwD.js";import"./SkeletonBar-D74l1Ztx.js";import"./LoadingCell-CMixqtDR.js";import"./ColumnConfigDialog-2BkdEepz.js";import"./DraggableList-C8LN0UDD.js";import"./search-CHlDi3Oa.js";import"./Input-BlStQB_U.js";import"./useControlled-D5Gxa7cz.js";import"./Button-xMD57DxE.js";import"./small-cross-BNKugY-f.js";import"./ActionButton-CSMbtnor.js";import"./Checkbox-DD1ns08A.js";import"./useValueChanged-BZIGOI0A.js";import"./CollapsiblePanel-BpdatoOf.js";import"./MultiColumnSortDialog-Gt0xpNTA.js";import"./MenuTrigger-DdA8vxhc.js";import"./CompositeItem-Bg5j4iyb.js";import"./ToolbarRootContext-BJkBQG1i.js";import"./getDisabledMountTransitionStyles-BNw6DyHr.js";import"./getPseudoElementBounds-CLnV32FM.js";import"./chevron-down-ut1JXVy2.js";import"./index-_yWg9Pvu.js";import"./error-B1cmPXwp.js";import"./BaseCbacBanner-Cw7Gzt9H.js";import"./makeExternalStore-DsKbnpVD.js";import"./Tooltip-C0vBpqP0.js";import"./PopoverPopup-CnDxdF7U.js";import"./debounce-DHLI8XQh.js";import"./useOsdkClient-CCi5QoY_.js";import"./tick-Cgr5wt1D.js";import"./DropdownField-CS8LcZCX.js";import"./isEqual-vs4Fv33M.js";import"./withOsdkMetrics-BgaQEVHI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
