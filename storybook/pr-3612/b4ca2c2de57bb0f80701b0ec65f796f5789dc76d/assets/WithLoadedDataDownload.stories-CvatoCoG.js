import{f as b,j as a,r as i}from"./iframe-B067mJJD.js";import{O as u}from"./object-table-BDveMK8_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-aRVleQ9n.js";import"./Table-oB3IMNKH.js";import"./index-CXujijaa.js";import"./Dialog-BmG9ZvL8.js";import"./cross-Dtg5Zx2w.js";import"./svgIconContainer-BLpqKIxS.js";import"./useBaseUiId-en620839.js";import"./InternalBackdrop-CIOyj4o_.js";import"./composite-C_8lS0YD.js";import"./index-DsXIJ6vq.js";import"./index-owqdD4rE.js";import"./index-Btugp6o-.js";import"./useEventCallback-C_wS2ktV.js";import"./SkeletonBar-Mq9-rKPR.js";import"./LoadingCell-ChIEJf03.js";import"./ColumnConfigDialog-XkVuE9Zl.js";import"./DraggableList-BZlnkJn1.js";import"./search-Bnkq9xxo.js";import"./Input-DC_kXmOS.js";import"./useControlled-CvBct5IX.js";import"./Button-dOwtzEcM.js";import"./small-cross-B3hmZna4.js";import"./ActionButton-CQhsltx8.js";import"./Checkbox-Cjk9MyaO.js";import"./useValueChanged-FKC42X19.js";import"./CollapsiblePanel-DW6TcbMm.js";import"./MultiColumnSortDialog-Cmy0liRA.js";import"./MenuTrigger-Bifc7tvM.js";import"./CompositeItem-05lTREnB.js";import"./ToolbarRootContext-IgAccb3_.js";import"./getDisabledMountTransitionStyles-UQY1vEa1.js";import"./getPseudoElementBounds-EPn6AeJW.js";import"./chevron-down-DbRcCkwb.js";import"./index-Bh98dWqx.js";import"./error-1vaoDyk6.js";import"./BaseCbacBanner-BXqE491R.js";import"./makeExternalStore-DN-iw-FW.js";import"./Tooltip-CwEyF_Jt.js";import"./PopoverPopup-DGmhuHbn.js";import"./toNumber-xQjqFC1D.js";import"./useOsdkClient-DnjYG_lR.js";import"./tick-DVjlUdkT.js";import"./DropdownField-qVtD84mN.js";import"./withOsdkMetrics-D6KobcbQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
