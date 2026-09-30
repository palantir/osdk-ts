import{f as b,j as a,r as i}from"./iframe-DxVz5dus.js";import{O as u}from"./object-table-DOOpOjxQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-dij9S3RJ.js";import"./Table-D-CEaVeb.js";import"./index-C_W-VT0S.js";import"./Dialog-BDHH0maw.js";import"./cross-IXW3xmZm.js";import"./svgIconContainer-ftSbGeci.js";import"./useBaseUiId-BWXYzcoK.js";import"./InternalBackdrop-B1SYraZj.js";import"./composite-BDVlfNwN.js";import"./index-ClRjmnyd.js";import"./index-gok66sxW.js";import"./index-BiJTgGJY.js";import"./useEventCallback-CX0aAoan.js";import"./SkeletonBar-DERF-gsY.js";import"./LoadingCell-CvxZL9kC.js";import"./ColumnConfigDialog-J_BbbcKh.js";import"./DraggableList-L-6Y09gw.js";import"./search-C5WRo3gI.js";import"./Input-BLn4Lqlk.js";import"./useControlled-laJEGVBG.js";import"./Button-DkKQyNy7.js";import"./small-cross-DNkarUz2.js";import"./ActionButton-B5XzNvTu.js";import"./Checkbox-5nk_Ef0z.js";import"./useValueChanged-C6gCry8f.js";import"./CollapsiblePanel-emSmjH55.js";import"./MultiColumnSortDialog-CLj_cEaP.js";import"./MenuTrigger-m_qywH2D.js";import"./CompositeItem-DZxjvmIc.js";import"./ToolbarRootContext-BhnwoH5s.js";import"./getDisabledMountTransitionStyles-jz6kYw7l.js";import"./getPseudoElementBounds-DLZHdgfT.js";import"./chevron-down-CJ_JWdST.js";import"./index-DQFNyqTE.js";import"./error-l8hi8NpA.js";import"./BaseCbacBanner-DAlbmB8O.js";import"./makeExternalStore-6HRE-tXR.js";import"./Tooltip-CIQ48OAI.js";import"./PopoverPopup-DDubBzbx.js";import"./debounce-HK4ZQpWE.js";import"./useOsdkClient-DWdsPkLC.js";import"./tick-B2s8zm1S.js";import"./DropdownField-CXyq1EI7.js";import"./isEqual-BBaINTWv.js";import"./withOsdkMetrics-BUQXNERU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
