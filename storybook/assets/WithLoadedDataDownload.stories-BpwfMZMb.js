import{f as b,j as a,r as i}from"./iframe-CWCaAWug.js";import{O as u}from"./object-table-DNhheKF7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D7PEFPsb.js";import"./index-BCUxEitH.js";import"./Dialog-D0tQayuO.js";import"./cross-DIjpr0JB.js";import"./svgIconContainer-B05glsOt.js";import"./useBaseUiId-BW_UtI62.js";import"./InternalBackdrop-T6iq9MEL.js";import"./composite-BR9g6bcx.js";import"./index-BWfbtsx7.js";import"./index-j1R37CPf.js";import"./index-BU_p4HZd.js";import"./useEventCallback-BlDNNPjw.js";import"./SkeletonBar-AwAWP3QT.js";import"./LoadingCell-DGngu3K1.js";import"./ColumnConfigDialog-qTe30KBW.js";import"./DraggableList-DUGUB3sg.js";import"./search-CqQdgI04.js";import"./Input-BfCxIW-2.js";import"./useControlled-BTf1PsUt.js";import"./Button-DiqPmqG4.js";import"./small-cross-BB4Y9Jap.js";import"./ActionButton-DMHzSnUh.js";import"./Checkbox-3wkD7hFA.js";import"./useValueChanged-BEwxMfrB.js";import"./CollapsiblePanel-CahaDsZJ.js";import"./MultiColumnSortDialog-CSXBKDEz.js";import"./MenuTrigger-DBWzCSvu.js";import"./CompositeItem-DoJwIv2T.js";import"./ToolbarRootContext-BlDQXh6V.js";import"./getDisabledMountTransitionStyles-2GoPE3mv.js";import"./getPseudoElementBounds-DBJhYukF.js";import"./chevron-down-TdN2wngs.js";import"./index-BctpQ9zM.js";import"./error-B3tx7_Th.js";import"./BaseCbacBanner-7JilAzUJ.js";import"./makeExternalStore-DuyB91Wg.js";import"./Tooltip-CYwiJioN.js";import"./PopoverPopup-BMHfvJBq.js";import"./debounce-Cn_0io8o.js";import"./useOsdkClient-BEPV8xbi.js";import"./tick-C2bp2J2X.js";import"./DropdownField-BfsjfsE0.js";import"./isEqual-CuLZYDbS.js";import"./withOsdkMetrics-IvetZHLX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
