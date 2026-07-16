import{f as b,j as a,r as i}from"./iframe-B3ON-Bh8.js";import{O as u}from"./object-table-T2u1cA-i.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DrAZwIhC.js";import"./Table-C-sbj_59.js";import"./index-eNh6hv_-.js";import"./Dialog-CJ_3isPS.js";import"./cross-Cdzhm16M.js";import"./svgIconContainer-vmYm-prF.js";import"./useBaseUiId-DK_xnagp.js";import"./InternalBackdrop-Dbhd26V8.js";import"./composite-BuMlRczj.js";import"./index-Bn0evHgr.js";import"./index-Cm9O8KIX.js";import"./index-CmBtbzcH.js";import"./useEventCallback-BehAxpTH.js";import"./SkeletonBar-C3lPZgvA.js";import"./LoadingCell-CNTrL3Uz.js";import"./ColumnConfigDialog-DgxvcyFZ.js";import"./DraggableList-9W54Vle2.js";import"./search-g9bviAUS.js";import"./Input-WA17603D.js";import"./useControlled-DmnnRIQ_.js";import"./Button-m63Z_so0.js";import"./small-cross-DJnWX1UG.js";import"./ActionButton-DnizniR2.js";import"./Checkbox-jkI4c9wz.js";import"./useValueChanged-BT9pgu5d.js";import"./CollapsiblePanel-BdGWC1CL.js";import"./MultiColumnSortDialog-BvuTGmVd.js";import"./MenuTrigger-BBJDtNlC.js";import"./CompositeItem-BVGkt4zB.js";import"./ToolbarRootContext-DCiCihYc.js";import"./getDisabledMountTransitionStyles-GHK2nkm7.js";import"./getPseudoElementBounds-CR263vpL.js";import"./chevron-down-CVq2PDOV.js";import"./index-CH_p88jr.js";import"./error-DcSOw756.js";import"./BaseCbacBanner-D6ktFaHk.js";import"./makeExternalStore-Cu-SjYrY.js";import"./Tooltip-Qoa9z_tJ.js";import"./PopoverPopup-BAqZ4-un.js";import"./toNumber-BiOQCIEc.js";import"./useOsdkClient-CTEIFvYL.js";import"./tick-BikCXQ_2.js";import"./DropdownField-B1ZRp1XB.js";import"./withOsdkMetrics-K_Pzkso4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
