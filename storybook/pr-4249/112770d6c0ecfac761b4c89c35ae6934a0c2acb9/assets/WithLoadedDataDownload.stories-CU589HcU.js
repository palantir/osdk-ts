import{f as b,j as a,r as i}from"./iframe-DIhyjTQM.js";import{O as u}from"./object-table-Do9vu6qj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BITLElC1.js";import"./Table-aMp3ITaO.js";import"./index-C8ppAklG.js";import"./Dialog-x7P9gPjA.js";import"./cross-BVmbGj7v.js";import"./svgIconContainer-BVwGEvqe.js";import"./useBaseUiId-BRDIOgH7.js";import"./InternalBackdrop-BbR3bGoB.js";import"./composite-BkQZGQ9U.js";import"./index-kla4dWAe.js";import"./index-SCNohOo6.js";import"./useEventCallback-DgKocnhe.js";import"./SkeletonBar-C2TvSpMI.js";import"./LoadingCell-D7P3o9XJ.js";import"./ColumnConfigDialog-Q9snLBuv.js";import"./DraggableList-Dob7Rq-X.js";import"./search-D7TMRqS5.js";import"./Input-BCY1gssj.js";import"./useControlled-vI7L-1v7.js";import"./Button-BU0w-MK8.js";import"./small-cross-DVOzGHDB.js";import"./ActionButton-CSRmV5rV.js";import"./Checkbox-eblkHSax.js";import"./useValueChanged-1EPjCJhD.js";import"./CollapsiblePanel-B7QE2-21.js";import"./MultiColumnSortDialog-DTofYe8C.js";import"./MenuTrigger-CyZDawNi.js";import"./CompositeItem-D7Gjn2M2.js";import"./ToolbarRootContext-DDTggrNs.js";import"./getDisabledMountTransitionStyles-DDkkAoal.js";import"./getPseudoElementBounds-CQrPr7lO.js";import"./chevron-down-fg_D-X7z.js";import"./index-GGFmpVOs.js";import"./error-BcXd4Yso.js";import"./BaseCbacBanner-O8eKc9DG.js";import"./makeExternalStore-DUGVOR6Q.js";import"./Tooltip-Ce_ARAEV.js";import"./PopoverPopup-C4G8tLd2.js";import"./debounce-xNmml4RO.js";import"./useOsdkClient-ChFpCrqs.js";import"./tick-xU5_Eoim.js";import"./DropdownField-CNUfmwbR.js";import"./isEqual-BnA4SERm.js";import"./withOsdkMetrics-DKqvGaZy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
