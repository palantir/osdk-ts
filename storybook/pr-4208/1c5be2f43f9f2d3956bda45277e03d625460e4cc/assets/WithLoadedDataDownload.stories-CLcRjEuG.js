import{f as b,j as a,r as i}from"./iframe-eOIbuNqJ.js";import{O as u}from"./object-table-B9N8IcN2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CgIJPkyR.js";import"./Table-DbkNuL-9.js";import"./index-Dk7CsQL8.js";import"./Dialog-Bja5HFb2.js";import"./cross-BcLTDviE.js";import"./svgIconContainer-rhD8_llD.js";import"./useBaseUiId-BGt5np_k.js";import"./InternalBackdrop-uUv9MGMr.js";import"./composite-Bd6nPt4i.js";import"./index-DSnIaanU.js";import"./index-CFmwThG4.js";import"./index-904NSARe.js";import"./useEventCallback-WZf0a_bB.js";import"./SkeletonBar-BEmPZtKd.js";import"./LoadingCell-DP8CSwZh.js";import"./ColumnConfigDialog-D4KPwQM7.js";import"./DraggableList-Dh1kMlcW.js";import"./search-sJO-f4KO.js";import"./Input-Dseoi2Bs.js";import"./useControlled-D-af9sp-.js";import"./Button-mtLpgF2-.js";import"./small-cross-CTDjsytU.js";import"./ActionButton-C40yhSRc.js";import"./Checkbox-D-EAJqyP.js";import"./useValueChanged-Cyy6383A.js";import"./CollapsiblePanel-Cfs2diUt.js";import"./MultiColumnSortDialog-bWpTSf1H.js";import"./MenuTrigger-5Qse9-wJ.js";import"./CompositeItem-CilfwKya.js";import"./ToolbarRootContext-D7liU5HL.js";import"./getDisabledMountTransitionStyles-BebC4cTU.js";import"./getPseudoElementBounds-CstG7_ji.js";import"./chevron-down-BTesjy4Z.js";import"./index-CCzJD3Mm.js";import"./error-DBxXNUf_.js";import"./BaseCbacBanner-CWHdKSS8.js";import"./makeExternalStore-DO8UH6Jn.js";import"./Tooltip-DuWPukYN.js";import"./PopoverPopup-DVnqpSim.js";import"./debounce-DuqXkYiy.js";import"./useOsdkClient-D-YKzOkS.js";import"./tick-B8P9ON5a.js";import"./DropdownField-DVCiuc26.js";import"./isEqual-DChFwswX.js";import"./withOsdkMetrics-DMw3oRZ7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
