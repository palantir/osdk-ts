import{f as b,j as a,r as i}from"./iframe-Ckg3JDEd.js";import{O as u}from"./object-table-BrOZH1Zz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-KBO4otl1.js";import"./Table-DFCpZK6b.js";import"./index-yOX0clgO.js";import"./Dialog-BC4Dkf0w.js";import"./cross-C_oC8uQT.js";import"./svgIconContainer-DWrcnmPY.js";import"./useBaseUiId-C1nkxB3O.js";import"./InternalBackdrop-Dd9uCagy.js";import"./composite-C5JLlQSZ.js";import"./index-DBijKEQ7.js";import"./index-Hqp5BANx.js";import"./index-DlAr3QJC.js";import"./useEventCallback-x3dAfiZP.js";import"./SkeletonBar-BsemAOal.js";import"./LoadingCell-BUytE7HV.js";import"./ColumnConfigDialog-Koi3iuou.js";import"./DraggableList-b8IKeig4.js";import"./search-CECB0TiM.js";import"./Input-SzB69mKt.js";import"./useControlled-DWTYB9QG.js";import"./Button-BUGWw6kP.js";import"./small-cross-DOG-LnQ0.js";import"./ActionButton-D8GQpai4.js";import"./Checkbox-D6BIw2ha.js";import"./useValueChanged-DmbpCJPt.js";import"./CollapsiblePanel-UtvTJ4vl.js";import"./MultiColumnSortDialog-D8MkzSuj.js";import"./MenuTrigger-BXUGX02t.js";import"./CompositeItem-DVQ8sS88.js";import"./ToolbarRootContext-FvrCx-X9.js";import"./getDisabledMountTransitionStyles-BoIKTWaE.js";import"./getPseudoElementBounds-B6I-gPB0.js";import"./chevron-down-YWSk7uW9.js";import"./index-BZEXsqr4.js";import"./error-CYwbtwGc.js";import"./BaseCbacBanner-DfChN1RI.js";import"./makeExternalStore-DsBbJpT3.js";import"./Tooltip-tAePzXq_.js";import"./PopoverPopup-BAl5YuC0.js";import"./debounce-De4tjBdY.js";import"./useOsdkClient-BXZy7uxb.js";import"./tick-LwXocHnQ.js";import"./DropdownField-sg7lsRX4.js";import"./isEqual-C15s-RPH.js";import"./withOsdkMetrics-DWluRxuk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
