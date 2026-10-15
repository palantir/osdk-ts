import{f as b,j as a,r as i}from"./iframe-wexfgXTt.js";import{O as u}from"./object-table-CFybmj8k.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C9v061-q.js";import"./index-5jQIelx0.js";import"./Dialog-BQZf2JRs.js";import"./cross-FTqBbSE_.js";import"./svgIconContainer-BE9D8hDG.js";import"./useBaseUiId-tTVgJH6a.js";import"./InternalBackdrop-CDWG4aG1.js";import"./composite-CdBx6VEN.js";import"./index-BurzpHQL.js";import"./index-TxpmNhC2.js";import"./index-DOxlq5kL.js";import"./useEventCallback-CcaR15TA.js";import"./SkeletonBar-DJLe3kJ-.js";import"./LoadingCell-DAJAPapT.js";import"./ColumnConfigDialog-L08jlpQ_.js";import"./DraggableList-Ccq_tIpn.js";import"./search-XEMgs_jY.js";import"./Input-CWdLE-mu.js";import"./useControlled-Brxeqh9t.js";import"./Button-ChxS4llL.js";import"./small-cross-DboWXgDg.js";import"./ActionButton-VgKWBxX4.js";import"./Checkbox-DrBlztvV.js";import"./useValueChanged-Fh4Y4yhu.js";import"./CollapsiblePanel-OJ6hTRI8.js";import"./MultiColumnSortDialog-U-Q4J8yu.js";import"./MenuTrigger-B80w7aFS.js";import"./CompositeItem-vT5UWhUx.js";import"./ToolbarRootContext-Co9O2tJK.js";import"./getDisabledMountTransitionStyles-oJIOUneY.js";import"./getPseudoElementBounds-CwltS7Dj.js";import"./chevron-down-D1BLGLwp.js";import"./index-KggX9Fax.js";import"./error-B2QY0TvC.js";import"./BaseCbacBanner-CeE6PuNF.js";import"./makeExternalStore-CYRdbRiy.js";import"./Tooltip-Dm1DzSzF.js";import"./PopoverPopup-B0NfuOs8.js";import"./debounce-ZweGI_tC.js";import"./useOsdkClient-CEoThPb2.js";import"./tick-D1NWQC9V.js";import"./DropdownField-Cv81jICY.js";import"./isEqual-BLiyP4A_.js";import"./withOsdkMetrics-C9edCeaC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
