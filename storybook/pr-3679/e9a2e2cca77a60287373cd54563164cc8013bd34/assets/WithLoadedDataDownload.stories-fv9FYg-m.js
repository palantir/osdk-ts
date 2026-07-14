import{f as b,j as a,r as i}from"./iframe-DNMmx6Si.js";import{O as u}from"./object-table-BCbjG1NP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B1C098Cz.js";import"./Table-BI3fvush.js";import"./index-BZhLFndM.js";import"./Dialog-YBczE7Zm.js";import"./cross-CeSpPuQx.js";import"./svgIconContainer-D2PwOoz0.js";import"./useBaseUiId-DtSuWrMk.js";import"./InternalBackdrop-DdezDSJ3.js";import"./composite-DB3ZBswo.js";import"./index-Cb0pqKCg.js";import"./index-D64uu6P9.js";import"./index-BlbLf2zk.js";import"./useEventCallback-B4wWhErR.js";import"./SkeletonBar-CH5knA39.js";import"./LoadingCell-K0UorHcp.js";import"./ColumnConfigDialog-CFRJwEy5.js";import"./DraggableList-Do7vcbTu.js";import"./search-pbEf8tls.js";import"./Input-cuE84c5_.js";import"./useControlled-DrbXtnkc.js";import"./Button-ByNN6eB9.js";import"./small-cross-C2KoECcU.js";import"./ActionButton-bmeoJsTZ.js";import"./Checkbox-CF78pZX1.js";import"./useValueChanged-DyHA2FHs.js";import"./CollapsiblePanel-DYXnJcU-.js";import"./MultiColumnSortDialog-DOyGp2Hm.js";import"./MenuTrigger-BQIV4JAE.js";import"./CompositeItem-CHAE4geL.js";import"./ToolbarRootContext-BNfRMznZ.js";import"./getDisabledMountTransitionStyles-Dx2i30_8.js";import"./getPseudoElementBounds-Brlm4ojf.js";import"./chevron-down-BmnrMR4d.js";import"./index-iN6-cvPZ.js";import"./error-jHk7Y2QZ.js";import"./BaseCbacBanner-DDyrjfEI.js";import"./makeExternalStore-DdKyYX8n.js";import"./Tooltip-CQ7AMrjx.js";import"./PopoverPopup-saHPRXQ1.js";import"./toNumber-CzLB998f.js";import"./useOsdkClient-B68nDgVp.js";import"./tick-CrV5KhvA.js";import"./DropdownField-CRnI2lv3.js";import"./withOsdkMetrics-C3JDtrZP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
