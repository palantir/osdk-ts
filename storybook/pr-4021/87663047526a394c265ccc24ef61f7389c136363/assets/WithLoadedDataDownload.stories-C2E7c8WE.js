import{f as b,j as a,r as i}from"./iframe-CC13kVkc.js";import{O as u}from"./object-table-BoQNsJEO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-iiwGnqeP.js";import"./Table-CUY0THro.js";import"./index-DU2P82bW.js";import"./Dialog-Cl4AcAGv.js";import"./cross-Gw99IDXX.js";import"./svgIconContainer-BM4AiPUS.js";import"./useBaseUiId-HgrihVGX.js";import"./InternalBackdrop-LVRDcyBz.js";import"./composite-CQT3GPGa.js";import"./index-C0gqvA1S.js";import"./index-DWN_AYu3.js";import"./index-CZ_sbyW4.js";import"./useEventCallback-Dzvd6DP5.js";import"./SkeletonBar-CqLQslyN.js";import"./LoadingCell-ZQEvmqLg.js";import"./ColumnConfigDialog-VYNi19lW.js";import"./DraggableList-Ca43qavx.js";import"./search-DATCmuXl.js";import"./Input-B8esvYJ8.js";import"./useControlled-C8Ss_1q9.js";import"./Button-DChBnEps.js";import"./small-cross-ChcGFzGy.js";import"./ActionButton-D0sOWk1d.js";import"./Checkbox-CUTYqxzh.js";import"./useValueChanged-B8UU_UBm.js";import"./CollapsiblePanel-M2FwY9nP.js";import"./MultiColumnSortDialog-BuKMp48F.js";import"./MenuTrigger-DHFrirSL.js";import"./CompositeItem-DZfCHwau.js";import"./ToolbarRootContext-CWcw0hmq.js";import"./getDisabledMountTransitionStyles-qFjzV3aO.js";import"./getPseudoElementBounds-D0x7-dwB.js";import"./chevron-down-SXnOgnm5.js";import"./index-BbGmio58.js";import"./error-C04PUB1J.js";import"./BaseCbacBanner-CEdNT__P.js";import"./makeExternalStore-2iYjMQbd.js";import"./Tooltip-C0FVSqb3.js";import"./PopoverPopup-CH4QvDfI.js";import"./debounce-B0ThbaZi.js";import"./useOsdkClient-C-mmpbXU.js";import"./tick-BfjgS0G2.js";import"./DropdownField-3R-_B0eM.js";import"./isEqual-CFkoNCQV.js";import"./withOsdkMetrics-DYDVQvXv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
