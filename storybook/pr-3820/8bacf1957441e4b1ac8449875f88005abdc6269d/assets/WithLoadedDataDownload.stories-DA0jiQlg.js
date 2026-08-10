import{f as b,j as a,r as i}from"./iframe-MJCO4tWq.js";import{O as u}from"./object-table-D-GlTyjO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D59pX6Bk.js";import"./Table-C8_ftk3i.js";import"./index-DAbYsEZg.js";import"./Dialog-BWPDmK8c.js";import"./cross-DEhoIyVp.js";import"./svgIconContainer-B8wHNsBx.js";import"./useBaseUiId-BXP8AFv-.js";import"./InternalBackdrop-MR6IfjGm.js";import"./composite-hTc6teuV.js";import"./index-BsqhAQGv.js";import"./index-Cnl5b3P-.js";import"./index-BnwFJuQc.js";import"./useEventCallback-BPzMo7TT.js";import"./SkeletonBar-CX75rHhD.js";import"./LoadingCell-BGN9J0ek.js";import"./ColumnConfigDialog-DBSEwEtO.js";import"./DraggableList-CmJxYjz-.js";import"./search-BVQldDSv.js";import"./Input-MHB43ASx.js";import"./useControlled-Dk0yJJ1t.js";import"./isEqual-n6GizMeC.js";import"./isObject-DFPZ6jAe.js";import"./Button-1rEr2cfV.js";import"./ActionButton-D4tfAY4w.js";import"./Checkbox-CAwtHkMP.js";import"./useValueChanged-Cn8wgOUs.js";import"./CollapsiblePanel-DYoXGj66.js";import"./MultiColumnSortDialog-DzIjxMRI.js";import"./MenuTrigger-s8lBQKu_.js";import"./CompositeItem-DcPjr0YJ.js";import"./ToolbarRootContext-CPLLt6Rz.js";import"./getDisabledMountTransitionStyles-eHgkv2fX.js";import"./getPseudoElementBounds-khLPTJUT.js";import"./chevron-down-Cf4wAAwN.js";import"./index-BvLOcFYh.js";import"./error-PCzB-peL.js";import"./BaseCbacBanner-Dg9T5QMO.js";import"./makeExternalStore-__RES5Ho.js";import"./Tooltip-n6NFq6Kx.js";import"./PopoverPopup-CdSwPRLB.js";import"./toNumber-Dckp5_Ne.js";import"./useOsdkClient-Dw0UV9QQ.js";import"./tick-B6M1Y5e_.js";import"./DropdownField-DFmcqvd7.js";import"./withOsdkMetrics-D9xBIQld.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
