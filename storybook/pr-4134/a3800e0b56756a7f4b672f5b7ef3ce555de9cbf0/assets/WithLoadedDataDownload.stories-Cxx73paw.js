import{f as b,j as a,r as i}from"./iframe-SRdlKq9b.js";import{O as u}from"./object-table-CojfwMaQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-s1eLnSv0.js";import"./Table-Ck3px7xM.js";import"./index-DD8FCudr.js";import"./Dialog-C_6idqLc.js";import"./cross-CXZKrh1h.js";import"./svgIconContainer-BcXM3VSp.js";import"./useBaseUiId-B4J9k2RX.js";import"./InternalBackdrop-DZ5UfCCc.js";import"./composite-CZ2o_96f.js";import"./index-B4jPuaLR.js";import"./index-Dji29e1U.js";import"./index-Cn9jOaaC.js";import"./useEventCallback-DlExu_x9.js";import"./SkeletonBar-2487SD1x.js";import"./LoadingCell-BO1-xQ-u.js";import"./ColumnConfigDialog-BzKmQdLo.js";import"./DraggableList-Bq9_-0P2.js";import"./search-BIvi-2TY.js";import"./Input-DAJATtsq.js";import"./useControlled-wCYPw1x7.js";import"./Button-D5IcZbYw.js";import"./small-cross-L_-ELWme.js";import"./ActionButton-C63e1YEm.js";import"./Checkbox-DtjMKN4T.js";import"./useValueChanged-BTouMuh0.js";import"./CollapsiblePanel-B-UdhI4G.js";import"./MultiColumnSortDialog-Cvq3CdhN.js";import"./MenuTrigger-BLJI1uk0.js";import"./CompositeItem-CxO1LzKy.js";import"./ToolbarRootContext-D6KNZ6Ak.js";import"./getDisabledMountTransitionStyles-Bgi2j66A.js";import"./getPseudoElementBounds-CJTp5fJ0.js";import"./chevron-down--GHDODIE.js";import"./index-DhMuGg7E.js";import"./error-DFAQrfbx.js";import"./BaseCbacBanner-SCqPc3nk.js";import"./makeExternalStore-gzodh6iV.js";import"./Tooltip-CWTCUjbr.js";import"./PopoverPopup-qEnUheAt.js";import"./debounce-wqarF4Vc.js";import"./useOsdkClient-jZoOvTCC.js";import"./tick-DneUhZ2Q.js";import"./DropdownField-BkOAd7gw.js";import"./isEqual-DV_ZUJF1.js";import"./withOsdkMetrics-jgsXWTD0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
