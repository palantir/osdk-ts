import{f as b,j as a,r as i}from"./iframe-bCqkjYXy.js";import{O as u}from"./object-table-BsVjMMi7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-JM6EDuxp.js";import"./Table-D-QT7C6A.js";import"./index-BPP7EufF.js";import"./Dialog-Dovwop9n.js";import"./cross-DJytR_xb.js";import"./svgIconContainer-pwFXFDcF.js";import"./useBaseUiId-Cgl_CtkY.js";import"./InternalBackdrop-CtpOZ47w.js";import"./composite-CIAMGJ8-.js";import"./index-DpupV0gW.js";import"./index-CqKdNo8H.js";import"./index-DdaIttIp.js";import"./useEventCallback-FaBF_0K6.js";import"./SkeletonBar-DFjzkg9q.js";import"./LoadingCell-CplfX0E_.js";import"./ColumnConfigDialog-B2lSXOht.js";import"./DraggableList-NeGNKxxv.js";import"./Input-6Q7B27Y4.js";import"./useControlled-BwGqFjS-.js";import"./Button-0Kv-A3xP.js";import"./small-cross-DjOwu3lt.js";import"./ActionButton-DpCAyBoQ.js";import"./Checkbox-ChilpboF.js";import"./minus-DkKmin5C.js";import"./useValueChanged-Z_NMb60W.js";import"./caret-down-BVjSm1fX.js";import"./CollapsiblePanel-CHWj-krs.js";import"./MultiColumnSortDialog-CevVTIYQ.js";import"./MenuTrigger-DLW-1JgS.js";import"./CompositeItem-9AAK0yx7.js";import"./ToolbarRootContext-DSYTYCWy.js";import"./getDisabledMountTransitionStyles-B26PuUNT.js";import"./getPseudoElementBounds-D-jfdjeU.js";import"./chevron-down-CM9ahFMo.js";import"./index-CvU8ZXYA.js";import"./error-UH_1G_DJ.js";import"./BaseCbacBanner-C-GfX_8N.js";import"./makeExternalStore-BggjNHUN.js";import"./Tooltip-D7hy9plI.js";import"./PopoverPopup-DuxMj4Xy.js";import"./toNumber-O4YyRiit.js";import"./useOsdkClient-Cgatok0o.js";import"./DropdownField-DkVgq5Nh.js";import"./withOsdkMetrics-G1bjVNM9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
