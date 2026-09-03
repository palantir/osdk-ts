import{f as b,j as a,r as i}from"./iframe-BbienW_k.js";import{O as u}from"./object-table-B0ggEq35.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BwYT6GBt.js";import"./Table-CfHAZrq3.js";import"./index-BtVRX5ik.js";import"./Dialog-CEYCtVCN.js";import"./cross-D79BwPuA.js";import"./svgIconContainer-9jKJCEtA.js";import"./useBaseUiId-mGNAwuSb.js";import"./InternalBackdrop-BGghe2gX.js";import"./composite-DehmI49I.js";import"./index-_tXk15dP.js";import"./index-CBwDIYK2.js";import"./index-DHabHcMF.js";import"./useEventCallback-CRCaMKxg.js";import"./SkeletonBar-CNiR4LJi.js";import"./LoadingCell-CLphyg8f.js";import"./ColumnConfigDialog-D9bURUp0.js";import"./DraggableList-CaawD_zV.js";import"./search-DtpodeH8.js";import"./Input-C02zCytb.js";import"./useControlled-BbPCoZLB.js";import"./Button-DgQWdRpI.js";import"./small-cross-Bbjb07uO.js";import"./ActionButton-CH9BHHmi.js";import"./Checkbox-Bh14gdun.js";import"./useValueChanged-B86iGZyF.js";import"./CollapsiblePanel-CzWLrbRF.js";import"./MultiColumnSortDialog-CbdTworu.js";import"./MenuTrigger-B_CsaOE_.js";import"./CompositeItem-BtZO_Q27.js";import"./ToolbarRootContext-tNJYHhh0.js";import"./getDisabledMountTransitionStyles-DNQX_6BS.js";import"./getPseudoElementBounds-B22wLb31.js";import"./chevron-down-BvQtKUUh.js";import"./index-Bvo9wdGf.js";import"./error-Re8NGQni.js";import"./BaseCbacBanner-Cl4iMAcK.js";import"./makeExternalStore-D54vu3Pa.js";import"./Tooltip-CfUkHW1C.js";import"./PopoverPopup-9hgtmzo1.js";import"./debounce-CfOEKZQ8.js";import"./useOsdkClient-Ba-MyRxU.js";import"./tick-DXkGn8fU.js";import"./DropdownField-DWMcGlhL.js";import"./isEqual-CS7j3ZhU.js";import"./withOsdkMetrics-dw5qmcGp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
