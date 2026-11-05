import{f as b,j as a,r as i}from"./iframe-DyhO41Rj.js";import{O as u}from"./object-table-CnkMaw8t.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CIbx8URd.js";import"./Table-DdVB3AgN.js";import"./index-DwI7CQqH.js";import"./Dialog-CNd6Q5dO.js";import"./cross-CrdS3els.js";import"./svgIconContainer-DEkY-HLY.js";import"./useBaseUiId-Bew9-MTU.js";import"./InternalBackdrop-FIq_NBf8.js";import"./composite-Brg7gMZI.js";import"./index-UqD0hRj3.js";import"./index-DR9hE8qy.js";import"./index-EkCVf_dq.js";import"./useEventCallback-7-xYdRK3.js";import"./SkeletonBar-Bpd-j5zt.js";import"./LoadingCell-BvfQZvK_.js";import"./ColumnConfigDialog-e1j5Aaw0.js";import"./DraggableList-CEQggg39.js";import"./search-D8ph0Tmj.js";import"./Input-dlG_yuK1.js";import"./useControlled-BDcMaUKC.js";import"./Button-fa-PaPuc.js";import"./small-cross-DjI62rJX.js";import"./ActionButton-DMioYdTS.js";import"./Checkbox-DUBSVtNO.js";import"./useValueChanged-CMrkkb4b.js";import"./CollapsiblePanel-C9_ojemY.js";import"./MultiColumnSortDialog-Bu_hNZRG.js";import"./MenuTrigger-Du-AWTD8.js";import"./CompositeItem-B1D8TqxB.js";import"./ToolbarRootContext-CekAQhO_.js";import"./getDisabledMountTransitionStyles-DgZyOtdd.js";import"./getPseudoElementBounds-BJc2NM_P.js";import"./chevron-down-D6leDeN-.js";import"./index-DVDXXnZb.js";import"./error-DLjCGmmk.js";import"./BaseCbacBanner-svJHwMB0.js";import"./makeExternalStore-CEyr08K1.js";import"./Tooltip-BFvNQrGe.js";import"./isObject-Bu43GTjb.js";import"./debounce-IRvapgvb.js";import"./useOsdkClient-CaJv5Gl-.js";import"./tick-DgUcKmPU.js";import"./DropdownField-vXp1_pry.js";import"./isEqual-DB1uUQ8K.js";import"./_baseIsEqual-C1rqwiMB.js";import"./withOsdkMetrics-rGISHWN9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
