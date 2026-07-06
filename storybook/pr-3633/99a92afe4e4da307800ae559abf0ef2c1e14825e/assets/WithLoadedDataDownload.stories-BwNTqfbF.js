import{f as b,j as a,r as i}from"./iframe-zLsQUMAw.js";import{O as u}from"./object-table-BgeD4JuT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CO4lQq_B.js";import"./Table-H7nQg7jv.js";import"./index-DE6lriSD.js";import"./Dialog-C7SuERu5.js";import"./cross-HAfKpsri.js";import"./svgIconContainer-DM1sVsf9.js";import"./useBaseUiId-CDbWZKXZ.js";import"./InternalBackdrop-D80U27G8.js";import"./composite-BsASbnkT.js";import"./index-DK05LQT7.js";import"./index-WGFNGwIq.js";import"./index-D9svPj6n.js";import"./useEventCallback-Cnr1zu1U.js";import"./SkeletonBar-DRvs3al4.js";import"./LoadingCell-zkM00B9n.js";import"./ColumnConfigDialog-B-IpO38P.js";import"./DraggableList-BPXNnrSV.js";import"./search-B4nRmcHn.js";import"./Input-DFEZJQv8.js";import"./useControlled-Bnt72tl_.js";import"./Button-CQlBfRM3.js";import"./small-cross-CsYe5KLO.js";import"./ActionButton-t5bTXHOi.js";import"./Checkbox-lTUt8QdJ.js";import"./useValueChanged-CqiHIm1B.js";import"./CollapsiblePanel-RfJIOgnR.js";import"./MultiColumnSortDialog-C69sMrp-.js";import"./MenuTrigger-CL2wkF4T.js";import"./CompositeItem-CjgyYjDg.js";import"./ToolbarRootContext-D-gY887B.js";import"./getDisabledMountTransitionStyles-CG8btGC3.js";import"./getPseudoElementBounds-BbooY6ih.js";import"./chevron-down-K_6VEsr_.js";import"./index-DDQT6zO2.js";import"./error-Bw9Mtjnp.js";import"./BaseCbacBanner-BlP9zLq1.js";import"./makeExternalStore-B-tZIFNm.js";import"./Tooltip-BbvYVbt2.js";import"./PopoverPopup-8MnK0a5C.js";import"./toNumber-B1nZ2PiK.js";import"./useOsdkClient-B3byok8U.js";import"./tick-CpgN2ErT.js";import"./DropdownField-Bnq7SV8c.js";import"./withOsdkMetrics-CICgC5TI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
