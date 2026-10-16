import{f as b,j as a,r as i}from"./iframe-CE0i8pTB.js";import{O as u}from"./object-table-BqB2N9IL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C1VfsXyS.js";import"./index-B12pLj4f.js";import"./Dialog-B5WFHcUY.js";import"./cross-B7SwfS_M.js";import"./svgIconContainer-B8VYHmcD.js";import"./useBaseUiId-DyVtWBOW.js";import"./InternalBackdrop-BV_Rke0C.js";import"./composite-C3AQHTlr.js";import"./index-D0yQsmtH.js";import"./index-BxLsqAz-.js";import"./index-CWtwdWGx.js";import"./useEventCallback-OX93Cv40.js";import"./SkeletonBar-CseY9H7t.js";import"./LoadingCell-BhkoJpZq.js";import"./ColumnConfigDialog-EXxClbRv.js";import"./DraggableList-DoIC54Mt.js";import"./search-B_4eoJVo.js";import"./Input-Bhr3RBZS.js";import"./useControlled-CDXR85QA.js";import"./Button-CEwAliaC.js";import"./small-cross-Cqq_EZqy.js";import"./ActionButton-B8HjZLzN.js";import"./Checkbox-BQpLae3k.js";import"./useValueChanged-BNETI0SY.js";import"./CollapsiblePanel-BXnErSCf.js";import"./MultiColumnSortDialog-B8dHVGrh.js";import"./MenuTrigger-BtCRNzYm.js";import"./CompositeItem-Ei3HHm0y.js";import"./ToolbarRootContext-DUj8Vy75.js";import"./getDisabledMountTransitionStyles-C6UHxgiN.js";import"./getPseudoElementBounds-BNWxnzVQ.js";import"./chevron-down-D2N1M9YY.js";import"./index-DaY6cbYZ.js";import"./error-WOehnpts.js";import"./BaseCbacBanner-CP4iN72h.js";import"./makeExternalStore-CD97K3xm.js";import"./Tooltip-C8uGck5Z.js";import"./PopoverPopup-DjwUMmwA.js";import"./debounce-6QIE8t0g.js";import"./useOsdkClient-DcXY1zGj.js";import"./tick-_bZ7VOxl.js";import"./DropdownField-Drtn2NQI.js";import"./isEqual-BGT09CQh.js";import"./withOsdkMetrics-DRff-iWr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
