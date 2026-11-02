import{f as b,j as a,r as i}from"./iframe-C51H6UNa.js";import{O as u}from"./object-table-CMCoP_er.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DPRquFXQ.js";import"./Table-CqaXJVut.js";import"./index-XgCK3bCN.js";import"./Dialog-wpYTwm5C.js";import"./cross-Da8aR7tr.js";import"./svgIconContainer-BcKhCUV6.js";import"./useBaseUiId-BO3VYUv8.js";import"./InternalBackdrop-D_glzBrd.js";import"./composite-BT7MKZYR.js";import"./index-DJOOHoWw.js";import"./index-Cf0yVo51.js";import"./index-DJa5-hKe.js";import"./useEventCallback-Dyoji95Y.js";import"./SkeletonBar-DSiG1Rwc.js";import"./LoadingCell-D4zJkyLc.js";import"./ColumnConfigDialog-DChNbv3p.js";import"./DraggableList-D-wOIbeh.js";import"./search-CUjniAIx.js";import"./Input-578UpJoR.js";import"./useControlled-CDSAxchT.js";import"./Button-BbdKgphf.js";import"./small-cross-Wl991iyC.js";import"./ActionButton-BFr5UQ2Z.js";import"./Checkbox-DFJuyNl9.js";import"./useValueChanged-BXBXo6ad.js";import"./CollapsiblePanel-C3NDAcsc.js";import"./MultiColumnSortDialog-BVUzWBvq.js";import"./MenuTrigger-BLAXBnUV.js";import"./CompositeItem-B83sK6r-.js";import"./ToolbarRootContext-Dquj6J6i.js";import"./getDisabledMountTransitionStyles-Cq4DahQq.js";import"./getPseudoElementBounds-CE1EUuF6.js";import"./chevron-down-CiXp0wUf.js";import"./index-BbCxoF0B.js";import"./error-BabcdKAa.js";import"./BaseCbacBanner-BPOTHcmy.js";import"./makeExternalStore-DINTZeIb.js";import"./Tooltip-BMyMoL9M.js";import"./PopoverPopup-CZx3Vhv9.js";import"./debounce-DxRcBaI1.js";import"./useOsdkClient-D8E3YhRa.js";import"./tick-obAEPBey.js";import"./DropdownField-BbfVhW4P.js";import"./isEqual-qdM32Mai.js";import"./withOsdkMetrics-55ZGkUds.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
