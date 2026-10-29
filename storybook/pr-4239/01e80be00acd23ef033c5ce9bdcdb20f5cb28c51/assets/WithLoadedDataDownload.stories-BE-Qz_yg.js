import{f as b,j as a,r as i}from"./iframe-Dm6fEHSl.js";import{O as u}from"./object-table-DnFCrXZi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bqb1rZ_1.js";import"./Table-BihK-ML9.js";import"./index-0oZqapnL.js";import"./Dialog-DBnyMnw4.js";import"./cross-Bt5YxcTr.js";import"./svgIconContainer-DQYcgJEu.js";import"./useBaseUiId-DheuxufY.js";import"./InternalBackdrop-CWYVY9cc.js";import"./composite-Dro01qd5.js";import"./index-B9LtevwQ.js";import"./index-CFKD3KmR.js";import"./index-DLRHryCX.js";import"./useEventCallback-CRhDiDVJ.js";import"./SkeletonBar-CuUg8o4-.js";import"./LoadingCell-BpReS1Uv.js";import"./ColumnConfigDialog-CHcXL66b.js";import"./DraggableList-CsP1XmWO.js";import"./search-C7KxNUeL.js";import"./Input-C1Iecv69.js";import"./useControlled-BNqne-mh.js";import"./Button-DtwGlaif.js";import"./small-cross-DZMVW_os.js";import"./ActionButton-BcLZ8dUx.js";import"./Checkbox-CE6rrq8N.js";import"./useValueChanged-DdVY_JQU.js";import"./CollapsiblePanel-CPNer4jD.js";import"./MultiColumnSortDialog-liHRsGTS.js";import"./MenuTrigger-bZ6gnwnL.js";import"./CompositeItem-BlaUOs4g.js";import"./ToolbarRootContext-2ybRt6Lm.js";import"./getDisabledMountTransitionStyles-C5jTdX4L.js";import"./getPseudoElementBounds-B0DqqRGA.js";import"./chevron-down-CWH7kW7k.js";import"./index-nzPy6itP.js";import"./error-CtkZoki4.js";import"./BaseCbacBanner-DvfiGpMO.js";import"./makeExternalStore-Ctl6TIlE.js";import"./Tooltip-R_AQOimg.js";import"./PopoverPopup-DXuTelnl.js";import"./debounce-D-AGcw8s.js";import"./useOsdkClient-CBlvauOc.js";import"./tick-QJWik-78.js";import"./DropdownField-DGrJZFlx.js";import"./isEqual-CuOjpzUY.js";import"./withOsdkMetrics-BttmRgw9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
