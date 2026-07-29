import{f as b,j as a,r as i}from"./iframe-f-LLf2Ya.js";import{O as u}from"./object-table-NAm-Tb9i.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BoUrXPpj.js";import"./Table-lp2K-SKo.js";import"./index-B9B3s7bF.js";import"./Dialog-T2SbK608.js";import"./cross-BoVk4V5c.js";import"./svgIconContainer-Chc81CN8.js";import"./useBaseUiId-CTPNjBcP.js";import"./InternalBackdrop-B102vmpL.js";import"./composite-DfPjCfHJ.js";import"./index-BUX5q-Oa.js";import"./index-iUTVCIAd.js";import"./index-CJHXodCw.js";import"./useEventCallback-B6M-wCG5.js";import"./SkeletonBar-DlBooARs.js";import"./LoadingCell-BokbCzol.js";import"./ColumnConfigDialog-UDfAaSY7.js";import"./DraggableList-BUa9wnEH.js";import"./search-Bj93OaU5.js";import"./Input-D7SgfRqC.js";import"./useControlled-cD9LnU0e.js";import"./isEqual-Nhn9BSCX.js";import"./isObject-AXHth5L_.js";import"./Button-hDBFxLU5.js";import"./ActionButton-CL6lk5NG.js";import"./Checkbox-D-KZhJs8.js";import"./useValueChanged-BL7Vf6ZS.js";import"./CollapsiblePanel-R7SXJsHH.js";import"./MultiColumnSortDialog-0cPVbbvp.js";import"./MenuTrigger-DboWzSmf.js";import"./CompositeItem-Bl4lI12j.js";import"./ToolbarRootContext-CeWNTyyw.js";import"./getDisabledMountTransitionStyles-CDbInF5Y.js";import"./getPseudoElementBounds-D2MdtfWJ.js";import"./chevron-down-B4M_wavl.js";import"./index-J2idT5w8.js";import"./error-CEbz4Hh3.js";import"./BaseCbacBanner-Bh1YNigA.js";import"./makeExternalStore-DjTlMKLb.js";import"./Tooltip-C6j9r67Z.js";import"./PopoverPopup-DhqRFoSS.js";import"./toNumber-CD0pPV7v.js";import"./useOsdkClient-DscPqlK8.js";import"./tick-CFL3l1_K.js";import"./DropdownField-j2MhMqBT.js";import"./withOsdkMetrics-vMgHUsgr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
