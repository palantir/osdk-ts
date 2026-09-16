import{f as b,j as a,r as i}from"./iframe-CYdVR6sB.js";import{O as u}from"./object-table-ZxHLjbpQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BXur23Md.js";import"./Table-BTEdK2br.js";import"./index-BALJL5HN.js";import"./Dialog-CIiEyQiz.js";import"./cross-Cw6hhHQ7.js";import"./svgIconContainer-BA_bcDbd.js";import"./useBaseUiId-DWAeiyj4.js";import"./InternalBackdrop--MuUQ9Ln.js";import"./composite-Cc3NubB-.js";import"./index-DoUPlBgv.js";import"./index-B8qCRObq.js";import"./index-BqyVDr6I.js";import"./useEventCallback-DQs5DmXL.js";import"./SkeletonBar-n38Gly5n.js";import"./LoadingCell-C7i97lZg.js";import"./ColumnConfigDialog-b6IYNXHE.js";import"./DraggableList-Dp6tw8Q3.js";import"./search-Ceaj3yJ_.js";import"./Input-8WX07h9e.js";import"./useControlled-DJ_ChqUq.js";import"./Button-DXqS5gF6.js";import"./small-cross-DNLJnJK1.js";import"./ActionButton-CJlnBbXa.js";import"./Checkbox-CSD08bSL.js";import"./useValueChanged-C6DcZDB6.js";import"./CollapsiblePanel-CJCKVm3B.js";import"./MultiColumnSortDialog-BX2U8Aqs.js";import"./MenuTrigger-DgEhPmqF.js";import"./CompositeItem-C73xX0Ds.js";import"./ToolbarRootContext-ryiKPViF.js";import"./getDisabledMountTransitionStyles-CA4nP4MP.js";import"./getPseudoElementBounds-DwFXzaQG.js";import"./chevron-down-BTVG76nb.js";import"./index-BfKW-3Wf.js";import"./error-D8UfR1ZG.js";import"./BaseCbacBanner-w9kh10oP.js";import"./makeExternalStore-CoWYgG6l.js";import"./Tooltip-tNCAdybw.js";import"./PopoverPopup-xCKZwX1o.js";import"./debounce-CbnfdRbo.js";import"./useOsdkClient-B70HxYsA.js";import"./tick-BTWCOhDI.js";import"./DropdownField-B6eovdov.js";import"./isEqual-qYEMRRs3.js";import"./withOsdkMetrics-DXfIJx3f.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
