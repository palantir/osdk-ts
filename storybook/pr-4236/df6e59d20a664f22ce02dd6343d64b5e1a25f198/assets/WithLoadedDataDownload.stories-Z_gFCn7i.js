import{f as b,j as a,r as i}from"./iframe-DrF4uDXw.js";import{O as u}from"./object-table-CM95MaM2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-u_zBXynr.js";import"./Table-kd6lbu9d.js";import"./index-CVI5kV9I.js";import"./Dialog-BrX1t0fv.js";import"./cross-CpHoxb52.js";import"./svgIconContainer-DTs7PmKd.js";import"./useBaseUiId-C9RyiOK8.js";import"./InternalBackdrop-DofvZUsK.js";import"./composite-Bq13iBNY.js";import"./index-BDX0ToeT.js";import"./index-CGWCVoH4.js";import"./index-BnGuicAT.js";import"./useEventCallback-BTghxZoS.js";import"./SkeletonBar-0N9X2Eze.js";import"./LoadingCell-BVuDg30F.js";import"./ColumnConfigDialog--izrLFr-.js";import"./DraggableList-CSNOh3nO.js";import"./search-CELVamy6.js";import"./Input-CdEHyPrX.js";import"./useControlled-CZU-WiQ8.js";import"./Button-YLbQ9ZAy.js";import"./small-cross-CJbFFKn2.js";import"./ActionButton-BLh9uJNd.js";import"./Checkbox-BhjXID7e.js";import"./useValueChanged-zSpMIuHM.js";import"./CollapsiblePanel-C9eazrfz.js";import"./MultiColumnSortDialog-DfEBvsXN.js";import"./MenuTrigger-CAXmNMT1.js";import"./CompositeItem-D46vdXYg.js";import"./ToolbarRootContext-C8VOBVuh.js";import"./getDisabledMountTransitionStyles-BEvFk-mr.js";import"./getPseudoElementBounds-D-ciol2Y.js";import"./chevron-down-DrKAguLe.js";import"./index-DyhoC8yA.js";import"./error-LoVtbcsO.js";import"./BaseCbacBanner-23rij7S2.js";import"./makeExternalStore-DYuKTott.js";import"./Tooltip-cvIFboQ2.js";import"./PopoverPopup-g1OrYGZg.js";import"./debounce-CWgpGISZ.js";import"./useOsdkClient-DIPpS90p.js";import"./tick-DD1ZkEBA.js";import"./DropdownField-D6v5zaPU.js";import"./isEqual-DckClti8.js";import"./withOsdkMetrics-CRS-8bKl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
