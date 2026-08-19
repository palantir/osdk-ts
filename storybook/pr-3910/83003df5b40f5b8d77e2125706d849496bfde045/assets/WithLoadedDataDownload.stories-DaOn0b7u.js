import{f as b,j as a,r as i}from"./iframe--2o31fpS.js";import{O as u}from"./object-table-BSmGQ0OR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BGtLG4Ze.js";import"./Table-_NbnqI6p.js";import"./index-CqkP8V1G.js";import"./Dialog-CUnqqWn-.js";import"./cross-11SNaKV0.js";import"./svgIconContainer-C1D02ztO.js";import"./useBaseUiId-DkfG-pIU.js";import"./InternalBackdrop-Cl2iltkm.js";import"./composite-QRzMYoxy.js";import"./index-DVBrMkW3.js";import"./index-DYasKxPB.js";import"./index-WsSVru4g.js";import"./useEventCallback-Bfcmscgt.js";import"./SkeletonBar-dBdl3_Eb.js";import"./LoadingCell-DppxWDb1.js";import"./ColumnConfigDialog-CLPlY36r.js";import"./DraggableList-BCbhifmv.js";import"./search-DCb3eFG7.js";import"./Input-CqReJTw6.js";import"./useControlled-_9g-GziU.js";import"./Button-MFx7ttW0.js";import"./small-cross-CpBPFOEe.js";import"./ActionButton-BxnI5abi.js";import"./Checkbox-7-bZ0hUh.js";import"./useValueChanged-BmRi-Zrz.js";import"./CollapsiblePanel-CaV5vxo-.js";import"./MultiColumnSortDialog-C3WeHFR9.js";import"./MenuTrigger-iYMw9usz.js";import"./CompositeItem-jeolwUWG.js";import"./ToolbarRootContext-B7UKPIgL.js";import"./getDisabledMountTransitionStyles-Coe4unGQ.js";import"./getPseudoElementBounds-CjbEuNK7.js";import"./chevron-down-DQu-ZHpt.js";import"./index-B5Pw0m5Z.js";import"./error-CZE7-qa2.js";import"./BaseCbacBanner-a-FKKl8c.js";import"./makeExternalStore-cJzBmAO1.js";import"./Tooltip-Cb3WfA-U.js";import"./PopoverPopup-BXOF-a2w.js";import"./debounce-CbfdFUk1.js";import"./useOsdkClient-B6Xc0VYo.js";import"./tick-BvZOjkPN.js";import"./DropdownField-DRd1vWmE.js";import"./isEqual-D5Kz6pCE.js";import"./withOsdkMetrics-BZ26a9pj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
