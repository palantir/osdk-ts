import{f as b,j as a,r as i}from"./iframe-czm1xubf.js";import{O as u}from"./object-table-DNMgRG-f.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BGUEigPd.js";import"./Table-B6qewDiI.js";import"./index-_fZ9c0fg.js";import"./Dialog-DHxpHxHZ.js";import"./cross-BQAzUdVL.js";import"./svgIconContainer-E3yOYGsj.js";import"./useBaseUiId-BS68w5je.js";import"./InternalBackdrop-B9KVxE9X.js";import"./composite-B592Vhi6.js";import"./index-DfcivzEs.js";import"./index-yWvVzDbE.js";import"./index-DTt1rg3M.js";import"./useEventCallback-B22Ha2u5.js";import"./SkeletonBar-CdEM0QXh.js";import"./LoadingCell-BVI3jUQO.js";import"./ColumnConfigDialog-Cm2lbAkX.js";import"./DraggableList-DMQ-nVz6.js";import"./search-UypY9bAA.js";import"./Input-DgUpGPn-.js";import"./useControlled-C5Jpqy1f.js";import"./Button-BRqFWopk.js";import"./small-cross-FhsGrgpu.js";import"./ActionButton-BZ-JCoJ_.js";import"./Checkbox-CsxsWFlF.js";import"./useValueChanged-C6JEBq-B.js";import"./CollapsiblePanel-BZqHTtX0.js";import"./MultiColumnSortDialog-BiIQwfLv.js";import"./MenuTrigger-BLnLbRO0.js";import"./CompositeItem-BpDVMI5W.js";import"./ToolbarRootContext-DUZDki5d.js";import"./getDisabledMountTransitionStyles-CpcSQr6S.js";import"./getPseudoElementBounds-pSys7i-_.js";import"./chevron-down-WwCXMtNu.js";import"./index-BSuxyzBF.js";import"./error-DWSVNtwO.js";import"./BaseCbacBanner-CINRFj0R.js";import"./makeExternalStore-BA14Lxn7.js";import"./Tooltip-DhInjGrA.js";import"./PopoverPopup-CShNizHP.js";import"./debounce-DV3wU0MB.js";import"./useOsdkClient-CqNVWEmJ.js";import"./tick-ClPbeRGi.js";import"./DropdownField-D-57vV6-.js";import"./isEqual-W8BNuaGE.js";import"./withOsdkMetrics-C-yijIYr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
