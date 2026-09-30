import{f as b,j as a,r as i}from"./iframe-BvtrFrDq.js";import{O as u}from"./object-table-WI4x_sPI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-hiWkjTbI.js";import"./Table-ji2Mcr5u.js";import"./index-BJkhm3Ia.js";import"./Dialog-DBAH8-Tq.js";import"./cross-Dm_M5ayo.js";import"./svgIconContainer-CxzpI-nz.js";import"./useBaseUiId-D1zJXq-x.js";import"./InternalBackdrop-Bhnkys6D.js";import"./composite-D9wCA3L7.js";import"./index-B2QxPovI.js";import"./index-BmdzJuTV.js";import"./index-jQnhxv3F.js";import"./useEventCallback-heFPgHFU.js";import"./SkeletonBar-5j0-fDGa.js";import"./LoadingCell-CTU55bjC.js";import"./ColumnConfigDialog-t2KtF3py.js";import"./DraggableList-CLCYhfcj.js";import"./search-y87IcSNA.js";import"./Input-D3h_1eKW.js";import"./useControlled-C5pmq0AY.js";import"./Button-BJy_LHxZ.js";import"./small-cross-B9NMxasu.js";import"./ActionButton-Ye6rlMnt.js";import"./Checkbox-DeGVUvpG.js";import"./useValueChanged-CrlzAUPK.js";import"./CollapsiblePanel-CvNLT_W0.js";import"./MultiColumnSortDialog-BJOCPejF.js";import"./MenuTrigger-B7fnUekI.js";import"./CompositeItem-Rfg3qzju.js";import"./ToolbarRootContext-BrQK-hek.js";import"./getDisabledMountTransitionStyles-Bafsb8MV.js";import"./getPseudoElementBounds-B7QZiwEe.js";import"./chevron-down-BxwFps0j.js";import"./index-B5-tsrVL.js";import"./error-BbBH-DMp.js";import"./BaseCbacBanner-CHzQUt6Z.js";import"./makeExternalStore-CT6g87Zk.js";import"./Tooltip-B-M7Glcs.js";import"./PopoverPopup-B2L2ZFoJ.js";import"./debounce-D48NSO_6.js";import"./useOsdkClient-BU66DrOT.js";import"./tick-D1kmaKOg.js";import"./DropdownField-D-hNk4Y1.js";import"./isEqual-aLexuwQw.js";import"./withOsdkMetrics-Cf9QOWiU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
