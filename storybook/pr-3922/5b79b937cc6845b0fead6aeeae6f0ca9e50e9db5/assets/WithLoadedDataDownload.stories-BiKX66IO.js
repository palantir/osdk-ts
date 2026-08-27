import{f as b,j as a,r as i}from"./iframe-j16wUfsG.js";import{O as u}from"./object-table-BCkM1bv0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B5KNJanK.js";import"./Table-DUtbUPZe.js";import"./index-PZXuwR22.js";import"./Dialog-Ba90sm6K.js";import"./cross-hlLbslg_.js";import"./svgIconContainer-DyYG3yIN.js";import"./useBaseUiId-BT4BDOeF.js";import"./InternalBackdrop-CDEbkKEG.js";import"./composite-B2eetiSQ.js";import"./index-BBXEyrHX.js";import"./index-BKBAw2oy.js";import"./index-DTWb0ngO.js";import"./useEventCallback-ryqefgdq.js";import"./SkeletonBar-D7pRmDQH.js";import"./LoadingCell-CHsb-nzQ.js";import"./ColumnConfigDialog-ERHE9gvP.js";import"./DraggableList-cVSW0vVW.js";import"./search-BeO1HXe9.js";import"./Input-ChvjdPlR.js";import"./useControlled-DFdkoakd.js";import"./Button-BsHl7luh.js";import"./small-cross-C0ihpIaZ.js";import"./ActionButton-DswyMU6B.js";import"./Checkbox-wSboXymt.js";import"./useValueChanged-CO-asJqE.js";import"./CollapsiblePanel-Cmv4sQtD.js";import"./MultiColumnSortDialog-C8l1RJoW.js";import"./MenuTrigger-BEOUTCDD.js";import"./CompositeItem-BYEj7bp3.js";import"./ToolbarRootContext-DOjYoz5M.js";import"./getDisabledMountTransitionStyles-_4E5aWO0.js";import"./getPseudoElementBounds-qqBqkqSW.js";import"./chevron-down-CPDFF9dW.js";import"./index-Soy9Caj3.js";import"./error-DyJKKGYF.js";import"./BaseCbacBanner-DW3GIQns.js";import"./makeExternalStore-CIGBfPKm.js";import"./Tooltip-CmOBTmaj.js";import"./PopoverPopup-CtZcaNrD.js";import"./debounce-BCylpfiq.js";import"./useOsdkClient-CHpRljBm.js";import"./tick-BvU0208f.js";import"./DropdownField-CtNMPrH-.js";import"./isEqual-D44AHoS1.js";import"./withOsdkMetrics-DopDBPQL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
