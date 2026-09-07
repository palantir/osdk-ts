import{f as b,j as a,r as i}from"./iframe-NrfGywpz.js";import{O as u}from"./object-table-CSBOnXso.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B_PzSpqk.js";import"./Table-yN6i7lAP.js";import"./index-B4J3JGGr.js";import"./Dialog-C2AOq1lk.js";import"./cross-Caw6Pz43.js";import"./svgIconContainer-Cgk6hNay.js";import"./useBaseUiId-DgnEpncS.js";import"./InternalBackdrop-DwTNI5Cd.js";import"./composite-DA8gx3Og.js";import"./index-D-R7Oq4i.js";import"./index-ALjvoOKD.js";import"./index-D3KOsz6o.js";import"./useEventCallback-DGcpXBNW.js";import"./SkeletonBar-DEllJNlP.js";import"./LoadingCell-B5rJAwI5.js";import"./ColumnConfigDialog-5mgHcV2b.js";import"./DraggableList-mQAKFBz7.js";import"./search-DU1IM6NB.js";import"./Input-CCWHU-92.js";import"./useControlled-DTlMTcYw.js";import"./Button-DIZaR5tq.js";import"./small-cross-CqGyxp_N.js";import"./ActionButton-CKkZcYry.js";import"./Checkbox-CIZsMWNA.js";import"./useValueChanged-DybLxmI0.js";import"./CollapsiblePanel-CdmC8pOd.js";import"./MultiColumnSortDialog-NTJeK39Q.js";import"./MenuTrigger-D7_F68sm.js";import"./CompositeItem-DkX84chI.js";import"./ToolbarRootContext-DXSxTdJI.js";import"./getDisabledMountTransitionStyles-z6rzoWNn.js";import"./getPseudoElementBounds-ButHWGJx.js";import"./chevron-down-Cswe4CW9.js";import"./index-hEzcpiCN.js";import"./error-DaUrBpBS.js";import"./BaseCbacBanner-CN69LqS-.js";import"./makeExternalStore-D2ri9UvN.js";import"./Tooltip-DpVDM5M6.js";import"./PopoverPopup-hYgPs6_l.js";import"./debounce-CsnCNeb8.js";import"./useOsdkClient-DsjVhBsW.js";import"./tick-ZKA2ZAhf.js";import"./DropdownField-CuIAd7EW.js";import"./isEqual-BuonFklC.js";import"./withOsdkMetrics-5_2pgCwu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
