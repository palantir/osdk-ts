import{f as b,j as a,r as i}from"./iframe-Bhfx531f.js";import{O as u}from"./object-table-vU8nbnp-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BGTnO5pN.js";import"./Table-C4sggtCp.js";import"./index-B0vP1he4.js";import"./Dialog-Dhnsfh9U.js";import"./cross-D0mP7iDn.js";import"./svgIconContainer-35gVlP3R.js";import"./useBaseUiId-BUiHaz06.js";import"./InternalBackdrop-DVH37k6h.js";import"./composite-D8rImhTM.js";import"./index-BrXRE2qO.js";import"./index-BDCmNH8P.js";import"./index-Ct4EiF5M.js";import"./useEventCallback-Ct-7CH8e.js";import"./SkeletonBar-DPZU72M_.js";import"./LoadingCell-DY80l0m3.js";import"./ColumnConfigDialog-D_R7_Me5.js";import"./DraggableList-wyi8zgmM.js";import"./search-qHcMc9Tr.js";import"./Input-m_AxZLGF.js";import"./useControlled-Bt8EGKOL.js";import"./isEqual-BMHhsMi8.js";import"./isObject-C8vBNZTD.js";import"./Button-DnykwL8H.js";import"./ActionButton-CHqASvVV.js";import"./Checkbox-EhHvFVJO.js";import"./useValueChanged-BX1-yvcr.js";import"./CollapsiblePanel-DGyN7xmq.js";import"./MultiColumnSortDialog-DOGA4lTA.js";import"./MenuTrigger-C8ItDnfC.js";import"./CompositeItem-C9Gcac0L.js";import"./ToolbarRootContext-C82BKwEN.js";import"./getDisabledMountTransitionStyles-AlRRs8UP.js";import"./getPseudoElementBounds-BHPxA5_1.js";import"./chevron-down-DUVuPwR-.js";import"./index-BXq-WXuD.js";import"./error-Bxa2zWko.js";import"./BaseCbacBanner-DtzZmgnE.js";import"./makeExternalStore-t5wmtFvn.js";import"./Tooltip-CkFBZWsC.js";import"./PopoverPopup-Dvr14ROK.js";import"./toNumber-CB8QFug6.js";import"./useOsdkClient-C5TTVPe7.js";import"./tick-15VgqVU9.js";import"./DropdownField-Bqc-YXgb.js";import"./withOsdkMetrics-Bf2OGc1w.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
