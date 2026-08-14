import{f as b,j as a,r as i}from"./iframe-ZQnTw6Mu.js";import{O as u}from"./object-table-VjCEQ2g5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-COwmt9io.js";import"./Table-DO7e5-3Q.js";import"./index-Bak_kxpO.js";import"./Dialog-C8YwB1to.js";import"./cross-dvjzW6Ys.js";import"./svgIconContainer-zMynHcXT.js";import"./useBaseUiId-Av3ESRn4.js";import"./InternalBackdrop-Qsz8azrK.js";import"./composite-CNYNMU2K.js";import"./index-Ik5TkMWF.js";import"./index-Bf52DBTe.js";import"./index-DfpvWPDi.js";import"./useEventCallback-CeUbtgbw.js";import"./SkeletonBar-Dgm9uPl0.js";import"./LoadingCell-CIjhjeS2.js";import"./ColumnConfigDialog-BWT2uBSi.js";import"./DraggableList-Ctrx9KC6.js";import"./search-BcJ2_wX2.js";import"./Input-BQqVIR5S.js";import"./useControlled-BApUdZQ6.js";import"./Button-kYFmJJeP.js";import"./small-cross-BLKDIIIs.js";import"./ActionButton-DY2D-_nH.js";import"./Checkbox-B7Q3lTD0.js";import"./useValueChanged-C4pb924U.js";import"./CollapsiblePanel-CxVYe-zl.js";import"./MultiColumnSortDialog-DYTtJA9W.js";import"./MenuTrigger-BovXshwK.js";import"./CompositeItem-agXPXgTu.js";import"./ToolbarRootContext-DbSl-Ybu.js";import"./getDisabledMountTransitionStyles-BtRqleFK.js";import"./getPseudoElementBounds-B3-Fohbc.js";import"./chevron-down-BYkOWi_f.js";import"./index-BKq3a1zJ.js";import"./error-BXfejV6f.js";import"./BaseCbacBanner-BUe4BhHO.js";import"./makeExternalStore-BK88dgnr.js";import"./Tooltip-CU9szSp1.js";import"./PopoverPopup-CEcziLeh.js";import"./debounce-B20oACA_.js";import"./useOsdkClient-FhDWA4Y3.js";import"./tick-CK4a_7vG.js";import"./DropdownField-CyRtpzR4.js";import"./isEqual-BMOE5IT2.js";import"./withOsdkMetrics-CrtXH3Cf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
