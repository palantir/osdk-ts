import{f as b,j as a,r as i}from"./iframe-Dcyw3n0s.js";import{O as u}from"./object-table-B6icTVF4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper--DYYOvly.js";import"./Table-BgpTBgzj.js";import"./index-BRAYEGnX.js";import"./Dialog-DPDoLNbg.js";import"./cross-BtW3RFRu.js";import"./svgIconContainer-CDrVOxgg.js";import"./useBaseUiId-Bxpmo9et.js";import"./InternalBackdrop-E_2gQNdi.js";import"./composite-CXKQao9c.js";import"./index-DQSxhZzf.js";import"./index-D8Yt5RHp.js";import"./index-Bys8iuS6.js";import"./useEventCallback-D8He6yhG.js";import"./SkeletonBar-DpnYisp8.js";import"./LoadingCell-BWYOZj5M.js";import"./ColumnConfigDialog-D_VAM7LN.js";import"./DraggableList-B4CNtBrU.js";import"./search-NxpExqZW.js";import"./Input-CxW-U7dR.js";import"./useControlled-CAIHNCIs.js";import"./Button-CEVHKDgx.js";import"./small-cross-Hbjo3Uav.js";import"./ActionButton-DKvm-hVd.js";import"./Checkbox-DJLV_OzW.js";import"./useValueChanged-Q58IdcSS.js";import"./CollapsiblePanel-CRYKS3nu.js";import"./MultiColumnSortDialog-b7vdqwsg.js";import"./MenuTrigger-BV2xvKhh.js";import"./CompositeItem-suCt67I_.js";import"./ToolbarRootContext-CvnjVtFT.js";import"./getDisabledMountTransitionStyles-CB599Kw4.js";import"./getPseudoElementBounds-dEZ5Imsc.js";import"./chevron-down-DybwZNpw.js";import"./index-BbXWi6RK.js";import"./error-vNzMi5l_.js";import"./BaseCbacBanner-Bt_wy-DV.js";import"./makeExternalStore-CB1cXXB6.js";import"./Tooltip-D5YXKazL.js";import"./PopoverPopup-CiALj5He.js";import"./toNumber-DVrluVqV.js";import"./useOsdkClient-4jomni6B.js";import"./tick-CF7baKn_.js";import"./DropdownField-mng5SRx7.js";import"./withOsdkMetrics-B1X4SrC-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
