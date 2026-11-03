import{f as b,j as a,r as i}from"./iframe-B6Lta6LP.js";import{O as u}from"./object-table-HO2pwWul.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CYbl2xdJ.js";import"./Table-Ct_buXIn.js";import"./index-tKxTuoVH.js";import"./Dialog-ByWbVagS.js";import"./cross-CAJFEHXr.js";import"./svgIconContainer-DPd9W8TR.js";import"./useBaseUiId-LeTLb_RS.js";import"./InternalBackdrop-CD_hYGA0.js";import"./composite-CXu030fZ.js";import"./index-DW8Y-83r.js";import"./index-C1Xd9eEP.js";import"./index-SAyxKn2n.js";import"./useEventCallback-CFBWhOz1.js";import"./SkeletonBar-CBfyp1TB.js";import"./LoadingCell-CtPX3UjT.js";import"./ColumnConfigDialog-CP4zGZfj.js";import"./DraggableList-Cigjyxxm.js";import"./search-CJ2Z9OiI.js";import"./Input-CNTN6kGr.js";import"./useControlled-Db4l5j0n.js";import"./Button-CDP0EtTw.js";import"./small-cross-CYXu3PwF.js";import"./ActionButton-CjKN-LnI.js";import"./Checkbox-Ch2RRzT2.js";import"./useValueChanged-Beo3vz_X.js";import"./CollapsiblePanel-C3KmqiQ1.js";import"./MultiColumnSortDialog-FC3kYSVd.js";import"./MenuTrigger-CEQn7r1g.js";import"./CompositeItem-aYCSoUde.js";import"./ToolbarRootContext-BwcsMBBX.js";import"./getDisabledMountTransitionStyles-dUaBn5kl.js";import"./getPseudoElementBounds-Cie9YPdh.js";import"./chevron-down-DP_Haie7.js";import"./index-BIznb_cm.js";import"./error-B_rV--z6.js";import"./BaseCbacBanner-BQ6d8Rvc.js";import"./makeExternalStore-BxbrneS1.js";import"./Tooltip-C9QEBkZZ.js";import"./PopoverPopup-Crm0F1MF.js";import"./debounce-DcTWGXcx.js";import"./useOsdkClient-LIxqnJR5.js";import"./tick-CR4FCYn3.js";import"./DropdownField-IaATl85X.js";import"./isEqual-DX8PeEAn.js";import"./withOsdkMetrics-D256mKJK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
