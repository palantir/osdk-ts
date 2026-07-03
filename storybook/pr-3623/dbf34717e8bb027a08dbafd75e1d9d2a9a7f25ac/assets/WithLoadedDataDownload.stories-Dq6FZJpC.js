import{f as b,j as a,r as i}from"./iframe-Ct3oxr9I.js";import{O as u}from"./object-table-CSjABLkC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cpix7I59.js";import"./Table-CLTcGTc3.js";import"./index-BeEk7T1w.js";import"./Dialog-Ce4lIITg.js";import"./cross-BMADg6y6.js";import"./svgIconContainer-BPTRZNd7.js";import"./useBaseUiId-DrNLrMt2.js";import"./InternalBackdrop-CSLfISGf.js";import"./composite-CMfYV8DM.js";import"./index-1uXXO74H.js";import"./index-CDpKJhZ5.js";import"./index-C8HOIxQp.js";import"./useEventCallback-k7DqcGil.js";import"./SkeletonBar-Bedbz1Nr.js";import"./LoadingCell-DmsCJtVe.js";import"./ColumnConfigDialog-C6xxCd5f.js";import"./DraggableList-VeNpOQ8s.js";import"./search-DVZxNNQh.js";import"./Input-Cjly-w9P.js";import"./useControlled-B3TsBytj.js";import"./Button-CV4FI36d.js";import"./small-cross-B3O2MU3_.js";import"./ActionButton-BQQh8gGV.js";import"./Checkbox-1niPv3J6.js";import"./useValueChanged-DiVwA_uk.js";import"./CollapsiblePanel-DIZMMwNq.js";import"./MultiColumnSortDialog-CzIieURU.js";import"./MenuTrigger-BJGI-hYP.js";import"./CompositeItem-C4Lg52S-.js";import"./ToolbarRootContext-Cj7czbwT.js";import"./getDisabledMountTransitionStyles-DVbZgRkg.js";import"./getPseudoElementBounds-DA8S38vA.js";import"./chevron-down-BNs-bhsK.js";import"./index-DLMrgljF.js";import"./error-BBSgIsYT.js";import"./BaseCbacBanner-CLMl4XCn.js";import"./makeExternalStore-rhS6SIAC.js";import"./Tooltip-YC0sAdup.js";import"./PopoverPopup-B88CTSAN.js";import"./toNumber-Bxm5uqpe.js";import"./useOsdkClient-CAdGRQxY.js";import"./tick-yGMEq9M3.js";import"./DropdownField-JWICtErB.js";import"./withOsdkMetrics-CUO9lnTj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
