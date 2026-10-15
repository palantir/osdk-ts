import{f as b,j as a,r as i}from"./iframe-B6ilqw57.js";import{O as u}from"./object-table-YvUTv0RO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D-9CJsjA.js";import"./Table-DxotyaED.js";import"./index-DbyNdYIV.js";import"./Dialog-C48tkAvG.js";import"./cross-DPKuiR4p.js";import"./svgIconContainer-cN2FPQGz.js";import"./useBaseUiId-DHE-id5O.js";import"./InternalBackdrop-CMe-Gh9-.js";import"./composite-DlL-mJ_3.js";import"./index-P1JTOsnm.js";import"./index-Df4HlJX1.js";import"./index-CVmOQE98.js";import"./useEventCallback-CpyAivRw.js";import"./SkeletonBar-DpcdXqqq.js";import"./LoadingCell-DdvMbUk8.js";import"./ColumnConfigDialog-B7V5mAol.js";import"./DraggableList-DfFj4dUH.js";import"./search-QZJd4Wc4.js";import"./Input-DWSs0FOD.js";import"./useControlled-B3abm0PF.js";import"./Button-dJtUFXII.js";import"./small-cross-D3G7vTv6.js";import"./ActionButton-BEqEK5Xi.js";import"./Checkbox-qSC09PM1.js";import"./useValueChanged-D5nzYuqC.js";import"./CollapsiblePanel-B7_nvTjp.js";import"./MultiColumnSortDialog-DWw4hToi.js";import"./MenuTrigger-BEldzrty.js";import"./CompositeItem-C4j1wUUU.js";import"./ToolbarRootContext-DC1oDeWo.js";import"./getDisabledMountTransitionStyles-DpUjid9g.js";import"./getPseudoElementBounds-CU-tnlvo.js";import"./chevron-down-CMdh2Fjb.js";import"./index-FPD_SzEe.js";import"./error-DqxELFjs.js";import"./BaseCbacBanner-Cp5mWgH0.js";import"./makeExternalStore-C_9OaqSF.js";import"./Tooltip-S82UM2K1.js";import"./PopoverPopup-B6N4zjBr.js";import"./debounce-Cr6ef7Zd.js";import"./useOsdkClient-CEMDVQcB.js";import"./tick-DFqE3VKw.js";import"./DropdownField-B2xi4c23.js";import"./isEqual-BaTqElux.js";import"./withOsdkMetrics-D8k6BHrp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
