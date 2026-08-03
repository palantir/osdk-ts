import{f as b,j as a,r as i}from"./iframe-C4zdqVWj.js";import{O as u}from"./object-table-5y_eVbGC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B7IRCv2i.js";import"./Table-BWPn6ED7.js";import"./index-CDa3Dpks.js";import"./Dialog-MY0z2_xP.js";import"./cross-CcKzwauY.js";import"./svgIconContainer-Dl60orHi.js";import"./useBaseUiId-C3-O81r1.js";import"./InternalBackdrop-DqCdUi6X.js";import"./composite-BOKzBbqE.js";import"./index-C-EVsM9H.js";import"./index-Bm-WBCaz.js";import"./index-CSSkJhd4.js";import"./useEventCallback-DzWmOzmx.js";import"./SkeletonBar-DJaveH5w.js";import"./LoadingCell-zoMfqBjd.js";import"./ColumnConfigDialog-DLxA3N4e.js";import"./DraggableList-DnQXeKHB.js";import"./search-D_jp9buf.js";import"./Input-CS5KY3Rt.js";import"./useControlled-BrGKFAOi.js";import"./isEqual-C0_uJpan.js";import"./isObject-NBpvH-VP.js";import"./Button-DnwMOogo.js";import"./ActionButton-CMS_gGpM.js";import"./Checkbox-DtK7jRa-.js";import"./useValueChanged-C4h3bH8g.js";import"./CollapsiblePanel-DA_mKU-k.js";import"./MultiColumnSortDialog-CLR96K0C.js";import"./MenuTrigger-CKsgtdQN.js";import"./CompositeItem-BBqAN0oe.js";import"./ToolbarRootContext-Cs3bwfMD.js";import"./getDisabledMountTransitionStyles-vcPfD5Po.js";import"./getPseudoElementBounds-BCuazdjb.js";import"./chevron-down-BfWdzJim.js";import"./index-DaQh8MoE.js";import"./error--oEoM1lA.js";import"./BaseCbacBanner-BNR_qvcW.js";import"./makeExternalStore-DB6uj4vP.js";import"./Tooltip-Cg1rzKhs.js";import"./PopoverPopup-BOpSDf1z.js";import"./toNumber-CVAuJ7yr.js";import"./useOsdkClient-DE0gigoB.js";import"./tick-CYjee-q_.js";import"./DropdownField-Bdhoiu2-.js";import"./withOsdkMetrics-1nDs0-t4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
