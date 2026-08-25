import{f as b,j as a,r as i}from"./iframe-DRjBmUXS.js";import{O as u}from"./object-table-CCujxvTS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DgOWrW9h.js";import"./Table-DIwzOFSU.js";import"./index-D6qvYW_s.js";import"./Dialog-CjgHm-ts.js";import"./cross-3MnbZVbU.js";import"./svgIconContainer-Bh_w5Xfd.js";import"./useBaseUiId-WS17y9nt.js";import"./InternalBackdrop-Bcffkz1I.js";import"./composite-rGdZym8a.js";import"./index-BCESHM1K.js";import"./index-BOS5xdCe.js";import"./index-DPmkOngm.js";import"./useEventCallback-CWAgAbba.js";import"./SkeletonBar-D8YwKkFm.js";import"./LoadingCell-DCOMCNJj.js";import"./ColumnConfigDialog-8AJxfk8z.js";import"./DraggableList-DavVEhSF.js";import"./search-MPXqFORa.js";import"./Input-CDPW84Vd.js";import"./useControlled-sU745DGU.js";import"./Button-DE-Hu3dt.js";import"./small-cross-bWZnL7uz.js";import"./ActionButton-B1rhz0DA.js";import"./Checkbox-Cb6JSpK5.js";import"./useValueChanged-Dx083Fm3.js";import"./CollapsiblePanel-0e12BKeC.js";import"./MultiColumnSortDialog-BOhzgl61.js";import"./MenuTrigger-CNDXy2T4.js";import"./CompositeItem-Do0rCuoU.js";import"./ToolbarRootContext-Br9U1Q2_.js";import"./getDisabledMountTransitionStyles-BCbQnbBn.js";import"./getPseudoElementBounds-BkSPJz-P.js";import"./chevron-down-CFfBUDSH.js";import"./index-BVJlzR67.js";import"./error-NWnnz2CJ.js";import"./BaseCbacBanner-ClEgVWlR.js";import"./makeExternalStore-BkV80SHH.js";import"./Tooltip-DRP5x062.js";import"./PopoverPopup-CSPtAVJ4.js";import"./debounce-BDfyeiE3.js";import"./useOsdkClient-C1Jd3b7W.js";import"./tick-BlmFJVFO.js";import"./DropdownField-BM-ngSf_.js";import"./isEqual-CmUf4hUZ.js";import"./withOsdkMetrics-BBE1IHfP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
