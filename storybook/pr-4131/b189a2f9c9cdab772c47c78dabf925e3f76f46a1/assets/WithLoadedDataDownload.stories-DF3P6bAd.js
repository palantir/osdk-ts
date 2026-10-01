import{f as b,j as a,r as i}from"./iframe-t8tzCNQG.js";import{O as u}from"./object-table-F4Md9RQV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DgmnFE1F.js";import"./Table-5fTxY2Uw.js";import"./index-B2ZMYIpf.js";import"./Dialog-DwJBNRCE.js";import"./cross-BlbUaBXV.js";import"./svgIconContainer-BMtFokv3.js";import"./useBaseUiId-5tpyF_oD.js";import"./InternalBackdrop-DRHhQcWa.js";import"./composite-CtIsJulR.js";import"./index-D86oorM3.js";import"./index-BUDOFPoc.js";import"./index-CPjyfk9f.js";import"./useEventCallback-Du7sw565.js";import"./SkeletonBar-Ctmv_DKB.js";import"./LoadingCell-CQBVoYwx.js";import"./ColumnConfigDialog-C8NYwuqH.js";import"./DraggableList-BEbzCFki.js";import"./search-CeoT8iOL.js";import"./Input-hnDJE6Oy.js";import"./useControlled-C3Y23C1t.js";import"./Button-DJ3cf7JH.js";import"./small-cross-bmT9fHJd.js";import"./ActionButton-DYfkYb1s.js";import"./Checkbox-DLp5SnEW.js";import"./useValueChanged-iJtQDgJE.js";import"./CollapsiblePanel-CLzEHlgM.js";import"./MultiColumnSortDialog-CHFWNES-.js";import"./MenuTrigger-86GtgIEW.js";import"./CompositeItem-BgkQkbdd.js";import"./ToolbarRootContext-HtRVgU8t.js";import"./getDisabledMountTransitionStyles-d1tAtN98.js";import"./getPseudoElementBounds-D5yioJI0.js";import"./chevron-down-Dw7pUuxv.js";import"./index-BP5-XTdL.js";import"./error-ByvTRN4V.js";import"./BaseCbacBanner-DIfT9Iki.js";import"./makeExternalStore-tE7kFU6z.js";import"./Tooltip-QQ-ZZ6je.js";import"./PopoverPopup-BK-uWVpQ.js";import"./debounce-DlkfzBW4.js";import"./useOsdkClient-DVOxrQDN.js";import"./tick-Bh48FDPD.js";import"./DropdownField-Di9jrMNs.js";import"./isEqual-Dhgy7epr.js";import"./withOsdkMetrics-D05rZYt3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
