import{f as b,j as a,r as i}from"./iframe-f66FgX7Y.js";import{O as u}from"./object-table-GT7kMphb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-raEF4RES.js";import"./Table-C9mhipdi.js";import"./index-DPqglQtc.js";import"./Dialog-BpUid-uw.js";import"./cross-BghbwRkQ.js";import"./svgIconContainer-vQy4jNvU.js";import"./useBaseUiId-D571T0a4.js";import"./InternalBackdrop-xG7fM3E5.js";import"./composite-CJwo4Axb.js";import"./index-njRI7QSI.js";import"./index-CcMjMhdC.js";import"./index-CogHfYbz.js";import"./useEventCallback-YLx7CvSi.js";import"./SkeletonBar-Dxq43_UH.js";import"./LoadingCell-cmSMmmBz.js";import"./ColumnConfigDialog-DGbM8ZqV.js";import"./DraggableList-DIpd3lyk.js";import"./search-B8vnpBH9.js";import"./Input-CAFxf21S.js";import"./useControlled-Bu7YFQSN.js";import"./Button-TDsMSWT0.js";import"./small-cross-BgZgA7uo.js";import"./ActionButton-CnKvj-QN.js";import"./Checkbox-DWK-Zpdt.js";import"./minus-WViEeZnY.js";import"./tick-_Epqbz36.js";import"./useValueChanged-NLJFzexo.js";import"./caret-down-CLEvivYC.js";import"./CollapsiblePanel-DK4MOous.js";import"./MultiColumnSortDialog-BZ1LOXTj.js";import"./MenuTrigger-DuneGM08.js";import"./CompositeItem-QGELHeCS.js";import"./ToolbarRootContext-COAEHk7J.js";import"./getDisabledMountTransitionStyles-DGKnXBN6.js";import"./getPseudoElementBounds-lQcxfzhD.js";import"./chevron-down-DWGAvGlj.js";import"./index-CJK0sv1Y.js";import"./error-CE2K4tlB.js";import"./BaseCbacBanner-BB5mSOAj.js";import"./makeExternalStore-DFbC5eUt.js";import"./Tooltip-C6JnTlmN.js";import"./PopoverPopup-DR5R15sb.js";import"./toNumber-Cbrls7K4.js";import"./useOsdkClient-CmaZUPXx.js";import"./DropdownField-CFxCfSG2.js";import"./withOsdkMetrics-CQB9K5cI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};
