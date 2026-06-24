import{f as b,j as a,r as i}from"./iframe-C7P3qYHN.js";import{O as u}from"./object-table-IvhOBdn0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D1CkhjvG.js";import"./Table-D6wjC6iE.js";import"./index-37aIV0JA.js";import"./Dialog-DeQYpJXD.js";import"./cross-B8ycCPYt.js";import"./svgIconContainer-EnXmAwO9.js";import"./useBaseUiId-BSLzqfaq.js";import"./InternalBackdrop-C0crVemW.js";import"./composite-DfrfqFeX.js";import"./index-BMQaZdf8.js";import"./index-Dx8b78eQ.js";import"./index-SF5k9eHL.js";import"./useEventCallback-COH8O7x1.js";import"./SkeletonBar-iC_wr-vV.js";import"./LoadingCell-C0NDXzuk.js";import"./ColumnConfigDialog-DENX4pjR.js";import"./DraggableList-BFAlgbBy.js";import"./Input-Bv63tEC1.js";import"./useControlled-bklff9m-.js";import"./Button-DX4B1i5p.js";import"./small-cross-rxbiav58.js";import"./ActionButton-DKydKkEA.js";import"./Checkbox-XYS5kX6c.js";import"./minus-Do-pxtir.js";import"./useValueChanged-C0AoCoib.js";import"./caret-down-DPmcwHxr.js";import"./CollapsiblePanel-DWm1OkCW.js";import"./MultiColumnSortDialog-LJIvDugQ.js";import"./MenuTrigger-Mm1BJ6L4.js";import"./CompositeItem-BSwD1Uqh.js";import"./ToolbarRootContext-DCnHqd4Z.js";import"./getDisabledMountTransitionStyles-C2X7vkbP.js";import"./getPseudoElementBounds-DhwxdWKT.js";import"./chevron-down-CpVz0Y-B.js";import"./index-QZ7G__DE.js";import"./error-DoIke-Nc.js";import"./BaseCbacBanner-tq4Phpe2.js";import"./makeExternalStore-BAxIX9TA.js";import"./Tooltip-CLTnoYGx.js";import"./PopoverPopup-B7NUFOz1.js";import"./toNumber-Bsjr-L4w.js";import"./useOsdkClient-Bcv5rD-6.js";import"./DropdownField-BG-FZaHf.js";import"./withOsdkMetrics-BlvWOGXv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
