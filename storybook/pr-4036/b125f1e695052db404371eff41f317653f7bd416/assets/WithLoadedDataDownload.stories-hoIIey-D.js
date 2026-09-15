import{f as b,j as a,r as i}from"./iframe-BHoRCdfJ.js";import{O as u}from"./object-table-BT4epL3E.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-PcfL1ZgJ.js";import"./Table-BogWTrQo.js";import"./index-CRbMuko2.js";import"./Dialog-CtEDH1Qe.js";import"./cross-o6c578IU.js";import"./svgIconContainer-Ddyj85do.js";import"./useBaseUiId-B3Ti1xga.js";import"./InternalBackdrop-C3Nd8T8u.js";import"./composite-DA-yFNZT.js";import"./index-KzV2K_a8.js";import"./index-BqxqbHVw.js";import"./index-1ksykTop.js";import"./useEventCallback-DvYBJvtj.js";import"./SkeletonBar-2AkWt2iD.js";import"./LoadingCell-BAYgpWEj.js";import"./ColumnConfigDialog-tSFHX2X-.js";import"./DraggableList-dOoeduXW.js";import"./search-CzBp321S.js";import"./Input-RRy85S6o.js";import"./useControlled-CXIbMiD_.js";import"./Button-GIqq_QaR.js";import"./small-cross-CbXKVrFp.js";import"./ActionButton-DaKwbCzu.js";import"./Checkbox-zBVDZpOJ.js";import"./useValueChanged-DU5TUzSb.js";import"./CollapsiblePanel-DeE2lA1F.js";import"./MultiColumnSortDialog-DxH9yAog.js";import"./MenuTrigger-Df17ZxAj.js";import"./CompositeItem-C8lI6v5m.js";import"./ToolbarRootContext-VQGHIcMO.js";import"./getDisabledMountTransitionStyles-BazN2qJZ.js";import"./getPseudoElementBounds-BKvO9qL5.js";import"./chevron-down-DCJDhdZ9.js";import"./index-CQXq0Q8i.js";import"./error-D1WxR2nX.js";import"./BaseCbacBanner-CmoBi3TT.js";import"./makeExternalStore-_J7Y5wzS.js";import"./Tooltip-4dHsdJ7I.js";import"./PopoverPopup-Cu_vPmGM.js";import"./debounce-Bv9XGbP2.js";import"./useOsdkClient-CKwE1qLu.js";import"./tick-C9oldqOI.js";import"./DropdownField-C17krznx.js";import"./isEqual-ld1BIUQT.js";import"./withOsdkMetrics-DiUqqX9-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
