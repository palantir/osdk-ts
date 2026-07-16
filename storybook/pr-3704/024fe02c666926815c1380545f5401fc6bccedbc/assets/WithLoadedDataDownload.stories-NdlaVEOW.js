import{f as b,j as a,r as i}from"./iframe-B-bI26qs.js";import{O as u}from"./object-table-CNHG8LuG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CyAMPy-I.js";import"./Table-Dcsr6pIQ.js";import"./index-BO1Z2F8c.js";import"./Dialog-H9tD7XDb.js";import"./cross-ZObj4Zbg.js";import"./svgIconContainer-VHKYNUGL.js";import"./useBaseUiId-DFxa8KHY.js";import"./InternalBackdrop-BIj-JJ9Q.js";import"./composite-nT2iGLyC.js";import"./index-DAGzsosQ.js";import"./index-QKKc5Ld_.js";import"./index-BYI1FAfC.js";import"./useEventCallback-BCkkdBp8.js";import"./SkeletonBar-sJmn9bTX.js";import"./LoadingCell-BoHKFlMk.js";import"./ColumnConfigDialog-DwmDKm0Q.js";import"./DraggableList-C5ZfWEjN.js";import"./search-DCiLGM6V.js";import"./Input-15l147x7.js";import"./useControlled-B9jXB5z3.js";import"./isEqual-Bx1s22Z6.js";import"./isObject-BBhmxkoG.js";import"./Button-D-VXe3Fn.js";import"./ActionButton-Bmyf3rc7.js";import"./Checkbox-D09dYZsD.js";import"./useValueChanged-DBwCBbTU.js";import"./CollapsiblePanel-zetCIaZK.js";import"./MultiColumnSortDialog-BYOZg9O5.js";import"./MenuTrigger-j_WWc1Sg.js";import"./CompositeItem-CozhSruV.js";import"./ToolbarRootContext-HXa5oleO.js";import"./getDisabledMountTransitionStyles-dTfyqDTr.js";import"./getPseudoElementBounds-YyzRwYGd.js";import"./chevron-down-B6UilXJO.js";import"./index-C-NVZsDo.js";import"./error-D0Jho4K1.js";import"./BaseCbacBanner-BWorwYRz.js";import"./makeExternalStore-nnOIXDXF.js";import"./Tooltip-CsEtDtBy.js";import"./PopoverPopup-DkXP7c66.js";import"./toNumber-D_BFdVOo.js";import"./useOsdkClient-DDIDYkJR.js";import"./tick-BgDClArX.js";import"./DropdownField-DnkuZ7W9.js";import"./withOsdkMetrics-coC_lN8X.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
