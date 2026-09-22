import{f as b,j as a,r as i}from"./iframe-DFjxEBRl.js";import{O as u}from"./object-table-BoxAW6h4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-YLQ76DnX.js";import"./Table-BwRlL3aP.js";import"./index-RHDnv4KE.js";import"./Dialog-UrBzw_yg.js";import"./cross-CCUsZu-F.js";import"./svgIconContainer-BJy48zyG.js";import"./useBaseUiId-DHc-L81w.js";import"./InternalBackdrop-C6P7pfbM.js";import"./composite-CbdzgRs5.js";import"./index-Ct3A8526.js";import"./index-C1k9WrZP.js";import"./index-DpB4gLVj.js";import"./useEventCallback-Dsnixxz2.js";import"./SkeletonBar-CnK8k0Bo.js";import"./LoadingCell-aZlJy0Kx.js";import"./ColumnConfigDialog-DK3pRiTd.js";import"./DraggableList-ChJmTziU.js";import"./search-BBZ2n1GL.js";import"./Input-BTdzd0gA.js";import"./useControlled-CQ5aYrLf.js";import"./Button-Del4UdCp.js";import"./small-cross-DqyJwNHG.js";import"./ActionButton-DNxDDubl.js";import"./Checkbox-DyMDK_CU.js";import"./useValueChanged-gLgp5WvO.js";import"./CollapsiblePanel-ByT148KK.js";import"./MultiColumnSortDialog-B4STlqGL.js";import"./MenuTrigger-IEuFxfFB.js";import"./CompositeItem-CAkiPkQz.js";import"./ToolbarRootContext-B6U_uFKg.js";import"./getDisabledMountTransitionStyles-sjb--ufQ.js";import"./getPseudoElementBounds-MBQcfjsr.js";import"./chevron-down-Bha1TG_6.js";import"./index-B9cxXn2y.js";import"./error-WmDbCKs9.js";import"./BaseCbacBanner-wAyBlN0z.js";import"./makeExternalStore-DFJcPXqp.js";import"./Tooltip-DOMen-IA.js";import"./PopoverPopup-BZUXpB4m.js";import"./debounce-vz83BYcu.js";import"./useOsdkClient-DtVD0JhY.js";import"./tick-DJLdpaHq.js";import"./DropdownField-CStCtQro.js";import"./isEqual-C6OL2hQ9.js";import"./withOsdkMetrics-DIfFeIX-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
