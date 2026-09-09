import{f as b,j as a,r as i}from"./iframe-DeDsL1Xz.js";import{O as u}from"./object-table-CXBuoulD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BVBQesVt.js";import"./Table-C2qcYqvw.js";import"./index-BU8-F79N.js";import"./Dialog-D99dL4kL.js";import"./cross-jIk7qGHQ.js";import"./svgIconContainer-Aqj8Zd5l.js";import"./useBaseUiId-CQ4hkA7O.js";import"./InternalBackdrop-4afONjlA.js";import"./composite-BCcUbicN.js";import"./index-DoWEUVS1.js";import"./index-Cy0o1bod.js";import"./index-Dtahr6U8.js";import"./useEventCallback-CmDQnEvR.js";import"./SkeletonBar-1tazywhq.js";import"./LoadingCell-CmM8i9RW.js";import"./ColumnConfigDialog-DNpnrmLZ.js";import"./DraggableList-pPr8ghmD.js";import"./search-DyYzy_rN.js";import"./Input-W5uf4VNK.js";import"./useControlled-BbxyP0yd.js";import"./Button-B4hehT03.js";import"./small-cross-DQ2KEs4l.js";import"./ActionButton-DiAydvYe.js";import"./Checkbox-B58D9TWu.js";import"./useValueChanged-DBT53UD4.js";import"./CollapsiblePanel-Dk_vAxzI.js";import"./MultiColumnSortDialog-CkWr0sXr.js";import"./MenuTrigger-Dm7LqmlE.js";import"./CompositeItem-DHAlezUZ.js";import"./ToolbarRootContext-DhOdNxhK.js";import"./getDisabledMountTransitionStyles-BBa3Ka3T.js";import"./getPseudoElementBounds-DpElGvOE.js";import"./chevron-down-DuWqNP_i.js";import"./index-DG83v6db.js";import"./error-IDubZlnB.js";import"./BaseCbacBanner-DoaOzdxo.js";import"./makeExternalStore-v6gib538.js";import"./Tooltip-Ab0jMRiD.js";import"./PopoverPopup-D1st1umy.js";import"./debounce-BXSbFmiL.js";import"./useOsdkClient-CW853sZV.js";import"./tick-BDUK9RwE.js";import"./DropdownField-DNH1-jJL.js";import"./isEqual-CuyGmH72.js";import"./withOsdkMetrics-CfFdQ5R1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
