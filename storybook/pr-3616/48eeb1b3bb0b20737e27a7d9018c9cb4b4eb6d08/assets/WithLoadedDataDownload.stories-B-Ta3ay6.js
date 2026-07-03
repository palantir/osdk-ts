import{f as b,j as a,r as i}from"./iframe-BgM7s6NU.js";import{O as u}from"./object-table-CVyJnltT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DgVGrWWk.js";import"./Table-D9bSkSBX.js";import"./index-BxYlfej2.js";import"./Dialog-DfZwmY46.js";import"./cross-Dmj7s9vC.js";import"./svgIconContainer-yByNBI5e.js";import"./useBaseUiId-CN6gEpIH.js";import"./InternalBackdrop-B3nz5lmD.js";import"./composite-DOIGingi.js";import"./index-CipJaMI-.js";import"./index-o8A-H11s.js";import"./index-DWz7CHPH.js";import"./useEventCallback-D5VQUvaf.js";import"./SkeletonBar-BgkmueLV.js";import"./LoadingCell-3q8VW9q4.js";import"./ColumnConfigDialog-BEsr_ILz.js";import"./DraggableList-a9WNVupl.js";import"./search-B4LU9bhP.js";import"./Input-D4IATUa3.js";import"./useControlled-MG65Srm2.js";import"./Button-DKbJ926h.js";import"./small-cross-Rh0TT2H8.js";import"./ActionButton-BSQAdh6_.js";import"./Checkbox-BgCjfFru.js";import"./useValueChanged-D9k5GhII.js";import"./CollapsiblePanel-DP9ySEIj.js";import"./MultiColumnSortDialog-CIEqWMLp.js";import"./MenuTrigger-CaljBkx7.js";import"./CompositeItem-CrmgCkQt.js";import"./ToolbarRootContext-BCyCuwMC.js";import"./getDisabledMountTransitionStyles-CKYxjGgo.js";import"./getPseudoElementBounds-B642FNkj.js";import"./chevron-down-BwDFHFRh.js";import"./index-W4gviOzE.js";import"./error-CqOKc6wG.js";import"./BaseCbacBanner-C4LFKasb.js";import"./makeExternalStore-DjI0JxPL.js";import"./Tooltip-DkKTkeb2.js";import"./PopoverPopup-ClB-dz-a.js";import"./toNumber-CsATLOoQ.js";import"./useOsdkClient-nKkjUSnh.js";import"./tick-D2z6fONX.js";import"./DropdownField-NKcVel0J.js";import"./withOsdkMetrics-Bfa6_rea.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
