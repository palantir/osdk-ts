import{f as b,j as a,r as i}from"./iframe-sCg-x-0e.js";import{O as u}from"./object-table-BX8EU3OZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CrHR8OZb.js";import"./Table-XSYUKy0L.js";import"./index-BOZGu8jc.js";import"./Dialog-DcgY1rsx.js";import"./cross-BJXO8uQi.js";import"./svgIconContainer-Bz9LWwHW.js";import"./useBaseUiId-4dAni9Iz.js";import"./InternalBackdrop-BVOBKBAQ.js";import"./composite-BVDa5-ly.js";import"./index-LiLFEgZ-.js";import"./index-CrWYFlhm.js";import"./index-CGP6ehY7.js";import"./useEventCallback-CNSbNAYm.js";import"./SkeletonBar-BIgwvp1N.js";import"./LoadingCell-Dp7HbmGT.js";import"./ColumnConfigDialog-551t91Au.js";import"./DraggableList-Bd7_vgZQ.js";import"./search-BPEAhxRZ.js";import"./Input-tPBEPRbS.js";import"./useControlled-B79JWrmu.js";import"./Button-fnOjxPjt.js";import"./small-cross-0tZgzABZ.js";import"./ActionButton-BEYjTfRp.js";import"./Checkbox-DDjNMsZD.js";import"./useValueChanged-BC0e0lCK.js";import"./CollapsiblePanel-FsEtU7cP.js";import"./MultiColumnSortDialog-CgnVK0jo.js";import"./MenuTrigger-CbB8pxfE.js";import"./CompositeItem-Cf49LIHZ.js";import"./ToolbarRootContext-DaKAs0Iq.js";import"./getDisabledMountTransitionStyles-ktk2ef4e.js";import"./getPseudoElementBounds-3vHyrTXV.js";import"./chevron-down-BkzKMfVC.js";import"./index-CvyMTgef.js";import"./error-CMgoEmBB.js";import"./BaseCbacBanner-xCr7J2OL.js";import"./makeExternalStore-BNXnsqiG.js";import"./Tooltip-TD1OkRvp.js";import"./PopoverPopup-CdQkkK4P.js";import"./toNumber-DFY91DEW.js";import"./useOsdkClient-7ENmS5iO.js";import"./tick-RhwEwZL-.js";import"./DropdownField-DcC4oRKv.js";import"./withOsdkMetrics-CJrtQZxu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};
