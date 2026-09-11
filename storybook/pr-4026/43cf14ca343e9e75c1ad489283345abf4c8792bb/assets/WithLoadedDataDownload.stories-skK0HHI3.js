import{f as b,j as a,r as i}from"./iframe-BOlAF3V1.js";import{O as u}from"./object-table-OpNOO8Zz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B8-M1e1R.js";import"./Table-Cq0xrIAG.js";import"./index-DHGHpbde.js";import"./Dialog-_6UFmCIU.js";import"./cross-4uTXI33L.js";import"./svgIconContainer-BI7oIE-s.js";import"./useBaseUiId-DKEtUdQs.js";import"./InternalBackdrop-jjkmgKoA.js";import"./composite-uQCx7Ami.js";import"./index-D0SLMQsQ.js";import"./index-Ckc7ROJV.js";import"./index-VFcxoHMB.js";import"./useEventCallback-CMYz6_v4.js";import"./SkeletonBar-5GsvCwd_.js";import"./LoadingCell-D8PuOjAg.js";import"./ColumnConfigDialog-DzS6ikRu.js";import"./DraggableList-BxtxFZr4.js";import"./search-dtRuG4ZW.js";import"./Input-DPiHLqc9.js";import"./useControlled-XB4dOcfe.js";import"./Button-C_Kq6X6A.js";import"./small-cross-DwQ2wey-.js";import"./ActionButton-D_sarqsj.js";import"./Checkbox-BEdNjDpm.js";import"./useValueChanged-DlyBj6rd.js";import"./CollapsiblePanel-CvEpNxRR.js";import"./MultiColumnSortDialog-BNhhRyLH.js";import"./MenuTrigger-C7Yb8CE4.js";import"./CompositeItem-DUqi3n0Z.js";import"./ToolbarRootContext-CrA83z4-.js";import"./getDisabledMountTransitionStyles-BU9dKP1z.js";import"./getPseudoElementBounds-Bzk92_UN.js";import"./chevron-down-1Vj4zZ-s.js";import"./index-8QnQJeqI.js";import"./error-mE4pvPha.js";import"./BaseCbacBanner-D8MjQjhc.js";import"./makeExternalStore-WrNjm8L9.js";import"./Tooltip-ncr-ughp.js";import"./PopoverPopup-ISkaWBxN.js";import"./debounce-CFrhvngH.js";import"./useOsdkClient-BgqOjygd.js";import"./tick-BB9vOuei.js";import"./DropdownField-DLvbQCQI.js";import"./isEqual-CzFD6Eij.js";import"./withOsdkMetrics-BCE-Yi3C.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
