import{f as b,j as a,r as i}from"./iframe-CrH6Yrlk.js";import{O as u}from"./object-table-BPcfv3yy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DWN1nqfF.js";import"./Table-CW_7u1wJ.js";import"./index-BLeB2LZ4.js";import"./Dialog-B2Toa9ee.js";import"./cross-Djpe7veO.js";import"./svgIconContainer-BOBFAYEP.js";import"./useBaseUiId-DxKrUPMo.js";import"./InternalBackdrop-tytdnIli.js";import"./composite-ffO3RfE4.js";import"./index-Dnjnym33.js";import"./index-BXkTUwMI.js";import"./index-DJX0kPHb.js";import"./useEventCallback-Df7dMb-i.js";import"./SkeletonBar-BggMzaAo.js";import"./LoadingCell-AZ9SDyIy.js";import"./ColumnConfigDialog-B63qw4h6.js";import"./DraggableList-4ck5OTAl.js";import"./search-C_RAyaII.js";import"./Input-CO-EhnoV.js";import"./useControlled-BHyUcUtS.js";import"./Button-ChVjuzMV.js";import"./small-cross-Cp0wS207.js";import"./ActionButton-CAVnXpdM.js";import"./Checkbox-Dq_71KbB.js";import"./useValueChanged-C8WmnglJ.js";import"./CollapsiblePanel-CNe4nG1I.js";import"./MultiColumnSortDialog-BeVa_ST7.js";import"./MenuTrigger-CVFoNL-1.js";import"./CompositeItem-BB8cOYaX.js";import"./ToolbarRootContext-BfVZ25NV.js";import"./getDisabledMountTransitionStyles-LOYR3VUX.js";import"./getPseudoElementBounds-ZRt3Q6Bd.js";import"./chevron-down-Do4cSabx.js";import"./index-ow98vrD3.js";import"./error-Bb5TXnmt.js";import"./BaseCbacBanner-C8xIu8HD.js";import"./makeExternalStore-CiLIO8iU.js";import"./Tooltip-DRTjcE2d.js";import"./PopoverPopup-BR1F8fHw.js";import"./debounce-rtZgYy1G.js";import"./useOsdkClient-JKeEr8fH.js";import"./tick-CQI3-0jK.js";import"./DropdownField-1LHzPopr.js";import"./isEqual-Df-8D6e-.js";import"./withOsdkMetrics-B1PE_2r3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
