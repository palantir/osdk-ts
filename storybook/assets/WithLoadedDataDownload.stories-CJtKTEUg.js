import{f as b,j as a,r as i}from"./iframe-Chio77VP.js";import{O as u}from"./object-table-CiTAXoaP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dt5FNH5o.js";import"./index-Ca2LpqUZ.js";import"./Dialog-DqQTLStJ.js";import"./cross-DSLJTQ5w.js";import"./svgIconContainer-Csco7ptr.js";import"./useBaseUiId-ClFlSRoQ.js";import"./InternalBackdrop-ndglsXAe.js";import"./composite-DE8-mgXU.js";import"./index-BcgDg9yf.js";import"./index-DnMFWa6M.js";import"./index-CEEu1Ax6.js";import"./useEventCallback-B4Uu45dA.js";import"./SkeletonBar--R3A6M4c.js";import"./LoadingCell-BO2APzgK.js";import"./ColumnConfigDialog-5fVaKAOZ.js";import"./DraggableList-k5C9BzVf.js";import"./search-Bq_ERYnO.js";import"./Input-C-4igv96.js";import"./useControlled-C7GDl2B7.js";import"./Button-6EmhjClO.js";import"./small-cross-LZKNmLNK.js";import"./ActionButton-Bq1xmvFN.js";import"./Checkbox-D5wuzF_a.js";import"./useValueChanged-Oi-HM7VZ.js";import"./CollapsiblePanel-1ox7xPDd.js";import"./MultiColumnSortDialog-CiaGtBlu.js";import"./MenuTrigger-BXYr689C.js";import"./CompositeItem-Qz08TpRA.js";import"./ToolbarRootContext-CZQCk8Ol.js";import"./getDisabledMountTransitionStyles-CnbA4lIo.js";import"./getPseudoElementBounds-qSW1gYDZ.js";import"./chevron-down-D-UVCR2J.js";import"./index-CeDQ-Vdk.js";import"./error-Yn-rJTrJ.js";import"./BaseCbacBanner-CzPn9Ncu.js";import"./makeExternalStore-CTFx1LEB.js";import"./Tooltip-71Wdtc8K.js";import"./PopoverPopup-Ba-YatLV.js";import"./debounce-Ins44pUS.js";import"./useOsdkClient-DFUhHdMt.js";import"./tick-Db0tIP7m.js";import"./DropdownField-BOa15dWM.js";import"./isEqual-CrPAYksM.js";import"./withOsdkMetrics-Cz5B5mCa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
