import{f as b,j as a,r as i}from"./iframe-TwL9Rdcu.js";import{O as u}from"./object-table-DOmpi9ec.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dtd1x7f0.js";import"./Table-D157Dw9p.js";import"./index-B37Vkn7p.js";import"./Dialog-BPOvzZvq.js";import"./cross-DEXmuJ6S.js";import"./svgIconContainer-Cn5jlibP.js";import"./useBaseUiId-CA6_Pr4t.js";import"./InternalBackdrop-CxDNG576.js";import"./composite-Aws6OWjh.js";import"./index-DiSmLK3F.js";import"./index-BzhMbvob.js";import"./index-Oca42Qm_.js";import"./useEventCallback-DT0sCX5x.js";import"./SkeletonBar-CSWMLadG.js";import"./LoadingCell-Ck4mXGmE.js";import"./ColumnConfigDialog-DqZvcT84.js";import"./DraggableList-DXDZhqMb.js";import"./search-M01QHkXX.js";import"./Input-D1m7PFdq.js";import"./useControlled-Ee5pocfV.js";import"./isEqual-S7BEPodu.js";import"./isObject-D04Zr0Ej.js";import"./Button-93iZ1g0B.js";import"./ActionButton-Bl3Bz7Yc.js";import"./Checkbox-7MnoqMPv.js";import"./useValueChanged-BMITbowe.js";import"./CollapsiblePanel-GG2tw--5.js";import"./MultiColumnSortDialog-jEPlSRTE.js";import"./MenuTrigger-UQ3lmTDq.js";import"./CompositeItem-DDQiXXk3.js";import"./ToolbarRootContext-3L1WJeQb.js";import"./getDisabledMountTransitionStyles-CnFJwfEc.js";import"./getPseudoElementBounds-DtKiTUz6.js";import"./chevron-down-CfEskrRU.js";import"./index-ClR5kgm1.js";import"./error-3oWabdkP.js";import"./BaseCbacBanner-O7P0tRBU.js";import"./makeExternalStore-BX0FhRjZ.js";import"./Tooltip-BKi7jcww.js";import"./PopoverPopup-DMOPdfl-.js";import"./toNumber-BZugkDQH.js";import"./useOsdkClient-BcYS5GMf.js";import"./tick-vtzmVJ8o.js";import"./DropdownField-CyncprO9.js";import"./withOsdkMetrics-DF9gmOzI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
