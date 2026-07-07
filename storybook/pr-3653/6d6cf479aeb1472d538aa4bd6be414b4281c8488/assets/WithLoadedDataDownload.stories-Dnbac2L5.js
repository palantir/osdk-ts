import{f as b,j as a,r as i}from"./iframe-C5aCmoNO.js";import{O as u}from"./object-table-B91wKaJL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-WhdHBd3t.js";import"./Table-qDUZdVuM.js";import"./index-cSFONtJU.js";import"./Dialog-BRC-c0Mc.js";import"./cross-Dziqcvjd.js";import"./svgIconContainer-MBJNi3sf.js";import"./useBaseUiId-CZFdvPLq.js";import"./InternalBackdrop-DX1qrneR.js";import"./composite-ycAiGuBV.js";import"./index-BYMUbS1D.js";import"./index-VK30H4xM.js";import"./index-CPFayGUB.js";import"./useEventCallback-Dregsry3.js";import"./SkeletonBar-B1vukO3p.js";import"./LoadingCell-DuMTg06s.js";import"./ColumnConfigDialog-rePW7Acf.js";import"./DraggableList-BOCtmgmS.js";import"./search-CXEAIpAp.js";import"./Input-UxbHtRcv.js";import"./useControlled-DV86-8Mx.js";import"./Button-Dg_73S_B.js";import"./small-cross-1JzqkYDv.js";import"./ActionButton-Bj7hlHIO.js";import"./Checkbox-C-cVJGKP.js";import"./useValueChanged-BfgCE0cn.js";import"./CollapsiblePanel-C4KGf4fh.js";import"./MultiColumnSortDialog-AiB0qJpC.js";import"./MenuTrigger-Ci4kSBUp.js";import"./CompositeItem-j_9AjjOt.js";import"./ToolbarRootContext-dz5ogJMW.js";import"./getDisabledMountTransitionStyles-Bktr30DT.js";import"./getPseudoElementBounds-DChvPGzh.js";import"./chevron-down-zYcwkkW1.js";import"./index-BsgkMab_.js";import"./error-BgTzr7up.js";import"./BaseCbacBanner-CFelTCGa.js";import"./makeExternalStore-hJeL3jdd.js";import"./Tooltip-CFX-u485.js";import"./PopoverPopup-CyZJ1rzM.js";import"./toNumber-6wO6IzAa.js";import"./useOsdkClient-CW_AHi79.js";import"./tick-CE0kqBWJ.js";import"./DropdownField-B43j7_ix.js";import"./withOsdkMetrics-NIUjjKKK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
