import{f as b,j as a,r as i}from"./iframe-Dp1CRu6c.js";import{O as u}from"./object-table-BQbRUBVy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CWkOsMkG.js";import"./Table-kXiAzrVw.js";import"./index-DDVLxBOy.js";import"./Dialog-Ct47gwOa.js";import"./cross-CG-DeC47.js";import"./svgIconContainer-BC_0vX_e.js";import"./useBaseUiId-CWccYlZs.js";import"./InternalBackdrop-BKqn0-3A.js";import"./composite-BycuXxpQ.js";import"./index-vVu9ASLZ.js";import"./index-DQ0ad4Rd.js";import"./index-uDlakMiO.js";import"./useRole-D754jaaZ.js";import"./useEventCallback-mhA_0l5h.js";import"./SkeletonBar-CWLc9YwP.js";import"./LoadingCell-Cw9DXaSk.js";import"./ColumnConfigDialog-uO8-npG2.js";import"./DraggableList-yXZoFYuZ.js";import"./Input-DTQu9GLN.js";import"./useControlled-CKURD5_M.js";import"./Button-Izn2a-Gf.js";import"./small-cross-Capthggd.js";import"./ActionButton-D4OZ4fs0.js";import"./Checkbox-Cod3lSpW.js";import"./minus-DAstrPpS.js";import"./useValueChanged-b9NOXpdt.js";import"./FieldItemContext-ZxrciBuj.js";import"./caret-down-DRUruF7z.js";import"./CollapsiblePanel-B9J4Se8X.js";import"./MultiColumnSortDialog-DQXMez7K.js";import"./MenuTrigger-C2n9VC45.js";import"./useCompositeListItem-CF6DL62K.js";import"./ToolbarRootContext-BrIGoR_-.js";import"./getDisabledMountTransitionStyles-BGWbjSuz.js";import"./safePolygon-OCeT35xw.js";import"./getPseudoElementBounds-CfE7TmeC.js";import"./CompositeItem-NxCGTSTJ.js";import"./chevron-down-B9cqEQ-9.js";import"./index-CP_-7Y5q.js";import"./error-CWPx4DGJ.js";import"./BaseCbacBanner-C6buC9fu.js";import"./makeExternalStore-CJ4XjwYU.js";import"./Tooltip-BCkIs-vs.js";import"./PopoverPopup-DyQd4niR.js";import"./toNumber-OIxVTfR-.js";import"./useOsdkClient-CUe5WpHW.js";import"./Combobox--GdejMfV.js";import"./DropdownField-BarpcyK5.js";import"./useOsdkObjects-DK1g3PEn.js";import"./withOsdkMetrics-XOhFJDlT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ge={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const je=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,je as __namedExportsOrder,ge as default};
