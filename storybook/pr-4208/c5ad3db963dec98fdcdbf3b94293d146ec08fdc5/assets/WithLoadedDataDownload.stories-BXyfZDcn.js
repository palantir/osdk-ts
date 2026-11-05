import{f as b,j as a,r as i}from"./iframe-CW0iR0MW.js";import{O as u}from"./object-table-CrA9n11I.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DPNRA16C.js";import"./Table-BDGBmK8s.js";import"./index-R4-e3PKI.js";import"./Dialog-CHAkM0Dh.js";import"./cross-CVgDD36J.js";import"./svgIconContainer-DRg1K7b0.js";import"./useBaseUiId-bY0lVTzO.js";import"./InternalBackdrop-Al1qNZ5B.js";import"./composite-CEDiNU-s.js";import"./index-Bj6P2ewC.js";import"./index-Wh16gVsR.js";import"./index-2WJCxASE.js";import"./useEventCallback-69j61YHl.js";import"./SkeletonBar-D-B4kIIV.js";import"./LoadingCell-SCdbsDKo.js";import"./ColumnConfigDialog-BbGcrO0V.js";import"./DraggableList-B9g0bCHY.js";import"./search-DRF2IcSw.js";import"./Input-CEvDm9oX.js";import"./useControlled-BZraJw4c.js";import"./Button-IemAbPn8.js";import"./small-cross-DgOHAIuf.js";import"./ActionButton-DRpKJjXE.js";import"./Checkbox-CKlutVsm.js";import"./useValueChanged-DMC3zyLc.js";import"./CollapsiblePanel-CvSxsX2O.js";import"./MultiColumnSortDialog-Bx89fbf_.js";import"./MenuTrigger-CM7WtocU.js";import"./CompositeItem-nFLipZIC.js";import"./ToolbarRootContext-Dfjrxij8.js";import"./getDisabledMountTransitionStyles-Do6amAXt.js";import"./getPseudoElementBounds-CdhAL6Na.js";import"./chevron-down-ChPXe2UO.js";import"./index-CQ_ZQBXs.js";import"./error-QdPzuwdp.js";import"./BaseCbacBanner-QNuKrHdU.js";import"./makeExternalStore-GoUNmYeo.js";import"./Tooltip-VY0XkLAP.js";import"./PopoverPopup-CHZlmgc5.js";import"./debounce-B76dCMlT.js";import"./useOsdkClient-D98LXdIX.js";import"./tick-D-TsA4-V.js";import"./DropdownField-CxC5gxxi.js";import"./isEqual-DV8lhnxQ.js";import"./withOsdkMetrics-CaRNNLKc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
