import{f as b,j as a,r as i}from"./iframe-Z2aXJPdd.js";import{O as u}from"./object-table-2xRchvLA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-HH98OTG_.js";import"./Table-DCEDbCej.js";import"./index-BDwbbs7g.js";import"./Dialog-CQ9bW3NZ.js";import"./cross-BUXL1pRc.js";import"./svgIconContainer-6r4Cq3if.js";import"./useBaseUiId-DsRLOs7K.js";import"./InternalBackdrop-MWzh2A1Y.js";import"./composite-D_ju5rZt.js";import"./index-wmvnWSa4.js";import"./index-CMHsxFJx.js";import"./index-BeCsuUiB.js";import"./useEventCallback-BSIMXIrB.js";import"./SkeletonBar-CqKWNE3e.js";import"./LoadingCell-gMAiXv4Z.js";import"./ColumnConfigDialog-DZLqpkjj.js";import"./DraggableList-hVGM03aj.js";import"./search-CnOrU0Lt.js";import"./Input-Cnfz6hBh.js";import"./useControlled-CwIh3vpr.js";import"./isEqual-DUEJ2syM.js";import"./isObject-F1m0DPX1.js";import"./Button-SBHQNUwv.js";import"./ActionButton-DfA2iWyA.js";import"./Checkbox-DstZ21Vq.js";import"./useValueChanged-Dw41idhr.js";import"./CollapsiblePanel-CD6CVsm_.js";import"./MultiColumnSortDialog-C7hgMBaM.js";import"./MenuTrigger-DI52AfNk.js";import"./CompositeItem-yg9xry01.js";import"./ToolbarRootContext-By8aQOR7.js";import"./getDisabledMountTransitionStyles-Bn5Izddt.js";import"./getPseudoElementBounds-CApyAz7W.js";import"./chevron-down-DdKTBYWI.js";import"./index-r54kb4_d.js";import"./error-lpxbkNMO.js";import"./BaseCbacBanner-CFGfRyaG.js";import"./makeExternalStore-tnX_KQS7.js";import"./Tooltip-C831Zbcc.js";import"./PopoverPopup-BjzqWGQ-.js";import"./toNumber-CUo8G2qG.js";import"./useOsdkClient-FRG2gFj_.js";import"./tick-BL3MemI_.js";import"./DropdownField-D8Gkk5jg.js";import"./withOsdkMetrics-YL2Lw-aJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
