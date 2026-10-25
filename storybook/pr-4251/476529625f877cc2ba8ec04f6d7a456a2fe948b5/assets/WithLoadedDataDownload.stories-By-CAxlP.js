import{f as b,j as a,r as i}from"./iframe-Cr8Hjkao.js";import{O as u}from"./object-table-DmaCWYaa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CeOoJBco.js";import"./Table-CtsjfS5d.js";import"./index-DRoLNVdY.js";import"./Dialog-Csp9oEdD.js";import"./cross-95TP_pkM.js";import"./svgIconContainer-F-4GL1p-.js";import"./useBaseUiId-BJlElnor.js";import"./InternalBackdrop-DTn82lWC.js";import"./composite-EK_Kp5ER.js";import"./index-ALPgotdH.js";import"./index-ByH-ncsi.js";import"./index-CBMMCh_Y.js";import"./useEventCallback-Cl1bqirj.js";import"./SkeletonBar-DcJRoyj-.js";import"./LoadingCell-CepCHFHB.js";import"./ColumnConfigDialog-xKdx9uqa.js";import"./DraggableList-Cr7CdgZe.js";import"./search-COCkrCII.js";import"./Input-DELuQIly.js";import"./useControlled-qAgRHhDO.js";import"./Button-C24gAlnE.js";import"./small-cross-b_1C3CxG.js";import"./ActionButton-CfImC9cJ.js";import"./Checkbox-Drwo2FPH.js";import"./useValueChanged-DMJhOgzX.js";import"./CollapsiblePanel-DYpC0oKE.js";import"./MultiColumnSortDialog-CBH9qJ7p.js";import"./MenuTrigger-G68osvp2.js";import"./CompositeItem-RD-StT-2.js";import"./ToolbarRootContext-C1DQaCtc.js";import"./getDisabledMountTransitionStyles-DzB4-odI.js";import"./getPseudoElementBounds-DwuMXUq1.js";import"./chevron-down-DyxXbZDq.js";import"./index-DMNMq9tJ.js";import"./error-DaMdq9UW.js";import"./BaseCbacBanner-BW46e1WM.js";import"./makeExternalStore-CCNrGOqq.js";import"./Tooltip-CEYl8ywn.js";import"./PopoverPopup-jx0tch27.js";import"./debounce-Dfpcq8HD.js";import"./useOsdkClient-BUR86U5t.js";import"./tick-CateFlg_.js";import"./DropdownField-Dw4F6h_u.js";import"./isEqual-D2Nu86By.js";import"./withOsdkMetrics-ChwR2mE5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
