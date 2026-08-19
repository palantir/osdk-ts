import{f as b,j as a,r as i}from"./iframe-Bm9OwjZM.js";import{O as u}from"./object-table-BdOtMKtj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bxv9zFay.js";import"./Table-C5d9fcW1.js";import"./index-CObn2eDC.js";import"./Dialog-YqtByMUq.js";import"./cross-Bo0UY3wT.js";import"./svgIconContainer-CGp9KnXA.js";import"./useBaseUiId-D5G-UFce.js";import"./InternalBackdrop-CSTuoliM.js";import"./composite-CV2pmKck.js";import"./index-CYRBkEMI.js";import"./index-CZ4br5bx.js";import"./index-D3K1YH6u.js";import"./useEventCallback-C1sCbiB1.js";import"./SkeletonBar-C4tbzHrf.js";import"./LoadingCell-Bob79hrl.js";import"./ColumnConfigDialog-BEpELY0Q.js";import"./DraggableList-aiQUDllv.js";import"./search-CMsxyB6o.js";import"./Input-BBarF8jI.js";import"./useControlled-DagSlxnt.js";import"./Button-DH8D07bO.js";import"./small-cross-CpEGyO2C.js";import"./ActionButton-b5H9Wsoo.js";import"./Checkbox-C42BhasO.js";import"./useValueChanged-BziSxweC.js";import"./CollapsiblePanel-CSPGJmMi.js";import"./MultiColumnSortDialog-DcTDhB5S.js";import"./MenuTrigger-N4nRkaQI.js";import"./CompositeItem-Dks46NaI.js";import"./ToolbarRootContext-BzeWV0Ij.js";import"./getDisabledMountTransitionStyles-DW6BIlyq.js";import"./getPseudoElementBounds-Dw9iwve0.js";import"./chevron-down-Ykcn_Zyn.js";import"./index-DzghPfIw.js";import"./error-CCuJWU5M.js";import"./BaseCbacBanner-CCrrjuO8.js";import"./makeExternalStore-B2bSqcMJ.js";import"./Tooltip-Ca0v0yFB.js";import"./PopoverPopup-LXlLsWEU.js";import"./debounce-Cg2J-NCz.js";import"./useOsdkClient-CN1s-vKt.js";import"./tick-C0wxgn1E.js";import"./DropdownField-tU79IoE9.js";import"./isEqual-lfYKGgFL.js";import"./withOsdkMetrics-OOsnIMnD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
