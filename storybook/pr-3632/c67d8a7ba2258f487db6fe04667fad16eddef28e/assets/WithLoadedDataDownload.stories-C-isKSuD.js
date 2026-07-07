import{f as b,j as a,r as i}from"./iframe-BL-aTQfU.js";import{O as u}from"./object-table-4IqbE3Kb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BahzRW-X.js";import"./Table-D28Y6N9_.js";import"./index-D4EpUFva.js";import"./Dialog-B-1CxAJ-.js";import"./cross-BHf_rKQH.js";import"./svgIconContainer-BKl1Wdn_.js";import"./useBaseUiId-CJqwJhLG.js";import"./InternalBackdrop-CANpWiTT.js";import"./composite-pMUz-CIe.js";import"./index-CXThrq9Y.js";import"./index-C4s4Nf7W.js";import"./index-CxiMT54f.js";import"./useEventCallback-B79zPgYT.js";import"./SkeletonBar-DRGTJIPz.js";import"./LoadingCell-BaO8Mdzc.js";import"./ColumnConfigDialog-f3hlR6dB.js";import"./DraggableList-Cj66d00D.js";import"./search-CcjCZccz.js";import"./Input-D7P-T4dQ.js";import"./useControlled-CW7M7uym.js";import"./Button-BDE_UIPs.js";import"./small-cross-DHSO_HGS.js";import"./ActionButton-3W4xty1V.js";import"./Checkbox-BG1v9RP-.js";import"./useValueChanged-BlM6kRGL.js";import"./CollapsiblePanel-DUQBDTcI.js";import"./MultiColumnSortDialog-CVDFD3AO.js";import"./MenuTrigger-C0pkO-0L.js";import"./CompositeItem-8Mg0ZdDv.js";import"./ToolbarRootContext-BGWwmius.js";import"./getDisabledMountTransitionStyles-BeJLkvpe.js";import"./getPseudoElementBounds-DBS5-Dmu.js";import"./chevron-down-CuTqKkub.js";import"./index-CWou13Ax.js";import"./error-DTNLJVPi.js";import"./BaseCbacBanner-BVtfHIJ8.js";import"./makeExternalStore-NsBbI9KP.js";import"./Tooltip-BYctmVxk.js";import"./PopoverPopup-Do92RA-Z.js";import"./toNumber-Cz5qwujw.js";import"./useOsdkClient-B7V-DHnl.js";import"./tick-xDYRObnP.js";import"./DropdownField-DutX-pNh.js";import"./withOsdkMetrics-Wvjd9i-y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
