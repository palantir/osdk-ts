import{f as b,j as a,r as i}from"./iframe-B-80Mkm7.js";import{O as u}from"./object-table-BxqG_MJT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CqWsSCnZ.js";import"./Table-C7bKg006.js";import"./index-AUifcsh0.js";import"./Dialog-BBuyV7h3.js";import"./cross-BVjH4vnv.js";import"./svgIconContainer-CCfq-fpw.js";import"./useBaseUiId-7EkOsbTl.js";import"./InternalBackdrop-Df9XtON3.js";import"./composite-BvjfwejW.js";import"./index-C1oNvpYj.js";import"./index-CdT_AVM0.js";import"./index-C18AT3O2.js";import"./useEventCallback-xTkopZf4.js";import"./SkeletonBar-BJMxpIod.js";import"./LoadingCell-BlgeOYUC.js";import"./ColumnConfigDialog-CyWZJtKj.js";import"./DraggableList-jsQL9QIH.js";import"./search-B3LLLRfT.js";import"./Input-DSreAQ9Z.js";import"./useControlled-BL4sDI8Q.js";import"./Button-BhiWz6E2.js";import"./small-cross-KsVnY-WY.js";import"./ActionButton-BLc6kuh0.js";import"./Checkbox-C2_wKFYL.js";import"./useValueChanged-iPInYZDI.js";import"./CollapsiblePanel-JpYsP8Zr.js";import"./MultiColumnSortDialog-Ddk-61Te.js";import"./MenuTrigger-BpyV9DBK.js";import"./CompositeItem-tArM5MUt.js";import"./ToolbarRootContext-C019PK9Y.js";import"./getDisabledMountTransitionStyles-7E1Dxexi.js";import"./getPseudoElementBounds-BJiS3phJ.js";import"./chevron-down-D6ZF1kx7.js";import"./index-Bh1jiVMQ.js";import"./error-D-y1nCx5.js";import"./BaseCbacBanner-iJcQHW_Y.js";import"./makeExternalStore-BgRq75tG.js";import"./Tooltip-j-8eocE7.js";import"./PopoverPopup-rPbNRW11.js";import"./debounce-BzHKeVby.js";import"./useOsdkClient-CqkTlt94.js";import"./tick-BEF_RXe7.js";import"./DropdownField-BkuadXbK.js";import"./isEqual-tN7XJasU.js";import"./withOsdkMetrics-B8oz1zlb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
