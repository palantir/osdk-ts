import{f as b,j as a,r as i}from"./iframe-BECIlG-5.js";import{O as u}from"./object-table-Cn80KhAU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cv0NrjSm.js";import"./Table-DCEgNBAH.js";import"./index-0SVtXK84.js";import"./Dialog-tJiLD3AL.js";import"./cross-ubVpY3r4.js";import"./svgIconContainer-B-mztRGa.js";import"./useBaseUiId-BynaZof5.js";import"./InternalBackdrop-BZhDjVB7.js";import"./composite-Bb9FNHOi.js";import"./index-CXVpCKKQ.js";import"./index-sIW5LEP1.js";import"./index-smJV3T31.js";import"./useEventCallback-BfSwElrQ.js";import"./SkeletonBar-iQAgIX6_.js";import"./LoadingCell-N0o8dApa.js";import"./ColumnConfigDialog-Y-qZNvwI.js";import"./DraggableList-Cpu3iQ2P.js";import"./search-CxKdELes.js";import"./Input-Bv6R3iZB.js";import"./useControlled-DwAysQOe.js";import"./Button-cPt_jdAf.js";import"./small-cross-DOrp5uSW.js";import"./ActionButton-BElBMuAb.js";import"./Checkbox-C54U06wB.js";import"./useValueChanged-DzzM5aJt.js";import"./CollapsiblePanel-eLA5oT-Y.js";import"./MultiColumnSortDialog-DPkNj1JI.js";import"./MenuTrigger-Cie77Q8I.js";import"./CompositeItem-Dl8QDSWw.js";import"./ToolbarRootContext-4ge2fwUs.js";import"./getDisabledMountTransitionStyles-BHt47q_U.js";import"./getPseudoElementBounds-CXr87JiK.js";import"./chevron-down-B_ghTOEG.js";import"./index-BtesBorZ.js";import"./error-W3FJWM_l.js";import"./BaseCbacBanner-LAOQ_TmD.js";import"./makeExternalStore-c840Nimt.js";import"./Tooltip-RYGXYlOF.js";import"./PopoverPopup-C9IPhO-b.js";import"./debounce-CE7uEcJP.js";import"./useOsdkClient-D-IWW227.js";import"./tick-lltI7QIF.js";import"./DropdownField-BFCCzcrd.js";import"./isEqual-Dzk0LpTo.js";import"./withOsdkMetrics-DjCRSE02.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
