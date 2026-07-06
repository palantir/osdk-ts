import{f as b,j as a,r as i}from"./iframe-VuQ6RwPt.js";import{O as u}from"./object-table-B7TmgClB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CKk4SWoC.js";import"./Table-BsxDJXcr.js";import"./index-DoQA3n1t.js";import"./Dialog-Cake-xZC.js";import"./cross-Ca9m439o.js";import"./svgIconContainer-D23zCiti.js";import"./useBaseUiId-CUrW8lhI.js";import"./InternalBackdrop-6wWkHXVE.js";import"./composite-BV-FC-Kn.js";import"./index-CCcuDDdO.js";import"./index-tfKKNQzN.js";import"./index-vThhIkN8.js";import"./useEventCallback-DaQgfhqI.js";import"./SkeletonBar-B1tadL4Z.js";import"./LoadingCell-Cwk9RSzS.js";import"./ColumnConfigDialog-oX9dXief.js";import"./DraggableList-DXcR1b4e.js";import"./search-Def4Uy4S.js";import"./Input-K3IP_uN7.js";import"./useControlled-B6bXDO-c.js";import"./Button-Cn_l3szX.js";import"./small-cross-BmRlFHTK.js";import"./ActionButton-voGckEf1.js";import"./Checkbox-SnkTh5PD.js";import"./useValueChanged-BZr4nkoh.js";import"./CollapsiblePanel-Dl_o-evA.js";import"./MultiColumnSortDialog-Baf2MKXf.js";import"./MenuTrigger-BEsBcgTV.js";import"./CompositeItem-4quomPQq.js";import"./ToolbarRootContext-D4igm7OB.js";import"./getDisabledMountTransitionStyles-BytydUdC.js";import"./getPseudoElementBounds-BfVYW7Le.js";import"./chevron-down-AuVDMi2f.js";import"./index-CCszNCm4.js";import"./error-Ci9Amk-Q.js";import"./BaseCbacBanner-2WROBYxY.js";import"./makeExternalStore-DaowcOFP.js";import"./Tooltip-BlZPmnXD.js";import"./PopoverPopup-DbetgQSB.js";import"./toNumber-HWWYcu4p.js";import"./useOsdkClient-1YqungXz.js";import"./tick-C5RDw_Um.js";import"./DropdownField-CH3X9mB0.js";import"./withOsdkMetrics-DMhqF5dw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
