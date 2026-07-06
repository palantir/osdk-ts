import{f as b,j as a,r as i}from"./iframe-BljDq4wR.js";import{O as u}from"./object-table-iRbLn6ux.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B_iYACo7.js";import"./Table-CSn-USZP.js";import"./index-DO-1ysPN.js";import"./Dialog-FzIWBzOw.js";import"./cross-Be1AVT1F.js";import"./svgIconContainer-CX8tMQQJ.js";import"./useBaseUiId-BMSny1Su.js";import"./InternalBackdrop-B88grtsy.js";import"./composite-D0yY90_T.js";import"./index-B7vgxTAj.js";import"./index-zpcgYgtG.js";import"./index-CubXdQ6D.js";import"./useEventCallback-BBhvHYMg.js";import"./SkeletonBar-BnK76L-A.js";import"./LoadingCell-CkduBL2D.js";import"./ColumnConfigDialog-B9oNJUhc.js";import"./DraggableList-ojLJIkst.js";import"./search-C4Ru-Hyi.js";import"./Input-BWn9wT_i.js";import"./useControlled-CPi6U7Vb.js";import"./Button-CP-k4xCy.js";import"./small-cross-C_eNneaR.js";import"./ActionButton-Bt-sXrd_.js";import"./Checkbox-DvUCAcbb.js";import"./useValueChanged-DrbuOY9i.js";import"./CollapsiblePanel-DBmZO5qU.js";import"./MultiColumnSortDialog-DjjvqZM4.js";import"./MenuTrigger-DLtav0WH.js";import"./CompositeItem-D_nptJWW.js";import"./ToolbarRootContext-C2oiM4f3.js";import"./getDisabledMountTransitionStyles-aBy-T-9N.js";import"./getPseudoElementBounds-C6at6wGp.js";import"./chevron-down-DyUKO2D2.js";import"./index-Dtm72hel.js";import"./error-BLpAp9wE.js";import"./BaseCbacBanner-B7yZJ_IB.js";import"./makeExternalStore-yIneejl0.js";import"./Tooltip-ocMNx7Rf.js";import"./PopoverPopup-ZXnB9BYu.js";import"./toNumber-BMeU4-aE.js";import"./useOsdkClient-yBDsvnQU.js";import"./tick-DcZbmWd6.js";import"./DropdownField-DnJgL-m6.js";import"./withOsdkMetrics-DCDCh1dh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
