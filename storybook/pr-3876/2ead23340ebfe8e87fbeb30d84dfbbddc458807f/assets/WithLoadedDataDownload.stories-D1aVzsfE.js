import{f as b,j as a,r as i}from"./iframe-d99A6dy_.js";import{O as u}from"./object-table-C7TY-3bM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BXXDbSLQ.js";import"./Table-CeT-_8Ox.js";import"./index-BvI0aYJU.js";import"./Dialog-C6_bQNum.js";import"./cross-dpi7xDM4.js";import"./svgIconContainer-CQFp9MIY.js";import"./useBaseUiId-DayFylep.js";import"./InternalBackdrop-CxjRJGo6.js";import"./composite-C_nWduZ1.js";import"./index-BipUzWZ7.js";import"./index-DpKUv_nP.js";import"./index-BFHEfbX0.js";import"./useEventCallback-BZIld91o.js";import"./SkeletonBar-DvniVmoI.js";import"./LoadingCell-BYLKl2re.js";import"./ColumnConfigDialog-DmLzPquA.js";import"./DraggableList-CvSkJVI6.js";import"./search-xcjteEAF.js";import"./Input-CwRTaEny.js";import"./useControlled-Res_vZF_.js";import"./Button-Bf5OJd4p.js";import"./small-cross-tWK-qLVG.js";import"./ActionButton-Dve-I_eb.js";import"./Checkbox-CIfmLG1g.js";import"./useValueChanged-EljjLCKw.js";import"./CollapsiblePanel-CahgaKO0.js";import"./MultiColumnSortDialog-CiLqOVe8.js";import"./MenuTrigger-DlcywJGy.js";import"./CompositeItem-CY0DaOXF.js";import"./ToolbarRootContext-BBcTGc1X.js";import"./getDisabledMountTransitionStyles-HxJED5q5.js";import"./getPseudoElementBounds-DVouIeC5.js";import"./chevron-down-CUgj8iAn.js";import"./index-B0OryjOF.js";import"./error-CXkBkCdL.js";import"./BaseCbacBanner-CgJ8nVGX.js";import"./makeExternalStore-CUVJJI81.js";import"./Tooltip-C86asDC4.js";import"./PopoverPopup-FEDh9MTo.js";import"./debounce-BT80FcB7.js";import"./useOsdkClient-BnBrjcrv.js";import"./tick-Cyn0w1xj.js";import"./DropdownField-D4Vkiu6d.js";import"./isEqual-DtfrX9Au.js";import"./withOsdkMetrics-k5Ap-NK7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
