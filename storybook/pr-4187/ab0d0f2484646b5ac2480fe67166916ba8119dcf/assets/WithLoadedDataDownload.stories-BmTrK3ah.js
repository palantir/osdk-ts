import{f as b,j as a,r as i}from"./iframe-B4KZUNWb.js";import{O as u}from"./object-table-Ci1c3UDh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ui8H5KaA.js";import"./Table-BCRy3iCw.js";import"./index-DESZZjJb.js";import"./Dialog-Do7D9TXp.js";import"./cross-D6lNZtEd.js";import"./svgIconContainer-CPLrBI81.js";import"./useBaseUiId-DqBZmwDf.js";import"./InternalBackdrop-Du74jqkg.js";import"./composite-kqMgXMmz.js";import"./index-CRzCVguq.js";import"./index-BuRp3NOn.js";import"./index-U4wKfCVv.js";import"./useEventCallback-B7s_WPhy.js";import"./SkeletonBar-CGSSVG4t.js";import"./LoadingCell-BGpZ6WD3.js";import"./ColumnConfigDialog-g8vO-KBG.js";import"./DraggableList-CbycsscA.js";import"./search-B4kRZAFp.js";import"./Input-d873acvu.js";import"./useControlled-DUnmiOhJ.js";import"./Button-B0sQZAH6.js";import"./small-cross-3FFS-2BP.js";import"./ActionButton-jQd9zIQY.js";import"./Checkbox-fRoN73K4.js";import"./useValueChanged-w3RyUsx0.js";import"./CollapsiblePanel-B6Kb1g9F.js";import"./MultiColumnSortDialog-BZ_x3Bcp.js";import"./MenuTrigger-BN7uWxTJ.js";import"./CompositeItem-BeLkJ8RK.js";import"./ToolbarRootContext-DvKJDRkf.js";import"./getDisabledMountTransitionStyles-q8cXRota.js";import"./getPseudoElementBounds-D5Mn0K7G.js";import"./chevron-down-BqCbkmmJ.js";import"./index-B8MTfnNm.js";import"./error-D-IekXva.js";import"./BaseCbacBanner-BL-xmbdR.js";import"./makeExternalStore-FuGpKWwp.js";import"./Tooltip-Dlw9XQHv.js";import"./PopoverPopup-Cqe_G0pW.js";import"./debounce-DtJpUOtB.js";import"./useOsdkClient-DKvjyiDA.js";import"./tick-Y60tUWqi.js";import"./DropdownField-DqTCpZZ-.js";import"./isEqual-B3i1pzS0.js";import"./withOsdkMetrics-DZhR0TNz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
