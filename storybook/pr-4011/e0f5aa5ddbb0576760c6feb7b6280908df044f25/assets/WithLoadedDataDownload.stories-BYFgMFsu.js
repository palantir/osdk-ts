import{f as b,j as a,r as i}from"./iframe-CfT8oSzl.js";import{O as u}from"./object-table-D-zdFh4O.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ck2G3lhL.js";import"./Table-G9pXBYqy.js";import"./index-BpawNvzq.js";import"./Dialog-CdzqfLeL.js";import"./cross-BDq3cq5E.js";import"./svgIconContainer-ya4CV7y2.js";import"./useBaseUiId-D4xhi0G6.js";import"./InternalBackdrop-DbdxTKbh.js";import"./composite-CCZTgGc-.js";import"./index-DvoLa0A4.js";import"./index-UxUlnqFt.js";import"./index-ClAIatsn.js";import"./useEventCallback-CSvW4qDl.js";import"./SkeletonBar-CQtM8ssv.js";import"./LoadingCell-efDHe_sF.js";import"./ColumnConfigDialog-LKXN3hyw.js";import"./DraggableList-D1pXLlwE.js";import"./search-CeTlWaJs.js";import"./Input-frvZccMj.js";import"./useControlled-C4oVQ_PT.js";import"./Button-RnGlAnHy.js";import"./small-cross-B1GJDPeO.js";import"./ActionButton-Ce-MUeV5.js";import"./Checkbox-BsFDLi46.js";import"./useValueChanged-D06smhY0.js";import"./CollapsiblePanel-CHkL4bVQ.js";import"./MultiColumnSortDialog-DvaS2aUX.js";import"./MenuTrigger-CSaaZI9V.js";import"./CompositeItem-B7Z5vov3.js";import"./ToolbarRootContext-CiSOROzl.js";import"./getDisabledMountTransitionStyles-DSlo8AiB.js";import"./getPseudoElementBounds-B5D0r4zv.js";import"./chevron-down-hfFWURIG.js";import"./index-Ajqy3tvo.js";import"./error-CTOxDA6S.js";import"./BaseCbacBanner-D5RmPoWA.js";import"./makeExternalStore-Bq85hlSU.js";import"./Tooltip-DolSoQfn.js";import"./PopoverPopup-D5R3Wt8N.js";import"./debounce-eSR8WnsM.js";import"./useOsdkClient-CeYb4mIi.js";import"./tick-3Sqmfbum.js";import"./DropdownField-cTMj70TI.js";import"./isEqual-D62eLK_x.js";import"./withOsdkMetrics-BzsRVIUg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
